import{j as o}from"./jsx-runtime-9dc53467.js";import{d as h}from"./ExitToApp-1a780b73.js";import{L as i}from"./LoginAwareButton-aa918151.js";import{S as u,a as f}from"./ApplicationSessionManager-7024b1a7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime_commonjs-proxy-cf9930ed.js";import"./createSvgIcon-b657d91b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createTheme-d609db80.js";import"./styled-bb145c31.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-8feb2ebf.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-bce4c331.js";import"./Grow-2f9de6a4.js";import"./index-d3ea75b5.js";import"./useTheme-a28bb397.js";import"./utils-19a63403.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useIsFocusVisible-18cd238e.js";import"./react-router-dom-ff0f3c68.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-0078d114.js";import"./OrientationBanner-450e6652.js";import"./FullWidthAlert-149d754f.js";import"./Alert-fd45ce28.js";import"./Paper-35c12a01.js";import"./IconButton-9b53499e.js";import"./ButtonBase-0719e676.js";import"./emotion-react.browser.esm-ca9fe929.js";import"./assertThisInitialized-081f9914.js";import"./Stack-9fb6382b.js";import"./extendSxProp-7fb4e09f.js";import"./Box-f6adec47.js";import"./AlertTitle-9139c2ff.js";import"./Typography-f217f607.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-248f4fe4.js";import"./Button-065a21d4.js";import"./getEndpoint-ac94413e.js";import"./tinycolor-ea5bcbb6.js";import"./InfoTwoTone-aaf78040.js";import"./CheckCircleTwoTone-6570b572.js";import"./inputBaseClasses-8d4a6788.js";import"./Fade-05777e49.js";import"./Link-5cdd275a.js";import"./_getTag-b87d0382.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-4a1b1a67.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";const xe={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Ce=["Register","Leave"];export{t as Leave,e as Register,Ce as __namedExportsOrder,xe as default};
