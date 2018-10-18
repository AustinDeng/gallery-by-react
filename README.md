# Gallery By React

---

使用 React.js 开发的图片画廊应用。[在线演示](https://austindeng.github.io/gallery-by-react/)

## 本地预览

克隆到本地并运行项目

        $ git clone git@github.com:AustinDeng/gallery-by-react.git
        $ cd gallery-by-react/
        $ npm install
        $ npm run start
        
使用浏览器打开 [`http://localhost:8000/webpack-dev-server/`](http://localhost:8000/webpack-dev-server/)

## 项目结构

        D:\code\old\gallery-by-react
        ├── .babelrc                                // 转换 ES6 语法
        ├── .editorconfig                           // 编辑器配置文件
        ├── .eslintrc                               // 语法校验配置文件
        ├── .git                                    // git 仓库
        ├── .gitignore                              // git 需要忽略的文件
        ├── .npminstall.done
        ├── .yo-rc.json                             // yeomen配置文件
        ├── cfg                                     // webpack 配置文件
        |  ├── base.js
        |  ├── defaults.js
        |  ├── dev.js
        |  ├── dist.js
        |  └── test.js
        ├── dist                                    // 出口文件
        ├── karma.conf.js                           // 测试配置文件
        ├── package-lock.json
        ├── package.json                            // 依赖包
        ├── server.js                               // 本地服务器配置
        ├── src                                     // 项目源码
        |  ├── actions                              // Flux action
        |  |  └── README.md
        |  ├── components
        |  |  ├── ControllerUnit.js                 // 控制组件
        |  |  ├── ImgFigure.js                      // 图片组件
        |  |  └── Main.js                           // Main 组件
        |  ├── config                               // webpack 配置文件
        |  |  ├── base.js
        |  |  ├── dev.js
        |  |  ├── dist.js
        |  |  ├── README.md
        |  |  └── test.js
        |  ├── data                                 // 数据文件
        |  |  └── imageData.json
        |  ├── favicon.ico
        |  ├── fonts
        |  |  └── icons
        |  |     ├── turn-arrow.eot
        |  |     ├── turn-arrow.svg
        |  |     ├── turn-arrow.ttf
        |  |     └── turn-arrow.woff
        |  ├── images                               // 图片存放的文件
        |  ├── index.html 
        |  ├── index.js
        |  ├── sources
        |  |  └── README.md
        |  ├── stores
        |  |  └── README.md
        |  └── styles
        |     └── App.scss
        ├── test                                    // 测试文件
        └── webpack.config.js                       // webpack 配置文件

## 感谢

:tada: [materliu](https://github.com/materliu) :tada:

## 最后

:star2: 欢迎点赞收藏 :star2:
:clap: :clap: 欢迎 Issues  :clap: 
