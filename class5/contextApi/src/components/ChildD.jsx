import React from 'react'
import { useContext } from 'react'
import {usercontext } from '../App.jsx'

function ChildD() {
    const username = useContext( usercontext)
  return (
    <div>
        this is child D {username}
    </div>
  )
}

export default ChildD