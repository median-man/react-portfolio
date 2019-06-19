import React from 'react'

import { Header, Menu } from '../../sections'
import content from './home-page-content'

const Home: React.FC = () => {
  return (
    <header>
      <Header name={content.name} tagline={content.tagline} />
      <Menu />
    </header>
  )
}

export default Home
