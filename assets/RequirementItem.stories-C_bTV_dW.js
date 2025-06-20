import{j as a}from"./jsx-runtime-BEwiZqqY.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DGpx3T1J.js";import{d as s}from"./ToastMessage-BVGsMgFt.js";import{R as n,a as t}from"./RequirementItem-DA5oFJV0.js";import{P as O}from"./Paper-B-JdPdJU.js";import"./index-ChFhW-Al.js";import"./iframe-BDIPDNq-.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-CoPTJU2m.js";import"./SynapseConstants-BUskGhcf.js";import"./OrientationBanner-CPbkKQek.js";import"./index-IQx7kxSP.js";import"./spreadSx-CwcO6WA9.js";import"./react-BbfSSYil.js";import"./FullWidthAlert-BOO8eGDE.js";import"./Alert-CP_ZH_t2.js";import"./createTheme-Ci6KGXQR.js";import"./DefaultPropsProvider-BlteA6AR.js";import"./useSlot-nTDpiNCx.js";import"./useForkRef-BWiBtI0w.js";import"./createSimplePaletteValueFilter-CpZQzAHX.js";import"./createSvgIcon-Dew27WPy.js";import"./Close-B-NuZT7-.js";import"./IconButton-B0cLDBAl.js";import"./useTimeout-sh9t1mz6.js";import"./ButtonBase-bLST6SVW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0rw7mHGA.js";import"./Stack-C1sXbxMW.js";import"./extendSxProp-Aqw1KmhH.js";import"./getThemeProps-M3c_UKdt.js";import"./useTheme-BdKBLGwS.js";import"./Box-DEfo559R.js";import"./AlertTitle-DzsWEgBT.js";import"./Typography-Cf3i3BnW.js";import"./index-DGdGSDgm.js";import"./useTheme-C-oPGgQ8.js";import"./ClickAwayListener-KjH_W-vg.js";import"./getReactElementRef-Owx3bBor.js";import"./index-B5v3iApY.js";import"./index-BLOKhgvX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CUOtS4jF.js";import"./Tooltip-DCTnEZ2t.js";import"./index-kCbyR7e8.js";import"./useControlled-Ctg1L2cF.js";import"./Popper-C8qBGzSt.js";import"./Button-ybpmpbus.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-DQW1e0ji.js";import"./utils-DkfgZeN-.js";import"./Link-BHEmtyEW.js";import"./Collapse-BVbFoSTT.js";import"./_baseUniq-Dhs9PoiQ.js";import"./_Uint8Array-CWnTYOhE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DPtjXJm5.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CyaBrs7I.js";import"./isEqual-DXs3uMaR.js";import"./merge-C0wwPI46.js";import"./_initCloneObject-BMuVs7Aw.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvqjwpVD.js";import"./inputBaseClasses-B5YRdgVz.js";import"./calculateFriendlyFileSize-cAyroo8L.js";import"./CheckCircleTwoTone-CxrGtju7.js";import"./InfoTwoTone-WVgG-mPn.js";import"./useMutation-CIDB2zHb.js";import"./dayjs.min-BAOWiB_b.js";import"./chunk-AYJ5UCUI-K2UKqvT5.js";import"./cloneDeep-CAuTZ58R.js";import"./Skeleton-CHAkNa8l.js";import"./SkeletonButton-BaJgUNR2.js";import"./SkeletonInlineBlock-Dlez76gR.js";import"./SkeletonTable-B7FdLAFR.js";import"./times-NRXskARQ.js";import"./toInteger-BHfnqGGb.js";import"./isSymbol-DDS3_9en.js";import"./SkeletonParagraph-Bk-LAXcN.js";import"./uniqueId-jugmy2iT.js";import"./toString-BjGwb4Vw.js";import"./CSSTransition-BMGFvt-7.js";import"./ConditionalWrapper-Cgk2qp15.js";import"./LockTwoTone-x1QTzkry.js";import"./Avatar-DpE94gHS.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
