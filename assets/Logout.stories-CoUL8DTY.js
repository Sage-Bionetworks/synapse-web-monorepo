import{j as a,B as i,a9 as l}from"./iframe-SFoYirDz.js";import"./index-r8ZA1smB.js";function e(t){const{callback:s}=t;return a.jsx("div",{children:a.jsx(i,{variant:"contained",color:"primary",onClick:()=>{l.signOut().then(s)},children:"Log out"})})}try{e.displayName="Logout",e.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}}}catch{}const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Authentication/Logout",component:e},o={args:{callback:p()}};var r,n,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    callback: fn()
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const _=["Demo"];export{o as Demo,_ as __namedExportsOrder,m as default};
