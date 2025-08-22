import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CqcnpQhE.js";import{d as s}from"./ToastMessage-CYmMNcZa.js";import{R as n,a as t}from"./RequirementItem-qFJHFLxE.js";import{P as O}from"./Paper-CRp1MfuN.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-FYuonao8.js";import"./SynapseConstants-Co8dGAeQ.js";import"./OrientationBanner-BKyyQUa8.js";import"./index-DGf3smqW.js";import"./index-Dj1d4BqT.js";import"./iframe-TlcNnpHp.js";import"./spreadSx-CwcO6WA9.js";import"./react-DdDibM_d.js";import"./FullWidthAlert-C-IC2KrU.js";import"./Alert-DR4rcZNl.js";import"./createTheme-pvhOUZyw.js";import"./DefaultPropsProvider-B4wQ821E.js";import"./useSlot-IA_vObsD.js";import"./useForkRef-BHqKRelU.js";import"./createSimplePaletteValueFilter-D9dK7LRT.js";import"./createSvgIcon-Dj2HycGS.js";import"./Close-Dfx5VX34.js";import"./IconButton-5dp10n6T.js";import"./useTimeout-Cn8rA_AT.js";import"./ButtonBase-D6StLzVo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D5IZ-XOY.js";import"./Stack-CU3hXGpo.js";import"./extendSxProp-XPQdjpPF.js";import"./getThemeProps-C8ZyFRso.js";import"./useTheme-ChFb1gM-.js";import"./Box-BoJfoAK2.js";import"./AlertTitle-C9125y5h.js";import"./Typography-CeYlYS3n.js";import"./index-Gxu560yY.js";import"./useTheme-DzaEsJZx.js";import"./ClickAwayListener-DwWoVyJe.js";import"./getReactElementRef-CbVIyvnd.js";import"./index-B81YNvG1.js";import"./index-DtXhXAQj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DgiJlUnu.js";import"./Tooltip-BnCZGVg6.js";import"./index-CnaJhkGM.js";import"./useControlled-qa7mk4OM.js";import"./Popper-CqhVe4Td.js";import"./Button-LmC9B_pW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Bvww99u4.js";import"./QueryClientProvider-BDoqR9Ee.js";import"./Link-BW1h0oRf.js";import"./Collapse-BRcEHh_Y.js";import"./_baseUniq-XaDoym7p.js";import"./_Uint8Array-DqLRerek.js";import"./isArray-BCPw1xdT.js";import"./_getTag-TRalT4-G.js";import"./isEqual-pR9-SkGa.js";import"./merge-Cr6niOtn.js";import"./_initCloneObject-C35SbE2c.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTvapujN.js";import"./inputBaseClasses-B5I_2cVd.js";import"./calculateFriendlyFileSize-CX4zkHbj.js";import"./CheckCircleTwoTone-BiSJyRNH.js";import"./InfoTwoTone-xmh64BVe.js";import"./useMutation-Mah1Ry7w.js";import"./dayjs.min-D6rrA4r6.js";import"./chunk-AYJ5UCUI-ByReiuUj.js";import"./cloneDeep-Bph8_Rcw.js";import"./Skeleton-3reWCr-Q.js";import"./SkeletonButton-CmaSDjuL.js";import"./SkeletonInlineBlock-DqDa8fF3.js";import"./SkeletonTable-Bxvq2RD4.js";import"./times-Bc0nszxD.js";import"./toInteger-DjLUZAD0.js";import"./isSymbol-B92DLHMJ.js";import"./SkeletonParagraph-w2M19C0V.js";import"./uniqueId-CVrQywTt.js";import"./toString-DXMeLUKs.js";import"./CSSTransition-DUouFpi-.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BW_4OeRl.js";import"./Avatar-DWrS4p_f.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
