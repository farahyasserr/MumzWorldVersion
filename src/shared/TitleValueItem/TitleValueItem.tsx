import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './TitleValueItem.styles'

interface TitleValueItemProps {
    title: string
    value: string | number
}

const TitleValueItem = ({ title, value }: TitleValueItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default TitleValueItem