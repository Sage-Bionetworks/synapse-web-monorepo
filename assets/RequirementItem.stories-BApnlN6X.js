import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DiArRBHR.js";import{d as s}from"./ToastMessage-BOAc_ZID.js";import{R as n,a as t}from"./RequirementItem-CISWezNu.js";import{P as O}from"./Paper-5jXXj0om.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-z1MHZNSL.js";import"./SynapseConstants-CR9qI-xP.js";import"./OrientationBanner-B5R6fvdW.js";import"./index-_GFMmKr-.js";import"./index-XG5sbf9b.js";import"./iframe-qFD8nqts.js";import"./spreadSx-CwcO6WA9.js";import"./react-BLDuIjUE.js";import"./FullWidthAlert-DMECBCQO.js";import"./Alert-hxk4zjd6.js";import"./createTheme-CL5O40df.js";import"./DefaultPropsProvider-B_VgrtAI.js";import"./useSlot-ah-OQE7U.js";import"./useForkRef-BkWb3Bhw.js";import"./createSimplePaletteValueFilter-jaDrmtVN.js";import"./createSvgIcon-BTGwyJ8U.js";import"./Close-DhExsJ9Z.js";import"./IconButton-CSSOBqV1.js";import"./useTimeout-CEvFcyFR.js";import"./ButtonBase-D_f60ltm.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bw3WO2f6.js";import"./Stack-ClO0FTtf.js";import"./extendSxProp-DJY5gp9P.js";import"./getThemeProps-Be0_lWbe.js";import"./useTheme-BUZNi25v.js";import"./Box-BHPAI8Dk.js";import"./AlertTitle-C6WYnRSa.js";import"./Typography-_79tBCH0.js";import"./index-CUTYAgAO.js";import"./useTheme-DbYeEOwq.js";import"./ClickAwayListener-FcTr-ZLV.js";import"./getReactElementRef-D0GAhzXw.js";import"./index-DJ7DzT1r.js";import"./index-DZQvlNat.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B_NR2UdL.js";import"./Tooltip-Bfuq8wwc.js";import"./index-HJYw8IqF.js";import"./useControlled-Dyr3uPEA.js";import"./Popper-Dl3EBVlK.js";import"./Button-Cst65raA.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-Cya6FnXy.js";import"./QueryClientProvider-C1g9-9dT.js";import"./Link-CtLuER11.js";import"./Collapse-C_stbWYW.js";import"./_baseUniq-DRQhLs9v.js";import"./_Uint8Array-BPmsGsiG.js";import"./isArray-CPa3KvEr.js";import"./_getTag-6HlkFh44.js";import"./isEqual-BXYcf22t.js";import"./merge-WJTUE9lW.js";import"./_initCloneObject-DgyEjv2T.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaS-DLax.js";import"./inputBaseClasses-C0GfGsq3.js";import"./calculateFriendlyFileSize-DacKmnyz.js";import"./CheckCircleTwoTone-BMjik1gi.js";import"./InfoTwoTone-pzAvwEnn.js";import"./useMutation-AwpnfHof.js";import"./dayjs.min-CTeHcnz6.js";import"./chunk-AYJ5UCUI-GWcfwrLC.js";import"./cloneDeep-B6Q9TQz2.js";import"./Skeleton-DSZfLQvh.js";import"./SkeletonButton-DRe5wF9I.js";import"./SkeletonInlineBlock-DDhPcq9k.js";import"./SkeletonTable-BAwv1PKI.js";import"./times-Bo9NZF_D.js";import"./toInteger-TWGsYVWB.js";import"./toNumber-CJalVvAq.js";import"./isSymbol-iRXXXIC1.js";import"./SkeletonParagraph-BvFgcese.js";import"./uniqueId-CDiapCCG.js";import"./toString-CRHJTS78.js";import"./CSSTransition-KxIY4G80.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DILDuWlh.js";import"./Avatar-DF3M7y9D.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
