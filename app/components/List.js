import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

class List extends React.Component {
  renderNotes() {
    return (
      this.props.notes.map((note, index) => {
        return (
          <TouchableOpacity 
            key={index}
            style={styles.note}
            onPress={() => this.props.handleSetCurrentIndex(index)}
          >
            <Text
              style={styles.title}
            >{`${index+1}. ${note.title}`}</Text>
            <Text>{note.body}</Text>
          </TouchableOpacity >
        )
      })
    )
  }

  render() {
    return (
      <ScrollView>
        {this.renderNotes()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  note: {
    marginBottom: 20,
    paddingLeft: 15
  },
  title: {
    fontSize: 20
  }
})

export default List