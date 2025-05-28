import{j as a}from"./jsx-runtime-G3kcun9p.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-CKtQmUVq.js";import{d as s}from"./ToastMessage-CGRAP4ol.js";import{R as n,a as t}from"./RequirementItem-C8Yca2_e.js";import{P as O}from"./Paper-nI3QrkK7.js";import"./index-Yg--iZq-.js";import"./iframe-BCAWC2I3.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-Csa7dt3u.js";import"./SynapseConstants-BlBmq_8s.js";import"./OrientationBanner-CyUpBZqy.js";import"./index-BmkGWmvH.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_-pcSi9.js";import"./FullWidthAlert-BHmvYLXZ.js";import"./Alert-DfvFtguU.js";import"./createTheme-N1-IWSxF.js";import"./resolveComponentProps-D4e1xWws.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CP5fgMc-.js";import"./createSvgIcon-cnhKmrGB.js";import"./DefaultPropsProvider-C_pLLkTF.js";import"./Close-DoMxHeVd.js";import"./IconButton-Di2GD9l2.js";import"./ButtonBase-CscigYjd.js";import"./useTimeout-DZZ8kkGX.js";import"./TransitionGroupContext-82H1ouW-.js";import"./useIsFocusVisible-DqibNYDO.js";import"./useEventCallback-B2bKWCyK.js";import"./Stack-B-60LY7Q.js";import"./getThemeProps-CnIQNgOP.js";import"./useTheme-D7OueLh-.js";import"./Box-D2jroMLZ.js";import"./AlertTitle-BH9q9-gu.js";import"./Typography-82RYpCCZ.js";import"./useTheme-BEHJ7b1Q.js";import"./Grow-D5UV9RB1.js";import"./index-C1xQEisA.js";import"./utils-whpWPMHJ.js";import"./ClickAwayListener-BO4uKgNA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-b-ocpEJh.js";import"./index-CxihIUxw.js";import"./useControlled-B7iGhHHh.js";import"./useId-BW8Wy0LR.js";import"./Popper-Bu2gOJgQ.js";import"./Button-C1jDFRQd.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-C-x_EuHm.js";import"./utils-Dw86f0ge.js";import"./Link-Cn2J7rSx.js";import"./Collapse-CUMtwh7G.js";import"./isNil-B6br_ZUr.js";import"./_Uint8Array-D2lqwLng.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CFnMZm62.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-so24MjHt.js";import"./_getTag-VdZ1AeIP.js";import"./tinycolor-Begke6kS.js";import"./Fade-MvuZT9g3.js";import"./Skeleton-CtwgzPcw.js";import"./inputBaseClasses-bR0UpD5b.js";import"./calculateFriendlyFileSize-C234RjjD.js";import"./CheckCircleTwoTone-D907d1Fo.js";import"./InfoTwoTone-FuykDER9.js";import"./mutation-ClyIXRCV.js";import"./dayjs.min-B30jtBEV.js";import"./chunk-AYJ5UCUI-Do7oMhra.js";import"./cloneDeep-DyVOe_3L.js";import"./_initCloneObject-F6eDGnab.js";import"./isEqual-1qT8SkT_.js";import"./merge-B4L7tGLW.js";import"./identity-DKeuBCMA.js";import"./useMutation-OxRW4evI.js";import"./SkeletonButton-DWszxauG.js";import"./SkeletonInlineBlock-3HpDN67J.js";import"./SkeletonTable-CfBcHAeE.js";import"./times-B9LSUJWV.js";import"./toInteger-DtJYaMSH.js";import"./isSymbol-B1Y8W1g8.js";import"./SkeletonParagraph-D_pzPeXO.js";import"./uniqueId-DGOE_Eo6.js";import"./toString-BIm7eliI.js";import"./CSSTransition-ZQEbhusr.js";import"./ConditionalWrapper-Dgu79nyC.js";import"./LockTwoTone-B7AzEauQ.js";import"./Avatar-BS5BgfLs.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
