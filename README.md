# AdminPlus - Bootstrap 4 Admin Template

[![npm version](https://badge.fury.io/js/adminplus.svg)](https://badge.fury.io/js/adminplus)

Clean and lightweight Bootstrap 4 Admin Template with awesome premium features. AdminPlus extends Bootstrap 4 with layout options, sidebar navigation and a modern theme and it's a perfect choice for a professional admin template.

![AdminPlus - Bootstrap 4 Admin Template](https://image-tf.s3.envato.com/files/171402185/preview.__large_preview.png)

## Demos

See [AdminPlus Lite Demo](http://adminplus.themekit.io) and [AdminPlus Premium Demo](http://themeforest.net/item/adminplus-bootstrap-4-admin-dashboard/full_screen_preview/14601290?ref=mosaicpro)

> While AdminPlus Lite is free, there are *premium extras available* such as custom dashboard designs, custom components, custom pages, integration samples with various 3rd party plugins, dedicated support from our team and more!

## Introduction

**AdminPlus Lite** is a simple drop-in library which can be used with any existing or new Bootstrap 4 project. AdminPlus Lite includes the most basic assets of the [AdminPlus Premium](http://themeforest.net/item/adminplus-bootstrap-4-admin-dashboard/14601290?ref=mosaicpro) edition, the basic (but awesome!) Bootstrap 4 theme and minimal extras, such as sidebar navigation. 

> It’s also published with npm to provide an easy way of loading and updating AdminPlus Lite in any project.

## Getting started

Get started with the most [basic usage example](docs/basic-usage.md).

### App Boilerplates

> Coming soon!

AdminPlus provides a variety of starter boilerplates for commonly used workflows and tooling such as gulp, browserify and webpack. 

We also provide integration samples with popular front end libraries such as AngularJS, MeteorJS, Vue.js and server side libraries such as Laravel and Ruby on Rails.

---

## Run locally

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