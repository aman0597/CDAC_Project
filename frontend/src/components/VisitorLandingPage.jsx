import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faShieldAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const LandingContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  color: #a0a0a0;
  font-size: 22px;
  margin-bottom: 30px;
  font-weight: 300;
`;

const Description = styled.p`
  color: #dcdcdc;
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const BenefitsContainer = styled.div`
  margin-bottom: 30px;
  text-align: left;
  padding: 0 20px;
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #e0e0e0;
  padding: 10px 0;
`;

const BenefitIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #2ecc71;
  min-width: 30px;
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  margin: 10px;
  color: #ffffff;
  background-color: #3498db;
  border-radius: 6px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

const VisitorLandingPage = () => {
  return (
    <LandingContainer>
      <Title>Welcome to the Daffodils Portal</Title>
      <Subtitle>Your Gateway to Community Convenience</Subtitle>
      <Description>
        Discover the Daffodils Portal—a comprehensive platform designed to streamline your community interactions. Whether you're a new visitor or a returning guest, our portal provides easy access to essential services and information.
      </Description>
      <BenefitsContainer>
        <Benefit>
          <BenefitIcon icon={faSignInAlt} />
          <span><strong>Simple Login:</strong> Quickly access the portal with a user-friendly login process, ensuring you can get started without hassle.</span>
        </Benefit>
        <Benefit>
          <BenefitIcon icon={faUserPlus} />
          <span><strong>Easy Registration:</strong> Join our community effortlessly with a straightforward registration process designed for your convenience.</span>
        </Benefit>
        <Benefit>
          <BenefitIcon icon={faShieldAlt} />
          <span><strong>Top-Notch Security:</strong> We prioritize your safety with advanced security measures to protect your personal information and ensure secure interactions.</span>
        </Benefit>
        <Benefit>
          <BenefitIcon icon={faCheckCircle} />
          <span><strong>Reliable Support:</strong> Access our dedicated support team for any questions or assistance you might need, ensuring a smooth experience.</span>
        </Benefit>
      </BenefitsContainer>
      <Description>
        The Daffodils Portal is designed to make your experience seamless and enjoyable. From quick access to services to enhanced security, we are committed to providing you with a top-quality community experience.
      </Description>
      <Button to="/visitor-login">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Button>
      <Button to="/visitor-register">
        <FontAwesomeIcon icon={faUserPlus} /> Register
      </Button>
    </LandingContainer>
  );
};

export default VisitorLandingPage;
