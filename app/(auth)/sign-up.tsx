import {View, Text, Button, Alert} from 'react-native'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {useState} from "react";
import {createUser} from "@/lib/appwrite";

const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({name: "", email: "", password: ""});

    const submit = async () => {

        // Destructure to not get repetitiv with the word form (form.name, ...)
        const {name, email, password} = form;

        if (!name || !email || !password) return Alert.alert("Error", "Please enter a valid email & password ");
        setIsSubmitting(true);
        try {
            // Integrate Appwrite
            await createUser({
                email,
                password,
                name
            })
            router.replace("/");
        } catch (error: any) {
            Alert.alert("Error", error.message);
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <View className={"gap-8 bg-white rounded-lg p-5 mt-5 ml-4 mr-4"}>
            <CustomInput
                placeholder="Enter your name"
                value={form.name}
                onChangeText={(text) => {
                    setForm((prev) => ({...prev, name: text}))
                }}
                label="Full Name"
            />
            <CustomInput
                placeholder="Enter your email"
                value={form.email}
                onChangeText={(text) => {
                    setForm((prev) => ({...prev, email: text}))
                }}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your password"
                value={form.password}
                onChangeText={(text) => {
                    setForm((prev) => ({...prev, password: text}))
                }}
                label="Password"
                secureTextEntry={true}
            />
            <CustomButton
                title={"Sign Up"}
                isLoading={isSubmitting}
                onPress={submit}
            />
            <View className="flex justify-center items-center gap-2 mt-2">
                <Text className="base-regular text-gray-100">Already have an account?</Text>
                <Link href={"/sign-in"} className="text-bold text-primary">
                    Sign In
                </Link>
            </View>
        </View>
    )
}
export default SignIn
