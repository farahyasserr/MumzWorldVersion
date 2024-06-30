import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import { styles } from './EmptySearchView.styles'
import LottieView from 'lottie-react-native';
import { lottie } from '../../../assets/lottieFiles';

const EmptySearchView = () => {

    const animation = useRef(null);

    return (
        <View style={styles.emptySearchView}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                }}
                source={lottie.emptySearch}
            />
            <Text style={styles.noSearchResultTitle}>No search result found.</Text>
            <Text style={styles.noSearchResultText}>We couldn't find anything that matched your search words.</Text>
        </View>
    )
}

export default EmptySearchView