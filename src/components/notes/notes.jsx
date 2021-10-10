import React from 'react'
import notesList from '../../dummydata/dummynotes.json'
import DailyTask from '../cards/dailyTasks'
import DailyCounters from '../cards/dailyCounters'

const Note = ({ note }) => {
  return (
    note.type === 1
      ? <DailyCounters note={note}/>
      : <DailyTask note={note}/>
  )
}

function Notes() {
  return (
    notesList.map((note) =>
      <Note note={note}/>
    )
  )
}

export default Notes
