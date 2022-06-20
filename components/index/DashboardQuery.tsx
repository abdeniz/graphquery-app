import {Box, Icon, IconButton, StackItem, Text} from "@chakra-ui/react";
import {ReactNode} from "react";
import {IconType} from "react-icons";
import {IoEllipsisHorizontal} from "react-icons/io5";

type Props = {
  title: string;
  icon: IconType;
  nodeCount: number | string;
};

const DashboardQuery = ({title, icon, nodeCount}: Props) => {
  return (
    <Box
      rounded="4px"
      bg="#fff"
      padding="4"
      pr="12"
      border="solid 1px #efefef"
      position="relative"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Icon as={icon} w="8" h="8" mb="2" />
      <div>
        <Text textStyle="h3" fontWeight={600} maxW="20ch">
          {title}
        </Text>
        <Text fontSize={12}>{nodeCount} nodes</Text>
      </div>
      <IconButton
        aria-label="quickaccess-button"
        icon={<Icon as={IoEllipsisHorizontal} w="5" h="5" />}
        position="absolute"
        top="3"
        right="4"
        variant="ghost"
      />
    </Box>
  );
};

export default DashboardQuery;
