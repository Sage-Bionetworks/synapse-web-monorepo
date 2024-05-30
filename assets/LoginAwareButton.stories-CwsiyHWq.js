import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{d as h}from"./ExitToApp-D5jU-Qf5.js";import{L as i}from"./LoginAwareButton-cOCBlU1a.js";import{S as u,a as f}from"./SynapseClient-Ihq4xrvb.js";import"./index-Dl6G-zuu.js";import"./createTheme-CwlmBDro.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-DMoHWj5j.js";import"./createSvgIcon-Ci5IVFvF.js";import"./createSvgIcon-BYNyJbGL.js";import"./styled-OgyJf9MH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useForkRef-CEBgoE3Z.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-DAcuSkv2.js";import"./Grow-DYov3NPi.js";import"./mergeSlotProps-DHTQkAbv.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D1_ZHIBm.js";import"./utils-C1pLSGi5.js";import"./inheritsLoose-B7h9gheN.js";import"./TransitionGroupContext-DGN18uA0.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./react-router-dom-jxpWjuGz.js";import"./tiny-invariant-CopsF_GD.js";import"./SynapseConstants-BVYQRCsB.js";import"./OrientationBanner-BV5RFxzC.js";import"./FullWidthAlert-xeBFwHL5.js";import"./Alert-HJYNNEvY.js";import"./Paper-BWoP1bRz.js";import"./IconButton-CgTC7RgJ.js";import"./ButtonBase-5SeL_6IU.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Stack-CkbmjR2j.js";import"./Box-DRdN2jdb.js";import"./AlertTitle-DKiwjjrh.js";import"./Typography-B88_J_TK.js";import"./ClickAwayListener-BnMSRy2k.js";import"./Tooltip-CYVQ1vhC.js";import"./index-aEXBT5Ni.js";import"./Button-mb55Lwfk.js";import"./getEndpoint-CjoHA800.js";import"./index-S3N2_v0E.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-sybcF8uh.js";import"./CheckCircleTwoTone-h9GSy5KG.js";import"./colorManipulator-CXx1BTzE.js";import"./inputBaseClasses-DUreQxsm.js";import"./Fade-BNGotgqy.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./Link-EkQ0dGSu.js";import"./_getTag-B6zWmB6G.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";const Ce={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o.jsx(u,{children:n=>o.jsx(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o.jsx(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o.jsx(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const we=["Register","Leave"];export{t as Leave,e as Register,we as __namedExportsOrder,Ce as default};
