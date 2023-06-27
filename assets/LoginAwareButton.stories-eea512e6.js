import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-d324ff0a.js";import{L as i}from"./LoginAwareButton-8386ab4c.js";import{j as u,k as f}from"./SynapseClient-87b5d960.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-12346db3.js";import"./createSvgIcon-e7cd5941.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./styled-6ec5f85d.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-08f54e3c.js";import"./Grow-93737182.js";import"./index-8ce4a492.js";import"./useTheme-9d382341.js";import"./utils-67eec175.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-53341d48.js";import"./SynapseConstants-46689190.js";import"./OrientationBanner-892f3bb7.js";import"./FullWidthAlert-1b71408b.js";import"./AlertTitle-ed62ac3d.js";import"./Paper-586cb0df.js";import"./IconButton-2455b4de.js";import"./ButtonBase-43867210.js";import"./emotion-react.browser.esm-b991c11c.js";import"./assertThisInitialized-081f9914.js";import"./Typography-65c9d67d.js";import"./extendSxProp-fe165b74.js";import"./Stack-f176d42e.js";import"./Box-3a3e81db.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-add08016.js";import"./Button-ff2bc4b7.js";import"./getEndpoint-ac94413e.js";import"./Link-a20b00c0.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-108bcaf3.js";import"./inputBaseClasses-bfe9dd78.js";import"./Fade-fdeca465.js";const le={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=LoginAwareButton.stories-eea512e6.js.map
