import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-L9Lxom-_.js";import{d as s}from"./ToastMessage-byNpoJUd.js";import{R as n,a as t}from"./RequirementItem-BbcLpRoV.js";import{P as O}from"./Paper-CO4yL9sw.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-D02evhEe.js";import"./SynapseConstants-DYII5bnk.js";import"./OrientationBanner-m5y_RC38.js";import"./index-DC_9J_1p.js";import"./index-DF7lk3Yl.js";import"./iframe-C_AUxWZn.js";import"./spreadSx-CwcO6WA9.js";import"./react-DvrjyBqV.js";import"./FullWidthAlert-DriynDve.js";import"./Alert-BRf044np.js";import"./createTheme-BCP9qvjK.js";import"./DefaultPropsProvider-CxJAbJPQ.js";import"./useSlot-CMxSN5Bn.js";import"./useForkRef-1mKUaoDZ.js";import"./createSimplePaletteValueFilter-CnNLxdoE.js";import"./createSvgIcon-CrJstOSp.js";import"./Close-BONs9ZBx.js";import"./IconButton-B2Nn3-Mn.js";import"./useTimeout-B0lT4z1u.js";import"./ButtonBase-Bw4PF_aW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CX1nzmWd.js";import"./Stack-Dd0taEvK.js";import"./extendSxProp-SS-hjWkf.js";import"./getThemeProps-CTDhhYmo.js";import"./useTheme-DO7hrzbR.js";import"./Box-CkXfPhrv.js";import"./AlertTitle-nSydvO7Q.js";import"./Typography-CyAicYx7.js";import"./index-Co94yF7T.js";import"./useTheme-ChuUKpJp.js";import"./ClickAwayListener-CbbHW0hy.js";import"./getReactElementRef-DLB_inmL.js";import"./index-C3mlNnCy.js";import"./index-BtpDFBPo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-oRqweoyj.js";import"./Tooltip-D1DqUxpw.js";import"./index-DViHecYa.js";import"./useControlled-CsHT0ykU.js";import"./Popper-DigATxW6.js";import"./Button-BwtQDMEd.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-DGY7BQDS.js";import"./QueryClientProvider-C10E43BM.js";import"./Link-DGDizL6J.js";import"./Collapse-BKJvd63-.js";import"./_baseUniq-BBUqvk3x.js";import"./_Uint8Array-4qu2iXy-.js";import"./isArray-DN8gbOlb.js";import"./_getTag-N-Fkp5RY.js";import"./isEqual-DLzrhfAb.js";import"./merge-Btpvv75M.js";import"./_initCloneObject-CAVenSk4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-COicTICi.js";import"./inputBaseClasses-C3sSt4lC.js";import"./calculateFriendlyFileSize-BXAHpDS2.js";import"./CheckCircleTwoTone-DXold5XT.js";import"./InfoTwoTone-B1NTw75b.js";import"./useMutation-DY8-ifgv.js";import"./dayjs.min-Buta2DO-.js";import"./chunk-AYJ5UCUI-CS7CcU8n.js";import"./cloneDeep-8ISftUsd.js";import"./Skeleton-DhQvFQgP.js";import"./SkeletonButton-BuSMHheE.js";import"./SkeletonInlineBlock-qajRCt6J.js";import"./SkeletonTable-DDTvAZBm.js";import"./times-DLG8imqf.js";import"./toInteger-9tbkPCBK.js";import"./isSymbol-DCkmBRwj.js";import"./SkeletonParagraph-BFWMvjFH.js";import"./uniqueId-Cyko6_em.js";import"./toString-CyLpKSL1.js";import"./CSSTransition-DLNClS2v.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CuhqcUld.js";import"./Avatar-CCIk4wl8.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
