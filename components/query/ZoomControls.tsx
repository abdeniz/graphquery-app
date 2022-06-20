import {Box, Flex, Icon, IconButton} from "@chakra-ui/react";
import {FiZoomIn, FiZoomOut} from "react-icons/fi";

const ZoomControls = () => {
  return (
    <Box position="absolute" right="6" top="6">
      <Flex flexDir="column">
        <IconButton
          aria-label="zoom-in-button"
          variant="outline"
          icon={<Icon margin="2" w="6" h="6" as={FiZoomIn} />}
          bg="#fff"
          marginBottom="2"
          color="#121212"
        />
        <IconButton
          aria-label="zoom-out-button"
          variant="outline"
          icon={<Icon margin="2" w="6" h="6" as={FiZoomOut} />}
          color="#121212"
          bg="#fff"
        />
      </Flex>
    </Box>
  );
};

export default ZoomControls;
