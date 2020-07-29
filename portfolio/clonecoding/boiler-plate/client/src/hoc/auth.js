import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthentificationCheck(props) {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then(response => {

        //로그인안한상태
        if (!response.payload.isAuth) {
          props.history.push('/login')
        } else {
          //로그인한상태
          if(adminRoute && !response.payload.isAdmin) {
            props.history.push('/')
          } else {
            if(option === false) {
              props.history.push('/')
            }
          }
        } 



      })
    }, [])

    return(
      <SpecificComponent />
    )

  }

  return AuthentificationCheck
}