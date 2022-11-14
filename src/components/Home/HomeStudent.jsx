import React from 'react'
import { MyClassrooms } from '../Classroom/MyClassroom'
import {JoinGame} from '../Game/JoinGame'
export function HomeStudent({ user }) {
    return (
        <div>
            <h1 className="h3 mb-4 text-gray-800">Hola  <b>{user.name}</b></h1>
            <a href="." className="btn btn-primary btn-icon-split">
                <span className="icon text-white-50">
                    <i className="fas fa-flag"></i>
                </span>
                <span className="text">Join to a class</span>
            </a>
          <JoinGame user={user} />
            <MyClassrooms user={user} />
        </div>
    )
}
