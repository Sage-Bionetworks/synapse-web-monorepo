import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DpQ3EdTV.js";import{d as s}from"./ToastMessage-DrFY8_5v.js";import{R as n,a as t}from"./RequirementItem-UsJh7YZv.js";import{P as O}from"./Paper-DzJ9zCwF.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-B9Ai-UlC.js";import"./SynapseConstants-BjoB8Yq8.js";import"./OrientationBanner-B-48TzxW.js";import"./index-CVNRqfdb.js";import"./index-DU4SLi9J.js";import"./iframe-Bfwj0iXb.js";import"./spreadSx-CwcO6WA9.js";import"./react-CsB8eMO1.js";import"./FullWidthAlert-C4c4nrUq.js";import"./Alert-BOOSKKXC.js";import"./createTheme-CDEh_gyq.js";import"./DefaultPropsProvider-O5C3Nb5V.js";import"./useSlot-M8QHKYsT.js";import"./useForkRef-DDzWHa86.js";import"./createSimplePaletteValueFilter-_czc63Ld.js";import"./createSvgIcon-KfFU4xlR.js";import"./Close-Bz5kL9hp.js";import"./IconButton-B6O4QuMS.js";import"./useTimeout-Cv6Xn-hD.js";import"./ButtonBase-DUpvGjcQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BkyMLXJh.js";import"./Stack-DtBxeKgf.js";import"./extendSxProp-BmoXLdEd.js";import"./getThemeProps-Ctvuhzed.js";import"./useTheme-DfTRQ5NP.js";import"./Box-G3UN5WwW.js";import"./AlertTitle-DwLbdHBw.js";import"./Typography-Dn0pzKpw.js";import"./index-DdQixD_e.js";import"./useTheme-BOXwNS7p.js";import"./ClickAwayListener-CzTmjh7U.js";import"./getReactElementRef-D_-Z4SH1.js";import"./index-D5pYcz72.js";import"./index-BHG7DML_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-QqJL00_P.js";import"./Tooltip-ym9zZME9.js";import"./index-K-1dBNVW.js";import"./useControlled-CAL9XoXW.js";import"./Popper-DwzmlPr4.js";import"./Button-DXmJT6ep.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-BfdwJsnD.js";import"./QueryClientProvider-CS6hpE-e.js";import"./Link-Bvdjd7Dg.js";import"./Collapse-D6PZnJm0.js";import"./_baseUniq-sYypte9g.js";import"./_Uint8Array-CcNYxfvW.js";import"./isArray-CREtuNeo.js";import"./_getTag-B-TVfm_w.js";import"./isEqual-D5Ef-xMe.js";import"./merge-vaAZnYBP.js";import"./_initCloneObject-Cs9xP4-p.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CTHLoFAw.js";import"./inputBaseClasses-BKOSJzOf.js";import"./calculateFriendlyFileSize-C72QSjRW.js";import"./CheckCircleTwoTone-Drn0uul7.js";import"./InfoTwoTone-DRCzNUzR.js";import"./useMutation-jBpFkcP6.js";import"./dayjs.min-yDFrPE4q.js";import"./chunk-AYJ5UCUI-BWRTzIku.js";import"./cloneDeep-BDS_U0xj.js";import"./Skeleton-BoH6z_QQ.js";import"./SkeletonButton-CB2giaAx.js";import"./SkeletonInlineBlock-qVLwAWZh.js";import"./SkeletonTable-CUVptyh7.js";import"./times-Cq1d1gWu.js";import"./toInteger-CFopPfQK.js";import"./toNumber-BZvht7LM.js";import"./isSymbol-9Ku3R86s.js";import"./SkeletonParagraph-l9AFjdkY.js";import"./uniqueId-BNesQXEX.js";import"./toString-DAULP9p0.js";import"./CSSTransition-p48WLHTy.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CDbABUgI.js";import"./Avatar-otPdJylS.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
