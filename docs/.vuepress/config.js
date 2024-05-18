import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'MessengerBot',
  description: 'The easiest way to build notification-based bots',

  theme: defaultTheme({
    logo: '/images/logo.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
