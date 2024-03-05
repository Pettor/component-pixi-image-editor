import{j as K,a as me}from"./jsx-runtime-5BUNAZ9W.js";import{c as mr}from"./clsx-Zbgk8kpT.js";import{r as f,R as gr}from"./index-4g5l5LRQ.js";import{P as p}from"./index-tvtfaFq4.js";function vr({title:e,titleId:r,...n},t){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},n),e?f.createElement("title",{id:r},e):null,f.createElement("path",{fillRule:"evenodd",d:"M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z",clipRule:"evenodd"}),f.createElement("path",{d:"M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"}))}const yr=f.forwardRef(vr),br=yr;function S(e,r,n,t){function i(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function s(g){try{l(t.next(g))}catch(b){u(b)}}function m(g){try{l(t.throw(g))}catch(b){u(b)}}function l(g){g.done?o(g.value):i(g.value).then(s,m)}l((t=t.apply(e,r||[])).next())})}function k(e,r){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},t,i,o,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(l){return function(g){return m([l,g])}}function m(l){if(t)throw new TypeError("Generator is already executing.");for(;u&&(u=0,l[0]&&(n=0)),n;)try{if(t=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1],o=l;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(l);break}o[2]&&n.ops.pop(),n.trys.pop();continue}l=r.call(e,n)}catch(g){l=[6,g],i=0}finally{t=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Le(e,r){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var t=n.call(e),i,o=[],u;try{for(;(r===void 0||r-- >0)&&!(i=t.next()).done;)o.push(i.value)}catch(s){u={error:s}}finally{try{i&&!i.done&&(n=t.return)&&n.call(t)}finally{if(u)throw u.error}}return o}function $e(e,r,n){if(n||arguments.length===2)for(var t=0,i=r.length,o;t<i;t++)(o||!(t in r))&&(o||(o=Array.prototype.slice.call(r,0,t)),o[t]=r[t]);return e.concat(o||Array.prototype.slice.call(r))}var hr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function N(e,r){var n=Dr(e);if(typeof n.path!="string"){var t=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof t=="string"&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Dr(e){var r=e.name,n=r&&r.lastIndexOf(".")!==-1;if(n&&!e.type){var t=r.split(".").pop().toLowerCase(),i=hr.get(t);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var wr=[".DS_Store","Thumbs.db"];function Ar(e){return S(this,void 0,void 0,function(){return k(this,function(r){return J(e)&&Er(e.dataTransfer)?[2,_r(e.dataTransfer,e.type)]:xr(e)?[2,Or(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,Fr(e)]:[2,[]]})})}function Er(e){return J(e)}function xr(e){return J(e)&&J(e.target)}function J(e){return typeof e=="object"&&e!==null}function Or(e){return ve(e.target.files).map(function(r){return N(r)})}function Fr(e){return S(this,void 0,void 0,function(){var r;return k(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(t){return t.getFile()}))];case 1:return r=n.sent(),[2,r.map(function(t){return N(t)})]}})})}function _r(e,r){return S(this,void 0,void 0,function(){var n,t;return k(this,function(i){switch(i.label){case 0:return e.items?(n=ve(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,n]:[4,Promise.all(n.map(jr))]):[3,2];case 1:return t=i.sent(),[2,Ke(Je(t))];case 2:return[2,Ke(ve(e.files).map(function(o){return N(o)}))]}})})}function Ke(e){return e.filter(function(r){return wr.indexOf(r.name)===-1})}function ve(e){if(e===null)return[];for(var r=[],n=0;n<e.length;n++){var t=e[n];r.push(t)}return r}function jr(e){if(typeof e.webkitGetAsEntry!="function")return He(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Qe(r):He(e)}function Je(e){return e.reduce(function(r,n){return $e($e([],Le(r),!1),Le(Array.isArray(n)?Je(n):[n]),!1)},[])}function He(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var n=N(r);return Promise.resolve(n)}function Cr(e){return S(this,void 0,void 0,function(){return k(this,function(r){return[2,e.isDirectory?Qe(e):Pr(e)]})})}function Qe(e){var r=e.createReader();return new Promise(function(n,t){var i=[];function o(){var u=this;r.readEntries(function(s){return S(u,void 0,void 0,function(){var m,l,g;return k(this,function(b){switch(b.label){case 0:if(s.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=b.sent(),n(m),[3,4];case 3:return l=b.sent(),t(l),[3,4];case 4:return[3,6];case 5:g=Promise.all(s.map(Cr)),i.push(g),o(),b.label=6;case 6:return[2]}})})},function(s){t(s)})}o()})}function Pr(e){return S(this,void 0,void 0,function(){return k(this,function(r){return[2,new Promise(function(n,t){e.file(function(i){var o=N(i,e.fullPath);n(o)},function(i){t(i)})})]})})}var Sr=function(e,r){if(e&&r){var n=Array.isArray(r)?r:r.split(","),t=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some(function(u){var s=u.trim().toLowerCase();return s.charAt(0)==="."?t.toLowerCase().endsWith(s):s.endsWith("/*")?o===s.replace(/\/.*$/,""):i===s})}return!0};function Ne(e){return Ir(e)||Tr(e)||er(e)||kr()}function kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ir(e){if(Array.isArray(e))return ye(e)}function Be(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function We(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Be(Object(n),!0).forEach(function(t){Xe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Xe(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function H(e,r){return Mr(e)||zr(e,r)||er(e,r)||Rr()}function Rr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function er(e,r){if(e){if(typeof e=="string")return ye(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(e,r)}}function ye(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function zr(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],i=!0,o=!1,u,s;try{for(n=n.call(e);!(i=(u=n.next()).done)&&(t.push(u.value),!(r&&t.length===r));i=!0);}catch(m){o=!0,s=m}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return t}}function Mr(e){if(Array.isArray(e))return e}var Lr="file-invalid-type",$r="file-too-large",Kr="file-too-small",Hr="too-many-files",Nr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var n=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Lr,message:"File type must be ".concat(n)}},Ue=function(r){return{code:$r,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ge=function(r){return{code:Kr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Br={code:Hr,message:"Too many files"};function rr(e,r){var n=e.type==="application/x-moz-file"||Sr(e,r);return[n,n?null:Nr(r)]}function nr(e,r,n){if(F(e.size))if(F(r)&&F(n)){if(e.size>n)return[!1,Ue(n)];if(e.size<r)return[!1,Ge(r)]}else{if(F(r)&&e.size<r)return[!1,Ge(r)];if(F(n)&&e.size>n)return[!1,Ue(n)]}return[!0,null]}function F(e){return e!=null}function Wr(e){var r=e.files,n=e.accept,t=e.minSize,i=e.maxSize,o=e.multiple,u=e.maxFiles,s=e.validator;return!o&&r.length>1||o&&u>=1&&r.length>u?!1:r.every(function(m){var l=rr(m,n),g=H(l,1),b=g[0],T=nr(m,t,i),I=H(T,1),R=I[0],z=s?s(m):null;return b&&R&&!z})}function Q(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function Z(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ve(e){e.preventDefault()}function Ur(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Gr(e){return e.indexOf("Edge/")!==-1}function Vr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Ur(e)||Gr(e)}function E(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=arguments[u];return r.some(function(s){return!Q(t)&&s&&s.apply(void 0,[t].concat(o)),Q(t)})}}function Yr(){return"showOpenFilePicker"in window}function qr(e){if(F(e)){var r=Object.entries(e).filter(function(n){var t=H(n,2),i=t[0],o=t[1],u=!0;return tr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),u=!1),(!Array.isArray(o)||!o.every(or))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),u=!1),u}).reduce(function(n,t){var i=H(t,2),o=i[0],u=i[1];return We(We({},n),{},Xe({},o,u))},{});return[{description:"Files",accept:r}]}return e}function Zr(e){if(F(e))return Object.entries(e).reduce(function(r,n){var t=H(n,2),i=t[0],o=t[1];return[].concat(Ne(r),[i],Ne(o))},[]).filter(function(r){return tr(r)||or(r)}).join(",")}function Jr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Qr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function tr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function or(e){return/^.*\.[\w]+$/.test(e)}var Xr=["children"],en=["open"],rn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],nn=["refKey","onChange","onClick"];function tn(e){return cn(e)||an(e)||ir(e)||on()}function on(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function an(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cn(e){if(Array.isArray(e))return be(e)}function ge(e,r){return sn(e)||ln(e,r)||ir(e,r)||un()}function un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,r){if(e){if(typeof e=="string")return be(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(e,r)}}function be(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function ln(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],i=!0,o=!1,u,s;try{for(n=n.call(e);!(i=(u=n.next()).done)&&(t.push(u.value),!(r&&t.length===r));i=!0);}catch(m){o=!0,s=m}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return t}}function sn(e){if(Array.isArray(e))return e}function Ye(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Ye(Object(n),!0).forEach(function(t){he(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function he(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function X(e,r){if(e==null)return{};var n=fn(e,r),t,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function fn(e,r){if(e==null)return{};var n={},t=Object.keys(e),i,o;for(o=0;o<t.length;o++)i=t[o],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}var we=f.forwardRef(function(e,r){var n=e.children,t=X(e,Xr),i=cr(t),o=i.open,u=X(i,en);return f.useImperativeHandle(r,function(){return{open:o}},[o]),gr.createElement(f.Fragment,null,n(d(d({},u),{},{open:o})))});we.displayName="Dropzone";var ar={disabled:!1,getFilesFromEvent:Ar,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};we.defaultProps=ar;we.propTypes={children:p.func,accept:p.objectOf(p.arrayOf(p.string)),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,autoFocus:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,onError:p.func,validator:p.func};var De={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function cr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},ar),e),n=r.accept,t=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,u=r.minSize,s=r.multiple,m=r.maxFiles,l=r.onDragEnter,g=r.onDragLeave,b=r.onDragOver,T=r.onDrop,I=r.onDropAccepted,R=r.onDropRejected,z=r.onFileDialogCancel,ee=r.onFileDialogOpen,Ae=r.useFsAccessApi,Ee=r.autoFocus,re=r.preventDropOnDocument,xe=r.noClick,ne=r.noKeyboard,Oe=r.noDrag,x=r.noDragEventsBubbling,te=r.onError,M=r.validator,L=f.useMemo(function(){return Zr(n)},[n]),Fe=f.useMemo(function(){return qr(n)},[n]),oe=f.useMemo(function(){return typeof ee=="function"?ee:qe},[ee]),B=f.useMemo(function(){return typeof z=="function"?z:qe},[z]),h=f.useRef(null),A=f.useRef(null),ur=f.useReducer(pn,De),_e=ge(ur,2),ie=_e[0],D=_e[1],lr=ie.isFocused,je=ie.isFileDialogActive,W=f.useRef(typeof window<"u"&&window.isSecureContext&&Ae&&Yr()),Ce=function(){!W.current&&je&&setTimeout(function(){if(A.current){var c=A.current.files;c.length||(D({type:"closeDialog"}),B())}},300)};f.useEffect(function(){return window.addEventListener("focus",Ce,!1),function(){window.removeEventListener("focus",Ce,!1)}},[A,je,B,W]);var _=f.useRef([]),Pe=function(c){h.current&&h.current.contains(c.target)||(c.preventDefault(),_.current=[])};f.useEffect(function(){return re&&(document.addEventListener("dragover",Ve,!1),document.addEventListener("drop",Pe,!1)),function(){re&&(document.removeEventListener("dragover",Ve),document.removeEventListener("drop",Pe))}},[h,re]),f.useEffect(function(){return!t&&Ee&&h.current&&h.current.focus(),function(){}},[h,Ee,t]);var O=f.useCallback(function(a){te?te(a):console.error(a)},[te]),Se=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a),_.current=[].concat(tn(_.current),[a.target]),Z(a)&&Promise.resolve(i(a)).then(function(c){if(!(Q(a)&&!x)){var v=c.length,y=v>0&&Wr({files:c,accept:L,minSize:u,maxSize:o,multiple:s,maxFiles:m,validator:M}),w=v>0&&!y;D({isDragAccept:y,isDragReject:w,isDragActive:!0,type:"setDraggedFiles"}),l&&l(a)}}).catch(function(c){return O(c)})},[i,l,O,x,L,u,o,s,m,M]),ke=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a);var c=Z(a);if(c&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return c&&b&&b(a),!1},[b,x]),Te=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a);var c=_.current.filter(function(y){return h.current&&h.current.contains(y)}),v=c.indexOf(a.target);v!==-1&&c.splice(v,1),_.current=c,!(c.length>0)&&(D({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Z(a)&&g&&g(a))},[h,g,x]),U=f.useCallback(function(a,c){var v=[],y=[];a.forEach(function(w){var $=rr(w,L),P=ge($,2),ce=P[0],ue=P[1],le=nr(w,u,o),q=ge(le,2),se=q[0],fe=q[1],pe=M?M(w):null;if(ce&&se&&!pe)v.push(w);else{var de=[ue,fe];pe&&(de=de.concat(pe)),y.push({file:w,errors:de.filter(function(dr){return dr})})}}),(!s&&v.length>1||s&&m>=1&&v.length>m)&&(v.forEach(function(w){y.push({file:w,errors:[Br]})}),v.splice(0)),D({acceptedFiles:v,fileRejections:y,type:"setFiles"}),T&&T(v,y,c),y.length>0&&R&&R(y,c),v.length>0&&I&&I(v,c)},[D,s,L,u,o,m,T,I,R,M]),G=f.useCallback(function(a){a.preventDefault(),a.persist(),Y(a),_.current=[],Z(a)&&Promise.resolve(i(a)).then(function(c){Q(a)&&!x||U(c,a)}).catch(function(c){return O(c)}),D({type:"reset"})},[i,U,O,x]),j=f.useCallback(function(){if(W.current){D({type:"openDialog"}),oe();var a={multiple:s,types:Fe};window.showOpenFilePicker(a).then(function(c){return i(c)}).then(function(c){U(c,null),D({type:"closeDialog"})}).catch(function(c){Jr(c)?(B(c),D({type:"closeDialog"})):Qr(c)?(W.current=!1,A.current?(A.current.value=null,A.current.click()):O(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):O(c)});return}A.current&&(D({type:"openDialog"}),oe(),A.current.value=null,A.current.click())},[D,oe,B,Ae,U,O,Fe,s]),Ie=f.useCallback(function(a){!h.current||!h.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),j())},[h,j]),Re=f.useCallback(function(){D({type:"focus"})},[]),ze=f.useCallback(function(){D({type:"blur"})},[]),Me=f.useCallback(function(){xe||(Vr()?setTimeout(j,0):j())},[xe,j]),C=function(c){return t?null:c},ae=function(c){return ne?null:C(c)},V=function(c){return Oe?null:C(c)},Y=function(c){x&&c.stopPropagation()},sr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.refKey,v=c===void 0?"ref":c,y=a.role,w=a.onKeyDown,$=a.onFocus,P=a.onBlur,ce=a.onClick,ue=a.onDragEnter,le=a.onDragOver,q=a.onDragLeave,se=a.onDrop,fe=X(a,rn);return d(d(he({onKeyDown:ae(E(w,Ie)),onFocus:ae(E($,Re)),onBlur:ae(E(P,ze)),onClick:C(E(ce,Me)),onDragEnter:V(E(ue,Se)),onDragOver:V(E(le,ke)),onDragLeave:V(E(q,Te)),onDrop:V(E(se,G)),role:typeof y=="string"&&y!==""?y:"presentation"},v,h),!t&&!ne?{tabIndex:0}:{}),fe)}},[h,Ie,Re,ze,Me,Se,ke,Te,G,ne,Oe,t]),fr=f.useCallback(function(a){a.stopPropagation()},[]),pr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.refKey,v=c===void 0?"ref":c,y=a.onChange,w=a.onClick,$=X(a,nn),P=he({accept:L,multiple:s,type:"file",style:{display:"none"},onChange:C(E(y,G)),onClick:C(E(w,fr)),tabIndex:-1},v,A);return d(d({},P),$)}},[A,n,s,G,t]);return d(d({},ie),{},{isFocused:lr&&!t,getRootProps:sr,getInputProps:pr,rootRef:h,inputRef:A,open:C(j)})}function pn(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},De),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},De);default:return e}}function qe(){}function dn(e){const{getRootProps:r,getInputProps:n,isDragActive:t,isDragAccept:i,isDragReject:o}=cr({onDrop:e,multiple:!1,accept:{"image/*":[".png",".jpg",".jpeg",".gif",".webp"]}});function u(){return i?"bg-success dark:text-black":o?"bg-error dark:text-black":t?"bg-base-300":"bg-base-200"}return{getRootProps:r,getInputProps:n,isDragActive:t,isDragAccept:i,isDragReject:o,getBackgroundClass:u}}function Ze({onDrop:e}){const{getRootProps:r,getInputProps:n,getBackgroundClass:t}=dn(e);return K("div",{className:"m-2 flex w-full max-w-screen-sm items-center justify-center md:min-w-96",children:K("div",{...r({className:"w-full h-full"}),children:me("label",{htmlFor:"dropzone-file",className:mr("glass flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral transition-all hover:bg-base-300 dark:bg-none md:h-48",t()),children:[K("input",{...n()}),me("div",{className:"flex flex-col items-center justify-center",children:[K(br,{className:"mb-4 h-8 w-8 fill-primary"}),me("p",{className:"mb-2",children:[K("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]})]})]})})})}try{Ze.displayName="Dropzone",Ze.__docgenInfo={description:"",displayName:"Dropzone",props:{onDrop:{defaultValue:null,description:"",name:"onDrop",required:!0,type:{name:"(acceptedFiles: File[]) => void"}}}}}catch{}export{Ze as D};
