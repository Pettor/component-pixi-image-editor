import{j as r,u as e}from"./index-VBPk5Oix.js";import{B as n,u as t,E as s}from"./UseErrorView-2VNLSoLy.js";function a({onBack:o}){return r.jsx(n,{container:!0,children:r.jsxs("div",{className:"flex flex-col items-center gap-4",children:[r.jsx("article",{className:"prose max-w-64 text-pretty p-4 lg:prose-xl lg:max-w-full",children:r.jsx("strong",{children:"Could not find the page you were looking for! 🕵️"})}),r.jsx("button",{className:"btn btn-primary mt-4 w-48",onClick:o,children:"Start over 🦖"})]})})}function i(){const o=e();return{onBack:()=>o("/")}}function u(){const o=i();return r.jsx(a,{...o})}function c(){return r.jsx(u,{})}c.displayName="NotFoundPage";function d(){const o=t();return r.jsx(s,{...o})}export{c as Component,d as ErrorBoundary};