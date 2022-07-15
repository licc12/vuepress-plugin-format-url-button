const { path } = require("@vuepress/utils");

module.exports = (options = {}, context) => ({
  define () {
    const {
      /** 匹配pathname URL规则: 默认以/md-ppt/开头，非README.html结尾 **/
      regx = /\/md-ppt\/.*?\/(?!\/README.html)$/g,
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
    } = options;

    return {
      REGX: regx,
      TOP: top,
      RIGHT: right,
      BTN_CLASSNAME: btnClassName,
      BTN_TEXT: btnText,
      PARENT_CLASS_ID: parentClassId,
      TARGET_URL: targetUrl,
    }
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './lib/client.js'),
  clientAppRootComponentFiles: path.resolve(__dirname, './lib/components/FormatUrlButton.vue'),
})
