import{j as t}from"./iframe-BE9PbKHz.js";import{B as s}from"./Breadcrumbs-CNqC8Zty.js";import"./index-Chi_LkuB.js";import"./Breadcrumbs-faykygHv.js";const c=32,i={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200","& .MuiLink-root":{color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}},"& .MuiSvgIcon-root":{color:"grey.500"}};function o(n){const{items:l}=n;return t.jsx(s,{items:l,sx:i,maxBreadcrumbLength:c})}try{o.displayName="EntityPageBreadcrumbs",o.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}const x={title:"Synapse/EntityPage/Breadcrumb",component:o,render:n=>t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx(o,{items:[],...n})]})},e=n=>{n.preventDefault()},r={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"Synapse:syn789",current:!0}]}},a={args:{items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const f=["Demo","ManyItems"];export{r as Demo,a as ManyItems,f as __namedExportsOrder,x as default};
