import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-2lX_1nnF.js";import{d as s}from"./ToastMessage-CwigBsvZ.js";import{R as n,a as t}from"./RequirementItem-DfYTTtqI.js";import{P as O}from"./Paper-D-DccQnO.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Cl7iPkP2.js";import"./SynapseConstants-k8J4G2g0.js";import"./OrientationBanner-Cay0I_Rt.js";import"./index-8ZlaN0KU.js";import"./index-CQ6hJmgW.js";import"./iframe-DBLSlUlM.js";import"./spreadSx-CwcO6WA9.js";import"./react-CekjFg9U.js";import"./FullWidthAlert-CbdaCswA.js";import"./Alert-hAudTaki.js";import"./createTheme-DcluBHDz.js";import"./DefaultPropsProvider-ZI2sxVbZ.js";import"./useSlot-66fkwDAg.js";import"./useForkRef-DooywLql.js";import"./createSimplePaletteValueFilter-oYjRqgE7.js";import"./createSvgIcon-CJYbEqxG.js";import"./Close-CHeVeGkX.js";import"./IconButton-Bh69he5-.js";import"./useTimeout-_fh52LB_.js";import"./ButtonBase-Bov65eTU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ASAwFG9e.js";import"./Stack-BtIxaE9P.js";import"./extendSxProp-YRmzrdHl.js";import"./getThemeProps-DSATpSeZ.js";import"./useTheme-27YPboVz.js";import"./Box-Cntk2MIO.js";import"./AlertTitle-D24R2e_4.js";import"./Typography-Dm61OQER.js";import"./index-Ci7ktC4R.js";import"./useTheme-BGuepDlr.js";import"./ClickAwayListener-VYYUrldH.js";import"./getReactElementRef-BoHY-GqX.js";import"./index-DGNyRJeG.js";import"./index-CIWwvEWD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DpHErTTs.js";import"./Tooltip-kPWKAtR8.js";import"./index-DLIdZaB1.js";import"./useControlled-CYPIr_yw.js";import"./Popper-Cpq6kGnG.js";import"./Button-D65AIMBA.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BLF80Y5p.js";import"./QueryClientProvider-LHOBn88c.js";import"./Link-DPVf6eQF.js";import"./Collapse-B5PXfbL3.js";import"./_baseUniq-C1GjGhSb.js";import"./_Uint8Array-VToj_l7w.js";import"./isArray-CCh7EMNH.js";import"./_getTag-DadTTLKK.js";import"./isEqual-DDdqe_xI.js";import"./merge-BIg5srE9.js";import"./_initCloneObject-DleR7C7U.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJT3-mqI.js";import"./inputBaseClasses-DXATOCIJ.js";import"./calculateFriendlyFileSize-BM-0xruH.js";import"./CheckCircleTwoTone-CKcbuZl5.js";import"./InfoTwoTone-yPYIEBIY.js";import"./useMutation-EAVGskWB.js";import"./dayjs.min-SyJWqs4d.js";import"./chunk-AYJ5UCUI-zqOAelV1.js";import"./cloneDeep-BdpZvwEq.js";import"./Skeleton-jZRJXesW.js";import"./SkeletonButton-nz9AKRVi.js";import"./SkeletonInlineBlock-MByo-9se.js";import"./SkeletonTable-BiGLsZlp.js";import"./times-lWFgWeTw.js";import"./toInteger-8aCWWukh.js";import"./isSymbol-KNtqQZzG.js";import"./SkeletonParagraph-rlYLFQuL.js";import"./uniqueId-CKz47GJY.js";import"./toString-DyQ4XWX5.js";import"./CSSTransition-DvVpW01J.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-deFMmpOO.js";import"./Avatar-BnKRMBNS.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
