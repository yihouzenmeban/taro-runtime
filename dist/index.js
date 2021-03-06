'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isBoolean(o) {
    return o === true || o === false;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}
var isArray = Array.isArray;

var styles = {
    style: ("i." + ("st")),
    class: ("i." + ("cl"))
};
var events = {
    bindtap: 'eh'
};
var touchEvents = {
    bindTouchStart: '',
    bindTouchMove: '',
    bindTouchEnd: '',
    bindTouchCancel: '',
    bindLongTap: ''
};
var specialEvents = new Set([
    'htouchmove',
    'vtouchmove'
]);
function singleQuote(s) {
    return ("'" + s + "'");
}
var View = Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': 'false', 'hover-start-time': '50', 'hover-stay-time': '400', animation: '', bindAnimationStart: '', bindAnimationIteration: '', bindAnimationEnd: '', bindTransitionEnd: '' }, touchEvents);
var Icon = {
    type: '',
    size: '23',
    color: ''
};
var Map$1 = Object.assign({ longitude: '', latitude: '', scale: '16', markers: '[]', covers: '', polyline: '[]', circles: '[]', controls: '', 'include-points': '[]', 'show-location': '', polygons: '', subkey: '', 'layer-style': '1', rotate: '0', skew: 'skew', 'enable-3D': 'false', 'show-compass': 'false', 'show-scale': 'false', 'enable-overlooking': 'false', 'enable-zoom': 'true', 'enable-scroll': 'true', 'enable-rotate': 'false', 'enable-satellite': 'false', 'enable-traffic': 'false', setting: '[]', bindMarkerTap: '', bindLabelTap: '', bindControlTap: '', bindCalloutTap: '', bindUpdated: '', bindRegionChange: '', bindPoiTap: '' }, touchEvents);
var Progress = {
    percent: '',
    'show-info': 'false',
    'border-radius': '0',
    'font-size': '16',
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: 'false',
    'active-mode': singleQuote('backwards'),
    duration: '30',
    bindActiveEnd: ''
};
var RichText = {
    nodes: '[]',
    space: ''
};
var Text = {
    selectable: 'false',
    space: '',
    decode: 'false'
};
var Button = {
    size: singleQuote('default'),
    type: '',
    plain: 'false',
    disabled: '',
    loading: 'false',
    'form-type': '',
    'open-type': '',
    'hover-class': singleQuote('button-hover'),
    'hover-stop-propagation': 'false',
    'hover-start-time': '20',
    'hover-stay-time': '70',
    lang: 'en',
    'session-from': '',
    'send-message-title': '',
    'send-message-path': '',
    'send-message-img': '',
    'app-parameter': '',
    'show-message-card': 'false',
    bindGetUserInfo: '',
    bindGetAuthorize: '',
    bindContact: '',
    bindGetPhoneNumber: '',
    bindError: '',
    bindOpenSetting: '',
    bindLaunchApp: '',
    scope: '',
    name: ''
};
if (process.env.TARO_ENV === 'qq') {
    Button['app-packagename'] = '';
    Button['app-bundleid'] = '';
    Button['app-connect-id'] = '';
}
var Checkbox = {
    value: '',
    disabled: '',
    checked: 'false',
    color: singleQuote('#09BB07'),
    name: ''
};
var CheckboxGroup = {
    bindChange: '',
    name: ''
};
var Editor = {
    'read-only': 'false',
    placeholder: '',
    'show-img-size': 'false',
    'show-img-toolbar': 'false',
    'show-img-resize': 'false',
    focus: 'false',
    bindReady: '',
    bindFocus: '',
    bindBlur: '',
    bindInput: '',
    bindStatusChange: '',
    name: ''
};
var Form = {
    'report-submit': 'false',
    'report-submit-timeout': '0',
    bindSubmit: '',
    bindReset: '',
    name: ''
};
var Input = {
    value: '',
    type: singleQuote(''),
    password: 'false',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: '',
    maxlength: '140',
    'cursor-spacing': '0',
    'auto-focus': 'false',
    focus: 'false',
    'confirm-type': singleQuote('done'),
    'confirm-hold': 'false',
    cursor: 'i.value.length',
    'selection-start': '-1',
    'selection-end': '-1',
    'adjust-position': 'true',
    'hold-keyboard': 'false',
    bindInput: '',
    bindFocus: '',
    bindBlur: '',
    bindConfirm: '',
    bindKeyboardHeightChange: '',
    name: ''
};
var Label = {
    for: '',
    name: ''
};
var Picker = {
    mode: singleQuote('selector'),
    disabled: '',
    bindCancel: '',
    range: '',
    'range-key': '',
    value: '',
    bindChange: '',
    bindColumnChange: '',
    start: '',
    end: '',
    fields: singleQuote('day'),
    'custom-item': '',
    name: ''
};
var PickerView = {
    value: '',
    'indicator-style': '',
    'indicator-class': '',
    'mask-style': '',
    'mask-class': '',
    bindChange: '',
    bindPickStart: '',
    bindPickEnd: '',
    name: ''
};
var PickerViewColumn = {
    name: ''
};
var Radio = {
    value: '',
    checked: 'false',
    disabled: '',
    color: singleQuote('#09BB07'),
    name: ''
};
var RadioGroup = {
    bindChange: '',
    name: ''
};
var Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: '',
    value: '0',
    color: singleQuote('#e9e9e9'),
    'selected-color': singleQuote('#1aad19'),
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': 'false',
    bindChange: '',
    bindChanging: '',
    name: ''
};
var Switch = {
    checked: 'false',
    disabled: '',
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: '',
    name: ''
};
var CoverImage = {
    src: '',
    bindLoad: 'eh',
    bindError: 'eh'
};
var Textarea = {
    value: '',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('textarea-placeholder'),
    disabled: '',
    maxlength: '140',
    'auto-focus': 'false',
    focus: 'false',
    'auto-height': 'false',
    fixed: 'false',
    'cursor-spacing': '0',
    cursor: '-1',
    'show-confirm-bar': 'true',
    'selection-start': '-1',
    'selection-end': '-1',
    'adjust-position': 'true',
    'hold-keyboard': 'false',
    bindFocus: '',
    bindBlur: '',
    bindLineChange: '',
    bindInput: '',
    bindConfirm: '',
    bindKeyboardHeightChange: '',
    name: ''
};
var CoverView = Object.assign({ 'scroll-top': 'false' }, touchEvents);
var MovableArea = {
    'scale-area': 'false'
};
var MovableView = Object.assign({ direction: 'none', inertia: 'false', 'out-of-bounds': 'false', x: '', y: '', damping: '20', friction: '2', disabled: '', scale: 'false', 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', animation: 'true', bindAnimationEnd: '', bindChange: '', bindScale: '', htouchmove: '', vtouchmove: '', width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents);
var ScrollView = Object.assign({ 'scroll-x': 'false', 'scroll-y': 'false', 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': '', 'scroll-left': '', 'scroll-into-view': '', 'scroll-with-animation': 'false', 'enable-back-to-top': 'false', 'enable-flex': 'false', 'scroll-anchoring': 'false', 'refresher-enabled': 'false', 'refresher-threshold': '45', 'refresher-default-style': singleQuote('black'), 'refresher-background': singleQuote('#FFF'), 'refresher-triggered': 'false', bindRefresherPulling: '', bindRefresherRefresh: '', bindRefresherRestore: '', bindRefresherAbort: '', bindScrollToUpper: '', bindScrollToLower: '', bindScroll: '', animation: '', bindTransitionEnd: '', bindAnimationStart: '', bindAnimationIteration: '', bindAnimationEnd: '' }, touchEvents);
var Swiper = Object.assign({ 'indicator-dots': 'false', 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: 'false', current: '0', interval: '5000', duration: '500', circular: 'false', vertical: 'false', 'previous-margin': '\'0px\'', 'next-margin': '\'0px\'', 'display-multiple-items': '1', 'skip-hidden-item-layout': 'false', 'easing-function': singleQuote('default'), bindChange: '', bindTransition: '', bindAnimationFinish: '' }, touchEvents);
var SwiperItem = {
    'item-id': ''
};
var FunctionalPageNavigator = {
    version: singleQuote('release'),
    name: '',
    args: '',
    bindSuccess: '',
    bindFail: '',
    bindCancel: ''
};
var Navigator = {
    target: singleQuote('self'),
    url: '',
    'open-type': singleQuote('navigate'),
    delta: '1',
    'app-id': '',
    path: '',
    'extra-data': '',
    version: singleQuote('version'),
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': 'false',
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: '',
    bindFail: '',
    bindComplete: ''
};
var Audio = {
    id: '',
    src: '',
    loop: 'false',
    controls: 'false',
    poster: '',
    name: '',
    author: '',
    bindError: '',
    bindPlay: '',
    bindPause: '',
    bindTimeUpdate: '',
    bindEnded: ''
};
var Camera = {
    mode: singleQuote('normal'),
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    'frame-size': singleQuote('medium'),
    bindStop: '',
    bindError: '',
    bindInitDone: '',
    bindScanCode: ''
};
var Image = {
    src: '',
    mode: singleQuote('scaleToFill'),
    webp: 'false',
    'lazy-load': 'false',
    'show-menu-by-longpress': 'false',
    bindError: '',
    bindLoad: ''
};
var LivePlayer = {
    src: '',
    mode: singleQuote('live'),
    autoplay: 'false',
    muted: 'false',
    orientation: singleQuote('vertical'),
    'object-fit': singleQuote('contain'),
    'background-mute': 'false',
    'min-cache': '1',
    'max-cache': '3',
    'sound-mode': singleQuote('speaker'),
    'auto-pause-if-navigate': 'true',
    'auto-pause-if-open-native': 'true',
    'picture-in-picture-mode': '[]',
    bindStateChange: '',
    bindFullScreenChange: '',
    bindNetStatus: '',
    bindAudioVolumeNotify: '',
    bindEnterPictureInPicture: '',
    bindLeavePictureInPicture: ''
};
var LivePusher = {
    url: '',
    mode: singleQuote('RTC'),
    autopush: 'false',
    muted: 'false',
    'enable-camera': 'true',
    'auto-focus': 'true',
    orientation: singleQuote('vertical'),
    beauty: '0',
    whiteness: '0',
    aspect: singleQuote('9:16'),
    'min-bitrate': '200',
    'max-bitrate': '1000',
    'audio-quality': singleQuote('high'),
    'waiting-image': '',
    'waiting-image-hash': '',
    zoom: 'false',
    'device-position': singleQuote('front'),
    'background-mute': 'false',
    mirror: 'false',
    'remote-mirror': 'false',
    'local-mirror': 'false',
    'audio-reverb-type': '0',
    'enable-mic': 'true',
    'enable-agc': 'false',
    'enable-ans': 'false',
    'audio-volume-type': singleQuote('voicecall'),
    'video-width': '360',
    'video-height': '640',
    bindStateChange: '',
    bindNetStatus: '',
    bindBgmStart: '',
    bindBgmProgress: '',
    bindBgmComplete: ''
};
var Video = {
    src: '',
    duration: '',
    controls: 'true',
    'danmu-list': '',
    'danmu-btn': '',
    'enable-danmu': '',
    autoplay: 'false',
    loop: 'false',
    muted: 'false',
    'initial-time': '0',
    'page-gesture': 'false',
    direction: '',
    'show-progress': 'true',
    'show-fullscreen-btn': 'true',
    'show-play-btn': 'true',
    'show-center-play-btn': 'true',
    'enable-progress-gesture': 'true',
    'object-fit': singleQuote('contain'),
    poster: '',
    'show-mute-btn': 'false',
    title: '',
    'play-btn-position': singleQuote('bottom'),
    'enable-play-gesture': 'false',
    'auto-pause-if-navigate': 'true',
    'auto-pause-if-open-native': 'true',
    'vslide-gesture': 'false',
    'vslide-gesture-in-fullscreen': 'true',
    'ad-unit-id': '',
    'poster-for-crawler': '',
    'show-casting-button': 'false',
    'picture-in-picture-mode': '[]',
    // picture-in-picture-show-progress 属性先注释掉的原因如下：
    // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
    // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
    // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
    // 'picture-in-picture-show-progress': 'false',
    'enable-auto-rotation': 'false',
    'show-screen-lock-button': 'false',
    bindPlay: '',
    bindPause: '',
    bindEnded: '',
    bindTimeUpdate: '',
    bindFullScreenChange: '',
    bindWaiting: '',
    bindError: '',
    bindProgress: '',
    bindLoadedMetadata: '',
    bindControlsToggle: '',
    bindEnterPictureInPicture: '',
    bindLeavePictureInPicture: '',
    bindSeekComplete: ''
};
var Canvas = {
    type: singleQuote('2d'),
    'canvas-id': '',
    'disable-scroll': 'false',
    bindTouchStart: '',
    bindTouchMove: '',
    bindTouchEnd: '',
    bindTouchCancel: '',
    bindLongtap: '',
    bindError: ''
};
var Ad = {
    'unit-id': '',
    'ad-intervals': '',
    'ad-type': singleQuote('banner'),
    'ad-theme': singleQuote('white'),
    bindLoad: '',
    bindError: '',
    bindClose: ''
};
var OfficialAccount = {
    bindLoad: '',
    bindError: ''
};
var OpenData = {
    type: '',
    'open-gid': '',
    lang: singleQuote('en'),
    'default-text': '',
    'default-avatar': '',
    bindError: ''
};
var WebView = {
    src: '',
    bindMessage: '',
    bindLoad: ''
};
var NavigationBar = {
    title: '',
    loading: 'false',
    'front-color': '',
    'background-color': '',
    'color-animation-duration': '0',
    'color-animation-timing-func': singleQuote('linear')
};
var PageMeta = {
    'background-text-style': '',
    'background-color': '',
    'background-color-top': '',
    'background-color-bottom': '',
    'scroll-top': singleQuote(''),
    'scroll-duration': '300',
    'page-style': singleQuote(''),
    'root-font-size': singleQuote(''),
    bindResize: '',
    bindScroll: '',
    bindScrollDone: ''
};
var Block = {};
// For Vue，因为 slot 标签被 vue 占用了
var SlotView = {
    name: ''
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
var Slot = {
    name: ''
};
var internalComponents = {
    View: View,
    Icon: Icon,
    Progress: Progress,
    RichText: RichText,
    Text: Text,
    Button: Button,
    Checkbox: Checkbox,
    CheckboxGroup: CheckboxGroup,
    Editor: Editor,
    Form: Form,
    Input: Input,
    Label: Label,
    Picker: Picker,
    PickerView: PickerView,
    PickerViewColumn: PickerViewColumn,
    Radio: Radio,
    RadioGroup: RadioGroup,
    Slider: Slider,
    Switch: Switch,
    CoverImage: CoverImage,
    Textarea: Textarea,
    CoverView: CoverView,
    MovableArea: MovableArea,
    MovableView: MovableView,
    ScrollView: ScrollView,
    Swiper: Swiper,
    SwiperItem: SwiperItem,
    FunctionalPageNavigator: FunctionalPageNavigator,
    Navigator: Navigator,
    Audio: Audio,
    Camera: Camera,
    Image: Image,
    LivePlayer: LivePlayer,
    LivePusher: LivePusher,
    Video: Video,
    Canvas: Canvas,
    Ad: Ad,
    OfficialAccount: OfficialAccount,
    OpenData: OpenData,
    WebView: WebView,
    NavigationBar: NavigationBar,
    PageMeta: PageMeta,
    Block: Block,
    Map: Map$1,
    Slot: Slot,
    SlotView: SlotView
};
var controlledComponent = new Set([
    'input',
    'checkbox',
    'picker',
    'picker-view',
    'radio',
    'slider',
    'switch',
    'textarea'
]);
var focusComponents = new Set([
    'input',
    'textarea',
    'editor'
]);

var EMPTY_OBJ = {};
var noop = function () {
  var _ = [], len = arguments.length;
  while ( len-- ) _[ len ] = arguments[ len ];
 };
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    var camel = '';
    var nextCap = false;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
        else {
            nextCap = true;
        }
    }
    return camel;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function (val, key) { return hasOwnProperty.call(val, key); };
var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
    if (!condition) {
        throw new Error(msg + '\n' + reportIssue);
    }
}
function warn(condition, msg) {
    if (process.env.NODE_ENV !== 'production') {
        if (condition) {
            console.warn(msg);
        }
    }
}

/**
 * 这里我们需要关心的小程序种类有两类：
 * 1. 模板递归：
 *  - 支持：tmpl0 套 tmpl0
 *  - 不支持：这就使得我们必须生成多级的模板，tmpl0 套 tmpl1，tmpl1 套 tmpl2……
 *           直到超过阈值 N (N = config.miniapp.baseLevel) tmplN 会套组件 comp，组件 comp 重新再套 tmpl0。
 * 2. 小程序脚本语言（wxs, sjs, etc...）：
 *  - 支持：可以在模板使用函数缩减模板大小或提高性能（存疑），例如判断一个值是不是假值（falsy value）。
 *         将来或许会把数据序列化^1 的操作也放到小程序脚本语言里。
 *  - 不支持：使用纯 *xml 语法
 *
 * ^1: packages/taro-runtime/src/hydrate.ts
*/
var voidElements = new Set([
    'progress',
    'icon',
    'rich-text',
    'input',
    'textarea',
    'slider',
    'switch',
    'audio',
    'live-player',
    'live-pusher',
    'video'
]);
var weixinAdapter = {
    if: 'wx:if',
    else: 'wx:else',
    elseif: 'wx:elif',
    for: 'wx:for',
    forItem: 'wx:for-item',
    forIndex: 'wx:for-index',
    key: 'wx:key',
    xs: 'wxs',
    type: 'weapp'
};
var BaseTemplate = function BaseTemplate() {
      var this$1 = this;

      this.exportExpr = 'module.exports =';
      this.supportXS = false;
      this.Adapter = weixinAdapter;
      this.buildPageTemplate = function (baseTempPath) {
          var template = "<import src=\"" + baseTempPath + "\"/>\n  <template is=\"taro_tmpl\" data=\"{{" + (this$1.dataKeymap('root: root')) + "}}\" />";
          return template;
      };
      this.buildBaseComponentTemplate = function (ext) {
          return ("<import src=\"./base" + ext + "\" />\n  <template is=\"tmpl_0_container\" data=\"{{" + (this$1.dataKeymap('i: i')) + "}}\" />");
      };
      this.buildXScript = function () {
          return ((this$1.exportExpr) + " {\n    c: function(i, prefix) {\n      var s = i.focus !== undefined ? 'focus' : 'blur'\n      return prefix + i." + ("nn") + " + '_' + s\n    },\n    d: function (i, v) {\n      return i === undefined ? v : i\n    }\n  }");
      };
  };
  BaseTemplate.prototype.buildAttribute = function buildAttribute (attrs, nodeName) {
        var this$1 = this;

      return Object.keys(attrs)
          .map(function (k) { return (k + "=\"" + (k.startsWith('bind') || k.startsWith('on') ? attrs[k] : ("{" + (this$1.getAttrValue(attrs[k], k, nodeName)) + "}")) + "\" "); })
          .join('');
  };
  BaseTemplate.prototype.replacePropName = function replacePropName (name, value, _componentName) {
      if (value === 'eh')
          { return name.toLowerCase(); }
      return name;
  };
  BaseTemplate.prototype.createMiniComponents = function createMiniComponents (components) {
      var result = Object.create(null);
      for (var key in components) {
          if (hasOwn(components, key)) {
              var component = components[key];
              var compName = toDashed(key);
              var newComp = Object.create(null);
              if (isFunction(this.modifyCompProps)) {
                  component = this.modifyCompProps(compName, component);
              }
              for (var prop in component) {
                  if (hasOwn(component, prop)) {
                      var propValue = component[prop];
                      if (prop.startsWith('bind') || specialEvents.has(prop)) {
                          propValue = 'eh';
                      }
                      else if (propValue === '') {
                          propValue = "i." + (toCamelCase(prop));
                      }
                      else if (isBooleanStringLiteral(propValue) || isNumber(+propValue)) {
                          propValue = "i." + (toCamelCase(prop)) + "===undefined?" + propValue + ":i." + (toCamelCase(prop));
                      }
                      else {
                          propValue = "i." + (toCamelCase(prop)) + "||" + (propValue || singleQuote(''));
                      }
                      prop = this.replacePropName(prop, propValue, compName);
                      newComp[prop] = propValue;
                  }
              }
              if (compName !== 'block') {
                  Object.assign(newComp, styles, this.getEvents());
              }
              if (compName === 'swiper-item') {
                  delete newComp.style;
              }
              if (compName === 'slot' || compName === 'slot-view') {
                  result[compName] = {
                      slot: 'i.name'
                  };
              }
              else {
                  result[compName] = newComp;
              }
          }
      }
      return result;
  };
  BaseTemplate.prototype.buildBaseTemplate = function buildBaseTemplate () {
      var Adapter = this.Adapter;
      return ((this.buildXsTemplate()) + "\n<template name=\"taro_tmpl\">\n  <block " + (Adapter.for) + "=\"{{root.cn}}\" " + (Adapter.key) + "=\"id\">\n    <template is=\"tmpl_0_" + ("container") + "\" data=\"{{" + (this.dataKeymap('i: item')) + "}}\" />\n  </block>\n</template>\n");
  };
  BaseTemplate.prototype.buildThirdPartyAttr = function buildThirdPartyAttr (attrs) {
      return Array.from(attrs).reduce(function (str, attr) {
          if (attr.startsWith('@')) { // vue event
              return str + "bind" + (attr.slice(1)) + "=\"eh\" ";
          }
          else if (attr.startsWith('bind')) {
              return str + attr + "=\"eh\" ";
          }
          else if (attr.startsWith('on')) {
              return str + "bind" + (attr.slice(2).toLowerCase()) + "=\"eh\" ";
          }
          return str + attr + "=\"{{i." + (toCamelCase(attr)) + "}}\" ";
      }, '');
  };
  BaseTemplate.prototype.buildComponentTemplate = function buildComponentTemplate (comp, level) {
      return focusComponents.has(comp.nodeName)
          ? this.buildFocusComponentTemplte(comp, level)
          : this.buildStandardComponentTemplate(comp, level);
  };
  BaseTemplate.prototype.buildFocusComponentTemplte = function buildFocusComponentTemplte (comp, level) {
      var attrs = Object.assign({}, comp.attributes);
      var templateName = this.supportXS
          ? ("xs.c(i, 'tmpl_" + level + "_')")
          : ("i.focus ? 'tmpl_" + level + "_" + (comp.nodeName) + "_focus' : 'tmpl_" + level + "_" + (comp.nodeName) + "_blur'");
      delete attrs.focus;
      return ("\n<template name=\"tmpl_" + level + "_" + (comp.nodeName) + "\">\n  <template is=\"{{" + templateName + "}}\" data=\"{{" + (this.dataKeymap('i: i')) + "}}\" />\n</template>\n\n<template name=\"tmpl_" + level + "_" + (comp.nodeName) + "_focus\">\n  <" + (comp.nodeName) + " " + (this.buildAttribute(comp.attributes, comp.nodeName)) + " id=\"{{i.uid}}\" />\n</template>\n\n<template name=\"tmpl_" + level + "_" + (comp.nodeName) + "_blur\">\n  <" + (comp.nodeName) + " " + (this.buildAttribute(attrs, comp.nodeName)) + " id=\"{{i.uid}}\" />\n</template>\n");
  };
  BaseTemplate.prototype.buildStandardComponentTemplate = function buildStandardComponentTemplate (comp, level) {
      var ref = this;
        var isSupportRecursive = ref.isSupportRecursive;
        var Adapter = ref.Adapter;
      var nextLevel = isSupportRecursive ? 0 : level + 1;
      var child = "<template is=\"tmpl_" + nextLevel + "_" + ("container") + "\" data=\"{{" + (this.dataKeymap('i: item')) + "}}\" />";
      if (isFunction(this.modifyLoopBody)) {
          child = this.modifyLoopBody(child, comp.nodeName);
      }
      var children = voidElements.has(comp.nodeName)
          ? ''
          : ("\n    <block " + (Adapter.for) + "=\"{{i." + ("cn") + "}}\" " + (Adapter.key) + "=\"id\">\n      " + child + "\n    </block>\n  ");
      if (isFunction(this.modifyLoopContainer)) {
          children = this.modifyLoopContainer(children, comp.nodeName);
      }
      var nodeName = comp.nodeName === 'slot' || comp.nodeName === 'slot-view' ? 'view' : comp.nodeName;
      var res = "\n<template name=\"tmpl_" + level + "_" + (comp.nodeName) + "\">\n  <" + nodeName + " " + (this.buildAttribute(comp.attributes, comp.nodeName)) + " id=\"{{i.uid}}\">" + children + "</" + nodeName + ">\n</template>\n";
      if (isFunction(this.modifyTemplateResult)) {
          res = this.modifyTemplateResult(res, comp.nodeName, level, children);
      }
      return res;
  };
  BaseTemplate.prototype.buildPlainTextTemplate = function buildPlainTextTemplate (level) {
      return ("\n<template name=\"tmpl_" + level + "_#text\" data=\"{{" + (this.dataKeymap('i: i')) + "}}\">\n  <block>{{i." + ("v") + "}}</block>\n</template>\n");
  };
  BaseTemplate.prototype.buildThirdPartyTemplate = function buildThirdPartyTemplate (level, componentConfig) {
        var this$1 = this;

      var ref = this;
        var Adapter = ref.Adapter;
        var isSupportRecursive = ref.isSupportRecursive;
      var nextLevel = isSupportRecursive ? 0 : level + 1;
      var template = '';
      componentConfig.thirdPartyComponents.forEach(function (attrs, compName) {
          template += "\n<template name=\"tmpl_" + level + "_" + compName + "\">\n  <" + compName + " " + (this$1.buildThirdPartyAttr(attrs)) + " id=\"{{i.uid}}\">\n    <block " + (Adapter.for) + "=\"{{i." + ("cn") + "}}\" " + (Adapter.key) + "=\"id\">\n      <template is=\"tmpl_" + nextLevel + "_" + ("container") + "\" data=\"{{" + (this$1.dataKeymap('i: item')) + "}}\" />\n    </block>\n  </" + compName + ">\n</template>\n  ";
      });
      return template;
  };
  BaseTemplate.prototype.buildContainerTemplate = function buildContainerTemplate (level, restart) {
        if ( restart === void 0 ) restart = false;

      var tmpl = '';
      if (restart) {
          tmpl = '<comp i="{{i}}" />';
      }
      else {
          tmpl = "<template is=\"{{'tmpl_" + level + "_' + i." + ("nn") + "}}\" data=\"{{" + (this.dataKeymap('i: i')) + "}}\" />";
      }
      return ("\n<template name=\"tmpl_" + level + "_" + ("container") + "\" data=\"{{" + (this.dataKeymap('i: i')) + "}}\">\n  " + tmpl + "\n</template>\n");
  };
  BaseTemplate.prototype.dataKeymap = function dataKeymap (keymap) {
      return keymap;
  };
  BaseTemplate.prototype.getEvents = function getEvents () {
      return events;
  };
  BaseTemplate.prototype.getAttrValue = function getAttrValue (value, _key, _nodeName) {
      return ("{" + value + "}");
  };
  BaseTemplate.prototype.buildXsTemplate = function buildXsTemplate () {
      return '';
  };

var incrementId = function () {
    var id = 0;
    return function () { return (id++).toString(); };
};
function isElement(node) {
    return node.nodeType === 1 /* ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* TEXT_NODE */;
}

var TaroEventTarget = function TaroEventTarget() {
    this.__handlers = {};
};
TaroEventTarget.prototype.addEventListener = function addEventListener (type, handler, options) {
    warn(type === 'regionchange', 'map 组件的 regionchange 事件非常特殊，请使用 begin/end 事件替代。详情：https://github.com/NervJS/taro/issues/5766');
    type = type.toLowerCase();
    var handlers = this.__handlers[type];
    var isCapture = Boolean(options);
    var isOnce = false;
    if (isObject(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
    }
    if (isOnce) {
        var wrapper = function () {
            handler.apply(this, arguments); // this 指向 Element
            this.removeEventListener(type, wrapper);
        };
        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
        return;
    }
    warn(isCapture, 'The event capture feature is unimplemented.');
    if (isArray(handlers)) {
        handlers.push(handler);
    }
    else {
        this.__handlers[type] = [handler];
    }
};
TaroEventTarget.prototype.removeEventListener = function removeEventListener (type, handler) {
    type = type.toLowerCase();
    if (handler == null) {
        return;
    }
    var handlers = this.__handlers[type];
    if (!isArray(handlers)) {
        return;
    }
    var index = handlers.indexOf(handler);
    warn(index === -1, ("事件: '" + type + "' 没有注册在 DOM 中，因此不会被移除。"));
    handlers.splice(index, 1);
};

var eventSource = new Map();
var TaroEvent = function TaroEvent(type, opts, event) {
    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp
    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
};

var prototypeAccessors = { target: { configurable: true },currentTarget: { configurable: true } };
TaroEvent.prototype.stopPropagation = function stopPropagation () {
    this._stop = true;
};
TaroEvent.prototype.stopImmediatePropagation = function stopImmediatePropagation () {
    this._end = this._stop = true;
};
TaroEvent.prototype.preventDefault = function preventDefault () {
    this.defaultPrevented = true;
};
prototypeAccessors.target.get = function () {
    var _a, _b, _c;
    var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
    return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element !== null ? element.dataset : EMPTY_OBJ });
};
prototypeAccessors.currentTarget.get = function () {
    var _a, _b, _c;
    var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);
    if (element === null) {
        return this.target;
    }
    return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element.dataset });
};

