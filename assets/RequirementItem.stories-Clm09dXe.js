import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-CoJsVjPR.js";import{d as s}from"./ToastMessage-Bfw-3Vf2.js";import{R as n,a as t}from"./RequirementItem-CTuzBfu4.js";import{P as O}from"./Paper-DvzBAoOz.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BaJAH9XY.js";import"./SynapseConstants-DMGIdueU.js";import"./OrientationBanner-DUshzBaI.js";import"./index-B_lRpC5f.js";import"./index-CSE36ICp.js";import"./iframe-CqSJpTCy.js";import"./spreadSx-CwcO6WA9.js";import"./react-Btp66E_r.js";import"./FullWidthAlert-myzi9ql8.js";import"./Alert-DRyQ6wfY.js";import"./createTheme-C6bqhua0.js";import"./DefaultPropsProvider-BfKrtFVi.js";import"./useSlot-DIEd0YVT.js";import"./useForkRef-RXrVeQ0C.js";import"./createSimplePaletteValueFilter-D-iyMC-H.js";import"./createSvgIcon-CSAfthzH.js";import"./Close-BR86yxSt.js";import"./IconButton-CYDSApHG.js";import"./useTimeout-CCItwXi2.js";import"./ButtonBase--22gFC1F.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DONuS5NU.js";import"./Stack-BjN-nToO.js";import"./extendSxProp-DAzojmTC.js";import"./getThemeProps-byGOx03y.js";import"./useTheme-I3E3ZiMz.js";import"./Box-CoETCWSt.js";import"./AlertTitle-Br7tF-tW.js";import"./Typography-LYiyWESH.js";import"./index-CHoUYjX-.js";import"./useTheme-lnmLpkgY.js";import"./ClickAwayListener-DUqqEUmv.js";import"./getReactElementRef-DeFkALY0.js";import"./index-Bni9IJvc.js";import"./index-DUhGnweT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BpSK5ccS.js";import"./Tooltip-B4zpHuik.js";import"./index-pemOETow.js";import"./useControlled-DODXT4o6.js";import"./Popper-DqlH9wRI.js";import"./Button-B6J3WU5D.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-D4BdxgaS.js";import"./QueryClientProvider-CBlIsH89.js";import"./Link-Ce593ddH.js";import"./Collapse-B-_w-6g2.js";import"./_baseUniq-OIB7YxdY.js";import"./_Uint8Array-BSMQ2YmQ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Btd4GiYg.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BYQCS-dN.js";import"./isEqual-Dlkt8XhN.js";import"./merge-D9JTs6nR.js";import"./_initCloneObject-uNg5fFXM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DdbMU_xb.js";import"./inputBaseClasses-BKWB4umQ.js";import"./calculateFriendlyFileSize-DTSCAOkD.js";import"./CheckCircleTwoTone-DJVxAojM.js";import"./InfoTwoTone-I2WNyAv4.js";import"./useMutation-DkX2R8XR.js";import"./dayjs.min-Dx4KCr9S.js";import"./chunk-AYJ5UCUI-BeQIqwMB.js";import"./cloneDeep-BG4tgoNc.js";import"./Skeleton-CpGRarIH.js";import"./SkeletonButton-COM5I_bm.js";import"./SkeletonInlineBlock-BtdpDxlL.js";import"./SkeletonTable-BNI9VzEp.js";import"./times-n07ubQP6.js";import"./toInteger-CkKhzqj6.js";import"./isSymbol-DUOycPea.js";import"./SkeletonParagraph-TY29K-1r.js";import"./uniqueId-Bi0YhJH2.js";import"./toString-tgXTTq_P.js";import"./CSSTransition-D2ye61nr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CaQ3xciu.js";import"./Avatar-SbnekJ_L.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
