import{j as a}from"./jsx-runtime-iTckiti-.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-jbWUPmUQ.js";import{d as s}from"./ToastMessage-CQaS8Dkd.js";import{R as n,a as t}from"./RequirementItem-B3y1CJ6q.js";import{P as O}from"./Paper--Ek-rOjO.js";import"./index-OmKv73xn.js";import"./iframe--GHfuLEa.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BStaXocn.js";import"./SynapseConstants-Vk5n6xdz.js";import"./OrientationBanner-DruA684W.js";import"./index-DjvzjlK9.js";import"./spreadSx-CwcO6WA9.js";import"./react-Di00t4ym.js";import"./FullWidthAlert-gs85-68Y.js";import"./Alert-DFXFwOoD.js";import"./createTheme-DdjUdKD8.js";import"./DefaultPropsProvider-m8uC2dx3.js";import"./useSlot-BDZe0K82.js";import"./useForkRef-BMsIR7A2.js";import"./createSimplePaletteValueFilter-D2fPYCk7.js";import"./createSvgIcon-DaKklsSP.js";import"./Close-CBzjYm2V.js";import"./IconButton-BLxRufzo.js";import"./useTimeout-lsN_4YZN.js";import"./ButtonBase-Ddz4PRLN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-RCSR5afN.js";import"./Stack-D_cZIW5H.js";import"./extendSxProp-lNt0Lqwv.js";import"./getThemeProps-8g7cwFhp.js";import"./useTheme-DyFYj_Od.js";import"./Box-CDnpDSqJ.js";import"./AlertTitle-DepColIi.js";import"./Typography-D7jX6E3C.js";import"./index-BbWdtbRX.js";import"./useTheme-wqjdtqKl.js";import"./ClickAwayListener-cUUEbsf5.js";import"./getReactElementRef-O1pz2c9_.js";import"./index-B0sesRE2.js";import"./index-Dmj9pDvv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CrGAHFQv.js";import"./Tooltip-Df8LoEvS.js";import"./index-BTMxsB14.js";import"./useControlled-C5hjvIoJ.js";import"./Popper-CVmXhaxr.js";import"./Button-CKq-XtVo.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-Ck_JqutI.js";import"./utils-B8xz8Y1w.js";import"./Link-CpQL_QhH.js";import"./Collapse-LtaPanW6.js";import"./_baseUniq-CyZrehIc.js";import"./_Uint8Array-BEYiI4Hb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-YWwYBF9X.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BDVqsmY6.js";import"./isEqual-DsNYYQ4s.js";import"./merge-DEOWGRJ0.js";import"./_initCloneObject-DRXptzaQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-lT0Ugc1Q.js";import"./inputBaseClasses-BBR0S8_g.js";import"./calculateFriendlyFileSize-CG7HQJ8D.js";import"./CheckCircleTwoTone-C3XC_MY0.js";import"./InfoTwoTone-Brolf2hD.js";import"./useMutation-DWv4RrhX.js";import"./dayjs.min-CPZsdPh_.js";import"./chunk-AYJ5UCUI-bcHceysS.js";import"./cloneDeep-B6sAkpIg.js";import"./Skeleton-y9i4KNfR.js";import"./SkeletonButton-cyh-zmBo.js";import"./SkeletonInlineBlock-BI8bgthb.js";import"./SkeletonTable-C8atgXBz.js";import"./times-DmBDqq6l.js";import"./toInteger-em_OdWms.js";import"./isSymbol-D4E70gin.js";import"./SkeletonParagraph-C_IKjWas.js";import"./uniqueId-Ll1KcRwE.js";import"./toString-uq-6bkd1.js";import"./CSSTransition-BF4WRxm4.js";import"./ConditionalWrapper-DdByMCp1.js";import"./LockTwoTone-O0NwQsNJ.js";import"./Avatar-BzqA6DnG.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
