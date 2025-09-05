import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-B4wZyiSY.js";import{d as s}from"./ToastMessage-BMu3kTvQ.js";import{R as n,a as t}from"./RequirementItem-B9XYJhCC.js";import{P as O}from"./Paper-DqTB2d7e.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-D_Jzezen.js";import"./SynapseConstants-B24uwL7H.js";import"./OrientationBanner-Bzpnatw7.js";import"./index-5AUC81Rv.js";import"./index-DC_F6LC3.js";import"./iframe-Dzq2XZAY.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAQWyoiE.js";import"./FullWidthAlert-RK7cjeY8.js";import"./Alert-BBtsbdxl.js";import"./createTheme-uZyfii9J.js";import"./DefaultPropsProvider-IA8PyDsh.js";import"./useSlot-CMQ7l9V4.js";import"./useForkRef-D7I1FwBO.js";import"./createSimplePaletteValueFilter-D03VuJDr.js";import"./createSvgIcon-fotE-8V0.js";import"./Close-9I607_XN.js";import"./IconButton-BOqOkpuw.js";import"./useTimeout-CQQZ1-To.js";import"./ButtonBase-C7QCcZ9j.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BmYsIlrJ.js";import"./Stack-CsQgmpOy.js";import"./extendSxProp-Dubew6gA.js";import"./getThemeProps-CdHcYIvs.js";import"./useTheme-Dbhdk_AW.js";import"./Box-BMvETEd-.js";import"./AlertTitle-CF11nEVt.js";import"./Typography-6ljS8WSa.js";import"./index-5Vl8GNRO.js";import"./useTheme-BJnMudwe.js";import"./ClickAwayListener-cPSXo_7Q.js";import"./getReactElementRef-Dqx5Gd2m.js";import"./index-CxSdzjMe.js";import"./index-Cr3It6Nz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gIniXPfT.js";import"./Tooltip-K10xvHWr.js";import"./index-Cp1Xui9X.js";import"./useControlled-BHKoj0WG.js";import"./Popper-DzbGTkmd.js";import"./Button-BF8aAEkM.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CgX23BOz.js";import"./QueryClientProvider-BJ02iD0i.js";import"./Link-BfaPB7SL.js";import"./Collapse-Ca7dhEVy.js";import"./_baseUniq-9aYP-DvN.js";import"./_Uint8Array-Dl24TG1b.js";import"./isArray-DVqPlFSm.js";import"./_getTag-B8uRlY8z.js";import"./isEqual-Cx0fd_nO.js";import"./merge-CwTy9me0.js";import"./_initCloneObject-CVT5RH-2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-VmjN6dao.js";import"./inputBaseClasses-K2LQzToB.js";import"./calculateFriendlyFileSize-Gdm1D_jE.js";import"./CheckCircleTwoTone-BfTHwYaO.js";import"./InfoTwoTone-DdxWIabw.js";import"./useMutation-FhdIYqNP.js";import"./dayjs.min-Bv7VhKIm.js";import"./chunk-AYJ5UCUI-cJ-Mesdm.js";import"./cloneDeep-DZzAGQd1.js";import"./Skeleton-BGNF9a_J.js";import"./SkeletonButton-DA1spcop.js";import"./SkeletonInlineBlock-nCQaFi0I.js";import"./SkeletonTable-B2ewvBFl.js";import"./times-CzbyTmKw.js";import"./toInteger-6wCYw44s.js";import"./isSymbol-BX3MMBjX.js";import"./SkeletonParagraph-Dg2L9IU-.js";import"./uniqueId-D0_UbeP7.js";import"./toString-BbBquw9e.js";import"./CSSTransition-DxdwKdS2.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-k-4wVurj.js";import"./Avatar-DV1Fb-7C.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
