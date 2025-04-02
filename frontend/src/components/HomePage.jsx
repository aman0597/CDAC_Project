import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import HomeImageSrc from '../assets/images/Home.jpg'; 
import AboutUsImage from '../assets/images/AboutUs.jpg'; 
import contactImage from '../assets/images/contact.jpg'; 



const MainContent = styled.main`
  padding: 0; /* Remove padding */
  background-color: #000000; /* Black background color */
  color: #f0f0f0; /* Off-white text color */
  margin-top: 0; /* Remove top margin */
  border-radius: 0; /* Remove border radius */
  box-shadow: none; /* Remove box shadow */
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  margin: 0; /* Remove margin */
`;

const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire area */
  display: block; /* Ensure no gap */
  margin: 0; /* Remove margin */
`;

const WelcomeOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #f0f0f0; /* Off-white text color */
  font-size: 2rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5); /* Dark background with transparency */
  padding: 1rem;
  border-radius: 8px;
  max-width: 80%;
  width: fit-content;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
  padding: 1.5rem; /* Adjust padding */
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #f0f0f0; /* Off-white text color */
  margin-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0; /* Off-white border */
  padding-bottom: 0.5rem;
`;

const ViewMoreButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.6rem;
  color: #000000; /* Black text color */
  background-color: #f0f0f0; /* Off-white background */
  text-decoration: none;
  border-radius: 0.3rem;
  transition: background-color 0.3s ease;
  border: 1px solid #f0f0f0; /* Off-white border */
  margin-top: 1rem; /* Adjust space above button */

  &:hover {
    background-color: #cccccc; /* Lighter grey background on hover */
  }
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem; /* Space between feature items */
`;

const FeatureCard = styled.div`
  background-color: #1c1c1c; /* Dark background for cards */
  padding: 1rem; /* Adjust padding */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33.333% - 2rem); /* Adjust width of each card */
  box-sizing: border-box;
`;

const FeatureHeading = styled.h3`
  font-size: 1.5rem;
  color: #f0f0f0; /* Off-white text color */
  margin-bottom: 0.5rem; /* Adjust margin */
`;

const FeatureText = styled.p`
  font-size: 1rem; /* Adjust font size */
  color: #cccccc; /* Lighter grey text */
  line-height: 1.5;
`;

const AccordionWrapper = styled.div`
  .accordion {
    background-color: #f8f8f8 !important; /* Off-white background for accordion */
    border: 1px solid #e0e0e0 !important; /* Light border to match off-white theme */
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem; /* Adjust space above accordion */
    transition: border-color 0.3s ease; /* Smooth transition */
    overflow: hidden; /* Hide overflow during animation */
  }

  .accordion-button {
    background-color: #ffffff !important; /* White background for button */
    color: #333333 !important; /* Dark text color for contrast */
    border: none;
    padding: 1rem;
    font-size: 1.2rem;
    text-align: left;
    width: 100%;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
    cursor: pointer;
    border-radius: 0.25rem 0.25rem 0 0;
    margin: 0; /* Remove margin to avoid extra space */
    background: none; /* Ensure no default background */
    appearance: none; /* Remove default appearance if any */
    box-shadow: none; /* Ensure no default shadow */
  }

  .accordion-button:hover {
    background-color: #e0e0e0 !important; /* Light grey background on hover */
    color: #000000 !important; /* Darker text color on hover */
  }

  .accordion-button::before {
    content: '\u002B'; /* Plus sign */
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    transition: transform 0.3s ease; /* Smooth transition for icon rotation */
  }

  .accordion-button[aria-expanded='true']::before {
    content: '\u2212'; /* Minus sign */
    transform: translateY(-50%) rotate(180deg); /* Rotate icon when expanded */
  }

  .accordion-body {
    background-color: #f8f8f8 !important; /* Match accordion background */
    color: #333333 !important; /* Dark text color for better readability */
    padding: 0; /* Remove padding when collapsed */
    border: 1px solid #e0e0e0 !important; /* Light border */
    border-radius: 0 0 0.25rem 0.25rem;
    max-height: 0; /* Start collapsed */
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease; /* Smooth transition */
  }

  .accordion-body.open {
    max-height: 300px; /* Adjust based on content height */
    padding: 1rem; /* Ensure padding is applied when expanded */
  }

  /* Hide any default arrows or indicators that might be applied */
  .accordion-button::after {
    display: none; /* Hide any existing arrows */
  }
`;

const AccordionSection = styled.div`
  background-color: #1c1c1c; /* Dark background for accordion section */
  border-radius: 8px;
  padding: 1rem; /* Adjust padding */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adjust shadow for subtle effect */
  margin: 0; /* Remove margin to avoid extra space */
