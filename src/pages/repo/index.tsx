import { NextPage } from 'next';
import Head from 'next/head';
import { useGetRepoByUseNameQuery } from '../../services/github'
import { Box } from '@chakra-ui/react';

const Index: NextPage<void> = () => {
  const { data, error, isLoading } = useGetRepoByUseNameQuery('shimabukuromeg');
  console.log('error');
  console.log(error);

  return (
    <>
      <Head>
        <title>りぽじとりリスト</title>
      </Head>
      <div>
        りぽじとりリスト
      </div>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
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
          </>
        ) : null}
      </div>
    </>
  );
};

export default Index;
