import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-5be2ba87.js";import{L as i}from"./LoginAwareButton-88ef4461.js";import{S as u,a as f}from"./SynapseClient-d7646a6f.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-b287d83f.js";import"./createSvgIcon-7fa7efea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-22375f15.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-3ce2dffc.js";import"./Grow-a0d5bea7.js";import"./index-8ce4a492.js";import"./useTheme-cde0f631.js";import"./utils-0cc1eea7.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-ed59795e.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-8475b854.js";import"./OrientationBanner-e18cce1c.js";import"./FullWidthAlert-9e00f859.js";import"./AlertTitle-6e236fcd.js";import"./Paper-9598301d.js";import"./IconButton-005300d9.js";import"./ButtonBase-e9d7809c.js";import"./emotion-react.browser.esm-0e04c803.js";import"./assertThisInitialized-081f9914.js";import"./Typography-43164bc2.js";import"./extendSxProp-8e3bfbb0.js";import"./Stack-4fa57222.js";import"./Box-50261c1d.js";import"./ClickAwayListener-e5c35437.js";import"./Tooltip-8bd5513a.js";import"./Button-d1306030.js";import"./getEndpoint-ac94413e.js";import"./Link-7bf366a7.js";import"./_getTag-71ef705c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-b25a5ea9.js";import"./inputBaseClasses-993f1e72.js";import"./Fade-952926d2.js";const de={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=LoginAwareButton.stories-11a44252.js.map
