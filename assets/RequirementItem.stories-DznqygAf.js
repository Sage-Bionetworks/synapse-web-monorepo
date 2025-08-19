import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DhKvadWg.js";import{d as s}from"./ToastMessage-CEJESjiq.js";import{R as n,a as t}from"./RequirementItem-D9tDBhMZ.js";import{P as O}from"./Paper-CY5FVEAG.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-D8rghsAH.js";import"./SynapseConstants-BCna4l2c.js";import"./OrientationBanner-C9MUfTx5.js";import"./index-CVoQLnv9.js";import"./index-BuaY3YW0.js";import"./iframe-CB9RLm2k.js";import"./spreadSx-CwcO6WA9.js";import"./react-0syDy3V6.js";import"./FullWidthAlert-BZxmMm3l.js";import"./Alert-BuIno2nG.js";import"./createTheme-BwKauHHe.js";import"./DefaultPropsProvider-sdt8O3fx.js";import"./useSlot-2Lcx0oJc.js";import"./useForkRef-_jAcTXIz.js";import"./createSimplePaletteValueFilter-C2q_FQJj.js";import"./createSvgIcon-3wDtnJX3.js";import"./Close-P5_Ux7pg.js";import"./IconButton-D6lW0S_w.js";import"./useTimeout-BXDWjVyi.js";import"./ButtonBase-DkxGY9m0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D8RR-Hwe.js";import"./Stack-D679agRe.js";import"./extendSxProp-CurqUalJ.js";import"./getThemeProps-DTYZfuZ8.js";import"./useTheme-DPiytpU9.js";import"./Box-B2-eTlSN.js";import"./AlertTitle-Dc-QdeUX.js";import"./Typography-CuSWghUP.js";import"./index-DASj5E_q.js";import"./useTheme-C2n0rsfr.js";import"./ClickAwayListener-DXs6rXAY.js";import"./getReactElementRef-Dk7gEWKT.js";import"./index-D0Ht5zCB.js";import"./index-DcmrF_XG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C7nlyfN6.js";import"./Tooltip-Co-YvhFo.js";import"./index-VT5DBhWW.js";import"./useControlled-C93SLyQj.js";import"./Popper-CPhprIAB.js";import"./Button-C84MYn5A.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-B_0w80Fl.js";import"./QueryClientProvider-DbVmeRWK.js";import"./Link-CvYSWFWB.js";import"./Collapse-BjWhwNwG.js";import"./_baseUniq-D9jAkyOV.js";import"./_Uint8Array-CmXresUg.js";import"./isArray-C5D-ZESG.js";import"./_getTag-8Ax-wOhp.js";import"./isEqual-PLFD9L4o.js";import"./merge-B2EPh-KY.js";import"./_initCloneObject-Bq8KZ5MO.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-T6p8CTbb.js";import"./inputBaseClasses-x_KSJMkP.js";import"./calculateFriendlyFileSize-B8XXE6y4.js";import"./CheckCircleTwoTone-uAYBjvIl.js";import"./InfoTwoTone-C3VRMjQy.js";import"./useMutation-CK4U1fL0.js";import"./dayjs.min-CesC2iFM.js";import"./chunk-AYJ5UCUI-BKDt8PqE.js";import"./cloneDeep-DFPYlp5j.js";import"./Skeleton-gDxVQ58P.js";import"./SkeletonButton-B5LEjCcx.js";import"./SkeletonInlineBlock-CiIgWFzJ.js";import"./SkeletonTable-cQrIVmOA.js";import"./times-3zfi88Th.js";import"./toInteger-4mccIGUG.js";import"./isSymbol-D0BnZDSi.js";import"./SkeletonParagraph-q7rMj-TI.js";import"./uniqueId-ComTLBJy.js";import"./toString-BuJU8AoY.js";import"./CSSTransition-D9DfoXuG.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-QDxnW68W.js";import"./Avatar-ZSgSdGlp.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