Object.defineProperties( TaroEvent.prototype, prototypeAccessors );
function createEvent(event, _) {
    if (typeof event === 'string') {
        return new TaroEvent(event, { bubbles: true, cancelable: true });
    }
    var domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
    for (var key in event) {
        if (key === 'currentTarget' || key === 'target' || key === 'type' || key === 'timeStamp') {
            continue;
        }
        else {
            domEv[key] = event[key];
        }
    }
    return domEv;
}
function eventHandler(event) {
    if (event.currentTarget == null) {
        event.currentTarget = event.target;
    }
    var node = document$1.getElementById(event.currentTarget.id);
    if (node != null) {
        node.dispatchEvent(createEvent(event));
    }
}

/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
    var obj;

    if (isText(node)) {
        return ( obj = {}, obj["v" /* Text */] = node.nodeValue, obj["nn" /* NodeName */] = node.nodeName, obj );
    }
    var data = {};
    data["nn" /* NodeName */] = node.nodeName;
    data.uid = node.uid;
    var props = node.props;
    var childNodes = node.childNodes;
    for (var prop in props) {
        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
            prop !== 'class' &&
            prop !== 'style' &&
            prop !== 'id') {
            data[toCamelCase(prop)] = props[prop];
        }
    }
    if (childNodes.length > 0) {
        data["cn" /* Childnodes */] = childNodes.map(hydrate);
    }
    if (node.className !== '') {
        data["cl" /* Class */] = node.className;
    }
    if (node.cssText !== '' && node.nodeName !== 'swiper-item') {
        data["st" /* Style */] = node.cssText;
    }
    return data;
}

