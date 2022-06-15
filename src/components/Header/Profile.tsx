import { Box, Flex,Text,Avatar } from "@chakra-ui/react";


export function Profile(){
  return(
    <Flex align="center">
        <Box 
        mr="4"
        textAlign="right"
        >
        <Text>
          Julia
        </Text>
        <Text
        color="gray.300"
        fontSize="small"
        >julia.gmail.com</Text>
        </Box>

        <Avatar size="md" name="julia" src="https://avatars.githubusercontent.com/u/80333527?s=96&v=4"/>

      </Flex>
  )
}