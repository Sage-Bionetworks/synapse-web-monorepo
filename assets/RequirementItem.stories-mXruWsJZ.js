import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CbmonUCX.js";import{d as s}from"./ToastMessage-CdgTAj12.js";import{R as n,a as t}from"./RequirementItem-CgKnvRI9.js";import{P as O}from"./Paper-C677K5L-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-EKpzv8MZ.js";import"./SynapseConstants-1HUBjtKm.js";import"./OrientationBanner-aZewHq-Z.js";import"./index-CGSHOwNi.js";import"./index-Md1bMW-z.js";import"./iframe-uIIVzD3j.js";import"./spreadSx-CwcO6WA9.js";import"./react-uSK3dJOn.js";import"./FullWidthAlert-Br1koMJ-.js";import"./Alert-DkgMFLOm.js";import"./createTheme-DNQ2GBGi.js";import"./DefaultPropsProvider-BNOxOf-A.js";import"./useSlot-BTY_Z-d6.js";import"./useForkRef-CoDOX8AE.js";import"./createSimplePaletteValueFilter-Db9IlTh7.js";import"./createSvgIcon-92C3hb6t.js";import"./Close-DwqeNffU.js";import"./IconButton-sjmF_FEp.js";import"./useTimeout-DQ_-VO3O.js";import"./ButtonBase-IDXW5Yf8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv2umIHD.js";import"./Stack-B53g7fb1.js";import"./useThemeProps-C_b8E7rx.js";import"./getThemeProps-CHgiU3_j.js";import"./useTheme-Cs2NNiMd.js";import"./extendSxProp-D1VhlKw4.js";import"./Box-DohH8KGO.js";import"./AlertTitle-BlMhOmTu.js";import"./Typography-C96gU1wS.js";import"./index-DmeWQ-dO.js";import"./useTheme-CslAt-wv.js";import"./ClickAwayListener-B9bXJXQC.js";import"./getReactElementRef-HCWorscC.js";import"./index-CUeFsCSP.js";import"./index-BiIHeQLd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BzcQ-t9T.js";import"./Tooltip-2BuyJCJR.js";import"./index-DRTQrCcL.js";import"./useControlled-CxsZIN1F.js";import"./Popper-XHxJx-dX.js";import"./Button-C-zk0YkP.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DVTeBwEW.js";import"./QueryClientProvider-BMNXHCEe.js";import"./Link-CqWD6rvZ.js";import"./Collapse-stLmF6Jw.js";import"./_baseUniq-DCP_CDE1.js";import"./_Uint8Array-Cby2pCoj.js";import"./isArray-B5klMKWj.js";import"./_getTag-DsElD8uv.js";import"./isEqual-BiFEM_GF.js";import"./noop-DX6rZLP_.js";import"./merge-Ds5Z6Gqt.js";import"./_initCloneObject--FlbFimB.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CSvEcrCc.js";import"./inputBaseClasses-CX7_9eBB.js";import"./calculateFriendlyFileSize-B2Y-Pd9F.js";import"./CheckCircleTwoTone-Cl1bOByO.js";import"./InfoTwoTone-BbyWd5yG.js";import"./useMutation-Di0sy3w_.js";import"./dayjs.min-BorLJNP_.js";import"./chunk-AYJ5UCUI-B4Oc2lbg.js";import"./cloneDeep-CGc5yc60.js";import"./Skeleton-BoefnFuB.js";import"./SkeletonButton-Vq-dGTLm.js";import"./SkeletonInlineBlock-CAbWHhkf.js";import"./SkeletonTable-BB7_2QqC.js";import"./times-NSTTO268.js";import"./toInteger-DAJmCa2P.js";import"./isSymbol-D_pidj9A.js";import"./SkeletonParagraph-C9FD_all.js";import"./uniqueId-fci-KsTT.js";import"./toString-jjrxUMdV.js";import"./CSSTransition-CYapr8h6.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-x9JBdT7U.js";import"./Avatar-DGUxuSJg.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
