import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-B6jC-9RV.js";import{d as s}from"./ToastMessage-DyXUaZmH.js";import{R as n,a as t}from"./RequirementItem-DBprshnV.js";import{P as O}from"./Paper-GEfitkMs.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-BI7PLl8w.js";import"./SynapseConstants-Bh0ooQxO.js";import"./OrientationBanner-35DwZATM.js";import"./index-FM-5jib5.js";import"./index-BI5lQOsu.js";import"./iframe-Bh992iam.js";import"./spreadSx-CwcO6WA9.js";import"./react-OMVIaA_-.js";import"./FullWidthAlert-DYlV_lj8.js";import"./Alert-CSMrm0RL.js";import"./createTheme-DCfJyqXD.js";import"./DefaultPropsProvider-BYMwOOeu.js";import"./useSlot-F7y2gpDj.js";import"./useForkRef-DAOZ23j2.js";import"./createSimplePaletteValueFilter-Bd9oOxX0.js";import"./createSvgIcon-SJuMpeuT.js";import"./Close-smqNtMz1.js";import"./IconButton-BCLck6uA.js";import"./useTimeout-Ca45XijG.js";import"./ButtonBase-DnUof1w4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DkDa1NGx.js";import"./Stack-GuEyk8LE.js";import"./extendSxProp-DJ2y7QTv.js";import"./getThemeProps-C1QTpv83.js";import"./useTheme-CCVugcwa.js";import"./Box-pSBGXNvB.js";import"./AlertTitle-VnVGY_MP.js";import"./Typography-Y4Fx5F_G.js";import"./index-C4bo6hUO.js";import"./useTheme-oX98t7df.js";import"./ClickAwayListener-BBaWZo9D.js";import"./getReactElementRef-D9oPioMP.js";import"./index-CFUDUs03.js";import"./index-B26qpHd_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIJaZVy9.js";import"./Tooltip-BsozqXdX.js";import"./index-D2NSnX6k.js";import"./useControlled-DkznNG6r.js";import"./Popper-BxbtDxmn.js";import"./Button-BFyoJlXb.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-oeDnacJk.js";import"./QueryClientProvider-DcA49eyX.js";import"./Link-vLahYdB5.js";import"./Collapse-BKp_c0SL.js";import"./_baseUniq-BIfjH-XX.js";import"./_Uint8Array-BgUaH4Y0.js";import"./isArray-qN4X7jQ5.js";import"./_getTag-aJdxkrP6.js";import"./isEqual-D_Pln4BK.js";import"./merge-C8OUjJCU.js";import"./_initCloneObject-DRShmAf3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-xWe4npSh.js";import"./inputBaseClasses-D4AFzInG.js";import"./calculateFriendlyFileSize-ofeU2shc.js";import"./CheckCircleTwoTone-Cedrn3d2.js";import"./InfoTwoTone-DPXhSbpu.js";import"./useMutation-DutVxwog.js";import"./dayjs.min-BO-A9L92.js";import"./chunk-AYJ5UCUI-DnbrDPKC.js";import"./cloneDeep-BWho0j_J.js";import"./Skeleton-DnQq6Znq.js";import"./SkeletonButton-B95tPr5t.js";import"./SkeletonInlineBlock-CDOHVTAt.js";import"./SkeletonTable-Bqxin2jA.js";import"./times-Dzo54y4V.js";import"./toInteger-COXm6_82.js";import"./isSymbol-Bx-umEl-.js";import"./SkeletonParagraph-Di-MXEfF.js";import"./uniqueId-BdWDgYhM.js";import"./toString-D5eOCrvW.js";import"./CSSTransition-Bm0Xs5LD.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cx_HY3ra.js";import"./Avatar-DrBd0F6U.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
