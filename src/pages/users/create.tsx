import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'no  mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais')
})


export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const { errors } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(values)
    }

    return (
        <>
                    <Head>
        <script
            dangerouslySetInnerHTML={{
              __html:`
               <!-- Hotjar Tracking Code for https://dash-go.herokuapp.com -->
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3006502,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `
            }}
          />
        </Head>
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box
                    as='form'
                    flex='1'
                    borderRadius={8}
                    bg='gray.800'
                    padding={['6', '8']}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar Usuário</Heading>

                    <Divider my='6' borderColor='gray.700' />

                    <Stack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                name='name'
                                label='Nome
                              completo'
                                error={errors.name}
                                {...register('name')} />
                            <Input
                                name='email'
                                type='email'
                                label='E-mail'
                                error={errors.email}
                                {...register('email')} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                name='password'
                                type='password'
                                label='Senha'
                                error={errors.password}
                                {...register('password')} />
                            <Input
                                name='password_confimation'
                                type='password'
                                label='Repetir
                              senha'
                                error={errors.password_confirmation}
                                {...register('password_confirmation')} />
                        </SimpleGrid>
                    </Stack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>

                            <Button
                                type="submit"
                                colorScheme='pink'
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
            </>
    );
}
