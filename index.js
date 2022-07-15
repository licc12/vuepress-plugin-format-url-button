const { path } = require("@vuepress/utils");

module.exports = (options) => {
  return {
    define: {
      /** 匹配pathname URL规则: 默认以/md-ppt/开头，非README.html结尾 **/
      REGX: options.regx || '\/md-ppt\/.*(?<!README.html)$',
      /** 按钮距离父级容器top距离 **/
      TOP: options.top || 30,
      /** 按钮距离父级容器right距离 **/
      RIGHT: options.right || 50,
      /** 按钮的自定义class; 例如：btn-class **/
      BTN_CLASSNAME: options.btnClassName || '',
      /** 按钮的自定义文案 **/
      BTN_TEXT: options.btnText || '按钮',
      /** 需要插入父级的元素的class或者id;例如：.btn-class | #btn-id **/
      PARENT_CLASS_ID: options.parentClassId || '.theme-default-content',
      /** 自定义拼接按钮的link 后缀，例如：/a/b/XXX, 默认 README.html **/
      TARGET_URL: options.targetUrl || 'README.html',
    },
    clientAppEnhanceFiles: path.resolve(__dirname, './lib/client.js'),
    clientAppRootComponentFiles: path.resolve(__dirname, './lib/components/FormatUrlButton.vue')
  }
}
