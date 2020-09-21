import React from 'react';
import Container from '../Container/Container';
import {NavLink, Link} from 'react-router-dom';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <h2>Info</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Link>
      <NavLink exact to='/info' activeClassName='active'>Info
      </NavLink>
    </Link>
    <Hero>
      <h2>{faqContent.title}</h2>
      <i name="fas fa-bacteria"></i>
      <h3>{faqContent.subtitle}</h3>
    </Hero>
  </Container>
);

export default FAQ;