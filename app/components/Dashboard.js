import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import Form from './Form'
import List from './List'


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          title: 'New title',
          body: 'New body'
        }
      ],
      currentIndex: 0
    }
  }

  handleTitleChange(text) {
    const currentIndex = this.state.currentIndex
    const newNotes = [...this.state.notes]
    newNotes[currentIndex] = {...newNotes[currentIndex], title: text}
    this.setState({
      notes: newNotes
    })
  }

  handleBodyChange(text) {
    const currentIndex = this.state.currentIndex
    const newNotes = [...this.state.notes]
    newNotes[currentIndex] = {...newNotes[currentIndex], body: text}
    this.setState({
      notes: newNotes
    })
  }

  addNewNote() {
    const newNote = {
      title: 'New title',
      body: 'New body'
    }
    const newNotes = [...this.state.notes, newNote]
    this.setState({
      notes: newNotes,
      currentIndex: newNotes.length - 1
    })
  }

  handleSetCurrentIndex(index) {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const currentNote = this.state.notes[this.state.currentIndex]
    return (
      <View style={styles.dashboard}>
        <Button 
          title="New note"
          onPress={() => this.addNewNote()}
        />
        <Text
          style={{textAlign: 'center'}}
        >You are editing note #{this.state.currentIndex+1} now</Text>
        <Form 
          note={currentNote}
          handleTitleChange={(text) => this.handleTitleChange(text)}
          handleBodyChange={(text) => this.handleBodyChange(text)}
        />
        <List 
          notes={this.state.notes}
          handleSetCurrentIndex={(index) => this.handleSetCurrentIndex(index)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 100
  }
})

export default Dashboard