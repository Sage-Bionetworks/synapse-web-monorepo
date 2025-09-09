import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-BFZJ3Ygk.js";import{d as s}from"./ToastMessage-BTx7IM6I.js";import{R as n,a as t}from"./RequirementItem-BYFpDFE1.js";import{P as O}from"./Paper-CQ-ti9pd.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-DTIYA5rx.js";import"./SynapseConstants-Badmnctn.js";import"./OrientationBanner-W-oxA1oW.js";import"./index-SKRyRm18.js";import"./index-DG11J9On.js";import"./iframe-CFx4SmlQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjUZwrS0.js";import"./FullWidthAlert-dAH4WwYR.js";import"./Alert-Bwo9jVk2.js";import"./createTheme-C3ZlBHOR.js";import"./DefaultPropsProvider-BngAxNfg.js";import"./useSlot-DTL4s5Fo.js";import"./useForkRef-DqKQMU6v.js";import"./createSimplePaletteValueFilter-DLcVTaCv.js";import"./createSvgIcon-CaT9xKql.js";import"./Close-XhtxoZ4V.js";import"./IconButton-BGgUVhRP.js";import"./useTimeout-BVRtd2bj.js";import"./ButtonBase-Byp5VrHb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwCph7sa.js";import"./Stack-DVpO78Of.js";import"./extendSxProp-De9UySGh.js";import"./getThemeProps-BqQ-LewE.js";import"./useTheme-Dlh4q2q2.js";import"./Box-DSEnYR08.js";import"./AlertTitle-TTBh0xNw.js";import"./Typography-Bg3Brpmd.js";import"./index-q0p95m-D.js";import"./useTheme-CGOBdzwx.js";import"./ClickAwayListener-B4yhA0Px.js";import"./getReactElementRef-DrXrtI8G.js";import"./index-CJuEcaaD.js";import"./index-DBl0twju.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DP_AFsYT.js";import"./Tooltip-CdI8BHtE.js";import"./index-CKkvvCY2.js";import"./useControlled-ByefJ87W.js";import"./Popper-BFgdKwjW.js";import"./Button-C53OkhyL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-BXO0nReV.js";import"./QueryClientProvider-BCm9WdUt.js";import"./Link-vyBZc_X6.js";import"./Collapse-0lsId-M4.js";import"./_baseUniq-nvsczMT_.js";import"./_Uint8Array-DQTcvvta.js";import"./isArray-ol0mTvVW.js";import"./_getTag-Cty8vqd7.js";import"./isEqual-DXatWGPi.js";import"./merge-CeYIG25n.js";import"./_initCloneObject-BBpqQKrX.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-7kRVzn_c.js";import"./inputBaseClasses-sMEcRXLK.js";import"./calculateFriendlyFileSize-CYRBhA6n.js";import"./CheckCircleTwoTone-C1_4w8s1.js";import"./InfoTwoTone-B9OihmVW.js";import"./useMutation-CmMiPDVM.js";import"./dayjs.min-CLD5-AUH.js";import"./chunk-AYJ5UCUI-56tzNCw-.js";import"./cloneDeep-SdJSSkEq.js";import"./Skeleton-BejAbq-W.js";import"./SkeletonButton-4qIF_GQV.js";import"./SkeletonInlineBlock-CTbLMq_D.js";import"./SkeletonTable-BbZNHtsQ.js";import"./times-CbxHQHRI.js";import"./toInteger-Cz62hbO-.js";import"./isSymbol-CcsJyso8.js";import"./SkeletonParagraph-BXfHQnCb.js";import"./uniqueId-dzhwEmsN.js";import"./toString-D-4cTbJV.js";import"./CSSTransition-p-5iL93H.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-UyPhor9E.js";import"./Avatar-CDCxCWd5.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
