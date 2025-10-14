import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BBQbYZuJ.js";import{d as s}from"./ToastMessage-uSNqoqh9.js";import{R as n,a as t}from"./RequirementItem-BoLsURkq.js";import{P as O}from"./Paper-BzOGyJwo.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Cgzy-UOs.js";import"./SynapseConstants-BDAc_b3v.js";import"./OrientationBanner-B-ePgMgA.js";import"./index-gmBK_iDy.js";import"./index-DYU4zQP4.js";import"./iframe-Dzw5MRYT.js";import"./spreadSx-CwcO6WA9.js";import"./react-vlrGuRz8.js";import"./FullWidthAlert-DHE2a9_E.js";import"./Alert-DCImWyvQ.js";import"./createTheme-D6vtmGls.js";import"./DefaultPropsProvider-D79KYO17.js";import"./useSlot-BgeUbv5P.js";import"./useForkRef-B_b-SuM8.js";import"./createSimplePaletteValueFilter-DiVtTFlb.js";import"./createSvgIcon-CJq3GPug.js";import"./Close-ENGBsyeS.js";import"./IconButton-Do5oKPlN.js";import"./useTimeout-DSZInHOh.js";import"./ButtonBase-Cu3m8cFt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-N97qRnH8.js";import"./Stack-DTY49AsT.js";import"./useThemeProps-BwYz91DR.js";import"./getThemeProps-DTKeK2V7.js";import"./useTheme-jKwAIb8E.js";import"./extendSxProp-jOxRgKts.js";import"./Box-39RMP0Tq.js";import"./AlertTitle-wUZCnToq.js";import"./Typography-D_DaiChI.js";import"./index-Dar7vQJe.js";import"./useTheme-B6btaWkK.js";import"./ClickAwayListener-BnxSEmfx.js";import"./getReactElementRef-ae5BIBIv.js";import"./index-DLMJWAwA.js";import"./index-Q7xPuOjn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DMQBUM0r.js";import"./Tooltip-B8bILZi4.js";import"./index-B6fN69mf.js";import"./useControlled-DdNq8r6Y.js";import"./Popper-tgLzwkuw.js";import"./Button-BzugqlFq.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-E5rXX0Vh.js";import"./QueryClientProvider-CSdz-HYV.js";import"./Link-DK5p9S4e.js";import"./Collapse-Db_2nbsu.js";import"./_baseUniq-CBD_yH4a.js";import"./_Uint8Array-TncfCM6A.js";import"./isArray-C9PAhTKa.js";import"./_getTag-bNxNCrK-.js";import"./isEqual-DDB_N-aI.js";import"./noop-DX6rZLP_.js";import"./merge-DNRE-STY.js";import"./_initCloneObject-c2L5_zs5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Sl0_f7QX.js";import"./inputBaseClasses-snNCF3aG.js";import"./calculateFriendlyFileSize-DlLZ7LPJ.js";import"./CheckCircleTwoTone-OWQRjOdu.js";import"./InfoTwoTone-8gb8-LI8.js";import"./useMutation-LE6k3MXY.js";import"./dayjs.min-cfMBjx7E.js";import"./chunk-AYJ5UCUI-CRYqNbdW.js";import"./cloneDeep-BLVmDque.js";import"./Skeleton-yhG155b8.js";import"./SkeletonButton-DzASuh9y.js";import"./SkeletonInlineBlock-EXbRV5UE.js";import"./SkeletonTable-DSGln7MI.js";import"./times-BlUVaLCq.js";import"./toInteger-CkXpGADb.js";import"./isSymbol-DAxmQ6M7.js";import"./SkeletonParagraph-BxAZyWWp.js";import"./uniqueId-CDyS7OYF.js";import"./toString-ZvTL8d5u.js";import"./CSSTransition-rQbdVApR.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BOWzkCkA.js";import"./Avatar-CNViEm0-.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
