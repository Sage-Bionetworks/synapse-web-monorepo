import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DGLz8BsE.js";import{d as s}from"./ToastMessage-o1RGlWlD.js";import{R as n,a as t}from"./RequirementItem-DrpcuSAk.js";import{P as O}from"./Paper-DdmZXCKA.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-Ct8_vfg_.js";import"./SynapseConstants-D02poIxn.js";import"./OrientationBanner-8dxpFSGF.js";import"./index-BMcX8guG.js";import"./index-B_MBuESX.js";import"./iframe-DTzVO3E0.js";import"./spreadSx-CwcO6WA9.js";import"./react-CVVq801I.js";import"./FullWidthAlert-DZnHLtXj.js";import"./Alert-D8RmKWMH.js";import"./createTheme-cPwV87XV.js";import"./DefaultPropsProvider-Le_Qtgl5.js";import"./useSlot-BFhp29pE.js";import"./useForkRef-DmVCh7BX.js";import"./createSimplePaletteValueFilter-DKCtxExo.js";import"./createSvgIcon-gtrcrQsr.js";import"./Close-DzAUUUKb.js";import"./IconButton-BTvxuh8j.js";import"./useTimeout-B9lAiuJj.js";import"./ButtonBase-BOfe2YeE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-TnmE2Gjl.js";import"./Stack-CC6q0G0O.js";import"./extendSxProp-Bqx6A1Vk.js";import"./getThemeProps-akle9_rg.js";import"./useTheme-D3k6CfVy.js";import"./Box-wHNIJtBr.js";import"./AlertTitle-DHKPTzag.js";import"./Typography-D7li2wjp.js";import"./index-38b-zSqt.js";import"./useTheme-C15ihBa6.js";import"./ClickAwayListener-BhdzrT8s.js";import"./getReactElementRef-BZxyEit6.js";import"./index-B3f7xuDx.js";import"./index-DarjTX3K.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DS2ARWWQ.js";import"./Tooltip-CsOwgxhh.js";import"./index-BSvLcxsL.js";import"./useControlled-CKz5Eg6L.js";import"./Popper-B8JnDrpX.js";import"./Button-CQNncsmG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D6JGZGwF.js";import"./QueryClientProvider-B3Pa2a4T.js";import"./Link-CjowCLw6.js";import"./Collapse-BO8S6Cg-.js";import"./_baseUniq-Cjyl1iP4.js";import"./_Uint8Array-BJ1AoE8R.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Bt4UmfJk.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CjB7XFbx.js";import"./isEqual-BNk9uLic.js";import"./merge-DsvdXHA5.js";import"./_initCloneObject-C56K81oH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DFC2hxCS.js";import"./inputBaseClasses-BOsEEz2q.js";import"./calculateFriendlyFileSize-eWc8C6fj.js";import"./CheckCircleTwoTone-mBvHCTxv.js";import"./InfoTwoTone-BOIM7qS5.js";import"./useMutation-CwPeYIxF.js";import"./dayjs.min-C6R6WyUS.js";import"./chunk-AYJ5UCUI-B_FJVpwI.js";import"./cloneDeep-D_RINFFR.js";import"./Skeleton-D-EvYe3s.js";import"./SkeletonButton-CmxTcLLh.js";import"./SkeletonInlineBlock-5G42t9LV.js";import"./SkeletonTable-BSJTPoGa.js";import"./times-C0k6_LOv.js";import"./toInteger-CAWtCt54.js";import"./isSymbol-B6wS_46q.js";import"./SkeletonParagraph-Bwd37LZq.js";import"./uniqueId-BASD2XMD.js";import"./toString-BvK1jAKF.js";import"./CSSTransition-XQLReRYk.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DU-_fy0K.js";import"./Avatar-Bwaqik8N.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
