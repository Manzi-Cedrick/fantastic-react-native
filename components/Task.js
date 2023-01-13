import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        display: 'flex',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    square: {
        width: 16,
        height: 16,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 2,
        marginRight: 15,
    },
    itemText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'normal',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 10,
    },
})