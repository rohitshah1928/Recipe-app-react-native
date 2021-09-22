import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { icons, images, COLORS, SIZES, FONTS } from '../constants'
import { CustomButton } from '../components'

const Login = ({ navigation }) => {

    const renderHeader = () => {
        return (
            <View style={{ height: SIZES.height > 700 ? '65%' : '60%' }}>
                <ImageBackground
                    source={images.loginBackground}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',

                    }}
                    resizeMode='cover'>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                width: '80%',
                                lineHeight: 45,
                                ...FONTS.largeTitle

                            }}>Cooking a Delicious Food Easily</Text>
                    </LinearGradient>
                </ImageBackground>



            </View>
        )

    }

    const renderDetail = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>

                {/* Description */}
                <Text style={{ color: COLORS.gray, width: '70%', marginTop: SIZES.radius, ...FONTS.body3 }}>
                    Discover more than 1200 food recipes in your hands and cooking it easily!
                </Text>

                {/* Buttons */}

                <View style={{ flex: 1, justifyContent: 'center' }}>

                    {/* Login Button */}
                    <CustomButton
                        buttonContainerStyle={{
                            paddingVertical: 15, borderRadius: 20
                        }}
                        buttonText="Login"
                        colors={[COLORS.darkGreen, COLORS.lime]}
                        onPress={() => navigation.replace('Home')}

                    />


                    {/* Signup Button */}
                    <CustomButton
                        buttonText="Sign Up"
                        colors={{}}
                        buttonContainerStyle={{
                            paddingVertical: 15,
                            borderRadius: 20,
                            marginTop: SIZES.radius,
                            borderColor: COLORS.darkLime,
                            borderWidth: 1
                        }}
                        onPress={() => navigation.replace('Home')}

                    />
                </View>


            </View>
        )

    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>

            {/* StatusBar */}
            <StatusBar barStyle='light-content' />

            {/* Header */}
            {renderHeader()}


            {/* Details */}
            {renderDetail()}
        </View>

    )
}

export default Login;