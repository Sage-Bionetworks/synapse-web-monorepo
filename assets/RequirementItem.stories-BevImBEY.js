import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-43EXGrsN.js";import{d as s}from"./ToastMessage-CCWFTOWt.js";import{R as n,a as t}from"./RequirementItem-BcLSRDLv.js";import{P as O}from"./Paper-D7ecR47B.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DHhpU89b.js";import"./SynapseConstants-CB8Sz7dU.js";import"./OrientationBanner-hTrQankP.js";import"./index-D0vu6z4F.js";import"./index-1NdgpKeG.js";import"./iframe-BVCs4XIv.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bh3dHSQv.js";import"./FullWidthAlert-9D0dStMg.js";import"./Alert-DsiUbUNV.js";import"./createTheme-xVdgCG2Z.js";import"./DefaultPropsProvider-DtDVHnHW.js";import"./useSlot-19A78PIb.js";import"./useForkRef-CwsXTZjB.js";import"./createSimplePaletteValueFilter-B-K6kzC2.js";import"./createSvgIcon-CoM42d11.js";import"./Close-ra3sU-bD.js";import"./IconButton-Jqcl1FCR.js";import"./useTimeout--1Vup-x4.js";import"./ButtonBase-CvfaG9fg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-dOwNu9AC.js";import"./Stack-xSrw6zja.js";import"./extendSxProp-IK5aZbjn.js";import"./getThemeProps-BxhnPNvq.js";import"./useTheme-xJG0eZgW.js";import"./Box-fCUvLKal.js";import"./AlertTitle-BjKOMb4O.js";import"./Typography-Bfwzdonu.js";import"./index-Cw5x1M4E.js";import"./useTheme-Cqv6EVU7.js";import"./ClickAwayListener-DKhLIoVT.js";import"./getReactElementRef-IrCKeVVF.js";import"./index-Cv_k6Nmf.js";import"./index-D9_WP2Ac.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B-J8hTfc.js";import"./Tooltip-Baq19PiH.js";import"./index-f4EwjVcV.js";import"./useControlled-B_AhfMUd.js";import"./Popper-Bly56UTy.js";import"./Button-DBL5mfsL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C5B8DZnM.js";import"./QueryClientProvider-BAH_7CkU.js";import"./Link-BkHcEeBu.js";import"./Collapse-DTAoykKm.js";import"./_baseUniq-_pOsj4Ic.js";import"./_Uint8Array-BWdg-OfF.js";import"./isArray-l4NiJBp5.js";import"./_getTag-CR8oz2FK.js";import"./isEqual-C5c0kD5A.js";import"./merge-CNgcJE1c.js";import"./_initCloneObject-D4cgbryH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BmnT4nNM.js";import"./inputBaseClasses-C7EIIvr1.js";import"./calculateFriendlyFileSize-D8GRXzjx.js";import"./CheckCircleTwoTone-RZp-vcbP.js";import"./InfoTwoTone-DSSjfjZh.js";import"./useMutation-D0aueLVp.js";import"./dayjs.min-D5j6ikUT.js";import"./chunk-AYJ5UCUI-CRjBeq-S.js";import"./cloneDeep-CCE_bhld.js";import"./Skeleton-Cy5on4Og.js";import"./SkeletonButton-39whBShT.js";import"./SkeletonInlineBlock-DFGGDsFO.js";import"./SkeletonTable-Bfsxr_zW.js";import"./times-qLg_WE6p.js";import"./toInteger-DzBN_K6s.js";import"./isSymbol-Cyd9Ke1A.js";import"./SkeletonParagraph-BBxI1wLy.js";import"./uniqueId-DT2fq4XV.js";import"./toString-CaVOP7uL.js";import"./CSSTransition-xPn1jDiQ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CBvc8EER.js";import"./Avatar-CkcHpYC-.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