`;
const AccordionHeading = styled.h1`
  color: #f5f5f5; /* Off-white color to match the footer */
  font-size: 3.2rem; /* Increased font size */
  margin-bottom: 1rem; /* Space below the heading */
  text-align: center; /* Center the heading */
  font-weight: bold; /* Make the heading bold */
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TestimonialSection = styled.section`
  padding: 30px;
  background-color: #1a1a1a; /* Example background color matching homepage theme */
  text-align: center;
`;


const TestimonialHeading = styled.h2`
  font-size: 3.2rem; /* Increased font size */
  color: #fff; /* Off-white text color */
  margin-bottom: 20px;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center cards horizontally */
  gap: 20px; /* Space between cards */
  max-width: 1000px; /* Adjusted width to accommodate more cards */
  margin: 0 auto; /* Center the container horizontally */
`;

const TestimonialCard = styled.div`
  background-color: #444; /* Background color matching homepage */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow */
  padding: 20px;
  width: 280px; /* Consistent width for all cards */
  min-height: 180px; /* Ensure all cards have the same minimum height */
  animation: ${fadeIn} 0.8s ease-out;
  text-align: left; /* Align text to the left */
  display: flex;
  flex-direction: column; /* Align text vertically */
  align-items: flex-start; /* Align items to the start of the container */
  box-sizing: border-box; /* Include padding in the width calculation */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
  
  &:hover {
    background-color: #555; /* Change background color on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem; /* Consistent font size */
  color: #ccc; /* Light gray text */
  margin-bottom: 10px;
  line-height: 1.5;
`;

const TestimonialAuthor = styled.p`
  font-size: 0.9rem; /* Consistent font size */
  color: #eee; /* Even lighter gray text */
  font-weight: bold;
`;


const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  // padding: 40px;
  background-color: #1a1a1a; /* Background color for the section */
  color: #f0f0f0; /* Off-white text color */
  text-align: center;
  max-width: 1200px; /* Adjust as needed */
  margin: 0 auto; /* Center align the section */
  margin-bottom: 2rem; /* Adds space below the AboutUs section */

`;

const AboutImageContainer = styled.div`
  flex: 1;
  overflow: hidden; /* Ensure no overflow of the image */
  position: relative;
  height: 100%;
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container */
`;

const AboutContent = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
  max-width: 600px; /* Adjust as needed */
  color:#f0f0f0; /* Dark text color for readability */
`;

