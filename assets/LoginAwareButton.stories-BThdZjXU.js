import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{d as h}from"./ExitToApp-Cro1GUw_.js";import{L as i}from"./LoginAwareButton-CAWstA19.js";import{S as u,a as f}from"./SynapseClient-_diANZ_z.js";import"./index-Dl6G-zuu.js";import"./createTheme-CcAD2pPO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DXXbLLGH.js";import"./index-GEGPABih.js";import"./createSvgIcon-BzxSCoyy.js";import"./createSvgIcon-DSqIFKhr.js";import"./styled-Sx1jgj-B.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useForkRef-CEBgoE3Z.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-DAcuSkv2.js";import"./Grow-DK1F46qr.js";import"./mergeSlotProps-BW52tAYO.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D1_ZHIBm.js";import"./utils-DkbdKabZ.js";import"./inheritsLoose-DR8r8Ogv.js";import"./TransitionGroupContext-DGN18uA0.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./react-router-dom-Dj7zgz7_.js";import"./tiny-invariant-CopsF_GD.js";import"./SynapseConstants-D_Oa3fs5.js";import"./OrientationBanner-BBh8JRgP.js";import"./FullWidthAlert-Q8yalkva.js";import"./Alert-C43IQeyU.js";import"./Paper-BCUpbPXs.js";import"./IconButton-DYXdVn2C.js";import"./ButtonBase-DE7aKxis.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Stack-CqpovyXN.js";import"./Box--1V6nYGL.js";import"./AlertTitle-CYZGUJl4.js";import"./Typography-CxCAiHvb.js";import"./ClickAwayListener-BnMSRy2k.js";import"./Tooltip-Drs5efNb.js";import"./index-DgT9Y5QJ.js";import"./Button-DBz2LXAC.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./index-CIIvWsNs.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-B6zWmPbt.js";import"./CheckCircleTwoTone-DPjbEwSO.js";import"./colorManipulator-BNChw7e0.js";import"./inputBaseClasses-DiZSv6oN.js";import"./Fade-BgJxt2ZN.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./Link-kkaQjRHX.js";import"./_getTag-BQOryPI7.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";const we={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o.jsx(u,{children:n=>o.jsx(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o.jsx(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o.jsx(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
