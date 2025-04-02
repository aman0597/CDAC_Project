import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyWrapper = styled.div`
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    color: #333;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const PrivacyPolicy = () => {
    return (
        <PrivacyPolicyWrapper>
            <h1>Privacy Policy</h1>
            <h2>Introduction</h2>
            <p>This Privacy Policy describes how we handle your personal information.</p>
            <h2>Information Collection</h2>
            <p>We collect information when you visit our site...</p>
        </PrivacyPolicyWrapper>
    );
};

export default PrivacyPolicy;
