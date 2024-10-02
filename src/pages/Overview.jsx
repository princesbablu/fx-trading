import React from 'react'
import Banner from '../components/overview/Banner'
import Key from '../components/overview/Key'
import Account from '../components/overview/Account'
import Howto from '../components/overview/Howto'
import Cta from '../components/overview/Cta'
export default function Overview() {
  return (
    <div>
      <Banner />
      <Key />
      <Account />
      <Howto />
      <Cta />
    </div>
  )
}
