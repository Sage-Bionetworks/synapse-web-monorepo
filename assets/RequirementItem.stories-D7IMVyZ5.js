import{j as a}from"./jsx-runtime-BFXWMKZc.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-L6o75UOB.js";import{d as s}from"./ToastMessage-O3262LTW.js";import{R as n,a as t}from"./RequirementItem-H5Kvd1KW.js";import{P as O}from"./Paper-CP60vdL5.js";import"./index-D_pyoJeF.js";import"./iframe-D_yBs-4r.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-08ax02E-.js";import"./SynapseConstants-DmRaMcRv.js";import"./OrientationBanner-CkWPScZc.js";import"./index-LN9B4DhW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CCDHJzMi.js";import"./FullWidthAlert-D2RPxRYK.js";import"./Alert-BNmvEUEK.js";import"./createTheme-1xr-80h-.js";import"./DefaultPropsProvider-BahuCuBQ.js";import"./useSlot-D8PJQatE.js";import"./useForkRef-CDFucD7y.js";import"./createSimplePaletteValueFilter-7em8lTd1.js";import"./createSvgIcon-C5lrm-bN.js";import"./Close-D_3dkcMR.js";import"./IconButton-By-wRGIS.js";import"./useTimeout-B7IP0G6T.js";import"./ButtonBase-CK5wBRG4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CvONy6WE.js";import"./Stack-DiWOtagw.js";import"./extendSxProp-B_QRsu6b.js";import"./getThemeProps-CF3hQaQh.js";import"./useTheme-DpkrdbtW.js";import"./Box-D9EI7yvi.js";import"./AlertTitle-Z9VHju2U.js";import"./Typography-Em3plqb-.js";import"./index-CjrxtM-b.js";import"./useTheme-CkaB82ut.js";import"./ClickAwayListener-CR_a0-_E.js";import"./getReactElementRef-Cb6_WgiO.js";import"./index-BErIIWRC.js";import"./index-ij4xiAr7.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CisvWGr-.js";import"./Tooltip-DavDF6Dc.js";import"./index-CC01-gZ0.js";import"./useControlled-Ca7fQw0M.js";import"./Popper-CP6xWkKC.js";import"./Button-DRPAyHS3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-DpIURBis.js";import"./utils-C2JOEKA9.js";import"./Link-C_ucfB6H.js";import"./Collapse-BopMEsFI.js";import"./_baseUniq-D2-SJ7dF.js";import"./_Uint8Array-wjvJVDIM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ClIIHxnV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-_WPpb9Lx.js";import"./isEqual-DKQ9N4pb.js";import"./merge-Dfr9bJau.js";import"./_initCloneObject-DeXLGZO2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Byv_i-Tg.js";import"./inputBaseClasses-DIE4lhwo.js";import"./calculateFriendlyFileSize-ECzjj6_0.js";import"./CheckCircleTwoTone-BCj2_bWN.js";import"./InfoTwoTone-DuRbV58N.js";import"./useMutation-CUDBwAFY.js";import"./dayjs.min-DIT4lERO.js";import"./chunk-AYJ5UCUI-CSQaHYsW.js";import"./cloneDeep-mbs_mYf7.js";import"./Skeleton-CKRGRrIM.js";import"./SkeletonButton-gL_ou1bd.js";import"./SkeletonInlineBlock-D4n44ThI.js";import"./SkeletonTable-DMtcPhCc.js";import"./times-9K4szFiz.js";import"./toInteger-BGY0IPQq.js";import"./isSymbol-CzsRZC_D.js";import"./SkeletonParagraph-Bq-zBJHF.js";import"./uniqueId-EtvWyYYH.js";import"./toString-DH9vHBtp.js";import"./CSSTransition-DFFScWAN.js";import"./ConditionalWrapper-VnkFGjCp.js";import"./LockTwoTone-BXQgZr7j.js";import"./Avatar-FVf6E6np.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
