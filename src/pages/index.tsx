import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Button, ButtonGroup } from "@chakra-ui/react"

const Index: NextPage<void> = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <Box p="6">
        <Box>
          トップページ
        </Box>
        <Button colorScheme="blue">
          <Link href="/repo">
            リポジトリ
          </Link>
        </Button>
        <Button colorScheme="red">
          <Link href="/pokemon">
            ポケモン
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default Index;
