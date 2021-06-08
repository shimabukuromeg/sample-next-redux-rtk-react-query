import {
  useEffect,
  useState,
} from 'react';
import { Router } from 'next/router';
import queryString from 'query-string';

export const useMount = (router: Router) => {
  const [didMounted, setDidMounted] = useState(false);
  useEffect(() => {
    const setRouter = async () => {
      const pathname = router.asPath.split(/[?]/)[0];
      if (router.route !== pathname) {
        const pages: Array<String> = await router.pageLoader.getPageList();
        const urlOption = pages.includes(pathname)
          ? {
            pathname,
            query: queryString.parseUrl(router.asPath).query,
          }
          : {
            pathname: '/400',
          };
        await router.replace(urlOption);
      }
      setDidMounted(true);
    };
    setRouter();
  }, [router]);
  return didMounted;
};
