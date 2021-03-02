import React from 'react'

import { Content, WhoAmI } from '../components';

export function Home() {
  return (
    <div>
      <Content title='Home' description='This awesome application demonstrates react routing and redux'></Content>
      <WhoAmI></WhoAmI>      
    </div>
  )
}
