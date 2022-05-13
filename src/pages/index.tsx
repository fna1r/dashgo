import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex // isso é uma div
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex as="form" // nomeando para ser um form
        w="100%"
        maxW={380}
        bg="gray.700" // bg = backgraund
        p="8" // p = padding 8 * 4 = 32px ou 8 / 4 = 2rem
        borderRadius={8} // 8 entre {} é 8px
        flexDirection="column" // pra fazer os input ficar um abaixo do ouotro
      >
        <Stack spacing='4'>
          <FormControl>


            <FormLabel htmlFor='email'>E-mail</FormLabel>
            <Input
              name='email'
              id='email'
              type='email'
              focusBorderColor='pink.500'
              bgColor='gray.900'
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>password</FormLabel>
            <Input
              name='password'
              id='password'
              type='password'
              focusBorderColor='pink.500'
              bgColor='gray.900'
              variant="filled"
              _hover={{
                bgColor: 'regray.900'
              }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button type='submit' mt='6' colorScheme='pink' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
