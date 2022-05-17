import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

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

            <Logo />

            <SearchBox />

            <Flex
                align='center'
                ml='auto'
            >
                <NotificationsNav />
                <Profile />
            </Flex>
        </Flex>
    );
}