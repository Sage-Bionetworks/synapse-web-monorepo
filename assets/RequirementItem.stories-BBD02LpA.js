import{j as a}from"./jsx-runtime-NVCZr_ns.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-ClzXHYqL.js";import{d as s}from"./ToastMessage-13AMMDn7.js";import{R as n,a as t}from"./RequirementItem-vgAFrkhf.js";import{P as O}from"./Paper-DyXeEzRr.js";import"./index-DqXgXlNK.js";import"./iframe-DkYBZzGH.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DDO6EsJb.js";import"./SynapseConstants-CFVW9swV.js";import"./OrientationBanner-GuCD8r9s.js";import"./index-D-YRv47L.js";import"./spreadSx-CwcO6WA9.js";import"./react-kWxIu2q3.js";import"./FullWidthAlert-SXopet03.js";import"./Alert-L60c6DeB.js";import"./createTheme-BuSDQGd8.js";import"./DefaultPropsProvider-DSM959ax.js";import"./useSlot-Dl-E1NKa.js";import"./useForkRef-BCFgqSEg.js";import"./createSimplePaletteValueFilter-DnNpxDEw.js";import"./createSvgIcon-DD8UFdwY.js";import"./Close-BnByskHa.js";import"./IconButton-BGCozIdr.js";import"./useTimeout-C22MGN7f.js";import"./ButtonBase-Cq46nDHL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DdAc_82n.js";import"./Stack-KzgjgJbB.js";import"./extendSxProp-Cz2i_y6N.js";import"./getThemeProps-BfclNv8W.js";import"./useTheme-DsH3VvJS.js";import"./Box--kKzkLBx.js";import"./AlertTitle-VXyF7-Q_.js";import"./Typography--U5fTk5p.js";import"./index-DZa2k1uQ.js";import"./useTheme-DKNiAsNc.js";import"./ClickAwayListener-C8fzxYhd.js";import"./getReactElementRef-C1iBUGYO.js";import"./index-Tn-jAIgy.js";import"./index-DDsT1HKv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BpQSKb2P.js";import"./Tooltip-Blx6qlB6.js";import"./index-ebbK8OCN.js";import"./useControlled-CNW55rLB.js";import"./Popper-SeFOBi_H.js";import"./Button-CPXybp1H.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BAB9f2Ce.js";import"./utils-Bzp-b4VF.js";import"./Link-el_Jwsa5.js";import"./Collapse-CF1_ITFF.js";import"./_baseUniq-CkI7V0Bo.js";import"./_Uint8Array-Dzb2UzT5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Brborpti.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bn-u_oee.js";import"./isEqual-Bqge3gno.js";import"./merge-DaqGySnc.js";import"./_initCloneObject-B7HHl-Tf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DiLLBe5b.js";import"./inputBaseClasses-CCsmcbtl.js";import"./calculateFriendlyFileSize-DF2prR01.js";import"./CheckCircleTwoTone-Ctxs6cbR.js";import"./InfoTwoTone-CGHOYaGD.js";import"./useMutation-4T6MwN1T.js";import"./dayjs.min-DrOfxkxa.js";import"./chunk-AYJ5UCUI-D1eVrG0s.js";import"./cloneDeep-B9n5QnHZ.js";import"./Skeleton-C3ReD1Ow.js";import"./SkeletonButton-59zw_FMZ.js";import"./SkeletonInlineBlock-Cct82JmW.js";import"./SkeletonTable-XBuNTT8W.js";import"./times-DMfg-dRl.js";import"./toInteger-9EqktNeb.js";import"./isSymbol-CIunjbFt.js";import"./SkeletonParagraph-CdL-5OfB.js";import"./uniqueId-Cpx06Q8g.js";import"./toString-D4u7rbE_.js";import"./CSSTransition-B4EHF_vd.js";import"./ConditionalWrapper-BMqVsHsV.js";import"./LockTwoTone-DdohAFeD.js";import"./Avatar-CqXcDHEX.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
