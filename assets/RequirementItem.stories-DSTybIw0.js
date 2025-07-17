import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-wDBqBzqS.js";import{d as s}from"./ToastMessage-D02ZuHs_.js";import{R as n,a as t}from"./RequirementItem-B9AORXyo.js";import{P as O}from"./Paper-86AvQ8vE.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BUoK9LxI.js";import"./SynapseConstants-BjtAWyRc.js";import"./OrientationBanner-CsT_B8xR.js";import"./index-B80U4eOu.js";import"./index-CVU8fmIt.js";import"./iframe-3BblAhfh.js";import"./spreadSx-CwcO6WA9.js";import"./react-BLzGWzYT.js";import"./FullWidthAlert-Dq5DmS4U.js";import"./Alert-ByG-WB_P.js";import"./createTheme-BEQYpO7H.js";import"./DefaultPropsProvider-eweqAGHU.js";import"./useSlot-DZbtlwDt.js";import"./useForkRef-DHmtZf__.js";import"./createSimplePaletteValueFilter-CJm1vCna.js";import"./createSvgIcon-BXj-KSbU.js";import"./Close-Ch2uSqAK.js";import"./IconButton-B0ScJW7L.js";import"./useTimeout-ycJc4VsK.js";import"./ButtonBase-DH7wyoGx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv9ow6yl.js";import"./Stack-dWwuvtQn.js";import"./extendSxProp-C9pWxk8Q.js";import"./getThemeProps-BQQmzsIX.js";import"./useTheme-BFjbifIs.js";import"./Box-Cl3YMLJO.js";import"./AlertTitle-CLmbQ9QS.js";import"./Typography-CCAvv5Ue.js";import"./index-CFaJqEi0.js";import"./useTheme-DNC1wnHP.js";import"./ClickAwayListener-BVR_Fcze.js";import"./getReactElementRef-Ctsk67vP.js";import"./index-BnYaRa7T.js";import"./index-Dzaz5wbF.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGfTDpr4.js";import"./Tooltip-DfbSuxhk.js";import"./index-BVuVGHCc.js";import"./useControlled-70Ch9zkJ.js";import"./Popper-BEcHQ4qX.js";import"./Button-DvFdbPpn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-Delb-QDS.js";import"./QueryClientProvider-1HAi0AOq.js";import"./Link-TypUoXxy.js";import"./Collapse-Nuve2Zkq.js";import"./_baseUniq-l_eXoChv.js";import"./_Uint8Array-DdNy53CP.js";import"./isArray-CQBUmIjk.js";import"./_getTag-YmF9TRN4.js";import"./isEqual-Dx1px7XN.js";import"./merge-CiygzYLZ.js";import"./_initCloneObject-C2s0SPMm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-kCBwCjSY.js";import"./inputBaseClasses-C9VZqwym.js";import"./calculateFriendlyFileSize-CWZuJIfd.js";import"./CheckCircleTwoTone-CF4WtDyY.js";import"./InfoTwoTone-I-Qjw9Zz.js";import"./useMutation-DQSp4tkZ.js";import"./dayjs.min-CylQlKE8.js";import"./chunk-AYJ5UCUI-CIKx6JE_.js";import"./cloneDeep-DCZmlt62.js";import"./Skeleton-BYiQe7AD.js";import"./SkeletonButton-T6veASRh.js";import"./SkeletonInlineBlock-BqJeb9Xn.js";import"./SkeletonTable-BUyoIt0c.js";import"./times-C8a8EoTX.js";import"./toInteger-CUVtaUCx.js";import"./toNumber-_TXUqKsc.js";import"./isSymbol-CefNHOK8.js";import"./SkeletonParagraph-DFY4EaTs.js";import"./uniqueId-OghlqWAT.js";import"./toString-B-_97c-b.js";import"./CSSTransition-D0UCPI2u.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CLclyG4H.js";import"./Avatar-B_wEmfvu.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
