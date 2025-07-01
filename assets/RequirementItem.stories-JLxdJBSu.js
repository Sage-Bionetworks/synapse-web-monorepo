import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-D3jqWsXk.js";import{d as s}from"./ToastMessage-DY-DiUMG.js";import{R as n,a as t}from"./RequirementItem-BV6kj0wS.js";import{P as O}from"./Paper-BZmalIBk.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-Mm0wjKgi.js";import"./SynapseConstants-Bq_nwQvz.js";import"./OrientationBanner-Cr46aANW.js";import"./index-C2PgwLER.js";import"./index-DJ7s27gv.js";import"./iframe-D0CinymP.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAZu9DMF.js";import"./FullWidthAlert-QgWdp2sQ.js";import"./Alert-VR-3EFtA.js";import"./createTheme-DY7tfLgK.js";import"./DefaultPropsProvider-DsyVZICV.js";import"./useSlot-BHJawztZ.js";import"./useForkRef-Okwk8pY8.js";import"./createSimplePaletteValueFilter-CcGeRbxj.js";import"./createSvgIcon-B6jxSWW-.js";import"./Close-jJQJ0kak.js";import"./IconButton-_-2hYwOX.js";import"./useTimeout-BGSSVVff.js";import"./ButtonBase-DxqANTCq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuyFbQBS.js";import"./Stack-Dn2XtxPA.js";import"./extendSxProp-CR7IlrIo.js";import"./getThemeProps-2R3ivTTN.js";import"./useTheme-JQ5l8csr.js";import"./Box-BHiMh-E4.js";import"./AlertTitle-WUIko3Bq.js";import"./Typography-D1TFYjH9.js";import"./index-B0gLw_60.js";import"./useTheme-BUf5_UJX.js";import"./ClickAwayListener-C4cFrzuU.js";import"./getReactElementRef-Cn-IiLAf.js";import"./index-Buv9OFuL.js";import"./index-Dt-OJcf2.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DPqul1hx.js";import"./Tooltip-BCRDpw-n.js";import"./index-CJ9g_y5M.js";import"./useControlled-BHf7nHaI.js";import"./Popper-Dscz3i95.js";import"./Button-Z7sw75bx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-YHVYyVh2.js";import"./QueryClientProvider-CpZbvOo0.js";import"./Link-Cld4LcBu.js";import"./Collapse-bRHPsk0u.js";import"./_baseUniq-a8BoBjy6.js";import"./_Uint8Array-qccxbrbR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BO4v01KV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D4qE1r4v.js";import"./isEqual-BflAykTt.js";import"./merge-BWaq0l3a.js";import"./_initCloneObject-DjlzTU2t.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-e7XcL0GH.js";import"./inputBaseClasses-fpPDlCvI.js";import"./calculateFriendlyFileSize-F-WATwL6.js";import"./CheckCircleTwoTone-85F1yn7H.js";import"./InfoTwoTone-B6Id3oDW.js";import"./useMutation-CnDGJ8yC.js";import"./dayjs.min-iu3rbzLN.js";import"./chunk-AYJ5UCUI-_sMuqP7Q.js";import"./cloneDeep-bJNslP0j.js";import"./Skeleton-E4JfS37G.js";import"./SkeletonButton-CcUiIVhG.js";import"./SkeletonInlineBlock-CACtrf46.js";import"./SkeletonTable-k_aCFvPB.js";import"./times-Ds4bmrbX.js";import"./toInteger-CpOAH2xG.js";import"./isSymbol-4PpoEgCY.js";import"./SkeletonParagraph-RCl4baU_.js";import"./uniqueId-gHHfFB3k.js";import"./toString-DpBH1msh.js";import"./CSSTransition-CYYtxUWA.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DUfnqUoz.js";import"./Avatar-BTg-or3N.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
