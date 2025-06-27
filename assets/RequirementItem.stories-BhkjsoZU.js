import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DjAnDR5a.js";import{d as s}from"./ToastMessage-CDnFvTbx.js";import{R as n,a as t}from"./RequirementItem-FyI9r6yB.js";import{P as O}from"./Paper-DpIYilS4.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DfvW_iKe.js";import"./SynapseConstants-Cbeu2Oyn.js";import"./OrientationBanner-ByRlhM_a.js";import"./index-_NIx4lXM.js";import"./index-CiTIL43e.js";import"./iframe-Cayhvn5K.js";import"./spreadSx-CwcO6WA9.js";import"./react-BVEP5XKz.js";import"./FullWidthAlert-Ccn_EvPT.js";import"./Alert-DrI66yvk.js";import"./createTheme-uO4hqOl0.js";import"./DefaultPropsProvider-rjE15iKg.js";import"./useSlot-DNUzsPmH.js";import"./useForkRef-Co5CBSn4.js";import"./createSimplePaletteValueFilter-Df6fBoTZ.js";import"./createSvgIcon-ClNB3HD5.js";import"./Close-DwhyisnY.js";import"./IconButton-r0IwIs_z.js";import"./useTimeout-BRmr54LZ.js";import"./ButtonBase-CQXp2J7x.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DtjzCl_v.js";import"./Stack-BhvVP5f4.js";import"./extendSxProp-BAvHuC_Y.js";import"./getThemeProps-lIkUo-RK.js";import"./useTheme-BJ-zay94.js";import"./Box-Dna7VRUa.js";import"./AlertTitle-msVq37IX.js";import"./Typography-Dzd7C-5o.js";import"./index-CIsQZRtc.js";import"./useTheme-BgmYpj4o.js";import"./ClickAwayListener-joZsflyy.js";import"./getReactElementRef-DohlxJTS.js";import"./index-j18IfTeB.js";import"./index-DGlI5JgX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C3XaHn-2.js";import"./Tooltip-jMq5XwCC.js";import"./index-CSyBK4mn.js";import"./useControlled-h_Ywxv7k.js";import"./Popper-BsSzgmVt.js";import"./Button-g1eq2ahp.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BonNJG6c.js";import"./QueryClientProvider-BWWE1lZe.js";import"./Link-C-Vr5p9O.js";import"./Collapse-CqTJrAqY.js";import"./_baseUniq-Tcha3pqa.js";import"./_Uint8Array-DQQX6ZQZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-U5Ai_0xq.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CW1nhIBx.js";import"./isEqual-G6XQBDSF.js";import"./merge-BdvLa6pX.js";import"./_initCloneObject-BTvG49r5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B-pTEA8F.js";import"./inputBaseClasses-DKNjI2JS.js";import"./calculateFriendlyFileSize-4eCHEye3.js";import"./CheckCircleTwoTone-BV6qRXGy.js";import"./InfoTwoTone-G8qb8_WT.js";import"./useMutation-lTzopEF7.js";import"./dayjs.min-CV_XXVMs.js";import"./chunk-AYJ5UCUI-BelqaLd_.js";import"./cloneDeep-CF0C-DTO.js";import"./Skeleton-CAD_J8Lh.js";import"./SkeletonButton-CXuR_3ZE.js";import"./SkeletonInlineBlock-9TerB-RC.js";import"./SkeletonTable-CWnn7Gmv.js";import"./times-DYwV1Kze.js";import"./toInteger-CKyZRZzw.js";import"./isSymbol-CXjQqoXy.js";import"./SkeletonParagraph-Da_zpdDI.js";import"./uniqueId-BBLOvYv3.js";import"./toString-DHPP2Bu1.js";import"./CSSTransition-B1Nbqx96.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DK6uPSC2.js";import"./Avatar-2ENWhebP.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
