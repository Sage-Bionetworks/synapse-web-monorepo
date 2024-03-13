import{j as o}from"./jsx-runtime-CKrituN3.js";import{d as h}from"./ExitToApp-L90TGlBp.js";import{L as i}from"./LoginAwareButton-DxQbviIQ.js";import{S as u,a as f}from"./ApplicationSessionManager-CoKgEkVZ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createTheme-2XtGYoE4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DMoHWj5j.js";import"./createSvgIcon-Bw2L62A9.js";import"./createSvgIcon-ClnqzT54.js";import"./styled-CPWjInoX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useForkRef-BSLA1zlB.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-BxNAcTwJ.js";import"./Grow-DHJeVGyA.js";import"./mergeSlotProps-ih6DGlm4.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BtM5VmRH.js";import"./utils-SU9mu0D7.js";import"./inheritsLoose-B7h9gheN.js";import"./TransitionGroupContext-B1FFUpIO.js";import"./useIsFocusVisible-Chjat8DO.js";import"./react-router-dom-KZfTQnwf.js";import"./tiny-invariant-CopsF_GD.js";import"./SynapseConstants-Dbq7Gtj7.js";import"./OrientationBanner-DFzKDcoJ.js";import"./FullWidthAlert-Dm349vLy.js";import"./Alert-jLvJNeQC.js";import"./Paper-DYLu205z.js";import"./IconButton-DUzhqGqo.js";import"./ButtonBase-xB_9igmm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Stack-wDqeWMTC.js";import"./Box-qzYP1vnN.js";import"./AlertTitle-DGMjNv9d.js";import"./Typography-BhttL55U.js";import"./ClickAwayListener-CVXPLwF5.js";import"./Tooltip-XprEAl00.js";import"./index-CJ-wfEIf.js";import"./Button-BOCcoe4v.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CBfzdnva.js";import"./CheckCircleTwoTone-B5Iaww82.js";import"./colorManipulator-CieAV1Z7.js";import"./inputBaseClasses-DIwNn5yR.js";import"./Fade--kK2ZsE4.js";import"./index-C-UbkUMQ.js";import"./dayjs.min-BIwLhz4I.js";import"./index-Dk74W0Oi.js";import"./Link-BXqr-BaG.js";import"./_getTag-7fqy2l2P.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";const we={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o.jsx(u,{children:n=>o.jsx(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o.jsx(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o.jsx(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Ae=["Register","Leave"];export{t as Leave,e as Register,Ae as __namedExportsOrder,we as default};
