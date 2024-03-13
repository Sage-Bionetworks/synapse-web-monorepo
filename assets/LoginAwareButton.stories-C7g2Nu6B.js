import{j as o}from"./jsx-runtime-CKrituN3.js";import{d as h}from"./ExitToApp-De2wiZVL.js";import{L as i}from"./LoginAwareButton-BCKALjXo.js";import{S as u,a as f}from"./ApplicationSessionManager-H255UMPB.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createSvgIcon-B6xnuJ72.js";import"./createSvgIcon-hKF-axwl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./createTheme-BmyBSwiD.js";import"./styled-CpvAj9Jd.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useForkRef-BEI5gptS.js";import"./ownerWindow-PUvYI-j5.js";import"./isHostComponent-BHK9_qiJ.js";import"./isMuiElement-BxNAcTwJ.js";import"./Grow-DI9-8Eyf.js";import"./index-BtM5VmRH.js";import"./useTheme-BsCSKhvJ.js";import"./utils-BhlLjzQ2.js";import"./inheritsLoose-B7h9gheN.js";import"./TransitionGroupContext-CSiky9Ms.js";import"./useIsFocusVisible-YID51Ly0.js";import"./react-router-dom-qMym4z5q.js";import"./tiny-invariant-CopsF_GD.js";import"./SynapseConstants-BgUUD4xl.js";import"./OrientationBanner-eGM9Gy2i.js";import"./FullWidthAlert-843DPaPD.js";import"./Alert-C_9TnCz2.js";import"./Paper-CypdJUpq.js";import"./IconButton-NUGov2wg.js";import"./ButtonBase-ywJhAmC4.js";import"./emotion-react.browser.esm-BhA2isNO.js";import"./index-DMoHWj5j.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Stack-CHd9FObi.js";import"./extendSxProp-CItG1no9.js";import"./Box-Bs5qirON.js";import"./AlertTitle-Cg6cXOoN.js";import"./Typography-B9IcQwF1.js";import"./ClickAwayListener-XLCmgdgg.js";import"./Tooltip-B3pRd4mi.js";import"./Button-CpzfOSQ4.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-5MzHmxC_.js";import"./CheckCircleTwoTone-Bm9Y8dkw.js";import"./inputBaseClasses-gtOOSRs4.js";import"./Fade-BI7F9iy4.js";import"./index-C-UbkUMQ.js";import"./dayjs.min-BaCjP-cF.js";import"./index-Dk74W0Oi.js";import"./Link-BtokOTIY.js";import"./_getTag-CQLY2zcD.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";const Ce={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o.jsx(u,{children:n=>o.jsx(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o.jsx(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o.jsx(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
