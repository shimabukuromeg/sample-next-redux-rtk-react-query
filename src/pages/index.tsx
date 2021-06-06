import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { Box, Square, Circle } from '@chakra-ui/react';

const Index: NextPage<void> = () => {
  const {
    isLoading, error, data, isFetching,
  } = useQuery('repoData-shimabukuro', () => fetch(
    'https://api.github.com/users/shimabukuromeg/repos',
  ).then((res) => res.json()));

  if (isLoading) return <div>ローディング中</div>;

  if (error) return <div>{`エラー：${error}`}</div>;

  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <Box p="6">
        <div>
          <h1>トップページ</h1>
        </div>
        <div>
          {
            data.map((item: any) => (
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box p="6">
                  <div>{`name: ${item.name}`}</div>
                  <div>
                    {`description: ${item.description}`}
                  </div>
                </Box>
              </Box>
            ))
          }
          <div>{isFetching ? 'Updating...' : ''}</div>
        </div>
      </Box>
    </>
  );
};

export default Index;
