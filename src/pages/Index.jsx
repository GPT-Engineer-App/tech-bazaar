import { useState } from "react";
import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Category 1", price: "$299.99", image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", category: "Category 2", price: "$399.99", image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", category: "Category 1", price: "$499.99", image: "/images/product3.jpg" },
    { id: 4, name: "Product 4", category: "Category 3", price: "$599.99", image: "/images/product4.jpg" },
  ]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const productsToDisplay = searchQuery ? filteredProducts : products;

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Products</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>About Us</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
        <InputGroup maxW="400px" ml={4}>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <InputRightElement children={<FaSearch color="gray.300" />} />
        </InputGroup>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Featured Product</Heading>
        <Image src="/images/featured-product.jpg" alt="Featured Product" boxSize="300px" mx="auto" mb={4} />
        <Text fontSize="xl">Discover the latest in electronics with our featured product of the month!</Text>
        <Button colorScheme="blue" mt={4}>Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6} textAlign="center">Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {productsToDisplay.map(product => (
            <GridItem key={product.id}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Heading size="md">{product.name}</Heading>
                  <Text mt={2}>{product.price}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <HStack spacing={8}>
            <Link href="#" _hover={{ color: "blue.300" }}><FaFacebook size="24px" /></Link>
            <Link href="#" _hover={{ color: "blue.300" }}><FaTwitter size="24px" /></Link>
            <Link href="#" _hover={{ color: "blue.300" }}><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Terms of Service</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Privacy Policy</Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;