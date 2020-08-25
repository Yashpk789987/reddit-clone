import React from "react";
import { Box, Link, Flex } from "@chakra-ui/core";
import NextLink from "next/link";

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <Flex bg="tomato" p={4}>
      <Box ml={"auto"}>
        <NextLink href="/login">
          <Link color="white" mr={2}>
            login
          </Link>
        </NextLink>
        <NextLink href="/login">
          <Link color="white">register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
