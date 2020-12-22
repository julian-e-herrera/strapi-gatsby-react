import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavContent = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`
const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &last-of-type {
    margin-right: 0;
  }
  &.focusPage {
    border-bottom: 2px solid #fff;
  }
`

const Nav = () => {
  return (
    <NavContent>
      <NavLink to="/" activeClassName="focusPage">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="focusPage">
        About
      </NavLink>
      <NavLink to="/properties" activeClassName="focusPage">
        Properties
      </NavLink>
    </NavContent>
  )
}

export default Nav
