import React from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { JoinClassroom } from '../Classroom/JoinClassroom'
import { MyClassrooms } from '../Classroom/MyClassroom'
import { JoinGame } from '../Game/JoinGame'
export function HomeStudent() {
    const { user } = useAuthContext();

    return (
        <div>
            <h1 className="h3 mb-4 text-gray-800">Hola  <b>{user.name}</b></h1>
            <JoinClassroom />
            <JoinGame />
            <MyClassrooms />
        </div>
    )
}
