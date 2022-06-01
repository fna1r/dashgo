import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

//personalizando o grafico


export default function Dashboard() {
    return (
        <Flex direction='column'>
           sasd
        </Flex>
    )
}