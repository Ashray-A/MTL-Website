import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Link,
  Spacer,
  useColorModeValue,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react';

function App() {
  return (
    <Flex
      direction="column"
      minH="100vh"
    >
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: '1rem', md: '1.5rem', lg: '2rem' }}
        bg={useColorModeValue('gray.100', 'gray.900')}
        boxShadow="md"
        position="sticky"
        top="0"
        zIndex="sticky"
      >
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          Maalgudi Technolabs
        </Text>
        <Spacer />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
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
          display={{ base: 'block', md: 'none' }}
          colorScheme="teal"
          variant="outline"
          onClick={() => alert('Mobile menu opened')}
        >
          Menu
        </Button>
      </Flex>

      {/* Hero Section */}
      <Box
        as="section"
        flex="1"
        bg={useColorModeValue('gray.50', 'gray.800')}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        padding={{ base: '2rem', md: '4rem' }}
      >
        <Box maxWidth={{ base: '90%', sm: '80%', md: '70%', lg: '60%' }}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} marginBottom="1rem">
            Welcome to Maalgudi Technolabs
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} marginBottom="2rem">
            We provide innovative tech solutions to help your business thrive in
            the digital age.
          </Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg={useColorModeValue('gray.100', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        padding={{ base: '1.5rem', md: '2rem' }}
        boxShadow="md"
      >
        <VStack align="start" spacing={4} maxWidth="1200px" margin="0 auto">
          <HStack
            spacing={{ base: 6, md: 10 }}
            width="100%"
            justify="space-between"
            wrap="wrap"
          >
            {/* Footer Links */}
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Company</Text>
              <Link href="#about">About Us</Link>
              <Link href="#careers">Careers</Link>
              <Link href="#blog">Blog</Link>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Services</Text>
              <Link href="#services">Web Development</Link>
              <Link href="#consulting">Consulting</Link>
              <Link href="#support">Support</Link>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Contact</Text>
              <Link href="mailto:info@maalguditechnolabs.com">Email Us</Link>
              <Link href="#location">Our Location</Link>
              <Link href="#contact">Get in Touch</Link>
            </VStack>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Follow Us</Text>
              <Link href="#twitter">Twitter</Link>
              <Link href="#linkedin">LinkedIn</Link>
              <Link href="#facebook">Facebook</Link>
            </VStack>
          </HStack>
          <Divider marginY="4" />
          <Text alignSelf="center" pt="2" fontSize={{ base: 'sm', md: 'md' }}>
            © 2024 Maalgudi Technolabs. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
