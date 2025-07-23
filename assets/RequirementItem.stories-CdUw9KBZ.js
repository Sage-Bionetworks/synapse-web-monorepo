import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BzEWn9ll.js";import{d as s}from"./ToastMessage-C_cLmBo1.js";import{R as n,a as t}from"./RequirementItem-BVQ7-uDc.js";import{P as O}from"./Paper-rl2XeBHU.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BQgeR-8x.js";import"./SynapseConstants-BNgiZuII.js";import"./OrientationBanner-27sPHSvY.js";import"./index-DlQ8Rxo6.js";import"./index-C7A9hLup.js";import"./iframe-DYHn9FoU.js";import"./spreadSx-CwcO6WA9.js";import"./react-9RKrzU1j.js";import"./FullWidthAlert-CBJpLxoh.js";import"./Alert-Dkq6FKuF.js";import"./createTheme-Bs3gvIc1.js";import"./DefaultPropsProvider-IokPXP0z.js";import"./useSlot-Beyp9NpN.js";import"./useForkRef-jebBSqDW.js";import"./createSimplePaletteValueFilter-miHcWXXO.js";import"./createSvgIcon-BCzRTN0-.js";import"./Close-UNtzqSQ6.js";import"./IconButton-CpIHqhTv.js";import"./useTimeout-O_ZJW0DC.js";import"./ButtonBase-Vh4sHaAq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DP1zvZ6B.js";import"./Stack-cBDUEwoU.js";import"./extendSxProp-DVhrI1Yp.js";import"./getThemeProps-CU5Sm-rK.js";import"./useTheme-CLzZjeP0.js";import"./Box-DRej04OG.js";import"./AlertTitle-DdK7THqv.js";import"./Typography-RsNMpAQC.js";import"./index-BO4R3ads.js";import"./useTheme-CjdEEB0o.js";import"./ClickAwayListener-0ZoK3Jws.js";import"./getReactElementRef-DVxyBdsm.js";import"./index-BFMqbgTj.js";import"./index-BEbzCxs1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DNZW_rFC.js";import"./Tooltip--Jyxve2u.js";import"./index-C6nIQqN4.js";import"./useControlled-BdpGnz5r.js";import"./Popper-BeZ4pCzN.js";import"./Button-DjtaKSRa.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CFCjlTK1.js";import"./QueryClientProvider-BvIlhMXk.js";import"./Link-CPYMTjHA.js";import"./Collapse-lrzrXUVs.js";import"./_baseUniq-DBnix07j.js";import"./_Uint8Array-CRbAemZL.js";import"./isArray-C1rE2XmZ.js";import"./_getTag-C5r8l2eL.js";import"./isEqual-DXuy0wpW.js";import"./merge-BG42TlLL.js";import"./_initCloneObject-Cnn1Dw6z.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CLwgXDNC.js";import"./inputBaseClasses-CZCwbHKV.js";import"./calculateFriendlyFileSize-DzX2RpVC.js";import"./CheckCircleTwoTone-CdnWGJLw.js";import"./InfoTwoTone-BKQBqHsa.js";import"./useMutation-XRBeUDdd.js";import"./dayjs.min-BDm4eXvA.js";import"./chunk-AYJ5UCUI-DnO7bFxv.js";import"./cloneDeep-Yf7z2hzg.js";import"./Skeleton-BC1ZrhQc.js";import"./SkeletonButton-CezhAhD0.js";import"./SkeletonInlineBlock-C2Q_sKne.js";import"./SkeletonTable-2EvCnS7v.js";import"./times-aWgjyVRb.js";import"./toInteger-nla-Btfn.js";import"./toNumber-CnP-vKku.js";import"./isSymbol-DUY49TbU.js";import"./SkeletonParagraph-BJWzG5RJ.js";import"./uniqueId-BK6yY5QG.js";import"./toString-CWPvdJ5p.js";import"./CSSTransition-DFodNtnn.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Dy17gKcC.js";import"./Avatar-BKStHPj4.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
