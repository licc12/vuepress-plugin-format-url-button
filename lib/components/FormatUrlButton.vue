<template></template>

<script>
export default {
  name: 'FormatUrlButton',
  data() {
    return {
      time:null,
      config: {
        devHide: DEV_HIDE,
        regx: REGX,
        top: TOP,
        right: RIGHT,
        btnClassName: BTN_CLASSNAME,
        btnText: BTN_TEXT,
        pathUrl: PATH_URL,
        parentClassId: PARENT_CLASS_ID,
      },
    };
  },
  destroyed() {
    if(this.time){
      clearTimeout(this.time)
    }
  },
  mounted() {
    /** dev环境是否开启显示，默认显示 */
    if(this.config.devHide && __VUEPRESS_DEV__)return;
    const _that = this;
    this.time = setTimeout(function(){
      _that.getIconElm();
    },1000);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.getIconElm();
      }
    });
  },
  methods: {
    getIconElm() {
      const hasBtn = document.querySelector('#format-url-button');

      const regx = new RegExp(this.config.regx);
      if (hasBtn || !regx.test(location.pathname)) return;
      const {top, right, btnText,btnClassName,targetUrl, parentClassId } = this.config;
      var dom = document.createElement('a');
      dom.id = 'format-url-button';
      const urlPath = location.pathname.replaceAll(/md-ppt/g,PATH_URL)
      dom.href = urlPath;
      dom.target = '_block';
      dom.className = 'format-url-button ' + btnClassName;
      dom.style.position = 'absolute';
      dom.style.right = right + 'px';
      dom.style.top = top + 'px';
      var text = document.createTextNode(btnText);
      dom.appendChild(text);
      document.querySelector(parentClassId).appendChild(dom);
    },
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.getIconElm();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.format-url-button {
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>