var CurrentReconciler = {
    getLifecyle: function getLifecyle(instance, lifecyle) {
        return instance[lifecyle];
    }
};

var options = {
    prerender: true,
    debug: false,
    // html 只影响 Element#innerHTML API
    html: {
        skipElements: new Set(['style', 'script']),
        voidElements: new Set([
            '!doctype', 'area', 'base', 'br', 'col', 'command',
            'embed', 'hr', 'img', 'input', 'keygen', 'link',
            'meta', 'param', 'source', 'track', 'wbr'
        ]),
        closingElements: new Set([
            'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
            'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
        ]),
        renderHTMLTag: false
    },
    reconciler: function reconciler(reconciler$1) {
        Object.assign(CurrentReconciler, reconciler$1);
    }
};

function initPosition() {
    return {
        index: 0,
        column: 0,
        line: 0
    };
}
function feedPosition(position, str, len) {
    var start = position.index;
    var end = position.index = start + len;
    for (var i = start; i < end; i++) {
        var char = str.charAt(i);
        if (char === '\n') {
            position.line++;
            position.column = 0;
        }
        else {
            position.column++;
        }
    }
}
function jumpPosition(position, str, end) {
    var len = end - position.index;
    return feedPosition(position, str, len);
}
function copyPosition(position) {
    return {
        index: position.index,
        line: position.line,
        column: position.column
    };
}
var whitespace = /\s/;
function isWhitespaceChar(char) {
    return whitespace.test(char);
}
var equalSign = /=/;
function isEqualSignChar(char) {
    return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
    var name = tagName.toLowerCase();
    if (options.html.skipElements.has(name)) {
        return true;
    }
    return false;
}
var alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
    while (true) {
        var textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        var char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || alphanumeric.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
}
function isWordEnd(cursor, wordBegin, html) {
    if (!isWhitespaceChar(html.charAt(cursor)))
        { return false; }
    var len = html.length;
    // backwrad
    for (var i = cursor - 1; i > wordBegin; i--) {
        var char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                { return false; }
            break;
        }
    }
    // forward
    for (var i$1 = cursor + 1; i$1 < len; i$1++) {
        var char$1 = html.charAt(i$1);
        if (!isWhitespaceChar(char$1)) {
            if (isEqualSignChar(char$1))
                { return false; }
            return true;
        }
    }
}
var Scaner = function Scaner(html) {
    this.tokens = [];
    this.position = initPosition();
    this.html = html;
};
Scaner.prototype.scan = function scan () {
    var ref = this;
        var html = ref.html;
        var position = ref.position;
    var len = html.length;
    while (position.index < len) {
        var start = position.index;
        this.scanText();
        if (position.index === start) {
            var isComment = html.startsWith('!--', start + 1);
            if (isComment) {
                this.scanComment();
            }
            else {
                var tagName = this.scanTag();
                if (shouldBeIgnore(tagName)) {
                    this.scanSkipTag(tagName);
                }
            }
        }
    }
    return this.tokens;
};
Scaner.prototype.scanText = function scanText () {
    var type = 'text';
    var ref = this;
        var html = ref.html;
        var position = ref.position;
    var textEnd = findTextEnd(html, position.index);
    if (textEnd === position.index) {
        return;
    }
    if (textEnd === -1) {
        textEnd = html.length;
    }
    var start = copyPosition(position);
    var content = html.slice(position.index, textEnd);
    jumpPosition(position, html, textEnd);
    var end = copyPosition(position);
    this.tokens.push({ type: type, content: content, position: { start: start, end: end } });
};
Scaner.prototype.scanComment = function scanComment () {
    var type = 'comment';
    var ref = this;
        var html = ref.html;
        var position = ref.position;
    var start = copyPosition(position);
    feedPosition(position, html, 4); // "<!--".length
    var contentEnd = html.indexOf('-->', position.index);
    var commentEnd = contentEnd + 3; // "-->".length
    if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
    }
    var content = html.slice(position.index, contentEnd);
    jumpPosition(position, html, commentEnd);
    this.tokens.push({
        type: type,
        content: content,
        position: {
            start: start,
            end: copyPosition(position)
        }
    });
};
Scaner.prototype.scanTag = function scanTag () {
    this.scanTagStart();
    var tagName = this.scanTagName();
    this.scanAttrs();
    this.scanTagEnd();
    return tagName;
};
Scaner.prototype.scanTagStart = function scanTagStart () {
    var type = 'tag-start';
    var ref = this;
        var html = ref.html;
        var position = ref.position;
    var secondChar = html.charAt(position.index + 1);
    var close = secondChar === '/';
    var start = copyPosition(position);
    feedPosition(position, html, close ? 2 : 1);
    this.tokens.push({ type: type, close: close, position: { start: start } });
};
Scaner.prototype.scanTagEnd = function scanTagEnd () {
    var type = 'tag-end';
    var ref = this;
        var html = ref.html;
        var position = ref.position;
    var firstChar = html.charAt(position.index);
    var close = firstChar === '/';
    feedPosition(position, html, close ? 2 : 1);
    var end = copyPosition(position);
    this.tokens.push({ type: type, close: close, position: { end: end } });
};
Scaner.prototype.scanTagName = function scanTagName () {
    var type = 'tag';
    var ref = this;
        var html = ref.html;
        var position = ref.position;
    var len = html.length;
    var start = position.index;
    while (start < len) {
        var char = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
        if (isTagChar)
            { break; }
        start++;
    }
    var end = start + 1;
    while (end < len) {
        var char$1 = html.charAt(end);
        var isTagChar$1 = !(isWhitespaceChar(char$1) || char$1 === '/' || char$1 === '>');
        if (!isTagChar$1)
            { break; }
        end++;
    }
    jumpPosition(position, html, end);
    var tagName = html.slice(start, end);
    this.tokens.push({
        type: type,
        content: tagName
    });
    return tagName;
};
Scaner.prototype.scanAttrs = function scanAttrs () {
    var ref = this;
        var html = ref.html;
        var position = ref.position;
        var tokens = ref.tokens;
    var cursor = position.index;
    var quote = null; // null, single-, or double-quote
    var wordBegin = cursor; // index of word start
    var words = []; // "key", "key=value", "key='value'", etc
    var len = html.length;
    while (cursor < len) {
        var char = html.charAt(cursor);
        if (quote) {
            var isQuoteEnd = char === quote;
            if (isQuoteEnd) {
                quote = null;
            }
            cursor++;
            continue;
        }
        var isTagEnd = char === '/' || char === '>';
        if (isTagEnd) {
            if (cursor !== wordBegin) {
                words.push(html.slice(wordBegin, cursor));
            }
            break;
        }
        if (isWordEnd(cursor, wordBegin, html)) {
            if (cursor !== wordBegin) {
                words.push(html.slice(wordBegin, cursor));
            }
            wordBegin = cursor + 1;
            cursor++;
            continue;
        }
        var isQuoteStart = char === '\'' || char === '"';
        if (isQuoteStart) {
            quote = char;
            cursor++;
            continue;
        }
        cursor++;
    }
    jumpPosition(position, html, cursor);
    var wLen = words.length;
    var type = 'attribute';
    for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');
        if (isNotPair) {
            var secondWord = words[i + 1];
            if (secondWord && secondWord.startsWith('=')) {
                if (secondWord.length > 1) {
                    var newWord = word + secondWord;
                    tokens.push({ type: type, content: newWord });
                    i += 1;
                    continue;
                }
                var thirdWord = words[i + 2];
                i += 1;
                if (thirdWord) {
                    var newWord$1 = word + '=' + thirdWord;
                    tokens.push({ type: type, content: newWord$1 });
                    i += 1;
                    continue;
                }
            }
        }
        if (word.endsWith('=')) {
            var secondWord$1 = words[i + 1];
            if (secondWord$1 && !secondWord$1.includes('=')) {
                var newWord$2 = word + secondWord$1;
                tokens.push({ type: type, content: newWord$2 });
                i += 1;
                continue;
            }
            var newWord$3 = word.slice(0, -1);
            tokens.push({ type: type, content: newWord$3 });
            continue;
        }
        tokens.push({ type: type, content: word });
    }
};
Scaner.prototype.scanSkipTag = function scanSkipTag (tagName) {
    var ref = this;
        var html = ref.html;
        var position = ref.position;
        var tokens = ref.tokens;
    var safeTagName = tagName.toLowerCase();
    var len = html.length;
    var index = position.index;
    while (index < len) {
        var nextTag = html.indexOf('</', index);
        if (nextTag === -1) {
            this.scanText();
            break;
        }
        var tagStartPosition = copyPosition(position);
        jumpPosition(tagStartPosition, html, nextTag);
        var tagState = { html: html, position: tagStartPosition, tokens: [] };
        var name = this.scanTag();
        if (safeTagName !== name.toLowerCase()) {
            index = tagState.position.index;
            continue;
        }
        if (nextTag !== position.index) {
            var textStart = copyPosition(position);
            jumpPosition(position, html, nextTag);
            tokens.push({
                type: 'text',
                content: html.slice(textStart.index, nextTag),
                position: {
                    start: textStart,
                    end: copyPosition(position)
                }
            });
        }
        tokens.push.apply(tokens, tagState.tokens);
        jumpPosition(position, html, tagState.position.index);
        break;
    }
};

function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) { return !!map[val.toLowerCase()]; } : function (val) { return !!map[val]; };
}
var specialMiniElements = {
    img: 'image',
    iframe: 'web-view'
};
var internalCompsList = Object.keys(internalComponents)
    .map(function (i) { return i.toLowerCase(); })
    .join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
