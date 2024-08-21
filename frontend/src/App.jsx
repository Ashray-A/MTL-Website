import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Link,
  Spacer,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import './App.css';

function App() {
  return (
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
            <Link href="#home">Home</Link>
          </Button>
          <Button variant="link">
            <Link href="#about">About</Link>
          </Button>
          <Button variant="link">
            <Link href="#services">Services</Link>
          </Button>
          <Button variant="link">
            <Link href="#contact">Contact</Link>
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

      {/* Hero Section */}
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

      {/* Footer */}
      <Box as="footer" className="footer" bg={useColorModeValue('gray.100', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
        <VStack className="footer-content">
          <HStack className="footer-links">
            <VStack className="footer-column">
              <Text className="footer-title">Company</Text>
              <Link href="#about">About Us</Link>
              <Link href="#careers">Careers</Link>
              <Link href="#blog">Blog</Link>
            </VStack>
            <VStack className="footer-column">
              <Text className="footer-title">Services</Text>
              <Link href="#services">Web Development</Link>
              <Link href="#consulting">Consulting</Link>
              <Link href="#support">Support</Link>
            </VStack>
            <VStack className="footer-column">
              <Text className="footer-title">Contact</Text>
              <Link href="mailto:info@maalguditechnolabs.com">Email Us</Link>
              <Link href="#location">Our Location</Link>
              <Link href="#contact">Get in Touch</Link>
            </VStack>
            <VStack className="footer-column">
              <Text className="footer-title">Follow Us</Text>
              <Link href="#twitter">Twitter</Link>
              <Link href="#linkedin">LinkedIn</Link>
              <Link href="#facebook">Facebook</Link>
            </VStack>
          </HStack>
          <Divider className="footer-divider" />
          <Text className="footer-bottom">© 2024 Maalgudi Technolabs. All rights reserved.</Text>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
