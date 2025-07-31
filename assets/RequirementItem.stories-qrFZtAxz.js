import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-D_SGqMsn.js";import{d as s}from"./ToastMessage-DY_stIx6.js";import{R as n,a as t}from"./RequirementItem-B1mwWLqq.js";import{P as O}from"./Paper-DhD70JZd.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Cv-n4XdS.js";import"./SynapseConstants-DWZtEJYD.js";import"./OrientationBanner-PRKENNck.js";import"./index-DLnwU0P8.js";import"./index-i-LsgLSA.js";import"./iframe-GbghtqWq.js";import"./spreadSx-CwcO6WA9.js";import"./react-CQ2GqOiU.js";import"./FullWidthAlert-CZ6uLaom.js";import"./Alert-BrZbLQm1.js";import"./createTheme-D-2HkHFH.js";import"./DefaultPropsProvider-DWBDe1UB.js";import"./useSlot-BGDSQ0fp.js";import"./useForkRef-FPH0YGQ2.js";import"./createSimplePaletteValueFilter-D9pZOYY9.js";import"./createSvgIcon-CuLc2rjK.js";import"./Close-V1m8iud7.js";import"./IconButton-B84Nw0Nn.js";import"./useTimeout-DVbcAnZQ.js";import"./ButtonBase-CZ5UGkYU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C8ylk68i.js";import"./Stack--hoKvcLE.js";import"./extendSxProp-qcmHDY2j.js";import"./getThemeProps-BCcD_5VN.js";import"./useTheme-DSK3UIHS.js";import"./Box-CXOEPfLM.js";import"./AlertTitle-BwlAqIBe.js";import"./Typography-J1V_cCp0.js";import"./index-B0vabjm1.js";import"./useTheme-GE2G-L2h.js";import"./ClickAwayListener-BfigbZYF.js";import"./getReactElementRef-HfQqw9gT.js";import"./index-DdPFGp_D.js";import"./index-CWoMMRo_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DTKKxo97.js";import"./Tooltip-Do35XN0Z.js";import"./index-aH-ETJ6w.js";import"./useControlled-PLZvCxRY.js";import"./Popper-DrH6hsAF.js";import"./Button-CgyCstS0.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DNW8nDMg.js";import"./QueryClientProvider-BtJasJ_4.js";import"./Link-6WbTuaOI.js";import"./Collapse-DL75-Ea6.js";import"./_baseUniq-D9fuWjAg.js";import"./_Uint8Array-DsugQWhS.js";import"./isArray-BBhiBobp.js";import"./_getTag-BRSENsW_.js";import"./isEqual-Db-5Z8rj.js";import"./merge-BrXdDQKY.js";import"./_initCloneObject-BklmEMA7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DbfEBBHW.js";import"./inputBaseClasses-CurYI-Ex.js";import"./calculateFriendlyFileSize-DbXrz5U1.js";import"./CheckCircleTwoTone-CA9T2YPG.js";import"./InfoTwoTone-AfB5dL-U.js";import"./useMutation-B9F8EaIl.js";import"./dayjs.min-DUqdv7S6.js";import"./chunk-AYJ5UCUI-D3kxV_4N.js";import"./cloneDeep-DoETX66B.js";import"./Skeleton-C3z_WkLS.js";import"./SkeletonButton-DLk_3Ey0.js";import"./SkeletonInlineBlock-XszvMEKW.js";import"./SkeletonTable-BP5qj8Mn.js";import"./times-Dlmj-TT2.js";import"./toInteger-NyDQt0re.js";import"./toNumber-BUw9VcZI.js";import"./isSymbol-B4-m-03H.js";import"./SkeletonParagraph-Cm0bSXgT.js";import"./uniqueId-DKeadwFi.js";import"./toString-BEV_2zmw.js";import"./CSSTransition-Bio3TplL.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-tCNL1ijm.js";import"./Avatar-DIpaKZ6A.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
