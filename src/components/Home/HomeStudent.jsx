import React from 'react'
import { JoinClassroom } from '../Classroom/JoinClassroom'
import { MyClassrooms } from '../Classroom/MyClassroom'
import {JoinGame} from '../Game/JoinGame'
export function HomeStudent({ user }) {
    return (
        <div>
            <h1 className="h3 mb-4 text-gray-800">Hola  <b>{user.name}</b></h1>
            <JoinClassroom user={user} />
          <JoinGame user={user} />
            <MyClassrooms user={user} />
        </div>
    )
}
