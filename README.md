# Image modification

Adds custom text to image using [canvas] library

Instructions for Mac on Apple Silicon below

## Installation

To make project work properly first need to install all dependencies according to [documentaion]

```sh
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman python-setuptools libjpeg-turbo
```

## Uninstall dependencies

```sh
brew remove --ignore-dependencies pkg-config cairo pango libpng jpeg giflib librsvg pixman python-setuptools libjpeg-turbo

brew autoremove
```

[canvas]: https://github.com/Automattic/node-canvas?tab=readme-ov-filer>
[documentaion]: https://github.com/Automattic/node-canvas?tab=readme-ov-file#compiling>
