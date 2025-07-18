import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BeAilqal.js";import{d as s}from"./ToastMessage-DCDQMKiF.js";import{R as n,a as t}from"./RequirementItem-_0jKDE14.js";import{P as O}from"./Paper-gLA6iPlf.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-C6AV9Q8a.js";import"./SynapseConstants-WszFjH7H.js";import"./OrientationBanner-hMV47St2.js";import"./index-BU4KNxfc.js";import"./index-ZZTtOf4-.js";import"./iframe-CD_2jMIE.js";import"./spreadSx-CwcO6WA9.js";import"./react-2jvo8p0i.js";import"./FullWidthAlert-DIR8vg_z.js";import"./Alert-ljpEvp4L.js";import"./createTheme-Bf_MdCTh.js";import"./DefaultPropsProvider-w1vijPDc.js";import"./useSlot-pHtyNc2f.js";import"./useForkRef-DlhsxcsI.js";import"./createSimplePaletteValueFilter-CQbNe3ux.js";import"./createSvgIcon-CfjYDsTS.js";import"./Close-DVFB0Dve.js";import"./IconButton-Cqq2e3f-.js";import"./useTimeout-C4L8nwxw.js";import"./ButtonBase-LT684Uv3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bzzjda-U.js";import"./Stack-F5yJDEja.js";import"./extendSxProp-CtY8Dw4j.js";import"./getThemeProps-DmxVk26V.js";import"./useTheme-BFUEu2BR.js";import"./Box-BGUP5juR.js";import"./AlertTitle-BwkJ1jQs.js";import"./Typography-Bv6EJ4dy.js";import"./index-CC1dLL8g.js";import"./useTheme-ClEuG-Ii.js";import"./ClickAwayListener-BuatsOLL.js";import"./getReactElementRef-D8XAVsu7.js";import"./index-BmyKXe-L.js";import"./index-BCxbmZiL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-SIr3PisF.js";import"./Tooltip-CRm_Ie1y.js";import"./index-YMO0rTZa.js";import"./useControlled-DDo6hj5H.js";import"./Popper-Ci3wIbu8.js";import"./Button-XZhgB0d-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-Dt72K2C5.js";import"./QueryClientProvider-BIQBceHN.js";import"./Link-BRhPE3PH.js";import"./Collapse-BUFNs0xv.js";import"./_baseUniq-D5ZIWAC8.js";import"./_Uint8Array-CqzHzfVS.js";import"./isArray-CYCVDk7c.js";import"./_getTag-DMywFZAb.js";import"./isEqual-C3dHO4jk.js";import"./merge-CIDyGqhy.js";import"./_initCloneObject-BNQn2L_G.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJRxMULJ.js";import"./inputBaseClasses-zqjwa2eD.js";import"./calculateFriendlyFileSize-BAoxRKq5.js";import"./CheckCircleTwoTone-CMNhAHbs.js";import"./InfoTwoTone-BSPgIkj6.js";import"./useMutation-2P9e-5l7.js";import"./dayjs.min-BXK7E4Tj.js";import"./chunk-AYJ5UCUI-C3eeMINE.js";import"./cloneDeep-ChQCA-Nl.js";import"./Skeleton-Bz8GaS8V.js";import"./SkeletonButton-B7Sp_HF7.js";import"./SkeletonInlineBlock-BqRDwt-p.js";import"./SkeletonTable-DlybkRiw.js";import"./times-Dkq_15B9.js";import"./toInteger-CIs0VDaD.js";import"./toNumber-B_IG-yqL.js";import"./isSymbol-B0IdxCk1.js";import"./SkeletonParagraph-vNvtue6K.js";import"./uniqueId-DsTB5KFa.js";import"./toString-CdpRanGw.js";import"./CSSTransition-DsWnEfuR.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BQ-VJ0kv.js";import"./Avatar-CGbhLEO1.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
