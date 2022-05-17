import { Icon, Link, Text, LinkProps as ChakraLinksProps } from "@chakra-ui/react"
import { ElementType } from "react";

import { RiDashboardLine } from "react-icons/ri"



interface NavLinkProps extends ChakraLinksProps{
    icon: ElementType;
    children: string;
}

export function NavLink({icon, children, ...res} : NavLinkProps) {
    return (
        <Link display='flex' alignItems='center' {...res}>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='medium'>{children}</Text>
        </Link>
    )
}