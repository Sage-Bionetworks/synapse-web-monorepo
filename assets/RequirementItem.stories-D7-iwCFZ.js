import{j as a}from"./jsx-runtime-MnZ2317C.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-Dcea1MX5.js";import{d as s}from"./ToastMessage-ChB4eTdZ.js";import{R as n,a as t}from"./RequirementItem-u42NfULe.js";import{P as O}from"./Paper-CR0oZZpP.js";import"./index-DBUZyXtq.js";import"./iframe-Agwozm59.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DnUO1Api.js";import"./SynapseConstants-V1sQpU_s.js";import"./OrientationBanner-D2fotMsN.js";import"./index-BoeVxqoJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BM--CzU7.js";import"./FullWidthAlert-aDseP76t.js";import"./Alert-7eVifPuv.js";import"./createTheme-C-idqo33.js";import"./DefaultPropsProvider-FBbxzESS.js";import"./useSlot-C1iX9q8K.js";import"./useForkRef-CjnZLg2p.js";import"./createSimplePaletteValueFilter-Bdbxw0JP.js";import"./createSvgIcon-DGFsbDpa.js";import"./Close-DlumTVsj.js";import"./IconButton-D83ce9NZ.js";import"./useTimeout-D9WeMCjd.js";import"./ButtonBase-C1DcD2E0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-n314Qg5c.js";import"./Stack-FHc61ter.js";import"./extendSxProp-DiQYnhrh.js";import"./getThemeProps-CJ_YGnbo.js";import"./useTheme-UmraWpqS.js";import"./Box-BH8rgvLb.js";import"./AlertTitle-CpjpvVjh.js";import"./Typography-By-qWDlQ.js";import"./index-L8mzx5Bg.js";import"./useTheme-BihevxPC.js";import"./ClickAwayListener-CTsU5cTY.js";import"./getReactElementRef-6_LsB2Ll.js";import"./index-BMDeBweZ.js";import"./index-juxSWwrL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CZQ-XoRz.js";import"./Tooltip-BHZ2B9D4.js";import"./index-CmYnUnfx.js";import"./useControlled-B8KaoKId.js";import"./Popper-DPSnelcp.js";import"./Button-BgtgpHEH.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-CiIdiLfh.js";import"./utils-gUl3EyCu.js";import"./Link-DIPaPrKj.js";import"./Collapse-BUZBhcx6.js";import"./_baseUniq-ByR3GzWR.js";import"./_Uint8Array-DnwaM0yi.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BWY1lDtv.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BQIn1FIZ.js";import"./isEqual-DXp2A0Mg.js";import"./merge-DKxr4ITZ.js";import"./_initCloneObject-oQ4HOIU2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-MdAgGiLr.js";import"./inputBaseClasses-QOARJcz1.js";import"./calculateFriendlyFileSize-ncijnfII.js";import"./CheckCircleTwoTone-CqDyMHgN.js";import"./InfoTwoTone-C68cHQWw.js";import"./useMutation-DEtxxh-c.js";import"./dayjs.min-CFlyIOCv.js";import"./chunk-AYJ5UCUI-CH_1fBPV.js";import"./cloneDeep-BErKjqL_.js";import"./Skeleton-ZUE2YBUO.js";import"./SkeletonButton-CdWOJFeT.js";import"./SkeletonInlineBlock-CqcCTFdJ.js";import"./SkeletonTable-BibtQGAJ.js";import"./times-DCWc0DdH.js";import"./toInteger-CAmpVDja.js";import"./isSymbol-7hwx_6nK.js";import"./SkeletonParagraph-DaZ3mDhP.js";import"./uniqueId-CcRPpj3j.js";import"./toString-CFl2eOZG.js";import"./CSSTransition-DrAv0o48.js";import"./ConditionalWrapper-BH_MOOg8.js";import"./LockTwoTone-CIsdZrHe.js";import"./Avatar-4uhEVJYF.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
