const { path } = require("@vuepress/utils");

module.exports = (options) => {
  return {
    define: {
      /** 匹配pathname URL规则: 默认以/md-ppt/开头，.html结尾 **/
      REGX: options.regx || '\/md-ppt\/.*\/*.html$',
      /** 按钮距离父级容器top距离 **/
      TOP: options.top || 30,
      /** 按钮距离父级容器right距离 **/
      RIGHT: options.right || 50,
      /** 按钮的自定义class; 例如：btn-class **/
      BTN_CLASSNAME: options.btnClassName || '',
      /** 按钮的自定义文案 **/
      BTN_TEXT: options.btnText || '按钮',
      /** 目标目录 */
      PATH_URL: options.pathUrl || 'mdppt',
      /** 需要插入父级的元素的class或者id;例如：.btn-class | #btn-id **/
      PARENT_CLASS_ID: options.parentClassId || '.theme-default-content',
    },
    clientAppEnhanceFiles: path.resolve(__dirname, './lib/client.js'),
    clientAppRootComponentFiles: path.resolve(__dirname, './lib/components/FormatUrlButton.vue')
  }
}
