import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
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
          <Input name='email' type='email' label='E-mail' />
          <Input name='password' type='password' label='Senha' />
        </Stack>
        <Button type='submit' mt='6' colorScheme='pink' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
