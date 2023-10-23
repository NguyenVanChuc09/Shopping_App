import React, { ReactNode, useCallback, useRef, useState } from 'react'
import { FlatList, Image, ImageComponent, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import PriceRangeSelector from './PriceRangeSelector';
import Icon from 'react-native-vector-icons/FontAwesome';

const MAX_PRICE = 500;

const SPORTS = [
    {
        id: 'running',
        label: 'Running',
        itemCount: 1,
    },
    {
        id: 'baseball',
        label: 'Baseball',
        itemCount: 2,
    },
    {
        id: 'volleyball',
        label: 'Volleyball',
        itemCount: 3,
    },
    {
        id: 'basketball',
        label: 'Basketball',
        itemCount: 4,
    },
    {
        id: 'golf',
        label: 'Golf',
        itemCount: 5,
    },
]
const COLORS = [
    {
        color: "red",
        label: "Red",
        itemCount: 1,
    },
    {
        color: "white",
        label: "White",
        itemCount: 2,
    },
    {
        color: "yellow",
        label: "Yellow",
        itemCount: 3,
    },
    {
        color: "blue",
        label: "Blue",
        itemCount: 4,
    },
    {
        color: "green",
        label: "Green",
        itemCount: 5,
    },
    {
        color: "orange",
        label: "Orange",
        itemCount: 7,
    },
];

const SLEEVES = [
    {
        id: 'sortsleeve',
        label: 'Sort Sleeve',
        itemCount: 1,
    },
    {
        id: 'longsleeve',
        label: 'Long Sleeve',
        itemCount: 2,
    },
    {
        id: 'sleeveless',
        label: 'Sleeve Less',
        itemCount: 3,
    },

]

const FitterView = () => {

    const [startPrice, setStartPrice] = useState(50);
    const [endPrice, setEndPrice] = useState(250);
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();


    return (
        <View style={{ paddingVertical: 16, gap: 18, flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18 }}>
                        <Text style={{ flex: 1, fontSize: 20, fontWeight: '700', color: colors.text }}>
                            Fitters
                        </Text>
                        <TouchableOpacity>
                            <Text>
                                Reset
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Range Selector */}

                    <PriceRangeSelector
                        minPrice={0}
                        maxPrice={MAX_PRICE}
                        startPrice={startPrice}
                        endPrice={endPrice}
                        onStartPriceChange={setStartPrice}
                        onEndPriceChange={setEndPrice}
                    />

                    {/* Category */}
                    <View>
                        <View style={{ paddingHorizontal: 18, paddingVertical: 12 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12, color: colors.text }}>
                                Sports
                            </Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                                {SPORTS.map((item, i) => {
                                    return (
                                        <Chip itemCount={item.itemCount} label={item.label} isSelect={i === 0} />
                                    )
                                })}

                            </View>
                        </View>
                    </View>

                    {/* Color */}
                    <View>
                        <View style={{ paddingHorizontal: 18, paddingVertical: 12 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12, color: colors.text }}>
                                Color
                            </Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                                {COLORS.map((item, i) => {
                                    return (
                                        <Chip
                                            itemCount={item.itemCount}
                                            label={item.label}
                                            left={
                                                <View
                                                    style={{
                                                        backgroundColor: item.color,
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: 8,
                                                    }} />
                                            }
                                            isSelect={i === 0} />
                                    )
                                })}

                            </View>
                        </View>
                    </View>

                    {/* Sleeve */}
                    <View>
                        <View style={{ paddingHorizontal: 18, paddingVertical: 12 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12, color: colors.text }}>
                                Sleeve
                            </Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                                {SLEEVES.map((item, i) => {
                                    return (
                                        <Chip
                                            itemCount={item.itemCount}
                                            label={item.label}
                                            isSelect={i === 0} />
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                    

                </View>
            </ScrollView>
            <SafeAreaView
                edges={['bottom']}
                style={{ paddingHorizontal: 18 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.primary,
                        height: 64, 
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 64,
                        flexDirection: "row",
                        position: "relative"
                    }}>
                    <Text style={{ color: colors.background, fontSize: 18, fontWeight: "600", }}>Apply filters</Text>

                    <View

                        style={{
                            width: 40,
                            aspectRatio: 1,
                            borderRadius: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: colors.background,
                            position: "absolute",
                            top: 12,
                            bottom: 12,
                            right: 12,
                        }}>
                        <Icon name='angle-right' size={24} color={colors.text}></Icon>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>

        </View>
    )
}

export default FitterView;

const Chip = ({ isSelect, label, itemCount, left }: { isSelect: boolean, label: string, itemCount: number, left?: ReactNode }) => {

    const { colors } = useTheme();

    return (
        <View
            key={itemCount}
            style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 100,
                backgroundColor: isSelect ? colors.text : colors.background,
                flexDirection: "row"
            }}>
            {!!left && <View style={{ margin: 4 }}>{left}</View>}
            <Text style={{
                color: isSelect ? colors.background : colors.text,
                fontSize: 14,
                fontWeight: '500',

            }}>
                {label} [{itemCount}]
            </Text>
        </View>
    )
}