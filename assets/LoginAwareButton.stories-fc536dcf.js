import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-152ff0ea.js";import{L as i}from"./LoginAwareButton-a35dd775.js";import{S as u,a as f}from"./SynapseClient-263d1708.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-19ec7b09.js";import"./createSvgIcon-c69fbb93.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-17e9e47b.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-3ce2dffc.js";import"./Grow-0db08d4d.js";import"./index-8ce4a492.js";import"./useTheme-e16afdbe.js";import"./utils-02ec0d60.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-962b723d.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-0daa3b0b.js";import"./OrientationBanner-6f1c542d.js";import"./FullWidthAlert-e628333c.js";import"./AlertTitle-aed9db43.js";import"./Paper-2a5a67d3.js";import"./IconButton-5cd80e83.js";import"./ButtonBase-4975ddb0.js";import"./emotion-react.browser.esm-39b3de80.js";import"./assertThisInitialized-081f9914.js";import"./Typography-d5f8f357.js";import"./extendSxProp-1c03cb1b.js";import"./Stack-685b29ad.js";import"./Box-fd1c0045.js";import"./ClickAwayListener-e5c35437.js";import"./Tooltip-9098414d.js";import"./Button-24da439b.js";import"./getEndpoint-ac94413e.js";import"./Link-a60839ec.js";import"./_getTag-40b07ccb.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-8c636771.js";import"./inputBaseClasses-42f125b6.js";import"./Fade-4732825d.js";const he={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ue=["Register","Leave"];export{t as Leave,e as Register,ue as __namedExportsOrder,he as default};
//# sourceMappingURL=LoginAwareButton.stories-fc536dcf.js.map
