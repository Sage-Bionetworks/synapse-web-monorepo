import{j as a}from"./jsx-runtime-2dfIfU3r.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BEwRZNEQ.js";import{d as s}from"./ToastMessage-CanR8NwJ.js";import{R as n,a as t}from"./RequirementItem-jSsUEWzj.js";import{P as O}from"./Paper-BzDUbuS1.js";import"./index-5JMdGahQ.js";import"./iframe-DhTQcQ3F.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BFeZ_ZJ6.js";import"./SynapseConstants-UuPyjxi_.js";import"./OrientationBanner-CzxFx2jG.js";import"./index-BYJv6Bsd.js";import"./spreadSx-CwcO6WA9.js";import"./react-BZTedZTp.js";import"./FullWidthAlert-CF0SOlWZ.js";import"./Alert-hxUFCOWR.js";import"./createTheme-B8kGFBlV.js";import"./DefaultPropsProvider-DWaPTsuO.js";import"./useSlot-CapPe3Ll.js";import"./useForkRef-WPqv8QK0.js";import"./createSimplePaletteValueFilter-BB5KmPs3.js";import"./createSvgIcon-r4tj0IbI.js";import"./Close-S53sJciA.js";import"./IconButton-DofgUFwE.js";import"./useTimeout-6cM8qZEx.js";import"./ButtonBase-Cz4vO_Lv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B5ZgS4zN.js";import"./Stack-COnJGcbH.js";import"./extendSxProp-BzI-gJOg.js";import"./getThemeProps-B-Gly8Zd.js";import"./useTheme-DRx6aaQt.js";import"./Box-2DxmALU2.js";import"./AlertTitle-OmFMPEq6.js";import"./Typography-CpAlcH3X.js";import"./index-G_wVDABB.js";import"./useTheme-C-dvLIHh.js";import"./ClickAwayListener-CyEaVCQx.js";import"./getReactElementRef-DHQj-uSL.js";import"./index-0JVd7jt9.js";import"./index-uCSxDv0P.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D8pMyf2f.js";import"./Tooltip-BlwrRREv.js";import"./index-DNe2VP0L.js";import"./useControlled-DWWAB3KI.js";import"./Popper-DZ9rafFw.js";import"./Button-Bj9GQT73.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-CSizPZx0.js";import"./utils-CDr4aw5s.js";import"./Link-DSyU__8a.js";import"./Collapse-hKqnA6lo.js";import"./_baseUniq-HWEVlids.js";import"./_Uint8Array-DQEWnLMa.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DKGTqfD_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BI-Fxu21.js";import"./isEqual-B0P5VD4W.js";import"./merge-ecPXGyJu.js";import"./_initCloneObject-CfEY3-lE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-7gUD2uZz.js";import"./inputBaseClasses-JBmqD1oA.js";import"./calculateFriendlyFileSize-Dh90TU2u.js";import"./CheckCircleTwoTone-DxGNA53f.js";import"./InfoTwoTone-BUH_l7NO.js";import"./useMutation-kAFHTLbY.js";import"./dayjs.min-DL_qZvuq.js";import"./chunk-AYJ5UCUI-DBE9AyhI.js";import"./cloneDeep-ooho4h8_.js";import"./Skeleton-DUxhMnm9.js";import"./SkeletonButton-D-7k8Fb-.js";import"./SkeletonInlineBlock-BlA2vRmi.js";import"./SkeletonTable-1s3HUnAK.js";import"./times-CVmQsBHd.js";import"./toInteger-x3ZQuM56.js";import"./isSymbol-DE8uEQDN.js";import"./SkeletonParagraph-BTQpR3sg.js";import"./uniqueId-DvQpEX8d.js";import"./toString-BcG8LzHA.js";import"./CSSTransition-CU7n5BuR.js";import"./ConditionalWrapper-CejZvRFp.js";import"./LockTwoTone-DEdYi9zf.js";import"./Avatar-C2EUYLZT.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
