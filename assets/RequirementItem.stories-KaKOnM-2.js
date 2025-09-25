import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-ByZT2Kfc.js";import{d as s}from"./ToastMessage-UA7E2fzQ.js";import{R as n,a as t}from"./RequirementItem-CKvfrD0-.js";import{P as O}from"./Paper-ieaJEv4g.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Ck0SAQJm.js";import"./SynapseConstants-H2H4uJUY.js";import"./OrientationBanner-CK4-pjte.js";import"./index-Dp7LC-uS.js";import"./index-CPLnAWAL.js";import"./iframe-Cw_yZaV2.js";import"./spreadSx-CwcO6WA9.js";import"./react-CT2CPoKP.js";import"./FullWidthAlert-l1-NGKjy.js";import"./Alert-li6zxXuR.js";import"./createTheme-ChtqmcTg.js";import"./DefaultPropsProvider-CC2kaeZR.js";import"./useSlot-omfmVDzD.js";import"./useForkRef-C5BUgNSS.js";import"./createSimplePaletteValueFilter-pT0uCa3p.js";import"./createSvgIcon-B9ptMgVS.js";import"./Close-C0YdDub3.js";import"./IconButton-29B3UHc_.js";import"./useTimeout-Betqu8W3.js";import"./ButtonBase-Bqm1GJY2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-yW_HmXon.js";import"./Stack-LiOQB_FT.js";import"./extendSxProp-Buxb_804.js";import"./getThemeProps-CJPvSiqT.js";import"./useTheme-BhYP72KB.js";import"./Box-nyneOUy5.js";import"./AlertTitle-BmjQYwBY.js";import"./Typography-1GfpkFqt.js";import"./index-NVuPnC3E.js";import"./useTheme-Nym6qI7j.js";import"./ClickAwayListener-XweM7X4K.js";import"./getReactElementRef-_LpF0Sxi.js";import"./index-Cw5q5fsG.js";import"./index-hd-48767.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cj47bIQe.js";import"./Tooltip-Xzq95ZNX.js";import"./index-Bpvbg0qk.js";import"./useControlled-DiXAzLHp.js";import"./Popper-0YxxjHE0.js";import"./Button-GGnGFuhO.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-WlLeMRk4.js";import"./QueryClientProvider-h3dPF_D_.js";import"./Link-CgzQNGBC.js";import"./Collapse-PwrV_8LN.js";import"./_baseUniq-DYWY_jNP.js";import"./_Uint8Array-CuCmzQhK.js";import"./isArray-CtmyCLSC.js";import"./_getTag-CTKZEpNQ.js";import"./isEqual-CaRsZTl5.js";import"./merge-T85d_cJJ.js";import"./_initCloneObject-D9NhiOWJ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHH7H9w2.js";import"./inputBaseClasses-CPehs8P6.js";import"./calculateFriendlyFileSize-CYetzTdg.js";import"./CheckCircleTwoTone-BaJiyXQW.js";import"./InfoTwoTone-jSNHxiDk.js";import"./useMutation-2r_PMyuf.js";import"./dayjs.min-w8p9vUsD.js";import"./chunk-AYJ5UCUI-BO41wFUG.js";import"./cloneDeep-BIbNGKVC.js";import"./Skeleton-eCubiaGi.js";import"./SkeletonButton-pFV7Kj0C.js";import"./SkeletonInlineBlock-BgQVdgPp.js";import"./SkeletonTable-BkO81sTx.js";import"./times-CozXW8XX.js";import"./toInteger-BCn72wV8.js";import"./isSymbol-CpYpzfJO.js";import"./SkeletonParagraph-Dm--44AH.js";import"./uniqueId-mlR-3UF9.js";import"./toString-Cd2YTHKy.js";import"./CSSTransition-DSZNk4LY.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Z5rvfjKs.js";import"./Avatar-BoBGzj1O.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
