import React from 'react'

export interface HeaderProps {
  name: string;
  tagline: string;
}

export const Header: React.FC<HeaderProps> = ({name, tagline}) => (
    <div>
      <h1 id="header-name">I'm {name}</h1>
      <h2 id="header-tagline">{tagline}</h2>
    </div>
)
