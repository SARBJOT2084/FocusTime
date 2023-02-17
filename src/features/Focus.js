import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState(null);
    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={setSubject} label="What would you like to focus on"
                style={styles.textInput}
            />
            <View styles={styles.button}>
                <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
            </View>
        </View>
    )
}
export default Focus

const styles = StyleSheet.create({
    container: {


    },
    button: {
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm,
    },

    inputContainer: {
        padding: spacing.lg,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        color: colors.white,
    }
});