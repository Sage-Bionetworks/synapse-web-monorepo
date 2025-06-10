import{j as a}from"./jsx-runtime-kSuSxVWb.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-C9-hUOct.js";import{d as s}from"./ToastMessage-CkzWWUqp.js";import{R as n,a as t}from"./RequirementItem-CsBMf59o.js";import{P as O}from"./Paper-jmTRz3X4.js";import"./index-DzLHwIBG.js";import"./iframe-BQT_7Lg6.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-C8VBGdZa.js";import"./SynapseConstants-BDVPajZl.js";import"./OrientationBanner-D7LrLz7c.js";import"./index-B20oKQ0J.js";import"./spreadSx-CwcO6WA9.js";import"./react-BaTg5ICW.js";import"./FullWidthAlert-CGCjVD8W.js";import"./Alert-B10dln1B.js";import"./createTheme-BTXBvcKL.js";import"./resolveComponentProps-CcU-Fcc7.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-O8EcKEzJ.js";import"./createSvgIcon-B27mfBNF.js";import"./DefaultPropsProvider-Bu_s_0Tm.js";import"./Close-BIllBSm-.js";import"./IconButton-NBKJm7Yd.js";import"./ButtonBase-ChvO5Q6L.js";import"./useTimeout-B1a7bHFn.js";import"./TransitionGroupContext-BfVD2Af2.js";import"./useIsFocusVisible-L_0hhVjt.js";import"./useEventCallback-QGqMHzSP.js";import"./Stack-BJqbpt9Y.js";import"./getThemeProps-D21eazjJ.js";import"./useTheme-Qg-GQRM8.js";import"./Box-C8lbBj1O.js";import"./AlertTitle-C-Od-Fyn.js";import"./Typography-Csi6gfED.js";import"./useTheme-C-C_ETX2.js";import"./Grow-BkOVapbj.js";import"./index-DCY139J6.js";import"./index-ChDfgwBD.js";import"./utils-7XiBdlAf.js";import"./ClickAwayListener-DiX6ZIUB.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BRIJeJzt.js";import"./index-CHtwux_5.js";import"./useControlled-BcND-koL.js";import"./useId-BLsARxa-.js";import"./Popper-Cr--_EAy.js";import"./Button-GF_6bSVk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-DEtpWp9w.js";import"./utils-BMBX8HaV.js";import"./Link-DV8-OVTX.js";import"./Collapse-CdZOqTzI.js";import"./isNil-B5OaQLPC.js";import"./_Uint8Array-BM3hzyWE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-oyCl2IsJ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B38WqkZ8.js";import"./_getTag-CqABlva8.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1YOx7qq.js";import"./Skeleton-B7la2lIF.js";import"./inputBaseClasses-B7iH5CdK.js";import"./calculateFriendlyFileSize-CucZHjCC.js";import"./CheckCircleTwoTone-D0eQ3RJY.js";import"./InfoTwoTone-CsvRrYgN.js";import"./useMutation-CbxM-4oY.js";import"./isEqual-DEgRKORm.js";import"./dayjs.min-DPvumxTe.js";import"./chunk-AYJ5UCUI-IYEc_8ly.js";import"./cloneDeep-BjILtH52.js";import"./_initCloneObject-CqEPD-yQ.js";import"./merge-Dop04rZp.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BKSJX1NB.js";import"./SkeletonInlineBlock-CnP_rSYn.js";import"./SkeletonTable-DWnnkL9E.js";import"./times-DbC9BwZb.js";import"./toInteger-CLGCFSQ2.js";import"./isSymbol-BB-InEJC.js";import"./SkeletonParagraph-CvvGjNoz.js";import"./uniqueId-Bssu38vL.js";import"./toString-B5FFQ5UL.js";import"./CSSTransition-WNsjYfxH.js";import"./ConditionalWrapper-C1XS7rz-.js";import"./LockTwoTone-BOhN7Pkt.js";import"./Avatar-BQLD4Hbm.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
