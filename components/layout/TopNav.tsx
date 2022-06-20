import {useAuth} from "@/lib/auth";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

type Props = {};

const TopNav = (props: Props) => {
  const {user, signOut} = useAuth();

  const username = user?.email;

  return (
    <GridItem
      bg="#fff"
      rowSpan={1}
      colSpan={2}
      borderBottom="solid 1px #efefef"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        paddingLeft="6"
        paddingRight="6"
      >
        <Image src="/logo.svg" alt="logo" />
        <Flex alignItems="center">
          <Avatar
            name={username}
            // src={avatarUrl}
            size="sm"
            marginRight={2}
            boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
          />
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              fontSize="sm"
              rightIcon={<ChevronDownIcon />}
            >
              {username}
            </MenuButton>
            <MenuList>
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default TopNav;
