import{j as t,B as n,aa as c}from"./iframe-CJi55ERg.js";import"./index-Chi_LkuB.js";function a(e){const{callback:r}=e;return t.jsx("div",{children:t.jsx(n,{variant:"contained",color:"primary",onClick:()=>{c.signOut().then(r)},children:"Log out"})})}try{a.displayName="Logout",a.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}}}catch{}const{fn:s}=__STORYBOOK_MODULE_TEST__,p={title:"Authentication/Logout",component:a},o={args:{callback:s()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    callback: fn()
  }
}`,...o.parameters?.docs?.source}}};const d=["Demo"];export{o as Demo,d as __namedExportsOrder,p as default};
