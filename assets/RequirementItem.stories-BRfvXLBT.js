import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-Bi271oFG.js";import{d as s}from"./ToastMessage-DWDaWOQE.js";import{R as n,a as t}from"./RequirementItem-Bj2VAdJ8.js";import{P as O}from"./Paper-BuMxbUlT.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DP9dLTbC.js";import"./SynapseConstants-Cs7kIee5.js";import"./OrientationBanner-DNKWbF4H.js";import"./index-DeEnkZTg.js";import"./index-D7PBaRdl.js";import"./iframe-BMKYlU_t.js";import"./spreadSx-CwcO6WA9.js";import"./react-DtBDPJ6z.js";import"./FullWidthAlert-C3S58vYB.js";import"./Alert-BDMRwB6G.js";import"./createTheme-D01eg2ZR.js";import"./DefaultPropsProvider-CyA_mLEZ.js";import"./useSlot-Bf1xc4IK.js";import"./useForkRef-B7cAnUkU.js";import"./createSimplePaletteValueFilter-RxOFhxsU.js";import"./createSvgIcon-CXNGspcB.js";import"./Close-BkAE9Dlk.js";import"./IconButton-CVUHAMRf.js";import"./useTimeout-DNCswdg1.js";import"./ButtonBase-BYlrH_BG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFDRIou5.js";import"./Stack-Cmz1Aqci.js";import"./extendSxProp-CHQ4xt1P.js";import"./getThemeProps-iIqqzIfW.js";import"./useTheme-Crp6xkqA.js";import"./Box-DJHHlrYT.js";import"./AlertTitle-DygMeu_O.js";import"./Typography-CrfNLDTB.js";import"./index-Ck5RF-vh.js";import"./useTheme-D7vyOj74.js";import"./ClickAwayListener-C3qWP59K.js";import"./getReactElementRef-sEjvg3Zz.js";import"./index-C5LFuBYW.js";import"./index-MaejsBJ1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BHJ1L0ra.js";import"./Tooltip-Dr56EzbH.js";import"./index-CQ4lrqCV.js";import"./useControlled-CnOewArD.js";import"./Popper-CjNr2Bcb.js";import"./Button-DRHCs_dP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DobhWTp-.js";import"./QueryClientProvider-CMkDsy49.js";import"./Link-psqro1J4.js";import"./Collapse-BIwUXTLr.js";import"./_baseUniq-pl7LP8Kf.js";import"./_Uint8Array-DN8s_PQG.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CBGZ-2E2.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BNvN_keD.js";import"./isEqual-D3Tg9h2Q.js";import"./merge-cjL6PIqo.js";import"./_initCloneObject-BZWksmAU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BUFeIqQL.js";import"./inputBaseClasses-BTRyhxsc.js";import"./calculateFriendlyFileSize-1dWTby-6.js";import"./CheckCircleTwoTone-FMR-aIpc.js";import"./InfoTwoTone-BmhX0P_F.js";import"./useMutation-BOGcq4zV.js";import"./dayjs.min-CWkIm1vk.js";import"./chunk-AYJ5UCUI-Cn4KvQIf.js";import"./cloneDeep-DFbYzaiX.js";import"./Skeleton-7oiMZ30H.js";import"./SkeletonButton-fUtvdH46.js";import"./SkeletonInlineBlock-Cv5u8E6h.js";import"./SkeletonTable-H_6c-qWa.js";import"./times-BDA0jqzn.js";import"./toInteger-CUy8i8ug.js";import"./isSymbol-B8AihsWQ.js";import"./SkeletonParagraph-C6W76QR8.js";import"./uniqueId-DNh-S0N3.js";import"./toString-BpXtAKIk.js";import"./CSSTransition-BfY7kwZo.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-aTuIRBEl.js";import"./Avatar-CFab0--G.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
