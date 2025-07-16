import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BVMbN0ut.js";import{d as s}from"./ToastMessage-BZ_f4f3p.js";import{R as n,a as t}from"./RequirementItem-B_sM6ZFP.js";import{P as O}from"./Paper-DNg490FH.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-C1ighHnt.js";import"./SynapseConstants-Csz7obg_.js";import"./OrientationBanner-Cq_tYaVj.js";import"./index-AELP8EyN.js";import"./index-C0JvWMff.js";import"./iframe-DNXoYa4O.js";import"./spreadSx-CwcO6WA9.js";import"./react-DQONDSgG.js";import"./FullWidthAlert-C_x8NeKc.js";import"./Alert-BDgiv6yE.js";import"./createTheme-B3F90xOt.js";import"./DefaultPropsProvider-Cr3dPd9g.js";import"./useSlot-D3cOw50Q.js";import"./useForkRef-DbtxdJG_.js";import"./createSimplePaletteValueFilter-C1IGZ-iD.js";import"./createSvgIcon-koTmqTDS.js";import"./Close-CWCFLhOT.js";import"./IconButton--vg-yfR-.js";import"./useTimeout-BTkZDFKk.js";import"./ButtonBase-BYY4hzrD.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress--neujvzt.js";import"./Stack-ErGFFWoh.js";import"./extendSxProp-BVQBrtSx.js";import"./getThemeProps-Db77coRQ.js";import"./useTheme-oQB9tHIv.js";import"./Box-Cf0Q_2JL.js";import"./AlertTitle-DuB1Vbeo.js";import"./Typography-CS8I5n2T.js";import"./index-DLsodws3.js";import"./useTheme-CGyFDzld.js";import"./ClickAwayListener-Co9NCCCU.js";import"./getReactElementRef-DYzm166M.js";import"./index-kJ3q-whD.js";import"./index-DwXwC2jP.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ZuxCxpoj.js";import"./Tooltip-B8Tb7fkD.js";import"./index-DznA_vW2.js";import"./useControlled-JW-RUyV0.js";import"./Popper-BkTsEBSY.js";import"./Button-DPEBK_F3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BzmGstcF.js";import"./QueryClientProvider-BwFe2xR9.js";import"./Link-3sQ-XwAe.js";import"./Collapse-BCnqgjTK.js";import"./_baseUniq-Cb2QqR7r.js";import"./_Uint8Array-KnS-zlSM.js";import"./isArray-B2GEIt4T.js";import"./_getTag-Bbp68GcC.js";import"./isEqual-DxfPqfeo.js";import"./merge-CPltTFYH.js";import"./_initCloneObject-KSbHlFJl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-h24MK7uO.js";import"./inputBaseClasses-52cWq4Ml.js";import"./calculateFriendlyFileSize-Dx0ihCia.js";import"./CheckCircleTwoTone-DLZUc_ip.js";import"./InfoTwoTone-DIOaCUV3.js";import"./useMutation-z7mpAMu5.js";import"./dayjs.min-BEb6uDil.js";import"./chunk-AYJ5UCUI-DJWi0FRW.js";import"./cloneDeep-Cx4KKtL5.js";import"./Skeleton-Bhvm0MZh.js";import"./SkeletonButton-LZl1uBOu.js";import"./SkeletonInlineBlock-B-lXrb85.js";import"./SkeletonTable-BJKoo5Xz.js";import"./times-BqpQIjaC.js";import"./toInteger-Kr63dL2h.js";import"./isSymbol-Cp-HXGWp.js";import"./SkeletonParagraph-CTXfhJ1G.js";import"./uniqueId-uFMKWUeX.js";import"./toString-C-TeHUvE.js";import"./CSSTransition-Cjsfza6q.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone--y-z-Ebp.js";import"./Avatar-BCW4af6-.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
