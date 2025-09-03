import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-2CwEb_nI.js";import{d as s}from"./ToastMessage-BbC5lmUq.js";import{R as n,a as t}from"./RequirementItem-B8EKr3wH.js";import{P as O}from"./Paper-xpThwoIG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-BY7RR_24.js";import"./SynapseConstants-5wFUozBC.js";import"./OrientationBanner-Bi-PGINz.js";import"./index-CtXvjQZG.js";import"./index-yvy-db2D.js";import"./iframe-1q_ZXoNJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Z8wD_rYz.js";import"./FullWidthAlert-CoE9vDR_.js";import"./Alert-DCknF0A6.js";import"./createTheme-CiUfzjCM.js";import"./DefaultPropsProvider-DcOZysit.js";import"./useSlot-Z2GA-iSS.js";import"./useForkRef-beRYI9rx.js";import"./createSimplePaletteValueFilter-C1zgnp1T.js";import"./createSvgIcon-CL-Zh4hn.js";import"./Close-seSZeBuJ.js";import"./IconButton-dJCsQ0LH.js";import"./useTimeout-DNwjqBRA.js";import"./ButtonBase-Gt11VN7t.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4CUiK17.js";import"./Stack-xD0mjSDc.js";import"./extendSxProp-BVtlM31J.js";import"./getThemeProps-BueUQJN-.js";import"./useTheme-BJkLbB1K.js";import"./Box-VPHC_qet.js";import"./AlertTitle-BToGfpRY.js";import"./Typography-C40mCnbz.js";import"./index-Dfz0lUif.js";import"./useTheme-CVLuf0XX.js";import"./ClickAwayListener-D5QI5yc9.js";import"./getReactElementRef-ByzYBIwj.js";import"./index-xIq1_iwD.js";import"./index-C5pH_wbS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-A-RAayFp.js";import"./Tooltip-DCFIcbMu.js";import"./index-Q8rg9TUC.js";import"./useControlled-CPCJ5tB0.js";import"./Popper-DIjI2LY0.js";import"./Button-r7xQACsx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-X6st-VlV.js";import"./QueryClientProvider-DdXPuLGz.js";import"./Link-CWqmhl9r.js";import"./Collapse-8g1xf4pi.js";import"./_baseUniq-CsyBfxx_.js";import"./_Uint8Array-c111EMGA.js";import"./isArray-CGnJ5Q6W.js";import"./_getTag-CvnuNdI4.js";import"./isEqual-CoOAKsPN.js";import"./merge-BIptyiay.js";import"./_initCloneObject-BRxCbDFA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-JTkPoVCR.js";import"./inputBaseClasses-CHfnDXYO.js";import"./calculateFriendlyFileSize-CbAXs_BD.js";import"./CheckCircleTwoTone-BmvHMB2T.js";import"./InfoTwoTone-Cq9CFdau.js";import"./useMutation-DGiPDpom.js";import"./dayjs.min-B9RRCe8t.js";import"./chunk-AYJ5UCUI-CnetVj3K.js";import"./cloneDeep-BzGc9IrP.js";import"./Skeleton-JmOEAHCD.js";import"./SkeletonButton-1WQ8rnpx.js";import"./SkeletonInlineBlock-D2oQkChG.js";import"./SkeletonTable-Bxf7CoXV.js";import"./times-CGNryYZ_.js";import"./toInteger-Mj7CpQY8.js";import"./isSymbol-D80MTqA0.js";import"./SkeletonParagraph-CjBcZ6DC.js";import"./uniqueId-BvyZjsML.js";import"./toString-Db0AdUqz.js";import"./CSSTransition-9uDwY7_0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BIYeSmiK.js";import"./Avatar-BhB9GinT.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
