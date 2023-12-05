import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface PageContentLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const PageContentLayout: React.FC<PageContentLayoutProps> = ({
  children,
  maxWidth,
}) => {
  // Check if children exist and if it's an array with at least two elements
  const hasChildren = React.Children.toArray(children).length >= 2;

  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="95%" justify="center" maxWidth={maxWidth || "860px"}>
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {hasChildren && (
            <>{React.Children.toArray(children)[0]}</>
          )}
        </Flex>
        {/* Right Content */}
        <Box
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          flexGrow={1}
        >
          {hasChildren && (
            <>{React.Children.toArray(children)[1]}</>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default PageContentLayout;