const AboutHeading = styled.h2`
  font-size: 2.2rem; /* Adjust size for prominence */
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.1rem; /* Adjust size for readability */
  margin-bottom: 20px;
  line-height: 1.6;
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically, if needed */
  min-height: 100vh; /* Full viewport height */
  padding: 20px;
  background-color: #e9ecef; /* Light background for better visibility */
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #333;
  text-align: center; 
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 0;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background-color: black;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px; /* Space between image and paragraphs */
`;

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainContent>
      <ImageWrapper>
        <HomeImage src={HomeImageSrc} alt="Home" />
        <WelcomeOverlay>
          Welcome to Daffodils Security Gate Entry Pass System
        </WelcomeOverlay>
      </ImageWrapper>
      <Section>
        <Heading>Our Features</Heading>
        <FeatureWrapper>
          <FeatureCard>
            <FeatureHeading>User Authentication and Roles</FeatureHeading>
            <FeatureText>	Secure login mechanisms tailored to different user roles such as Admin, Security Guard & Visitor. This ensures that users only have access to features and data relevant to their role, enhancing overall system security.</FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureHeading>Visitor Management</FeatureHeading>
            <FeatureText>	Allows for the pre-registration of visitors via an online portal, facilitating a smoother check-in process. Visitors receive a digital entry pass that can be scanned upon arrival. Notifications are sent to hosts when their guests arrive, and check-in/check-out records are maintained.</FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureHeading>Resident Digital ID</FeatureHeading>
            <FeatureText>Provides residents with a personal dashboard where they can manage guest authorizations, view visitor history, and receive notifications. This feature enhances resident control over their visitor management and provides easy access to important information.</FeatureText>
          </FeatureCard>
        </FeatureWrapper>
        <ViewMoreButton to="/features">View More</ViewMoreButton>
      </Section>

      <AccordionWrapper>
        <AccordionSection>
        <AccordionHeading>FAQs</AccordionHeading>
        <div className="accordion">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(0)}
              aria-expanded={openIndex === 0}
            >
              What is the Daffodils Security Gate Pass Entry System?
            </button>
            <div className={`accordion-body ${openIndex === 0 ? 'open' : ''}`}>
              <p>The Daffodils Security Gate Pass Entry System is a comprehensive security management solution designed to streamline and secure the entry and exit process for residents, visitors, and delivery partners. It includes features such as visitor management, real-time notifications, and secure access controls.</p>
            </div>
          </div>
          <div className="accordion">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(1)}
              aria-expanded={openIndex === 1}
            >
              How do visitors register in the system?
            </button>
            <div className={`accordion-body ${openIndex === 1 ? 'open' : ''}`}>
              <p>Visitors can register through an online portal, where they have to provide necessary details and receive a digital entry pass. This pass can be presented upon arrival at the gate.</p>
            </div>
          </div>
          <div className="accordion">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(2)}
              aria-expanded={openIndex === 2}
            >
              How is the entry of delivery partners managed?
            </button>
            <div className={`accordion-body ${openIndex === 2 ? 'open' : ''}`}>
              <p>Frequent delivery partners can be provided with recurring access credentials or QR codes for ease of entry. Their entry and exit are tracked, and they can be pre-authorized by residents or administrators.</p>
            </div>
          </div>
          <div className="accordion">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(3)}
              aria-expanded={openIndex === 3}
            >
              How is data privacy maintained in the system?
            </button>
            <div className={`accordion-body ${openIndex === 3 ? 'open' : ''}`}>
              <p>The system complies with data protection laws and employs encryption and secure data storage practices to ensure user privacy and data security.</p>
            </div>
          </div>
          <div className="accordion">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(4)}
              aria-expanded={openIndex === 4}
            >
              What should I do if I encounter technical issues with the system?
            </button>
            <div className={`accordion-body ${openIndex === 4 ? 'open' : ''}`}>
              <p>If you encounter technical issues, you can contact the support team via email or phone. The system also includes a knowledge base and troubleshooting guides for common issues.</p>
            </div>
          </div>

          <div className="accordion">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(5)}
              aria-expanded={openIndex === 5}
            >
              Will there be updates to the system?
            </button>
            <div className={`accordion-body ${openIndex === 5 ? 'open' : ''}`}>
              <p>Yes, the system is regularly updated to include new features, improvements, and security enhancements. Users will be notified of major updates and changes.</p>
            </div>
          </div>
        </AccordionSection>
      </AccordionWrapper>

      <TestimonialSection>
        <TestimonialHeading>Testimonials</TestimonialHeading>
        <TestimonialContainer>
          <TestimonialCard>
            <TestimonialText>
              "The service provided was exceptional! From the moment I reached out, the team was responsive and attentive to all my needs. They went above and beyond to ensure that everything was perfect. Highly recommend!"
            </TestimonialText>
            <TestimonialAuthor>- Rajesh Kumar</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "I had an amazing experience. The staff was friendly, professional, and made me feel valued as a customer. The attention to detail was impressive, and I will definitely be returning in the future."
            </TestimonialText>
            <TestimonialAuthor>- Priya Sharma</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "The quality of the products and the support provided was outstanding. I felt like I was in good hands throughout the entire process. The team’s dedication to customer satisfaction is evident in every interaction."
            </TestimonialText>
            <TestimonialAuthor>- Anjali Verma</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "Exceptional service! The team exceeded all my expectations and provided a seamless experience from start to finish. Their professionalism and commitment to excellence are truly commendable."
            </TestimonialText>
            <TestimonialAuthor>- Rohit Singh</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "This was simply the best experience I’ve ever had. The staff were incredibly helpful and attentive, ensuring that everything was perfect. I would give them five stars without hesitation and recommend them to everyone I know."
            </TestimonialText>
            <TestimonialAuthor>- Neha Patel</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "The team's dedication and commitment to delivering an exceptional service were evident throughout my experience. They addressed all my concerns promptly and ensured a seamless process. Truly impressive!"
            </TestimonialText>
            <TestimonialAuthor>- Aisha Khan</TestimonialAuthor>
          </TestimonialCard>
        </TestimonialContainer>
      </TestimonialSection>



      <AboutSection>
        <AboutImageContainer>
          <AboutImage src={AboutUsImage} alt="About Us" />
        </AboutImageContainer>
        <AboutContent>
          <AboutHeading>About Us</AboutHeading>
          <AboutText>
            We are dedicated to providing the best service possible. Our team is
            committed to excellence and customer satisfaction. Our innovative solutions and customer-centric approach have made us leaders in our industry.
          </AboutText>
          <AboutText>
            Our team consists of experienced professionals who are passionate about what they do. We continually strive to improve and adapt to the ever-changing market demands.
          </AboutText>
        </AboutContent>
      </AboutSection>

      <CenteredWrapper>
      <Container>
        <ContactImage src={contactImage} alt="Contact" />
        <Title>Contact Us</Title>
        <Paragraph>We are delighted to have you here. Explore our services and get in touch with us to learn more about what we offer!</Paragraph>
        <Paragraph>If you have any questions or need assistance, our team is ready to help. Don't hesitate to reach out to us for more information!</Paragraph>
        <Paragraph>For inquiries, support, or feedback, click the button below to contact us directly. We're here to assist you in any way we can.</Paragraph>
        <ButtonWrapper>
          <ContactButton href="/contact">Contact Us</ContactButton>
        </ButtonWrapper>
      </Container>
    </CenteredWrapper>
    </MainContent>
  );
};

export default HomePage;
