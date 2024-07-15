import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../themes/colors';

export const FollowingDays = ({ day }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{day.name}</Text>
            <Text style={[styles.content, styles.value]}>{day.value}</Text>
            <Feather style={[styles.content, styles.type]} name="sun" size={40} color={COLORS.sun} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
    },
    content: {
        flex: 1,
        color: COLORS.text,
    },
    value: {
        textAlign: "center",
        fontWeight: '600',
    },
    type: {
        textAlign: "right",
        color: COLORS.sun,
    }
})
