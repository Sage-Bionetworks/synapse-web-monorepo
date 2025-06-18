import{j as a}from"./jsx-runtime-B_BASs2o.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-LhG2kjxI.js";import{d as s}from"./ToastMessage-CtI6kjp9.js";import{R as n,a as t}from"./RequirementItem-Cg97KfpF.js";import{P as O}from"./Paper-B4UH_OKi.js";import"./index-DwZZLiLd.js";import"./iframe-Zkz26kob.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-DKiwZnFy.js";import"./SynapseConstants-Di2qHJ4V.js";import"./OrientationBanner-CrZbUJlx.js";import"./index-CtUJEc90.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cl87gb8P.js";import"./FullWidthAlert-CBvSjRDH.js";import"./Alert-BR0FfL-7.js";import"./createTheme-CyGr1kaY.js";import"./DefaultPropsProvider-DTt0l4rk.js";import"./useSlot-CIMJh2x7.js";import"./useForkRef-CmEb2Hjb.js";import"./createSimplePaletteValueFilter-CwcnoVpf.js";import"./createSvgIcon-oz7RTgz8.js";import"./Close-CkuqRxFY.js";import"./IconButton-ZxELSsuB.js";import"./useTimeout-gAYlsF9h.js";import"./ButtonBase-B4fAWw7x.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrTM6r8w.js";import"./Stack-C2ETm3ew.js";import"./extendSxProp-cYd3bjsj.js";import"./getThemeProps-DRCVkZxN.js";import"./useTheme-XTxZFMsc.js";import"./Box-CTyNgpBu.js";import"./AlertTitle-1DlITsoz.js";import"./Typography-DxLTsn7U.js";import"./index-msKwl0RH.js";import"./useTheme-DyVMMMH4.js";import"./ClickAwayListener-DeMMBI1U.js";import"./getReactElementRef-BgJZi7s_.js";import"./index-B5aouh9C.js";import"./index-C-naQSBy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-whg3Wx9g.js";import"./Tooltip-B9gDCvk0.js";import"./index-BwAixF8z.js";import"./useControlled-CbdmQ0MQ.js";import"./Popper-Ddcr4dsU.js";import"./Button-7E9-g8VM.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CnZ9w03v.js";import"./utils-z9MgxIce.js";import"./Link-DGtC6YCJ.js";import"./Collapse-CDal-Uzp.js";import"./isNil-Brgex79b.js";import"./_Uint8Array-5R2Phy2D.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWBmoQcX.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DJzDoLjX.js";import"./_getTag-D6u2Q-tT.js";import"./tinycolor-Begke6kS.js";import"./Fade-DOQSzISd.js";import"./inputBaseClasses-Bzj-FifI.js";import"./calculateFriendlyFileSize-D9ScsfwE.js";import"./CheckCircleTwoTone-Tw6QUA9Q.js";import"./InfoTwoTone-DJ4aKC-h.js";import"./useMutation-kvK-hPqm.js";import"./dayjs.min-DMEtZJm2.js";import"./chunk-AYJ5UCUI-CYY7MATY.js";import"./cloneDeep-C-AeX0sj.js";import"./_initCloneObject-DnIwAtZU.js";import"./Skeleton-BZYpf_eO.js";import"./merge-K4R-57V-.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BwB0YW6j.js";import"./SkeletonInlineBlock-Dmu8Sh-M.js";import"./SkeletonTable-ahFW_bGr.js";import"./times-BqeNZOTS.js";import"./toInteger-DFlbIs9q.js";import"./isSymbol-aoBtzT_M.js";import"./SkeletonParagraph-g8IIal80.js";import"./uniqueId-Cx00Oh8d.js";import"./toString-FLuGGsNM.js";import"./CSSTransition-BjfB0qry.js";import"./ConditionalWrapper-DQFCdyF_.js";import"./LockTwoTone-Cjp-rmx9.js";import"./Avatar-Cn7kRnWE.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
