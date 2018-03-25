import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

class Form extends React.Component {
  render() {
    return (
      <View
        style={styles.form}
      > 
        <TextInput 
          value={this.props.note.title}
          onChangeText={(text) => this.props.handleTitleChange(text)}
          style={styles.textInput}
          />
        <TextInput 
          value={this.props.note.body}
          onChangeText={(text) => this.props.handleBodyChange(text)}
          style={styles.textInput}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  textInput: {
    height: 30,
    backgroundColor: 'lightpink',
    textAlign: 'center'
  },
})

export default Form