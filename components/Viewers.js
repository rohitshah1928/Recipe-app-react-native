import React from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity, Animated, StyleSheet
} from 'react-native';

import { SIZES, FONTS, COLORS, icons, images } from '../constants'


const Viewers = ({ viewList }) => {


    if (viewList?.length == 0) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>Be the first one to try this</Text>

            </View>

        )
    }
    else if (viewList?.length <= 4) {
        return (
            <View>
                {/* profile  */}
                <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    {viewList?.map((item, index) => (
                        <View key={index} style={{
                            height: 50,
                            width: 50,
                            marginLeft: index == 0 ? 0 : -20
                        }}>
                            <Image source={item.profilePic} style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25
                            }} />

                        </View>
                    ))}
                </View>

                {/* Text */}
                <Text style={{
                    color: COLORS.lightGray2, ...FONTS.body4,
                    textAlign: 'right', lineHeight: 18
                }}>{viewList?.length} People</Text>

                <Text style={{
                    color: COLORS.lightGray2, ...FONTS.body4,
                    textAlign: 'right', lineHeight: 18
                }}> Already try this!</Text>
            </View>

        )
    }
    else {
        return (
            <View>
                {/* profile  */}
                <View style={{
                    marginBottom: 10,
                    flexDirection: 'row', justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    {viewList?.map((item, index) => {

                        if (index <= 2) {
                            return (
                                <View
                                    key={index}
                                    style={{ height: 50, width: 50, marginLeft: index == 0 ? 0 : -20 }} >

                                    <Image source={item.profilePic} style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25
                                    }} />
                                </View>
                            )

                        }
                        if (index === 3) {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        height: 50, width: 50,
                                        alignItems: 'center', justifyContent: 'center',
                                        marginLeft: -20, borderRadius: 25, backgroundColor: COLORS.darkGreen
                                    }} >

                                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                                        {viewList?.length - 3} +
                                    </Text>


                                </View>
                            )
                        }
                        <View key={index} style={{
                            height: 50,
                            width: 50,
                            marginLeft: index == 0 ? 0 : -20
                        }}>
                            <Image source={item.profilePic} style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25
                            }} />

                        </View>
                    })}
                </View>

                {/* Text */}
                <Text style={{
                    color: COLORS.lightGray2, ...FONTS.body4,
                    textAlign: 'right', lineHeight: 18
                }}>{viewList?.length} People</Text>

                <Text style={{
                    color: COLORS.lightGray2, ...FONTS.body4,
                    textAlign: 'right', lineHeight: 18
                }}> Already try this!</Text>
            </View>
        )
    }



}

export default Viewers;