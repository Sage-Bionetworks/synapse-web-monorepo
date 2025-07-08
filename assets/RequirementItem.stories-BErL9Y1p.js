import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-CHuoITrE.js";import{d as s}from"./ToastMessage-DtBc4CpK.js";import{R as n,a as t}from"./RequirementItem-1hZ7Z1i8.js";import{P as O}from"./Paper-DPyh2a0v.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-EGfN7v81.js";import"./SynapseConstants-HZfgxyVC.js";import"./OrientationBanner-bKncPt7L.js";import"./index-AqVxOODs.js";import"./index-C4cZfyta.js";import"./iframe-CQBsSkH1.js";import"./spreadSx-CwcO6WA9.js";import"./react-DOljhHAU.js";import"./FullWidthAlert-DnpZV_UO.js";import"./Alert-DcJw1Yal.js";import"./createTheme-DKCGYC74.js";import"./DefaultPropsProvider-COwBkssq.js";import"./useSlot-DfJG0AmY.js";import"./useForkRef-BF8W8g8e.js";import"./createSimplePaletteValueFilter-DHrQxoJ8.js";import"./createSvgIcon-DlknZ8DT.js";import"./Close-BoeY2J99.js";import"./IconButton-CwYzm24i.js";import"./useTimeout-CW0CeN_n.js";import"./ButtonBase-C-h7fRM9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-K8HXy70m.js";import"./Stack-2tRDeGT2.js";import"./extendSxProp-BrBmoHLs.js";import"./getThemeProps-B-F6rZRM.js";import"./useTheme-CHQao_Ky.js";import"./Box-D9QD3wi2.js";import"./AlertTitle-DOFVO6ug.js";import"./Typography-Dt7Vbgv5.js";import"./index-BSdJvT-T.js";import"./useTheme-EUM0u8OS.js";import"./ClickAwayListener-BMl-2hNa.js";import"./getReactElementRef-CpsFMufv.js";import"./index-GslO3b7v.js";import"./index-C8oq6Qy8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B2J6GiXL.js";import"./Tooltip-DmYP4Mhv.js";import"./index-CIMObRwO.js";import"./useControlled-mUKNRlyv.js";import"./Popper-ChHHXfih.js";import"./Button-E__CqjIq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BlFfdln7.js";import"./QueryClientProvider-CIB_lo7b.js";import"./Link-BXKNZ-pa.js";import"./Collapse-DtwYkYUA.js";import"./_baseUniq-CvjW1C9G.js";import"./_Uint8Array-kotwdY3J.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C483-sDY.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CWYJuwg9.js";import"./isEqual-HSfSQqhG.js";import"./merge-D-oin5d0.js";import"./_initCloneObject-DytxOhH4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cy8MZmCt.js";import"./inputBaseClasses-8zZPEIN8.js";import"./calculateFriendlyFileSize-B9p2qUuN.js";import"./CheckCircleTwoTone-B4zrJ57y.js";import"./InfoTwoTone-sF1vwWjh.js";import"./useMutation-CdwcMr7m.js";import"./dayjs.min-prqqaKU9.js";import"./chunk-AYJ5UCUI-D3OBuXyF.js";import"./cloneDeep-D07pjg3R.js";import"./Skeleton-CisoqfmN.js";import"./SkeletonButton-B5Ez4GK5.js";import"./SkeletonInlineBlock--cJc0sRg.js";import"./SkeletonTable-BqWoeiUw.js";import"./times-Bq8kLufJ.js";import"./toInteger-DuLZQDQI.js";import"./isSymbol-D2ogu3ep.js";import"./SkeletonParagraph-CSIycsAY.js";import"./uniqueId-Oscfm_ln.js";import"./toString-Dyy_rTw4.js";import"./CSSTransition-Ca-aLGgE.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DH4vrZy1.js";import"./Avatar-Co_ghmqe.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
