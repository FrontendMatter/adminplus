# Laravel app boilerplate using AdminPlus Lite Bootstrap Theme

For this example we get to see how to work with AdminPlus Lite in the context of a [Laravel](https://laravel.com) application.

### Code
> See [adminplus-boilerplate-laravel](https://github.com/themekit/adminplus-boilerplate-laravel) on Github for the complete code.

#### Demo
> You can also [see a working live demo](http://polar-fjord-74422.herokuapp.com) of the Laravel app boilerplate running on Heroku.

### Features
- use the Laravel recommended [gulp](https://github.com/gulpjs/gulp) workflow with [Laravel Elixir](https://github.com/laravel/elixir)
- import Sass files directly from node_modules using [sass-importer-npm](https://github.com/themekit/sass-importer-npm)
- leverage [browserify](https://github.com/substack/node-browserify) module system to bundle external vendor scripts and app scripts into a single JavaScript file
- customize AdminPlus Lite Sass colors
- create layouts, pages and partials using Laravel [Blade Templates](https://laravel.com/docs/master/blade)
- deploy a Laravel app using [Docker](https://www.docker.com) containers
- deploy a Laravel app using [Heroku](https://www.heroku.com)

---

## Boilerplate usage
### Clone the boilerplate repository
```bash
git clone \ 
    https://github.com/themekit/adminplus-boilerplate-laravel.git \
    my-project
```

```bash
cd my-project
```

### Install dependencies
```bash
composer install && npm install
```

### Build assets
```bash
gulp
```

---

## Files of interest
> The complete list of files modified or created in addition to the default Laravel installation.

```
├── Dockerfile
├── Procfile
├── app
│   └── Http
│       └── routes.php
├── app.json
├── composer.json
├── docker-compose.yml
├── gulpfile.js
├── heroku.nginx.conf
├── package.json
├── public
│   ├── css
│   │   ├── app.css
│   │   └── app.css.map
│   └── js
│       ├── main.js
│       └── main.js.map
└── resources
    ├── assets
    │   ├── js
    │   │   └── main.js
    │   └── sass
    │       ├── _variables.scss
    │       └── app.scss
    └── views
        ├── includes
        │   ├── content.blade.php
        │   └── head.blade.php
        ├── layouts
        │   ├── fixed.blade.php
        │   └── fluid.blade.php
        ├── sidebar.blade.php
        └── welcome.blade.php
```

---

## Running the Laravel app on Heroku
> First, get a free Heroku Account and download the [Heroku Toolbelt](https://toolbelt.heroku.com). Then, login to Heroku:

```bash
heroku login
```

> From the project root directory, create a Heroku app. Note that Heroku generates a random name for your app or you can pass parameter to specify your own app name.

```bash
heroku create
```

> Configure the Heroku app to use the official PHP buildpack:

```bash
heroku buildpacks:set heroku/php
```

#### Deploy
> When you created the app with `heroku create`, a git remote (called `heroku`) was also created and associated with your local git repository. To publish the application, you simply have to push to that remote:

```bash
git push heroku master
```

> Ensure at least one instance of the application is running:

```bash
heroku ps:scale web=1
```

Visit `http://<APP NAME>.herokuapp.com` in your browser to see the Laravel app running.

-- 

## Running the Laravel app with Docker
Docker runs any app, anywhere and allows you to package an application with all of its dependencies into a standardized unit for development and compose your application from microservices, without worrying about inconsistencies between development and production environments. Learn more about [Docker](https://www.docker.com)

### 1. Setup docker
> The easiest way to get started with docker is by using `docker-machine` and `docker-compose`. The rest of this guide assumes you already have both installed.

#### Create a docker machine
```bash    
docker-machine create dev
```
    
#### Start the docker machine
```bash
docker-machine start dev
```

#### Setup environment
> Point the local `docker` client to run commands against the `dev` docker machine:

```bash
eval "$(docker-machine env dev)"
```

### 2. Mounting the host directory
> This step is required to be able to change the source code and see its effect on the application in real time in the running docker container.

#### docker-compose.yml
> Update the volume path from `docker-compose.yml`:

**For Linux**:

```yaml
volumes:
  - .:/app/www
```

**For OS X**:

```yaml
volumes:
  - /Users/<YOUR USERNAME>/docker/<YOUR PROJECT NAME>:/app/www
```

> If you are using Docker Machine on Mac or Windows, your Docker daemon has only limited access to your OS X or Windows filesystem. Docker Machine tries to auto-share your /Users (OS X) or C:\Users (Windows) directory. 

**For Windows**:

```yaml
volumes:
  - /c/Users/<YOUR USERNAME>/docker/<YOUR PROJECT NAME>:/app/www
```

### 3. Start docker container
> From the root directory of this repository:

```bash
docker-compose up -d
```

### 4. Attach to the running container
> The previous command should start a container i.e. `myproject_web_1` but the name could be different. You can verify with `docker ps`. Assuming it's `myproject_web_1`:

```bash
docker exec -it myproject_web_1 bash
```

### 5. Open the Laravel app in your browser
> After starting the container, to see the Laravel app running in your browser you only need to obtain the docker machine IP address and access `http://DOCKER_MACHINE_IP`. You can get the IP by running:

```bash
docker-machine ip dev
```

---

## Laravel documentation
Documentation for the Laravel framework can be found on the [Laravel website](http://laravel.com/docs).