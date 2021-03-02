import React from 'react'

import { Content, Salutation, GoBack } from '../components';

export function Contact() {
  return (
    <div>
      <Salutation></Salutation>
      <Content title='Contact Us' description='You can contact us at david@washere.com plus on your right is a salutation to the signed in user'></Content>
      <GoBack extra={ { link: '/', title: "Go Home" } } />
    </div>
  )
}
