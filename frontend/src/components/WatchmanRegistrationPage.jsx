import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegistrationContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1a1a1a; /* Dark black */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1; /* Off-white */
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #ecf0f1; /* Off-white */
  font-size: 14px;
  width: 100%;
  text-align: left;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #444; /* Darker border color */
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #2c3e50; /* Darker input background */
  color: #ecf0f1; /* Off-white */
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 45%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ecf0f1; /* Off-white */
  font-size: 24px;

`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3498db; /* Blue color for button */
  color: #ecf0f1; /* Off-white */
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  max-width: 200px;
  transition: background-color 0.3s;
  margin-bottom: 10px; /* Space between buttons */
  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }
`;

const RegisterButton = styled(Button)`
  background-color: #2ecc71; /* Green color for registration button */
  &:hover {
    background-color: #27ae60; /* Darker green on hover */
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Red color for error messages */
  font-size: 14px;
  margin-top: 5px;
`;

const WatchmanRegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const isPasswordValid = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUpperCase && hasNumber && hasSpecialChar;
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError('Password must include at least one uppercase letter, one number, and one special character');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/watchman/register', {
        email,
        password,
      });
      navigate('/watchman-login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <RegistrationContainer>
      <Title>Watchman Registration</Title>
      <Form onSubmit={handleRegister}>
        <Label>Email:</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label>Password:</Label>
        <InputWrapper>
          <Input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <EyeIcon onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </InputWrapper>
        <Label>Confirm Password:</Label>
        <InputWrapper>
          <Input
            type={confirmPasswordVisible ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <EyeIcon onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </InputWrapper>
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <RegisterButton type="submit">Register</RegisterButton>
      </Form>
    </RegistrationContainer>
  );
};

export default WatchmanRegistrationPage;
