import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{d as h}from"./ExitToApp-BcvQd1LT.js";import{L as i}from"./LoginAwareButton-CRui_ZLZ.js";import{S as u,a as f}from"./SynapseClient-Dbc8tFdW.js";import"./index-Dl6G-zuu.js";import"./createTheme-Dtzk88yv.js";import"./index-GEGPABih.js";import"./createSvgIcon-DagfUtF0.js";import"./createSvgIcon-eMxRw33w.js";import"./styled-BEXTB4Ho.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useForkRef-CEBgoE3Z.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-DAcuSkv2.js";import"./Grow-CspkvTld.js";import"./mergeSlotProps-Dv5GaMzt.js";import"./isHostComponent-DVu5iVWx.js";import"./index-B6qzg4VC.js";import"./utils-C59yjAo_.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./react-router-dom-B3XW7H2s.js";import"./tiny-invariant-CopsF_GD.js";import"./SynapseConstants-Br5dMy50.js";import"./OrientationBanner-x6ohh6pv.js";import"./FullWidthAlert-jkkWXtk2.js";import"./Alert-C2wXqEQ3.js";import"./Paper-B2c6t1gu.js";import"./IconButton-cf2NThiY.js";import"./ButtonBase-CI9J1-uo.js";import"./Stack-DkXTQwBs.js";import"./Box-BlHPf8tq.js";import"./AlertTitle-CmC2H_AO.js";import"./Typography-qpntpuFp.js";import"./ClickAwayListener-5odGQiyi.js";import"./Tooltip-BZeYxe44.js";import"./index-Cvyar9fI.js";import"./Button-jcEr4EiK.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./index-CIIvWsNs.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CxHU0jl8.js";import"./CheckCircleTwoTone-BB9W7Hyp.js";import"./colorManipulator-D5JWZs3m.js";import"./inputBaseClasses-DcVJRUx_.js";import"./Fade-DX0GMli6.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./Link-DhsldE67.js";import"./_getTag-eW65qzo1.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";const xe={title:"UI/LoginAwareButton",component:i,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}},render:r=>{const d=r.isAuthenticated;return delete r.isAuthenticated,o.jsx(u,{children:n=>o.jsx(f,{synapseContext:{...n,accessToken:d?n.accessToken??"fake token":void 0},children:o.jsx(i,{...r})})})}},e={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},t={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:o.jsx(h,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
