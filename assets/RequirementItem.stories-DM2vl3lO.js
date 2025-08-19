import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-gsrVykJg.js";import{d as s}from"./ToastMessage-DThsWLQ8.js";import{R as n,a as t}from"./RequirementItem-D-twHiKm.js";import{P as O}from"./Paper-CSaS_LtD.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Ytdky5Hv.js";import"./SynapseConstants-BvrGj6lw.js";import"./OrientationBanner-sM82NAko.js";import"./index-PKk5EXBg.js";import"./index-tft_hvVL.js";import"./iframe-ByVz3vGl.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWc7b2d6.js";import"./FullWidthAlert-7J30yBJW.js";import"./Alert-hmr7wfmU.js";import"./createTheme-D72DCvX0.js";import"./DefaultPropsProvider-DyqqgsE6.js";import"./useSlot-DTowZYmK.js";import"./useForkRef-DXSW3ZwB.js";import"./createSimplePaletteValueFilter-bok6wC5d.js";import"./createSvgIcon-f38UBJLB.js";import"./Close-D1h61jvu.js";import"./IconButton-Fk4Arnlo.js";import"./useTimeout-BXN-MwvH.js";import"./ButtonBase-CnGL_3Pl.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D8GHvaNd.js";import"./Stack-TVTnDTYt.js";import"./extendSxProp-Hv4lV8Tg.js";import"./getThemeProps-CkAWUzzO.js";import"./useTheme-C_FKhabr.js";import"./Box-DjbpKZYa.js";import"./AlertTitle-Cvh62KZ2.js";import"./Typography-JdajvCPL.js";import"./index-BJQxZ24D.js";import"./useTheme-DBbQI9Bm.js";import"./ClickAwayListener-BMiVrY6o.js";import"./getReactElementRef-ClsoyndM.js";import"./index-DccWBQxT.js";import"./index-Bz9la_Ps.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BdvToMBL.js";import"./Tooltip-gnrqUofF.js";import"./index-D_FH4jRZ.js";import"./useControlled-C38J99Bx.js";import"./Popper-DdzpQDYq.js";import"./Button-8LCSo_0G.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CFSsiuvI.js";import"./QueryClientProvider-C_eZcWnv.js";import"./Link-DiZXY41K.js";import"./Collapse-D_i_VT8D.js";import"./_baseUniq-r7kFe03V.js";import"./_Uint8Array-DrM4e6d9.js";import"./isArray-Dtug4Rbz.js";import"./_getTag-DRAoyJQF.js";import"./isEqual-q--4FWoE.js";import"./merge-BsrvAOvL.js";import"./_initCloneObject-DywWhWXb.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DeOmrxWv.js";import"./inputBaseClasses-BsQd-fon.js";import"./calculateFriendlyFileSize-t35g4o3Y.js";import"./CheckCircleTwoTone-D4mD-KKk.js";import"./InfoTwoTone-C665QxZD.js";import"./useMutation-kQiGHfGp.js";import"./dayjs.min-BQ8GbnsT.js";import"./chunk-AYJ5UCUI-LyUcZO-_.js";import"./cloneDeep-C3HSA2al.js";import"./Skeleton-CpyiCVdu.js";import"./SkeletonButton-CpczgLE-.js";import"./SkeletonInlineBlock-DL_-cDcJ.js";import"./SkeletonTable-BC4HZjDo.js";import"./times-BwwltI0r.js";import"./toInteger-lWDlNNmv.js";import"./isSymbol-DItOVk5Y.js";import"./SkeletonParagraph-Bis0RBND.js";import"./uniqueId-4p-e8JQt.js";import"./toString-C1JsmjOe.js";import"./CSSTransition-Di-lAP5Y.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D-eLVTAB.js";import"./Avatar-BRJKAIwA.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
