# OverReturn

A cautionary tale of what not to do when you're developing a web-app.

## What is OverReturn?

OverReturn is a SvelteKit app that is designed to illustrate a simple, maybe ovious, security concern that can arise when developing a SvelteKit or any web-app for that matter.

## What is the security concern?

If you overreturn data from your `load()` functions, you might not be able to see it, but bots and spiders will be able to. And they'll see it fast.

## How does OverReturn illustrate this?

By simulating a return of some user data to a public page, we can use a web crawling tool to see how a spider or bot might find sensitive data.

## Corresponding Blog Post

[OverReturn: A Cautionary Tale](https://jovianmoon.io/posts/overreturn-a-cautionary-tale)

## Live Project

[OverReturn.jovianmoon.io](https://overreturn.jovianmoon.io)

## Running Locally (if you want)

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
