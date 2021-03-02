import React from 'react'

import { Content, Salutation, GoBack } from '../components';

export function About() {
  return (
    <div>
      <Salutation></Salutation>
      <Content title='About Us' description='This page has information about the application plus a salutation to the signed in user'></Content>
      <GoBack />
    </div>
  )
}
