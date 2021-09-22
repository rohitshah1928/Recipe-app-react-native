import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity, Animated, StyleSheet
} from 'react-native';
import Viewers from '../components/Viewers';


import { SIZES, FONTS, COLORS, icons, images } from '../constants'

const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

            {/* Image */}
            <View style={{ width: 40, height: 40, marginLeft: 20 }}>
                <Image source={selectedRecipe?.author?.profilePic}
                    style={{ height: 35, width: 35, borderRadius: 20 }} />
            </View>

            {/* Label */}
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <Text style={{ color: COLORS.lightGray2, ...FONTS.body4, }}>Recipe By:</Text>
                <Text style={{ color: COLORS.white, ...FONTS.h3, }}>s{selectedRecipe?.author?.name}</Text>
            </View>

            {/* Button */}
            <TouchableOpacity style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: 'center',
                marginRight: 20,
                borderWidth: 1,
                borderColor: COLORS.lightGreen1
            }} onPress={() => console.log("View Profile")}>
                <Image source={icons.rightArrow} style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.lightGreen1
                }} />
            </TouchableOpacity>


        </View>
    )
}
const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
    return (
        <View style={styles.recipeCardContainer}>

            <RecipeCreatorCardDetail
                selectedRecipe={selectedRecipe} />

        </View>
    )
}

const Recipe = ({ navigation, route }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let { recipe } = route.params;
        setSelectedRecipe(recipe)

    }, [])
    const renderHeaderBar = () => {
        return (
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 90,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                paddingBottom: 10
            }}>

                {/* Screen Overlay */}

                <Animated.View style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: COLORS.black,
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                        outputRange: [0, 1]
                    })
                }} />

                {/* Header Bar Title */}


                <Animated.View style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingBottom: 10,
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                        outputRange: [0, 1]
                    }),
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                                outputRange: [50, 0],
                                extrapolate: 'clamp'
                            })
                        }
                    ]
                }}>

                    <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>Recipe By:</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{selectedRecipe?.author?.name}</Text>
                </Animated.View>

                {/* back Button */}
                <TouchableOpacity style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: COLORS.lightGray,
                    backgroundColor: COLORS.transparentBlack5
                }} onPress={() => navigation.goBack()}>

                    <Image source={icons.back}
                        style={{ height: 15, width: 15, tintColor: COLORS.lightGray, marginRight: 2 }} />

                </TouchableOpacity>


                {/* Bookmark Button */}

                <TouchableOpacity style={{ justifyContent: 'center', height: 35, width: 35, alignItems: 'center' }}>
                    <Image
                        source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                        style={{ height: 30, width: 30, tintColor: COLORS.darkGreen }} />
                </TouchableOpacity>

            </View>
        )
    }
    const renderRecipeCardHeader = () => {
        return (
            <View style={{ alignItems: 'center', overflow: 'hidden', marginTop: -1000, paddingTop: 1000 }}>

                {/* Background Images */}
                <Animated.Image
                    source={selectedRecipe?.image}
                    resizeMode='contain'
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [{
                            translateY: scrollY.interpolate({
                                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                            })
                        }, {
                            translateY: scrollY.interpolate({
                                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                outputRange: [2, 1, 0.75]
                            })
                        }]
                    }} />

                {/* Recipe Creator Card */}
                <Animated.View style={{
                    position: 'absolute',
                    left: 30,
                    right: 30,
                    height: 80,
                    bottom: 10,
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 175, 250],
                                outputRange: [0, 0, 100],
                                extrapolate: 'clamp'
                            })
                        }
                    ]
                }}>
                    <RecipeCreatorCardInfo
                        selectedRecipe={selectedRecipe} />

                </Animated.View>
            </View>

        )

    }

    const renderRecipeInfo = () => {
        return (
            <View style={{
                flexDirection: 'row',
                height: 130,
                width: SIZES.width,
                paddingHorizontal: 30,
                paddingVertical: 20,
                alignItems: 'center'
            }}>

                {/* Recipe */}
                <View style={{
                    flex: 1.5,
                    justifyContent: 'center'
                }}>
                    <Text style={{ ...FONTS.h2 }}>{selectedRecipe?.name}</Text>
                    <Text style={{ marginTop: 5, color: COLORS.lightGray2, ...FONTS.body4 }}>{selectedRecipe?.duration} | {selectedRecipe?.serving} Serving</Text>

                </View>


                {/* Viewer */}
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Viewers viewList={selectedRecipe?.viewers} />

                </View>

            </View>
        )
    }
    const renderIngredientHeader = () => {
        return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                marginTop: SIZES.radius,
                marginBottom: SIZES.padding
            }}>

                <Text style={{ flex: 1, ...FONTS.h3 }}>Ingredients</Text>
                <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>{selectedRecipe?.ingredients.lenght}</Text>

            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header  */}
                        {renderRecipeCardHeader()}

                        {/* Info  */}
                        {renderRecipeInfo()}


                        {/* Ingredient Title */}
                        {renderIngredientHeader()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {
                        nativeEvent: { contentOffset: { y: scrollY } }
                    }
                ], { useNativeDriver: true })}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 5 }}>

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 50,
                                width: 50,
                                borderRadius: 5,
                                backgroundColor: COLORS.lightGray

                            }}>
                            <Image source={item.icon} style={{ height: 40, width: 40 }} />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.body3 }}>
                                {item.description}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.body3 }}>
                                {item.quantity}

                            </Text>

                        </View>


                    </View>
                )}
                ListFooterComponent={
                    <View style={{ marginBottom: 100 }} />

                }
            />

            {/* Header Bar */}
            {renderHeaderBar()}
        </View>
    )
}
const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.transparentBlack9


    }
})
export default Recipe;