import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-84221ae4.js";import{L as i}from"./LoginAwareButton-e8224724.js";import{a as u,b as f}from"./SynapseClient-171f0a1b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-5541547e.js";import"./createSvgIcon-c04c1e3c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./styled-0d0c058b.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-08f54e3c.js";import"./Grow-abebdd1c.js";import"./index-8ce4a492.js";import"./useTheme-48a0a3fd.js";import"./utils-a7612588.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-090e09f4.js";import"./SynapseConstants-d7ecf847.js";import"./OrientationBanner-64c90f6a.js";import"./FullWidthAlert-ed39f490.js";import"./AlertTitle-1c4986af.js";import"./Paper-c5bb6f3a.js";import"./IconButton-055a3ecb.js";import"./ButtonBase-89336bd6.js";import"./emotion-react.browser.esm-a1e35fdb.js";import"./assertThisInitialized-081f9914.js";import"./Typography-bbc222e1.js";import"./extendSxProp-32377841.js";import"./Stack-b1aaecb6.js";import"./Box-079b1034.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-ada0ed7d.js";import"./Button-6910d769.js";import"./getEndpoint-ac94413e.js";import"./Link-c55ec6e2.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-a72e35ba.js";import"./inputBaseClasses-2d1e355f.js";import"./Fade-8ab202b4.js";const le={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const me=["Register","Leave"];export{t as Leave,e as Register,me as __namedExportsOrder,le as default};
//# sourceMappingURL=LoginAwareButton.stories-537c80c3.js.map
