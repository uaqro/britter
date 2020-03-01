import React from 'react'
import {Nav, Anchor } from 'grommet';
import {MdAttachMoney, MdSearch} from 'react-icons/md';
import {GoGraph} from 'react-icons/go';
import {NavStyles} from './NavStyle';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <NavStyles>
      <Nav className='.nav' direction="row" style={{background:'#454542'}} flex='true' pad="small" round="medium" align="center">
          <Link to='/goals'><Anchor icon={<MdAttachMoney style={{color:'white'}} />} hoverIndicator /></Link>
          <Link to='/'><Anchor icon={<MdSearch style={{color:'white'}} />} hoverIndicator /></Link>
          <Link to='/profile'><Anchor icon={<GoGraph style={{color:'white'}} />} hoverIndicator /></Link>
      </Nav>
    </NavStyles>
  )
}