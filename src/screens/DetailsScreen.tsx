import React, { useRef, useState } from 'react'
import { Text, View, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from '@gorhom/bottom-sheet';

const DetailsScreen = ({ navigation, route: { params: { id } } }: RootStackScreenProps<"DetailsScreen">) => {

  const { colors } = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const insert = useSafeAreaInsets();
  const [isCount, setCount] = useState(1);
  const SIZE = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
  const [sizeIndex, setSizeIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>

      <Image source={{ uri: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" }}
        style={{ flex: 1 }} />

      <SafeAreaView edges={["top"]} style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <StatusBar barStyle={"light-content"} />
        <View style={{ flexDirection: 'row', alignItems: "center", padding: 20, gap: 12 }}>
          <TouchableOpacity
            onPress={() => { navigation.goBack() }}
            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.border,
            }}>
            <Icon name='angle-left' size={24} color={colors.background}></Icon>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity

            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.border,
            }}>
            <Icon name='heart-o' size={24} color={colors.background}></Icon>
          </TouchableOpacity>
          <TouchableOpacity

            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.border,
            }}>
            <Icon name='cart-plus' size={24} color={colors.background}></Icon>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <BottomSheet
        snapPoints={[64, 400]}
        index={0}
        bottomInset={insert.bottom + 20}
        detached={true}
        style={{ marginHorizontal: 20 }}
        backgroundStyle={{
          borderRadius: 24,
          backgroundColor: colors.background
        }}>
        <View style={{ paddingHorizontal: 16, gap: 16 }}>

          {/* Title */}
          <Text
            style={{ fontSize: 20, fontWeight: "600", color: colors.text }}>
            PUMA Everyday Mussle
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

            <View style={{ flex: 1 }}>
              {/* Star */}
              <View style={{ flexDirection: 'row', gap: 2 }}>
                {new Array(5).fill("").map((_, i) => (
                  <Icon
                    key={i}
                    name={(i < 3 ? "star" : "star-o")}
                    size={20}
                    color={"#facc15"} />
                ))}
              </View>

              {/* Review */}
              <View>
                <Text style={{ fontSize: 14, fontWeight: "500", color: colors.text, opacity: 0.5, marginTop: 4 }}>
                  3.0 (40k Review)
                </Text>
              </View>
            </View>

            {/* Number */}
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              backgroundColor: colors.primary,
              padding: 4,
              borderRadius: 64,
            }}>
              <TouchableOpacity
                onPress={() => setCount((isCount) => Math.max(1, isCount - 1))}
                style={{
                  backgroundColor: colors.border,
                  width: 33,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 33,
                }}>
                <Icon name="minus" size={12} color={colors.text} />
              </TouchableOpacity>

              <Text style={{ fontSize: 16, fontWeight: "600", color: colors.background }}>{isCount}</Text>

              <TouchableOpacity
                onPress={() => setCount((isCount) => Math.min(10, isCount + 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 33,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 33,
                }}>
                <Icon name="plus" size={12} color={colors.text} />
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, fontSize: 16, fontWeight: "600", color: colors.text, textTransform: "uppercase" }}>
              Model is 6'1'' Size M
            </Text>

            <Text style={{ color: colors.text, opacity: 0.5 }}>
              Size guide
            </Text>
          </View>

          {/* Size */}
          <View>
            <FlatList
              data={SIZE}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 4.5,
              }}
              renderItem={({ item, index }) => {
                const isSelected = sizeIndex === index;
                return (
                  <TouchableOpacity
                    onPress={() => setSizeIndex(index)}
                    style={{
                      backgroundColor: isSelected ? colors.primary : colors.card,
                      borderColor: colors.border,
                      borderRadius: 100,
                      width: 42,
                      aspectRatio: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: isSelected ? colors.background : colors.text,
                        fontSize: 14,
                        fontWeight: "600"
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>

          {/* Description */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.text,
                marginBottom: 6,
              }}>
              Description
            </Text>
            <Text
              style={{
                color: colors.text,
                opacity: 0.5,
              }}
              numberOfLines={3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium quod sint. Exercitationem eius dolorem tempora corporis possimus reiciendis labore obcaecati qui quia, sint, facilis eveniet temporibus, optio dolor sunt!
            </Text>
          </View>

          {/* Price and Add button */}
          <View style={{ flexDirection: 'row', alignItems: "center", gap: 8 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: colors.text, opacity: 0.5, marginBottom: 2 }}>
                Total
              </Text>
              <Text style={{fontSize: 20, fontWeight: "500", color: colors.text}}>
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
                <Text style={{ color: colors.background, fontSize: 16, fontWeight: "600", paddingHorizontal: 24}}>Add to cart</Text>

                <TouchableOpacity

                  style={{
                    width: 40,
                    aspectRatio: 1,
                    borderRadius: 52,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.background,
                  }}>
                  <Icon name='angle-right' size={24} color={colors.text}></Icon>
                </TouchableOpacity>

              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </View>
      </BottomSheet>
    </View>
  )
}

export default DetailsScreen