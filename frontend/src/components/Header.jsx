import React from 'react';
import Navbar from './Navbar'; 
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Header = () => (
  <HeaderWrapper>
    <Navbar />
  </HeaderWrapper>
);

export default Header;
