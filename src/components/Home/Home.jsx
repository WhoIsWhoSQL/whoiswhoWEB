import React, { Fragment } from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { Master } from '../Master/Master'
import { HomeStudent } from './HomeStudent'
import { HomeTeacher } from './HomeTeacher'
export function Home() {
    const { user } = useAuthContext();

    return (
        <Master >
            <Fragment>

                {user.isTeacher ?
                    <HomeTeacher />
                    :
                    <HomeStudent  />
                }
            </Fragment>
        </Master>
    )
}
