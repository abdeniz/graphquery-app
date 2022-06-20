import {ChevronDownIcon, Icon, SettingsIcon} from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  GridItem,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {useState} from "react";
import {FiDatabase} from "react-icons/fi";
import {GrNodes} from "react-icons/gr";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import {default as NextLink} from "next/link";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <GridItem
      bg="#fff"
      borderRight="solid 1px #efefef"
      position="relative"
      transition="all 2s"
    >
      <Flex
        flexDirection="column"
        height="100%"
        paddingLeft="4"
        paddingRight="4"
        paddingTop="6"
        paddingBottom="6"
      >
        <Menu>
          {isCollapsed ? (
            <MenuButton
              as={IconButton}
              variant="outline"
              icon={<SettingsIcon />}
              marginBottom="6"
            />
          ) : (
            <MenuButton
              as={Button}
              variant="outline"
              rightIcon={<ChevronDownIcon />}
              textAlign="left"
              size="lg"
              padding="4"
              marginBottom="6"
            >
              <Text fontSize="sm" marginBottom="1">
                University Courses
              </Text>
              <Text fontSize="xs" color="#676873">
                connected | 167.184.116.45
              </Text>
            </MenuButton>
          )}
          <MenuList>
            <MenuItem>Social Media</MenuItem>
            <MenuItem>Something Else</MenuItem>
          </MenuList>
        </Menu>
        <Divider marginBottom={6} />
        {isCollapsed ? (
          <>
            <IconButton
              aria-label="dashboard-button"
              marginBottom="4"
              variant="outline"
              icon={
                <Icon
                  w="6"
                  h="6"
                  color="#121212"
                  as={MdOutlineSpaceDashboard}
                />
              }
            />
            <IconButton
              aria-label="queries-button"
              marginBottom="4"
              icon={<Icon w="6" h="6" color="#121212" as={GrNodes} />}
            />
            <IconButton
              aria-label="databases-button"
              icon={<Icon w="6" h="6" color="#121212" as={FiDatabase} />}
            />
          </>
        ) : (
          <>
            <NextLink href="/">
              <Link>
                <Flex alignItems="center" marginBottom="4">
                  <Icon
                    w="6"
                    h="6"
                    color="#121212"
                    as={MdOutlineSpaceDashboard}
                  />
                  <Text textStyle="h3" color="#121212" marginLeft="4">
                    Dashboard
                  </Text>
                </Flex>
              </Link>
            </NextLink>
            <NextLink href="/query">
              <Link>
                <Flex alignItems="center" marginBottom="4">
                  <Icon w="6" h="6" color="#676873" as={GrNodes} />
                  <Text textStyle="h3" color="#676873" marginLeft="4">
                    Query
                  </Text>
                </Flex>
              </Link>
            </NextLink>
            <NextLink href="/databases">
              <Link>
                <Flex alignItems="center">
                  <Icon w="6" h="6" color="#676873" as={FiDatabase} />
                  <Text textStyle="h3" color="#676873" marginLeft="4">
                    Databases
                  </Text>
                </Flex>
              </Link>
            </NextLink>
          </>
        )}
      </Flex>

      <IconButton
        position="absolute"
        bottom="16"
        right="-5"
        color="#121212"
        zIndex={1}
        aria-label="collapse-menu-button"
        icon={
          isCollapsed ? (
            <Icon w="6" h="6" as={TbLayoutSidebarLeftExpand} />
          ) : (
            <Icon w="6" h="6" as={TbLayoutSidebarLeftCollapse} />
          )
        }
        variant="outline"
        bg="#fff"
        onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
      />
    </GridItem>
  );
};

export default SideNav;
