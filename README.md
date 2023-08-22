# React Starting Template

Configuration :

- Typescript
- ESLint
- Prettier
- Husky + commitlint

## Installation

`npm install`

## ZSH Alias

You can create an alias to quickly create new app from this repo with your terminal using [Oh My Zsh](https://ohmyz.sh/).

Run `nano .zshrc` and go to bottom of the file.

Copy and paste this code :

```
function rcts() {
  git clone git@github.com:BenjaminChoron/react-starting-template.git "$1"
}
```

Save modifications and close the file with `ctrl X` and use `source .zshrc` in you terminal.

Now, you juste have to run `rcts MY_APP_NAME` in your terminal to clone this repo and rename the folder to `MY_APP_NAME`.
