import { useTheme } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Image, ImageComponent, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MasonryList from 'reanimated-masonry-list';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBackdrop from '../components/CustomBackdrop';
import FitterView from '../components/FitterView';
import DetailsScreen from './DetailsScreen';
import { RootStackScreenProps } from '../navigators/RootNavigator'

import { TabsStackScreenProps } from '../navigators/TabsNavigator';
import CheckBox from '@react-native-community/checkbox';

const URL_IMG = "https://manofmany.com/wp-content/uploads/2021/05/Best-Short-Hairstyles-for-Men.jpg";
const URL_SHOE = "https://www.barkershoes.com/cdn/shop/collections/8I5A5326_600x375_crop_center.jpg?v=1618574799";

const CATEGORIES = [
    "Clothing",
    "Shoes",
    "Accessories",
    "Hat",
    "Backpack",
];


const CartScreen = () => {
    const { colors } = useTheme();
    const [categoryIndex, setCategoryIndex] = useState(0);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [isCount, setCount] = useState(1);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);


    return (
        <SafeAreaView style={{ paddingVertical: 18, gap: 16, flex: 1, paddingBottom: 100 }}>
            {/* Header */}
            <View style={{ paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 8, }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity>
                        <Icon name='angle-left' size={30} color={colors.text} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 18, fontWeight: "500", color: colors.text, paddingHorizontal: 20 }}>
                        My bag (3)
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ fontSize: 14, fontWeight: "500", color: colors.text, opacity: 0.75, paddingHorizontal: 5 }}>
                        Select all
                    </Text>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                </View>
            </View>
            <ScrollView>
                {/* Voucher */}
                <View style={{ paddingHorizontal: 18, paddingVertical: 14, backgroundColor: '#E0F2EE', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Icon name='gift' size={18} color={'#33A88A'} />
                        <Text style={{ paddingHorizontal: 10, color: colors.text }}>
                            You have a discount voucher for the products
                        </Text>
                    </View>

                    <Icon name='angle-right' size={18} color={colors.text} />

                </View>


                <View style={{ paddingHorizontal: 18, borderBottomWidth: 1, }}>

                    {/* Card */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ margin: -5, }}
                        />

                        <Image source={{ uri: URL_IMG }} style={{ width: 100, aspectRatio: 1, borderRadius: 5, marginHorizontal: 10 }} />

                        <View style={{ gap: 6, flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                                PUMA Everyday Mussle
                            </Text>

                            <Text style={{ fontWeight: '600', fontSize: 14, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                                XL, ChAmpx, Pudemrs, Polyenxfg, ....
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, opacity: 0.5, textDecorationLine: 'line-through', marginEnd: 20 }} numberOfLines={1}>
                                    $54.00
                                </Text>

                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#33a88a' }} numberOfLines={1}>
                                    $44.00
                                </Text>
                            </View>


                            {/* Number */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: colors.border,
                                padding: 2,
                                width: 82,
                                borderRadius: 5,
                            }}>
                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.max(1, isCount - 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopStartRadius: 3,
                                        borderBottomStartRadius: 3,
                                    }}>
                                    <Icon name="minus" size={12} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.text, backgroundColor: colors.background, width: 25, height: 25, textAlign: 'center', textAlignVertical: 'center' }}>{isCount}</Text>

                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.min(10, isCount + 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopEndRadius: 3,
                                        borderBottomEndRadius: 3,
                                    }}>
                                    <Icon name="plus" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Card */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ margin: -5, }}
                        />

                        <Image source={{ uri: URL_IMG }} style={{ width: 100, aspectRatio: 1, borderRadius: 5, marginHorizontal: 10 }} />

                        <View style={{ gap: 6, flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                                PUMA Everyday Mussle
                            </Text>

                            <Text style={{ fontWeight: '600', fontSize: 14, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                                XL, ChAmpx, Pudemrs, Polyenxfg, ....
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, opacity: 0.5, textDecorationLine: 'line-through', marginEnd: 20 }} numberOfLines={1}>
                                    $54.00
                                </Text>

                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#33a88a' }} numberOfLines={1}>
                                    $44.00
                                </Text>
                            </View>


                            {/* Number */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: colors.border,
                                padding: 2,
                                width: 82,
                                borderRadius: 5,
                            }}>
                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.max(1, isCount - 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopStartRadius: 3,
                                        borderBottomStartRadius: 3,
                                    }}>
                                    <Icon name="minus" size={12} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.text, backgroundColor: colors.background, width: 25, height: 25, textAlign: 'center', textAlignVertical: 'center' }}>{isCount}</Text>

                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.min(10, isCount + 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopEndRadius: 3,
                                        borderBottomEndRadius: 3,
                                    }}>
                                    <Icon name="plus" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Card */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ margin: -5, }}
                        />

                        <Image source={{ uri: URL_IMG }} style={{ width: 100, aspectRatio: 1, borderRadius: 5, marginHorizontal: 10 }} />

                        <View style={{ gap: 6, flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                                PUMA Everyday Mussle
                            </Text>

                            <Text style={{ fontWeight: '600', fontSize: 14, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                                XL, ChAmpx, Pudemrs, Polyenxfg, ....
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, opacity: 0.5, textDecorationLine: 'line-through', marginEnd: 20 }} numberOfLines={1}>
                                    $54.00
                                </Text>

                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#33a88a' }} numberOfLines={1}>
                                    $44.00
                                </Text>
                            </View>


                            {/* Number */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: colors.border,
                                padding: 2,
                                width: 82,
                                borderRadius: 5,
                            }}>
                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.max(1, isCount - 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopStartRadius: 3,
                                        borderBottomStartRadius: 3,
                                    }}>
                                    <Icon name="minus" size={12} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.text, backgroundColor: colors.background, width: 25, height: 25, textAlign: 'center', textAlignVertical: 'center' }}>{isCount}</Text>

                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.min(10, isCount + 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopEndRadius: 3,
                                        borderBottomEndRadius: 3,
                                    }}>
                                    <Icon name="plus" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Card */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ margin: -5, }}
                        />

                        <Image source={{ uri: URL_IMG }} style={{ width: 100, aspectRatio: 1, borderRadius: 5, marginHorizontal: 10 }} />

                        <View style={{ gap: 6, flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                                PUMA Everyday Mussle
                            </Text>

                            <Text style={{ fontWeight: '600', fontSize: 14, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                                XL, ChAmpx, Pudemrs, Polyenxfg, ....
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, opacity: 0.5, textDecorationLine: 'line-through', marginEnd: 20 }} numberOfLines={1}>
                                    $54.00
                                </Text>

                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#33a88a' }} numberOfLines={1}>
                                    $44.00
                                </Text>
                            </View>


                            {/* Number */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: colors.border,
                                padding: 2,
                                width: 82,
                                borderRadius: 5,
                            }}>
                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.max(1, isCount - 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopStartRadius: 3,
                                        borderBottomStartRadius: 3,
                                    }}>
                                    <Icon name="minus" size={12} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.text, backgroundColor: colors.background, width: 25, height: 25, textAlign: 'center', textAlignVertical: 'center' }}>{isCount}</Text>

                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.min(10, isCount + 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopEndRadius: 3,
                                        borderBottomEndRadius: 3,
                                    }}>
                                    <Icon name="plus" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Card */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ margin: -5, }}
                        />

                        <Image source={{ uri: URL_IMG }} style={{ width: 100, aspectRatio: 1, borderRadius: 5, marginHorizontal: 10 }} />

                        <View style={{ gap: 6, flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                                PUMA Everyday Mussle
                            </Text>

                            <Text style={{ fontWeight: '600', fontSize: 14, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                                XL, ChAmpx, Pudemrs, Polyenxfg, ....
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, opacity: 0.5, textDecorationLine: 'line-through', marginEnd: 20 }} numberOfLines={1}>
                                    $54.00
                                </Text>

                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#33a88a' }} numberOfLines={1}>
                                    $44.00
                                </Text>
                            </View>


                            {/* Number */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: colors.border,
                                padding: 2,
                                width: 82,
                                borderRadius: 5,
                            }}>
                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.max(1, isCount - 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopStartRadius: 3,
                                        borderBottomStartRadius: 3,
                                    }}>
                                    <Icon name="minus" size={12} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.text, backgroundColor: colors.background, width: 25, height: 25, textAlign: 'center', textAlignVertical: 'center' }}>{isCount}</Text>

                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.min(10, isCount + 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopEndRadius: 3,
                                        borderBottomEndRadius: 3,
                                    }}>
                                    <Icon name="plus" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Card */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={{ margin: -5, }}
                        />

                        <Image source={{ uri: URL_IMG }} style={{ width: 100, aspectRatio: 1, borderRadius: 5, marginHorizontal: 10 }} />

                        <View style={{ gap: 6, flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                                PUMA Everyday Mussle
                            </Text>

                            <Text style={{ fontWeight: '600', fontSize: 14, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                                XL, ChAmpx, Pudemrs, Polyenxfg, ....
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, opacity: 0.5, textDecorationLine: 'line-through', marginEnd: 20 }} numberOfLines={1}>
                                    $54.00
                                </Text>

                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#33a88a' }} numberOfLines={1}>
                                    $44.00
                                </Text>
                            </View>


                            {/* Number */}
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: colors.border,
                                padding: 2,
                                width: 82,
                                borderRadius: 5,
                            }}>
                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.max(1, isCount - 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopStartRadius: 3,
                                        borderBottomStartRadius: 3,
                                    }}>
                                    <Icon name="minus" size={12} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.text, backgroundColor: colors.background, width: 25, height: 25, textAlign: 'center', textAlignVertical: 'center' }}>{isCount}</Text>

                                <TouchableOpacity
                                    onPress={() => setCount((isCount) => Math.min(10, isCount + 1))}
                                    style={{
                                        backgroundColor: colors.background,
                                        width: 25,
                                        aspectRatio: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTopEndRadius: 3,
                                        borderBottomEndRadius: 3,
                                    }}>
                                    <Icon name="plus" size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <View style={{ position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: 18, paddingVertical: 16, backgroundColor: 'white'}}>

                {/* Price and Add button */}
                <View style={{ flexDirection: 'row', alignItems: "center", gap: 8 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: colors.text, opacity: 0.5, marginBottom: 2 }}>
                            Total
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: "500", color: '#33a88a' }}>
                            ${(2000).toLocaleString()}
                        </Text>
                    </View>

                    <SafeAreaView edges={['bottom']}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: colors.primary,
                                height: 62,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 64,
                                padding: 12,
                                flexDirection: 'row',
                            }}>
                            <Text style={{ color: colors.background, fontSize: 16, fontWeight: "600", paddingHorizontal: 24 }}>Checkout (2)</Text>

                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
            </View>

        </SafeAreaView >

    );

}

export default CartScreen
