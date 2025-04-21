import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{t as k}from"./StringUtils-DBSsSsIU.js";import{I as y}from"./IconSvg-CAJv8R1p.js";import{B as g}from"./Breadcrumbs-DCNjccyk.js";import{T as h}from"./Tooltip-CbFhYBpv.js";import{T as F}from"./Typography-DUswyeAh.js";import{L as v}from"./Link-D-YR7sBc.js";import"./index-Dl6G-zuu.js";import"./VerificationSubmission-CWAFIXEx.js";import"./createSvgIcon-Cg71VSX1.js";import"./createTheme-BmUnpyjI.js";import"./index-GEGPABih.js";import"./styled-_IoEwjFQ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-CxBmLnxz.js";import"./LayersTwoTone-Bqhxg48d.js";import"./ErrorOutlined-DsIBW_UX.js";import"./GetAppTwoTone-LEv6oiyS.js";import"./InfoOutlined-CP7XpE9b.js";import"./DeleteTwoTone-46LZBzJE.js";import"./CheckCircleTwoTone-S1ZFwL3C.js";import"./ButtonBase-QEdCuq5m.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useForkRef-BDoLG09A.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./Grow-BJQmYc4X.js";import"./mergeSlotProps-D1c34xqb.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BIzb42Jq.js";import"./utils-Kl3ltpPj.js";import"./index-BByOA_q1.js";import"./Popper-BYhjzrIk.js";import"./ownerDocument-DW-IO8s5.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";const D=32;function H(){return t.jsx(y,{icon:"chevronRight",sx:{color:"grey.500"}})}const b={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},S={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function a(r){const{items:f}=r;return t.jsx(g,{separator:t.jsx(H,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:b,children:f.map((n,s)=>{const i=k(n.text,D),C=i!==n.text?n.text:null;return t.jsx(h,{title:C,placement:"top",children:t.jsx(F,{variant:"breadcrumb1",children:n.current?i:t.jsx(v,{href:n.href,onClick:n.onClick,underline:"hover",sx:S,children:i},s)})},s)})})}try{a.displayName="EntityPageBreadcrumbs",a.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const ce={title:"Synapse/EntityPage/Breadcrumb",component:a,render:r=>t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx(a,{items:[],...r})]})},e=r=>{r.preventDefault()},o={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"Synapse:syn789",current:!0}]}},l={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      onClick: preventDefaultHandler,
      text: 'Files',
      href: '#area'
    }, {
      onClick: preventDefaultHandler,
      text: 'Root folder',
      href: 'Synapse:syn123'
    }, {
      onClick: preventDefaultHandler,
      text: 'A very long subfolder name that gets truncated',
      href: 'Synapse:syn456'
    }, {
      onClick: preventDefaultHandler,
      text: 'The file you are looking at',
      href: 'Synapse:syn789',
      current: true
    }]
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const me=["Demo","ManyItems"];export{o as Demo,l as ManyItems,me as __namedExportsOrder,ce as default};
