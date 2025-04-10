import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{t as k}from"./StringUtils-Cm4tp8FJ.js";import{I as y}from"./IconSvg-vbjE1Wpb.js";import{B as g}from"./Breadcrumbs-CReMoOgv.js";import{T as h}from"./Tooltip-BN1O7Byi.js";import{T as F}from"./Typography-u5-eOh5K.js";import{L as v}from"./Link-kli9SxON.js";import"./index-Dl6G-zuu.js";import"./VerificationSubmission-D0JvCzU5.js";import"./createSvgIcon-IuIKk-AJ.js";import"./createTheme-DCAEEeQ9.js";import"./index-GEGPABih.js";import"./styled-GqwmQbHR.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-C2nLQS7p.js";import"./LayersTwoTone-fKfzxiPS.js";import"./ErrorOutlined-BKx_L9lY.js";import"./GetAppTwoTone-CD3TgP2w.js";import"./InfoOutlined-DpeT4h8X.js";import"./DeleteTwoTone-XAGzVgvj.js";import"./CheckCircleTwoTone-CDfc8b31.js";import"./ButtonBase-CWW9SwzN.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useForkRef-CEBgoE3Z.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Grow-DdGCipi8.js";import"./mergeSlotProps-D-cfru4O.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BIzb42Jq.js";import"./utils-BUDe8ykH.js";import"./index-pKvUPVqT.js";import"./ownerDocument-DW-IO8s5.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";const D=32;function H(){return t.jsx(y,{icon:"chevronRight",sx:{color:"grey.500"}})}const b={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},S={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function a(r){const{items:f}=r;return t.jsx(g,{separator:t.jsx(H,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:b,children:f.map((n,s)=>{const i=k(n.text,D),C=i!==n.text?n.text:null;return t.jsx(h,{title:C,placement:"top",children:t.jsx(F,{variant:"breadcrumb1",children:n.current?i:t.jsx(v,{href:n.href,onClick:n.onClick,underline:"hover",sx:S,children:i},s)})},s)})})}try{a.displayName="EntityPageBreadcrumbs",a.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const ie={title:"Synapse/EntityPage/Breadcrumb",component:a,render:r=>t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx(a,{items:[],...r})]})},e=r=>{r.preventDefault()},o={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"Synapse:syn789",current:!0}]}},l={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const se=["Demo","ManyItems"];export{o as Demo,l as ManyItems,se as __namedExportsOrder,ie as default};
