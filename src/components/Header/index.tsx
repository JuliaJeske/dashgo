import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo'

import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header(){

  const { onOpen } = useSidebarDrawer();


  //hook de responsividade do chakra
  const isWideVersion = useBreakpointValue({
    base: false,//se estiver em mobile, mostrar apenas a ft
    lg:true,
  })

  return (
    <Flex
    as="header"
    w="100%"
    maxWidth={1400}
    h="20"
    mx='auto'
    mt="4"
    px="6"
    align='center'
    > { !isWideVersion && (
      <IconButton mr="2" fontSize="24" variant="unstyled" onClick={onOpen} aria-label="open navigation"
      icon={<Icon as={RiMenuLine} ></Icon>}
      ></IconButton>
    )}
    <Logo/>
    {isWideVersion && (
      <SearchBox/>
    )}
   
    <Flex
    align='center'
    ml="auto"

    >
      <NotificationsNav/>
      <Profile showProfileData={isWideVersion}/>
    </Flex>
    
    </Flex>
  )
}