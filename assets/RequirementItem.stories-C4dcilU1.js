import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-cdEylaJW.js";import{d as s}from"./ToastMessage-BZZFBJBW.js";import{R as n,a as t}from"./RequirementItem-CuCGumbb.js";import{P as O}from"./Paper-Ct4ctbAN.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-kZSrZ9Ud.js";import"./SynapseConstants-DYoP0nRn.js";import"./OrientationBanner-Qk1K_6I6.js";import"./index-D_uc9XbK.js";import"./index-xmm9gAaY.js";import"./iframe-BLfO6aD9.js";import"./spreadSx-CwcO6WA9.js";import"./react-CuMjtN5y.js";import"./FullWidthAlert-Bz88xFci.js";import"./Alert-RiqhnlRv.js";import"./createTheme-DVClLd7X.js";import"./DefaultPropsProvider-3eyk2Txf.js";import"./useSlot-CHgLn1WK.js";import"./useForkRef-DvtekOdY.js";import"./createSimplePaletteValueFilter-DA4fbU4r.js";import"./createSvgIcon-6kteNG6A.js";import"./Close-h06LoBnq.js";import"./IconButton-gHyFlbtt.js";import"./useTimeout-CTZN5zBp.js";import"./ButtonBase-Basorg-T.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CHoQ7_Rd.js";import"./Stack-PI8hM1BB.js";import"./extendSxProp-DX_Fz431.js";import"./getThemeProps-Bwr70u8D.js";import"./useTheme-BLayVfxu.js";import"./Box-BCntL9FC.js";import"./AlertTitle-BcRK1r2c.js";import"./Typography-BXb4EtOU.js";import"./index-PDnFGU16.js";import"./useTheme-CH7R4AfQ.js";import"./ClickAwayListener-LzdKEsFM.js";import"./getReactElementRef-sTjaeLV5.js";import"./index-PRSM6i0G.js";import"./index-B_u2j2y1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-R6SW3_B-.js";import"./Tooltip-3Repz8AZ.js";import"./index-BkSClrnh.js";import"./useControlled-Bi_oKIMR.js";import"./Popper-CtFkY9eE.js";import"./Button-BQ9hegyQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-BwJgRCPd.js";import"./QueryClientProvider-DIZJNeGl.js";import"./Link-2vRBwpyb.js";import"./Collapse-Dt2LMx-J.js";import"./_baseUniq-DO6MvtTY.js";import"./_Uint8Array-Barbc0xF.js";import"./isArray-DqJyE-ae.js";import"./_getTag-B4HID6kO.js";import"./isEqual-BMQBBpcz.js";import"./merge-CX1TyP4Z.js";import"./_initCloneObject-B8h9bv3d.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3n2ow4P.js";import"./inputBaseClasses-DgLki_aL.js";import"./calculateFriendlyFileSize-ByLDm4LS.js";import"./CheckCircleTwoTone-DdN3AAbf.js";import"./InfoTwoTone-CpJjxsZv.js";import"./useMutation-Cw8UnkpD.js";import"./dayjs.min-D3LjA4Zc.js";import"./chunk-AYJ5UCUI-D97_DYX9.js";import"./cloneDeep-DParBPEr.js";import"./Skeleton-Cmw2ajBl.js";import"./SkeletonButton-50Vn_leE.js";import"./SkeletonInlineBlock-CclRdMp6.js";import"./SkeletonTable-erIV_FNY.js";import"./times-D10uqsya.js";import"./toInteger-Be8wxs-9.js";import"./toNumber-DH3Hrw3G.js";import"./isSymbol-b7QA7Vym.js";import"./SkeletonParagraph-2KhL0Kvx.js";import"./uniqueId-BZdbqHxw.js";import"./toString-DMeSHgQ_.js";import"./CSSTransition-YIDCAmBS.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B-EI8Xm2.js";import"./Avatar-BEgUSoKB.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
