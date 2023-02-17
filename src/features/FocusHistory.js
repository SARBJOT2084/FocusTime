import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;
const FocusHistory = ({ history }) => {
    if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet</Text>;
    return (
        <View>
            <Text style={styles.title}>Things we focused on</Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

export default FocusHistory

const styles = StyleSheet.create({
    container: {
        padding: spacing.md,
        flex: 1,
    },
    item: {
        fontSize: fontSizes.md,
        color: colors.white,
        paddingTop: spacing.sm
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: 'bold',
    }
});