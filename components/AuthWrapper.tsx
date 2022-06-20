import {useAuth} from "@/lib/auth";
import {ReactNode} from "react";
import Layout from "./Layout";
import Login from "./Login";

type Props = {
  children: ReactNode;
};

const AuthWrapper = ({children}: Props) => {
  const {user} = useAuth();

  if (!user) return <Login />;

  return <Layout>{children}</Layout>;
};

export default AuthWrapper;
