import {View, Text, TouchableOpacity} from 'react-native'
import {MenuItem} from "@/type";
import {appwriteConfig} from "@/lib/appwrite";
import {Image} from "@/components/ExpoImage";

const MenuCard = ({item: {image_url, name, price}}: { item: MenuItem }) => {
    const imageUrl = `${image_url}?project=${appwriteConfig.projectId}`;
    return (
        <TouchableOpacity className={"menu-card"}>
            <Image source={{uri: imageUrl}} className={"size-32 absolute -top-10"} contentFit="contain"/>
            <Text className={"text-center text-dark-100 base-bold mb-2"} numberOfLines={1}>{name}</Text>
            <Text className={"body-regular text-gray-200 mb-4"}>From ${price}</Text>
            <TouchableOpacity onPress={() => {
            }}>
                <Text className={"paragraph-bold text-primary"}>Add to Cart +</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
export default MenuCard
