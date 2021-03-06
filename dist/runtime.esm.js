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
const isArray = Array.isArray;
const touchEvents = {
    bindTouchStart: '',
    bindTouchMove: '',
    bindTouchEnd: '',
    bindTouchCancel: '',
    bindLongTap: ''
};
function singleQuote(s) {
    return `'${s}'`;
}
const View = Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': 'false', 'hover-start-time': '50', 'hover-stay-time': '400', animation: '', bindAnimationStart: '', bindAnimationIteration: '', bindAnimationEnd: '', bindTransitionEnd: '' }, touchEvents);
const Icon = {
    type: '',
    size: '23',
    color: ''
};
const Map$1 = Object.assign({ longitude: '', latitude: '', scale: '16', markers: '[]', covers: '', polyline: '[]', circles: '[]', controls: '', 'include-points': '[]', 'show-location': '', polygons: '', subkey: '', 'layer-style': '1', rotate: '0', skew: 'skew', 'enable-3D': 'false', 'show-compass': 'false', 'show-scale': 'false', 'enable-overlooking': 'false', 'enable-zoom': 'true', 'enable-scroll': 'true', 'enable-rotate': 'false', 'enable-satellite': 'false', 'enable-traffic': 'false', setting: '[]', bindMarkerTap: '', bindLabelTap: '', bindControlTap: '', bindCalloutTap: '', bindUpdated: '', bindRegionChange: '', bindPoiTap: '' }, touchEvents);
const Progress = {
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
const RichText = {
    nodes: '[]',
    space: ''
};
const Text = {
    selectable: 'false',
    space: '',
    decode: 'false'
};
const Button = {
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
const Checkbox = {
    value: '',
    disabled: '',
    checked: 'false',
    color: singleQuote('#09BB07'),
    name: ''
};
const CheckboxGroup = {
    bindChange: '',
    name: ''
};
const Editor = {
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
const Form = {
    'report-submit': 'false',
    'report-submit-timeout': '0',
    bindSubmit: '',
    bindReset: '',
    name: ''
};
const Input = {
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
const Label = {
    for: '',
    name: ''
};
const Picker = {
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
const PickerView = {
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
const PickerViewColumn = {
    name: ''
};
const Radio = {
    value: '',
    checked: 'false',
    disabled: '',
    color: singleQuote('#09BB07'),
    name: ''
};
const RadioGroup = {
    bindChange: '',
    name: ''
};
const Slider = {
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
const Switch = {
    checked: 'false',
    disabled: '',
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: '',
    name: ''
};
const CoverImage = {
    src: '',
    bindLoad: 'eh',
    bindError: 'eh'
};
const Textarea = {
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
const CoverView = Object.assign({ 'scroll-top': 'false' }, touchEvents);
const MovableArea = {
    'scale-area': 'false'
};
const MovableView = Object.assign({ direction: 'none', inertia: 'false', 'out-of-bounds': 'false', x: '', y: '', damping: '20', friction: '2', disabled: '', scale: 'false', 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', animation: 'true', bindAnimationEnd: '', bindChange: '', bindScale: '', htouchmove: '', vtouchmove: '', width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents);
const ScrollView = Object.assign({ 'scroll-x': 'false', 'scroll-y': 'false', 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': '', 'scroll-left': '', 'scroll-into-view': '', 'scroll-with-animation': 'false', 'enable-back-to-top': 'false', 'enable-flex': 'false', 'scroll-anchoring': 'false', 'refresher-enabled': 'false', 'refresher-threshold': '45', 'refresher-default-style': singleQuote('black'), 'refresher-background': singleQuote('#FFF'), 'refresher-triggered': 'false', bindRefresherPulling: '', bindRefresherRefresh: '', bindRefresherRestore: '', bindRefresherAbort: '', bindScrollToUpper: '', bindScrollToLower: '', bindScroll: '', animation: '', bindTransitionEnd: '', bindAnimationStart: '', bindAnimationIteration: '', bindAnimationEnd: '' }, touchEvents);
const Swiper = Object.assign({ 'indicator-dots': 'false', 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: 'false', current: '0', interval: '5000', duration: '500', circular: 'false', vertical: 'false', 'previous-margin': '\'0px\'', 'next-margin': '\'0px\'', 'display-multiple-items': '1', 'skip-hidden-item-layout': 'false', 'easing-function': singleQuote('default'), bindChange: '', bindTransition: '', bindAnimationFinish: '' }, touchEvents);
const SwiperItem = {
    'item-id': ''
};
const FunctionalPageNavigator = {
    version: singleQuote('release'),
    name: '',
    args: '',
    bindSuccess: '',
    bindFail: '',
    bindCancel: ''
};
const Navigator = {
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
const Audio = {
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
const Camera = {
    mode: singleQuote('normal'),
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    'frame-size': singleQuote('medium'),
    bindStop: '',
    bindError: '',
    bindInitDone: '',
    bindScanCode: ''
};
const Image = {
    src: '',
    mode: singleQuote('scaleToFill'),
    webp: 'false',
    'lazy-load': 'false',
    'show-menu-by-longpress': 'false',
    bindError: '',
    bindLoad: ''
};
const LivePlayer = {
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
const LivePusher = {
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
const Video = {
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
const Canvas = {
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
const Ad = {
    'unit-id': '',
    'ad-intervals': '',
    'ad-type': singleQuote('banner'),
    'ad-theme': singleQuote('white'),
    bindLoad: '',
    bindError: '',
    bindClose: ''
};
const OfficialAccount = {
    bindLoad: '',
    bindError: ''
};
const OpenData = {
    type: '',
    'open-gid': '',
    lang: singleQuote('en'),
    'default-text': '',
    'default-avatar': '',
    bindError: ''
};
const WebView = {
    src: '',
    bindMessage: '',
    bindLoad: ''
};
const NavigationBar = {
    title: '',
    loading: 'false',
    'front-color': '',
    'background-color': '',
    'color-animation-duration': '0',
    'color-animation-timing-func': singleQuote('linear')
};
const PageMeta = {
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
const Block = {};
// For Vue，因为 slot 标签被 vue 占用了
const SlotView = {
    name: ''
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
const Slot = {
    name: ''
};
const internalComponents = {
    View,
    Icon,
    Progress,
    RichText,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Editor,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    FunctionalPageNavigator,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    LivePusher,
    Video,
    Canvas,
    Ad,
    OfficialAccount,
    OpenData,
    WebView,
    NavigationBar,
    PageMeta,
    Block,
    Map: Map$1,
    Slot,
    SlotView
};
const controlledComponent = new Set([
    'input',
    'checkbox',
    'picker',
    'picker-view',
    'radio',
    'slider',
    'switch',
    'textarea'
]);

const EMPTY_OBJ = {};
const noop = (..._) => { };
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
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
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
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

const incrementId = () => {
    let id = 0;
    return () => (id++).toString();
};
function isElement(node) {
    return node.nodeType === 1 /* ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* TEXT_NODE */;
}

class TaroEventTarget {
    constructor() {
        this.__handlers = {};
    }
    addEventListener(type, handler, options) {
        warn(type === 'regionchange', 'map 组件的 regionchange 事件非常特殊，请使用 begin/end 事件替代。详情：https://github.com/NervJS/taro/issues/5766');
        type = type.toLowerCase();
        const handlers = this.__handlers[type];
        let isCapture = Boolean(options);
        let isOnce = false;
        if (isObject(options)) {
            isCapture = Boolean(options.capture);
            isOnce = Boolean(options.once);
        }
        if (isOnce) {
            const wrapper = function () {
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
    }
    removeEventListener(type, handler) {
        type = type.toLowerCase();
        if (handler == null) {
            return;
        }
        const handlers = this.__handlers[type];
        if (!isArray(handlers)) {
            return;
        }
        const index = handlers.indexOf(handler);
        warn(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
        handlers.splice(index, 1);
    }
}

const eventSource = new Map();
class TaroEvent {
    constructor(type, opts, event) {
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
    }
    stopPropagation() {
        this._stop = true;
    }
    stopImmediatePropagation() {
        this._end = this._stop = true;
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    get target() {
        var _a, _b, _c;
        const element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
        return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element !== null ? element.dataset : EMPTY_OBJ });
    }
    get currentTarget() {
        var _a, _b, _c;
        const element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);
        if (element === null) {
            return this.target;
        }
        return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element.dataset });
    }
}
function createEvent(event, _) {
    if (typeof event === 'string') {
        return new TaroEvent(event, { bubbles: true, cancelable: true });
    }
    const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
    for (const key in event) {
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
    const node = document$1.getElementById(event.currentTarget.id);
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
    if (isText(node)) {
        return {
            ["v" /* Text */]: node.nodeValue,
            ["nn" /* NodeName */]: node.nodeName
        };
    }
    const data = {
        ["nn" /* NodeName */]: node.nodeName,
        uid: node.uid
    };
    const { props, childNodes } = node;
    for (const prop in props) {
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

const CurrentReconciler = {
    getLifecyle(instance, lifecyle) {
        return instance[lifecyle];
    }
};

const options = {
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
    reconciler(reconciler) {
        Object.assign(CurrentReconciler, reconciler);
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
    const start = position.index;
    const end = position.index = start + len;
    for (let i = start; i < end; i++) {
        const char = str.charAt(i);
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
    const len = end - position.index;
    return feedPosition(position, str, len);
}
function copyPosition(position) {
    return {
        index: position.index,
        line: position.line,
        column: position.column
    };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
    return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
    return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
    const name = tagName.toLowerCase();
    if (options.html.skipElements.has(name)) {
        return true;
    }
    return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
    while (true) {
        const textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        const char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || alphanumeric.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
}
function isWordEnd(cursor, wordBegin, html) {
    if (!isWhitespaceChar(html.charAt(cursor)))
        return false;
    const len = html.length;
    // backwrad
    for (let i = cursor - 1; i > wordBegin; i--) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            break;
        }
    }
    // forward
    for (let i = cursor + 1; i < len; i++) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            return true;
        }
    }
}
class Scaner {
    constructor(html) {
        this.tokens = [];
        this.position = initPosition();
        this.html = html;
    }
    scan() {
        const { html, position } = this;
        const len = html.length;
        while (position.index < len) {
            const start = position.index;
            this.scanText();
            if (position.index === start) {
                const isComment = html.startsWith('!--', start + 1);
                if (isComment) {
                    this.scanComment();
                }
                else {
                    const tagName = this.scanTag();
                    if (shouldBeIgnore(tagName)) {
                        this.scanSkipTag(tagName);
                    }
                }
            }
        }
        return this.tokens;
    }
    scanText() {
        const type = 'text';
        const { html, position } = this;
        let textEnd = findTextEnd(html, position.index);
        if (textEnd === position.index) {
            return;
        }
        if (textEnd === -1) {
            textEnd = html.length;
        }
        const start = copyPosition(position);
        const content = html.slice(position.index, textEnd);
        jumpPosition(position, html, textEnd);
        const end = copyPosition(position);
        this.tokens.push({ type, content, position: { start, end } });
    }
    scanComment() {
        const type = 'comment';
        const { html, position } = this;
        const start = copyPosition(position);
        feedPosition(position, html, 4); // "<!--".length
        let contentEnd = html.indexOf('-->', position.index);
        let commentEnd = contentEnd + 3; // "-->".length
        if (contentEnd === -1) {
            contentEnd = commentEnd = html.length;
        }
        const content = html.slice(position.index, contentEnd);
        jumpPosition(position, html, commentEnd);
        this.tokens.push({
            type,
            content,
            position: {
                start,
                end: copyPosition(position)
            }
        });
    }
    scanTag() {
        this.scanTagStart();
        const tagName = this.scanTagName();
        this.scanAttrs();
        this.scanTagEnd();
        return tagName;
    }
    scanTagStart() {
        const type = 'tag-start';
        const { html, position } = this;
        const secondChar = html.charAt(position.index + 1);
        const close = secondChar === '/';
        const start = copyPosition(position);
        feedPosition(position, html, close ? 2 : 1);
        this.tokens.push({ type, close, position: { start } });
    }
    scanTagEnd() {
        const type = 'tag-end';
        const { html, position } = this;
        const firstChar = html.charAt(position.index);
        const close = firstChar === '/';
        feedPosition(position, html, close ? 2 : 1);
        const end = copyPosition(position);
        this.tokens.push({ type, close, position: { end } });
    }
    scanTagName() {
        const type = 'tag';
        const { html, position } = this;
        const len = html.length;
        let start = position.index;
        while (start < len) {
            const char = html.charAt(start);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (isTagChar)
                break;
            start++;
        }
        let end = start + 1;
        while (end < len) {
            const char = html.charAt(end);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (!isTagChar)
                break;
            end++;
        }
        jumpPosition(position, html, end);
        const tagName = html.slice(start, end);
        this.tokens.push({
            type,
            content: tagName
        });
        return tagName;
    }
    scanAttrs() {
        const { html, position, tokens } = this;
        let cursor = position.index;
        let quote = null; // null, single-, or double-quote
        let wordBegin = cursor; // index of word start
        const words = []; // "key", "key=value", "key='value'", etc
        const len = html.length;
        while (cursor < len) {
            const char = html.charAt(cursor);
            if (quote) {
                const isQuoteEnd = char === quote;
                if (isQuoteEnd) {
                    quote = null;
                }
                cursor++;
                continue;
            }
            const isTagEnd = char === '/' || char === '>';
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
            const isQuoteStart = char === '\'' || char === '"';
            if (isQuoteStart) {
                quote = char;
                cursor++;
                continue;
            }
            cursor++;
        }
        jumpPosition(position, html, cursor);
        const wLen = words.length;
        const type = 'attribute';
        for (let i = 0; i < wLen; i++) {
            const word = words[i];
            const isNotPair = word.includes('=');
            if (isNotPair) {
                const secondWord = words[i + 1];
                if (secondWord && secondWord.startsWith('=')) {
                    if (secondWord.length > 1) {
                        const newWord = word + secondWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                    const thirdWord = words[i + 2];
                    i += 1;
                    if (thirdWord) {
                        const newWord = word + '=' + thirdWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                }
            }
            if (word.endsWith('=')) {
                const secondWord = words[i + 1];
                if (secondWord && !secondWord.includes('=')) {
                    const newWord = word + secondWord;
                    tokens.push({ type, content: newWord });
                    i += 1;
                    continue;
                }
                const newWord = word.slice(0, -1);
                tokens.push({ type, content: newWord });
                continue;
            }
            tokens.push({ type, content: word });
        }
    }
    scanSkipTag(tagName) {
        const { html, position, tokens } = this;
        const safeTagName = tagName.toLowerCase();
        const len = html.length;
        let index = position.index;
        while (index < len) {
            const nextTag = html.indexOf('</', index);
            if (nextTag === -1) {
                this.scanText();
                break;
            }
            const tagStartPosition = copyPosition(position);
            jumpPosition(tagStartPosition, html, nextTag);
            const tagState = { html, position: tagStartPosition, tokens: [] };
            const name = this.scanTag();
            if (safeTagName !== name.toLowerCase()) {
                index = tagState.position.index;
                continue;
            }
            if (nextTag !== position.index) {
                const textStart = copyPosition(position);
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
    }
}

function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}
const specialMiniElements = {
    img: 'image',
    iframe: 'web-view'
};
const internalCompsList = Object.keys(internalComponents)
    .map(i => i.toLowerCase())
    .join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
const isMiniElements = makeMap(internalCompsList, true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

const closingTagAncestorBreakers = {
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
    const tagParents = closingTagAncestorBreakers[tagName];
    if (tagParents) {
        let currentIndex = stack.length - 1;
        while (currentIndex >= 0) {
            const parentTagName = stack[currentIndex].tagName;
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
    const car = str.charAt(0);
    const end = str.length - 1;
    const isQuoteStart = car === '"' || car === "'";
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
    const sep = '=';
    const idx = str.indexOf(sep);
    if (idx === -1)
        return [str];
    const key = str.slice(0, idx).trim();
    const value = str.slice(idx + sep.length).trim();
    return [key, value];
}
function format(children) {
    return children.filter(child => {
        if (child.type === 'comment') {
            return false;
        }
        else if (child.type === 'text') {
            return child.content !== '';
        }
        return true;
    }).map((child) => {
        if (child.type === 'text') {
            const text = document$1.createTextNode(child.content);
            if (isFunction(options.html.transformText)) {
                return options.html.transformText(text, child);
            }
            return text;
        }
        const el = document$1.createElement(getTagName(child.tagName));
        if (!options.html.renderHTMLTag) {
            el.className = child.tagName;
        }
        for (let i = 0; i < child.attributes.length; i++) {
            const attr = child.attributes[i];
            const [key, value] = splitEqual(attr);
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
        const ch = format(child.children);
        for (let i = 0; i < ch.length; i++) {
            el.appendChild(ch[i]);
        }
        if (isFunction(options.html.transformElement)) {
            return options.html.transformElement(el, child);
        }
        return el;
    });
}
function parser(html) {
    const tokens = new Scaner(html).scan();
    const root = { tagName: '', children: [], type: 'element', attributes: [] };
    const state = { tokens, options, cursor: 0, stack: [root] };
    parse(state);
    return format(root.children);
}
function parse(state) {
    const { tokens, stack } = state;
    let { cursor } = state;
    const len = tokens.length;
    let nodes = stack[stack.length - 1].children;
    while (cursor < len) {
        const token = tokens[cursor];
        if (token.type !== 'tag-start') {
            // comment or text
            nodes.push(token);
            cursor++;
            continue;
        }
        const tagToken = tokens[++cursor];
        cursor++;
        const tagName = tagToken.content.toLowerCase();
        if (token.close) {
            let index = stack.length;
            let shouldRewind = false;
            while (--index > -1) {
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while (cursor < len) {
                const endToken = tokens[cursor];
                if (endToken.type !== 'tag-end')
                    break;
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
        const isClosingTag = options.html.closingElements.has(tagName);
        let shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            let currentIndex = stack.length - 1;
            while (currentIndex > 0) {
                if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    const previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        const attributes = [];
        let attrToken;
        while (cursor < len) {
            attrToken = tokens[cursor];
            if (attrToken.type === 'tag-end')
                break;
            attributes.push(attrToken.content);
            cursor++;
        }
        cursor++;
        const children = [];
        const element = {
            type: 'element',
            tagName: tagToken.content,
            attributes,
            children
        };
        nodes.push(element);
        const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
        if (hasChildren) {
            stack.push({ tagName, children });
            const innerState = { tokens, cursor, stack };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
}

function setInnerHTML(element, html) {
    element.textContent = '';
    const children = parser(html);
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
}

const nodeId = incrementId();
class TaroNode extends TaroEventTarget {
    constructor(nodeType, nodeName) {
        super();
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = (node) => () => hydrate(node);
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.uid = `_n_${nodeId()}`;
        eventSource.set(this.uid, this);
    }
    get _path() {
        if (this.parentNode !== null) {
            const index = process.env.TARO_ENV === 'swan'
                ? this.parentNode.childNodes.indexOf(this)
                : '[' + this.parentNode.childNodes.indexOf(this) + ']';
            return `${this.parentNode._path}.${"cn" /* Childnodes */}.${index}`;
        }
        return '';
    }
    get _root() {
        if (this.parentNode !== null) {
            return this.parentNode._root;
        }
        return null;
    }
    get parentElement() {
        const parentNode = this.parentNode;
        if (parentNode != null && parentNode.nodeType === 1 /* ELEMENT_NODE */) {
            return parentNode;
        }
        return null;
    }
    get nextSibling() {
        const parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
        }
        return null;
    }
    get previousSibling() {
        const parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
        }
        return null;
    }
    insertBefore(newChild, refChild, isReplace) {
        var _a;
        newChild.remove();
        newChild.parentNode = this;
        let payload;
        if (refChild) {
            const index = this.findIndex(this.childNodes, refChild);
            this.childNodes.splice(index, 0, newChild);
            if (isReplace === true) {
                payload = {
                    path: newChild._path,
                    value: this.hydrate(newChild)
                };
            }
            else {
                payload = {
                    path: `${this._path}.${"cn" /* Childnodes */}`,
                    value: () => this.childNodes.map(hydrate)
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
    }
    appendChild(child) {
        var _a;
        this.insertBefore(child);
        (_a = CurrentReconciler.appendChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, child);
    }
    replaceChild(newChild, oldChild) {
        var _a;
        if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild, true);
            oldChild.remove(true);
            return oldChild;
        }
        (_a = CurrentReconciler.removeChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, oldChild);
    }
    removeChild(child, isReplace) {
        const index = this.findIndex(this.childNodes, child);
        this.childNodes.splice(index, 1);
        if (isReplace !== true) {
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => this.childNodes.map(hydrate)
            });
        }
        child.parentNode = null;
        eventSource.delete(child.uid);
        // @TODO: eventSource memory overflow
        // child._empty()
        return child;
    }
    remove(isReplace) {
        if (this.parentNode) {
            this.parentNode.removeChild(this, isReplace);
        }
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        const c = this.childNodes;
        return c[c.length - 1] || null;
    }
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    enqueueUpdate(payload) {
        if (this._root === null) {
            return;
        }
        this._root.enqueueUpdate(payload);
    }
    /**
     * like jQuery's $.empty()
     */
    _empty() {
        while (this.childNodes.length > 0) {
            const child = this.childNodes[0];
            child.parentNode = null;
            eventSource.delete(child.uid);
            this.childNodes.shift();
        }
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    set textContent(text) {
        this._empty();
        if (text === '') {
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => []
            });
        }
        else {
            this.appendChild(document$1.createTextNode(text));
        }
    }
    set innerHTML(html) {
        setInnerHTML(this, html);
    }
    get innerHTML() {
        return '';
    }
    findIndex(childeNodes, refChild) {
        const index = childeNodes.indexOf(refChild);
        ensure(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    }
    cloneNode(isDeep = false) {
        const constructor = this.constructor;
        let newNode;
        if (this.nodeType === 1 /* ELEMENT_NODE */) {
            newNode = new constructor(this.nodeType, this.nodeName);
        }
        else if (this.nodeType === 3 /* TEXT_NODE */) {
            newNode = new constructor('');
        }
        for (const key in this) {
            const value = this[key];
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
            newNode.childNodes = this.childNodes.map(node => node.cloneNode(true));
        }
        return newNode;
    }
}

class TaroText extends TaroNode {
    constructor(text) {
        super(3 /* TEXT_NODE */, '#text');
        this._value = text;
    }
    set textContent(text) {
        this._value = text;
        this.enqueueUpdate({
            path: `${this._path}.${"v" /* Text */}`,
            value: text
        });
    }
    get textContent() {
        return this._value;
    }
    set nodeValue(text) {
        this.textContent = text;
    }
    get nodeValue() {
        return this._value;
    }
}

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const styleProperties = [
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

const PROPERTY_THRESHOLD = 2046;
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';

function setStyle(newVal, styleKey) {
    const old = this[styleKey];
    if (newVal) {
        this._usedStyleProp.add(styleKey);
    }
    warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
    if (old !== newVal) {
        this._value[styleKey] = newVal;
        this._element.enqueueUpdate({
            path: `${this._element._path}.${"st" /* Style */}`,
            value: this.cssText
        });
    }
}
function initStyle(ctor) {
    const properties = {};
    for (let i = 0; i < styleProperties.length; i++) {
        const styleKey = styleProperties[i];
        properties[styleKey] = {
            get() {
                return this._value[styleKey] || '';
            },
            set(newVal) {
                setStyle.call(this, newVal, styleKey);
            }
        };
    }
    Object.defineProperties(ctor.prototype, properties);
}
class Style {
    constructor(element) {
        this._element = element;
        this._usedStyleProp = new Set();
        this._value = {};
    }
    setCssVariables(styleKey) {
        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._value[styleKey] || '';
            },
            set: (newVal) => {
                setStyle.call(this, newVal, styleKey);
            }
        });
    }
    get cssText() {
        let text = '';
        this._usedStyleProp.forEach(key => {
            const val = this[key];
            if (!val)
                return;
            text += `${toDashed(key)}: ${val};`;
        });
        return text;
    }
    set cssText(str) {
        if (str == null) {
            str = '';
        }
        this._usedStyleProp.forEach(prop => {
            this.removeProperty(prop);
        });
        if (str === '') {
            return;
        }
        const rules = str.split(';');
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i].trim();
            if (rule === '') {
                continue;
            }
            const [propName, val] = rule.split(':');
            if (isUndefined(val)) {
                continue;
            }
            this.setProperty(propName.trim(), val.trim());
        }
    }
    setProperty(propertyName, value) {
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
    }
    removeProperty(propertyName) {
        propertyName = toCamelCase(propertyName);
        if (!this._usedStyleProp.has(propertyName)) {
            return '';
        }
        const value = this[propertyName];
        this[propertyName] = '';
        this._usedStyleProp.delete(propertyName);
        return value;
    }
    getPropertyValue(propertyName) {
        propertyName = toCamelCase(propertyName);
        const value = this[propertyName];
        if (!value) {
            return '';
        }
        return value;
    }
}
initStyle(Style);

function returnTrue() {
    return true;
}
function treeToArray(root, predict) {
    const array = [];
    const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
    let object = root;
    while (object) {
        if (object.nodeType === 1 /* ELEMENT_NODE */ && filter(object)) {
            array.push(object);
        }
        object = following(object, root);
    }
    return array;
}
function following(el, root) {
    const firstChild = el.firstChild;
    if (firstChild) {
        return firstChild;
    }
    let current = el;
    do {
        if (current === root) {
            return null;
        }
        const nextSibling = current.nextSibling;
        if (nextSibling) {
            return nextSibling;
        }
        current = current.parentElement;
    } while (current);
    return null;
}

class ClassList extends Set {
    constructor(className, el) {
        super();
        className.trim().split(/\s+/).forEach(super.add.bind(this));
        this.el = el;
    }
    get value() {
        return [...this].join(' ');
    }
    add(s) {
        super.add(s);
        this._update();
        return this;
    }
    remove(s) {
        super.delete(s);
        this._update();
    }
    toggle(s) {
        if (super.has(s)) {
            super.delete(s);
        }
        else {
            super.add(s);
        }
        this._update();
    }
    replace(s1, s2) {
        super.delete(s1);
        super.add(s2);
        this._update();
    }
    contains(s) {
        return super.has(s);
    }
    toString() {
        return this.value;
    }
    _update() {
        this.el.className = this.value;
    }
}

/* eslint-disable no-dupe-class-members */
class TaroElement extends TaroNode {
    constructor(nodeType, nodeName) {
        super(nodeType || 1 /* ELEMENT_NODE */, nodeName);
        this.props = {};
        this.dataset = EMPTY_OBJ;
        this.tagName = nodeName.toUpperCase();
        this.style = new Style(this);
        warn(this.tagName === 'MAP' && process.env.TARO_ENV === 'weapp', '微信小程序 map 组件的 `setting` 属性需要传递一个默认值。详情：\n https://developers.weixin.qq.com/miniprogram/dev/component/map.html');
    }
    get id() {
        return this.getAttribute('id');
    }
    set id(val) {
        this.setAttribute('id', val);
    }
    get classList() {
        return new ClassList(this.className, this);
    }
    get className() {
        return this.getAttribute('class') || '';
    }
    set className(val) {
        this.setAttribute('class', val);
    }
    get cssText() {
        return this.getAttribute('style') || '';
    }
    get children() {
        return this.childNodes.filter(isElement);
    }
    hasAttribute(qualifiedName) {
        return !isUndefined(this.props[qualifiedName]);
    }
    hasAttributes() {
        return this.attributes.length > 0;
    }
    focus() {
        this.setAttribute('focus', true);
    }
    blur() {
        this.setAttribute('focus', false);
    }
    setAttribute(qualifiedName, value) {
        var _a;
        warn(isString(value) && value.length > PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 属性 ${qualifiedName} 的值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
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
            path: `${this._path}.${toCamelCase(qualifiedName)}`,
            value
        });
    }
    removeAttribute(qualifiedName) {
        var _a;
        if (qualifiedName === 'style') {
            this.style.cssText = '';
        }
        else {
            delete this.props[qualifiedName];
        }
        (_a = CurrentReconciler.removeAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName);
        this.enqueueUpdate({
            path: `${this._path}.${toCamelCase(qualifiedName)}`,
            value: ''
        });
    }
    getAttribute(qualifiedName) {
        const attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    }
    get attributes() {
        const propKeys = Object.keys(this.props);
        const style = this.style.cssText;
        const attrs = propKeys.map(p => ({ name: p, value: this.props[p] }));
        return attrs.concat(style ? { name: 'style', value: style } : []);
    }
    getElementsByTagName(tagName) {
        return treeToArray(this, (el) => {
            return el.nodeName === tagName || (tagName === '*' && this !== el);
        });
    }
    getElementsByClassName(className) {
        return treeToArray(this, (el) => {
            const classList = el.classList;
            const classNames = className.trim().split(/\s+/);
            return classNames.every(c => classList.has(c));
        });
    }
    dispatchEvent(event) {
        const cancelable = event.cancelable;
        const listeners = this.__handlers[event.type];
        if (!isArray(listeners)) {
            return;
        }
        for (let i = listeners.length; i--;) {
            const listener = listeners[i];
            let result;
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
    }
    get textContent() {
        let text = '';
        for (let i = 0; i < this.childNodes.length; i++) {
            const element = this.childNodes[i];
            text += element.textContent;
        }
        return text;
    }
    set textContent(text) {
        super.textContent = text;
    }
    _stopPropagation(event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            const listeners = target.__handlers[event.type];
            if (!isArray(listeners)) {
                continue;
            }
            for (let i = listeners.length; i--;) {
                const l = listeners[i];
                l._stop = true;
            }
        }
    }
}

class FormElement extends TaroElement {
    get value() {
        // eslint-disable-next-line dot-notation
        const val = this.props['value'];
        return val == null ? '' : val;
    }
    set value(val) {
        if (isNumber(val) || isArray(val)) {
            val = JSON.stringify(val);
        }
        this.setAttribute('value', val);
    }
    dispatchEvent(event) {
        if ((event.type === 'input' || event.type === 'change') && event.mpEvent) {
            let val = event.mpEvent.detail.value;
            if (isNumber(val) || isArray(val)) {
                val = JSON.stringify(val);
            }
            if (isString(val) || isBoolean(val)) {
                this.props.value = val;
            }
        }
        return super.dispatchEvent(event);
    }
}

class Performance {
    constructor() {
        this.recorder = new Map();
    }
    start(id) {
        if (!options.debug) {
            return;
        }
        this.recorder.set(id, Date.now());
    }
    stop(id) {
        if (!options.debug) {
            return;
        }
        const now = Date.now();
        const prev = this.recorder.get(id);
        const time = now - prev;
        // eslint-disable-next-line no-console
        console.log(`${id} 时长： ${time}ms`);
    }
}
const perf = new Performance();

class TaroRootElement extends TaroElement {
    constructor() {
        super(1 /* ELEMENT_NODE */, 'root');
        this.pendingUpdate = false;
        this.updatePayloads = [];
        this.pendingFlush = false;
        this.updateCallbacks = [];
        this.ctx = null;
    }
    get _path() {
        return 'root';
    }
    get _root() {
        return this;
    }
    enqueueUpdate(payload) {
        this.updatePayloads.push(payload);
        if (this.pendingUpdate || this.ctx === null) {
            return;
        }
        this.performUpdate();
    }
    performUpdate(initRender = false, prerender) {
        this.pendingUpdate = true;
        const ctx = this.ctx;
        setTimeout(() => {
            var _a, _b;
            perf.start(SET_DATA);
            const data = Object.create(null);
            const resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this.updatePayloads.length > 0) {
                const { path, value } = this.updatePayloads.shift();
                if (path.endsWith("cn" /* Childnodes */)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            for (const path in data) {
                resetPaths.forEach(p => {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path.includes(p) && path !== p) {
                        delete data[path];
                    }
                });
                const value = data[path];
                if (isFunction(value)) {
                    data[path] = value();
                }
            }
            (_a = CurrentReconciler.prepareUpdateData) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, data, this);
            if (initRender) {
                (_b = CurrentReconciler.appendInitialPage) === null || _b === void 0 ? void 0 : _b.call(CurrentReconciler, data, this);
            }
            if (isFunction(prerender)) {
                prerender(data);
            }
            else {
                this.pendingUpdate = false;
                ctx.setData(data, () => {
                    perf.stop(SET_DATA);
                    if (!this.pendingFlush) {
                        this.flushUpdateCallback();
                    }
                    if (initRender) {
                        perf.stop(PAGE_INIT);
                    }
                });
            }
        }, 0);
    }
    enqueueUpdateCallbak(cb, ctx) {
        this.updateCallbacks.push(() => {
            ctx ? cb.call(ctx) : cb();
        });
    }
    flushUpdateCallback() {
        this.pendingFlush = false;
        const copies = this.updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

const isBrowser = typeof document !== 'undefined' && !!document.scripts;
const doc = isBrowser ? document : EMPTY_OBJ;
const win = isBrowser ? window : EMPTY_OBJ;

class TaroDocument extends TaroElement {
    constructor() {
        super(9 /* DOCUMENT_NODE */, '#document');
    }
    createElement(type) {
        if (type === 'root') {
            return new TaroRootElement();
        }
        if (controlledComponent.has(type)) {
            return new FormElement(1 /* ELEMENT_NODE */, type);
        }
        return new TaroElement(1 /* ELEMENT_NODE */, type);
    }
    createTextNode(text) {
        return new TaroText(text);
    }
    getElementById(id) {
        const el = eventSource.get(id);
        return isUndefined(el) ? null : el;
    }
    getElementsByTagName(tagName) {
        const elements = [];
        eventSource.forEach((node) => {
            if (node.nodeType !== 1 /* ELEMENT_NODE */) {
                return;
            }
            if (node.nodeName === tagName || (tagName === '*' && node !== this)) {
                elements.push(node);
            }
        });
        return elements;
    }
    querySelector(query) {
        // 为了 Vue3 的乞丐版实现
        if (/^#/.test(query)) {
            return this.getElementById(query.slice(1));
        }
        return null;
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment() {
        return new TaroText('');
    }
}
function createDocument() {
    const doc = new TaroDocument();
    doc.appendChild((doc.documentElement = doc.createElement('html')));
    doc.documentElement.appendChild((doc.head = doc.createElement('head')));
    const body = doc.createElement('body');
    doc.documentElement.appendChild(body);
    doc.body = body;
    const app = doc.createElement('app');
    app.id = 'app';
    const container = doc.createElement('container'); // 多包一层主要为了兼容 vue
    container.appendChild(app);
    doc.documentElement.lastChild.appendChild(container);
    doc.createEvent = createEvent;
    return doc;
}
const document$1 = (isBrowser ? doc : createDocument());

const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const navigator = isBrowser ? win.navigator : {
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
let now;
(function () {
    let loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        now = function () {
            return performance.now();
        };
    }
    else if (Date.now) {
        now = function () {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    }
    else {
        now = function () {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
const raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
    const _now = now();
    const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
};
const caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;

function getComputedStyle(element) {
    return new Style(element);
}

const window$1 = isBrowser ? win : {
    navigator,
    document: document$1
};
if (process.env.TARO_ENV !== 'h5') {
    window$1.requestAnimationFrame = raf;
    window$1.cancelAnimationFrame = caf;
    window$1.Date = Date;
    window$1.setTimeout = setTimeout;
    window$1.getComputedStyle = getComputedStyle;
}

const Current = {
    app: null,
    router: null,
    page: null
};
const getCurrentInstance = () => Current;

class Events {
    constructor(opts) {
        if (typeof opts !== 'undefined' && opts.callbacks) {
            this.callbacks = opts.callbacks;
        }
        else {
            this.callbacks = {};
        }
    }
    on(eventName, callback, context) {
        let event, node, tail, list;
        if (!callback) {
            return this;
        }
        eventName = eventName.split(Events.eventSplitter);
        const calls = this.callbacks;
        while ((event = eventName.shift())) {
            list = calls[event];
            node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, node, tail, cb, ctx;
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
    }
    trigger(events) {
        let event, node, calls, tail;
        if (!(calls = this.callbacks)) {
            return this;
        }
        events = events.split(Events.eventSplitter);
        const rest = [].slice.call(arguments, 1);
        while ((event = events.shift())) {
            if ((node = calls[event])) {
                tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, rest);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = /\s+/;
let eventCenter;
if (process.env.TARO_ENV === 'alipay') {
    if (!my.taroEventCenter) {
        my.taroEventCenter = new Events();
    }
    eventCenter = my.taroEventCenter;
}
else {
    eventCenter = new Events();
}

/* eslint-disable dot-notation */
const instances = new Map();
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
const pageId = incrementId();
function safeExecute(path, lifecycle, ...args) {
    const instance = instances.get(path);
    if (instance == null) {
        return;
    }
    const func = CurrentReconciler.getLifecyle(instance, lifecycle);
    if (isArray(func)) {
        const res = func.map(fn => fn.apply(instance, args));
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
    const path = Object.keys(obj).map((key) => {
        return key + '=' + obj[key];
    }).join('&');
    return path === '' ? path : '?' + path;
}
function getPath(id, options) {
    let path = id;
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
    const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
    let pageElement = null;
    const config = {
        onLoad(options, cb) {
            perf.start(PAGE_INIT);
            Current.page = this;
            this.config = pageConfig || {};
            if (this.options == null) {
                this.options = options;
            }
            const path = getPath(id, options);
            Current.router = {
                params: options,
                path: addLeadingSlash(this.route || this.__route__),
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
            };
            Current.app.mount(component, path, () => {
                pageElement = document$1.getElementById(path);
                ensure(pageElement !== null, '没有找到页面实例。');
                safeExecute(path, 'onLoad', options);
                if (!isBrowser) {
                    pageElement.ctx = this;
                    pageElement.performUpdate(true, cb);
                }
            });
        },
        onReady() {
            const path = getPath(id, this.options);
            raf(() => {
                eventCenter.trigger(getOnReadyEventKey(id));
            });
            safeExecute(path, 'onReady');
        },
        onUnload() {
            const path = getPath(id, this.options);
            Current.app.unmount(path, () => {
                instances.delete(path);
                if (pageElement) {
                    pageElement.ctx = null;
                }
            });
        },
        onShow() {
            Current.page = this;
            this.config = pageConfig || {};
            const path = getPath(id, this.options);
            Current.router = {
                params: this.options,
                path: addLeadingSlash(this.route || this.__route__),
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
            };
            raf(() => {
                eventCenter.trigger(getOnShowEventKey(id));
            });
            safeExecute(path, 'onShow');
        },
        onHide() {
            Current.page = null;
            Current.router = null;
            const path = getPath(id, this.options);
            raf(() => {
                eventCenter.trigger(getOnHideEventKey(id));
            });
            safeExecute(path, 'onHide');
        },
        onPullDownRefresh() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPullDownRefresh');
        },
        onReachBottom() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onReachBottom');
        },
        onPageScroll(options) {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPageScroll', options);
        },
        onResize(options) {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onResize', options);
        },
        onTabItemTap(options) {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onTabItemTap', options);
        },
        onTitleClick() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onTitleClick');
        },
        onOptionMenuClick() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onOptionMenuClick');
        },
        onPopMenuClick() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPopMenuClick');
        },
        onPullIntercept() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onPullIntercept');
        },
        onAddToFavorites() {
            const path = getPath(id, this.options);
            return safeExecute(path, 'onAddToFavorites');
        }
    };
    // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
    if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) ||
        component.enableShareAppMessage) {
        config.onShareAppMessage = function (options) {
            const target = options.target;
            if (target != null) {
                const id = target.id;
                const element = document$1.getElementById(id);
                if (element != null) {
                    options.target.dataset = element.dataset;
                }
            }
            const path = getPath(id, this.options);
            return safeExecute(path, 'onShareAppMessage', options);
        };
    }
    if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) ||
        component.enableShareTimeline) {
        config.onShareTimeline = function () {
            const path = getPath(id, this.options);
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
    const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
    let componentElement = null;
    const config = {
        attached() {
            perf.start(PAGE_INIT);
            const path = getPath(id, { id: this.getPageId() });
            Current.app.mount(component, path, () => {
                componentElement = document$1.getElementById(path);
                ensure(componentElement !== null, '没有找到组件实例。');
                safeExecute(path, 'onLoad');
                if (!isBrowser) {
                    componentElement.ctx = this;
                    componentElement.performUpdate(true);
                }
            });
        },
        detached() {
            const path = getPath(id, { id: this.getPageId() });
            Current.app.unmount(path, () => {
                instances.delete(path);
                if (componentElement) {
                    componentElement.ctx = null;
                }
            });
        },
        pageLifetimes: {
            show() {
                safeExecute(id, 'onShow');
            },
            hide() {
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
    return {
        properties: {
            i: {
                type: Object,
                value: {
                    ["nn" /* NodeName */]: 'view'
                }
            }
        },
        observers: {
            i(val) {
                warn(val["nn" /* NodeName */] === '#text', `请在此元素外再套一层非 Text 元素：<text>${val["v" /* Text */]}</text>，详情：https://github.com/NervJS/taro/issues/6054`);
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
    const h = R.createElement;
    return (component) => {
        // eslint-disable-next-line dot-notation
        const isReactComponent = isClassComponent(R, component);
        const inject = (node) => node && injectPageInstance(node, id);
        const refs = isReactComponent ? { ref: inject } : {
            forwardedRef: inject,
            // 兼容 react-redux 7.20.1+
            reactReduxForwardedRef: inject
        };
        if (PageContext === EMPTY_OBJ) {
            PageContext = R.createContext('');
        }
        return class Page extends R.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    hasError: false
                };
            }
            static getDerivedStateFromError(error) {
                console.warn(error);
                return { hasError: true };
            }
            // React 16 uncaught error 会导致整个应用 crash，
            // 目前把错误缩小到页面
            componentDidCatch(error, info) {
                console.warn(error);
                console.error(info.componentStack);
            }
            render() {
                const children = this.state.hasError
                    ? []
                    : h(PageContext.Provider, { value: id }, h(component, Object.assign(Object.assign({}, this.props), refs)));
                if (isBrowser) {
                    return h('div', { id, className: 'taro_page' }, children);
                }
                return h('root', { id }, children);
            }
        };
    };
}
// 初始值设置为 any 主要是为了过 TS 的校验
let R = EMPTY_OBJ;
let PageContext = EMPTY_OBJ;
let ReactDOM;
function setReconciler() {
    const hostConfig = {
        getLifecyle(instance, lifecycle) {
            if (lifecycle === 'onShow') {
                lifecycle = 'componentDidShow';
            }
            else if (lifecycle === 'onHide') {
                lifecycle = 'componentDidHide';
            }
            return instance[lifecycle];
        },
        mergePageInstance(prev, next) {
            if (!prev || !next)
                return;
            // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
            Object.keys(prev).forEach(item => {
                if (isFunction(next[item])) {
                    next[item] = [next[item], ...prev[item]];
                }
                else {
                    next[item] = [...(next[item] || []), ...prev[item]];
                }
            });
        }
    };
    if (isBrowser) {
        hostConfig.createPullDownComponent = (el, _, R) => {
            const isReactComponent = isClassComponent(R, el);
            return R.forwardRef((props, ref) => {
                const newProps = Object.assign({}, props);
                if (isReactComponent) {
                    newProps.ref = ref;
                }
                return R.createElement('taro-pull-to-refresh', null, R.createElement(el, newProps));
            });
        };
        hostConfig.findDOMNode = (inst) => {
            return ReactDOM.findDOMNode(inst);
        };
    }
    options.reconciler(hostConfig);
}
const pageKeyId = incrementId();
function createReactApp(App, react, reactdom, config) {
    R = react;
    ReactDOM = reactdom;
    ensure(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
    const ref = R.createRef();
    const isReactComponent = isClassComponent(R, App);
    setReconciler();
    let wrapper;
    class AppWrapper extends R.Component {
        constructor() {
            super(...arguments);
            // run createElement() inside the render function to make sure that owner is right
            this.pages = [];
            this.elements = [];
        }
        mount(component, id, cb) {
            const key = id + pageKeyId();
            const page = () => R.createElement(component, { key, tid: id });
            this.pages.push(page);
            this.forceUpdate(cb);
        }
        unmount(id, cb) {
            for (let i = 0; i < this.elements.length; i++) {
                const element = this.elements[i];
                if (element.props.tid === id) {
                    this.elements.splice(i, 1);
                    break;
                }
            }
            this.forceUpdate(cb);
        }
        render() {
            while (this.pages.length > 0) {
                const page = this.pages.pop();
                this.elements.push(page());
            }
            let props = null;
            if (isReactComponent) {
                props = { ref };
            }
            return R.createElement(App, props, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
        }
    }
    const app = Object.create({
        render(cb) {
            wrapper.forceUpdate(cb);
        },
        mount(component, id, cb) {
            const page = connectReactPage(R, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount(id, cb) {
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
            value(options) {
                // eslint-disable-next-line react/no-render-return-value
                wrapper = ReactDOM.render(R.createElement(AppWrapper), document$1.getElementById('app'));
                const app = ref.current;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (app != null && isFunction(app.onLaunch)) {
                    app.onLaunch(options);
                }
            }
        },
        onShow: {
            enumerable: true,
            writable: true,
            value(options) {
                const app = ref.current;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (app != null && isFunction(app.componentDidShow)) {
                    app.componentDidShow(options);
                }
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value(options) {
                const app = ref.current;
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
    return (component) => {
        const injectedPage = Vue.extend({
            props: {
                tid: String
            },
            mixins: [component, {
                    created() {
                        injectPageInstance(this, id);
                    }
                }]
        });
        const options = {
            render(h) {
                return h(isBrowser ? 'div' : 'root', {
                    attrs: {
                        id,
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
    const hostConfig = {
        getLifecyle(instance, lifecycle) {
            return instance.$options[lifecycle];
        },
        removeAttribute(dom, qualifiedName) {
            const compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));
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
        hostConfig.createPullDownComponent = (el, path, vue) => {
            const injectedPage = vue.extend({
                props: {
                    tid: String
                },
                mixins: [el, {
                        created() {
                            injectPageInstance(this, path);
                        }
                    }]
            });
            const options = {
                name: 'PullToRefresh',
                render(h) {
                    return h('taro-pull-to-refresh', { class: ['hydrated'] }, [h(injectedPage, this.$slots.default)]);
                }
            };
            return options;
        };
        hostConfig.findDOMNode = (el) => {
            return el.$el;
        };
    }
    options.reconciler(hostConfig);
}
let Vue;
function createVueApp(App, vue, config) {
    Vue = vue;
    ensure(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
    setReconciler$1();
    Vue.config.getTagNamespace = noop;
    const elements = [];
    const pages = [];
    let appInstance;
    const wrapper = new Vue({
        render(h) {
            while (pages.length > 0) {
                const page = pages.pop();
                elements.push(page(h));
            }
            return h(App.$options, { ref: 'app' }, elements.slice());
        },
        methods: {
            mount(component, id, cb) {
                pages.push((h) => h(component, { key: id }));
                this.updateSync(cb);
            },
            updateSync(cb) {
                this._update(this._render(), false);
                this.$children.forEach((child) => child._update(child._render(), false));
                cb();
            },
            unmount(id, cb) {
                for (let i = 0; i < elements.length; i++) {
                    const element = elements[i];
                    if (element.key === id) {
                        elements.splice(i, 1);
                        break;
                    }
                }
                this.updateSync(cb);
            }
        }
    });
    const app = Object.create({
        mount(component, id, cb) {
            const page = connectVuePage(Vue, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount(id, cb) {
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
            value(options) {
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
            value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (appInstance != null && isFunction(appInstance.$options.onShow)) {
                    appInstance.$options.onShow.call(appInstance, options);
                }
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value(options) {
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
        const inject = {
            props: {
                tid: String
            },
            created() {
                injectPageInstance(this, id);
            }
        };
        component.mixins = isArray(component.mixins)
            ? component.mixins.push(inject)
            : [inject];
        return h(isBrowser ? 'div' : 'root', {
            key: id,
            id,
            class: isBrowser ? 'taro_page' : ''
        }, [
            h(component, {
                tid: id
            })
        ]);
    };
}
function setReconciler$2() {
    const hostConfig = {
        getLifecyle(instance, lifecycle) {
            return instance.$options[lifecycle];
        },
        removeAttribute(dom, qualifiedName) {
            const compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));
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
        hostConfig.createPullDownComponent = (component, path, h) => {
            const inject = {
                props: {
                    tid: String
                },
                created() {
                    injectPageInstance(this, path);
                }
            };
            component.mixins = isArray(component.mixins)
                ? component.mixins.push(inject)
                : [inject];
            return {
                render() {
                    return h('taro-pull-to-refresh', {
                        class: 'hydrated'
                    }, [h(component, this.$slots.default)]);
                }
            };
        };
        hostConfig.findDOMNode = (el) => {
            return el.$el;
        };
    }
    options.reconciler(hostConfig);
}
function createVue3App(app, h, config) {
    let pages = [];
    let appInstance;
    ensure(!isFunction(app._component), '入口组件不支持使用函数式组件');
    setReconciler$2();
    app._component.render = function () {
        return pages.slice();
    };
    const appConfig = Object.create({
        mount(component, id, cb) {
            const page = createVue3Page(h, id)(component);
            pages.push(page);
            this.updateAppInstance(cb);
        },
        unmount(id, cb) {
            pages = pages.filter(page => page.key !== id);
            this.updateAppInstance(cb);
        },
        updateAppInstance(cb) {
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
            value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                appInstance = app.mount('#app');
                const onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
                isFunction(onLaunch) && onLaunch.call(appInstance, options);
            }
        },
        onShow: {
            enumerable: true,
            writable: true,
            value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                const onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
                isFunction(onShow) && onShow.call(appInstance, options);
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value(options) {
                var _a;
                const onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
                isFunction(onHide) && onHide.call(appInstance, options);
            }
        }
    });
    Current.app = appConfig;
    return Current.app;
}

const taroHooks = (lifecycle) => {
    return (fn) => {
        const id = R.useContext(PageContext);
        // hold fn ref and keep up to date
        const fnRef = R.useRef(fn);
        if (fnRef.current !== fn)
            fnRef.current = fn;
        R.useLayoutEffect(() => {
            let inst = getPageInstance(id);
            let first = false;
            if (inst == null) {
                first = true;
                inst = Object.create(null);
            }
            inst = inst;
            // callback is immutable but inner function is up to date
            const callback = (...args) => fnRef.current(...args);
            if (isFunction(inst[lifecycle])) {
                inst[lifecycle] = [inst[lifecycle], callback];
            }
            else {
                inst[lifecycle] = [
                    ...(inst[lifecycle] || []),
                    callback
                ];
            }
            if (first) {
                injectPageInstance(inst, id);
            }
            return () => {
                const inst = getPageInstance(id);
                const list = inst[lifecycle];
                if (list === callback) {
                    inst[lifecycle] = undefined;
                }
                else if (isArray(list)) {
                    inst[lifecycle] = list.filter(item => item !== callback);
                }
            };
        }, []);
    };
};
const useDidShow = taroHooks('componentDidShow');
const useDidHide = taroHooks('componentDidHide');
const usePullDownRefresh = taroHooks('onPullDownRefresh');
const useReachBottom = taroHooks('onReachBottom');
const usePageScroll = taroHooks('onPageScroll');
const useResize = taroHooks('onResize');
const useShareAppMessage = taroHooks('onShareAppMessage');
const useTabItemTap = taroHooks('onTabItemTap');
const useTitleClick = taroHooks('onTitleClick');
const useOptionMenuClick = taroHooks('onOptionMenuClick');
const usePullIntercept = taroHooks('onPullIntercept');
const useShareTimeline = taroHooks('onShareTimeline');
const useAddToFavorites = taroHooks('onAddToFavorites');
const useReady = taroHooks('onReady');
const useRouter = (dynamic = false) => {
    return dynamic ? Current.router : R.useMemo(() => Current.router, []);
};
const useScope = () => undefined;

function removeLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path.slice(1) : path;
}
const nextTick = (cb, ctx) => {
    var _a, _b, _c;
    const router = Current.router;
    const timerFunc = () => {
        setTimeout(function () {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (router !== null) {
        let pageElement = null;
        const path = getPath(removeLeadingSlash(router.path), router.params);
        pageElement = document$1.getElementById(path);
        if (pageElement !== null) {
            if (isBrowser) {
                (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(() => {
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

export { Current, CurrentReconciler, Events, FormElement, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, caf as cancelAnimationFrame, connectReactPage, connectVuePage, createComponentConfig, createDocument, createEvent, createPageConfig, createReactApp, createRecursiveComponentConfig, createVue3App, createVueApp, document$1 as document, eventCenter, getComputedStyle, getCurrentInstance, hydrate, injectPageInstance, navigator, nextTick, now, options, raf as requestAnimationFrame, stringify, useAddToFavorites, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, window$1 as window };
//# sourceMappingURL=runtime.esm.js.map
