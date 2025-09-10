import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-tBrP3dAz.js";import{d as s}from"./ToastMessage-BRIVeS6g.js";import{R as n,a as t}from"./RequirementItem-Lm-UknT6.js";import{P as O}from"./Paper-mhgVS_uG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-DfvSHy59.js";import"./SynapseConstants-DBaXNK7e.js";import"./OrientationBanner-i6W0EBQp.js";import"./index-B5ZWLZ5-.js";import"./index-D9ihYNBM.js";import"./iframe-pqb1pWSd.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeveDELd.js";import"./FullWidthAlert-R0M4V0bV.js";import"./Alert-CjbkLLmN.js";import"./createTheme-BWIyDVrX.js";import"./DefaultPropsProvider-D2MKCCrb.js";import"./useSlot-DtUY8ilh.js";import"./useForkRef-B6xUNni8.js";import"./createSimplePaletteValueFilter-BNigTjTM.js";import"./createSvgIcon-BmRPqEb8.js";import"./Close-BEVHtHX9.js";import"./IconButton-DAJFbbML.js";import"./useTimeout-Bn2K5TYG.js";import"./ButtonBase-Z-MGLh88.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B0zbCkH8.js";import"./Stack-BSZBaPmG.js";import"./extendSxProp-9cMljFx5.js";import"./getThemeProps-DNYjrSwN.js";import"./useTheme-D1zuUO8e.js";import"./Box-mWMALOus.js";import"./AlertTitle-m68_MPj5.js";import"./Typography-7LVqlzoQ.js";import"./index-CwGSJ5dj.js";import"./useTheme-DO7dZYA7.js";import"./ClickAwayListener-DcwV8dky.js";import"./getReactElementRef-Ps-f7eKg.js";import"./index-XxObJK5o.js";import"./index-nNjREFEA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DzrXL7gM.js";import"./Tooltip-BKdee5xx.js";import"./index-D65xsDcS.js";import"./useControlled-CrGo9MTn.js";import"./Popper-BeeuG86A.js";import"./Button-D5076Oxi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-DdLEtQxq.js";import"./QueryClientProvider-CGLdhYBU.js";import"./Link-lxWKc_ox.js";import"./Collapse-Bv5dU9k5.js";import"./_baseUniq-BmE0A_Xr.js";import"./_Uint8Array-BWgfEmFY.js";import"./isArray-xHMFFYhw.js";import"./_getTag-Gpw-hnp_.js";import"./isEqual-DhLJQUGp.js";import"./merge-C2LH0t1x.js";import"./_initCloneObject-CfrF0OoR.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BIiVZsiZ.js";import"./inputBaseClasses-BXrTwmtb.js";import"./calculateFriendlyFileSize-Da5J-8Wb.js";import"./CheckCircleTwoTone-BDAODfpi.js";import"./InfoTwoTone-CxGbcOZj.js";import"./useMutation-9nl8qwzg.js";import"./dayjs.min-fPgISjHY.js";import"./chunk-AYJ5UCUI-Be12IADQ.js";import"./cloneDeep-BDjbbeKs.js";import"./Skeleton-B7HWIVJV.js";import"./SkeletonButton-Bo5n7eSe.js";import"./SkeletonInlineBlock-CQ2cg9rb.js";import"./SkeletonTable-B__cBoGS.js";import"./times-DLaYzIvl.js";import"./toInteger-DeN10Eni.js";import"./isSymbol-BEwM0VUQ.js";import"./SkeletonParagraph-Bqdfds8k.js";import"./uniqueId-DoWsN8ZP.js";import"./toString-CO5YCBid.js";import"./CSSTransition-DBpDS59a.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Bxf4TjpM.js";import"./Avatar-Bzr2MpQi.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
