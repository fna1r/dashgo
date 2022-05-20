import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

import { SubmitHandler, useForm } from 'react-hook-form'



type SignInFormData = {
  email: string;
  password: string;
}


export default function SignIn() {

  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}

      >
        <Stack spacing='4'>
          <Input name='email' type='email' label='E-mail' {...register('email')} />
          <Input name='password' type='password' label='Senha'  {...register('password')} />
        </Stack>
        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
