import{j as o}from"./jsx-runtime-9dc53467.js";import{d as h}from"./ExitToApp-9f490da3.js";import{L as i}from"./LoginAwareButton-dd197acb.js";import{S as u,a as f}from"./SynapseClient-d7905674.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime_commonjs-proxy-f11936a2.js";import"./createSvgIcon-8a3e2935.js";import"./styled-2fcfc37a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-8feb2ebf.js";import"./ownerWindow-2c76219e.js";import"./isHostComponent-fa76b8d9.js";import"./isMuiElement-bce4c331.js";import"./Grow-241280c4.js";import"./index-d3ea75b5.js";import"./useTheme-76051239.js";import"./utils-bed83364.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./react-router-dom-fd0816e4.js";import"./tiny-invariant-dd7d57d2.js";import"./SynapseConstants-8157454e.js";import"./OrientationBanner-1bd00e8c.js";import"./FullWidthAlert-a8fd2235.js";import"./Alert-a2690b50.js";import"./Paper-699baef2.js";import"./IconButton-64077c25.js";import"./ButtonBase-f4a900e8.js";import"./emotion-react.browser.esm-b6cea713.js";import"./assertThisInitialized-081f9914.js";import"./Stack-69986211.js";import"./extendSxProp-c283072b.js";import"./Box-2044d34a.js";import"./AlertTitle-a34c5fe9.js";import"./Typography-b1f79b20.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-72ca093b.js";import"./Button-8ea9f590.js";import"./getEndpoint-ac94413e.js";import"./InfoTwoTone-c9bbd609.js";import"./CheckCircleTwoTone-b021ad72.js";import"./inputBaseClasses-7a80a621.js";import"./Fade-1b8e1369.js";import"./Link-66bc2a10.js";import"./_getTag-6966e563.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-bd88158d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";const ge={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o(u,{children:n=>o(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=LoginAwareButton.stories-13bc6e49.js.map
