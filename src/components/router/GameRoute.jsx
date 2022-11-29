import React from 'react'
import { Outlet } from 'react-router-dom'

export function GameRoute() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
