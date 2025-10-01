import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BPdviUOi.js";import{d as s}from"./ToastMessage-BgAWGQta.js";import{R as n,a as t}from"./RequirementItem-D_W5VrVM.js";import{P as O}from"./Paper-B1zZt7O7.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-G66KxfZQ.js";import"./SynapseConstants-CHsDh7RO.js";import"./OrientationBanner-DGQnFCDH.js";import"./index-cEXOR-s0.js";import"./index-DiXMM0wQ.js";import"./iframe-Cz30SbtZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_LjTTx-.js";import"./FullWidthAlert-CTeztU2Z.js";import"./Alert-qGFNccp3.js";import"./createTheme-C6Taoo5g.js";import"./DefaultPropsProvider-Bui4IzwN.js";import"./useSlot-Ds0Mc0Ou.js";import"./useForkRef-Cc3SVOJt.js";import"./createSimplePaletteValueFilter-BaC-FLVO.js";import"./createSvgIcon-DYM86rZv.js";import"./Close-Clq7eSLy.js";import"./IconButton-COwuqtT4.js";import"./useTimeout-CYUA101b.js";import"./ButtonBase-Bo73fpiC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DyDjhxBI.js";import"./Stack-DmcIcguA.js";import"./extendSxProp-C7hIpNK4.js";import"./getThemeProps-D5cDfXzu.js";import"./useTheme-DFVbi8Ay.js";import"./Box-k_g3WZ6l.js";import"./AlertTitle-BWUKECEn.js";import"./Typography-CT4xLIUA.js";import"./index-BFBmiiq7.js";import"./useTheme-EuFAtu8l.js";import"./ClickAwayListener-tl_dLV2J.js";import"./getReactElementRef-D01GUzN3.js";import"./index-C-D1k6wC.js";import"./index-DJgSRtY2.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C0nCZHMB.js";import"./Tooltip-Cs1bMaIY.js";import"./index-CWcOH_w-.js";import"./useControlled-BEO5kqGQ.js";import"./Popper-CH3jVZGd.js";import"./Button-DDb1CEug.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-XvHzqDjO.js";import"./QueryClientProvider-DW6QrWAK.js";import"./Link-WN2Ht7C2.js";import"./Collapse-DH6lKLpe.js";import"./_baseUniq-kvNiw2RP.js";import"./_Uint8Array-DoEymzPe.js";import"./isArray-abBARDY4.js";import"./_getTag-CGMrV_Eo.js";import"./isEqual-Dl6e1zWB.js";import"./merge-Csthr0QZ.js";import"./_initCloneObject-BVPOTz7a.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BRRG5DzI.js";import"./inputBaseClasses-DlDltUjN.js";import"./calculateFriendlyFileSize-BrqlOu-4.js";import"./CheckCircleTwoTone-sKhpjZEv.js";import"./InfoTwoTone-CMUbsSvw.js";import"./useMutation-CS9idiqR.js";import"./dayjs.min-C0Wpa3r2.js";import"./chunk-AYJ5UCUI-CIeRibBH.js";import"./cloneDeep-CHykcOUR.js";import"./Skeleton-qy9X9A7k.js";import"./SkeletonButton-C043_GVS.js";import"./SkeletonInlineBlock-C-zeqZWl.js";import"./SkeletonTable-DQdkgwPh.js";import"./times-BGBaWeBv.js";import"./toInteger-NIEYp5Wi.js";import"./isSymbol-D2zsJq7i.js";import"./SkeletonParagraph-CQ-ra46k.js";import"./uniqueId-Dak7DqKW.js";import"./toString-Coc8hyOq.js";import"./CSSTransition-BhWHW49E.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-298DhFYI.js";import"./Avatar-CruNeozX.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
