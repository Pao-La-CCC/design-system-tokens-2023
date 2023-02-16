export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
      storySort: {
          method: 'alphabetical',
          order: ['Introduction', 'Styleguide', 'Atoms', ['Readme', '*'], 'Molecules', ['Readme', '*'], 'Organisms', ['Readme', '*']],
          locales: 'en-US',
      }
  }
}