import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react'
import { I18nManager, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../theme/colors';
import { styles } from './SearchBar.styles'

interface SearchBarProps {
    searchValue: string;
    onChangeText: (text: string) => void;
    onClear?: () => void;
}
const SearchBar = ({ onChangeText, onClear, searchValue }: SearchBarProps) => {

    return (
        <View style={styles.searchView}>
            <Ionicons name='search' size={20} color={colors.grey} style={styles.searchIcon} />
            <TextInput
                onChangeText={onChangeText}
                placeholder="Search..."
                placeholderTextColor={colors.grey}
                value={searchValue}
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
            />
            {onClear &&
                <TouchableOpacity onPress={onClear}>
                    <AntDesign name='close' size={18} color={colors.grey} style={styles.clearIcon} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default SearchBar;
