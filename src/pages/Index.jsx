import { Container, VStack, Heading, Collapse, Button, Text, useDisclosure } from "@chakra-ui/react";

const Index = () => {
  const { isOpen: isOpenOne, onToggle: onToggleOne } = useDisclosure();
  const { isOpen: isOpenTwo, onToggle: onToggleTwo } = useDisclosure();
  const { isOpen: isOpenThree, onToggle: onToggleThree } = useDisclosure();

  return (
    <Container centerContent maxW="40%" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading mb={4}>Ireland's History Highlights</Heading>

        <Button onClick={onToggleOne} width="full">
          Ancient Ireland
        </Button>
        <Collapse in={isOpenOne}>
          <Text p={4} borderWidth="1px" borderRadius="md">
            Ancient Ireland, known for its mesmerizing landscapes and mystical legends, dates back to 6000 BC. The island was inhabited by the Celts in the Iron Age, bringing with them their rich culture and traditions.
          </Text>
        </Collapse>

        <Button onClick={onToggleTwo} width="full">
          Medieval Ireland
        </Button>
        <Collapse in={isOpenTwo}>
          <Text p={4} borderWidth="1px" borderRadius="md">
            During the medieval period, Ireland was known for its monastic culture, which played a significant role in preserving Christian teachings and literature during the Dark Ages. The famous Book of Kells, created around 800 AD, is a testament to this era.
          </Text>
        </Collapse>

        <Button onClick={onToggleThree} width="full">
          Modern Ireland
        </Button>
        <Collapse in={isOpenThree}>
          <Text p={4} borderWidth="1px" borderRadius="md">
            The 20th century was pivotal for Ireland, marked by the Easter Rising of 1916, leading to its independence from the United Kingdom in 1922. Today, Ireland is known for its vibrant culture, technological prowess, and dynamic economy.
          </Text>
        </Collapse>
      </VStack>
    </Container>
  );
};

export default Index;
