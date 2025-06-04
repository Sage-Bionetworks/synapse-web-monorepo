import{j as a}from"./jsx-runtime-CdKXYHq3.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-SGNPlq_P.js";import{d as s}from"./ToastMessage-BNU7363M.js";import{R as n,a as t}from"./RequirementItem-DRnxDeV3.js";import{P as O}from"./Paper-BNcB9yJp.js";import"./index-pFihaiJB.js";import"./iframe-DGWk3dtm.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-Dr7u_Bva.js";import"./SynapseConstants-BanPYtN2.js";import"./OrientationBanner-DzTWIvmN.js";import"./index-vb57DutA.js";import"./spreadSx-CwcO6WA9.js";import"./react-WVV_Bngv.js";import"./FullWidthAlert-3Lw8ZGai.js";import"./Alert-DsIOtgCY.js";import"./createTheme-6OKFmZq8.js";import"./resolveComponentProps-BuENAeaX.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-LxaFHDGW.js";import"./createSvgIcon-BkjJkEMb.js";import"./DefaultPropsProvider-B9KQWTTu.js";import"./Close-BJDJEVVG.js";import"./IconButton-BM_7udd3.js";import"./ButtonBase-CE1J5Bjq.js";import"./useTimeout-B3NVn0q2.js";import"./TransitionGroupContext-VJeEL-bF.js";import"./useIsFocusVisible-DtTWJUhG.js";import"./useEventCallback-Rz2loLNW.js";import"./Stack-DjjVVnDH.js";import"./getThemeProps-V7XIfBtU.js";import"./useTheme-TYTrCo8P.js";import"./Box-BksAr4qV.js";import"./AlertTitle-CrJmCFK9.js";import"./Typography-CYinS4Gd.js";import"./useTheme-BK0D5BzJ.js";import"./Grow-D8wu1iHX.js";import"./index-CX5jh9yq.js";import"./utils-8j5hwKUm.js";import"./ClickAwayListener-rrs22D9n.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DVMPSB7k.js";import"./index-rhqfbkIa.js";import"./useControlled-DH3KsJOY.js";import"./useId-CvtASGF1.js";import"./Popper-Dza_qJqA.js";import"./Button-B082zdSZ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-BEghArMJ.js";import"./utils-BTDzrboP.js";import"./Link-BXQgRgUp.js";import"./Collapse-CJtVz9c-.js";import"./isNil-Br_fGC8c.js";import"./_Uint8Array-01EqBUPq.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Blr26enQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BYN_PiCw.js";import"./_getTag-C1uljw8-.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJO1wvNj.js";import"./Skeleton-Dyn6VGG3.js";import"./inputBaseClasses-BWvchspz.js";import"./calculateFriendlyFileSize-DIAohWT-.js";import"./CheckCircleTwoTone-B9avxx8U.js";import"./InfoTwoTone-DM8MXETk.js";import"./useMutation-CLVgkmvQ.js";import"./isEqual-pwBT1dbs.js";import"./dayjs.min-mMu8AzRI.js";import"./chunk-AYJ5UCUI-CQIGzzgu.js";import"./cloneDeep-D86TpKYV.js";import"./_initCloneObject-VZ8j85Z0.js";import"./merge-CKYP9hiF.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-C5pjF938.js";import"./SkeletonInlineBlock-CW8_Uh7l.js";import"./SkeletonTable-CmDwwKSj.js";import"./times-C-fa7jla.js";import"./toInteger-B2xRwE5d.js";import"./isSymbol-BYY1_bZL.js";import"./SkeletonParagraph-HrWWCVZU.js";import"./uniqueId-m19bO9oQ.js";import"./toString-CI-tOB9j.js";import"./CSSTransition-Bl0fVOii.js";import"./ConditionalWrapper-CW3s1PUY.js";import"./LockTwoTone-CgbaeWne.js";import"./Avatar-BqwKoIyD.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
