import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { FlatList, Image, ImageComponent, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const { colors } = useTheme();
  const [typeIndex, setTypeIndex] = useState(0);
  const TYPE = ["News", "Chats"];
  const URL_IMG = "https://manofmany.com/wp-content/uploads/2021/05/Best-Short-Hairstyles-for-Men.jpg";

  return (
    <SafeAreaView style={{ paddingVertical: 18, gap: 16, flex: 1 }}>
      {/* Header */}
      <View style={{ paddingHorizontal: 18, alignItems: 'center', gap: 20, justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: "500", color: colors.text }}>
          Profile
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: URL_IMG }} style={{ width: 120, aspectRatio: 1, borderRadius: 120 }} />
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderWidth: 2,
              borderColor: colors.background,
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 7,
              aspectRatio: 1,
              position: 'absolute',
              bottom: 1,
              right: 1,
              backgroundColor: '#39AC5F'
            }}>
            <Icon name='pencil' size={16} color={'white'} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "500", color: colors.text }}>
          Nguyễn Văn Chức
        </Text>
      </View>

      {/* Body */}
      <ScrollView>
        <View style={{ justifyContent: "center", gap: 12, marginHorizontal: 18, borderRadius: 24, backgroundColor: 'white' }}>
          <View style={{ paddingVertical: 10, paddingHorizontal: 18, gap : 5 }}>
            {/* Menu */}
            <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 12, }}>
              <View style={{ flex: 1, flexDirection: 'row', }}>
                <Icon name='gift' size={20} color={'#33A88A'} />
                <Text style={{ paddingHorizontal: 15, color: colors.text, fontWeight: '600', fontSize: 16 }}>
                  Persons
                </Text>
              </View>
              <Icon name='angle-right' size={20} color={colors.text} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 12, }}>
              <View style={{ flex: 1, flexDirection: 'row', }}>
                <Icon name='gift' size={20} color={'#33A88A'} />
                <Text style={{ paddingHorizontal: 15, color: colors.text, fontWeight: '600', fontSize: 16 }}>
                  General
                </Text>
              </View>
              <Icon name='angle-right' size={20} color={colors.text} />
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen