import {supabase} from "@/lib/client";
import {Button, Flex, FormLabel, Input} from "@chakra-ui/react";

const Login = () => {
  const handleMagicLink = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: {value: string};
    };

    const email = target.email.value;

    await supabase.auth.signIn({email});
  };

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <form onSubmit={handleMagicLink}>
        <FormLabel>E-mail</FormLabel>
        <Input required type="email" name="email" mb="2" />
        <Button
          as={Button}
          type="submit"
          value="Get magic link"
          colorScheme="red"
          w="100%"
        >
          Get magic link
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
