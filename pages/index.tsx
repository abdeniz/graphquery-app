import {useAuth} from "@/lib/auth";
import type {NextPage} from "next";

const Home: NextPage = () => {
  const {session, user} = useAuth();

  console.log(session, user);

  return (
    <div>
      <h1>Hello Next!</h1>
    </div>
  );
};

export default Home;
