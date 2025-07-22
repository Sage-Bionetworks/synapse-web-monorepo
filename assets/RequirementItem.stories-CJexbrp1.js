import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-Ccp7dvmT.js";import{d as s}from"./ToastMessage-jUEWSu9X.js";import{R as n,a as t}from"./RequirementItem-DH_c67p6.js";import{P as O}from"./Paper-C8VfYpk9.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-Bcrl0BGw.js";import"./SynapseConstants-FXo_DyDb.js";import"./OrientationBanner-BXKiWy1p.js";import"./index-CCmOko8a.js";import"./index-BjhBhGxZ.js";import"./iframe-CAKRVY94.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmGAKZwY.js";import"./FullWidthAlert-DMWPwNKF.js";import"./Alert-Cuv-PqdA.js";import"./createTheme-DouVkzZF.js";import"./DefaultPropsProvider-DUe4SLC0.js";import"./useSlot-C6yZ3epQ.js";import"./useForkRef-DoziFzYF.js";import"./createSimplePaletteValueFilter-B7hCzxjC.js";import"./createSvgIcon-BjojtdYW.js";import"./Close-6lLVp_EC.js";import"./IconButton-hUHxx1-A.js";import"./useTimeout-DR1J0EHh.js";import"./ButtonBase-B5GcETG2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C4Zo5_zO.js";import"./Stack-CjO5cU09.js";import"./extendSxProp-D5W_0O1z.js";import"./getThemeProps-DhOh3UIi.js";import"./useTheme-D5r2PTOw.js";import"./Box-DQDMnk9d.js";import"./AlertTitle-Bvt17my0.js";import"./Typography-lkRJvgBP.js";import"./index-zuLHUcGH.js";import"./useTheme-5uMkSGI3.js";import"./ClickAwayListener-BRDgwr-1.js";import"./getReactElementRef-D1DoIaoO.js";import"./index-CRlKgqQ0.js";import"./index-DxqzKTCE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-FaiCky57.js";import"./Tooltip-BuUL4GgZ.js";import"./index-DS43WhvP.js";import"./useControlled-BJ2c-GyL.js";import"./Popper-KrHjvaqU.js";import"./Button-fWEQK8jF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CKLqaGno.js";import"./QueryClientProvider-DHk5eiZe.js";import"./Link-8kkS-mxx.js";import"./Collapse-CKQpnZfS.js";import"./_baseUniq-Dswgy6EB.js";import"./_Uint8Array-ChBpcGHI.js";import"./isArray-CS29XtqI.js";import"./_getTag-SF2PxsxB.js";import"./isEqual-CGyRRUPG.js";import"./merge-B0Gh6zE8.js";import"./_initCloneObject-BVydIEyN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ActGc6ip.js";import"./inputBaseClasses-_51fNEuP.js";import"./calculateFriendlyFileSize-DLPv6MaH.js";import"./CheckCircleTwoTone-DeOItwFW.js";import"./InfoTwoTone-jmaNwLhA.js";import"./useMutation-B4ZT0pCG.js";import"./dayjs.min-BGs6fL4y.js";import"./chunk-AYJ5UCUI-BCiY7pDA.js";import"./cloneDeep-DtBaUqoa.js";import"./Skeleton-DrfCxUok.js";import"./SkeletonButton-duNyvSeY.js";import"./SkeletonInlineBlock-DSYloPuv.js";import"./SkeletonTable-AIjfX57M.js";import"./times-BYdLJUh2.js";import"./toInteger-PE4ywoN-.js";import"./toNumber-D-r_h-Dt.js";import"./isSymbol-Cxc7JKuz.js";import"./SkeletonParagraph-i9I6kK5-.js";import"./uniqueId-Cs94xBSg.js";import"./toString-B1Ug-o6a.js";import"./CSSTransition-CAWmaXQp.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D9505Phx.js";import"./Avatar-C1iUYD5I.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
