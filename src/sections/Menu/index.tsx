import React from 'react'

interface HashLinkProps {
  text: string
  href: string
}

export const Menu: React.FC = () => {
  const hashLinks: HashLinkProps[] = [
    {
      text: 'About',
      href: '#about'
    },
    {
      text: 'Portfolio',
      href: '#portfolio'
    },
    {
      text: 'Contact',
      href: '#contact'
    }
  ]
  return (
    <nav id="menu">
      <div>
        <div>
          <a href="#">Menu</a>
        </div>
        <div>
          <ul>
            {hashLinks.map(({ href, text }) => (
              <li key={href}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Menu
