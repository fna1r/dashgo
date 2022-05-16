import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' padding='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal' >Usuários</Heading>

                        <Button as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            Criar novo usuário</Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Thiago Henrique</Text>
                                        <Text fontSize='sm' color='gray.300'>thiagoHe@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>08 de janeiro, 2023</Td>
                                <Td>
                                    <Button as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='15' />}
                                    >
                                        Editar</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Clara</Text>
                                        <Text fontSize='sm' color='gray.300'>Clara@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>08 de janeiro, 2023</Td>
                                <Td>
                                    <Button as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='15' />}
                                    >
                                        Editar</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Marcelo</Text>
                                        <Text fontSize='sm' color='gray.300'>Marcelo@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>10 de janeiro, 2023</Td>
                                <Td>
                                    <Button as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='15' />}
                                    >
                                        Editar</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    );
}