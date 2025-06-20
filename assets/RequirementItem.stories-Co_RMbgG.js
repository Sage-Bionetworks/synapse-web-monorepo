import{j as a}from"./jsx-runtime-D7u9V72l.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BtNKZG5x.js";import{d as s}from"./ToastMessage-CxGaBRTH.js";import{R as n,a as t}from"./RequirementItem-CMMI3060.js";import{P as O}from"./Paper-CLP7fHbB.js";import"./index-DIRP2mCL.js";import"./iframe-DvWt0ZAp.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles--Fji3vMM.js";import"./SynapseConstants-CH854TFV.js";import"./OrientationBanner-kwVrgmyF.js";import"./index-DAtIT332.js";import"./spreadSx-CwcO6WA9.js";import"./react-DOJgxBXV.js";import"./FullWidthAlert-CLcKqRsk.js";import"./Alert-CkX9fRjW.js";import"./createTheme-ZwoTvgm9.js";import"./DefaultPropsProvider-CvtzjoSb.js";import"./useSlot-DE-Pgg-g.js";import"./useForkRef-b5KNrNfS.js";import"./createSimplePaletteValueFilter-nNG9q7Sh.js";import"./createSvgIcon-Bxzmu4vz.js";import"./Close-BI6GuXhT.js";import"./IconButton-nQiKeKZm.js";import"./useTimeout-CBZZ7H3Q.js";import"./ButtonBase-B0cxrwnL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ZnNsf0Kr.js";import"./Stack-6RwAq8kg.js";import"./extendSxProp-Cb7ZLztd.js";import"./getThemeProps-B-Dxxkrj.js";import"./useTheme-DPM9nS2f.js";import"./Box-BEiNcjcE.js";import"./AlertTitle-7AwEmAD3.js";import"./Typography-M9KF5p_g.js";import"./index-heaGSp29.js";import"./useTheme-C8L1Kxxv.js";import"./ClickAwayListener-CdviVauh.js";import"./getReactElementRef-JAQ7byAz.js";import"./index-B7KIz0eC.js";import"./index-04G71cQJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-mgM_dyBK.js";import"./Tooltip-CwW5wt2J.js";import"./index-BtRE8HK7.js";import"./useControlled-CAHdEYiv.js";import"./Popper-DlvAbLM7.js";import"./Button-Cc2ZrLOs.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-C98ICP4o.js";import"./utils-DA3XjsWl.js";import"./Link-CduNptY6.js";import"./Collapse-BF5Saqfq.js";import"./_baseUniq-BSKzbIRa.js";import"./_Uint8Array-B1YxsvGR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B2qG3IjH.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CwQEadFU.js";import"./isEqual-Cz5E7whK.js";import"./merge-T2Rtq5_x.js";import"./_initCloneObject-AR8w6wIq.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D9b2Gutx.js";import"./inputBaseClasses-6e4vcwCJ.js";import"./calculateFriendlyFileSize-U7O1PnIw.js";import"./CheckCircleTwoTone-Chv9Dcrx.js";import"./InfoTwoTone-O5vZVGFV.js";import"./useMutation-CVuLVRZr.js";import"./dayjs.min-B7G6KnF3.js";import"./chunk-AYJ5UCUI-Ce6RdxID.js";import"./cloneDeep-BnbH_ri7.js";import"./Skeleton-ObQKd-kN.js";import"./SkeletonButton-BwNbiDbj.js";import"./SkeletonInlineBlock-Dpf4TbVl.js";import"./SkeletonTable-CzutX0Xb.js";import"./times-BkpFFK4o.js";import"./toInteger-wvXnbprJ.js";import"./isSymbol-DSELZabb.js";import"./SkeletonParagraph--IOtqhAW.js";import"./uniqueId-DgoTnLrJ.js";import"./toString-CPw9HAlL.js";import"./CSSTransition-C-3tTpHp.js";import"./ConditionalWrapper-Dn4zz4Ps.js";import"./LockTwoTone-BjJK8gho.js";import"./Avatar-5EKGw5Qj.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
