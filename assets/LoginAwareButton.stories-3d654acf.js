import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-74935d2f.js";import{L as i}from"./LoginAwareButton-3b0dd394.js";import{S as u,a as f}from"./SynapseClient-07cb66ce.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-009efe56.js";import"./createSvgIcon-efa5fd2e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-81e3612a.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-3ce2dffc.js";import"./Grow-080f23da.js";import"./index-8ce4a492.js";import"./useTheme-533dafd0.js";import"./utils-b7dab64f.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-fac05b24.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-163777d5.js";import"./OrientationBanner-caa14b37.js";import"./FullWidthAlert-f28d1efb.js";import"./AlertTitle-ce329963.js";import"./Paper-057dfac2.js";import"./IconButton-2a435ef1.js";import"./ButtonBase-84be17da.js";import"./emotion-react.browser.esm-f993d2c2.js";import"./assertThisInitialized-081f9914.js";import"./Typography-214fd772.js";import"./extendSxProp-3a6755c2.js";import"./Stack-db426a61.js";import"./Box-f664662a.js";import"./ClickAwayListener-e5c35437.js";import"./Tooltip-f72372f7.js";import"./Button-f56bbd3a.js";import"./getEndpoint-ac94413e.js";import"./Link-bf67348e.js";import"./_getTag-ed9314eb.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-b7fa358f.js";import"./inputBaseClasses-a1108cc7.js";import"./Fade-275e12f9.js";const de={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=LoginAwareButton.stories-3d654acf.js.map
