import { TouchableOpacity, Image, Text } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS } from '../constants'


export function CircleButton({ imgUrl, handlePress, ...props }) {

  return (
    <TouchableOpacity 
      style={{
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props
      }}
      onPress={handlePress}
    >
        <Image
          source={imgUrl}
          resizeMode='contain'
          style={{ width: 24, height: 24 }}
        />
    </TouchableOpacity>
  );
}

export function RectButton({ minWidth, fontSize, handlePress, ...props }) {

  return (
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props
      }}
      onPress={handlePress}
    >
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center'
        }}>
          Place a bid
        </Text>
    </TouchableOpacity>
  );
}
