import{j as t,a as k,F as y}from"./jsx-runtime-095bf462.js";import{I as g}from"./IconSvg-5bc28e38.js";import{t as h}from"./StringUtils-2ea3ab4d.js";import{B as F}from"./Breadcrumbs-b2972c4f.js";import{T as v}from"./Tooltip-9098414d.js";import{T as D}from"./Typography-d5f8f357.js";import{L as H}from"./Link-a60839ec.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./createSvgIcon-c69fbb93.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-17e9e47b.js";import"./ErrorOutlined-3dd860d7.js";import"./GetAppTwoTone-355d174d.js";import"./InfoOutlined-61b6cf08.js";import"./CheckCircleTwoTone-8c636771.js";import"./index-953d39fd.js";import"./ButtonBase-4975ddb0.js";import"./emotion-react.browser.esm-39b3de80.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Grow-0db08d4d.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./useTheme-e16afdbe.js";import"./utils-02ec0d60.js";import"./extendSxProp-1c03cb1b.js";const b=32;function S(){return t(g,{icon:"chevronRight",sx:{color:"grey.500"}})}const B={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},_={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function a(r){const{items:x}=r;return t(F,{separator:t(S,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:B,children:x.map((n,s)=>{const i=h(n.text,b),C=i!==n.text?n.text:null;return t(v,{title:C,placement:"top",children:t(D,{variant:"breadcrumb1",children:n.current?i:t(H,{href:n.href,onClick:n.onClick,underline:"hover",sx:_,children:i},s)})},s)})})}try{a.displayName="EntityPageBreadcrumbs",a.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const le={title:"Synapse/EntityPage/Breadcrumb",component:a,render:r=>k(y,{children:[t("br",{}),t("br",{}),t(a,{items:[],...r})]})},e=r=>{r.preventDefault()},o={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"#!Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]}},l={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ae=["Demo","ManyItems"];export{o as Demo,l as ManyItems,ae as __namedExportsOrder,le as default};
//# sourceMappingURL=EntityPageBreadcrumb.stories-0de5d9a0.js.map
