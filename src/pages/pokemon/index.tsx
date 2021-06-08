import { NextPage } from 'next';
import Head from 'next/head';
import { useGetPokemonByNameQuery } from '../../services/pokemon'
import { Box } from '@chakra-ui/react';

const Index: NextPage<void> = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')


  return (
    <>
      <Head>
        <title>ポケモン</title>
      </Head>
      <div>
        ポケモン
      </div>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Index;
