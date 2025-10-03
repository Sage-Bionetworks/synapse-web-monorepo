import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-isEOdrNF.js";import{d as s}from"./ToastMessage-BEbXPJtN.js";import{R as n,a as t}from"./RequirementItem-Dn6QTh4V.js";import{P as O}from"./Paper-BJO20Q9K.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-I_Ljsvpl.js";import"./SynapseConstants-DXlbb83s.js";import"./OrientationBanner-DIMiS6-X.js";import"./index-ChlY0ty7.js";import"./index-DEXVlyEC.js";import"./iframe-CTaKRDzK.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4Ag4Khl.js";import"./FullWidthAlert-BQi4k6sm.js";import"./Alert-oJFeNTPf.js";import"./createTheme-DSMh9aMK.js";import"./DefaultPropsProvider-tscWNgRV.js";import"./useSlot-5fSGsjd4.js";import"./useForkRef-Bpi5glj8.js";import"./createSimplePaletteValueFilter-z7ViS40H.js";import"./createSvgIcon-IuSm3jpw.js";import"./Close-BYMa4NgR.js";import"./IconButton-B7n5ygWB.js";import"./useTimeout-Bcmt8HaF.js";import"./ButtonBase-CtgJMkFI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BXvEMjjW.js";import"./Stack-EBx-64RF.js";import"./useThemeProps-CwzyAdAY.js";import"./getThemeProps-BLGqyFKd.js";import"./useTheme-pMmDZBIO.js";import"./extendSxProp-DysauLlL.js";import"./Box-B7xLSVbU.js";import"./AlertTitle-DohnoRzz.js";import"./Typography-BV8NZaJG.js";import"./index-C2jv3Yen.js";import"./useTheme-nF84TQI6.js";import"./ClickAwayListener-DUKbMkLR.js";import"./getReactElementRef-C_fwGmzx.js";import"./index-CwKkrkMc.js";import"./index-Dv8O9azN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dvv4NuhG.js";import"./Tooltip-CivR37xg.js";import"./index-C1fK7QTW.js";import"./useControlled-Cy9MDY45.js";import"./Popper-DCuGWZxy.js";import"./Button-DWmqEVyK.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-lmzAG6mX.js";import"./QueryClientProvider-5d7cgiKu.js";import"./Link-Bcp540VX.js";import"./Collapse-DbB5zYpu.js";import"./_baseUniq-D6itCMNh.js";import"./_Uint8Array-CFylZ-gm.js";import"./isArray-gvpvXSFg.js";import"./_getTag-H4oDIWkK.js";import"./isEqual-hwpo_E0H.js";import"./noop-DX6rZLP_.js";import"./merge-Ckv_4s3g.js";import"./_initCloneObject-oqJaqUxv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CgqBXsZL.js";import"./inputBaseClasses-R5GcZRQ_.js";import"./calculateFriendlyFileSize-4KlCbfW-.js";import"./CheckCircleTwoTone-BPpE4vcS.js";import"./InfoTwoTone-C2z4ZzAx.js";import"./useMutation-DVVhu_SN.js";import"./dayjs.min-d6L6EHLF.js";import"./chunk-AYJ5UCUI-UVlhN5ws.js";import"./cloneDeep-Co63vGR4.js";import"./Skeleton-B3iwvpLy.js";import"./SkeletonButton-BWRM0Dij.js";import"./SkeletonInlineBlock-lUnoaja9.js";import"./SkeletonTable-CK152fT3.js";import"./times-DdMuS02x.js";import"./toInteger-5JZx54ve.js";import"./isSymbol-3W0mAepu.js";import"./SkeletonParagraph-Dr1sPB-1.js";import"./uniqueId-CLvuKtOO.js";import"./toString-D2E_Ez-s.js";import"./CSSTransition-ByCNcPb5.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-ZY6SACNC.js";import"./Avatar-Cv8neiOK.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
