import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-Cs45l-Gi.js";import{d as s}from"./ToastMessage-P2xVJemV.js";import{R as n,a as t}from"./RequirementItem-CymcOjcz.js";import{P as O}from"./Paper-DMerpT3E.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-aCWSWAso.js";import"./SynapseConstants-jp9wKPpM.js";import"./OrientationBanner-C49NGLZB.js";import"./index-BU-W081Q.js";import"./index-BEGWa4Ry.js";import"./iframe-DyziNYtI.js";import"./spreadSx-CwcO6WA9.js";import"./react-BO9w5j8-.js";import"./FullWidthAlert-DPQosDtk.js";import"./Alert-BgSDO_88.js";import"./createTheme-BM6fbPkX.js";import"./DefaultPropsProvider-CK6jGk8n.js";import"./useSlot-D4d0cObk.js";import"./useForkRef-rtjTJNVt.js";import"./createSimplePaletteValueFilter-Cqt07efk.js";import"./createSvgIcon-CLX4lN_X.js";import"./Close-DI4ggW3U.js";import"./IconButton-DI9Lqt7W.js";import"./useTimeout-C7hmtoO8.js";import"./ButtonBase-DPguynie.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cx7QuPxc.js";import"./Stack-B9UHdYg2.js";import"./extendSxProp-D5ioQJNi.js";import"./getThemeProps-DRRoKzoY.js";import"./useTheme-BtstI9CD.js";import"./Box-1I6cI6xH.js";import"./AlertTitle-BcvN8c9u.js";import"./Typography-CAQW-NY6.js";import"./index-DpaVPSjM.js";import"./useTheme-BX3uBi8F.js";import"./ClickAwayListener-DnDphmHD.js";import"./getReactElementRef-CGMID2A4.js";import"./index-TnCwIfHJ.js";import"./index-BrKdSJVb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B0BswoU1.js";import"./Tooltip-CeUgYBIY.js";import"./index-DuvbZtD4.js";import"./useControlled-B4F25ITx.js";import"./Popper-DIUp_XDc.js";import"./Button-Bm7TX8g7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CrfcJEr9.js";import"./QueryClientProvider-CjzIIn97.js";import"./Link-BPQKUItY.js";import"./Collapse-C8VtV78A.js";import"./_baseUniq-BZsY9y5z.js";import"./_Uint8Array-Di1ErWmf.js";import"./isArray-DY1dXgd_.js";import"./_getTag-b7Wmg8Vg.js";import"./isEqual-QY0Osar5.js";import"./merge-CM4560gQ.js";import"./_initCloneObject-D9hrF7uQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CL16HPzw.js";import"./inputBaseClasses-4fn_2VUd.js";import"./calculateFriendlyFileSize-NAMpL0_1.js";import"./CheckCircleTwoTone-BmF3aIaq.js";import"./InfoTwoTone-hEunn01X.js";import"./useMutation-D-mNA99o.js";import"./dayjs.min-IVvGcfpj.js";import"./chunk-AYJ5UCUI-Bxws8eAT.js";import"./cloneDeep-yvwKT0iA.js";import"./Skeleton-CcyMcWkv.js";import"./SkeletonButton-DZTMu6Kd.js";import"./SkeletonInlineBlock-CxOXssog.js";import"./SkeletonTable-BVFQRWoz.js";import"./times-CqvlktBJ.js";import"./toInteger-BgnMuFui.js";import"./toNumber-CiVsIbDz.js";import"./isSymbol-Nt35EaCK.js";import"./SkeletonParagraph-DM4xhkFf.js";import"./uniqueId-D3A-okAZ.js";import"./toString-D6fibzZ-.js";import"./CSSTransition-RRrTvsz-.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DoxmNtB-.js";import"./Avatar-DvGXVQBD.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
