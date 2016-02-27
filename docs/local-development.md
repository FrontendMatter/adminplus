# Local development

This guide refers to local development with the AdminPlus Lite library, which is common if you're looking to contribute or customize the source. If you're looking for instructions on how to use AdminPlus Lite in your project, see [Getting started](docs/home.md#getting-started).

---

### Clone or fork repository
```bash
git clone https://github.com/themekit/adminplus.git
```

```bash
cd adminplus
```

### Install dependencies
> The adminplus package does not include any vendor libraries. To install all the dependencies, run: 

```bash
npm install
```

## Build
> You can easily build adminplus yourself. Our build tool of choice is webpack and any of the following commands will create the files `dist/adminplus.js` and `dist/adminplus.css`

### Install dev dependencies
> Before you can build adminplus, make sure webpack is installed globally:

```bash
npm install -g webpack
```

### Production build
Includes minification and several optimizations:

```bash
npm run build
```

### Development build
A faster build suited for development, with no optimizations and without minification:

```bash
npm run build-dev
```
	
### Watch
Start an initial development build and then FAST continuous incremental builds:

```bash
npm run dev
```

## Link from your projects
You can use `npm link` to create a global symlink on your system, pointing to your local development repository clone.

#### Create link
> From the repository root directory:

```bash
npm link
```

#### Link from project
> From any project using `npm`:

```bash
npm link adminplus
```

Now `node_modules/adminplus` will be linked to your local development repository.