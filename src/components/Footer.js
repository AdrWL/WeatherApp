import React from 'react'
import { Text, View, Linking, StyleSheet } from 'react-native'
import { COLORS } from '../themes/colors'

export const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Powered By</Text>
            <Text style={styles.link} onPress={() => Linking.openURL("https://www.weatherapi.com/")}>WeatherAPI.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginHorizontal: 20,
    },
    text: {
        color: COLORS.text,
    },
    link: {
        color: COLORS.link,
    }
})
