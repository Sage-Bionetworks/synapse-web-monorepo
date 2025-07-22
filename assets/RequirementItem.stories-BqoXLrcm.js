import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-yP01gaI9.js";import{d as s}from"./ToastMessage-4fC3Gvke.js";import{R as n,a as t}from"./RequirementItem-Bce6oxR5.js";import{P as O}from"./Paper-DzUltBD5.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-NAPEOWTe.js";import"./SynapseConstants-ZujiDdnj.js";import"./OrientationBanner-BFVnzJCT.js";import"./index-DMDSLEuz.js";import"./index-Ql9GupV3.js";import"./iframe-BbHdFlCZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-zz4KRBGZ.js";import"./FullWidthAlert-D3CWhk1l.js";import"./Alert-CZm30nVm.js";import"./createTheme-C_6BZK9I.js";import"./DefaultPropsProvider-rpfn49E6.js";import"./useSlot-BTPaFSp6.js";import"./useForkRef-BF16tT9B.js";import"./createSimplePaletteValueFilter-BIR6Oix8.js";import"./createSvgIcon-CPcNPoAE.js";import"./Close-Cpfh8eGa.js";import"./IconButton-Byr7eQUa.js";import"./useTimeout-TryPwkLv.js";import"./ButtonBase-Bt8F52QF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C70WqXs-.js";import"./Stack-CNcS7o0G.js";import"./extendSxProp-DmfldSCx.js";import"./getThemeProps-fXGlpw-D.js";import"./useTheme-BMAsJgNK.js";import"./Box-CA3S1lN6.js";import"./AlertTitle-EMsYZkCw.js";import"./Typography-D7deOCV_.js";import"./index-B587bjKH.js";import"./useTheme-CXo8RiLD.js";import"./ClickAwayListener-PpiBcJVc.js";import"./getReactElementRef-elL7tX--.js";import"./index-CqAKZs2B.js";import"./index-SqxiyzVh.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-KpdUeqoE.js";import"./Tooltip-BFZ2f7bi.js";import"./index-B-0wYL79.js";import"./useControlled-0i4uVPox.js";import"./Popper-CiJ7Ne0_.js";import"./Button-D2UKPT4_.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BNYuqUnX.js";import"./QueryClientProvider-DqJEe2D5.js";import"./Link-BPac_WEw.js";import"./Collapse-BQ7cM5q3.js";import"./_baseUniq-DKv4zAu-.js";import"./_Uint8Array-ByDmfzgO.js";import"./isArray-DEIFM-s9.js";import"./_getTag-Db2AEv7U.js";import"./isEqual-Baw0u5Wf.js";import"./merge-qUzdv09r.js";import"./_initCloneObject-CWeP-xbp.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B64SxHFI.js";import"./inputBaseClasses-DAdGnvWP.js";import"./calculateFriendlyFileSize-DP-Gl2nj.js";import"./CheckCircleTwoTone-DfJnscXI.js";import"./InfoTwoTone-BmG_ee19.js";import"./useMutation-BnQem0Nf.js";import"./dayjs.min-brR9x7FJ.js";import"./chunk-AYJ5UCUI-vAcJJ7XF.js";import"./cloneDeep-gtIpU5US.js";import"./Skeleton-BLLmu3fn.js";import"./SkeletonButton-DIB-_1nP.js";import"./SkeletonInlineBlock-3-d77C-1.js";import"./SkeletonTable-DSHSzTfP.js";import"./times-BiJk_NZL.js";import"./toInteger-Dz9S8uzA.js";import"./toNumber-DX0oXYPZ.js";import"./isSymbol-KEzUrzxC.js";import"./SkeletonParagraph-DVWGoc2w.js";import"./uniqueId-D61Fpjrg.js";import"./toString-DCT9RFjj.js";import"./CSSTransition-DL_w8rkp.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BFc7Rrzj.js";import"./Avatar-Da_4QjRM.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
