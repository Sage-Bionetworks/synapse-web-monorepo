import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DYiLMHl-.js";import{d as s}from"./ToastMessage-Cer3ve9i.js";import{R as n,a as t}from"./RequirementItem-CioeO9We.js";import{P as O}from"./Paper-B8lFXjj-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BD4KcggH.js";import"./SynapseConstants-C5fJ6W9x.js";import"./OrientationBanner-B1U-JKpH.js";import"./index-CApIUj-F.js";import"./index-CTBfKjC4.js";import"./iframe-gTIDAZQg.js";import"./spreadSx-CwcO6WA9.js";import"./react-CubyAX3H.js";import"./FullWidthAlert-DhFPV9iX.js";import"./Alert-WGmoL_4K.js";import"./createTheme-BeM14ukj.js";import"./DefaultPropsProvider-CodfpIlO.js";import"./useSlot-BQo3_OIz.js";import"./useForkRef-BbhCp5rg.js";import"./createSimplePaletteValueFilter-CPaswB4Q.js";import"./createSvgIcon-D58Sw3_z.js";import"./Close-BKdI9nH5.js";import"./IconButton-CqHRM4EF.js";import"./useTimeout-BvDOFDRr.js";import"./ButtonBase-mbVOgLji.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BpCYYZDo.js";import"./Stack-DIijSgme.js";import"./useThemeProps-CMVD1ZMq.js";import"./getThemeProps-DqlpC9Mi.js";import"./useTheme-BA2R1Ps9.js";import"./extendSxProp-BZCmJIiL.js";import"./Box-Vn1G5ew2.js";import"./AlertTitle-CHQ1Ywle.js";import"./Typography-CE5_NmU_.js";import"./index-q0agkvi3.js";import"./useTheme-BDDIZjtd.js";import"./ClickAwayListener-BDdlm6vq.js";import"./getReactElementRef-DoTKk2nz.js";import"./index-bPKcxg0x.js";import"./index-BXX3-DP5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D9O_1KqJ.js";import"./Tooltip-thvrSoEP.js";import"./index-CaRzBUHM.js";import"./useControlled-BprndzS8.js";import"./Popper-QoAfo2eP.js";import"./Button-DbuI_meR.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery--gmCGzxD.js";import"./QueryClientProvider-DkLrC5l_.js";import"./Link-Ci8k81v0.js";import"./Collapse-DdwAzucD.js";import"./_baseUniq-CtYXr8Su.js";import"./_Uint8Array-Dz3m3Swg.js";import"./isArray-DNhEbc_x.js";import"./_getTag-DhnUM1Y3.js";import"./isEqual-BdiSvygy.js";import"./noop-DX6rZLP_.js";import"./merge-BuKZby1l.js";import"./_initCloneObject-CHyCDwZf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B6EkDVCd.js";import"./inputBaseClasses--3QcI5AK.js";import"./calculateFriendlyFileSize-B1f455kq.js";import"./CheckCircleTwoTone-a7_qh5-t.js";import"./InfoTwoTone-D7rp3nLr.js";import"./useMutation-D8cnzs-A.js";import"./dayjs.min-Cu_x3gTh.js";import"./chunk-AYJ5UCUI-H1s9FfhD.js";import"./cloneDeep-BZPNU5xO.js";import"./Skeleton-K5NPRluW.js";import"./SkeletonButton-8bELaU-d.js";import"./SkeletonInlineBlock-8Hw4SajA.js";import"./SkeletonTable-sf-P4F3m.js";import"./times-WaCuw9lB.js";import"./toInteger-CISJsxcP.js";import"./isSymbol-DHxFOI7d.js";import"./SkeletonParagraph-dGZe7Get.js";import"./uniqueId-DGp_Euid.js";import"./toString-BDXAedva.js";import"./CSSTransition-CPshtsrX.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-lkxXj18R.js";import"./Avatar-DiWoDzKi.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
