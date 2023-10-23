import { useTheme } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Image, ImageComponent, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MasonryList from 'reanimated-masonry-list';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBackdrop from '../components/CustomBackdrop';
import FitterView from '../components/FitterView';
import DetailsScreen from './DetailsScreen';

import { TabsStackScreenProps } from '../navigators/TabsNavigator';

const URL_IMG = "https://manofmany.com/wp-content/uploads/2021/05/Best-Short-Hairstyles-for-Men.jpg";
const URL_SHOE = "https://www.barkershoes.com/cdn/shop/collections/8I5A5326_600x375_crop_center.jpg?v=1618574799";

const CATEGORIES = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Hat",
  "Backpack",
];


const HomeScreen = ({ navigation }: TabsStackScreenProps<"Home">) => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
 
  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 18, gap: 16 }}>
        {/* Header */}
        <View style={{ paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Image source={{ uri: URL_IMG }} style={{ width: 52, aspectRatio: 1, borderRadius: 52 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8, color: colors.text }} numberOfLines={1}>
              Hi ! Chức 👋
            </Text>
            <Text style={{ color: colors.text, opacity: 0.75 }} numberOfLines={1}>
              Discover fashion that suit your style
            </Text>
          </View>
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
            <Icon name='bell-o' size={24} color={colors.text}></Icon>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 18, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: 'center',
              paddingHorizontal: 18,
              gap: 12
            }}>
            <Icon name='search' size={24} color={colors.border} />
            <Text style={{ flex: 1, fontSize: 16, color: colors.text, opacity: 0.5 }}>Search . . .</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.primary,
            }}>
            <Icon name='sliders' size={24} color={colors.background}></Icon>
          </TouchableOpacity>
        </View>

        {/* Grid collection */}
        <View style={{ paddingHorizontal: 18 }}>
          {/* Title */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: colors.text }}>New Collections</Text>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>

          {/* --- */}
          <View style={{ flexDirection: 'row', height: 200, gap: 12 }}>
            {/* Card */}
            <Card 
              onPress={() => { navigation.navigate("DetailsScreen", {id: "123"}) }}
            />

            {/* Card */}
            <View style={{ flex: 1, gap: 12 }}>
              <Card
                onPress={() => { navigation.navigate("DetailsScreen", { id: "456" }) }}
              />
              <Card
                onPress={() => { navigation.navigate("DetailsScreen", { id: "789" }) }}
              />
            </View>

          </View>
        </View>

        {/* Categories */}
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 18,
            gap: 10,
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  borderWidth: 1,
                  borderColor: colors.border,
                  borderRadius: 100,
                  paddingHorizontal: 24,
                  paddingVertical: 14,
                }}>
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontSize: 14,
                    fontWeight: "600",
                    opacity: isSelected ? 1 : 0.5,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )
          }}
        />

        {/* Masonry list */}
        <MasonryList
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          renderItem={({ item, i }) => (
            <View style={{ padding: 6 }}>
              <View style={{
                aspectRatio: i === 0 ? 1 : 2 / 3,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 24,
              }}>
                  <Image
                    source={{ uri: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" }}
                    resizeMode='cover'
                    style={StyleSheet.absoluteFill}
                  />


                <View style={[StyleSheet.absoluteFill, { padding: 12, }]}>
                  {/* Title */}
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: "600",
                        color: colors.text,
                      }}>
                      PUMA Everyday Mussel
                    </Text>

                    <View
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 100,
                        height: 32,
                        aspectRatio: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Icon name='heart-o' size={15} color={"#000"} />
                    </View>
                  </View>
                  {/* Price */}
                  <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <View
                      style={{
                        borderRadius: 100,
                        backgroundColor: 'rgba(0,0,0,0.35)',
                        borderWidth: .1,
                        alignItems: 'center',
                        padding: 8,
                        flexDirection: 'row'
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          flex: 1,
                          fontSize: 16,
                          fontWeight: "600",
                          color: "#fff"
                        }}>
                        $160.00
                      </Text>

                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 14,
                          paddingVertical: 6,
                          backgroundColor: "#fff",
                          borderRadius: 100,
                        }}>
                        <Icon name='cart-plus' size={20} color={"#000"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={['80%']}
        index={0}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
        backgroundStyle={{borderRadius: 24}}
      >
        <FitterView />
      </BottomSheetModal>
    </ScrollView>
  );
}

export default HomeScreen;

const Card = ({onPress}:{onPress?: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1, position: 'relative', overflow: "hidden", borderRadius: 24 }}>
      <Image
        source={{ uri: URL_SHOE }}
        resizeMode="cover"
        style={{ position: 'relative', height: 200, width: 180 }}
      />
      <View
        style={{
          position: 'absolute',
          left: 16,
          top: 16,
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: "rgba(0,0,0,0.25)",
          borderRadius: 100
        }}>
        <Text style={{ fontSize: 14, fontWeight: "600", color: '#fff' }}>
          $130
        </Text>
      </View>

    </TouchableOpacity>
  )
}
