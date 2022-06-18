import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import{ yupResolver} from '@hookform/resolvers/yup'

type SignInFormData = {
  email:String,
  password:String,
  
}

const signFormSchema = yup.object().shape({
  email: yup.string().required('email obrigatório').email('email inválido'),
  password: yup.string().required('senha obrigatória')
})

export default function SignIn() {
  const {register, handleSubmit , formState , errors} = useForm({
    resolver:yupResolver(signFormSchema)
  })
  
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) =>{ //valores dos inputs sem precisar armazenar em um estado
    await new Promise(resolve => setTimeout(resolve, 2000))//aguardar para dar o console.log 
    console.log(values)
  }
  
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bgColor="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
      > 
      <Stack spacing="4">
      <Input error={errors.email} type="email" name="email" label="Email" {...register('email')}/>
      <Input error={errors.password} type="password" name="password" label="Senha"{...register('password')}/>
      </Stack>
        <Button isLoading={formState.isSubmitting} type='submit' mt="6" size='lg' colorScheme="pink" >Entrar</Button>
      </Flex>
    </Flex>
  )
}
