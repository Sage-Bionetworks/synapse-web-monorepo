import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-DgQ9QQom.js";import{d as s}from"./ToastMessage-uH46N-_-.js";import{R as n,a as t}from"./RequirementItem-WLKDFO5d.js";import{P as O}from"./Paper-Dl4NcsZy.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-CvNgPb5D.js";import"./SynapseConstants-DfAkYHSx.js";import"./OrientationBanner-Kqq2yAK3.js";import"./index-fDndQCcb.js";import"./index-DFgyNqO_.js";import"./iframe-BONHnHmX.js";import"./spreadSx-CwcO6WA9.js";import"./react-CETkiXl_.js";import"./FullWidthAlert-Bv9Y6CJh.js";import"./Alert-BfRhTEiC.js";import"./createTheme-CvmSuuTN.js";import"./DefaultPropsProvider-DV2k0EKp.js";import"./useSlot-Bz1lPbgH.js";import"./useForkRef-BwM2dkCX.js";import"./createSimplePaletteValueFilter-BBua6APr.js";import"./createSvgIcon-CTTmQEG6.js";import"./Close-CDFYNJn2.js";import"./IconButton-DMY6WtAo.js";import"./useTimeout-uM0I4FHt.js";import"./ButtonBase-D1BWc8jn.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jpdvXlMB.js";import"./Stack-8Gefz3Vx.js";import"./extendSxProp-OrWKMBCc.js";import"./getThemeProps-c6QJIRQ5.js";import"./useTheme-CFl9zPOj.js";import"./Box-C57trPRa.js";import"./AlertTitle-bpsm5pdH.js";import"./Typography-CBiSjxZP.js";import"./index-B6lxu1Ug.js";import"./useTheme-nOGRm3h9.js";import"./ClickAwayListener-DL9jmuNC.js";import"./getReactElementRef-BbilxyS1.js";import"./index-DTJcoq-b.js";import"./index-DIQf0lMW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cz7TIQwA.js";import"./Tooltip-DH1bm0aC.js";import"./index-DNhJT1xw.js";import"./useControlled-fDSPq9S-.js";import"./Popper-CF7HvnG1.js";import"./Button-BWqBW9qC.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BXrbdaCG.js";import"./QueryClientProvider-lP_DA3-U.js";import"./Link-DNdJsVbA.js";import"./Collapse-CZ-O6OTr.js";import"./_baseUniq-CsZ-FMDI.js";import"./_Uint8Array-DTR5gFx4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CEFHIlgJ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BYmYX1Uu.js";import"./isEqual-Cappb9XP.js";import"./merge-C0TbiV95.js";import"./_initCloneObject-CZ01hRpU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-TtUSla3U.js";import"./inputBaseClasses-lm6KIU9A.js";import"./calculateFriendlyFileSize-BxI9cL49.js";import"./CheckCircleTwoTone-CRhIUAFO.js";import"./InfoTwoTone-DLAb1_sk.js";import"./useMutation-C4Mu_GWO.js";import"./dayjs.min-CjxvSurQ.js";import"./chunk-AYJ5UCUI-CyebcBVS.js";import"./cloneDeep-DB2QEjaU.js";import"./Skeleton-Cz687Kkk.js";import"./SkeletonButton-ACeLA9xg.js";import"./SkeletonInlineBlock-6jOMzt-u.js";import"./SkeletonTable-BCldEaVV.js";import"./times-Dw73HbeW.js";import"./toInteger-BWw44Vu6.js";import"./isSymbol-BjGDAt6H.js";import"./SkeletonParagraph-Bd-QDG_4.js";import"./uniqueId-CAZ1B6jU.js";import"./toString-B9OpfTPH.js";import"./CSSTransition-DmpR9Pjs.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DFT1xFhm.js";import"./Avatar-CFNKVIs8.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
