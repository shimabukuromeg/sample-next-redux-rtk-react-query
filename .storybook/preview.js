import { RouterContext } from  'next/dist/next-server/lib/router-context';

export const decorators = [
  (Story) => (
    <RouterContext.Provider value={{
      push: () => Promise.resolve(),
      replace: () => Promise.resolve(),
      prefetch: () => Promise.resolve(),
    }}>
      <Story />
    </RouterContext.Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
