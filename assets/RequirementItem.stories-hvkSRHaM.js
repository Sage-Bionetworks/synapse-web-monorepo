import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CkTwKD2h.js";import{d as s}from"./ToastMessage-Rv1Wdd2O.js";import{R as n,a as t}from"./RequirementItem-BybNEh8P.js";import{P as O}from"./Paper-_TypEQXS.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-lb8uXJha.js";import"./SynapseConstants-CBaWUDFp.js";import"./OrientationBanner-C_cI8Wdu.js";import"./index-HT8vm-KD.js";import"./index-CJTqbwg9.js";import"./iframe-CG85BzK6.js";import"./spreadSx-CwcO6WA9.js";import"./react-C5eOr4qq.js";import"./FullWidthAlert-BYzUdYmy.js";import"./Alert-CfqRHpto.js";import"./createTheme-gj4ta8JK.js";import"./DefaultPropsProvider-BIvMs3xX.js";import"./useSlot-C9QU161m.js";import"./useForkRef-CL-HmWE-.js";import"./createSimplePaletteValueFilter-Xz4nl1-g.js";import"./createSvgIcon-Ds67miPL.js";import"./Close-DUTvymq8.js";import"./IconButton-BVm2k0V8.js";import"./useTimeout-DDPxidDq.js";import"./ButtonBase-CmahN1yA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BBZlh3jv.js";import"./Stack-B6Fv6rDP.js";import"./extendSxProp-LD-I1WVR.js";import"./getThemeProps-BkNvNRVH.js";import"./useTheme-DHaXmWDd.js";import"./Box-DO5is7mO.js";import"./AlertTitle-DW1ksqT6.js";import"./Typography-BjJo8e6h.js";import"./index-ClhWbTH2.js";import"./useTheme-J3HQsDMf.js";import"./ClickAwayListener-Bz0pJjhC.js";import"./getReactElementRef-DefmUWlD.js";import"./index-DhqT-wZf.js";import"./index-B30IKtuV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DT56OTPx.js";import"./Tooltip-_Br_YO6O.js";import"./index-BTTzR3FC.js";import"./useControlled-CGanW96O.js";import"./Popper-TkGtPLMk.js";import"./Button-D8a1OC-O.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DccECcxJ.js";import"./QueryClientProvider-BiW_y-Nb.js";import"./Link-w5BOvl6J.js";import"./Collapse-DPBKAoXV.js";import"./_baseUniq-Cm1Ujzdq.js";import"./_Uint8Array-Bge7RmPT.js";import"./isArray-ECjS2Mk1.js";import"./_getTag-CLHhZoU-.js";import"./isEqual-l9qiUE8w.js";import"./merge-DOaqpN72.js";import"./_initCloneObject-BNcBeVfK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BO0WQVeb.js";import"./inputBaseClasses-8RM-Z2Qw.js";import"./calculateFriendlyFileSize-BfxCmKAO.js";import"./CheckCircleTwoTone-DRnqgNMo.js";import"./InfoTwoTone-tVAIT2bF.js";import"./useMutation-DzECAvFo.js";import"./dayjs.min-DN9ltQUU.js";import"./chunk-AYJ5UCUI-J8G0ovJt.js";import"./cloneDeep-B7tqKnHv.js";import"./Skeleton-jH73I46F.js";import"./SkeletonButton-CCljSEP8.js";import"./SkeletonInlineBlock-GNyZlT8w.js";import"./SkeletonTable-DvuctY-5.js";import"./times-BU-w-Ma5.js";import"./toInteger-BRHbTtsF.js";import"./isSymbol-Bc0E7QSo.js";import"./SkeletonParagraph-BDf2vA-h.js";import"./uniqueId-BS6rIJoH.js";import"./toString-Sbl_gexy.js";import"./CSSTransition-DGCXm9kJ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-l087xXYF.js";import"./Avatar-DsQz7Xjt.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
