import{j as m}from"./jsx-runtime-v-CcEzRb.js";import{E as l}from"./ExitToApp-ce5JwiWL.js";import{L as s}from"./LoginAwareButton-BuoU0xvW.js";import"./index-DF-TOXwj.js";import"./iframe-Ck7IJ420.js";import"./createTheme-CKxaABez.js";import"./createSvgIcon-B_uio1Qu.js";import"./createSvgIcon-DLcyUkBI.js";import"./DefaultPropsProvider-CLNAjcgO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-BHEoci6u.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useForkRef-HrLZAw1Q.js";import"./useEventCallback-Dqg8r-2E.js";import"./useId-C-ekwKxL.js";import"./useControlled-Du8O03uu.js";import"./useIsFocusVisible-ClFSTf5X.js";import"./useTimeout-DSwRVM_E.js";import"./useFiles-Dg22cr_p.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-BL46kxFd.js";import"./OrientationBanner-DaBQ1wQC.js";import"./index-BhZra2zu.js";import"./spreadSx-CwcO6WA9.js";import"./react-DY4l1kQF.js";import"./FullWidthAlert-B7z3Zpcy.js";import"./Alert-CGNd2cjt.js";import"./resolveComponentProps-Dbo3c2Rm.js";import"./isHostComponent-DVu5iVWx.js";import"./Close-DESapESh.js";import"./IconButton-Czp9fOJS.js";import"./ButtonBase-D1FCadF9.js";import"./TransitionGroupContext-CqGhktck.js";import"./Paper-CxulbT0O.js";import"./Stack-C-5_NicX.js";import"./getThemeProps-Cz1tfoEg.js";import"./useTheme-Cw717heW.js";import"./Box-C151VSyT.js";import"./AlertTitle-CDDM5S7t.js";import"./Typography-Dv8d3d0K.js";import"./useTheme-CXQbBQv0.js";import"./Grow-DA-uXJ7J.js";import"./index-DLrHSQNQ.js";import"./index-BrGjyCPj.js";import"./utils-C_Khsrsh.js";import"./ClickAwayListener-BkV76s-w.js";import"./Tooltip-BGEWhPhD.js";import"./index-CdC_zZ47.js";import"./Popper-DrxS9Kfi.js";import"./Button-GBwXY7dn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-cmgOgxs2.js";import"./utils-D3V1hKlA.js";import"./Link-Ck5KtLZ5.js";import"./Collapse-DWBJ_Cvl.js";import"./isNil-DFyqHzIg.js";import"./_Uint8Array-Du7czIyf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-KhxvdvDF.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dx1pfhTR.js";import"./_getTag-D6cd-bWi.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLBjHFS9.js";import"./Skeleton-Cfx67XJi.js";import"./inputBaseClasses-B_9PRdoJ.js";import"./calculateFriendlyFileSize-D9eWZJY0.js";import"./CheckCircleTwoTone-CiPdEZmI.js";import"./InfoTwoTone-GTYfYWDz.js";import"./useMutation-B9X43rdd.js";import"./isEqual-9ljHnP7Y.js";import"./dayjs.min-BolHz43I.js";import"./chunk-AYJ5UCUI-CKomAHZY.js";import"./cloneDeep-CLjt8ka6.js";import"./_initCloneObject-CnDAhYwq.js";import"./merge-BZOFHhHs.js";import"./identity-DKeuBCMA.js";const Oo={title:"UI/LoginAwareButton",component:s,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},r={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:m.jsx(l,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var t,e,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
