import{j as o}from"./jsx-runtime-095bf462.js";import{d as h}from"./ExitToApp-0760159a.js";import{L as i}from"./LoginAwareButton-0a240e1d.js";import{S as u,a as f}from"./SynapseClient-b4c2fe2f.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime_commonjs-proxy-bc155550.js";import"./createSvgIcon-90be9181.js";import"./styled-a48939ef.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-f2aa3d66.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-3ce2dffc.js";import"./Grow-cb3cd8aa.js";import"./index-8ce4a492.js";import"./useTheme-60e5792f.js";import"./utils-4f6567de.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./react-router-dom-317fcf09.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-935f39ee.js";import"./OrientationBanner-cdfc64df.js";import"./FullWidthAlert-1b1b4f63.js";import"./AlertTitle-36b934fa.js";import"./Paper-169126a7.js";import"./IconButton-76e05815.js";import"./ButtonBase-895fb1ab.js";import"./emotion-react.browser.esm-69ef451a.js";import"./assertThisInitialized-081f9914.js";import"./Typography-039a8d28.js";import"./extendSxProp-fc750aff.js";import"./Stack-3b05645e.js";import"./Box-f53d00dc.js";import"./ClickAwayListener-e5c35437.js";import"./Tooltip-294ff439.js";import"./Button-3631c64e.js";import"./getEndpoint-ac94413e.js";import"./Link-9ced689e.js";import"./_getTag-f412bed9.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-47c8dffe.js";import"./index-58d3fd43.js";import"./InfoTwoTone-7af4ed61.js";import"./CheckCircleTwoTone-71d1bb57.js";import"./inputBaseClasses-2b9678c1.js";import"./Fade-06c2e3dd.js";const he={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=LoginAwareButton.stories-6b298f49.js.map