var isMiniElements = makeMap(internalCompsList, true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

var closingTagAncestorBreakers = {
    li: ['ul', 'ol', 'menu'],
    dt: ['dl'],
    dd: ['dl'],
    tbody: ['table'],
    thead: ['table'],
    tfoot: ['table'],
    tr: ['table'],
    td: ['table']
};
function hasTerminalParent(tagName, stack) {
    var tagParents = closingTagAncestorBreakers[tagName];
    if (tagParents) {
        var currentIndex = stack.length - 1;
        while (currentIndex >= 0) {
            var parentTagName = stack[currentIndex].tagName;
            if (parentTagName === tagName) {
                break;
            }
            if (tagParents && tagParents.includes(parentTagName)) {
                return true;
            }
            currentIndex--;
        }
    }
    return false;
}
function unquote(str) {
    var car = str.charAt(0);
    var end = str.length - 1;
    var isQuoteStart = car === '"' || car === "'";
    if (isQuoteStart && car === str.charAt(end)) {
        return str.slice(1, end);
    }
    return str;
}
function getTagName(tag) {
    if (options.html.renderHTMLTag) {
        return tag;
    }
    if (specialMiniElements[tag]) {
        return specialMiniElements[tag];
    }
    else if (isMiniElements(tag)) {
        return tag;
    }
    else if (isBlockElements(tag)) {
        return 'view';
    }
    else if (isInlineElements(tag)) {
        return 'text';
    }
    return 'view';
}
function splitEqual(str) {
    var sep = '=';
    var idx = str.indexOf(sep);
    if (idx === -1)
        { return [str]; }
    var key = str.slice(0, idx).trim();
    var value = str.slice(idx + sep.length).trim();
    return [key, value];
}
function format(children) {
    return children.filter(function (child) {
        if (child.type === 'comment') {
            return false;
        }
        else if (child.type === 'text') {
            return child.content !== '';
        }
        return true;
    }).map(function (child) {
        if (child.type === 'text') {
            var text = document$1.createTextNode(child.content);
            if (isFunction(options.html.transformText)) {
                return options.html.transformText(text, child);
            }
            return text;
        }
        var el = document$1.createElement(getTagName(child.tagName));
        if (!options.html.renderHTMLTag) {
            el.className = child.tagName;
        }
        for (var i = 0; i < child.attributes.length; i++) {
            var attr = child.attributes[i];
            var ref = splitEqual(attr);
            var key = ref[0];
            var value = ref[1];
            if (key === 'class') {
                el.className += ' ' + unquote(value);
            }
            else if (key[0] === 'o' && key[1] === 'n') {
                continue;
            }
            else {
                el.setAttribute(key, value == null ? true : unquote(value));
            }
        }
        var ch = format(child.children);
        for (var i$1 = 0; i$1 < ch.length; i$1++) {
            el.appendChild(ch[i$1]);
        }
        if (isFunction(options.html.transformElement)) {
            return options.html.transformElement(el, child);
        }
        return el;
    });
}
function parser(html) {
    var tokens = new Scaner(html).scan();
    var root = { tagName: '', children: [], type: 'element', attributes: [] };
    var state = { tokens: tokens, options: options, cursor: 0, stack: [root] };
    parse(state);
    return format(root.children);
}
function parse(state) {
    var tokens = state.tokens;
    var stack = state.stack;
    var cursor = state.cursor;
    var len = tokens.length;
    var nodes = stack[stack.length - 1].children;
    while (cursor < len) {
        var token = tokens[cursor];
        if (token.type !== 'tag-start') {
            // comment or text
            nodes.push(token);
            cursor++;
            continue;
        }
        var tagToken = tokens[++cursor];
        cursor++;
        var tagName = tagToken.content.toLowerCase();
        if (token.close) {
            var index = stack.length;
            var shouldRewind = false;
            while (--index > -1) {
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while (cursor < len) {
                var endToken = tokens[cursor];
                if (endToken.type !== 'tag-end')
                    { break; }
                cursor++;
            }
            if (shouldRewind) {
                stack.splice(index);
                break;
            }
            else {
                continue;
            }
        }
        var isClosingTag = options.html.closingElements.has(tagName);
        var shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            var currentIndex = stack.length - 1;
            while (currentIndex > 0) {
                if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    var previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        var attributes = [];
        var attrToken = (void 0);
        while (cursor < len) {
            attrToken = tokens[cursor];
            if (attrToken.type === 'tag-end')
                { break; }
            attributes.push(attrToken.content);
            cursor++;
        }
        cursor++;
        var children = [];
        var element = {
            type: 'element',
            tagName: tagToken.content,
            attributes: attributes,
            children: children
        };
        nodes.push(element);
        var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
        if (hasChildren) {
            stack.push({ tagName: tagName, children: children });
            var innerState = { tokens: tokens, cursor: cursor, stack: stack };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
}

function setInnerHTML(element, html) {
    element.textContent = '';
    var children = parser(html);
    for (var i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
}

var nodeId = incrementId();
var TaroNode = /*@__PURE__*/(function (TaroEventTarget) {
    function TaroNode(nodeType, nodeName) {
        TaroEventTarget.call(this);
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = function (node) { return function () { return hydrate(node); }; };
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.uid = "_n_" + (nodeId());
        eventSource.set(this.uid, this);
    }

    if ( TaroEventTarget ) TaroNode.__proto__ = TaroEventTarget;
    TaroNode.prototype = Object.create( TaroEventTarget && TaroEventTarget.prototype );
    TaroNode.prototype.constructor = TaroNode;

    var prototypeAccessors = { _path: { configurable: true },_root: { configurable: true },parentElement: { configurable: true },nextSibling: { configurable: true },previousSibling: { configurable: true },firstChild: { configurable: true },lastChild: { configurable: true },textContent: { configurable: true },innerHTML: { configurable: true } };
    prototypeAccessors._path.get = function () {
        if (this.parentNode !== null) {
            var index = process.env.TARO_ENV === 'swan'
                ? this.parentNode.childNodes.indexOf(this)
                : '[' + this.parentNode.childNodes.indexOf(this) + ']';
            return ((this.parentNode._path) + "." + ("cn") + "." + index);
        }
        return '';
    };
    prototypeAccessors._root.get = function () {
        if (this.parentNode !== null) {
            return this.parentNode._root;
        }
        return null;
    };
    prototypeAccessors.parentElement.get = function () {
        var parentNode = this.parentNode;
        if (parentNode != null && parentNode.nodeType === 1 /* ELEMENT_NODE */) {
            return parentNode;
        }
        return null;
    };
    prototypeAccessors.nextSibling.get = function () {
        var parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
        }
        return null;
    };
    prototypeAccessors.previousSibling.get = function () {
        var parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
        }
        return null;
    };
    TaroNode.prototype.insertBefore = function insertBefore (newChild, refChild, isReplace) {
        var this$1 = this;

        var _a;
        newChild.remove();
        newChild.parentNode = this;
        var payload;
        if (refChild) {
            var index = this.findIndex(this.childNodes, refChild);
            this.childNodes.splice(index, 0, newChild);
            if (isReplace === true) {
                payload = {
                    path: newChild._path,
                    value: this.hydrate(newChild)
                };
            }
            else {
                payload = {
                    path: ((this._path) + "." + ("cn")),
                    value: function () { return this$1.childNodes.map(hydrate); }
                };
            }
        }
        else {
            this.childNodes.push(newChild);
            payload = {
                path: newChild._path,
                value: this.hydrate(newChild)
            };
        }
        (_a = CurrentReconciler.insertBefore) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, refChild);
        this.enqueueUpdate(payload);
        return newChild;
    };
    TaroNode.prototype.appendChild = function appendChild (child) {
        var _a;
        this.insertBefore(child);
        (_a = CurrentReconciler.appendChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, child);
    };
    TaroNode.prototype.replaceChild = function replaceChild (newChild, oldChild) {
        var _a;
        if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild, true);
            oldChild.remove(true);
            return oldChild;
        }
        (_a = CurrentReconciler.removeChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, oldChild);
    };
    TaroNode.prototype.removeChild = function removeChild (child, isReplace) {
        var this$1 = this;

        var index = this.findIndex(this.childNodes, child);
        this.childNodes.splice(index, 1);
        if (isReplace !== true) {
            this.enqueueUpdate({
                path: ((this._path) + "." + ("cn")),
                value: function () { return this$1.childNodes.map(hydrate); }
            });
        }
        child.parentNode = null;
        eventSource.delete(child.uid);
        // @TODO: eventSource memory overflow
        // child._empty()
        return child;
    };
    TaroNode.prototype.remove = function remove (isReplace) {
        if (this.parentNode) {
            this.parentNode.removeChild(this, isReplace);
        }
    };
    prototypeAccessors.firstChild.get = function () {
        return this.childNodes[0] || null;
    };
    prototypeAccessors.lastChild.get = function () {
        var c = this.childNodes;
        return c[c.length - 1] || null;
    };
    TaroNode.prototype.hasChildNodes = function hasChildNodes () {
        return this.childNodes.length > 0;
    };
    TaroNode.prototype.enqueueUpdate = function enqueueUpdate (payload) {
        if (this._root === null) {
            return;
        }
        this._root.enqueueUpdate(payload);
    };
    /**
     * like jQuery's $.empty()
     */
    TaroNode.prototype._empty = function _empty () {
        while (this.childNodes.length > 0) {
            var child = this.childNodes[0];
            child.parentNode = null;
            eventSource.delete(child.uid);
            this.childNodes.shift();
        }
    };
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    prototypeAccessors.textContent.set = function (text) {
        this._empty();
        if (text === '') {
            this.enqueueUpdate({
                path: ((this._path) + "." + ("cn")),
                value: function () { return []; }
            });
        }
        else {
            this.appendChild(document$1.createTextNode(text));
        }
    };
    prototypeAccessors.innerHTML.set = function (html) {
        setInnerHTML(this, html);
    };
    prototypeAccessors.innerHTML.get = function () {
        return '';
    };
    TaroNode.prototype.findIndex = function findIndex (childeNodes, refChild) {
        var index = childeNodes.indexOf(refChild);
        ensure(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    };
    TaroNode.prototype.cloneNode = function cloneNode (isDeep) {
        if ( isDeep === void 0 ) isDeep = false;

        var constructor = this.constructor;
        var newNode;
        if (this.nodeType === 1 /* ELEMENT_NODE */) {
            newNode = new constructor(this.nodeType, this.nodeName);
        }
        else if (this.nodeType === 3 /* TEXT_NODE */) {
            newNode = new constructor('');
        }
        for (var key in this) {
            var value = this[key];
            if (['props', 'dataset'].includes(key) && typeof value === 'object') {
                newNode[key] = Object.assign({}, value);
            }
            else if (key === '_value') {
                newNode[key] = value;
            }
            else if (key === 'style') {
                newNode.style._value = Object.assign({}, value._value);
                newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
            }
        }
        if (isDeep) {
            newNode.childNodes = this.childNodes.map(function (node) { return node.cloneNode(true); });
        }
        return newNode;
    };

    Object.defineProperties( TaroNode.prototype, prototypeAccessors );

    return TaroNode;
}(TaroEventTarget));

var TaroText = /*@__PURE__*/(function (TaroNode) {
    function TaroText(text) {
        TaroNode.call(this, 3 /* TEXT_NODE */, '#text');
        this._value = text;
    }

    if ( TaroNode ) TaroText.__proto__ = TaroNode;
    TaroText.prototype = Object.create( TaroNode && TaroNode.prototype );
    TaroText.prototype.constructor = TaroText;

    var prototypeAccessors = { textContent: { configurable: true },nodeValue: { configurable: true } };
    prototypeAccessors.textContent.set = function (text) {
        this._value = text;
        this.enqueueUpdate({
            path: ((this._path) + "." + ("v")),
            value: text
        });
    };
    prototypeAccessors.textContent.get = function () {
        return this._value;
    };
    prototypeAccessors.nodeValue.set = function (text) {
        this.textContent = text;
    };
    prototypeAccessors.nodeValue.get = function () {
        return this._value;
    };

    Object.defineProperties( TaroText.prototype, prototypeAccessors );

    return TaroText;
}(TaroNode));

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
var styleProperties = [
    'alignContent',
    'alignItems',
    'alignSelf',
    'alignmentAdjust',
    'alignmentBaseline',
    'all',
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'appearance',
    'azimuth',
    'backfaceVisibility',
    'background',
    'backgroundAttachment',
    'backgroundBlendMode',
    'backgroundClip',
    'backgroundColor',
    'backgroundImage',
    'backgroundOrigin',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'baselineShift',
    'blockOverflow',
    'blockSize',
    'bookmarkLabel',
    'bookmarkLevel',
    'bookmarkState',
    'border',
    'borderBlock',
    'borderBlockColor',
    'borderBlockEnd',
    'borderBlockEndColor',
    'borderBlockEndStyle',
    'borderBlockEndWidth',
    'borderBlockStart',
    'borderBlockStartColor',
    'borderBlockStartStyle',
    'borderBlockStartWidth',
    'borderBlockStyle',
    'borderBlockWidth',
    'borderBottom',
    'borderBottomColor',
    'borderBottomFitLength',
    'borderBottomFitWidth',
    'borderBottomImage',
    'borderBottomLeftFitWidth',
    'borderBottomLeftImage',
    'borderBottomLeftRadius',
    'borderBottomRightFitLength',
    'borderBottomRightFitWidth',
    'borderBottomRightImage',
    'borderBottomRightRadius',
    'borderBottomStyle',
    'borderBottomWidth',
    'borderBottomlEftFitLength',
    'borderBoundary',
    'borderBreak',
    'borderCollapse',
    'borderColor',
    'borderCornerFit',
    'borderCornerImage',
    'borderCornerImageTransform',
    'borderEndEndRadius',
    'borderEndStartRadius',
    'borderFit',
    'borderFitLength',
    'borderFitWidth',
    'borderImage',
    'borderImageOutset',
    'borderImageRepeat',
    'borderImageSlice',
    'borderImageSource',
    'borderImageTransform',
    'borderImageWidth',
    'borderInline',
    'borderInlineColor',
    'borderInlineEnd',
    'borderInlineEndColor',
    'borderInlineEndStyle',
    'borderInlineEndWidth',
    'borderInlineStart',
    'borderInlineStartColor',
    'borderInlineStartStyle',
    'borderInlineStartWidth',
    'borderInlineStyle',
    'borderInlineWidth',
    'borderLeft',
    'borderLeftColor',
    'borderLeftFitLength',
    'borderLeftFitWidth',
    'borderLeftImage',
    'borderLeftStyle',
    'borderLeftWidth',
    'borderRadius',
    'borderRight',
    'borderRightColor',
    'borderRightFitLength',
    'borderRightFitWidth',
    'borderRightImage',
    'borderRightStyle',
    'borderRightWidth',
    'borderSpacing',
    'borderStartEndRadius',
    'borderStartStartRadius',
    'borderStyle',
    'borderTop',
    'borderTopColor',
    'borderTopFitLength',
    'borderTopFitWidth',
    'borderTopImage',
    'borderTopLeftFitLength',
    'borderTopLeftFitWidth',
    'borderTopLeftImage',
    'borderTopLeftRadius',
    'borderTopRightFitLength',
    'borderTopRightFitWidth',
    'borderTopRightImage',
    'borderTopRightRadius',
    'borderTopStyle',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'boxDecorationBreak',
    'boxShadow',
    'boxSizing',
    'boxSnap',
    'breakAfter',
    'breakBefore',
    'breakInside',
    'captionSide',
    'caret',
    'caretColor',
    'caretShape',
    'chains',
    'clear',
    'clip',
    'clipPath',
    'clipRule',
    'color',
    'colorAdjust',
    'colorInterpolationFilters',
    'colorScheme',
    'columnCount',
    'columnFill',
    'columnGap',
    'columnRule',
    'columnRuleColor',
    'columnRuleStyle',
    'columnRuleWidth',
    'columnSpan',
    'columnWidth',
    'columns',
    'contain',
    'content',
    'continue',
    'counterIncrement',
    'counterReset',
    'counterSet',
    'cue',
    'cueAfter',
    'cueBefore',
    'cursor',
    'direction',
    'display',
    'dominantBaseline',
    'dropInitialAfterAdjust',
    'dropInitialAfterAlign',
    'dropInitialBeforeAdjust',
    'dropInitialBeforeAlign',
    'dropInitialSize',
    'dropInitialValue',
    'elevation',
    'emptyCells',
    'filter',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexFlow',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'float',
    'floodColor',
    'floodOpacity',
    'flow',
    'flowFrom',
    'flowInto',
    'font',
    'fontFamily',
    'fontFeatureSettings',
    'fontKerning',
    'fontLanguageOverride',
    'fontMaxSize',
    'fontMinSize',
    'fontOpticalSizing',
    'fontPalette',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontSynthesis',
    'fontSynthesisSmallCaps',
    'fontSynthesisStyle',
    'fontSynthesisWeight',
    'fontVariant',
    'fontVariantAlternates',
    'fontVariantCaps',
    'fontVariantEastAsian',
    'fontVariantEmoji',
    'fontVariantLigatures',
    'fontVariantNumeric',
    'fontVariantPosition',
    'fontVariationSettings',
    'fontWeight',
    'footnoteDisplay',
    'footnotePolicy',
    'forcedColorAdjust',
    'gap',
    'glyphOrientationVertical',
    'grid',
    'gridArea',
    'gridAutoColumns',
    'gridAutoFlow',
    'gridAutoRows',
    'gridColumn',
    'gridColumnEnd',
    'gridColumnStart',
    'gridRow',
    'gridRowEnd',
    'gridRowStart',
    'gridTemplate',
    'gridTemplateAreas',
    'gridTemplateColumns',
    'gridTemplateRows',
    'hangingPunctuation',
    'height',
    'hyphenateCharacter',
    'hyphenateLimitChars',
    'hyphenateLimitLast',
    'hyphenateLimitLines',
    'hyphenateLimitZone',
    'hyphens',
    'imageOrientation',
    'imageResolution',
    'initialLetters',
    'initialLettersAlign',
    'initialLettersWrap',
    'inlineBoxAlign',
    'inlineSize',
    'inlineSizing',
    'inset',
    'insetBlock',
    'insetBlockEnd',
    'insetBlockStart',
    'insetInline',
    'insetInlineEnd',
    'insetInlineStart',
    'isolation',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'left',
    'letterSpacing',
    'lightingColor',
    'lineBreak',
    'lineClamp',
    'lineGrid',
    'lineHeight',
    'linePadding',
    'lineSnap',
    'lineStacking',
    'lineStackingRuby',
    'lineStackingShift',
    'lineStackingStrategy',
    'listStyle',
    'listStyleImage',
    'listStylePosition',
    'listStyleType',
    'margin',
    'marginBlock',
    'marginBlockEnd',
    'marginBlockStart',
    'marginBottom',
    'marginInline',
    'marginInlineEnd',
    'marginInlineStart',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginTrim',
    'markerSide',
    'mask',
    'maskBorder',
    'maskBorderMode',
    'maskBorderOutset',
    'maskBorderRepeat',
    'maskBorderSlice',
    'maskBorderSource',
    'maskBorderWidth',
    'maskClip',
    'maskComposite',
    'maskImage',
    'maskMode',
    'maskOrigin',
    'maskPosition',
    'maskRepeat',
    'maskSize',
    'maskType',
    'maxBlockSize',
    'maxHeight',
    'maxInlineSize',
    'maxLines',
    'maxWidth',
    'minBlockSize',
    'minHeight',
    'minInlineSize',
    'minWidth',
    'mixBlendMode',
    'navDown',
    'navLeft',
    'navRight',
    'navUp',
    'objectFit',
    'objectPosition',
    'offset',
    'offsetAfter',
    'offsetAnchor',
    'offsetBefore',
    'offsetDistance',
    'offsetEnd',
    'offsetPath',
    'offsetPosition',
    'offsetRotate',
    'offsetStart',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outlineColor',
    'outlineOffset',
    'outlineStyle',
    'outlineWidth',
    'overflow',
    'overflowBlock',
    'overflowInline',
    'overflowWrap',
    'overflowX',
    'overflowY',
    'padding',
    'paddingBlock',
    'paddingBlockEnd',
    'paddingBlockStart',
    'paddingBottom',
    'paddingInline',
    'paddingInlineEnd',
    'paddingInlineStart',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'page',
    'pageBreakAfter',
    'pageBreakBefore',
    'pageBreakInside',
    'pause',
    'pauseAfter',
    'pauseBefore',
    'perspective',
    'perspectiveOrigin',
    'pitch',
    'pitchRange',
    'placeContent',
    'placeItems',
    'placeSelf',
    'playDuring',
    'position',
    'quotes',
    'regionFragment',
    'resize',
    'richness',
    'right',
    'rowGap',
    'rubyAlign',
    'rubyMerge',
    'rubyPosition',
    'running',
    'scrollBehavior',
    'scrollMargin',
    'scrollMarginBlock',
    'scrollMarginBlockEnd',
    'scrollMarginBlockStart',
    'scrollMarginBottom',
    'scrollMarginInline',
    'scrollMarginInlineEnd',
    'scrollMarginInlineStart',
    'scrollMarginLeft',
    'scrollMarginRight',
    'scrollMarginTop',
    'scrollPadding',
    'scrollPaddingBlock',
    'scrollPaddingBlockEnd',
    'scrollPaddingBlockStart',
    'scrollPaddingBottom',
    'scrollPaddingInline',
    'scrollPaddingInlineEnd',
    'scrollPaddingInlineStart',
    'scrollPaddingLeft',
    'scrollPaddingRight',
    'scrollPaddingTop',
    'scrollSnapAlign',
    'scrollSnapStop',
    'scrollSnapType',
    'shapeImageThreshold',
    'shapeInside',
    'shapeMargin',
    'shapeOutside',
    'speak',
    'speakHeader',
    'speakNumeral',
    'speakPunctuation',
    'speechRate',
    'stress',
    'stringSet',
    'tabSize',
    'tableLayout',
    'textAlign',
    'textAlignAll',
    'textAlignLast',
    'textCombineUpright',
    'textDecoration',
    'textDecorationColor',
    'textDecorationLine',
    'textDecorationStyle',
    'textEmphasis',
    'textEmphasisColor',
    'textEmphasisPosition',
    'textEmphasisStyle',
    'textGroupAlign',
    'textHeight',
    'textIndent',
    'textJustify',
    'textOrientation',
    'textOverflow',
    'textShadow',
    'textSpaceCollapse',
    'textSpaceTrim',
    'textSpacing',
    'textTransform',
    'textUnderlinePosition',
    'textWrap',
    'top',
    'transform',
    'transformBox',
    'transformOrigin',
    'transformStyle',
    'transition',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'unicodeBidi',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceFamily',
    'volume',
    'whiteSpace',
    'widows',
    'width',
    'willChange',
    'wordBreak',
    'wordSpacing',
    'wordWrap',
    'wrapAfter',
    'wrapBefore',
    'wrapFlow',
    'wrapInside',
    'wrapThrough',
    'writingMode',
    'zIndex'
];

var PROPERTY_THRESHOLD = 2046;
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';

function setStyle(newVal, styleKey) {
    var old = this[styleKey];
    if (newVal) {
        this._usedStyleProp.add(styleKey);
    }
    warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, ("Style 属性 " + styleKey + " 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。"));
    if (old !== newVal) {
        this._value[styleKey] = newVal;
        this._element.enqueueUpdate({
            path: ((this._element._path) + "." + ("st")),
            value: this.cssText
        });
    }
}
function initStyle(ctor) {
    var properties = {};
    var loop = function ( i ) {
        var styleKey = styleProperties[i];
        properties[styleKey] = {
            get: function get() {
                return this._value[styleKey] || '';
            },
            set: function set(newVal) {
                setStyle.call(this, newVal, styleKey);
            }
        };
    };

    for (var i = 0; i < styleProperties.length; i++) loop( i );
    Object.defineProperties(ctor.prototype, properties);
}
var Style = function Style(element) {
    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
};

var prototypeAccessors$1 = { cssText: { configurable: true } };
Style.prototype.setCssVariables = function setCssVariables (styleKey) {
        var this$1 = this;

    this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function () {
            return this$1._value[styleKey] || '';
        },
        set: function (newVal) {
            setStyle.call(this$1, newVal, styleKey);
        }
    });
};
prototypeAccessors$1.cssText.get = function () {
        var this$1 = this;

    var text = '';
    this._usedStyleProp.forEach(function (key) {
        var val = this$1[key];
        if (!val)
            { return; }
        text += (toDashed(key)) + ": " + val + ";";
    });
    return text;
};
prototypeAccessors$1.cssText.set = function (str) {
        var this$1 = this;

    if (str == null) {
        str = '';
    }
    this._usedStyleProp.forEach(function (prop) {
        this$1.removeProperty(prop);
    });
    if (str === '') {
        return;
    }
    var rules = str.split(';');
    for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();
        if (rule === '') {
            continue;
        }
        var ref = rule.split(':');
            var propName = ref[0];
            var val = ref[1];
        if (isUndefined(val)) {
            continue;
        }
        this.setProperty(propName.trim(), val.trim());
    }
};
Style.prototype.setProperty = function setProperty (propertyName, value) {
    if (propertyName[0] === '-') {
        this.setCssVariables(propertyName);
    }
    else {
        propertyName = toCamelCase(propertyName);
    }
    if (isUndefined(value)) {
        return;
    }
    if (value === null || value === '') {
        this.removeProperty(propertyName);
    }
    else {
        this[propertyName] = value;
    }
};
Style.prototype.removeProperty = function removeProperty (propertyName) {
    propertyName = toCamelCase(propertyName);
    if (!this._usedStyleProp.has(propertyName)) {
        return '';
    }
    var value = this[propertyName];
    this[propertyName] = '';
    this._usedStyleProp.delete(propertyName);
    return value;
};
Style.prototype.getPropertyValue = function getPropertyValue (propertyName) {
    propertyName = toCamelCase(propertyName);
    var value = this[propertyName];
    if (!value) {
        return '';
    }
    return value;
};

