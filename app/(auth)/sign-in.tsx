import {View, Text, Button} from 'react-native'
import {router} from "expo-router";

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            {/*Button statt TouchableOpacity für simple Buttons*/}
            <Button title="Sign Up" onPress={() => router.push("/sign-up")}/>
        </View>
    )
}
export default SignIn
