import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BIFa_GhW.js";import{d as s}from"./ToastMessage-9v-kEHCl.js";import{R as n,a as t}from"./RequirementItem-BifTAOmU.js";import{P as O}from"./Paper-SUBod-rb.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BVPNraLD.js";import"./SynapseConstants-Dv-MGM1J.js";import"./OrientationBanner-Cws2j4Mo.js";import"./index--CX0HyWh.js";import"./index-DNNN6rdJ.js";import"./iframe-oGQYvBKi.js";import"./spreadSx-CwcO6WA9.js";import"./react-CGxkybS_.js";import"./FullWidthAlert-Dqr4oli-.js";import"./Alert-B_xnezcd.js";import"./createTheme-BnXa5zZK.js";import"./DefaultPropsProvider-Dji5gM7C.js";import"./useSlot-Cb_QlhVh.js";import"./useForkRef-JyorSLe1.js";import"./createSimplePaletteValueFilter-DU46ej2J.js";import"./createSvgIcon-D8jIrvPX.js";import"./Close-BDDORMGK.js";import"./IconButton-V_4NTwZz.js";import"./useTimeout-CGpqBhHm.js";import"./ButtonBase-Dr8KFyFP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-fa4TJCvY.js";import"./Stack-DhnkcRXq.js";import"./extendSxProp-BZdJ7s64.js";import"./getThemeProps-AWcM1db2.js";import"./useTheme-DLZAYx4G.js";import"./Box-EIKqjcJy.js";import"./AlertTitle-D2kQ5YCh.js";import"./Typography-DS8QrI39.js";import"./index-B9YJJuiU.js";import"./useTheme-a7pwbdA5.js";import"./ClickAwayListener-C7bmldo6.js";import"./getReactElementRef-Cghnh0Pf.js";import"./index-jyYirorJ.js";import"./index-DeKTxRMD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DJ_Oa6j7.js";import"./Tooltip-DNNN56gH.js";import"./index-BO6uCNwC.js";import"./useControlled-iZXBhxfw.js";import"./Popper-Cuzgqsiw.js";import"./Button-Cq9ZsfE1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Bf-DfLGF.js";import"./QueryClientProvider-hd-vwg1E.js";import"./Link-BfSlpjCj.js";import"./Collapse-DL3n47x_.js";import"./_baseUniq-CK8WzfJ6.js";import"./_Uint8Array-p32pFxMQ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B9LQDD5T.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BIs_7e2S.js";import"./isEqual-DKLM-bz2.js";import"./merge-BqXjrW0p.js";import"./_initCloneObject-DMLlTLj-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DH8HxKI8.js";import"./inputBaseClasses-hOK3eq__.js";import"./calculateFriendlyFileSize-DauLOTgx.js";import"./CheckCircleTwoTone-zkkK8I6_.js";import"./InfoTwoTone-BUjP8Da4.js";import"./useMutation-pfkVBKwT.js";import"./dayjs.min-1sVOAIGh.js";import"./chunk-AYJ5UCUI-CddD74F6.js";import"./cloneDeep-B46xYFJ8.js";import"./Skeleton-Cky8RVh8.js";import"./SkeletonButton-BYTrNsph.js";import"./SkeletonInlineBlock-DJlIOR_8.js";import"./SkeletonTable-D2vmD08X.js";import"./times-B5nr4bqb.js";import"./toInteger-BKfYXG26.js";import"./isSymbol-BJqZY0qb.js";import"./SkeletonParagraph-DRPOb-G5.js";import"./uniqueId-C20UE26M.js";import"./toString-BDqMZF9N.js";import"./CSSTransition-Db0RysCl.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BJ3Zazf0.js";import"./Avatar-CjQSP3vW.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
