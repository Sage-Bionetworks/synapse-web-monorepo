import{j as a}from"./jsx-runtime-BUTz-_1d.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-DR3kwQqY.js";import{d as s}from"./ToastMessage-DCVFk6p8.js";import{R as n,a as t}from"./RequirementItem-DSWjOzUI.js";import{P as O}from"./Paper-C5QIbe3w.js";import"./index-BqTi-gbl.js";import"./iframe-wZhmiXCk.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-BPngUtdk.js";import"./SynapseConstants-BY3JuDZs.js";import"./OrientationBanner-BYm0UpyJ.js";import"./index-CaguALO7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C4PVEyLu.js";import"./FullWidthAlert-DAqcg72v.js";import"./Alert-CYG0eisg.js";import"./createTheme-soJfsoye.js";import"./resolveComponentProps-CfcJcXFP.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ByBK5LxV.js";import"./createSvgIcon-Cl2wkW3w.js";import"./DefaultPropsProvider-BOHgnvI3.js";import"./Close-CX3B_Dfj.js";import"./IconButton-CakZjNno.js";import"./ButtonBase-CKX0S0z7.js";import"./useTimeout-CnqrO3bW.js";import"./TransitionGroupContext-BJpxVonh.js";import"./useIsFocusVisible-CaJhUmpq.js";import"./useEventCallback-BfU_6Zjf.js";import"./Stack-DjPKGgcW.js";import"./getThemeProps-B2E-r3vi.js";import"./useTheme-CFktQkaS.js";import"./Box-CfIT6twS.js";import"./AlertTitle-9SyC8FhY.js";import"./Typography-CxdHD8cJ.js";import"./useTheme-BBJ1ppa1.js";import"./Grow-CMwxiNI1.js";import"./index-EIZBVaa_.js";import"./utils-BEz3L9Oz.js";import"./ClickAwayListener-F5HYeZZ-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DqRz8FoT.js";import"./index-BvDuf_JS.js";import"./useControlled-UDQD-7tg.js";import"./useId-BxSkkWRt.js";import"./Popper-B7nviUGz.js";import"./Button-CtX8_Saj.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-BGrXjv6K.js";import"./utils-CWAFC6_Q.js";import"./Link-DQqq1f1o.js";import"./Collapse-dyoyaW4g.js";import"./isNil-CgSz4o_M.js";import"./_Uint8Array-BwHQqEhE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dlji57C8.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CRDDryoJ.js";import"./_getTag-BCC_5J7n.js";import"./tinycolor-Begke6kS.js";import"./Fade-C93QLRyh.js";import"./Skeleton-CDIZWh-g.js";import"./inputBaseClasses-1Xhc3FA6.js";import"./calculateFriendlyFileSize-BmfNa6-Y.js";import"./CheckCircleTwoTone-ChTCFVAD.js";import"./InfoTwoTone-CeZrC0ph.js";import"./mutation-Chly-9yq.js";import"./dayjs.min-BEEQVVA0.js";import"./chunk-AYJ5UCUI-C-jqZwGp.js";import"./cloneDeep-Bwr1RsLr.js";import"./_initCloneObject-CCl-eqZ2.js";import"./isEqual-B5BjI5-L.js";import"./merge-DHlcnBRc.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DJ6IKgLw.js";import"./SkeletonInlineBlock-BCkEUTU4.js";import"./SkeletonTable-Szi6PSPJ.js";import"./times-Ctp9zjt1.js";import"./toInteger-DgtEZE10.js";import"./isSymbol-CiYK-QWp.js";import"./SkeletonParagraph-DV6BPiR4.js";import"./uniqueId-5D_DZpGh.js";import"./toString-DZsMg4uL.js";import"./CSSTransition-BG2gKXNw.js";import"./ConditionalWrapper-GBeMXKHC.js";import"./LockTwoTone-DaGm1Wpz.js";import"./Avatar-CsHV-3RD.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
