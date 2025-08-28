import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-B3TY98Qr.js";import{d as s}from"./ToastMessage-oHOaoer5.js";import{R as n,a as t}from"./RequirementItem-BAxLyG17.js";import{P as O}from"./Paper-DMmdFBKL.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-BPERm-cu.js";import"./SynapseConstants-D00XTuqK.js";import"./OrientationBanner-DwasDZmJ.js";import"./index-BCRFxw-n.js";import"./index-yCXaIsJ4.js";import"./iframe-Dgw0ddSq.js";import"./spreadSx-CwcO6WA9.js";import"./react-D3jiIDv1.js";import"./FullWidthAlert-BIBV4Cq8.js";import"./Alert-DTtaGRoB.js";import"./createTheme-Do2aQZve.js";import"./DefaultPropsProvider-DA7gNYCg.js";import"./useSlot-DEVxrYXR.js";import"./useForkRef-Bn9qWfWW.js";import"./createSimplePaletteValueFilter-BHnhbDkS.js";import"./createSvgIcon-DdAS40k4.js";import"./Close-BBLxdgjF.js";import"./IconButton-CblLNGjE.js";import"./useTimeout-Da7I_d7d.js";import"./ButtonBase-BGA1bzPt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BVLjCIit.js";import"./Stack-7VNSqroz.js";import"./extendSxProp-B1V_wo3n.js";import"./getThemeProps-D7cW0aau.js";import"./useTheme-C0QTeBxb.js";import"./Box-CRuUmbYm.js";import"./AlertTitle-BTKxYoJ7.js";import"./Typography-CmGZeFeL.js";import"./index-DwjXVB4n.js";import"./useTheme-Cp6Z_OGT.js";import"./ClickAwayListener-DRFmCXUS.js";import"./getReactElementRef-CXJuXcK9.js";import"./index-DmP6khY1.js";import"./index-CQ8BoWaF.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-r6SG4a-A.js";import"./Tooltip-BrgXw1Ls.js";import"./index-jmgeEAfX.js";import"./useControlled-vLN5jkuc.js";import"./Popper-CZtBRXx-.js";import"./Button-Bdu-kUqw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-C9SHkG8T.js";import"./QueryClientProvider-S4LJ2qFq.js";import"./Link-B9YecAyg.js";import"./Collapse-BSRMULAt.js";import"./_baseUniq-UUyCIDNM.js";import"./_Uint8Array-D7urBA5u.js";import"./isArray-DAFWMPVS.js";import"./_getTag-D8Au6Ygl.js";import"./isEqual-BrcUvxQT.js";import"./merge-C0TzSy4i.js";import"./_initCloneObject-vSuvn-Og.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-tsytefLF.js";import"./inputBaseClasses-CgrUI19Y.js";import"./calculateFriendlyFileSize-CjVI3fw6.js";import"./CheckCircleTwoTone-B-HOVuQz.js";import"./InfoTwoTone-2u3rIjXL.js";import"./useMutation-DLlWKSte.js";import"./dayjs.min-CALBWj5h.js";import"./chunk-AYJ5UCUI-BfnxM5bb.js";import"./cloneDeep-v_2cqpzj.js";import"./Skeleton-C6DJCA98.js";import"./SkeletonButton-CIKiRPZR.js";import"./SkeletonInlineBlock-BfBiczww.js";import"./SkeletonTable-DS_fp9Vl.js";import"./times-Bagj5sU6.js";import"./toInteger-y8QuViu8.js";import"./isSymbol-BT1VYbZu.js";import"./SkeletonParagraph-BehKgm63.js";import"./uniqueId-CosKg2Yc.js";import"./toString-VqgiSyFN.js";import"./CSSTransition-CkTd2a3a.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BQ7tQNPL.js";import"./Avatar-DKG9BHSq.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
