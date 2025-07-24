import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CWAvKBMI.js";import{d as s}from"./ToastMessage-DS1ffP_A.js";import{R as n,a as t}from"./RequirementItem-BoUm1TlR.js";import{P as O}from"./Paper-C4a3OuyP.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DLDZCp3_.js";import"./SynapseConstants-0pPTJy_l.js";import"./OrientationBanner-DrB1cKgY.js";import"./index-CdG-H1GA.js";import"./index-Be3OKIZF.js";import"./iframe-XiUBpGKM.js";import"./spreadSx-CwcO6WA9.js";import"./react-DVFpEhSV.js";import"./FullWidthAlert-Dh1ba1yf.js";import"./Alert-BOau1aY7.js";import"./createTheme-OYzYH9uz.js";import"./DefaultPropsProvider-BWpyEzwg.js";import"./useSlot-a-aE1Pdq.js";import"./useForkRef-CFVv9kWM.js";import"./createSimplePaletteValueFilter-B8St1HV2.js";import"./createSvgIcon-CNyb9gIQ.js";import"./Close-C8SYJp32.js";import"./IconButton-BnsJG5aV.js";import"./useTimeout-fFdGDEiL.js";import"./ButtonBase-DxRcrFnX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-COCJCpif.js";import"./Stack--2S6T-M_.js";import"./extendSxProp-ODv7UY98.js";import"./getThemeProps-Av4aVS9Y.js";import"./useTheme-CbVokkp1.js";import"./Box-rJEB27nI.js";import"./AlertTitle-B6Z6XNzA.js";import"./Typography-D2rs1qMZ.js";import"./index-DFUoKfrI.js";import"./useTheme-ByI89sY-.js";import"./ClickAwayListener-BhudWclL.js";import"./getReactElementRef-DH1X4EPt.js";import"./index-D9nKWh6T.js";import"./index-CT3k1YyO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ca5Xjkdj.js";import"./Tooltip-BMTh3XTZ.js";import"./index-BgngdRnL.js";import"./useControlled-RTrp8xk7.js";import"./Popper-DvJtvlzG.js";import"./Button-uUObj31d.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-CclqZfdw.js";import"./QueryClientProvider-DOZZWjMO.js";import"./Link-CVqsb7w3.js";import"./Collapse-964ezGRB.js";import"./_baseUniq-Bp8a-hEG.js";import"./_Uint8Array-CTD4g-UO.js";import"./isArray-BaUR4PKY.js";import"./_getTag-D_rvvH3J.js";import"./isEqual-B3Ph6nsS.js";import"./merge-CUwoUklL.js";import"./_initCloneObject-CP-LQp12.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CvNPyTjG.js";import"./inputBaseClasses-CxFgARnO.js";import"./calculateFriendlyFileSize-CSqZS-o-.js";import"./CheckCircleTwoTone-CLYwlntD.js";import"./InfoTwoTone-D34yF3Np.js";import"./useMutation-C3y2_jlG.js";import"./dayjs.min-DR8gAueo.js";import"./chunk-AYJ5UCUI-Bzu-EXpx.js";import"./cloneDeep-XGQX0ICN.js";import"./Skeleton-CoTfaTC1.js";import"./SkeletonButton-D1RRBCt9.js";import"./SkeletonInlineBlock-CjsKhMAd.js";import"./SkeletonTable-CcAwZ78b.js";import"./times-BTFVGFMI.js";import"./toInteger-BrtYCu9A.js";import"./toNumber-CbtXKd97.js";import"./isSymbol-Bzk1wuDc.js";import"./SkeletonParagraph-C6wUX6uQ.js";import"./uniqueId-DeUTBySm.js";import"./toString-BdORc8__.js";import"./CSSTransition-CzWt69MY.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DnNjPcnO.js";import"./Avatar-tdB2pksm.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
