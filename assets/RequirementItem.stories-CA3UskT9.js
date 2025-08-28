import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-DQNr3wea.js";import{d as s}from"./ToastMessage-IjleT8uo.js";import{R as n,a as t}from"./RequirementItem-Cu-KfQf_.js";import{P as O}from"./Paper-BygyGcfV.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-Bt_N3vpj.js";import"./SynapseConstants-BB8OzD3R.js";import"./OrientationBanner-BEO4rv1t.js";import"./index-asLC9ga4.js";import"./index-BdZx4xpj.js";import"./iframe-zjLnwkzv.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1u-GmGm.js";import"./FullWidthAlert-BEXmar5a.js";import"./Alert-Bfqyji6Q.js";import"./createTheme-kzR4akzj.js";import"./DefaultPropsProvider-CWCpxBxd.js";import"./useSlot-aP1uZ7qh.js";import"./useForkRef-Bgvg9tv8.js";import"./createSimplePaletteValueFilter-CE58-ZFx.js";import"./createSvgIcon-BY1mZNtn.js";import"./Close-BUEMVr_E.js";import"./IconButton-CLIwP4E0.js";import"./useTimeout-Bm-Bpjmh.js";import"./ButtonBase-CxM_02eP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-P_cz5HVW.js";import"./Stack-yaTiXx4Y.js";import"./extendSxProp-BsTrlUHe.js";import"./getThemeProps-CktB0LLD.js";import"./useTheme-CyPid65-.js";import"./Box-wTUucE8E.js";import"./AlertTitle-qgTMfIkj.js";import"./Typography-DHkI5TaX.js";import"./index-DR51x3on.js";import"./useTheme-BUnTaqXN.js";import"./ClickAwayListener-BtLb1QoZ.js";import"./getReactElementRef-DOmJtLhe.js";import"./index-CXRqLqob.js";import"./index-WTFPHBSS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbWp4vYu.js";import"./Tooltip-CA5EjILG.js";import"./index-DzfT4G98.js";import"./useControlled-BZF0ZbLF.js";import"./Popper-B9ZUwJHJ.js";import"./Button-CQe7jZks.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-C18MkqUz.js";import"./QueryClientProvider-B3akeZRz.js";import"./Link-DM0HYHCv.js";import"./Collapse-leuZBKey.js";import"./_baseUniq-D51t2lVz.js";import"./_Uint8Array-Cs0wEeKK.js";import"./isArray-Da5kSjjI.js";import"./_getTag-C0DerptW.js";import"./isEqual-B5hfnNhw.js";import"./merge-D4hlKJHs.js";import"./_initCloneObject-BQvlM93A.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CNLiX1aT.js";import"./inputBaseClasses-BLqmrAZ9.js";import"./calculateFriendlyFileSize-DpwcpmGE.js";import"./CheckCircleTwoTone-6lBdI9xc.js";import"./InfoTwoTone-DjZOa90-.js";import"./useMutation-nz71tg0o.js";import"./dayjs.min-DcJlcSeq.js";import"./chunk-AYJ5UCUI-BAtatTO0.js";import"./cloneDeep-DDtjPt2-.js";import"./Skeleton-BInzLhzo.js";import"./SkeletonButton-KyUCB0K-.js";import"./SkeletonInlineBlock-BL6v8TIo.js";import"./SkeletonTable-CqlB2wyI.js";import"./times-CrMMOnKP.js";import"./toInteger-DplaRjwi.js";import"./isSymbol-Dvv5J75P.js";import"./SkeletonParagraph-Brr6ukk4.js";import"./uniqueId-4wCeM9iT.js";import"./toString-DgmfL_gv.js";import"./CSSTransition-BQU_dSTZ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-2eTrhkPm.js";import"./Avatar-Dwnr8rXf.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
