import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import {Dispatch} from 'redux'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from './hooks/useTypeSelector'
import { change_token } from './store/actions/token'

import Register from './pages/register'
import Login from './pages/login'
import Users from './pages/users'



function App() {

  const {token} = useTypeSelector(state => state.token)
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    if (localStorage.token) {
      dispatch(change_token(localStorage.token))
    }
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={ token ? <Navigate to="/" /> : <Register />} />
        <Route path="/users" element={ <Users/> } />
        <Route path="/" element={ token ? <Users/> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
