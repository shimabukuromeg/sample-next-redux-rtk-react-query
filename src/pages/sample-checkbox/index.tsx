import { NextPage } from 'next';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import { HookForm } from '../../components/Sample/HookForm';

const Index: NextPage<void> = () => (
  <>
    <Head>
      <title>チェックボックスのサンプル作る</title>
    </Head>
    <VStack>
      <div>
        チェックボックスのサンプル作る
      </div>
      <HookForm />
    </VStack>
  </>
);

export default Index;
