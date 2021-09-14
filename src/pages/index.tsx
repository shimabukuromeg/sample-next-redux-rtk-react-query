import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button, VStack } from '@chakra-ui/react';

const Index: NextPage<void> = () => (
  <>
    <Head>
      <title>トップページ</title>
    </Head>
    <VStack p="40px">
      <div>
        トップページ
      </div>
      <Link href="/sample-checkbox" passHref>
        <Button>
          サンプルチェックボックス画面
        </Button>
      </Link>
    </VStack>
  </>
);

export default Index;
