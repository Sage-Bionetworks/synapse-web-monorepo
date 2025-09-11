import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-C-g5REht.js";import{d as s}from"./ToastMessage-E5oi8bxP.js";import{R as n,a as t}from"./RequirementItem-CwclMiur.js";import{P as O}from"./Paper-DMgTMQqE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-DuViLq23.js";import"./SynapseConstants-DY1vPOSt.js";import"./OrientationBanner-DEjvhhkO.js";import"./index-k8EbPwIf.js";import"./index-Ch_aZLn_.js";import"./iframe-CI5-WtwK.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dle4gBSE.js";import"./FullWidthAlert-DklTb4C2.js";import"./Alert-BXqk_EFs.js";import"./createTheme-DWKcqxZO.js";import"./DefaultPropsProvider-BOR8cixV.js";import"./useSlot-v3S8d4Me.js";import"./useForkRef-DD0BRKwM.js";import"./createSimplePaletteValueFilter-BRtROzR7.js";import"./createSvgIcon-cgSLMIRF.js";import"./Close-sWM4NlLX.js";import"./IconButton-D_JizBUn.js";import"./useTimeout-C3ViWOZE.js";import"./ButtonBase-y5cp9N5N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-iGeWZHKy.js";import"./Stack-DRHl7oE0.js";import"./extendSxProp-BZsQLNzI.js";import"./getThemeProps-Cbe8FKqW.js";import"./useTheme-DraLcqT-.js";import"./Box-r19TyWLG.js";import"./AlertTitle-YoFO0mon.js";import"./Typography-v4sz5jpM.js";import"./index-CFx7Mj6k.js";import"./useTheme-BgBU0W92.js";import"./ClickAwayListener-DIcSIyaF.js";import"./getReactElementRef-8cD_D0A_.js";import"./index-CQOFabK9.js";import"./index-BwE16z8y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-nN5WW0Nv.js";import"./Tooltip-BfL26sZT.js";import"./index-BIWc0o4N.js";import"./useControlled-CtiBNzN3.js";import"./Popper-D39nZAe3.js";import"./Button-LwXCcibx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-BlY2-kTk.js";import"./QueryClientProvider-CSJxH1Zj.js";import"./Link-B7Ndy3lm.js";import"./Collapse-a_QEZvvt.js";import"./_baseUniq-BOtOiC6R.js";import"./_Uint8Array-Bt1VOqAT.js";import"./isArray-DIc-j-dU.js";import"./_getTag-DW3AeXlF.js";import"./isEqual-D-HOqnX0.js";import"./merge-I161Dzxp.js";import"./_initCloneObject-PeUHaPAg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-COAO7VK-.js";import"./inputBaseClasses-DXlh6jL0.js";import"./calculateFriendlyFileSize-DtUFCIlM.js";import"./CheckCircleTwoTone-CVULLzOo.js";import"./InfoTwoTone-DJUUXs8t.js";import"./useMutation-DlzCxcO4.js";import"./dayjs.min-DePkvkHB.js";import"./chunk-AYJ5UCUI-VJcsE_sA.js";import"./cloneDeep-DMhImPhU.js";import"./Skeleton-CZxlvoNC.js";import"./SkeletonButton-D1ylmPHp.js";import"./SkeletonInlineBlock-BymLLxu8.js";import"./SkeletonTable-DowEfYfG.js";import"./times-CvH4XWRv.js";import"./toInteger-BxsiMvzs.js";import"./isSymbol-BFWFicjn.js";import"./SkeletonParagraph-Dit5e4mp.js";import"./uniqueId-_sv1IR-x.js";import"./toString-BwNyYB84.js";import"./CSSTransition-BejYgi7P.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CpxOj1uV.js";import"./Avatar-B5J1kBuU.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
