import {supabase} from "@/lib/client";
import {Button, FormLabel, Input} from "@chakra-ui/react";

const login = () => {
  const handleMagicLink = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: {value: string};
    };

    const email = target.email.value;

    await supabase.auth.signIn({email});
  };

  return (
    <div>
      <form onSubmit={handleMagicLink}>
        <FormLabel>E-mail</FormLabel>
        <Input type="email" name="email" />
        <Input as={Button} type="submit">
          Submit
        </Input>
      </form>
    </div>
  );
};

export default login;
