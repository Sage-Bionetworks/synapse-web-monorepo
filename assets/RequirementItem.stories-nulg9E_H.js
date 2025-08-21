import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DRIEHrls.js";import{d as s}from"./ToastMessage-VrFWeYZz.js";import{R as n,a as t}from"./RequirementItem-D8h2z5Iu.js";import{P as O}from"./Paper-dGOVAE2x.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BnoFzpt4.js";import"./SynapseConstants-DPvalGLs.js";import"./OrientationBanner-C7ftuDQm.js";import"./index-DEFrzoIy.js";import"./index-BdGF2rr0.js";import"./iframe-BtSuadMq.js";import"./spreadSx-CwcO6WA9.js";import"./react-CgQuzE1J.js";import"./FullWidthAlert-B4ZLM8Gj.js";import"./Alert-DVIMJ7t6.js";import"./createTheme-BhLxYWDv.js";import"./DefaultPropsProvider-CW_d9y1r.js";import"./useSlot-CLmM1ySd.js";import"./useForkRef-c3fsIK01.js";import"./createSimplePaletteValueFilter-DvZMp9k3.js";import"./createSvgIcon-CNA5GupY.js";import"./Close-BqICSnwE.js";import"./IconButton-0tJmEnKE.js";import"./useTimeout-B3axDpsT.js";import"./ButtonBase-CiPIqPeV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D16bZLFK.js";import"./Stack-DqfSH6uT.js";import"./extendSxProp-B8f7Jal8.js";import"./getThemeProps-BNF_Detn.js";import"./useTheme-DJxYLxbi.js";import"./Box-DQQsEHOw.js";import"./AlertTitle-D-C2TxNL.js";import"./Typography-BFscDXWb.js";import"./index-BBmHR9wv.js";import"./useTheme-D5PcCuLz.js";import"./ClickAwayListener-BeugXztG.js";import"./getReactElementRef-B59-QI-D.js";import"./index-D0tL_4sL.js";import"./index-CpyyZXCv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dfd02UMc.js";import"./Tooltip-BOEbCo2w.js";import"./index-gxypWGmb.js";import"./useControlled-DgCAYik9.js";import"./Popper-CQSYYlgn.js";import"./Button-DbkFyoji.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BkSrP9R6.js";import"./QueryClientProvider-D_2ZGqWx.js";import"./Link-BiA7uAW3.js";import"./Collapse-_aAhN6kX.js";import"./_baseUniq-DI-cYlCV.js";import"./_Uint8Array-Bz4l-uF1.js";import"./isArray-mIVUFf7F.js";import"./_getTag-Ddq65MkA.js";import"./isEqual-COHyrlY7.js";import"./merge-BOgL1RL6.js";import"./_initCloneObject-BZ4G4vY1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-lNgin7Fd.js";import"./inputBaseClasses-CDyVQ-wz.js";import"./calculateFriendlyFileSize-Dqg8rbmn.js";import"./CheckCircleTwoTone-DzbjFgl1.js";import"./InfoTwoTone-DfYCi1PO.js";import"./useMutation-DyV4iMHP.js";import"./dayjs.min-BwJHFbPi.js";import"./chunk-AYJ5UCUI-DFOvz3iG.js";import"./cloneDeep-Dhdm-tyr.js";import"./Skeleton-CcjK8js-.js";import"./SkeletonButton-BQT3i5bh.js";import"./SkeletonInlineBlock-B4splQdS.js";import"./SkeletonTable-AcLzqBVm.js";import"./times-pljkQiMg.js";import"./toInteger-BUjrtHkU.js";import"./isSymbol-BU4s56ta.js";import"./SkeletonParagraph-B5fa5GcL.js";import"./uniqueId-BL10SZiR.js";import"./toString-BspETBjc.js";import"./CSSTransition-cEoJMI28.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BVgEfvbQ.js";import"./Avatar-BSPdM4sd.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
