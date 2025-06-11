import{j as m}from"./jsx-runtime-DAaBWb6T.js";import{E as l}from"./ExitToApp-Bje8oP3Z.js";import{L as s}from"./LoginAwareButton-BLhDoq-2.js";import"./index-Xf1O9ikp.js";import"./iframe-B_m65hDw.js";import"./createTheme-BPsmSStf.js";import"./createSvgIcon-CYlzGw9z.js";import"./createSvgIcon-DVx6_utu.js";import"./DefaultPropsProvider-DUU6Afn6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-Dm5yl87k.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useForkRef-WI0T7G2k.js";import"./useEventCallback-73R0Cdtm.js";import"./useId-ByR0Yxjm.js";import"./useControlled-CupxzkdF.js";import"./useIsFocusVisible-Dn-kQzBe.js";import"./useTimeout-z16zSBtj.js";import"./useFiles-BKBPcS9M.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-BXkC6V3M.js";import"./OrientationBanner-Bt5KXMld.js";import"./index-CieDzUgj.js";import"./spreadSx-CwcO6WA9.js";import"./react-DiYhiNSX.js";import"./FullWidthAlert-D9puXSMj.js";import"./Alert-CUF8LNAO.js";import"./resolveComponentProps-KJNM2QOM.js";import"./isHostComponent-DVu5iVWx.js";import"./Close-DxKhXCXb.js";import"./IconButton-B14I6JZ-.js";import"./ButtonBase-DbIQbHcr.js";import"./TransitionGroupContext-BaEufJrg.js";import"./Paper-C2wh6oGd.js";import"./Stack-D6_yLpjr.js";import"./getThemeProps-By9ePiKq.js";import"./useTheme-Dep3Rwvi.js";import"./Box-DNeDBxyL.js";import"./AlertTitle-Dza9sH2Z.js";import"./Typography-BPIqdMo0.js";import"./useTheme-BhvIEHTS.js";import"./Grow-CgBPa8pa.js";import"./index-DuBLUsaX.js";import"./index-DwjutXdk.js";import"./utils-DliwND9M.js";import"./ClickAwayListener-MoU-q8dh.js";import"./Tooltip-C5shgk-b.js";import"./index-DFaDYC1h.js";import"./Popper-BQ1y8daP.js";import"./Button-DHXbStV7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-B5vmFQja.js";import"./utils-MZ8GUwUF.js";import"./Link-BDB2c8Gp.js";import"./Collapse-B3JvYKsm.js";import"./isNil-CR6lfaE1.js";import"./_Uint8Array-BOx5P9Xc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BiKz2sgZ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B_rVxBBn.js";import"./_getTag-QLWgiDxt.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bfw_JdGm.js";import"./Skeleton-BeDwOILI.js";import"./inputBaseClasses-B5hzMWUB.js";import"./calculateFriendlyFileSize-B-7MNgb2.js";import"./CheckCircleTwoTone-BiiCvHDT.js";import"./InfoTwoTone-C5a1d32_.js";import"./useMutation-B3eiPWdA.js";import"./isEqual-Bl4BOS8c.js";import"./dayjs.min-B3_BjScJ.js";import"./chunk-AYJ5UCUI-DbD2EPuZ.js";import"./cloneDeep-HsP7Or5O.js";import"./_initCloneObject-T_9F4B_P.js";import"./merge-DiosaRoA.js";import"./identity-DKeuBCMA.js";const Oo={title:"UI/LoginAwareButton",component:s,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},r={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:m.jsx(l,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var t,e,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var n,p,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(p=r.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const Uo=["Register","Leave"];export{r as Leave,o as Register,Uo as __namedExportsOrder,Oo as default};
