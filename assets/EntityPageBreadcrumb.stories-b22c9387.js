import{j as t,a as k,F as y}from"./jsx-runtime-095bf462.js";import{I as g}from"./IconSvg-f04d8c2b.js";import{t as h}from"./StringUtils-d4255937.js";import{B as F}from"./Breadcrumbs-f1293df8.js";import{T as v}from"./Tooltip-b11baf92.js";import{T as D}from"./Typography-b4a6e0b5.js";import{L as H}from"./Link-50e57cb4.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./SvgIcon-bc070951.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-2cba4329.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./createSvgIcon-02cd1a2a.js";import"./ErrorOutlined-fccff164.js";import"./InfoOutlined-d944994d.js";import"./Clear-398befb5.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-bdd58ec3.js";import"./emotion-react.browser.esm-9ef79d4e.js";import"./hoist-non-react-statics.cjs-775f1375.js";import"./TransitionGroup-5e0fc2af.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-53ae1513.js";import"./useForkRef-2674f3de.js";import"./useEventCallback-65e61675.js";import"./useEnhancedEffect-c45cae33.js";import"./useTheme-d9b5c73e.js";import"./ownerDocument-613eb639.js";import"./index-8ce4a492.js";import"./isHostComponent-73d6e646.js";import"./useControlled-be22aa93.js";import"./utils-8d96ae5c.js";import"./extendSxProp-a6a93bb0.js";const b=32;function S(){return t(g,{icon:"chevronRight",sx:{color:"grey.500"}})}const B={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},_={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function a(r){const{items:x}=r;return t(F,{separator:t(S,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:B,children:x.map((n,s)=>{const i=h(n.text,b),C=i!==n.text?n.text:null;return t(v,{title:C,placement:"top",children:t(D,{variant:"breadcrumb1",children:n.current?i:t(H,{href:n.href,onClick:n.onClick,underline:"hover",sx:_,children:i},s)})},s)})})}try{a.displayName="EntityPageBreadcrumbs",a.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const me={title:"Synapse/EntityPage/Breadcrumb",component:a,render:r=>k(y,{children:[t("br",{}),t("br",{}),t(a,{items:[],...r})]})},e=r=>{r.preventDefault()},o={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"#!Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]}},l={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      onClick: preventDefaultHandler,
      text: 'Files',
      href: '#area'
    }, {
      onClick: preventDefaultHandler,
      text: 'Root folder',
      href: '#!Synapse:syn123'
    }, {
      onClick: preventDefaultHandler,
      text: 'A very long subfolder name that gets truncated',
      href: '#!Synapse:syn456'
    }, {
      onClick: preventDefaultHandler,
      text: 'The file you are looking at',
      href: '#!Synapse:syn789',
      current: true
    }]
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      onClick: preventDefaultHandler,
      text: 'Files',
      href: '#area'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder A'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder B'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder C'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder D'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder E'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder F'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder G'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder H'
    }, {
      onClick: preventDefaultHandler,
      text: 'Folder I'
    }, {
      onClick: preventDefaultHandler,
      text: 'Leaf file',
      current: true
    }]
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const de=["Demo","ManyItems"];export{o as Demo,l as ManyItems,de as __namedExportsOrder,me as default};
//# sourceMappingURL=EntityPageBreadcrumb.stories-b22c9387.js.map
