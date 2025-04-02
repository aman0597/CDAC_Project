import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background: #000; /* Dark black background */
  color: #f5f5f5; /* Off-white text color */
  padding: 2rem;
  text-align: center;
  font-size: 1rem;
  border-top: 4px solid #333; /* Darker border for contrast */
`;

const FooterContent = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  margin: 1rem 0;
  
  a {
    color: #f5f5f5; /* Off-white text color for links */
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    
    &:hover {
      color: #ddd; /* Slightly lighter off-white on hover */
    }
  }
`;

const IconLink = styled.a`
  color: #f5f5f5; /* Off-white color for icons */
  margin: 0 1rem;
  font-size: 2rem; /* Larger icons for better visibility */
  
  &:hover {
    color: #ddd; /* Slightly lighter off-white on hover */
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <FooterSection>
        <p>&copy; 2024 Daffodils Gate Entry Pass System. All rights reserved.</p>
      </FooterSection>
      <FooterSection>
        <FooterLinks>
          <IconLink href="/" aria-label="Home">
            <FontAwesomeIcon icon={faHome} />
          </IconLink>
          <IconLink href="/features" aria-label="Features">
            <FontAwesomeIcon icon={faUser} />
          </IconLink>
          <IconLink href="/contact" aria-label="Contact Us">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
          <IconLink href="/privacy-policy" aria-label="Privacy Policy">
            <FontAwesomeIcon icon={faLock} />
          </IconLink>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <h4>Connect with Us</h4>
        <FooterLinks>
          <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
          <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
          <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
        </FooterLinks>
      </FooterSection>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
