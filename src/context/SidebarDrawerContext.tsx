import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProvaiderProps {
    children: ReactNode
}
type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvaider({children}: SidebarDrawerProvaiderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()
  
    // para fechar o menu quando mudar de pagina
    useEffect(() => {
        disclosure.onClose
    }, [router.asPath])

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)