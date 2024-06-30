import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import colors from '../../theme/colors';

const AddToWishlistButton = ({ style, size }: { style?: ViewStyle, size?: number }) => {
    const [isAddedToWishlist, setIsAddedToWishlist] = useState<boolean>(false)

    const heartScale = useSharedValue(1);

    const animatedHeartStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: heartScale.value }],
        };
    });

    const animateHeart = () => {
        heartScale.value = withSpring(1.2, {}, () => {
            heartScale.value = withSpring(1);
        });
    };

    const onPress = () => {
        setIsAddedToWishlist(!isAddedToWishlist)
        animateHeart()
    }

    return (
        <TouchableOpacity onPress={onPress} style={style ? style : null}>
            <Animated.View style={animatedHeartStyle}>
                <Ionicons name={isAddedToWishlist ? 'heart' : 'heart-outline'} size={size ? size : 22} color={colors.primary} />
            </Animated.View>
        </TouchableOpacity>

    )
}

export default AddToWishlistButton
