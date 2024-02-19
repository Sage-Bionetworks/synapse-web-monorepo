import{j as o}from"./jsx-runtime-9dc53467.js";import{d as h}from"./ExitToApp-d3f91715.js";import{L as i}from"./LoginAwareButton-a59fcd45.js";import{S as u,a as f}from"./SynapseClient-7700f4cc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime_commonjs-proxy-dd7a2d35.js";import"./createSvgIcon-397996e3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-87b6157a.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-8feb2ebf.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-bce4c331.js";import"./Grow-08403985.js";import"./index-d3ea75b5.js";import"./useTheme-58bb7d64.js";import"./utils-830530e5.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./react-router-dom-720d107a.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-c93e8ee4.js";import"./OrientationBanner-c0eacdfc.js";import"./FullWidthAlert-77167a31.js";import"./Alert-f631f725.js";import"./Paper-625f2e68.js";import"./IconButton-30f6f351.js";import"./ButtonBase-651ec7a9.js";import"./emotion-react.browser.esm-6130a288.js";import"./assertThisInitialized-081f9914.js";import"./Stack-eb200119.js";import"./extendSxProp-c4113ea3.js";import"./Box-737945d6.js";import"./AlertTitle-38884730.js";import"./Typography-62cfc992.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-e8bd1358.js";import"./Button-a2b8b546.js";import"./getEndpoint-ac94413e.js";import"./InfoTwoTone-bbc735a3.js";import"./CheckCircleTwoTone-8a62494f.js";import"./inputBaseClasses-888452c9.js";import"./Fade-3c4a970e.js";import"./Link-adab3de3.js";import"./_getTag-dcd38d76.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-3a31b023.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";const ge={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ve=["Register","Leave"];export{t as Leave,e as Register,ve as __namedExportsOrder,ge as default};
