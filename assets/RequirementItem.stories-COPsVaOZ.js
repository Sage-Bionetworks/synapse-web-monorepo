import{j as a}from"./jsx-runtime-DPiG3R0R.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-iEvib2og.js";import{d as s}from"./ToastMessage-Yv9qh8jl.js";import{R as n,a as t}from"./RequirementItem-BhuZI5aa.js";import{P as O}from"./Paper-Df0ViG5C.js";import"./index-DRlER7nw.js";import"./iframe-gi3XisdE.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-DU3bXuAE.js";import"./SynapseConstants-DsCgHoOU.js";import"./OrientationBanner-DJ4alAZp.js";import"./index-BI1mSjG2.js";import"./spreadSx-CwcO6WA9.js";import"./react-BnG7FJAV.js";import"./FullWidthAlert-R6EVtHKx.js";import"./Alert-BYxbQIxM.js";import"./createTheme-DQIvOmBk.js";import"./DefaultPropsProvider-UlX5bXx-.js";import"./useSlot-D8yvO1xQ.js";import"./useForkRef-ChqFpJWE.js";import"./createSimplePaletteValueFilter-DVwuXgvt.js";import"./createSvgIcon-CtDRwr3p.js";import"./Close-BBiabR_k.js";import"./IconButton-CNH7gO9P.js";import"./useTimeout-B2bPIzMS.js";import"./ButtonBase-D3zgPrFN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-O-qj_I90.js";import"./Stack-pM5AE4OC.js";import"./extendSxProp-1Gj-CtJT.js";import"./getThemeProps-DP5W_O2x.js";import"./useTheme-B_Xprks4.js";import"./Box-Y1nj0ApN.js";import"./AlertTitle-Bk5UvP8h.js";import"./Typography-BCGqRzgO.js";import"./index-CFzJowKf.js";import"./useTheme-DNUoLfsv.js";import"./ClickAwayListener-YB_ofQ_g.js";import"./getReactElementRef-Dw4MON7M.js";import"./index-B4fFtDTl.js";import"./index-DdFze2Ln.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BONjhKmI.js";import"./Tooltip-CtRWM5bs.js";import"./index-DanVeDdQ.js";import"./useControlled-C8ZsNrtG.js";import"./Popper-yosZaOGL.js";import"./Button-AJnSQ6Ut.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-BFkXHN1n.js";import"./utils-FQaTZWKo.js";import"./Link-Y_M4S6oM.js";import"./Collapse-BwMzmQIR.js";import"./isNil-BPAgBugS.js";import"./_Uint8Array-BS3jSnnJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DT1F5_Ix.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BHCCo4qE.js";import"./_getTag-BqzSQALn.js";import"./tinycolor-Begke6kS.js";import"./Fade-DT4Zl6lr.js";import"./inputBaseClasses-DXtOTEzM.js";import"./calculateFriendlyFileSize-CB-owWsp.js";import"./CheckCircleTwoTone-BDWuetOC.js";import"./InfoTwoTone-Ms5lPGxf.js";import"./useMutation-96DTmNIV.js";import"./dayjs.min-hNWLMaQU.js";import"./chunk-AYJ5UCUI-DL7t06aT.js";import"./cloneDeep-C3r-Yrwt.js";import"./_initCloneObject-BLTkGPGB.js";import"./Skeleton-CZHFA_u-.js";import"./merge-CBSVjRxV.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BNYWgMll.js";import"./SkeletonInlineBlock-BcMaVffU.js";import"./SkeletonTable-CHpfI7PJ.js";import"./times-MSAKd2fY.js";import"./toInteger-j6SitRtm.js";import"./isSymbol-CjqP9xKe.js";import"./SkeletonParagraph-BD7Kf0Tq.js";import"./uniqueId-DiMoTFEh.js";import"./toString-D1XFNLEL.js";import"./CSSTransition-CWqhE4Pu.js";import"./ConditionalWrapper-DcbSmpS_.js";import"./LockTwoTone-D6ZqAGyS.js";import"./Avatar-dBpJRhqy.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
