import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BPe98Ok2.js";import{d as s}from"./ToastMessage-BZpYgqO2.js";import{R as n,a as t}from"./RequirementItem-BlzSE4cA.js";import{P as O}from"./Paper-BM-tMMK1.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DU1Ca-_P.js";import"./SynapseConstants-DEJlw4mo.js";import"./OrientationBanner-DzQXenpJ.js";import"./index-CvgTVjO6.js";import"./index-CGgyZU_0.js";import"./iframe-CCXccXds.js";import"./spreadSx-CwcO6WA9.js";import"./react-CpI2RwIo.js";import"./FullWidthAlert-BpIfGsWz.js";import"./Alert-nYZipnOq.js";import"./createTheme-DUuZ4m0z.js";import"./DefaultPropsProvider-5Up6I45h.js";import"./useSlot-5LEOfRuN.js";import"./useForkRef-DlbJAM4g.js";import"./createSimplePaletteValueFilter-BZ-L_Jj5.js";import"./createSvgIcon-D97lkMSQ.js";import"./Close-DzaxAuVx.js";import"./IconButton-CJaSZh4u.js";import"./useTimeout-DdiylZf3.js";import"./ButtonBase-CM83hPGr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BjRT_mg3.js";import"./Stack-CkblJmrf.js";import"./extendSxProp-CUYWBp11.js";import"./getThemeProps-BSNr66vY.js";import"./useTheme-CiWR55g1.js";import"./Box-BsuZ6C8s.js";import"./AlertTitle-Bxrqc5yE.js";import"./Typography-kOOYf-Kl.js";import"./index-D6lIKvPO.js";import"./useTheme-DK_RMngr.js";import"./ClickAwayListener-OOoRoFHH.js";import"./getReactElementRef-Dx_crL1u.js";import"./index-DHitPVAn.js";import"./index-CwBx0_o5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-By88UYB6.js";import"./Tooltip-dgVzK9DS.js";import"./index-B6JVTg8R.js";import"./useControlled-DpFNXsAN.js";import"./Popper-DnYwqT0E.js";import"./Button-C0Nq20QI.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DQxusNcL.js";import"./QueryClientProvider-BE6FMEZ7.js";import"./Link-D2bE_4v-.js";import"./Collapse-AFy-hdtE.js";import"./_baseUniq-BJC9OAaN.js";import"./_Uint8Array-DiWqlVCe.js";import"./isArray-D5aGXKVb.js";import"./_getTag-CrDNXku_.js";import"./isEqual-DzAD8Via.js";import"./merge-DvAwwU1t.js";import"./_initCloneObject-D-wpJOrp.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-XtNM26yZ.js";import"./inputBaseClasses-fWowbO6t.js";import"./calculateFriendlyFileSize-a0Vpzw6I.js";import"./CheckCircleTwoTone-DA7xpcMw.js";import"./InfoTwoTone-BXa-vZ7M.js";import"./useMutation-BpxcV4LA.js";import"./dayjs.min-CBqNYA7K.js";import"./chunk-AYJ5UCUI-GzZUB2J_.js";import"./cloneDeep-De-M-jex.js";import"./Skeleton-BAJIOENu.js";import"./SkeletonButton-CIBcS2Fo.js";import"./SkeletonInlineBlock-Bi9u8Ita.js";import"./SkeletonTable-BberXHj2.js";import"./times-YVXse940.js";import"./toInteger-vNPH3x0X.js";import"./toNumber-DpHlU2n1.js";import"./isSymbol-C_gBTdwP.js";import"./SkeletonParagraph-MZDwpn_r.js";import"./uniqueId-CxjkVFyc.js";import"./toString-C_ze70wo.js";import"./CSSTransition-BHReS0iM.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-2lbzCtcZ.js";import"./Avatar-BHnafmTl.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
