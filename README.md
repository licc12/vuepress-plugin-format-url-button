# vuepress-plugin-format-url-button <GitHubLink repo="moefyit/vuepress-plugin-format-url-button"/>

:eyes: Add a link button in your vuepress page!

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-format-url-button" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-format-url-button.svg"></a>
    <a href="https://github.com/licc12/vuepress-plugin-format-url-button/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/licc12/vuepress-plugin-format-url-button"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-format-url-button" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-format-url-button.svg"></a>
    <a href="https://www.npmjs.com/package/vuepress-plugin-format-url-button" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-format-url-button.svg"></a>
   <a href="https://github.com/licc12/vuepress-plugin-format-url-button/blob/main/LICENSE"><img alt="GitHub license" src="https://camo.githubusercontent.com/20e20fd59f11d3ae8c122e7dd277e524a97ca731ff34dbff7070918e9730ae39/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6d6f65667969742f76756570726573732d706c7567696e2d64796e616d69632d7469746c65" data-canonical-src="https://img.shields.io/github/license/licc12/vuepress-plugin-format-url-button" style="max-width: 100%;"></a>
</p>

## Dependencies vuepress version

vuepress version v2.0.0+

## Install

```bash
yarn add vuepress-plugin-format-url-button -D
# or use npm
npm i vuepress-plugin-format-url-button -D
```

## Usage

```javascript
module.exports = {
   plugins: [
      'format-url-button',
      {
         regx: '/md-ppt/.*(?<!README.html)$',
         top: 30,
         right: 50,
         btnClassName: '',
         btnText: '进入演示视图',
         parentClassId: '.theme-default-content',
         targetUrl: 'README.html',
      },
   ],
}
```

## Options

配置示例及默认配置

```js
module.exports = {
   plugins: [
      [
         'format-url-button',
         {
            /** 匹配pathname URL规则: 默认以/md-ppt/开头，非README.html结尾 **/
            regx = '\/md-ppt\/.*(?<!README.html)$',
            /** 按钮距离父级容器top距离 **/
            top = 30,
            /** 按钮距离父级容器right距离 **/
            right = 50,
            /** 按钮的自定义class; 例如：btn-class **/
            btnClassName = '',
            /** 按钮的自定义文案 **/
            btnText = '按钮',
            /** 需要插入父级的元素的class或者id;例如：.btn-class | #btn-id **/
            parentClassId = '.theme-default-content',
            /** 自定义拼接按钮的link 后缀，例如：/a/b/XXX, 默认 README.html **/
            targetUrl = 'README.html',
         },
      ],
   ],
}
```
