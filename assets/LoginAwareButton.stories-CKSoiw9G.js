import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{d as h}from"./ExitToApp-Bt3pc5UB.js";import{L as i}from"./LoginAwareButton-DDOrahbA.js";import{S as u,a as f}from"./SynapseClient-Dy1u4bFY.js";import"./index-Dl6G-zuu.js";import"./createTheme-DFSTUSmt.js";import"./index-GEGPABih.js";import"./createSvgIcon-C_536t6A.js";import"./createSvgIcon-gkOuU5-G.js";import"./styled-D9wW3ABP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useForkRef-CEBgoE3Z.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-DAcuSkv2.js";import"./Grow-lFU1cKdF.js";import"./mergeSlotProps-deWJORir.js";import"./isHostComponent-DVu5iVWx.js";import"./index-B6qzg4VC.js";import"./utils-Bdp_oNP4.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./react-router-dom-CjeI40CT.js";import"./tiny-invariant-CopsF_GD.js";import"./SynapseConstants-Jt5AeKll.js";import"./OrientationBanner-D9iiRUAg.js";import"./FullWidthAlert-Q7pb-Dsc.js";import"./Alert-Aa0bm5Nm.js";import"./Paper-6hBhi2Vr.js";import"./IconButton-CLoAcDX9.js";import"./ButtonBase-BgDXtZj-.js";import"./Stack-D3AEdRlD.js";import"./Box-DRYT9rh3.js";import"./AlertTitle-DKLb405u.js";import"./Typography-DgBbIcOX.js";import"./ClickAwayListener-5odGQiyi.js";import"./Tooltip-Drr3vXNI.js";import"./index-hJhP8EJR.js";import"./Button-CLkrjdQe.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./index-CIIvWsNs.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-BOGoGeNw.js";import"./CheckCircleTwoTone-U_UPMvHV.js";import"./colorManipulator-2ZEM0eRC.js";import"./inputBaseClasses-ZfVcQiUT.js";import"./Fade-Bhxuafx5.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./Link-Cl5bQMMR.js";import"./_getTag-BK1szWWC.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";const xe={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o.jsx(u,{children:n=>o.jsx(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o.jsx(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o.jsx(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ve=["Register","Leave"];export{t as Leave,e as Register,ve as __namedExportsOrder,xe as default};
