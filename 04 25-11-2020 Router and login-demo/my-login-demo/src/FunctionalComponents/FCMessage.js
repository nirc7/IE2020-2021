import React from 'react'

export default function FCMessage(props) {
  return (
    <div>
      {props.checkUser !== undefined ?
        `hello ${props.checkUser.name} u r logged in :)` :
        'u r not logged in :('}
    </div>
  )
}
