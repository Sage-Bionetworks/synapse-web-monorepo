import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-Dttd2eA-.js";import{d as s}from"./ToastMessage-BGqT0evB.js";import{R as n,a as t}from"./RequirementItem-BteQbu5V.js";import{P as O}from"./Paper-CvFCa0d1.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-DJF03vT6.js";import"./SynapseConstants-DHm6zyHz.js";import"./OrientationBanner-CEd_08H_.js";import"./index-Dp5GpsUb.js";import"./index-COg4wEFX.js";import"./iframe-dkyN7dEI.js";import"./spreadSx-CwcO6WA9.js";import"./react-DJPd7xe3.js";import"./FullWidthAlert-D308uyri.js";import"./Alert-CrnmS790.js";import"./createTheme-PLUvd-LB.js";import"./DefaultPropsProvider-GBlbFlKV.js";import"./useSlot-CgItUNQr.js";import"./useForkRef-DVG_98-d.js";import"./createSimplePaletteValueFilter-DQAv8etW.js";import"./createSvgIcon-bY3B4qG0.js";import"./Close-CssOFyTt.js";import"./IconButton-BU7f1Bop.js";import"./useTimeout-DsoKzCC_.js";import"./ButtonBase-B-pzCcmV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BOr0l0Up.js";import"./Stack-DIxxvt5K.js";import"./extendSxProp-CLbKWQ-Q.js";import"./getThemeProps-DtRmK1JZ.js";import"./useTheme-CFs5QfCM.js";import"./Box--vhDeXql.js";import"./AlertTitle-O6rhtZBG.js";import"./Typography-CgOlfgGT.js";import"./index-AywcLrDq.js";import"./useTheme-gzy1xqzN.js";import"./ClickAwayListener-D7ZeQ8Mu.js";import"./getReactElementRef-BFjo364g.js";import"./index-HXW73S9Q.js";import"./index-5aEMNfv4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C9D6P-BJ.js";import"./Tooltip-Cc1glevZ.js";import"./index-DonYfH0W.js";import"./useControlled-FM6R-wlx.js";import"./Popper-CVAa6830.js";import"./Button-BEK3yIRk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-DY1iTZwT.js";import"./QueryClientProvider-BNCmLqU6.js";import"./Link-CPDLC02_.js";import"./Collapse-U-DJwYCj.js";import"./_baseUniq-KIcBkx8v.js";import"./_Uint8Array-BPlFN3D7.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Efl7M4U8.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CHpGGJyd.js";import"./isEqual-BmRicIYy.js";import"./merge-ChNrRbcj.js";import"./_initCloneObject-YjrnLSjM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cb3fWTVd.js";import"./inputBaseClasses-CyYVaNtx.js";import"./calculateFriendlyFileSize-DuKWcJdY.js";import"./CheckCircleTwoTone-1ZsT9niW.js";import"./InfoTwoTone-D-MOG8J1.js";import"./useMutation-DwgNcG58.js";import"./dayjs.min-s3rhTWCS.js";import"./chunk-AYJ5UCUI-kgQmGlEV.js";import"./cloneDeep-ByISa9ma.js";import"./Skeleton-BSFWdzll.js";import"./SkeletonButton-DX06bCF0.js";import"./SkeletonInlineBlock-B9VPV2lC.js";import"./SkeletonTable-B1jFu4GY.js";import"./times-OMlycRqC.js";import"./toInteger-B4tjtsNz.js";import"./isSymbol-Ckv-tGmk.js";import"./SkeletonParagraph-g6BMdEem.js";import"./uniqueId-w9iqvHJA.js";import"./toString-DqK_lmuS.js";import"./CSSTransition-Bwj-SnzR.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CzvBR1dH.js";import"./Avatar-NgWRCwkO.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
