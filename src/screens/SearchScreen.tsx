import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput'
import { useProductSearch } from '../hooks/useProductSearch'
import { stylesTable } from '../theme'
import { Loading } from '../components/Loading'
import { fakeList } from '../api/data'
import { IProduct } from '../interfaces/ProductInterface'

const withDimensions = Dimensions.get('window').width

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching } = useProductSearch()
    const [productsFiltered, setproductsFiltered] = useState<IProduct[]>([])
    const [term, setTerm] = useState('')

    useEffect(() => {
        if (term.length === 0) {
            return setproductsFiltered(fakeList)
        }

        setproductsFiltered(fakeList.filter(
            (prod: IProduct) => prod.name.toLocaleLowerCase()
                .includes(term.toLocaleLowerCase())))
    }, [term])

    if (isFetching) return <Loading />

    return (
        <View style={{
            ...styles.container,
            marginTop: (Platform.OS === 'ios') ? top : top + 10
        }}>
            <SearchInput
                onDebounce={setTerm}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: withDimensions - 40,
                    top: (Platform.OS === 'ios') ? top : top + 10
                }} />
            <View style={{
                marginTop: 20
            }}>
                <FlatList
                    data={productsFiltered}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <>
                            <View style={
                                [
                                    stylesTable.row,
                                    stylesTable.header,
                                    { marginTop: (Platform.OS === 'ios') ? top + 30 : top + 50 }
                                ]
                            }>
                                <Text style={[stylesTable.rowItem, stylesTable.rowItemHeader]}>Codigo</Text>
                                <Text style={[stylesTable.rowItem, stylesTable.rowItemHeader]}>SIGA</Text>
                                <Text style={[stylesTable.rowItem, stylesTable.rowItemHeader]}>Medicamento</Text>
                            </View>
                        </>
                    }
                    renderItem={({ item, index }) => (
                        <>
                            <View key={`${item.name}-${index}`} style={[stylesTable.row, { backgroundColor: '#FAFAFA', marginVertical: 4, borderRadius: 4 }]}>
                                <Text style={[stylesTable.rowItem, stylesTable.item]}>
                                    {item.name}
                                </Text>
                                <Text style={[stylesTable.rowItem, stylesTable.item, { width: '30%' }]}>
                                    {item.author}
                                </Text>
                                <Text style={[stylesTable.rowItem, stylesTable.item]}>
                                    {item.year}
                                </Text>
                            </View>
                        </>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    }
});