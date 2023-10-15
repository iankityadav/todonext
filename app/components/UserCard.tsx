import React from 'react'
import { User } from '../models/user'

let user: User = {name:'Ankit',email:'ankit@mail.in'};

const UserCard = () => {
  return (
    <div>
      <div>{user && user.name}</div>
      <div>{user && user.email}</div>
    </div>
  )
}

export default UserCard