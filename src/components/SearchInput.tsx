import React, { useEffect, useState } from 'react'
import { Platform, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { UseDebouncedValue } from '../hooks/useDebouncedValue'

interface Props {
    style?: StyleProp<ViewStyle>
    onDebounce: (value: string) => void
}

export const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('')

    const debouncedValue = UseDebouncedValue(textValue, 1000)

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue])

    return (
        <View>
            <View style={{
                ...styles.textBackground,
                ...style as any
            }}>
                <TextInput
                    placeholder='Buscar'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name='search-outline'
                    color="gray"
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: Platform.OS === 'ios' ? 0 : 2
    }
});