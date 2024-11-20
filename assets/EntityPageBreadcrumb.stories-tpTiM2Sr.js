import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{I as k}from"./IconSvg-CAx3VfBw.js";import{t as y}from"./StringUtils-Bf9G6LS7.js";import{B as g}from"./Breadcrumbs-C1TnWdl3.js";import{T as h}from"./Tooltip-Bt6FmARF.js";import{T as F}from"./Typography-CaL9sKMg.js";import{L as v}from"./Link-B86BngSw.js";import"./index-Cu9bd8lq.js";import"./createSvgIcon-BhV3a4Zr.js";import"./createTheme-CWLQ-DuD.js";import"./index-GEGPABih.js";import"./styled-BNZh1-oq.js";import"./LayersTwoTone-BdLgRYRO.js";import"./ErrorOutlined-T6sjfcxT.js";import"./GetAppTwoTone-mQ-VL1kM.js";import"./InfoOutlined-DlYufPXz.js";import"./DeleteTwoTone-Dev5FGll.js";import"./CheckCircleTwoTone-JZD1d26p.js";import"./RegularExpressions-vjpKT7U4.js";import"./index-BNbykmw2.js";import"./ButtonBase-CE85FUiZ.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useForkRef-Bm_QQ74L.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Grow-BHNGh791.js";import"./mergeSlotProps-CZobtCgD.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BlO3JfGB.js";import"./utils-C9mnvDyn.js";import"./index-fnC48NPc.js";import"./ownerDocument-DW-IO8s5.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";const D=32;function H(){return t.jsx(k,{icon:"chevronRight",sx:{color:"grey.500"}})}const b={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},S={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function a(r){const{items:f}=r;return t.jsx(g,{separator:t.jsx(H,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:b,children:f.map((n,s)=>{const i=y(n.text,D),C=i!==n.text?n.text:null;return t.jsx(h,{title:C,placement:"top",children:t.jsx(F,{variant:"breadcrumb1",children:n.current?i:t.jsx(v,{href:n.href,onClick:n.onClick,underline:"hover",sx:S,children:i},s)})},s)})})}try{a.displayName="EntityPageBreadcrumbs",a.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const ae={title:"Synapse/EntityPage/Breadcrumb",component:a,render:r=>t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx(a,{items:[],...r})]})},e=r=>{r.preventDefault()},o={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"Synapse:syn789",current:!0}]}},l={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
