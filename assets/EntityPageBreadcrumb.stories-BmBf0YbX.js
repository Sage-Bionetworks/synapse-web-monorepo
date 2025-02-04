import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{I as k}from"./IconSvg-BZqOACa5.js";import{t as y}from"./StringUtils-CkZesiyJ.js";import{B as g}from"./Breadcrumbs-EX5SDnKj.js";import{T as h}from"./Tooltip-DOWgCEwD.js";import{T as F}from"./Typography-NAJ1jGoo.js";import{L as v}from"./Link-BXmnhkxu.js";import"./index-Dl6G-zuu.js";import"./createSvgIcon-CARPmhEq.js";import"./createTheme-CiCSa2mH.js";import"./index-GEGPABih.js";import"./styled-CGsSw8UJ.js";import"./spreadSx-CwcO6WA9.js";import"./LayersTwoTone-wgKYXiHv.js";import"./ErrorOutlined-wDiSMC21.js";import"./GetAppTwoTone-hKCW4qYY.js";import"./InfoOutlined-d87psnGe.js";import"./DeleteTwoTone-NCL1DKq0.js";import"./CheckCircleTwoTone-BBYOrcPX.js";import"./VerificationSubmission-CjmU3lv6.js";import"./ButtonBase-BtHCltnO.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useForkRef-CEBgoE3Z.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Grow-8_BQPAWr.js";import"./mergeSlotProps-B0sAykN9.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BIzb42Jq.js";import"./utils-D1_9yZbw.js";import"./index-CBeLH2jy.js";import"./ownerDocument-DW-IO8s5.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";const D=32;function H(){return t.jsx(k,{icon:"chevronRight",sx:{color:"grey.500"}})}const b={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},S={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function a(r){const{items:f}=r;return t.jsx(g,{separator:t.jsx(H,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:b,children:f.map((n,s)=>{const i=y(n.text,D),C=i!==n.text?n.text:null;return t.jsx(h,{title:C,placement:"top",children:t.jsx(F,{variant:"breadcrumb1",children:n.current?i:t.jsx(v,{href:n.href,onClick:n.onClick,underline:"hover",sx:S,children:i},s)})},s)})})}try{a.displayName="EntityPageBreadcrumbs",a.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const ae={title:"Synapse/EntityPage/Breadcrumb",component:a,render:r=>t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx(a,{items:[],...r})]})},e=r=>{r.preventDefault()},o={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"Synapse:syn789",current:!0}]}},l={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const ie=["Demo","ManyItems"];export{o as Demo,l as ManyItems,ie as __namedExportsOrder,ae as default};
