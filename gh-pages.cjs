var ghpages = require('gh-pages');

ghpages.publish(
  'dist', // path to de la version compilada
  {
    branch: 'master',
    repo: 'https://github.com/juanfranbrv/solo-svelte-pages.git', // Update to point to your repository
    user: {
      name: 'Juanfran', // update to use your name
      email: 'juanfranbrv@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);