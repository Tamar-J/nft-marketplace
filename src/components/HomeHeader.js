import React from 'react';

import { Text, View, Image, TextInput } from 'react-native';
import { COLORS, SIZES, FONTS, assets } from '../constants';



export default function HomeHeader({ onSearch }) {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.logo}
          resizeMode='contain'
          style={{ width: 90, height: 25 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image 
            source={assets.person01}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
          />
          <Image 
            source={assets.badge}
            resizeMode='contain'
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              right: 0,
              bottom: 0
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Hello, Victoria 👋
        </Text>

        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
          marginTop: SIZES.base / 2
        }}>
          Let's find a masterpiece Art
        </Text>
      </View>

      <View style={{ 
        flex: 1,
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small -2
      }}>
        <Image 
          source={assets.search}
          resizeMode='contain'
          style={{
            width: 20,
            height: 20,
            marginRight: SIZES.base
          }}
        />

        <TextInput 
          placeholder='Search NFTs'
          onChangeText={onSearch}
          style={{ flex: 1 }}>
        </TextInput>
      </View>
    </View>
  );
}