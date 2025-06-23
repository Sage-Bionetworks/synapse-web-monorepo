import{j as a}from"./jsx-runtime-C2zdKJwt.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-COSz_atp.js";import{d as s}from"./ToastMessage-CTTweHqd.js";import{R as n,a as t}from"./RequirementItem-DVF5dQeg.js";import{P as O}from"./Paper-CyCmlL1Y.js";import"./index-CVh1Ipa7.js";import"./iframe-DvA1At3T.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-vwJDhcJW.js";import"./SynapseConstants-DKhjtb2A.js";import"./OrientationBanner-DdeIw4R5.js";import"./index-DSNjHJYf.js";import"./spreadSx-CwcO6WA9.js";import"./react-BxEHnInM.js";import"./FullWidthAlert-XWywqNuH.js";import"./Alert-CUgd9TuU.js";import"./createTheme-BWtMJkqk.js";import"./DefaultPropsProvider-UWqbWpxF.js";import"./useSlot-DDPOHm6f.js";import"./useForkRef-9eN_inJs.js";import"./createSimplePaletteValueFilter-DAe34k5M.js";import"./createSvgIcon-Bgt5hS8C.js";import"./Close-DRddyT85.js";import"./IconButton-BvfnLvJn.js";import"./useTimeout-CQnJRQmv.js";import"./ButtonBase-RPLFf9rD.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BhFXqvhB.js";import"./Stack-BaAbaV6L.js";import"./extendSxProp-B1oyFkfJ.js";import"./getThemeProps-CMN7RrnV.js";import"./useTheme-iqUFZMBT.js";import"./Box-CMAchTxS.js";import"./AlertTitle-CJMCoaRf.js";import"./Typography-D2DkYKYV.js";import"./index-BFPJ1VZ0.js";import"./useTheme-DbZeLE77.js";import"./ClickAwayListener-Cgkgf3jo.js";import"./getReactElementRef-IPwxiBWh.js";import"./index-Bt-y4T2Z.js";import"./index-BnMdIwEL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Djp00MY2.js";import"./Tooltip-BWvRAt5V.js";import"./index-C7NuAW-E.js";import"./useControlled-D_aFISVB.js";import"./Popper-Dk-Zkxvi.js";import"./Button-CWLDo0aq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BbzlL3Qp.js";import"./utils-DToYn1OR.js";import"./Link-C6Ym6MsW.js";import"./Collapse-rwS9aSTb.js";import"./_baseUniq-BzmPl_Sm.js";import"./_Uint8Array-4o0NZ71j.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D11HbiLa.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Fq-fPTon.js";import"./isEqual-eKG6CiW1.js";import"./merge-DKMVabw-.js";import"./_initCloneObject-LJZTQyZs.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DyZk-6A5.js";import"./inputBaseClasses-B3DlAxML.js";import"./calculateFriendlyFileSize-Dt7Ai019.js";import"./CheckCircleTwoTone-DvEV9_7H.js";import"./InfoTwoTone-D2bcAgsD.js";import"./useMutation-DszXITcc.js";import"./dayjs.min-C2Wj_Xdb.js";import"./chunk-AYJ5UCUI-CQxyT5Nz.js";import"./cloneDeep-BVNTYblI.js";import"./Skeleton-DTzjIlY_.js";import"./SkeletonButton-Dt5jxyp2.js";import"./SkeletonInlineBlock-t4KQc0qS.js";import"./SkeletonTable-CLD1FJUv.js";import"./times-hc5fd9GA.js";import"./toInteger-BFkiz_i_.js";import"./isSymbol-BiJqj4py.js";import"./SkeletonParagraph-CFraUR2N.js";import"./uniqueId-CZ8xj-R0.js";import"./toString-CGqi7q7R.js";import"./CSSTransition-CojbsoV-.js";import"./ConditionalWrapper-D6V0ZxsH.js";import"./LockTwoTone-BH1ZuaFV.js";import"./Avatar-CbfTK2jA.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
