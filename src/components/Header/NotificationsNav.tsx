import { Stack, Icon } from "@chakra-ui/react";
import { RiNotificationFill, RiUserAddLine } from "react-icons/ri";


export function NotificationsNav() {
    return (
        <Stack
            spacing={['6','8']} // responsividade quando tiver no mobile o tamanho é 6 = 16px nos demais é 8 = 32px
            direction='row'
            mx={['6','8']} // responsividade quando tiver no mobile o tamanho é 6 = 16px nos demais é 8 = 32px
            pr={['6','8']} // responsividade quando tiver no mobile o tamanho é 6 = 16px nos demais é 8 = 32px
            py='1'
            color='gray.300'
            borderRightWidth='1px'
            borderColor='gray.700'

        >
            <Icon as={RiNotificationFill} fontSize='20' />
            <Icon as={RiUserAddLine} fontSize='20' />
        </Stack>
    )
}