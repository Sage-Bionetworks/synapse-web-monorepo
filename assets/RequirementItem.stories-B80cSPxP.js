import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-C3vchXvS.js";import{d as s}from"./ToastMessage-CPTqmpxM.js";import{R as n,a as t}from"./RequirementItem-9dqW-vs4.js";import{P as O}from"./Paper-BMidXjbc.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CQdMNpwn.js";import"./SynapseConstants-BKOIVSJ4.js";import"./OrientationBanner-VS5H_DpA.js";import"./index-KnRDUL2Q.js";import"./index-CzvTTXra.js";import"./iframe-BnhebwFh.js";import"./spreadSx-CwcO6WA9.js";import"./react-CwiTBx-n.js";import"./FullWidthAlert-Cm6t_VNT.js";import"./Alert-C_RtWjz7.js";import"./createTheme-BBcmnOvd.js";import"./DefaultPropsProvider-MsJBWg3I.js";import"./useSlot-BCyVFvGq.js";import"./useForkRef-BfkTblL9.js";import"./createSimplePaletteValueFilter-f4T_jVmW.js";import"./createSvgIcon-9MzpKAHB.js";import"./Close-DC7k06u9.js";import"./IconButton-BO4ctIYi.js";import"./useTimeout-D5G-CtgI.js";import"./ButtonBase-C7l6OA8V.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DvGoH6e5.js";import"./Stack-cWDEnh-V.js";import"./extendSxProp-DpqtawsB.js";import"./getThemeProps-DmSfrJqa.js";import"./useTheme-C3jckGwZ.js";import"./Box-ti_b82sh.js";import"./AlertTitle-DvPEm5Gy.js";import"./Typography-OgSpv5jV.js";import"./index-D_WOl2uf.js";import"./useTheme-CS-MMbqX.js";import"./ClickAwayListener-XtBEsLYa.js";import"./getReactElementRef-DdyaVXMl.js";import"./index-C--iv-i_.js";import"./index-Bx9u3dOQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BD3gZhMj.js";import"./Tooltip-C_HHz7XN.js";import"./index-PPFeiqod.js";import"./useControlled-W5KRR2ES.js";import"./Popper-BxPEE_mv.js";import"./Button-DHUU4YS0.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Zz63RtHv.js";import"./QueryClientProvider-CzdxtEsU.js";import"./Link-ClQQShoZ.js";import"./Collapse-DWeFT-od.js";import"./_baseUniq-BdWipXwy.js";import"./_Uint8Array-gbGN_m7B.js";import"./isArray-_QOVi47p.js";import"./_getTag-D0ycOmhH.js";import"./isEqual-Xeyt-HlP.js";import"./merge-rXRdWApR.js";import"./_initCloneObject-CksKMSIv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade--cBwDFJB.js";import"./inputBaseClasses-BNkcRSXg.js";import"./calculateFriendlyFileSize-BNVEkr6h.js";import"./CheckCircleTwoTone-Ck5Qv6hm.js";import"./InfoTwoTone-DetrBiiu.js";import"./useMutation-DBPLKtEQ.js";import"./dayjs.min-Dy65Hx2l.js";import"./chunk-AYJ5UCUI-DqG-g6K6.js";import"./cloneDeep-BkBBgP7B.js";import"./Skeleton-B1HZakfV.js";import"./SkeletonButton-D6hwgcuL.js";import"./SkeletonInlineBlock-LFEcEewI.js";import"./SkeletonTable-DbHPcb_r.js";import"./times-CjfmPuD-.js";import"./toInteger-CqvK7gPK.js";import"./isSymbol-yfM1zQ85.js";import"./SkeletonParagraph-DdvvAFzI.js";import"./uniqueId-D53m_pis.js";import"./toString-DzpbGUZM.js";import"./CSSTransition-fbp9YmwM.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BauaE8wF.js";import"./Avatar-CQ-88LVs.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
