import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Image,
    TextInput

} from 'react-native';
import { COLORS, icons, images, dummyData, FONTS, SIZES } from '../constants';
import CategoryCard from '../components/CategoryCard'
import { TrendingCard } from '../components';

const Home = ({ navigation }) => {

    const renderHeader = () => {
        return (


            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: SIZES.padding, height: 80 }}>

                {/* Text */}
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.darkGreen }}>
                        Hey Rohit Shah
                    </Text>
                    <Text style={{ color: COLORS.gray, marginTop: 3, ...FONTS.body3 }}>
                        What you want to cook today?
                    </Text>
                </View>

                {/* Image */}

                <TouchableOpacity onPress={() => console.log("clicked profile")}>
                    <Image
                        source={images.profile}
                        style={{ height: 50, width: 50, borderRadius: 20 }} />

                </TouchableOpacity>

            </View>
        )
    }

    const renderSearchBar = () => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray
            }}>

                <Image
                    source={icons.search}
                    style={{ tintColor: COLORS.gray, height: 20, width: 20 }} />

                <TextInput
                    style={{ marginLeft: SIZES.radius, ...FONTS.body3 }}
                    placeholder="Search Recipes"
                    placeholderTextColor={COLORS.gray} />


            </View>
        )

    }
    const renderSeeRecipeCard = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                borderRadius: 10,
                backgroundColor: COLORS.lightGreen
            }}>
                <View style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={images.recipe}
                        style={{ width: 80, height: 80 }} />
                </View>

                <View style={{ flex: 1, paddingVertical: SIZES.radius }}>
                    <Text style={{ width: '70%', ...FONTS.body4 }}>
                        You have 12 recipes that you have not tried yet!!
                    </Text>

                    <TouchableOpacity
                        onPress={() => console.log("See Recipe")}
                        style={{ marginTop: 10 }}>
                        <Text style={{ color: COLORS.darkGreen, ...FONTS.h4, textDecorationLine: 'underline' }}>
                            See Recipes
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        )

    }
    const renderTrendingSection = () => {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <Text style={{ marginHorizontal: SIZES.padding, ...FONTS.h2 }}>
                    Trending Recipe
                </Text>

                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                containerStyle={{ marginLeft: index == 0 ? SIZES.padding : 0 }}
                                onPress={() => navigation.navigate('Recipe', { recipe: item })}
                                recipeItem={item}
                            />
                        )
                    }} />
            </View>
        )
    }

    const renderCategoryHeader = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: SIZES.padding }}>

                <Text style={{ flex: 1, ...FONTS.h2 }}>
                    Category
                </Text>
                <TouchableOpacity>
                    <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
        )

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        {renderHeader()}

                        {/* SearchBar */}
                        {renderSearchBar()}


                        {/* See Recipe Card */}
                        {renderSeeRecipeCard()}

                        {/* Trending Screen */}
                        {renderTrendingSection()}


                        {/* Category header */}
                        {renderCategoryHeader()}

                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            containerStyle={{ marginHorizontal: SIZES.padding }}
                            categoryItem={item}
                            onPress={() => navigation.navigate('Recipe', { recipe: item })}
                        />
                    )
                }}
                ListFooterComponent={
                    <View style={{ marginBottom: 100 }}>

                    </View>
                }
            />

        </SafeAreaView>
    )
}

export default Home;