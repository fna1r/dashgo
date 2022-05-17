import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align='center'
        >
            <Box mr='4' textAlign='right'>
                <Text>Thiago Henrique</Text>
                <Text color='gray.300' fontSize='small'>TiagoH@gmail.com</Text>
            </Box>

            <Avatar size='md' name='Thiago Henrique' />
        </Flex>
    )
}