Object.defineProperties( Style.prototype, prototypeAccessors$1 );
initStyle(Style);

function returnTrue() {
    return true;
}
function treeToArray(root, predict) {
    var array = [];
    var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
    var object = root;
    while (object) {
        if (object.nodeType === 1 /* ELEMENT_NODE */ && filter(object)) {
            array.push(object);
        }
        object = following(object, root);
    }
    return array;
}
function following(el, root) {
    var firstChild = el.firstChild;
    if (firstChild) {
        return firstChild;
    }
    var current = el;
    do {
        if (current === root) {
            return null;
        }
        var nextSibling = current.nextSibling;
        if (nextSibling) {
            return nextSibling;
        }
        current = current.parentElement;
    } while (current);
    return null;
}

var ClassList = /*@__PURE__*/(function (Set) {
    function ClassList(className, el) {
        Set.call(this);
        className.trim().split(/\s+/).forEach(Set.prototype.add.bind(this));
        this.el = el;
    }

    if ( Set ) ClassList.__proto__ = Set;
    ClassList.prototype = Object.create( Set && Set.prototype );
    ClassList.prototype.constructor = ClassList;

    var prototypeAccessors = { value: { configurable: true } };
    prototypeAccessors.value.get = function () {
        return [].concat( this ).join(' ');
    };
    ClassList.prototype.add = function add (s) {
        Set.prototype.add.call(this, s);
        this._update();
        return this;
    };
    ClassList.prototype.remove = function remove (s) {
        Set.prototype.delete.call(this, s);
        this._update();
    };
    ClassList.prototype.toggle = function toggle (s) {
        if (Set.prototype.has.call(this, s)) {
            Set.prototype.delete.call(this, s);
        }
        else {
            Set.prototype.add.call(this, s);
        }
        this._update();
    };
    ClassList.prototype.replace = function replace (s1, s2) {
        Set.prototype.delete.call(this, s1);
        Set.prototype.add.call(this, s2);
        this._update();
    };
    ClassList.prototype.contains = function contains (s) {
        return Set.prototype.has.call(this, s);
    };
    ClassList.prototype.toString = function toString () {
        return this.value;
    };
    ClassList.prototype._update = function _update () {
        this.el.className = this.value;
    };

    Object.defineProperties( ClassList.prototype, prototypeAccessors );

    return ClassList;
}(Set));

