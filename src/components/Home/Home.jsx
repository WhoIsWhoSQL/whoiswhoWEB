import React, { Fragment } from 'react'
import {HomeStudent} from './HomeStudent'
import {HomeTeacher} from './HomeTeacher'
export function Home({ user }) {
    return (
        <Fragment>
            {user.isTeacher ?
                <HomeTeacher user={user} />
                :
                <HomeStudent user={user} />
            }
        </Fragment>
    )
}
