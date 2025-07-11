import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-CLxG7man.js";import{d as s}from"./ToastMessage-BHgKj_SL.js";import{R as n,a as t}from"./RequirementItem-DbEqMfZd.js";import{P as O}from"./Paper-De0lh8eX.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BGqzmh3K.js";import"./SynapseConstants-ljMAdx68.js";import"./OrientationBanner-BJoiLH5u.js";import"./index-BLHxJKGR.js";import"./index-DfXhoS93.js";import"./iframe-CmMCQ4D1.js";import"./spreadSx-CwcO6WA9.js";import"./react-C55eq54t.js";import"./FullWidthAlert-Dmg54ubi.js";import"./Alert-DdXaF5ih.js";import"./createTheme-NstNY56j.js";import"./DefaultPropsProvider-BspoEs_3.js";import"./useSlot-G1lnVT-7.js";import"./useForkRef-BP-fxWVS.js";import"./createSimplePaletteValueFilter-BVA8XCKf.js";import"./createSvgIcon-DWS9jufq.js";import"./Close-Bw8bO_ey.js";import"./IconButton-BWMua7vU.js";import"./useTimeout-BXTGuQAu.js";import"./ButtonBase-Cx1k84i0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-LMad5R4j.js";import"./Stack-CfaqAJqE.js";import"./extendSxProp-SsxQet_B.js";import"./getThemeProps-C5S3wagm.js";import"./useTheme-BYUnt95G.js";import"./Box-uE-W7Sa0.js";import"./AlertTitle-CCmDEvrt.js";import"./Typography-UvjlH3GM.js";import"./index-BhAvfGUh.js";import"./useTheme-BWvFZ9eF.js";import"./ClickAwayListener-BwjI0Npa.js";import"./getReactElementRef-mWD2ut9h.js";import"./index-Birxyppr.js";import"./index-C4Gk4dZy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-HWLRwbg6.js";import"./Tooltip-D5cxmH7B.js";import"./index-D63gI9c1.js";import"./useControlled-DmifYyk4.js";import"./Popper-DR2KrX6d.js";import"./Button-CIhLg1aw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-8Z3xdu9W.js";import"./QueryClientProvider-DMlK99P5.js";import"./Link-BSPnFS7F.js";import"./Collapse-DBDRnYj5.js";import"./_baseUniq-BI8Wf5sc.js";import"./_Uint8Array-Ydrn2Wyi.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CX_aDVYj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D1f8lrtD.js";import"./isEqual-DxBbzxZF.js";import"./merge-DIokW4tV.js";import"./_initCloneObject-DQnn-fay.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-2DQ5ggOQ.js";import"./inputBaseClasses-CX2aFV1A.js";import"./calculateFriendlyFileSize-5GaeDM8q.js";import"./CheckCircleTwoTone-3PcAFoLI.js";import"./InfoTwoTone-o8EvCK01.js";import"./useMutation-Dx_N1B5f.js";import"./dayjs.min-BaM1Jxz1.js";import"./chunk-AYJ5UCUI-DkR7fV6X.js";import"./cloneDeep-C6XcWJ4n.js";import"./Skeleton-F5jMcS6Z.js";import"./SkeletonButton-DtRmTpu7.js";import"./SkeletonInlineBlock-Sj3eCySv.js";import"./SkeletonTable-D7EuUw7B.js";import"./times-DXiL4RDA.js";import"./toInteger-BTMbvDiJ.js";import"./isSymbol-Bx8sUzGK.js";import"./SkeletonParagraph-Z5p3STae.js";import"./uniqueId-CbkSu7gu.js";import"./toString-BVqcuACr.js";import"./CSSTransition-CzGSX1B_.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CYmUX0Lz.js";import"./Avatar-B7YQMs4n.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