/* eslint-disable no-dupe-class-members */
var TaroElement = /*@__PURE__*/(function (TaroNode) {
    function TaroElement(nodeType, nodeName) {
        TaroNode.call(this, nodeType || 1 /* ELEMENT_NODE */, nodeName);
        this.props = {};
        this.dataset = EMPTY_OBJ;
        this.tagName = nodeName.toUpperCase();
        this.style = new Style(this);
        warn(this.tagName === 'MAP' && process.env.TARO_ENV === 'weapp', '微信小程序 map 组件的 `setting` 属性需要传递一个默认值。详情：\n https://developers.weixin.qq.com/miniprogram/dev/component/map.html');
    }

    if ( TaroNode ) TaroElement.__proto__ = TaroNode;
    TaroElement.prototype = Object.create( TaroNode && TaroNode.prototype );
    TaroElement.prototype.constructor = TaroElement;

    var prototypeAccessors = { id: { configurable: true },classList: { configurable: true },className: { configurable: true },cssText: { configurable: true },children: { configurable: true },attributes: { configurable: true },textContent: { configurable: true } };
    prototypeAccessors.id.get = function () {
        return this.getAttribute('id');
    };
    prototypeAccessors.id.set = function (val) {
        this.setAttribute('id', val);
    };
    prototypeAccessors.classList.get = function () {
        return new ClassList(this.className, this);
    };
    prototypeAccessors.className.get = function () {
        return this.getAttribute('class') || '';
    };
    prototypeAccessors.className.set = function (val) {
        this.setAttribute('class', val);
    };
    prototypeAccessors.cssText.get = function () {
        return this.getAttribute('style') || '';
    };
    prototypeAccessors.children.get = function () {
        return this.childNodes.filter(isElement);
    };
    TaroElement.prototype.hasAttribute = function hasAttribute (qualifiedName) {
        return !isUndefined(this.props[qualifiedName]);
    };
    TaroElement.prototype.hasAttributes = function hasAttributes () {
        return this.attributes.length > 0;
    };
    TaroElement.prototype.focus = function focus () {
        this.setAttribute('focus', true);
    };
    TaroElement.prototype.blur = function blur () {
        this.setAttribute('focus', false);
    };
    TaroElement.prototype.setAttribute = function setAttribute (qualifiedName, value) {
        var _a;
        warn(isString(value) && value.length > PROPERTY_THRESHOLD, ("元素 " + (this.nodeName) + " 的 属性 " + qualifiedName + " 的值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。"));
        if (qualifiedName === 'style') {
            this.style.cssText = value;
            qualifiedName = "st" /* Style */;
        }
        else if (qualifiedName === 'id') {
            eventSource.delete(this.uid);
            this.props[qualifiedName] = this.uid = value;
            eventSource.set(value, this);
            qualifiedName = 'uid';
        }
        else {
            this.props[qualifiedName] = value;
            if (qualifiedName === 'class') {
                qualifiedName = "cl" /* Class */;
            }
            if (qualifiedName.startsWith('data-')) {
                if (this.dataset === EMPTY_OBJ) {
                    this.dataset = Object.create(null);
                }
                this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
            }
        }
        (_a = CurrentReconciler.setAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName, value);
        this.enqueueUpdate({
            path: ((this._path) + "." + (toCamelCase(qualifiedName))),
            value: value
        });
    };
    TaroElement.prototype.removeAttribute = function removeAttribute (qualifiedName) {
        var _a;
        if (qualifiedName === 'style') {
            this.style.cssText = '';
        }
        else {
            delete this.props[qualifiedName];
        }
        (_a = CurrentReconciler.removeAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName);
        this.enqueueUpdate({
            path: ((this._path) + "." + (toCamelCase(qualifiedName))),
            value: ''
        });
    };
    TaroElement.prototype.getAttribute = function getAttribute (qualifiedName) {
        var attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    };
    prototypeAccessors.attributes.get = function () {
        var this$1 = this;

        var propKeys = Object.keys(this.props);
        var style = this.style.cssText;
        var attrs = propKeys.map(function (p) { return ({ name: p, value: this$1.props[p] }); });
        return attrs.concat(style ? { name: 'style', value: style } : []);
    };
    TaroElement.prototype.getElementsByTagName = function getElementsByTagName (tagName) {
        var this$1 = this;

        return treeToArray(this, function (el) {
            return el.nodeName === tagName || (tagName === '*' && this$1 !== el);
        });
    };
    TaroElement.prototype.getElementsByClassName = function getElementsByClassName (className) {
        return treeToArray(this, function (el) {
            var classList = el.classList;
            var classNames = className.trim().split(/\s+/);
            return classNames.every(function (c) { return classList.has(c); });
        });
    };
    TaroElement.prototype.dispatchEvent = function dispatchEvent (event) {
        var cancelable = event.cancelable;
        var listeners = this.__handlers[event.type];
        if (!isArray(listeners)) {
            return;
        }
        for (var i = listeners.length; i--;) {
            var listener = listeners[i];
            var result = (void 0);
            if (listener._stop) {
                listener._stop = false;
            }
            else {
                result = listener.call(this, event);
            }
            if ((result === false || event._end) && cancelable) {
                event.defaultPrevented = true;
            }
            if (event._end && event._stop) {
                break;
            }
        }
        if (event._stop) {
            this._stopPropagation(event);
        }
        else {
            event._stop = true;
        }
        return listeners != null;
    };
    prototypeAccessors.textContent.get = function () {
        var text = '';
        for (var i = 0; i < this.childNodes.length; i++) {
            var element = this.childNodes[i];
            text += element.textContent;
        }
        return text;
    };
    prototypeAccessors.textContent.set = function (text) {
        TaroNode.prototype.textContent = text;
    };
    TaroElement.prototype._stopPropagation = function _stopPropagation (event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            var listeners = target.__handlers[event.type];
            if (!isArray(listeners)) {
                continue;
            }
            for (var i = listeners.length; i--;) {
                var l = listeners[i];
                l._stop = true;
            }
        }
    };

    Object.defineProperties( TaroElement.prototype, prototypeAccessors );

    return TaroElement;
}(TaroNode));

var FormElement = /*@__PURE__*/(function (TaroElement) {
    function FormElement () {
        TaroElement.apply(this, arguments);
    }

    if ( TaroElement ) FormElement.__proto__ = TaroElement;
    FormElement.prototype = Object.create( TaroElement && TaroElement.prototype );
    FormElement.prototype.constructor = FormElement;

    var prototypeAccessors = { value: { configurable: true } };

    prototypeAccessors.value.get = function () {
        // eslint-disable-next-line dot-notation
        var val = this.props['value'];
        return val == null ? '' : val;
    };
    prototypeAccessors.value.set = function (val) {
        if (isNumber(val) || isArray(val)) {
            val = JSON.stringify(val);
        }
        this.setAttribute('value', val);
    };
    FormElement.prototype.dispatchEvent = function dispatchEvent (event) {
        if ((event.type === 'input' || event.type === 'change') && event.mpEvent) {
            var val = event.mpEvent.detail.value;
            if (isNumber(val) || isArray(val)) {
                val = JSON.stringify(val);
            }
            if (isString(val) || isBoolean(val)) {
                this.props.value = val;
            }
        }
        return TaroElement.prototype.dispatchEvent.call(this, event);
    };

    Object.defineProperties( FormElement.prototype, prototypeAccessors );

    return FormElement;
}(TaroElement));

var Performance = function Performance() {
    this.recorder = new Map();
};
Performance.prototype.start = function start (id) {
    if (!options.debug) {
        return;
    }
    this.recorder.set(id, Date.now());
};
Performance.prototype.stop = function stop (id) {
    if (!options.debug) {
        return;
    }
    var now = Date.now();
    var prev = this.recorder.get(id);
    var time = now - prev;
    // eslint-disable-next-line no-console
    console.log((id + " 时长： " + time + "ms"));
};
var perf = new Performance();

var TaroRootElement = /*@__PURE__*/(function (TaroElement) {
    function TaroRootElement() {
        TaroElement.call(this, 1 /* ELEMENT_NODE */, 'root');
        this.pendingUpdate = false;
        this.updatePayloads = [];
        this.pendingFlush = false;
        this.updateCallbacks = [];
        this.ctx = null;
    }

    if ( TaroElement ) TaroRootElement.__proto__ = TaroElement;
    TaroRootElement.prototype = Object.create( TaroElement && TaroElement.prototype );
    TaroRootElement.prototype.constructor = TaroRootElement;

    var prototypeAccessors = { _path: { configurable: true },_root: { configurable: true } };
    prototypeAccessors._path.get = function () {
        return 'root';
    };
    prototypeAccessors._root.get = function () {
        return this;
    };
    TaroRootElement.prototype.enqueueUpdate = function enqueueUpdate (payload) {
        this.updatePayloads.push(payload);
        if (this.pendingUpdate || this.ctx === null) {
            return;
        }
        this.performUpdate();
    };
    TaroRootElement.prototype.performUpdate = function performUpdate (initRender, prerender) {
        var this$1 = this;
        if ( initRender === void 0 ) initRender = false;

        this.pendingUpdate = true;
        var ctx = this.ctx;
        setTimeout(function () {
            var _a, _b;
            perf.start(SET_DATA);
            var data = Object.create(null);
            var resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this$1.updatePayloads.length > 0) {
                var ref = this$1.updatePayloads.shift();
                var path = ref.path;
                var value = ref.value;
                if (path.endsWith("cn" /* Childnodes */)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            var loop = function ( path ) {
                resetPaths.forEach(function (p) {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path$1.includes(p) && path$1 !== p) {
                        delete data[path$1];
                    }
                });
                var value$1 = data[path$1];
                if (isFunction(value$1)) {
                    data[path$1] = value$1();
                }
            };

            for (var path$1 in data) loop();
            (_a = CurrentReconciler.prepareUpdateData) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, data, this$1);
            if (initRender) {
                (_b = CurrentReconciler.appendInitialPage) === null || _b === void 0 ? void 0 : _b.call(CurrentReconciler, data, this$1);
            }
            if (isFunction(prerender)) {
                prerender(data);
            }
            else {
                this$1.pendingUpdate = false;
                ctx.setData(data, function () {
                    perf.stop(SET_DATA);
                    if (!this$1.pendingFlush) {
                        this$1.flushUpdateCallback();
                    }
                    if (initRender) {
                        perf.stop(PAGE_INIT);
                    }
                });
            }
        }, 0);
    };
    TaroRootElement.prototype.enqueueUpdateCallbak = function enqueueUpdateCallbak (cb, ctx) {
        this.updateCallbacks.push(function () {
            ctx ? cb.call(ctx) : cb();
        });
    };
    TaroRootElement.prototype.flushUpdateCallback = function flushUpdateCallback () {
        this.pendingFlush = false;
        var copies = this.updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    };

    Object.defineProperties( TaroRootElement.prototype, prototypeAccessors );

    return TaroRootElement;
}(TaroElement));

var isBrowser = typeof document !== 'undefined' && !!document.scripts;
var doc = isBrowser ? document : EMPTY_OBJ;
var win = isBrowser ? window : EMPTY_OBJ;

var TaroDocument = /*@__PURE__*/(function (TaroElement) {
    function TaroDocument() {
        TaroElement.call(this, 9 /* DOCUMENT_NODE */, '#document');
    }

    if ( TaroElement ) TaroDocument.__proto__ = TaroElement;
    TaroDocument.prototype = Object.create( TaroElement && TaroElement.prototype );
    TaroDocument.prototype.constructor = TaroDocument;
    TaroDocument.prototype.createElement = function createElement (type) {
        if (type === 'root') {
            return new TaroRootElement();
        }
        if (controlledComponent.has(type)) {
            return new FormElement(1 /* ELEMENT_NODE */, type);
        }
        return new TaroElement(1 /* ELEMENT_NODE */, type);
    };
    TaroDocument.prototype.createTextNode = function createTextNode (text) {
        return new TaroText(text);
    };
    TaroDocument.prototype.getElementById = function getElementById (id) {
        var el = eventSource.get(id);
        return isUndefined(el) ? null : el;
    };
    TaroDocument.prototype.getElementsByTagName = function getElementsByTagName (tagName) {
        var this$1 = this;

        var elements = [];
        eventSource.forEach(function (node) {
            if (node.nodeType !== 1 /* ELEMENT_NODE */) {
                return;
            }
            if (node.nodeName === tagName || (tagName === '*' && node !== this$1)) {
                elements.push(node);
            }
        });
        return elements;
    };
    TaroDocument.prototype.querySelector = function querySelector (query) {
        // 为了 Vue3 的乞丐版实现
        if (/^#/.test(query)) {
            return this.getElementById(query.slice(1));
        }
        return null;
    };
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    TaroDocument.prototype.createComment = function createComment () {
        return new TaroText('');
    };

    return TaroDocument;
}(TaroElement));
function createDocument() {
    var doc = new TaroDocument();
    doc.appendChild((doc.documentElement = doc.createElement('html')));
    doc.documentElement.appendChild((doc.head = doc.createElement('head')));
    var body = doc.createElement('body');
    doc.documentElement.appendChild(body);
    doc.body = body;
    var app = doc.createElement('app');
    app.id = 'app';
    var container = doc.createElement('container'); // 多包一层主要为了兼容 vue
    container.appendChild(app);
    doc.documentElement.lastChild.appendChild(container);
    doc.createEvent = createEvent;
    return doc;
}
var document$1 = (isBrowser ? doc : createDocument());

