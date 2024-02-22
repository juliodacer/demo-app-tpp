import { StyleSheet } from 'react-native'

export const stylesTable = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        backgroundColor: '#000',
        paddingVertical: 8,
        borderRadius: 15
    },
    rowItemHeader: {
        color: '#fff',
    },
    rowItem: {
        width: '33%',
        textAlign: 'center'
    },
    item: {
        paddingVertical: 8,
    }
})
