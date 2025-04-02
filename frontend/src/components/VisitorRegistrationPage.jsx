import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegistrationContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e; /* Dark background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #f5f5f5; /* Off-white text */
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
  color: #f5f5f5; /* Off-white text */
  font-size: 14px;
  width: 100%;
  text-align: left;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.$hasError ? '#e74c3c' : '#333'};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #333; /* Dark input background */
  color: #f5f5f5; /* Off-white text */
`;

const PasswordInput = styled(Input)`
  padding-right: 40px;
`;

const EyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 66%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #f5f5f5;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db; /* Blue color */
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  max-width: 200px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

const RegisterButton = styled(Button)`
  background-color: #2ecc71; /* Green color */
  margin-top: 10px;
  &:hover {
    background-color: #27ae60;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Red color for errors */
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

const PasswordRequirements = styled.div`
  margin-top: 10px;
  width: 100%;
  font-size: 14px;
  color: #f5f5f5; /* Off-white text */
`;

const Requirement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: ${props => props.valid ? '#2ecc71' : '#e74c3c'}; /* Green for valid, red for invalid */
`;

const RequirementIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 16px;
  color: ${props => props.valid ? '#2ecc71' : '#e74c3c'}; /* Green for valid, red for invalid */
`;

const VisitorRegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordCriteria, setPasswordCriteria] = useState({
        hasUpperCase: false,
        hasSpecialChar: false,
        hasNumber: false
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const validatePasswordCriteria = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        setPasswordCriteria({ hasUpperCase, hasSpecialChar, hasNumber });
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            valid = false;
        }

        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            valid = false;
        } else {
            validatePasswordCriteria(password);

            if (!passwordCriteria.hasUpperCase) {
                errors.password = 'Password must contain at least one uppercase letter';
                valid = false;
            } else if (!passwordCriteria.hasSpecialChar) {
                errors.password = 'Password must contain at least one special character';
                valid = false;
            } else if (!passwordCriteria.hasNumber) {
                errors.password = 'Password must contain at least one number';
                valid = false;
            }
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/visitors/register', {
                email,
                password,
            });
            navigate('/visitor-login');
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <RegistrationContainer>
            <Title>Visitor Registration</Title>
            <Form onSubmit={handleRegister}>
                <InputContainer>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        $hasError={!!errors.email}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label>Password:</Label>
                    <PasswordInput
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePasswordCriteria(e.target.value);
                        }}
                        $hasError={!!errors.password}
                    />
                    <EyeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    />
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label>Confirm Password:</Label>
                    <PasswordInput
                        type={confirmPasswordVisible ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        $hasError={!!errors.confirmPassword}
                    />
                    <EyeIcon
                        icon={confirmPasswordVisible ? faEyeSlash : faEye}
                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    />
                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                </InputContainer>
                <PasswordRequirements>
                    <Requirement valid={passwordCriteria.hasUpperCase}>
                        <RequirementIcon icon={passwordCriteria.hasUpperCase ? faCheckCircle : faTimesCircle} valid={passwordCriteria.hasUpperCase} />
                        At least one uppercase letter
                    </Requirement>
                    <Requirement valid={passwordCriteria.hasSpecialChar}>
                        <RequirementIcon icon={passwordCriteria.hasSpecialChar ? faCheckCircle : faTimesCircle} valid={passwordCriteria.hasSpecialChar} />
                        At least one special character
                    </Requirement>
                    <Requirement valid={passwordCriteria.hasNumber}>
                        <RequirementIcon icon={passwordCriteria.hasNumber ? faCheckCircle : faTimesCircle} valid={passwordCriteria.hasNumber} />
                        At least one number
                    </Requirement>
                </PasswordRequirements>
                <RegisterButton type="submit">Register</RegisterButton>
            </Form>
        </RegistrationContainer>
    );
};

export default VisitorRegistrationPage;
