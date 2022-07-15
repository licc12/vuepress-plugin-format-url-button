<template></template>

<script>
export default {
  name: 'FormatUrlButton',
  data() {
    return {
      config: {
        regx: REGX,
        top: TOP,
        right: RIGHT,
        btnClassName: BTN_CLASSNAME,
        btnText: BTN_TEXT,
        parentClassId: PARENT_CLASS_ID,
        targetUrl: TARGET_URL,
      },
    };
  },
  mounted() {
    const _that = this;
    setTimeout(function(){
      _that.getIconElm();
    },1000)

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
      dom.href = location.pathname + targetUrl;
      dom.target = '_block';
      dom.className =
        'el-button el-button--primary is-plain format-url-button ' +
          btnClassName || '';
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
