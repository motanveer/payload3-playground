import React from 'react'
import { PayloadServerReactComponent, CustomComponent } from 'payload'

const BeforeLogin: PayloadServerReactComponent<CustomComponent> = () => {
  return (
    <div>
      <p>
        <b>Welcome to your dashboard!</b>
        {'🧙 This is where site admins will log in to manage your website.'}
      </p>
    </div>
  )
}

export default BeforeLogin
