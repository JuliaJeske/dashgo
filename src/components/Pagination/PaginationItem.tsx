import { Button } from "@chakra-ui/react";


interface PaginationItemProps {
  isCurrent?: boolean;
  number:number;
}

export function PaginationItem({isCurrent = false, number}:PaginationItemProps){
 if(isCurrent){
  return (
    <Button 
    size="sm" 
    fontSize="xs" 
    colorScheme="pink" 
    w="4" disabled 
    _disabled={{bgColor:"pink.500",cursor:"default"}}>
      {number}
      </Button>
  )
 } return (
    <Button size="sm" fontSize="xs" bgColor="gray.700" w="4" _hover={{bg:"gray.500"}}>{number}</Button>
  )
 
}