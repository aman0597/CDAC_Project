import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLightbulb, faShieldAlt, faGlobeAmericas, faLock, faHeadset, faBell, faPlug, faUserCircle, faKey, faChartLine, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FeaturesWrapper = styled.div`
  padding: 2rem;
  background-color: #111111; /* Dark black background */
  margin: 0; /* Remove margin to ensure alignment with navbar */
`;

const FeatureSection = styled.section`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #ffffff; /* Off-white background for sections */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow for better contrast */
  display: flex;
  align-items: center;
  animation: ${slideIn} 0.5s ease-out; /* Slide-in animation */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #333333; /* Dark grey for icons */
  margin-right: 1rem;
  transition: color 0.3s ease;

  ${FeatureSection}:hover & {
    color: #007bff; /* Change color on section hover */
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureHeading = styled.h2`
  font-size: 1.75rem;
  color: #000000; /* Black for headings */
  margin-bottom: 0.5rem;
  font-weight: 600;
  animation: ${fadeIn} 0.5s ease-out; /* Fade-in animation */
`;

const FeatureParagraph = styled.p`
  font-size: 1rem;
  color: #000000; /* Black for paragraph text */
  line-height: 1.6;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.5s ease-out; /* Fade-in animation */
`;

const FeaturesPage = () => {
  return (
    <FeaturesWrapper>
      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faCheck} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Always Verified</FeatureHeading>
          <FeatureParagraph>
            Our users are mandatorily approved by members of the community. The result: zero bots, only verified users.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faLightbulb} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Decision Makers</FeatureHeading>
          <FeatureParagraph>
            The vast majority of our residents are adults of the household, given that it is used to ensure security.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faShieldAlt} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Stay Safe</FeatureHeading>
          <FeatureParagraph>
            With your community gate secure, you can get through your day knowing you and your loved ones are always that much safer. 
            Bonus: also know when your parcel is about to arrive.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faGlobeAmericas} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Stay Close</FeatureHeading>
          <FeatureParagraph>
            It's easy to miss out on important updates, a neighbouring flat for sale, a South Indian cook available at 6am, the due date on maintenance payment. 
            Get all the updates on the Daffodils security system website.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faLock} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Stay Private</FeatureHeading>
          <FeatureParagraph>
            We go above and beyond what's required by the law to ensure that your personal information is yours alone, 
            by implementing GDPR, the gold standard on privacy, in addition to existing and upcoming Indian laws.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      {}
      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faHeadset} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Always Available Support</FeatureHeading>
          <FeatureParagraph>
            Our dedicated support team is available around the clock to assist with any issues or questions you may have, ensuring you receive help whenever you need it.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faBell} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Instant Updates</FeatureHeading>
          <FeatureParagraph>
            Stay informed with real-time notifications about visitor entries, important community updates, and more, ensuring you never miss crucial information.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faPlug} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Seamless Integration</FeatureHeading>
          <FeatureParagraph>
            Our system integrates effortlessly with your existing security infrastructure, making the transition smooth and hassle-free.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faUserCircle} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Intuitive Design</FeatureHeading>
          <FeatureParagraph>
            Navigate our platform with ease thanks to a user-friendly interface designed to make managing community security simple and straightforward.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faKey} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Tailored Permissions</FeatureHeading>
          <FeatureParagraph>
            Customize access levels for different users to ensure that each person has the appropriate permissions, enhancing both security and management efficiency.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faChartLine} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Detailed Insights</FeatureHeading>
          <FeatureParagraph>
            Gain valuable insights into community activity with our comprehensive analytics, helping you make data-driven decisions to improve security and engagement.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>

      <FeatureSection>
        <FeatureIcon><FontAwesomeIcon icon={faMobileAlt} /></FeatureIcon>
        <FeatureContent>
          <FeatureHeading>Access Anywhere</FeatureHeading>
          <FeatureParagraph>
            Our platform is fully optimized for mobile devices, allowing you to manage community security and stay connected on the go.
          </FeatureParagraph>
        </FeatureContent>
      </FeatureSection>
    </FeaturesWrapper>
  );
};

export default FeaturesPage;
