# websocket-demo

Simple project consisting of a WebSocket server and a HTML page that connects to said WebSocket server.

## Tech Stack

- Server-side
  - NodeJS
  - ESlint
  - [ws](https://github.com/websockets/ws)
  - [nodemon](https://nodemon.io/)

- Client-side (`public/`)
  - Vanilla HTML, JS, CSS
  - Bootstrap

- Client-side (`client/`)
  - Parcel.js
  - Svelte
  - Bulma CSS

## `client/` vs `public/`

`public/` is a vanilla implementation whereas `client/` is powered by [Svelte](https://svelte.dev). Both implementations are identical.

## Installation

### Server-side

WebSocket server is accessible at `ws://localhost:8080`.

```bash
$ cd server && npm install && npm run watch
```

### Client-side (`public/`)

Open `public/index.html` directly in your browser or use a HTTP server to serve the files under this directory.

```bash
$ npx live-server public --port=5000
```

### Client-side (`client/`)

```bash
$ cd client && npm install && npm start
```

Site will be accessible at http://localhost:1234.
