import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfilePros {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfilePros) {
    return (
        <Flex
            align='center'
        >
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Thiago Henrique</Text>
                    <Text color='gray.300' fontSize='small'>TiagoH@gmail.com</Text>
                </Box>
            )}

            <Avatar size='md' name='Thiago Henrique' src="https://avatars.githubusercontent.com/u/72626831?s=400&u=0321da9b4ef1f0fe173c4ac4a95de6e396ece60a&v=4"/>
        </Flex>
    )
}