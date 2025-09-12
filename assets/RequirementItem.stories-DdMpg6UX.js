import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-D-tOs994.js";import{M as x}from"./MarkdownSynapse-D9EkkUup.js";import{d as s}from"./ToastMessage-CNJGC2nc.js";import{R as n,a as t}from"./RequirementItem-SNJM2Y2s.js";import{P as O}from"./Paper-DWy9BGA0.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BIJh-7D7.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./useFiles-Da5SPf30.js";import"./SynapseConstants-BgpCwDFe.js";import"./OrientationBanner-BwAbfTIw.js";import"./index-Bi4am7_a.js";import"./index-CfbPO5Pk.js";import"./iframe-B73v8h_Y.js";import"./spreadSx-CwcO6WA9.js";import"./react-Czvs3lpM.js";import"./FullWidthAlert-BxCHPgi_.js";import"./Alert-Cy2iyRT_.js";import"./createTheme-B8QSyZvJ.js";import"./DefaultPropsProvider-E91GGLqj.js";import"./useSlot-DbF0H-M6.js";import"./useForkRef-CNGHG2sd.js";import"./createSimplePaletteValueFilter-DMZZiVpQ.js";import"./createSvgIcon-B4oujve6.js";import"./Close-DnuW4VP0.js";import"./IconButton-CNjLAA-N.js";import"./useTimeout-CngDlYNI.js";import"./ButtonBase-EQYK4HG0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dwx-LJEp.js";import"./Stack-IvFAcYq_.js";import"./extendSxProp-BASXjWDU.js";import"./getThemeProps-CxBOemI1.js";import"./useTheme-kqh4Ll_I.js";import"./Box-C_8woQ6t.js";import"./AlertTitle-C2IYM2mb.js";import"./Typography-C496KcFS.js";import"./index-D_tds8oQ.js";import"./useTheme-5tq7elWw.js";import"./ClickAwayListener-bWEbtpgx.js";import"./getReactElementRef-DqYwo8-I.js";import"./index-C1mw4Gna.js";import"./index-9kSQh7S9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1A1uLTzL.js";import"./Tooltip-Buh_A6A3.js";import"./index-B8TmctUz.js";import"./useControlled-BTQkJmVV.js";import"./Popper-B67Zc9vL.js";import"./Button-CaVEglZt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-CT4vRpQZ.js";import"./QueryClientProvider-CSQ7Q6Lo.js";import"./Link-Dv4MSEKL.js";import"./Collapse-CL5HS0jI.js";import"./_baseUniq-C6brxGBX.js";import"./_Uint8Array-Q8PrWGYm.js";import"./isArray-B0jnOaQA.js";import"./_getTag-DMlxnM4P.js";import"./isEqual-B1KvTqBz.js";import"./merge-BUbT27GX.js";import"./_initCloneObject-BKnpaPkf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BbU8Qxyz.js";import"./inputBaseClasses-Cb6yvEHg.js";import"./calculateFriendlyFileSize-CqNpoUvN.js";import"./CheckCircleTwoTone-BjY5vWtN.js";import"./InfoTwoTone-zu4DaVNs.js";import"./useMutation--SOUpC1Y.js";import"./dayjs.min-1XIHbNiY.js";import"./chunk-AYJ5UCUI-DgOYknd8.js";import"./cloneDeep-CfavtHgN.js";import"./Skeleton-DfHSJENk.js";import"./SkeletonButton-BIJr3ITb.js";import"./SkeletonInlineBlock-a8Brxge5.js";import"./SkeletonTable-Dl8AIzWW.js";import"./times-Dd5ENhgM.js";import"./toInteger-YBT16SYZ.js";import"./isSymbol-6eJ_mC2Q.js";import"./SkeletonParagraph-DHxPNJSL.js";import"./uniqueId-DDlkbdi_.js";import"./toString-DgO0u6lv.js";import"./CSSTransition-BnGHHW4S.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D_Zgyv6S.js";import"./Avatar-m8hg-fTD.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
