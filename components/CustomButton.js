import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS } from '../constants'

const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }) => {
    if (colors.length > 0) {
        return (
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ ...buttonContainerStyle }}
                    colors={colors}


                >

                    <Text style={{ textAlign: 'center', ...FONTS.h2, color: COLORS.white }}>
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

        )

    } else {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }}>
                <Text style={{
                    textAlign: 'center', ...FONTS.h2,
                    color: COLORS.lightGreen
                }}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )

    }
}

export default CustomButton;