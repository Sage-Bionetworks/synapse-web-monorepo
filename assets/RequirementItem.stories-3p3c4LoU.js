import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DxNkxYgm.js";import{d as s}from"./ToastMessage-DhzLtQYB.js";import{R as n,a as t}from"./RequirementItem-CBLGMib4.js";import{P as O}from"./Paper-C_uMHdL9.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-C0wpA-d_.js";import"./SynapseConstants-JBI0Es1I.js";import"./OrientationBanner-COPAbD7L.js";import"./index-CwE58A9m.js";import"./index-CjphnBVq.js";import"./iframe-lrU9LFdV.js";import"./spreadSx-CwcO6WA9.js";import"./react-DZcK9S5a.js";import"./FullWidthAlert-CbPGHvf_.js";import"./Alert-CIWmEJq-.js";import"./createTheme-BPIzYAQ4.js";import"./DefaultPropsProvider-8bXZbYL1.js";import"./useSlot-CXduKSdS.js";import"./useForkRef-BCxYFCZR.js";import"./createSimplePaletteValueFilter-DHFVVwmG.js";import"./createSvgIcon-DvMnD2YN.js";import"./Close-rUHC_DQp.js";import"./IconButton-Bs0ai_J-.js";import"./useTimeout-CpGExdCe.js";import"./ButtonBase-DopOzCsI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIOMIAjp.js";import"./Stack-WJUHS1r0.js";import"./extendSxProp-BIlFRqHM.js";import"./getThemeProps-uQ8hgx0D.js";import"./useTheme-B9jQ-kBM.js";import"./Box-CE79B8x9.js";import"./AlertTitle-BH1lsmU_.js";import"./Typography-7Pmswjzs.js";import"./index-DszYsPoe.js";import"./useTheme-JbJccATr.js";import"./ClickAwayListener-CrAE0rE1.js";import"./getReactElementRef-CLp1aBoV.js";import"./index-CrHb8yv-.js";import"./index-VcmQi6lf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-61qwQvNa.js";import"./Tooltip-TpIeJkLt.js";import"./index-DK18_Xx-.js";import"./useControlled-etNhPZko.js";import"./Popper-DYxd-Od2.js";import"./Button-D4fZkcfM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DkpmWgzX.js";import"./QueryClientProvider-AOo7dBFH.js";import"./Link-pWm405cE.js";import"./Collapse-BuHDYAZF.js";import"./_baseUniq-iWgxwqbF.js";import"./_Uint8Array-D2ZRe-Ez.js";import"./isArray-CDuSSvaA.js";import"./_getTag-CEAP-oYs.js";import"./isEqual--LWBi94p.js";import"./merge-CHhIB990.js";import"./_initCloneObject-DPVuJmCo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Qi7ViT4V.js";import"./inputBaseClasses-C9WzNq0T.js";import"./calculateFriendlyFileSize-BEXL1JFB.js";import"./CheckCircleTwoTone-C_snamD8.js";import"./InfoTwoTone-C2eBdVRG.js";import"./useMutation-CsZj5iug.js";import"./dayjs.min-DJQA-fAv.js";import"./chunk-AYJ5UCUI-Cw3dHB7K.js";import"./cloneDeep-DmQugvYe.js";import"./Skeleton-BueRTKgW.js";import"./SkeletonButton-zwSPCLKI.js";import"./SkeletonInlineBlock-u1h7-qEB.js";import"./SkeletonTable-CAyTR4rk.js";import"./times-Cdq4Lr5g.js";import"./toInteger-DZ8pGUKa.js";import"./isSymbol-gFICiD8Q.js";import"./SkeletonParagraph-KRIZiwDr.js";import"./uniqueId-CHPK-Ai5.js";import"./toString-BRMj_vSx.js";import"./CSSTransition-D2kVkxDJ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BfkOIxl8.js";import"./Avatar-CZUIxFR9.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
