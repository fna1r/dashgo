import { Flex, Text, Input, Icon, Stack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationFill, RiSearch2Line, RiUserAddLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex as='header'
            w='100%'
            maxW='1480px'
            h='20' // 20 * 4 = 80px
            mx='auto'
            mt='auto'
            align='center'
            px='6'

        >
            <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
                dashgo
                <Text as='span' ml='1' color='pink.500'>.</Text>
            </Text>

            <Flex as='label'
                flex='1'
                py='4' // py = paddgin-top
                px='8' // px = padding horizontal
                ml='6'
                maxW={400}
                alignSelf='center'
                position='relative'
                bg='gray.800'
                borderRadius='full'
            >
                <Input
                    color='gray.50'
                    variant='unstyled'
                    px='4'
                    mr='4'
                    placeholder='Buscar na plataforma'
                    _placeholder={{ color: 'gray.400' }}
                />
                <Icon as={RiSearch2Line} fontSize='20' />
            </Flex>

            <Flex
                align='center'
                ml='auto'

            >
                <Stack
                  spacing='8'
                  direction='row'
                  mx='8'
                  pr='8'
                  py='1'
                  color='gray.300'
                  borderRightWidth='1px'
                  borderColor='gray.700'

                >
                    <Icon as={RiNotificationFill} fontSize='20' />
                    <Icon as={RiUserAddLine} fontSize='20' />
                </Stack>

                <Flex
                    align='center'
                >
                    <Box mr='4' textAlign='right'>
                        <Text>Thiago Henrique</Text>
                        <Text color='gray.300' fontSize='small'>TiagoH@gmail.com</Text>
                    </Box>

                    <Avatar size='md' name='Thiago Henrique'/>
                </Flex>
            </Flex>
        </Flex>
    );
}