import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-011cacfe.js";import{L as i}from"./LoginAwareButton-d8c13e30.js";import{S as u,a as f}from"./SynapseClient-48102fa8.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-8160d2ba.js";import"./createSvgIcon-ad67928b.js";import"./styled-708eb06f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-08f54e3c.js";import"./Grow-2ef26a27.js";import"./index-8ce4a492.js";import"./useTheme-8e3749c8.js";import"./utils-4b9b9c32.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-cb007307.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-fd8b2600.js";import"./OrientationBanner-a68ba799.js";import"./FullWidthAlert-92257a48.js";import"./AlertTitle-b21ffb10.js";import"./Paper-7e3a1b51.js";import"./IconButton-c6432c64.js";import"./ButtonBase-e5aaf94c.js";import"./emotion-react.browser.esm-df0ef9f3.js";import"./assertThisInitialized-081f9914.js";import"./Typography-661a732d.js";import"./extendSxProp-df3a54f3.js";import"./Stack-54f6c305.js";import"./Box-9f4bb844.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-b7fc1fa3.js";import"./Button-8994ccb5.js";import"./getEndpoint-ac94413e.js";import"./Link-f7a9268e.js";import"./_getTag-376e1527.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-9226ff35.js";import"./inputBaseClasses-5ec058ed.js";import"./Fade-7b562d23.js";const de={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=LoginAwareButton.stories-d4bd994d.js.map
