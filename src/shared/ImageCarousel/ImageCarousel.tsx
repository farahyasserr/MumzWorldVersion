import React from 'react';
import { Text, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { carouselImages } from '../../constants/dummyCarouselData';
import { styles } from './ImageCarousel.styles'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../theme/dimensions';

interface ImageCarouselProps {
    discountPercentage?: number;
}

const ImageCarousel = ({ discountPercentage }: ImageCarouselProps) => {

    const DiscountBadge = () => (
        <View style={styles.badgeMainContainer}>
            <View style={styles.internalBadgeContainer}>
                <Text style={styles.discountText}>-{discountPercentage}%</Text>
            </View>
        </View>
    );

    return (
        <Carousel
            loop
            width={SCREEN_WIDTH}
            height={SCREEN_HEIGHT / 4}
            data={carouselImages}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
                <View style={styles.carouselItemView}>
                    <Image
                        source={{ uri: item.uri }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    {discountPercentage && <DiscountBadge />}
                </View>
            )}
        />
    );
};

export default ImageCarousel;
