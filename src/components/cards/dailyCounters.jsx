import React from 'react'
import Card from './card'

function DailyCounter({ note }) {
  return (<Card>
    <h2>{note.typeName}</h2>
    <ul>
      {note.list.map((elm) =>
        <li key={elm.text}>{elm.text} ({elm.quantity})</li>
      )}
    </ul>
  </Card>)
}

export default DailyCounter