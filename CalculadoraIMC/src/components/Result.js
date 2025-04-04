import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Result = ({ imc }) => {
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        backgroundColor: 'lightyellow',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
    },
});

export default Result;