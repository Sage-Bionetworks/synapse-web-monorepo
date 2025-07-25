import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DTgdCjDX.js";import{d as s}from"./ToastMessage-DG1arOTk.js";import{R as n,a as t}from"./RequirementItem-DbIqm1mn.js";import{P as O}from"./Paper-CLWPxyqR.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DQOlJ2f-.js";import"./SynapseConstants-BxZHzYZ1.js";import"./OrientationBanner-BnczYPRW.js";import"./index-DKbB702X.js";import"./index-ERVYNuyh.js";import"./iframe-DaTTE08J.js";import"./spreadSx-CwcO6WA9.js";import"./react-C_JnUbZh.js";import"./FullWidthAlert-C-Rtob1u.js";import"./Alert-CPJB_OGQ.js";import"./createTheme-9vZMWLEN.js";import"./DefaultPropsProvider-Kp6ysrGJ.js";import"./useSlot-Hm8GCRcL.js";import"./useForkRef-BHRbSyPv.js";import"./createSimplePaletteValueFilter-CtWksluw.js";import"./createSvgIcon-mPCKXbeo.js";import"./Close-CBFZ7DCS.js";import"./IconButton-CihR9uhl.js";import"./useTimeout-BrV9PTVD.js";import"./ButtonBase-tOcRm7j0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CLoP28jC.js";import"./Stack-kfI8mFGf.js";import"./extendSxProp-C28vbsL2.js";import"./getThemeProps-BvKcUGiO.js";import"./useTheme-Dbz3Bw6A.js";import"./Box-3B3pu-kl.js";import"./AlertTitle-kOa857Gs.js";import"./Typography-Dlkj5V0u.js";import"./index-C9tII_rG.js";import"./useTheme-JVvFOTrv.js";import"./ClickAwayListener-C2503XdC.js";import"./getReactElementRef-BsAh3-iW.js";import"./index-BDvSc1Dx.js";import"./index-CsBenq-6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CS5vzMfF.js";import"./Tooltip-QAGGRmhg.js";import"./index-BuMjaBWN.js";import"./useControlled-CNw5mVB9.js";import"./Popper-BoDQHXH-.js";import"./Button-C8jpcG3B.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-Ch3-g7vA.js";import"./QueryClientProvider-BF4-YBEJ.js";import"./Link-IDAELXN9.js";import"./Collapse-Do_xM2nw.js";import"./_baseUniq-BTHbFh8p.js";import"./_Uint8Array-CNnKuEVW.js";import"./isArray-Cl4dg9cq.js";import"./_getTag-2eX_qQEa.js";import"./isEqual-Bx8BnLbu.js";import"./merge-DkIPueKU.js";import"./_initCloneObject-WZTc4sqW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Ds_I7p0S.js";import"./inputBaseClasses-D0uzAg7X.js";import"./calculateFriendlyFileSize-BIP9WyzF.js";import"./CheckCircleTwoTone-pUSz45z2.js";import"./InfoTwoTone-DQu90CoJ.js";import"./useMutation-CPJoLMXE.js";import"./dayjs.min-CJwCc7ER.js";import"./chunk-AYJ5UCUI-BRCzOR7H.js";import"./cloneDeep-9NRChthv.js";import"./Skeleton-Bb3K0L9j.js";import"./SkeletonButton-C6JxaHFE.js";import"./SkeletonInlineBlock-B3NjXnBT.js";import"./SkeletonTable-BLEpIRlN.js";import"./times-9iVhflsO.js";import"./toInteger-CVcVqVA6.js";import"./toNumber-Bx7-CNaM.js";import"./isSymbol-DX1BAXSr.js";import"./SkeletonParagraph-C152_VvX.js";import"./uniqueId-BlJo1kc7.js";import"./toString-DfuGzi3w.js";import"./CSSTransition-BmfQI7cI.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DuNKRxyh.js";import"./Avatar-CZduHwTs.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