var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var navigator = isBrowser ? win.navigator : {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
    cookieEnabled: true,
    mimeTypes: [],
    onLine: true,
    platform: 'MacIntel',
    plugins: [],
    product: 'Taro',
    productSub: '20030107',
    userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
    vendor: 'Joyent',
    vendorSub: ''
};

// https://github.com/myrne/performance-now
(function () {
    var loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        exports.now = function () {
            return performance.now();
        };
    }
    else if (Date.now) {
        exports.now = function () {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    }
    else {
        exports.now = function () {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
})();
var lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
var raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
    var _now = exports.now();
    var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
};
var caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;

function getComputedStyle(element) {
    return new Style(element);
}

var window$1 = isBrowser ? win : {
    navigator: navigator,
    document: document$1
};
if (process.env.TARO_ENV !== 'h5') {
    window$1.requestAnimationFrame = raf;
    window$1.cancelAnimationFrame = caf;
    window$1.Date = Date;
    window$1.setTimeout = setTimeout;
    window$1.getComputedStyle = getComputedStyle;
}

var Current = {
    app: null,
    router: null,
    page: null
};
var getCurrentInstance = function () { return Current; };

var Events = function Events(opts) {
    if (typeof opts !== 'undefined' && opts.callbacks) {
        this.callbacks = opts.callbacks;
    }
    else {
        this.callbacks = {};
    }
};
Events.prototype.on = function on (eventName, callback, context) {
    var event, node, tail, list;
    if (!callback) {
        return this;
    }
    eventName = eventName.split(Events.eventSplitter);
    var calls = this.callbacks;
    while ((event = eventName.shift())) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
            tail: tail,
            next: list ? list.next : node
        };
    }
    return this;
};
Events.prototype.once = function once (events, callback, context) {
        var this$1 = this;

    var wrapper = function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

        callback.apply(this$1, args);
        this$1.off(events, wrapper, context);
    };
    this.on(events, wrapper, context);
    return this;
};
Events.prototype.off = function off (events, callback, context) {
    var event, calls, node, tail, cb, ctx;
    if (!(calls = this.callbacks)) {
        return this;
    }
    if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
    }
    events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
    while ((event = events.shift())) {
        node = calls[event];
        delete calls[event];
        if (!node || !(callback || context)) {
            continue;
        }
        tail = node.tail;
        while ((node = node.next) !== tail) {
            cb = node.callback;
            ctx = node.context;
            if ((callback && cb !== callback) || (context && ctx !== context)) {
                this.on(event, cb, ctx);
            }
        }
    }
    return this;
};
Events.prototype.trigger = function trigger (events) {
    var event, node, calls, tail;
    if (!(calls = this.callbacks)) {
        return this;
    }
    events = events.split(Events.eventSplitter);
    var rest = [].slice.call(arguments, 1);
    while ((event = events.shift())) {
        if ((node = calls[event])) {
            tail = node.tail;
            while ((node = node.next) !== tail) {
                node.callback.apply(node.context || this, rest);
            }
        }
    }
    return this;
};
Events.eventSplitter = /\s+/;
if (process.env.TARO_ENV === 'alipay') {
    if (!my.taroEventCenter) {
        my.taroEventCenter = new Events();
    }
    exports.eventCenter = my.taroEventCenter;
}
else {
    exports.eventCenter = new Events();
}

/* eslint-disable dot-notation */
var instances = new Map();
function injectPageInstance(inst, id) {
    var _a;
    (_a = CurrentReconciler.mergePageInstance) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, instances.get(id), inst);
    instances.set(id, inst);
}
function getPageInstance(id) {
    return instances.get(id);
}
function addLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path : '/' + path;
}
var pageId = incrementId();
function safeExecute(path, lifecycle) {
    var args = [], len = arguments.length - 2;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

    var instance = instances.get(path);
    if (instance == null) {
        return;
    }
    var func = CurrentReconciler.getLifecyle(instance, lifecycle);
    if (isArray(func)) {
        var res = func.map(function (fn) { return fn.apply(instance, args); });
        return res[0];
    }
    if (!isFunction(func)) {
        return;
    }
    return func.apply(instance, args);
}
function stringify(obj) {
    if (obj == null) {
        return '';
    }
    var path = Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
    }).join('&');
    return path === '' ? path : '?' + path;
}
function getPath(id, options) {
    var path = id;
    if (!isBrowser) {
        path = id + stringify(options);
    }
    return path;
}
function getOnReadyEventKey(path) {
    return path + '.' + 'onReady';
}
function getOnShowEventKey(path) {
    return path + '.' + 'onShow';
}
function getOnHideEventKey(path) {
    return path + '.' + 'onHide';
}
function createPageConfig(component, pageName, data, pageConfig) {
    var _a, _b;
    var id = pageName !== null && pageName !== void 0 ? pageName : ("taro_page_" + (pageId()));
    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
    var pageElement = null;
    var config = {
        onLoad: function onLoad(options, cb) {
            var this$1 = this;

            perf.start(PAGE_INIT);
            Current.page = this;
            this.config = pageConfig || {};
            if (this.options == null) {
                this.options = options;
            }
            var path = getPath(id, options);
            Current.router = {
                params: options,
                path: addLeadingSlash(this.route || this.__route__),
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
            };
            Current.app.mount(component, path, function () {
                pageElement = document$1.getElementById(path);
                ensure(pageElement !== null, '没有找到页面实例。');
                safeExecute(path, 'onLoad', options);
                if (!isBrowser) {
                    pageElement.ctx = this$1;
                    pageElement.performUpdate(true, cb);
                }
            });
        },
        onReady: function onReady() {
            var path = getPath(id, this.options);
            raf(function () {
                exports.eventCenter.trigger(getOnReadyEventKey(id));
            });
            safeExecute(path, 'onReady');
        },
        onUnload: function onUnload() {
            var path = getPath(id, this.options);
            Current.app.unmount(path, function () {
                instances.delete(path);
                if (pageElement) {
                    pageElement.ctx = null;
                }
            });
        },
        onShow: function onShow() {
            Current.page = this;
            this.config = pageConfig || {};
            var path = getPath(id, this.options);
            Current.router = {
                params: this.options,
                path: addLeadingSlash(this.route || this.__route__),
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
            };
            raf(function () {
                exports.eventCenter.trigger(getOnShowEventKey(id));
            });
            safeExecute(path, 'onShow');
        },
        onHide: function onHide() {
            Current.page = null;
            Current.router = null;
            var path = getPath(id, this.options);
            raf(function () {
                exports.eventCenter.trigger(getOnHideEventKey(id));
            });
            safeExecute(path, 'onHide');
        },
        onPullDownRefresh: function onPullDownRefresh() {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onPullDownRefresh');
        },
        onReachBottom: function onReachBottom() {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onReachBottom');
        },
        onPageScroll: function onPageScroll(options) {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onPageScroll', options);
        },
        onResize: function onResize(options) {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onResize', options);
        },
        onTabItemTap: function onTabItemTap(options) {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onTabItemTap', options);
        },
        onTitleClick: function onTitleClick() {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onTitleClick');
        },
        onOptionMenuClick: function onOptionMenuClick() {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onOptionMenuClick');
        },
        onPopMenuClick: function onPopMenuClick() {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onPopMenuClick');
        },
        onPullIntercept: function onPullIntercept() {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onPullIntercept');
        },
        onAddToFavorites: function onAddToFavorites() {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onAddToFavorites');
        }
    };
    // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
    if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) ||
        component.enableShareAppMessage) {
        config.onShareAppMessage = function (options) {
            var target = options.target;
            if (target != null) {
                var id$1 = target.id;
                var element = document$1.getElementById(id$1);
                if (element != null) {
                    options.target.dataset = element.dataset;
                }
            }
            var path = getPath(id, this.options);
            return safeExecute(path, 'onShareAppMessage', options);
        };
    }
    if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) ||
        component.enableShareTimeline) {
        config.onShareTimeline = function () {
            var path = getPath(id, this.options);
            return safeExecute(path, 'onShareTimeline');
        };
    }
    config.eh = eventHandler;
    if (!isUndefined(data)) {
        config.data = data;
    }
    if (isBrowser) {
        config.path = id;
    }
    return config;
}
function createComponentConfig(component, componentName, data) {
    var _a, _b, _c;
    var id = componentName !== null && componentName !== void 0 ? componentName : ("taro_component_" + (pageId()));
    var componentElement = null;
    var config = {
        attached: function attached() {
            var this$1 = this;

            perf.start(PAGE_INIT);
            var path = getPath(id, { id: this.getPageId() });
            Current.app.mount(component, path, function () {
                componentElement = document$1.getElementById(path);
                ensure(componentElement !== null, '没有找到组件实例。');
                safeExecute(path, 'onLoad');
                if (!isBrowser) {
                    componentElement.ctx = this$1;
                    componentElement.performUpdate(true);
                }
            });
        },
        detached: function detached() {
            var path = getPath(id, { id: this.getPageId() });
            Current.app.unmount(path, function () {
                instances.delete(path);
                if (componentElement) {
                    componentElement.ctx = null;
                }
            });
        },
        pageLifetimes: {
            show: function show() {
                safeExecute(id, 'onShow');
            },
            hide: function hide() {
                safeExecute(id, 'onHide');
            }
        },
        methods: {
            eh: eventHandler
        }
    };
    if (!isUndefined(data)) {
        config.data = data;
    }
    config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : EMPTY_OBJ;
    config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : EMPTY_OBJ;
    config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : EMPTY_OBJ;
    return config;
}
function createRecursiveComponentConfig() {
    var obj;

    return {
        properties: {
            i: {
                type: Object,
                value: ( obj = {}, obj["nn" /* NodeName */] = 'view', obj )
            }
        },
        observers: {
            i: function i(val) {
                warn(val["nn" /* NodeName */] === '#text', ("请在此元素外再套一层非 Text 元素：<text>" + (val["v" /* Text */]) + "</text>，详情：https://github.com/NervJS/taro/issues/6054"));
            }
        },
        options: {
            addGlobalClass: true
        },
        methods: {
            eh: eventHandler
        }
    };
}

