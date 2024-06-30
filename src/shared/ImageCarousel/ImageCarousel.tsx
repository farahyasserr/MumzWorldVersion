import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { carouselImages } from '../../constants/dummyCarouselData';
import colors from '../../theme/colors';

interface ImageCarouselProps {
    discountPercentage?: number;
}

interface ZoomableImageProps {
    uri: string;
}

const ImageCarousel = ({ discountPercentage }: ImageCarouselProps) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const DiscountBadge = () => (
        <View style={{ position: 'absolute', bottom: '5%', left: '82%' }}>
            <View style={{
                alignSelf: 'flex-start',
                backgroundColor: colors.primary,
                borderRadius: 100,
                padding: 6
            }}>
                <Text style={{ color: colors.white, fontWeight: 'bold', fontSize: 13 }}>-{discountPercentage}%</Text>
            </View>
        </View>
    );

    const ZoomableImage = ({ uri }: ZoomableImageProps) => {
        const scale = useSharedValue(1);
        const focalX = useSharedValue(0);
        const focalY = useSharedValue(0);

        const pinchGesture = Gesture.Pinch()
            .onUpdate((event) => {
                scale.value = event.scale;
                focalX.value = event.focalX;
                focalY.value = event.focalY;
            })
            .onEnd(() => {
                scale.value = withTiming(1, { duration: 300 });
            });

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [
                { scale: scale.value },
                { translateX: focalX.value },
                { translateY: focalY.value },
            ],
        }));

        return (
            <GestureDetector gesture={pinchGesture}>
                <Animated.View style={{ flex: 1 }}>
                    <Animated.Image
                        source={{ uri }}
                        style={[{ width: '100%', height: '100%' }, animatedStyle]}
                        resizeMode="contain"
                    />
                </Animated.View>
            </GestureDetector>
        );
    };

    return (
        <GestureHandlerRootView style={styles.mainContainer}>
            <Carousel
                loop
                width={width}
                height={height / 4}
                data={carouselImages}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ZoomableImage uri={item.uri} />
                        {discountPercentage && <DiscountBadge />}
                    </View>
                )}
            />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        marginBottom: 10,
    },
});

export default ImageCarousel;
