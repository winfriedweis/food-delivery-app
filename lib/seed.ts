import {ID} from "react-native-appwrite";
import {appwriteConfig, tablesDB} from "./appwrite";
import dummyData from "./data";

interface Category {
    name: string;
    description: string;
}

interface Customization {
    name: string;
    price: number;
    type: "topping" | "side" | "size" | "crust" | string;
}

interface MenuItem {
    name: string;
    description: string;
    image_url: string;
    price: number;
    rating: number;
    calories: number;
    protein: number;
    category_name: string;
    customizations: string[];
}

interface DummyData {
    categories: Category[];
    customizations: Customization[];
    menu: MenuItem[];
}

// ensure dummyData has correct shape
const data = dummyData as DummyData;

/**
 * Löscht alle Zeilen aus einer Table
 */
async function clearTable(tableId: string): Promise<void> {
    try {
        const list = await tablesDB.listRows({
            databaseId: appwriteConfig.databaseId,
            tableId: tableId,
        });

        await Promise.all(
            list.rows.map((row: any) =>
                tablesDB.deleteRow({
                    databaseId: appwriteConfig.databaseId,
                    tableId: tableId,
                    rowId: row.$id,
                })
            )
        );
    } catch (error) {
        console.error(`Error clearing table ${tableId}:`, error);
    }
}

async function getImageUrl(imageUrl: string): Promise<string> {
    return imageUrl;
}

async function seed(): Promise<void> {
    try {
        console.log("🌱 Starting seeding...");

        // 1. Clear all tables
        console.log("🧹 Clearing tables...");
        await clearTable(appwriteConfig.categoriesTableId);
        await clearTable(appwriteConfig.customizationsTableId);
        await clearTable(appwriteConfig.menuTableId);
        await clearTable(appwriteConfig.menuCustomizationsTableId);

        // 2. Create Categories
        console.log("📂 Creating categories...");
        const categoryMap: Record<string, string> = {};
        for (const cat of data.categories) {
            const row = await tablesDB.createRow({
                databaseId: appwriteConfig.databaseId,
                tableId: appwriteConfig.categoriesTableId,
                rowId: ID.unique(),
                data: {
                    name: cat.name,
                    description: cat.description,
                },
            });
            categoryMap[cat.name] = row.$id;
            console.log(`  ✓ Created category: ${cat.name}`);
        }

        // 3. Create Customizations
        console.log("🍕 Creating customizations...");
        const customizationMap: Record<string, string> = {};
        for (const cus of data.customizations) {
            const row = await tablesDB.createRow({
                databaseId: appwriteConfig.databaseId,
                tableId: appwriteConfig.customizationsTableId,
                rowId: ID.unique(),
                data: {
                    name: cus.name,
                    price: cus.price,
                    type: cus.type,
                },
            });
            customizationMap[cus.name] = row.$id;
            console.log(`  ✓ Created customization: ${cus.name}`);
        }

        // 4. Create Menu Items
        console.log("🍔 Creating menu items...");
        const menuMap: Record<string, string> = {};
        for (const item of data.menu) {
            const imageUrl = await getImageUrl(item.image_url);

            const row = await tablesDB.createRow({
                databaseId: appwriteConfig.databaseId,
                tableId: appwriteConfig.menuTableId,
                rowId: ID.unique(),
                data: {
                    name: item.name,
                    description: item.description,
                    image_url: imageUrl,
                    price: item.price,
                    rating: item.rating,
                    calories: item.calories,
                    protein: item.protein,
                    categories: categoryMap[item.category_name],
                },
            });

            menuMap[item.name] = row.$id;
            console.log(`  ✓ Created menu item: ${item.name}`);

            // 5. Create menu_customizations (Junction Table)
            // 🔧 WICHTIG: Korrektur hier!
            for (const cusName of item.customizations) {
                try {
                    await tablesDB.createRow({
                        databaseId: appwriteConfig.databaseId,
                        tableId: appwriteConfig.menuCustomizationsTableId,
                        rowId: ID.unique(),
                        data: {
                            menu: row.$id,
                            customizations: customizationMap[cusName],
                        },
                    });
                    console.log(`    ✓ Linked customization: ${cusName}`);
                } catch (error) {
                    console.error(`    ✗ Error linking ${cusName}:`, error);
                    // Wir ignorieren den Fehler und fahren fort
                }
            }
        }

        console.log("✅ Seeding complete!");
        console.log(`   - ${Object.keys(categoryMap).length} categories created`);
        console.log(`   - ${Object.keys(customizationMap).length} customizations created`);
        console.log(`   - ${Object.keys(menuMap).length} menu items created`);

    } catch (error) {
        console.error("❌ Seeding failed:", error);
        throw error;
    }
}

export default seed;
