# Typescript template

## 环境设置

### 安装 Node.js

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

### 安装 degit

degit 是一个用于生成项目模板的工具。它可以使用已有的 github repo 作为模版生成新的项目。

```bash
npm install -g degit
```

```bash
degit https://github.com/Anniext/ts_demo
```

### 安装 ESLint

ESLint 是一个代码检查工具，可以在提交代码前进行代码检查。

```bash
npm install -g eslint
```

安装成功后运行 `eslint --init` 即可。

### 安装 pre-commit

pre-commit 是一个代码检查工具，可以在提交代码前进行代码检查。
`pre-commit install` 初始化代码检查工具

```bash
pipx install pre-commit
```

### 安装 prettier

prettier 是一个代码格式化工具，可以在提交代码前进行代码格式化。

```bash
npm install -g prettier
```

安装成功后运行 `prettier --init` 即可。

### 安装 audit

audit 是一个 npm 插件，可以用于检查依赖的安全性。

```bash
npm install -g audit
```

### 安装 typos

typos 是一个拼写检查工具。

```bash
npm install -g typos
```

### 安装 tsc

tsc 是一个 TypeScript 编译器。

```bash
npm install -g typescript
```

### 安装 git cliff

git cliff 是一个生成 changelog 的工具。

```bash
cargo install git-cliff
```

### 安装 jest

jest 是一个测试框架。

```bash
npm install -g jest
npm i -D ts-jest @types/jest
```
