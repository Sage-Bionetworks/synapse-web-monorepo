import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DNjiVrJd.js";import{d as s}from"./ToastMessage-CwQ4h7Lm.js";import{R as n,a as t}from"./RequirementItem-Cfz-O09R.js";import{P as O}from"./Paper-BvVO5eUD.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-C5KQCC6t.js";import"./SynapseConstants-u69kbdqM.js";import"./OrientationBanner-Ddf3lLdM.js";import"./index-CvhDhX6u.js";import"./index-B1W5WNgJ.js";import"./iframe-MHlXG0HA.js";import"./spreadSx-CwcO6WA9.js";import"./react-BTSVRfVy.js";import"./FullWidthAlert-C_BBQmTm.js";import"./Alert-D_dzlE-h.js";import"./createTheme-4YtjTmS_.js";import"./DefaultPropsProvider-C3VHkWTY.js";import"./useSlot-2q2LYMo2.js";import"./useForkRef-CaEGGiEl.js";import"./createSimplePaletteValueFilter-D2FMHYeY.js";import"./createSvgIcon-l1RjMTva.js";import"./Close-CF2uOmcv.js";import"./IconButton-CGQqBcgV.js";import"./useTimeout-Cs2HoDjc.js";import"./ButtonBase-ChPpEqOK.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BKDJ5rkw.js";import"./Stack-BL7qtwo2.js";import"./extendSxProp-DB9awf9E.js";import"./getThemeProps-D9TNRttJ.js";import"./useTheme-DOuWHGWV.js";import"./Box-8QQP0DYh.js";import"./AlertTitle-BhuLBLYK.js";import"./Typography-_6VRFWmU.js";import"./index-C-gqQIMz.js";import"./useTheme-QhhyLIuU.js";import"./ClickAwayListener-t0pKiAG_.js";import"./getReactElementRef-BQo3qkIg.js";import"./index-DEWSSy9Q.js";import"./index-DC5kNJrm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-pQq64t3k.js";import"./Tooltip-UlufiAyt.js";import"./index-B1p0gP3S.js";import"./useControlled-BUOgx5qY.js";import"./Popper-Cm1i59-L.js";import"./Button-D03MFFMq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Bv8ltnIt.js";import"./QueryClientProvider-DNzmMbq6.js";import"./Link-B71KkcZ0.js";import"./Collapse-1t69axGl.js";import"./_baseUniq-BImmrfwB.js";import"./_Uint8Array-DrGc3PPg.js";import"./isArray-CVsAWsIX.js";import"./_getTag-BU9Y5Ey-.js";import"./isEqual-BYvDwKrb.js";import"./merge-Dth-e1TY.js";import"./_initCloneObject-sfaIGWP2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bv3eCvAv.js";import"./inputBaseClasses-DUGrsJdw.js";import"./calculateFriendlyFileSize-CNlbHJx8.js";import"./CheckCircleTwoTone-CDt56jj-.js";import"./InfoTwoTone-teTa1z1M.js";import"./useMutation-_Uc1Hbj5.js";import"./dayjs.min-BUdMulCI.js";import"./chunk-AYJ5UCUI-DwXOjjlr.js";import"./cloneDeep-BUF6UF9n.js";import"./Skeleton-BNsxiZii.js";import"./SkeletonButton-ZbaHnkmZ.js";import"./SkeletonInlineBlock-CjOUgXXg.js";import"./SkeletonTable-DuseKicN.js";import"./times-CV7oWwXM.js";import"./toInteger-8U8aJCYt.js";import"./isSymbol-apFP-hzS.js";import"./SkeletonParagraph-CTXsD5WL.js";import"./uniqueId-BuhrWiOq.js";import"./toString-BlWYPCiK.js";import"./CSSTransition-B1HuvWwr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CmrXJDbC.js";import"./Avatar-CbEzaCZe.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
