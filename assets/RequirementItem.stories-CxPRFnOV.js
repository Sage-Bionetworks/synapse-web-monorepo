import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DWxxeXSu.js";import{d as s}from"./ToastMessage-DoROuf2r.js";import{R as n,a as t}from"./RequirementItem-BvYZ0XqG.js";import{P as O}from"./Paper-Clly3oeS.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-TGgtgjjh.js";import"./SynapseConstants-DY-ZWqWj.js";import"./OrientationBanner-BsAJ1VN4.js";import"./index-BetcpSp7.js";import"./index-C2ak8tr3.js";import"./iframe-CW0KqQYK.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWzGHFet.js";import"./FullWidthAlert-7WvPAou7.js";import"./Alert-DWShSNdB.js";import"./createTheme-_ssnMRbb.js";import"./DefaultPropsProvider-BIDG4pXJ.js";import"./useSlot-Bq9ivddw.js";import"./useForkRef-Z2Y-bELM.js";import"./createSimplePaletteValueFilter-pNOTYgat.js";import"./createSvgIcon-92Jf5xwN.js";import"./Close-DLwY134N.js";import"./IconButton-B9fz6SQx.js";import"./useTimeout-BN7atgB-.js";import"./ButtonBase-M_04j4ij.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DRVjoqMe.js";import"./Stack-C33LiS6n.js";import"./extendSxProp-PxJDRmPe.js";import"./getThemeProps-a4OQxquJ.js";import"./useTheme-Dvg9yXlH.js";import"./Box-DGTuWuks.js";import"./AlertTitle-CaSguqi-.js";import"./Typography-Dr6RcEbm.js";import"./index-k4a5S4FR.js";import"./useTheme-BXUR3X8S.js";import"./ClickAwayListener-B1FHi0S5.js";import"./getReactElementRef--S2HWxD2.js";import"./index-CXQgeh8z.js";import"./index-DmlIIaFZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-YOgbFIOO.js";import"./Tooltip-BUwtrCCn.js";import"./index-4rl2JyrX.js";import"./useControlled-Dzw8XpFp.js";import"./Popper-CABWN7Vx.js";import"./Button-C39K_1ZT.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-D9KpUuvt.js";import"./QueryClientProvider-KOQjDy8j.js";import"./Link-66_rdqR4.js";import"./Collapse-Bd_gpmMp.js";import"./_baseUniq-CBgq_U0E.js";import"./_Uint8Array-C19SRruE.js";import"./isArray-DSS-_0au.js";import"./_getTag-DP8JEJLB.js";import"./isEqual-C2gIUU53.js";import"./merge-CYEF_ov9.js";import"./_initCloneObject-135bbAWh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D8locTG6.js";import"./inputBaseClasses-B7yIT1JM.js";import"./calculateFriendlyFileSize-I824E2ls.js";import"./CheckCircleTwoTone-BkKhg0mn.js";import"./InfoTwoTone-CRTl7KBx.js";import"./useMutation-DtwODZ-2.js";import"./dayjs.min-DNsScdeF.js";import"./chunk-AYJ5UCUI-C_JKew03.js";import"./cloneDeep-B_89qCS8.js";import"./Skeleton-BGjKXeYz.js";import"./SkeletonButton-Bu5_023G.js";import"./SkeletonInlineBlock-m3P9adKx.js";import"./SkeletonTable-DHOND0JR.js";import"./times-Bb_lXLy5.js";import"./toInteger-DSH-SYjU.js";import"./isSymbol-Cmj76aKG.js";import"./SkeletonParagraph-GAUNN-0_.js";import"./uniqueId-CFn3WVCP.js";import"./toString-qiODnod9.js";import"./CSSTransition-DI2Ob8Rq.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-0mH3a_mH.js";import"./Avatar-CveRR-w7.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
