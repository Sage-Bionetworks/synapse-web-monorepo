import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-5e2JacpV.js";import{d as s}from"./ToastMessage-DxQOaTMG.js";import{R as n,a as t}from"./RequirementItem-BW3uXgEh.js";import{P as O}from"./Paper-LciGP85z.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-CbBRbdWd.js";import"./SynapseConstants-hGLgqndx.js";import"./OrientationBanner-LNBCfYfH.js";import"./index-CISyF1wU.js";import"./index-DkZoFfx5.js";import"./iframe-CJGpPw1o.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWAK326i.js";import"./FullWidthAlert-Ds5AKV0w.js";import"./Alert-lOqTDc-9.js";import"./createTheme-Dtg1wCfy.js";import"./DefaultPropsProvider-CTjt-8zY.js";import"./useSlot-CfUlgWNz.js";import"./useForkRef-CtY8tP-S.js";import"./createSimplePaletteValueFilter-LSon_xMw.js";import"./createSvgIcon-CwCmRHkO.js";import"./Close-JKkcByth.js";import"./IconButton-BLCtip1h.js";import"./useTimeout-DNT-m6g2.js";import"./ButtonBase-BSY_LTtp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-s3w59CRq.js";import"./Stack-BLpiiIjx.js";import"./extendSxProp-CYcqzPHY.js";import"./getThemeProps-BaW3Ifvr.js";import"./useTheme-C4HCFZHP.js";import"./Box-FjMdCpDL.js";import"./AlertTitle-DTh08hre.js";import"./Typography-BMMlqfE7.js";import"./index-Bjxfhvit.js";import"./useTheme-CXYb8IF2.js";import"./ClickAwayListener-E1JwztXI.js";import"./getReactElementRef-CBu9u29I.js";import"./index-Ce22gE6o.js";import"./index-B8db3wfS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BztBxul1.js";import"./Tooltip-DwQWb7MM.js";import"./index-COz8OLTi.js";import"./useControlled-DOk0F4HW.js";import"./Popper-DaDJ3xMM.js";import"./Button-CTFpvydl.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BocMyuEp.js";import"./QueryClientProvider-Fcgj1TIf.js";import"./Link-C70H0Bqq.js";import"./Collapse-CoYpk6qA.js";import"./_baseUniq-B58wj4F5.js";import"./_Uint8Array-CWPMNhMM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-gtGhcZ58.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bsb1WP3m.js";import"./isEqual-B0nVun5r.js";import"./merge-baTrsKZw.js";import"./_initCloneObject-_8OEWLLi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cfl-Ls-r.js";import"./inputBaseClasses-7JASpf1p.js";import"./calculateFriendlyFileSize-BHiHoeD-.js";import"./CheckCircleTwoTone-E3L7TLM1.js";import"./InfoTwoTone-CgpYnPu0.js";import"./useMutation-GNMVsm5g.js";import"./dayjs.min-DZYVRRJw.js";import"./chunk-AYJ5UCUI-B_wjLnLE.js";import"./cloneDeep-B0wNp5n_.js";import"./Skeleton-CqA2478q.js";import"./SkeletonButton-DhivPCUK.js";import"./SkeletonInlineBlock-BmujOYXj.js";import"./SkeletonTable-dhtvse1C.js";import"./times-CioyB-MB.js";import"./toInteger-B2Y_CfQn.js";import"./isSymbol-BtswgNL6.js";import"./SkeletonParagraph-xYmLwRuu.js";import"./uniqueId-8SJPutzt.js";import"./toString-D8-0mZKK.js";import"./CSSTransition-Dyq6VGgh.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DWAeZQHY.js";import"./Avatar-DZMvCyjf.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
