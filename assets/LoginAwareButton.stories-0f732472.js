import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-89585cdf.js";import{L as i}from"./LoginAwareButton-5bc6b2a4.js";import{S as u,a as f}from"./SynapseClient-959d3977.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-57ba7161.js";import"./createSvgIcon-fd8a55dc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-9c91c4fe.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-08f54e3c.js";import"./Grow-426921c3.js";import"./index-8ce4a492.js";import"./useTheme-68d5aa8d.js";import"./utils-6b5ba2e3.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-309da798.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-1ba53034.js";import"./OrientationBanner-ecffb496.js";import"./FullWidthAlert-a85e5287.js";import"./AlertTitle-af39c120.js";import"./Paper-88da9df3.js";import"./IconButton-152addcf.js";import"./ButtonBase-7c3b1b89.js";import"./emotion-react.browser.esm-8f02f344.js";import"./assertThisInitialized-081f9914.js";import"./Typography-d16533eb.js";import"./extendSxProp-e5d44a75.js";import"./Stack-c9edc483.js";import"./Box-49321e59.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-6a83a77a.js";import"./Button-c45f00b4.js";import"./getEndpoint-ac94413e.js";import"./Link-fc5d7a73.js";import"./_getTag-861d442f.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-784a445a.js";import"./inputBaseClasses-f05f2ac2.js";import"./Fade-a19bf181.js";const de={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false,
    children: 'Register for this Challenge',
    to: '/pathName?key=value#fragment',
    href: '',
    disableElevation: true,
    variant: 'contained',
    color: 'secondary',
    sx: {
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: 'white'
      },
      ':active': {
        color: 'white'
      },
      ':visited': {
        color: 'white'
      }
    },
    replace: false
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    children: 'Leave Challenge',
    onClick: () => {
      alert('Leave Challenge Clicked');
    },
    endIcon: <ExitToAppIcon />,
    variant: 'outlined',
    sx: {
      borderColor: 'white',
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: '#172430',
        borderColor: '#172430'
      }
    },
    replace: false
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const he=["Register","Leave"];export{t as Leave,e as Register,he as __namedExportsOrder,de as default};
//# sourceMappingURL=LoginAwareButton.stories-0f732472.js.map
