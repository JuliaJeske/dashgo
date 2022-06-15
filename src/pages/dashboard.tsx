import dynamic from 'next/dynamic'

import { Box, Flex, SimpleGrid, Text ,theme} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(()=> import('react-apexcharts'),{
  ssr:false //server side rendering desligado
})


const options = { //estilização de gráfico
  chart: {
    toolbar: {
       show: false,
    },
    zoom: {
       enabled: false,
    },
    foreColor: theme.colors.gray[500],
 },
 grid: {
    show: false,
 },
 dataLabels: {
    enabled: false,
 },
 tooltip: {
    enabled: false,
 },
 xaxis: {
    type: 'datetime',
    axisBorder: {
       color: theme.colors.gray[600]
    },
    axisTicks: {
       color: theme.colors.gray[600]
    },
    categories: [
       '2021-06-10T00:00:00.000Z',
       '2021-06-11T00:00:00.000Z',
       '2021-06-12T00:00:00.000Z',
       '2021-06-13T00:00:00.000Z',
       '2021-06-14T00:00:00.000Z',
       '2021-06-15T00:00:00.000Z',
       '2021-06-16T00:00:00.000Z'
    ],
 },
 fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
       shade: 'dark',
       opacityFrom: 0.7,
       opacityTo: 0.3,
    }
 }
};

const series = [ //tipo de dados no gráfico
  {name: 'series1', data:[31,120,12,45,67,87,45]}
]


export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>

      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar/>
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}