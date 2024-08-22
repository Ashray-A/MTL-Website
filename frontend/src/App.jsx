import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Spacer,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactUs from './components/ContactUs';

import './App.css';

function App() {
  return (
    <Router>
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Flex
          as="nav"
          className="navbar"
          bg={useColorModeValue('gray.100', 'gray.900')}
          boxShadow="md"
          position="sticky"
          top="0"
          zIndex="sticky"
        >
          <Text className="logo">Maalgudi Technolabs</Text>
          <Spacer />
          <Stack
            className="nav-links"
            direction={{ base: 'column', md: 'row' }}
            align="center"
            display={{ base: 'none', md: 'flex' }}
          >
            <Button variant="link">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="link">
              <Link to="/about">About</Link>
            </Button>
            <Button variant="link">
              <Link to="/services">Services</Link>
            </Button>
            <Button variant="link">
              <Link to="/contact">Contact</Link>
            </Button>
          </Stack>
          {/* Mobile Menu Button */}
          <Button
            className="mobile-menu"
            colorScheme="teal"
            variant="outline"
            display={{ base: 'block', md: 'none' }}
          >
            Menu
          </Button>
        </Flex>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        {/* Footer */}
        <Box as="footer" className="footer" bg={useColorModeValue('gray.100', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
          <VStack className="footer-content">
            <HStack className="footer-links">
              <VStack className="footer-column">
                <Text className="footer-title">Company</Text>
                <Link to="/about">About Us</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/blog">Blog</Link>
              </VStack>
              <VStack className="footer-column">
                <Text className="footer-title">Services</Text>
                <Link to="/services">Web Development</Link>
                <Link to="/consulting">Consulting</Link>
                <Link to="/support">Support</Link>
              </VStack>
              <VStack className="footer-column">
                <Text className="footer-title">Contact</Text>
                <Link to="mailto:info@maalguditechnolabs.com">Email Us</Link>
                <Link to="/location">Our Location</Link>
                <Link to="/contact">Get in Touch</Link>
              </VStack>
              <VStack className="footer-column">
                <Text className="footer-title">Follow Us</Text>
                <Link to="#twitter">Twitter</Link>
                <Link to="#linkedin">LinkedIn</Link>
                <Link to="#facebook">Facebook</Link>
              </VStack>
            </HStack>
            <Divider className="footer-divider" />
            <Text className="footer-bottom">© 2024 Maalgudi Technolabs. All rights reserved.</Text>
          </VStack>
        </Box>
      </Flex>
    </Router>
  );
}

function Home() {
  return (
    <Box as="section" className="hero" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box className="hero-content">
        <Heading className="hero-heading">Welcome to Maalgudi Technolabs</Heading>
        <Text className="hero-text">
          We provide innovative tech solutions.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

function About() {
  return <div>About Us</div>;
}

function Services() {
  return <div>Our Services</div>;
}

export default App;
