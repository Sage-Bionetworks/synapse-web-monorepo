import{j as a}from"./jsx-runtime-soP0eJw3.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-HoWzFI9W.js";import{d as s}from"./ToastMessage-CWJMFiKv.js";import{R as n,a as t}from"./RequirementItem-DSAZnt-q.js";import{P as O}from"./Paper-C_pRCP3n.js";import"./index-hpfWuA9c.js";import"./iframe-BHoKq1w1.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-B7wbSLKA.js";import"./SynapseConstants-6diw_2V4.js";import"./OrientationBanner-CALynnLL.js";import"./index-COJsKla7.js";import"./spreadSx-CwcO6WA9.js";import"./react-l0lHratm.js";import"./FullWidthAlert-Boq7L3Qf.js";import"./Alert-Dvpc-zfR.js";import"./createTheme-Dpipd2B4.js";import"./resolveComponentProps-C2Zw4Y40.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D4rX5W63.js";import"./createSvgIcon-DBYVCs44.js";import"./DefaultPropsProvider-PXZSU-pD.js";import"./Close-D3yIz2Os.js";import"./IconButton-BWQMO1ah.js";import"./ButtonBase-Df7HWHxL.js";import"./useTimeout-CZFMIsWC.js";import"./TransitionGroupContext-D0hM1Q67.js";import"./useIsFocusVisible-DiKKqeBi.js";import"./useEventCallback-B8sxSnWX.js";import"./Stack-DlM6dtWc.js";import"./getThemeProps-BDNwUju8.js";import"./useTheme-BvuKB97Z.js";import"./Box-B-UIBw2g.js";import"./AlertTitle-BqaE6HNK.js";import"./Typography-Bmj31eeD.js";import"./useTheme-Dxbanuns.js";import"./Grow-CQfJefys.js";import"./index-Cu-xJgCv.js";import"./utils-BJRE2IYR.js";import"./ClickAwayListener-DeeVJesb.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BIvonp8D.js";import"./index-DdAibAWs.js";import"./useControlled-YZ_o9Ute.js";import"./useId-CpvJc5ah.js";import"./Popper-C8BiWNkC.js";import"./Button-G66wYlJC.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-BrR264Iv.js";import"./utils-DQrTSbe2.js";import"./Link-BDjhksuj.js";import"./Collapse-CwH3Wopy.js";import"./isNil-CvysbORv.js";import"./_Uint8Array-DTt4064I.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Bbw-pWo9.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CZFbHhrG.js";import"./_getTag-D37krsF-.js";import"./tinycolor-Begke6kS.js";import"./Fade-CXUBWJhZ.js";import"./Skeleton-DvLjtclJ.js";import"./inputBaseClasses-CAkrk-fM.js";import"./calculateFriendlyFileSize-DnMRx2GO.js";import"./CheckCircleTwoTone-6jKvRjuJ.js";import"./InfoTwoTone-l-H02dCE.js";import"./mutation-DZlyKlKR.js";import"./dayjs.min-BIqhQsmA.js";import"./chunk-AYJ5UCUI-0avzdJN8.js";import"./cloneDeep-CVJPWTAF.js";import"./_initCloneObject-BJtqxeAa.js";import"./isEqual-Ci70EvoW.js";import"./merge-D-nboOHF.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-B5KMuDKN.js";import"./SkeletonInlineBlock-B-MiQC1W.js";import"./SkeletonTable-BiGHpBn5.js";import"./times-C5D6YhQw.js";import"./toInteger-NnnZ41vA.js";import"./isSymbol-10cJLTdp.js";import"./SkeletonParagraph-Dmn15oRr.js";import"./uniqueId-BjzMKLwO.js";import"./toString-B_o-A1No.js";import"./CSSTransition-BJ_nHOzx.js";import"./ConditionalWrapper-BvyIWUtk.js";import"./LockTwoTone-BJUTw3nW.js";import"./Avatar-C1L-SBAP.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
