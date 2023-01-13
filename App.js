import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Task from './components/Task'
export default function App () {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
      <Text style={styles.sectionText}>Today's Tasks</Text>
      </View>
      <View style={styles.allItems}>
        <Task text={'Task 1'} />
        <Task text={'Task 1'} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8EAED',
  },
  sectionHeader: {
    paddingTop: 10 * 8,
    paddingHorizontal: 10 * 2,
  },
  sectionText: {
    color: 'dodgerblue',
    fontSize: 20,
    fontWeight: '700',
  },
  allItems: {
    marginTop: 10 * 2,
    flex:1,
    flexDirection: 'column'
  }
})