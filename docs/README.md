---
home: true
title: Home
heroImage: /images/logo.png
actions:
  - text: Get Started
    link: /get-started.html
    type: primary

  - text: API docs
    link: /api/index.html
    type: secondary

features:
  - title: Simplicity First
    details: Provide an easy user experience to make it as accessible as possible for your users.
  - title: LightWeight
    details: Lighter than traditional messenger bots.
  - title: Performant
    details: Better optimization for better performance than ever before.
  - title: Themes
    details: Adopted Material You, allowing users to customize the theme.
  - title: Package Manager
    details: It makes it easier to manage project-specific dependencies like npm.
  - title: Many Languages
    details: Many languages besides JavaScript.

footer: MIT Licensed | Copyright © 2024-present MesengerBotTeam
---

### As Easy as you are a official api

```javascript
const client = BotProject.getClient(); // or .client

client.on('message', (data) => {
  if (data.message === '!ping') {
    data.room.send('pong!');
  }
})
```

::: tip

We also have APIs for a variety of other users.
:::

<!-- 
This is the content of home page. Check [Home Page Docs][default-theme-home] for more details.

[default-theme-home]: https://vuejs.press/reference/default-theme/frontmatter.html#home-page -->
