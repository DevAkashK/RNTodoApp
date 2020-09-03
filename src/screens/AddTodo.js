import React, {Component} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      desc: '',
    };
  }

  addTask = () => {
    let task = this.state.task.toString().trim();
    let details = this.state.desc.toString().trim();

    if (task === '') {
      ToastAndroid.show('Please enter task ', ToastAndroid.SHORT);
    } else if (details === '') {
      ToastAndroid.show('Please enter description', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Task added successfully', ToastAndroid.SHORT);
      this.setState({
        task: '',
        desc: '',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Task"
          placeholder="Enter task"
          style={styles.inputStyle}
          mode={'outlined'}
          multiline={false}
          value={this.state.task}
          onChangeText={(task) => this.setState({task})}
        />

        <TextInput
          style={styles.inputStyle}
          label="Details"
          placeholder="Enter Description"
          mode={'outlined'}
          multiline={false}
          value={this.state.desc}
          onChangeText={(desc) => this.setState({desc})}
        />

        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={this.addTask}>
          Add Task
        </Button>
      </View>
    );
  }
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    margin: 16,
  },
  buttonStyle: {
    padding: 8,
    width: '50%',
    alignSelf: 'center',
  },
});
