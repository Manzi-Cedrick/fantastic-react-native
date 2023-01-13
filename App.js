import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import Task from './components/Task'
export default function App() {
  const [task, setTask] = useState('');
  const [Alltasks, setAllTasks] = useState([]);
  const handleAddTask = () => {
    if (task == '') {
      alert('Please enter a task');
      return ;
    };
    setAllTasks([...Alltasks, task]);
    setTask('');
  }
  const completeTask = (index) => {
    let itemsCopy = [...Alltasks];
    itemsCopy.splice(index, 1);
    setAllTasks(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionText}>Today's Tasks</Text>
        </View>
        <View style={styles.allItems}>
          {Alltasks ? Alltasks.map((item, index) => (
            <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
              <Task key={index} text={item} />
            </TouchableOpacity>
          )) : (
          <Text>No Task</Text>
          )
          }
        </View>
      </ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTasks}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addTaskbtn}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  sectionHeader: {
    paddingTop: 10 * 3,
    paddingHorizontal: 10 * 2,
  },
  sectionText: {
    color: 'dodgerblue',
    fontSize: 20,
    fontWeight: '500',
  },
  allItems: {
    marginTop: 10 * 2,
    flex: 1,
    padding: 10 * 2,
    flexDirection: 'column'
  },
  addTasks: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 280,
  },
  addTaskbtn: {
    width: 60,
    height: 60,
    backgroundColor: 'dodgerblue',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: '#FFF',
    fontWeight: '700',
  }
})