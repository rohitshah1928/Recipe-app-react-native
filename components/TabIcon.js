import React from 'react'
import { COLORS } from '../constants';
import { View, Image } from 'react-native';

const TabIcon = ({ focused, icon }) => {
    return (
        <View style={{ height: 80, width: 50, justifyContent: 'center', alignItems: 'center' }}>

            <Image
                source={icon}
                resizeMode='contain'
                style={{
                    height: 25,
                    width: 25,

                    tintColor: focused ? COLORS.darkGreen : COLORS.lightLime
                }} />

            {focused && <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                borderTopLeftRadius: 5,
                borderTopRightColor: 5,
                height: 5,
                backgroundColor: COLORS.darkGreen,


            }}>

            </View>}
        </View>
    )
}

export default TabIcon;
