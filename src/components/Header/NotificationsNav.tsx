import { Stack, Icon } from "@chakra-ui/react";
import { RiNotificationFill, RiUserAddLine } from "react-icons/ri";


export function NotificationsNav() {
    return (
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
    )
}