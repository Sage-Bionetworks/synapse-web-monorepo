import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CyMrYUHX.js";import{d as s}from"./ToastMessage-CgqX37GM.js";import{R as n,a as t}from"./RequirementItem-dDHpxQbe.js";import{P as O}from"./Paper-C9Te-8_v.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-ChJXuE_G.js";import"./SynapseConstants-BgVWTBvG.js";import"./OrientationBanner-CgO-jgpe.js";import"./index-BVMLTliA.js";import"./index-BjYqh8CN.js";import"./iframe-GZmPJQmw.js";import"./spreadSx-CwcO6WA9.js";import"./react-DYf9vH9v.js";import"./FullWidthAlert-CrgL78dl.js";import"./Alert-B8BaFiwn.js";import"./createTheme-Ci6bVZs8.js";import"./DefaultPropsProvider-p-VvPMcS.js";import"./useSlot-DjiMerLm.js";import"./useForkRef-DjK00V5X.js";import"./createSimplePaletteValueFilter-CRAp9ozw.js";import"./createSvgIcon-Cg3F_JaT.js";import"./Close-DQp4Ab7t.js";import"./IconButton-BDNvR3N2.js";import"./useTimeout-oOEcrwX8.js";import"./ButtonBase-CdN_s3us.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwcuRZZH.js";import"./Stack-wnfKJykl.js";import"./useThemeProps-DqWLfYoN.js";import"./getThemeProps-DBSpe4l4.js";import"./useTheme-B9Eo60Il.js";import"./extendSxProp-D59BLFsM.js";import"./Box-Ci2u2n8R.js";import"./AlertTitle-DXxtItD6.js";import"./Typography-C4bCrnhF.js";import"./index-BVOHcrQX.js";import"./useTheme-Chrl7Xny.js";import"./ClickAwayListener-BZ6LIgVx.js";import"./getReactElementRef-DMDF8VWZ.js";import"./index-CRKwKLDy.js";import"./index-De9pklvj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DV3m8xn_.js";import"./Tooltip-DS2_bocJ.js";import"./index-CqDcjKYL.js";import"./useControlled-D7Hv9h3B.js";import"./Popper-BD3sWAZF.js";import"./Button-RzPtlbLb.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Dnr6EabU.js";import"./QueryClientProvider-BT5rH4_G.js";import"./Link-BXPkqIaF.js";import"./Collapse-DXsRlhM4.js";import"./_baseUniq-DxBf4Di9.js";import"./_Uint8Array-CkNwlXWO.js";import"./isArray-CVqdkdHi.js";import"./_getTag-k5zGXYGR.js";import"./isEqual-CM_V142D.js";import"./noop-DX6rZLP_.js";import"./merge-CjHAQmH1.js";import"./_initCloneObject-luMxzLHE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cbte7BvX.js";import"./inputBaseClasses-BD4tWqAD.js";import"./calculateFriendlyFileSize-B18g-3Th.js";import"./CheckCircleTwoTone-BchYLEzy.js";import"./InfoTwoTone-BazwzvUl.js";import"./useMutation-DF0qP4Yb.js";import"./dayjs.min-DxdUSqs4.js";import"./chunk-AYJ5UCUI-Y88dghcf.js";import"./cloneDeep-DALKoszi.js";import"./Skeleton-BgJRY0_p.js";import"./SkeletonButton-Duvdn4_H.js";import"./SkeletonInlineBlock-BRclsig0.js";import"./SkeletonTable-Cv1qau9B.js";import"./times-8p9rqNhW.js";import"./toInteger-QKHrRNAA.js";import"./isSymbol-1MtzzuJn.js";import"./SkeletonParagraph-BWgrjW1A.js";import"./uniqueId-By_Da33P.js";import"./toString-8iyE_E-g.js";import"./CSSTransition-BTKnhR1I.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CJnpTSHQ.js";import"./Avatar-CYD9ACGy.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
