import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { SimpleProduct } from '../../../../types/Product'
import { EmptySearchView, ProductItem, SearchBar } from '../../../../shared'
import { styles } from './ProductsList.styles'
import { searchProducts } from './ProductList.utils'

interface ProductsListProps {
    products: SimpleProduct[]
    onPressItem: (item: SimpleProduct) => void
}

const ProductsList = ({ products, onPressItem }: ProductsListProps) => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [filteredProducts, setFilteredProducts] = useState<SimpleProduct[]>([])

    const onChangeSearchText = (val: string) => {
        setSearchValue(val)
        let filtered = searchProducts({ searchValue, products })
        setFilteredProducts(filtered);
    }

    const onClearSearch = () => {
        setSearchValue('')
    }

    const renderEmptyList = () => (
        <>
            {searchValue ? <EmptySearchView /> : null}
        </>
    )

    return (
        <View style={styles.listContainer}>
            <SearchBar onChangeText={onChangeSearchText} searchValue={searchValue} onClear={onClearSearch} />
            <FlatList
                data={searchValue !== '' ? filteredProducts : products}
                renderItem={(item) => <ProductItem product={item.item} onPressItem={onPressItem} />}
                keyExtractor={(item: SimpleProduct) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ListEmptyComponent={renderEmptyList}
            />
        </View>
    )
}

export default ProductsList
