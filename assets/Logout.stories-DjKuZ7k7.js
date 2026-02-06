import{j as a,B as n,ab as c}from"./iframe-Ya-g_qay.js";import"./index-Chi_LkuB.js";function e(t){const{callback:r}=t;return a.jsx("div",{children:a.jsx(n,{variant:"contained",color:"primary",onClick:()=>{c.signOut().then(r)},children:"Log out"})})}try{e.displayName="Logout",e.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}}}catch{}const{fn:s}=__STORYBOOK_MODULE_TEST__,p={title:"Authentication/Logout",component:e},o={args:{callback:s()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    callback: fn()
  }
}`,...o.parameters?.docs?.source}}};const d=["Demo"];export{o as Demo,d as __namedExportsOrder,p as default};
