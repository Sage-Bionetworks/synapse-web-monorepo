import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DxfIGi1n.js";import{d as s}from"./ToastMessage-Cjjo8pcU.js";import{R as n,a as t}from"./RequirementItem-C1gcVkDC.js";import{P as O}from"./Paper-BIhOUD_N.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CXiqlPSq.js";import"./SynapseConstants-B7Cv2IkP.js";import"./OrientationBanner-lhHTwIdw.js";import"./index-BUI4FiBO.js";import"./index-Cs9CjK7r.js";import"./iframe-Cj4GSdI2.js";import"./spreadSx-CwcO6WA9.js";import"./react-CghgWeRs.js";import"./FullWidthAlert-CB74esH-.js";import"./Alert-CKXj_Bd4.js";import"./createTheme-BIa8Hjln.js";import"./DefaultPropsProvider-YWEOpPZN.js";import"./useSlot-DTYVzfTH.js";import"./useForkRef-Bz0HDi5t.js";import"./createSimplePaletteValueFilter-mKXxLgfc.js";import"./createSvgIcon-BVBy7BJX.js";import"./Close-D6D1a_iR.js";import"./IconButton-DEDMP5i3.js";import"./useTimeout-BjE_E-bf.js";import"./ButtonBase-B7Gz_ND3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dx_YCkJD.js";import"./Stack-CQAoz_Xa.js";import"./extendSxProp-yLgpd7yt.js";import"./getThemeProps-DcL6NaT1.js";import"./useTheme-BEKscu5j.js";import"./Box-ClzatLWK.js";import"./AlertTitle-BTfNBdTC.js";import"./Typography-DDUPIwVV.js";import"./index-CO9tqBcC.js";import"./useTheme-OT9aJ8bc.js";import"./ClickAwayListener-DVyb7oNF.js";import"./getReactElementRef-BqsyU8wJ.js";import"./index-64JtD6BB.js";import"./index-3BbafwZI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BrpkQUR6.js";import"./Tooltip-4GK8-bfW.js";import"./index-DJJ3DC7I.js";import"./useControlled-BNY87BJG.js";import"./Popper-c9p6qZUp.js";import"./Button-DHnYQq3H.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CsEV-wFY.js";import"./QueryClientProvider-B_2a5it8.js";import"./Link-Bnw3Ve0w.js";import"./Collapse-BA7qxafq.js";import"./_baseUniq-BKxNTwTH.js";import"./_Uint8Array-zOOrGSrF.js";import"./isArray-CfhIzhxX.js";import"./_getTag-CiaowtC2.js";import"./isEqual-Cu3LJ_QS.js";import"./merge-DNO3CHl0.js";import"./_initCloneObject-C1DTlXoU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvSGSUrh.js";import"./inputBaseClasses-BpYAyMdk.js";import"./calculateFriendlyFileSize-Cj49OqTd.js";import"./CheckCircleTwoTone-B0HwW7tj.js";import"./InfoTwoTone-BqgX5jT0.js";import"./useMutation-B5PcCJqF.js";import"./dayjs.min-Cp0TP9Uz.js";import"./chunk-AYJ5UCUI-C7mkkE5K.js";import"./cloneDeep-D3TsZAuj.js";import"./Skeleton-B6zAAzvS.js";import"./SkeletonButton-CazvaKSq.js";import"./SkeletonInlineBlock-HEe3BJZ9.js";import"./SkeletonTable-Cq5HMwX6.js";import"./times-KpthpS_o.js";import"./toInteger-Bsz_1J_r.js";import"./toNumber-gh-TNt-q.js";import"./isSymbol-DM955-m-.js";import"./SkeletonParagraph-ysaKd8ey.js";import"./uniqueId-mBNYPC_p.js";import"./toString-DNHkEnz4.js";import"./CSSTransition-CKsFXQHO.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BC_NY2LQ.js";import"./Avatar-CmNh5iv1.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
