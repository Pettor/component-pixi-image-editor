import{r as o}from"./index-4g5l5LRQ.js";const f=typeof window<"u"?o.useLayoutEffect:o.useEffect;function a(t,r,e,n){const s=o.useRef(r);f(()=>{s.current=r},[r]),o.useEffect(()=>{var i;const u=(i=e==null?void 0:e.current)!==null&&i!==void 0?i:window;if(!(u&&u.addEventListener))return;const c=d=>s.current(d);return u.addEventListener(t,c,n),()=>{u.removeEventListener(t,c,n)}},[t,e,n])}function v(t,r,e="mousedown"){a(e,n=>{const s=t==null?void 0:t.current;!s||s.contains(n.target)||r(n)})}export{a,f as b,v as u};
