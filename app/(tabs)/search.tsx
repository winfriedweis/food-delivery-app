import {View, Text, Button} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import seed from "@/lib/seed";
import useAppwrite from "@/lib/useAppwrite";
import {getMenu} from "@/lib/appwrite";

const Search = () => {
    const {data, refetch, loading} = useAppwrite({
        fn: getMenu,
        params: {
            category: "",
            query: "",
            limit: 6
        }
    });
    console.log(data);
    return (
        <SafeAreaView>
            <Text>Search</Text>
        </SafeAreaView>
    )
}
export default Search
