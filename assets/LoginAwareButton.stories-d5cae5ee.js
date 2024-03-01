import{j as o}from"./jsx-runtime-9dc53467.js";import{d as h}from"./ExitToApp-d0319e57.js";import{L as i}from"./LoginAwareButton-32730393.js";import{S as u,a as f}from"./ApplicationSessionManager-5437b60d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime_commonjs-proxy-00bc9f93.js";import"./createSvgIcon-396e3e24.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-3c6f4d83.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-8feb2ebf.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-bce4c331.js";import"./Grow-c431c788.js";import"./index-d3ea75b5.js";import"./useTheme-e79ecbc0.js";import"./utils-6fa73630.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useIsFocusVisible-18cd238e.js";import"./react-router-dom-b0a8b777.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-eb00dc31.js";import"./OrientationBanner-a1ca5cdb.js";import"./FullWidthAlert-706fe840.js";import"./Alert-c3fe2b05.js";import"./Paper-411d859b.js";import"./IconButton-f820fa46.js";import"./ButtonBase-8587e55b.js";import"./emotion-react.browser.esm-5fddd3df.js";import"./assertThisInitialized-081f9914.js";import"./Stack-4eda368b.js";import"./extendSxProp-1372051e.js";import"./Box-8faf86fd.js";import"./AlertTitle-aeea0d59.js";import"./Typography-1d068b0b.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-801f2a9c.js";import"./Button-33299b2c.js";import"./getEndpoint-ac94413e.js";import"./InfoTwoTone-b17047a2.js";import"./CheckCircleTwoTone-c37d81c7.js";import"./inputBaseClasses-034b6b96.js";import"./Fade-240af196.js";import"./Link-6ae0d01e.js";import"./_getTag-559aebd9.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-41d58426.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";const ge={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