function isClassComponent(R, component) {
    var _a;
    return isFunction(component.render) ||
        !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) ||
        component.prototype instanceof R.Component; // compat for some others react-like library
}
function connectReactPage(R, id) {
    var h = R.createElement;
    return function (component) {
        // eslint-disable-next-line dot-notation
        var isReactComponent = isClassComponent(R, component);
        var inject = function (node) { return node && injectPageInstance(node, id); };
        var refs = isReactComponent ? { ref: inject } : {
            forwardedRef: inject,
            // 兼容 react-redux 7.20.1+
            reactReduxForwardedRef: inject
        };
        if (PageContext === EMPTY_OBJ) {
            PageContext = R.createContext('');
        }
        return /*@__PURE__*/(function (superclass) {
            function Page() {
                superclass.apply(this, arguments);
                this.state = {
                    hasError: false
                };
            }

            if ( superclass ) Page.__proto__ = superclass;
            Page.prototype = Object.create( superclass && superclass.prototype );
            Page.prototype.constructor = Page;
            Page.getDerivedStateFromError = function getDerivedStateFromError (error) {
                console.warn(error);
                return { hasError: true };
            };
            // React 16 uncaught error 会导致整个应用 crash，
            // 目前把错误缩小到页面
            Page.prototype.componentDidCatch = function componentDidCatch (error, info) {
                console.warn(error);
                console.error(info.componentStack);
            };
            Page.prototype.render = function render () {
                var children = this.state.hasError
                    ? []
                    : h(PageContext.Provider, { value: id }, h(component, Object.assign(Object.assign({}, this.props), refs)));
                if (isBrowser) {
                    return h('div', { id: id, className: 'taro_page' }, children);
                }
                return h('root', { id: id }, children);
            };

            return Page;
        }(R.Component));
    };
}
// 初始值设置为 any 主要是为了过 TS 的校验
var R = EMPTY_OBJ;
var PageContext = EMPTY_OBJ;
var ReactDOM;
function setReconciler() {
    var hostConfig = {
        getLifecyle: function getLifecyle(instance, lifecycle) {
            if (lifecycle === 'onShow') {
                lifecycle = 'componentDidShow';
            }
            else if (lifecycle === 'onHide') {
                lifecycle = 'componentDidHide';
            }
            return instance[lifecycle];
        },
        mergePageInstance: function mergePageInstance(prev, next) {
            if (!prev || !next)
                { return; }
            // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
            Object.keys(prev).forEach(function (item) {
                if (isFunction(next[item])) {
                    next[item] = [next[item] ].concat( prev[item]);
                }
                else {
                    next[item] = (next[item] || []).concat( prev[item]);
                }
            });
        }
    };
    if (isBrowser) {
        hostConfig.createPullDownComponent = function (el, _, R) {
            var isReactComponent = isClassComponent(R, el);
            return R.forwardRef(function (props, ref) {
                var newProps = Object.assign({}, props);
                if (isReactComponent) {
                    newProps.ref = ref;
                }
                return R.createElement('taro-pull-to-refresh', null, R.createElement(el, newProps));
            });
        };
        hostConfig.findDOMNode = function (inst) {
            return ReactDOM.findDOMNode(inst);
        };
    }
    options.reconciler(hostConfig);
}
var pageKeyId = incrementId();
function createReactApp(App, react, reactdom, config) {
    R = react;
    ReactDOM = reactdom;
    ensure(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
    var ref = R.createRef();
    var isReactComponent = isClassComponent(R, App);
    setReconciler();
    var wrapper;
    var AppWrapper = /*@__PURE__*/(function (superclass) {
        function AppWrapper() {
            superclass.apply(this, arguments);
            // run createElement() inside the render function to make sure that owner is right
            this.pages = [];
            this.elements = [];
        }

        if ( superclass ) AppWrapper.__proto__ = superclass;
        AppWrapper.prototype = Object.create( superclass && superclass.prototype );
        AppWrapper.prototype.constructor = AppWrapper;
        AppWrapper.prototype.mount = function mount (component, id, cb) {
            var key = id + pageKeyId();
            var page = function () { return R.createElement(component, { key: key, tid: id }); };
            this.pages.push(page);
            this.forceUpdate(cb);
        };
        AppWrapper.prototype.unmount = function unmount (id, cb) {
            for (var i = 0; i < this.elements.length; i++) {
                var element = this.elements[i];
                if (element.props.tid === id) {
                    this.elements.splice(i, 1);
                    break;
                }
            }
            this.forceUpdate(cb);
        };
        AppWrapper.prototype.render = function render () {
            while (this.pages.length > 0) {
                var page = this.pages.pop();
                this.elements.push(page());
            }
            var props = null;
            if (isReactComponent) {
                props = { ref: ref };
            }
            return R.createElement(App, props, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
        };

        return AppWrapper;
    }(R.Component));
    var app = Object.create({
        render: function render(cb) {
            wrapper.forceUpdate(cb);
        },
        mount: function mount(component, id, cb) {
            var page = connectReactPage(R, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount: function unmount(id, cb) {
            wrapper.unmount(id, cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                // eslint-disable-next-line react/no-render-return-value
                wrapper = ReactDOM.render(R.createElement(AppWrapper), document$1.getElementById('app'));
                var app = ref.current;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (app != null && isFunction(app.onLaunch)) {
                    app.onLaunch(options);
                }
            }
        },
        onShow: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                var app = ref.current;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (app != null && isFunction(app.componentDidShow)) {
                    app.componentDidShow(options);
                }
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                var app = ref.current;
                if (app != null && isFunction(app.componentDidHide)) {
                    app.componentDidHide(options);
                }
            }
        }
    });
    Current.app = app;
    return Current.app;
}

function connectVuePage(Vue, id) {
    return function (component) {
        var injectedPage = Vue.extend({
            props: {
                tid: String
            },
            mixins: [component, {
                    created: function created() {
                        injectPageInstance(this, id);
                    }
                }]
        });
        var options = {
            render: function render(h) {
                return h(isBrowser ? 'div' : 'root', {
                    attrs: {
                        id: id,
                        class: isBrowser ? 'taro_page' : ''
                    }
                }, [
                    h(injectedPage, { props: { tid: id } })
                ]);
            }
        };
        return options;
    };
}
function setReconciler$1() {
    var hostConfig = {
        getLifecyle: function getLifecyle(instance, lifecycle) {
            return instance.$options[lifecycle];
        },
        removeAttribute: function removeAttribute(dom, qualifiedName) {
            var compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));
            if (compName in internalComponents &&
                hasOwn(internalComponents[compName], qualifiedName) &&
                isBooleanStringLiteral(internalComponents[compName][qualifiedName])) {
                // avoid attribute being removed because set false value in vue
                dom.setAttribute(qualifiedName, false);
            }
            else {
                delete dom.props[qualifiedName];
            }
        }
    };
    if (isBrowser) {
        hostConfig.createPullDownComponent = function (el, path, vue) {
            var injectedPage = vue.extend({
                props: {
                    tid: String
                },
                mixins: [el, {
                        created: function created() {
                            injectPageInstance(this, path);
                        }
                    }]
            });
            var options = {
                name: 'PullToRefresh',
                render: function render(h) {
                    return h('taro-pull-to-refresh', { class: ['hydrated'] }, [h(injectedPage, this.$slots.default)]);
                }
            };
            return options;
        };
        hostConfig.findDOMNode = function (el) {
            return el.$el;
        };
    }
    options.reconciler(hostConfig);
}
var Vue;
function createVueApp(App, vue, config) {
    Vue = vue;
    ensure(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
    setReconciler$1();
    Vue.config.getTagNamespace = noop;
    var elements = [];
    var pages = [];
    var appInstance;
    var wrapper = new Vue({
        render: function render(h) {
            while (pages.length > 0) {
                var page = pages.pop();
                elements.push(page(h));
            }
            return h(App.$options, { ref: 'app' }, elements.slice());
        },
        methods: {
            mount: function mount(component, id, cb) {
                pages.push(function (h) { return h(component, { key: id }); });
                this.updateSync(cb);
            },
            updateSync: function updateSync(cb) {
                this._update(this._render(), false);
                this.$children.forEach(function (child) { return child._update(child._render(), false); });
                cb();
            },
            unmount: function unmount(id, cb) {
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    if (element.key === id) {
                        elements.splice(i, 1);
                        break;
                    }
                }
                this.updateSync(cb);
            }
        }
    });
    var app = Object.create({
        mount: function mount(component, id, cb) {
            var page = connectVuePage(Vue, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount: function unmount(id, cb) {
            wrapper.unmount(id, cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                wrapper.$mount(document$1.getElementById('app'));
                appInstance = wrapper.$refs.app;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (appInstance != null && isFunction(appInstance.$options.onLaunch)) {
                    appInstance.$options.onLaunch.call(appInstance, options);
                }
            }
        },
        onShow: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (appInstance != null && isFunction(appInstance.$options.onShow)) {
                    appInstance.$options.onShow.call(appInstance, options);
                }
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                if (appInstance != null && isFunction(appInstance.$options.onHide)) {
                    appInstance.$options.onHide.call(appInstance, options);
                }
            }
        }
    });
    Current.app = app;
    return Current.app;
}

function createVue3Page(h, id) {
    return function (component) {
        // vue3 组件 created 时机比小程序页面 onShow 慢，这里先插入一个实例以响应初始化时的小程序生命周期调用
        injectPageInstance({ $options: component }, id);
        var inject = {
            props: {
                tid: String
            },
            created: function created() {
                injectPageInstance(this, id);
            }
        };
        component.mixins = isArray(component.mixins)
            ? component.mixins.push(inject)
            : [inject];
        return h(isBrowser ? 'div' : 'root', {
            key: id,
            id: id,
            class: isBrowser ? 'taro_page' : ''
        }, [
            h(component, {
                tid: id
            })
        ]);
    };
}
function setReconciler$2() {
    var hostConfig = {
        getLifecyle: function getLifecyle(instance, lifecycle) {
            return instance.$options[lifecycle];
        },
        removeAttribute: function removeAttribute(dom, qualifiedName) {
            var compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));
            if (compName in internalComponents &&
                hasOwn(internalComponents[compName], qualifiedName) &&
                isBooleanStringLiteral(internalComponents[compName][qualifiedName])) {
                // avoid attribute being removed because set false value in vue
                dom.setAttribute(qualifiedName, false);
            }
            else {
                delete dom.props[qualifiedName];
            }
        }
    };
    if (isBrowser) {
        hostConfig.createPullDownComponent = function (component, path, h) {
            var inject = {
                props: {
                    tid: String
                },
                created: function created() {
                    injectPageInstance(this, path);
                }
            };
            component.mixins = isArray(component.mixins)
                ? component.mixins.push(inject)
                : [inject];
            return {
                render: function render() {
                    return h('taro-pull-to-refresh', {
                        class: 'hydrated'
                    }, [h(component, this.$slots.default)]);
                }
            };
        };
        hostConfig.findDOMNode = function (el) {
            return el.$el;
        };
    }
    options.reconciler(hostConfig);
}
function createVue3App(app, h, config) {
    var pages = [];
    var appInstance;
    ensure(!isFunction(app._component), '入口组件不支持使用函数式组件');
    setReconciler$2();
    app._component.render = function () {
        return pages.slice();
    };
    var appConfig = Object.create({
        mount: function mount(component, id, cb) {
            var page = createVue3Page(h, id)(component);
            pages.push(page);
            this.updateAppInstance(cb);
        },
        unmount: function unmount(id, cb) {
            pages = pages.filter(function (page) { return page.key !== id; });
            this.updateAppInstance(cb);
        },
        updateAppInstance: function updateAppInstance(cb) {
            appInstance.$forceUpdate();
            appInstance.$nextTick(cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                appInstance = app.mount('#app');
                var onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
                isFunction(onLaunch) && onLaunch.call(appInstance, options);
            }
        },
        onShow: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                var onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
                isFunction(onShow) && onShow.call(appInstance, options);
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value: function value(options) {
                var _a;
                var onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
                isFunction(onHide) && onHide.call(appInstance, options);
            }
        }
    });
    Current.app = appConfig;
    return Current.app;
}

var taroHooks = function (lifecycle) {
    return function (fn) {
        var id = R.useContext(PageContext);
        // hold fn ref and keep up to date
        var fnRef = R.useRef(fn);
        if (fnRef.current !== fn)
            { fnRef.current = fn; }
        R.useLayoutEffect(function () {
            var inst = getPageInstance(id);
            var first = false;
            if (inst == null) {
                first = true;
                inst = Object.create(null);
            }
            inst = inst;
            // callback is immutable but inner function is up to date
            var callback = function () {
                var args = [], len = arguments.length;
                while ( len-- ) args[ len ] = arguments[ len ];

                return fnRef.current.apply(fnRef, args);
            };
            if (isFunction(inst[lifecycle])) {
                inst[lifecycle] = [inst[lifecycle], callback];
            }
            else {
                inst[lifecycle] = (inst[lifecycle] || []).concat( [callback]
                );
            }
            if (first) {
                injectPageInstance(inst, id);
            }
            return function () {
                var inst = getPageInstance(id);
                var list = inst[lifecycle];
                if (list === callback) {
                    inst[lifecycle] = undefined;
                }
                else if (isArray(list)) {
                    inst[lifecycle] = list.filter(function (item) { return item !== callback; });
                }
            };
        }, []);
    };
};
var useDidShow = taroHooks('componentDidShow');
var useDidHide = taroHooks('componentDidHide');
var usePullDownRefresh = taroHooks('onPullDownRefresh');
var useReachBottom = taroHooks('onReachBottom');
var usePageScroll = taroHooks('onPageScroll');
var useResize = taroHooks('onResize');
var useShareAppMessage = taroHooks('onShareAppMessage');
var useTabItemTap = taroHooks('onTabItemTap');
var useTitleClick = taroHooks('onTitleClick');
var useOptionMenuClick = taroHooks('onOptionMenuClick');
var usePullIntercept = taroHooks('onPullIntercept');
var useShareTimeline = taroHooks('onShareTimeline');
var useAddToFavorites = taroHooks('onAddToFavorites');
var useReady = taroHooks('onReady');
var useRouter = function (dynamic) {
    if ( dynamic === void 0 ) dynamic = false;

    return dynamic ? Current.router : R.useMemo(function () { return Current.router; }, []);
};
var useScope = function () { return undefined; };

function removeLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path.slice(1) : path;
}
var nextTick = function (cb, ctx) {
    var _a, _b, _c;
    var router = Current.router;
    var timerFunc = function () {
        setTimeout(function () {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (router !== null) {
        var pageElement = null;
        var path = getPath(removeLeadingSlash(router.path), router.params);
        pageElement = document$1.getElementById(path);
        if (pageElement !== null) {
            if (isBrowser) {
                (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(function () {
                    timerFunc();
                })) !== null && _c !== void 0 ? _c : timerFunc();
            }
            else {
                pageElement.enqueueUpdateCallbak(cb, ctx);
            }
        }
        else {
            timerFunc();
        }
    }
    else {
        timerFunc();
    }
};

exports.Current = Current;
exports.CurrentReconciler = CurrentReconciler;
exports.Events = Events;
exports.FormElement = FormElement;
exports.Style = Style;
exports.TaroElement = TaroElement;
exports.TaroEvent = TaroEvent;
exports.TaroNode = TaroNode;
exports.TaroRootElement = TaroRootElement;
exports.TaroText = TaroText;
exports.cancelAnimationFrame = caf;
exports.connectReactPage = connectReactPage;
exports.connectVuePage = connectVuePage;
exports.createComponentConfig = createComponentConfig;
exports.createDocument = createDocument;
exports.createEvent = createEvent;
exports.createPageConfig = createPageConfig;
exports.createReactApp = createReactApp;
exports.createRecursiveComponentConfig = createRecursiveComponentConfig;
exports.createVue3App = createVue3App;
exports.createVueApp = createVueApp;
exports.document = document$1;
exports.getComputedStyle = getComputedStyle;
exports.getCurrentInstance = getCurrentInstance;
exports.hydrate = hydrate;
exports.injectPageInstance = injectPageInstance;
exports.navigator = navigator;
exports.nextTick = nextTick;
exports.options = options;
exports.requestAnimationFrame = raf;
exports.stringify = stringify;
exports.useAddToFavorites = useAddToFavorites;
exports.useDidHide = useDidHide;
exports.useDidShow = useDidShow;
exports.useOptionMenuClick = useOptionMenuClick;
exports.usePageScroll = usePageScroll;
exports.usePullDownRefresh = usePullDownRefresh;
exports.usePullIntercept = usePullIntercept;
exports.useReachBottom = useReachBottom;
exports.useReady = useReady;
exports.useResize = useResize;
exports.useRouter = useRouter;
exports.useScope = useScope;
exports.useShareAppMessage = useShareAppMessage;
exports.useShareTimeline = useShareTimeline;
exports.useTabItemTap = useTabItemTap;
exports.useTitleClick = useTitleClick;
exports.window = window$1;
//# sourceMappingURL=index.js.map
