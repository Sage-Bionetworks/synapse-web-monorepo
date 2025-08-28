import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-bi-LcI5M.js";import{d as s}from"./ToastMessage-BajH5OoY.js";import{R as n,a as t}from"./RequirementItem-hP8dlq_A.js";import{P as O}from"./Paper-DRCE2cQE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-SRraC90P.js";import"./SynapseConstants-PNfEX-Ee.js";import"./OrientationBanner-C1RDTEFe.js";import"./index-BfGz0-rx.js";import"./index-COPlMTLH.js";import"./iframe-Dh7vrRpU.js";import"./spreadSx-CwcO6WA9.js";import"./react-Br1418uu.js";import"./FullWidthAlert-BdEFBuz2.js";import"./Alert-D_I4Da61.js";import"./createTheme-BUGEXAZ7.js";import"./DefaultPropsProvider-Cl_kOTzU.js";import"./useSlot-BkLAJCAz.js";import"./useForkRef-BBYXNeWj.js";import"./createSimplePaletteValueFilter-D0Hq8-6_.js";import"./createSvgIcon-GUC6M7fo.js";import"./Close-B2th-w95.js";import"./IconButton-Dny5oSWg.js";import"./useTimeout-CASSdLe8.js";import"./ButtonBase-D1oJct8N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DLO471x8.js";import"./Stack-DTGKt6ID.js";import"./extendSxProp-Buq774I8.js";import"./getThemeProps-BH8LJhew.js";import"./useTheme-Cyhg0lMD.js";import"./Box-D-uimvGt.js";import"./AlertTitle-CHYbqgd8.js";import"./Typography-CmH3M1Ds.js";import"./index-BeT-zJSF.js";import"./useTheme-KKgiytaP.js";import"./ClickAwayListener-Dkyb_H4E.js";import"./getReactElementRef-CDtIlStC.js";import"./index-GNIoEsQh.js";import"./index-C9kE7G9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BX6s5DFQ.js";import"./Tooltip-Dsx7YQ3j.js";import"./index-Jg77emZI.js";import"./useControlled-DMsQxF37.js";import"./Popper-CJ3GQeEU.js";import"./Button-seLAaY-z.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-C0_YrBpr.js";import"./QueryClientProvider--HygutHk.js";import"./Link-1iYcYmRG.js";import"./Collapse-BCkD2TRw.js";import"./_baseUniq-B0CxpJpC.js";import"./_Uint8Array-IVjl8hkw.js";import"./isArray-C_29kE4-.js";import"./_getTag-D-CvqH-C.js";import"./isEqual-CcVe2o0k.js";import"./merge-Bjs4ZByV.js";import"./_initCloneObject-BfmCOVO5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-6BTbwAew.js";import"./inputBaseClasses-DNxBSNA3.js";import"./calculateFriendlyFileSize-Dio-ngoW.js";import"./CheckCircleTwoTone-lIj_wBp0.js";import"./InfoTwoTone-Bz5QJbm9.js";import"./useMutation-BvwePRm3.js";import"./dayjs.min-DhbqjnF4.js";import"./chunk-AYJ5UCUI-BD7rHHbc.js";import"./cloneDeep-C5RiGzwl.js";import"./Skeleton-Cv60quvj.js";import"./SkeletonButton-CjE_0vIp.js";import"./SkeletonInlineBlock-Cz-9MPE3.js";import"./SkeletonTable-CszXZ9Xi.js";import"./times-BLcu-U0w.js";import"./toInteger-xNfQ4hRe.js";import"./isSymbol-vpsHx3GN.js";import"./SkeletonParagraph-CwjADhHN.js";import"./uniqueId-BG5WBqAZ.js";import"./toString-CrL6CxhE.js";import"./CSSTransition-DqBV4lTD.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-mXaVr9hG.js";import"./Avatar-ChH6UglW.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
