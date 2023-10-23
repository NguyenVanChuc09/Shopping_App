import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { FlatList, Image, ImageComponent, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome';

const NotificationScreen = () => {
  const { colors } = useTheme();
  const [typeIndex, setTypeIndex] = useState(0);
  const TYPE = ["News", "Chats"];
  const URL_IMG = "https://manofmany.com/wp-content/uploads/2021/05/Best-Short-Hairstyles-for-Men.jpg";

  return (
    <SafeAreaView style={{ paddingVertical: 18, gap: 16, flex: 1 }}>
      {/* Header */}
      <View style={{ paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 8, }}>
        <Text style={{ fontSize: 18, fontWeight: "500", color: colors.text, flex: 1 }}>
          Notification
        </Text>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Icon name='shopping-cart' size={18} color={'#33A88A'} />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView>
        <View style={{ justifyContent: "center", gap: 12 }}>
          <View style={{ flexDirection: 'row', paddingHorizontal: 18 }}>
            {/* Type */}
            <View>
              <FlatList
                data={TYPE}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 6,
                }}
                renderItem={({ item, index }) => {
                  const isSelected = typeIndex === index;
                  return (
                    <TouchableOpacity
                      onPress={() => setTypeIndex(index)}
                      style={{
                        backgroundColor: isSelected ? colors.primary : colors.card,
                        borderColor: colors.border,
                        borderRadius: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                      }}>
                      <Text
                        style={{
                          color: isSelected ? colors.background : colors.text,
                          fontSize: 16,
                          fontWeight: "600",

                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
          </View>


          <View>
            <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
              <Text style={{ paddingHorizontal: 18, paddingVertical: 12, backgroundColor: 'white', justifyContent: 'center' }}>
                Update Your Cart
              </Text>
            </View>
      
            <View style={{ paddingVertical: 10, borderWidth: 0.5, paddingHorizontal: 18 }}>
              {/* Card */}
              <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 12, }}>

                <Image source={{ uri: URL_IMG }} style={{ width: 50, aspectRatio: 1, borderRadius: 5 }} />

                <View style={{ gap: 6, marginStart: 10, flex: 1, }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                    Giao kiện hàng thành công
                  </Text>

                  <Text style={{ fontSize: 14, color: colors.text, opacity: 0.75 }} numberOfLines={5}>
                    Kiện hàng asdjhadjasd của đơn hàng ndajdask đã được giao đến bạn.
                  </Text>

                  <Text style={{ fontSize: 12, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                    15:45 09/14/2023
                  </Text>

                </View>
              </TouchableOpacity>

              {/* Card */}
              <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 12, }}>

                <Image source={{ uri: URL_IMG }} style={{ width: 50, aspectRatio: 1, borderRadius: 5 }} />

                <View style={{ gap: 6, marginStart: 10, flex: 1, }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: colors.text, }} numberOfLines={1}>
                    Giao kiện hàng thành công
                  </Text>

                  <Text style={{ fontSize: 14, color: colors.text, opacity: 0.75 }} numberOfLines={5}>
                    Kiện hàng asdjhadjasd của đơn hàng ndajdask đã được giao đến bạn.
                  </Text>

                  <Text style={{ fontSize: 12, color: colors.text, opacity: 0.5 }} numberOfLines={1}>
                    15:45 09/14/2023
                  </Text>

                </View>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NotificationScreen