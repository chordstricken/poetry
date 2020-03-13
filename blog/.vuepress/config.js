module.exports = {
  title: 'Jason Wright\'s Poetry',
  description: 'Poems by Jason Wright',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    summary: false,
    canonical_base:'https://jasonwright.ink',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      blogPluginOptions.globalPagination.lengthPerPage = 15;
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Poems',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      copyright: [
        {
          text: 'Copyright ©2020 Jason Wright',
          link: '/',
        },
      ],
    },
  },
}
