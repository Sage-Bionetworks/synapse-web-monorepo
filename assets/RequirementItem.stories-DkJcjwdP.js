import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-D3EMk6og.js";import{d as s}from"./ToastMessage-C3KZnEf4.js";import{R as n,a as t}from"./RequirementItem-dvn9Swiq.js";import{P as O}from"./Paper-tceDeyQ-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Ds_bREMK.js";import"./SynapseConstants-D489MFxy.js";import"./OrientationBanner-DQLq-M9F.js";import"./index-CKFZHx8F.js";import"./index-KO5yBezO.js";import"./iframe-BWtzi3Fu.js";import"./spreadSx-CwcO6WA9.js";import"./react-D5Kw-Idf.js";import"./FullWidthAlert-COzh-JV3.js";import"./Alert-DxH2xLmB.js";import"./createTheme-BiMww641.js";import"./DefaultPropsProvider-BoHZ1rqc.js";import"./useSlot-HveTRmcP.js";import"./useForkRef-CTzi7RL5.js";import"./createSimplePaletteValueFilter-UnnRFOda.js";import"./createSvgIcon-C9ylNz7Z.js";import"./Close-BjY3tzYx.js";import"./IconButton-D1QHohjU.js";import"./useTimeout-D67sEVIl.js";import"./ButtonBase-CZrPHVPS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIeVfw1I.js";import"./Stack-CvutscYA.js";import"./useThemeProps-DfEwavVO.js";import"./getThemeProps-D-9myJJW.js";import"./useTheme-CM4wnLKj.js";import"./extendSxProp-mBp2xHbV.js";import"./Box-BDifCyM8.js";import"./AlertTitle-BpztvcIe.js";import"./Typography-CxNE9IZM.js";import"./index-By9_PeXc.js";import"./useTheme-BqZaM65K.js";import"./ClickAwayListener-DVtkFkiL.js";import"./getReactElementRef-D7Qedxf3.js";import"./index-Dr_d-L0h.js";import"./index-Bh8b_a61.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bai82ClR.js";import"./Tooltip-v-ea6aM6.js";import"./index-B3fWEhVy.js";import"./useControlled-B7xU-BaO.js";import"./Popper-BD0dU3Wk.js";import"./Button-BDASUTyZ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-C4kyH3KQ.js";import"./QueryClientProvider-CWGnu1_a.js";import"./Link-hRQmmRQx.js";import"./Collapse-vR8OSL7u.js";import"./_baseUniq-CLUAcwzD.js";import"./_Uint8Array-B97Nrg_E.js";import"./isArray-ZF-H6sf6.js";import"./_getTag-Dv5kflz0.js";import"./isEqual-hUxn6nkp.js";import"./noop-DX6rZLP_.js";import"./merge-B4VAHq3z.js";import"./_initCloneObject-DiMowaiZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-QhzadI6Z.js";import"./inputBaseClasses-DfpAAtBx.js";import"./calculateFriendlyFileSize-B_nf1MCd.js";import"./CheckCircleTwoTone-CERx72Pg.js";import"./InfoTwoTone-aw-Y5OVy.js";import"./useMutation-BYw0U5y_.js";import"./dayjs.min-CBt31E3Q.js";import"./chunk-AYJ5UCUI-DRnCpsds.js";import"./cloneDeep-BLJ74t8I.js";import"./Skeleton-BPL1hR_k.js";import"./SkeletonButton-b7Gcao7i.js";import"./SkeletonInlineBlock-DPhIpM8D.js";import"./SkeletonTable-DOEjWw_A.js";import"./times-B2NJ-ZD7.js";import"./toInteger-DM8hGqiC.js";import"./isSymbol-nb2lI7Ve.js";import"./SkeletonParagraph-5pEFRYdk.js";import"./uniqueId-C7XJVwZH.js";import"./toString-4pmRbB0O.js";import"./CSSTransition-MJ0XgBGW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BWSX34Us.js";import"./Avatar-C0fm7BAQ.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
