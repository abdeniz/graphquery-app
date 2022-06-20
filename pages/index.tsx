import DashboardQuery from "@/components/index/DashboardQuery";
import {useAuth} from "@/lib/auth";
import {GridItem, HStack, Text} from "@chakra-ui/react";
import type {NextPage} from "next";
import {AiOutlineNodeIndex} from "react-icons/ai";

const Home: NextPage = () => {
  const {user} = useAuth();

  return (
    <GridItem overflowY="scroll" padding="16" bg="#fafafa" h="100%">
      <Text textStyle="h2" mb="8">
        Hello {user?.email}!
      </Text>
      <Text textStyle="h1" mb="4">
        Quick access
      </Text>
      <HStack spacing="4" alignItems="stretch">
        <DashboardQuery
          title="Courses using Clean Code"
          icon={AiOutlineNodeIndex}
          nodeCount="42"
        />
        <DashboardQuery
          title="Courses with IT Fundamentals topic"
          icon={AiOutlineNodeIndex}
          nodeCount="39"
        />
        <DashboardQuery
          title="Books used in Introduction to Computer Science"
          icon={AiOutlineNodeIndex}
          nodeCount="4"
        />
      </HStack>
    </GridItem>
  );
};

export default Home;
