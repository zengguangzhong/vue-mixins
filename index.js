vueMixins = {
  dynamicCss: require('./dynamicCss.js'),
  getViewportSize: require('./getViewportSize.js'),
  getVue: require('./getVue.js'),
  onceDocument: require('./onceDocument.js'),
  onClick: require('./onClick.js'),
  onClickStack: require('./onClickStack.js'),
  onClickStore: require('./onClickStore.js'),
  onDocument: require('./onDocument.js'),
  onElementResize: require('./onElementResize.js'),
  onWindowResize: require('./onWindowResize.js'),
  onWindowScroll: require('./onWindowScroll.js'),
  setCss: require('./setCss.js'),
  getViewportOffset: require('./getViewportOffset.js'),
  isOpened: require('./isOpened.js'),
  parentListener: require('./parentListener.js'),
}
if (module.exports != null){
  module.exports = vueMixins
} else {
  window.vueMixins = vueMixins
}
