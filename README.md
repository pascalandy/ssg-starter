# [sag-starter](https://github.com/pascalandy/ssg-starter)

A static site generator to build websites using:

- [Eleventy](https://www.11ty.dev)
- [TailwindCSS V2](https://tailwindcss.com)
- [Alpine.js](https://github.com/alpinejs/alpine)

## Workflow

### Clone

```
git clone https://github.com/pascalandy/ssg-starter.git ssg-starter && cd ssg-starter
```

### Install & Update

```
npm install && npm update
```

### Develop & Run Eleventy server

```
npm run build && npm run start
```

### Ship to production

Under directory `_site` HTML file(s) are **minified** and CSS contain **only used** classes. 

```
npm run build
```

### Related docs

- Blog post: https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/
- https://www.11ty.dev/docs/languages/nunjucks/

## Credits

This project [ was forked](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter).

## License

MIT

See `LICENSE` for more information.
