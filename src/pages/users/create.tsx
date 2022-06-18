import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { Header } from "../../components/Header";
import{ yupResolver} from '@hookform/resolvers/yup'

import { Sidebar } from "../../components/Sidebar";


type CreateUserFormData = {
  name: String,
  passwordConfirmation:String,
  email:String,
  password:String,
  
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('email obrigatório').email('email inválido'),
  password: yup.string().required('senha obrigatória').min(6, 'No minimo 6 caracteres'),
  passwordConfirmation: yup.string().oneOf([
    null, yup.ref('password') //link de validação igual ao password
  ],'as senhas precisam ser iguais')
})

export default function CreateUser(){
  
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async(values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))//aguardar para dar o console.log 
    console.log(values)
  }

  const {register, handleSubmit, formState, errors} = useForm({
    resolver:yupResolver(CreateUserFormSchema)
  })

  return (
    <Box>
      <Header/>
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar/>
        <Box  onSubmit={handleSubmit(handleCreateUser)} as="form"flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          
          <Divider my="6" borderColor="gray.700"/>
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input error={errors.name} name="name" label="nome completo" {...register}></Input>
              <Input error={errors.email} name="email" type="email"label="E-mail"  {...register}></Input>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input  error={errors.password} name="password" type="password"label="Senha"  {...register}></Input>
              <Input  error={errors.passwordConfirmation} name="password_conformation" type="password"label="Confirmação da senha"  {...register}></Input>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href={'/users'}>
                <Button  as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
        </Flex>
    </Box>
  )
}