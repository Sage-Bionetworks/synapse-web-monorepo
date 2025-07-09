import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BKTbSptn.js";import{M as x}from"./MarkdownSynapse-BoGkVquf.js";import{d as s}from"./ToastMessage-YjCRJxx-.js";import{R as n,a as t}from"./RequirementItem-SAdDwOrd.js";import{P as O}from"./Paper-Bu2H3lJ_.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Ctimzu5z.js";import"./VerificationSubmission-CeTJ0zsJ.js";import"./useFiles-BZQATRqq.js";import"./SynapseConstants-BXePmAe7.js";import"./OrientationBanner-vKeVXHUS.js";import"./index-Ld_bxIOo.js";import"./index-s7fC-_RI.js";import"./iframe-CI9s9X5I.js";import"./spreadSx-CwcO6WA9.js";import"./react-uoVEAcY2.js";import"./FullWidthAlert-CzCKVIIM.js";import"./Alert-Bq3rLHec.js";import"./createTheme-CWpXAeAD.js";import"./DefaultPropsProvider-ByL8xukQ.js";import"./useSlot-CjJcqFoO.js";import"./useForkRef-CMEAjcE_.js";import"./createSimplePaletteValueFilter-BJGZUQIS.js";import"./createSvgIcon-DTIfiSXG.js";import"./Close-B-St3DDX.js";import"./IconButton-DsHdCtaa.js";import"./useTimeout-8Gvd2qkd.js";import"./ButtonBase-COsfQhAy.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BszqDeOS.js";import"./Stack-B86BQTNP.js";import"./extendSxProp-Df0IZ6wD.js";import"./getThemeProps-T6cdU2h5.js";import"./useTheme-CFasK5lR.js";import"./Box-q8YkQw0q.js";import"./AlertTitle-C3eWNWMf.js";import"./Typography-G_VE77n_.js";import"./index-BbFn9--C.js";import"./useTheme-CsAqJUbS.js";import"./ClickAwayListener-D0o3byy8.js";import"./getReactElementRef-B7g9U7iP.js";import"./index-B6mt7uvV.js";import"./index-pcnQ6s1c.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-vnt5G_Et.js";import"./Tooltip-DRZRTEZt.js";import"./index-D0F2b0gm.js";import"./useControlled-B8rEpr-m.js";import"./Popper-Dzip5sHe.js";import"./Button-BrtALbnR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Cb5gkxAY.js";import"./useQuery-DJEzKKWx.js";import"./QueryClientProvider-BlC6IBcQ.js";import"./Link-DPBDyF4z.js";import"./Collapse-DUuEEvZv.js";import"./_baseUniq-BBqCRzqe.js";import"./_Uint8Array-kVpQfpOY.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DxAo8Jr3.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Df0v3WdY.js";import"./isEqual-CwQKvmbv.js";import"./merge-DvaRFt7B.js";import"./_initCloneObject-COIMbWnn.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DUcI3kkz.js";import"./inputBaseClasses-CJ9CT0yM.js";import"./calculateFriendlyFileSize-BLY44VqQ.js";import"./CheckCircleTwoTone-CZve4sSJ.js";import"./InfoTwoTone-Dpk2bSSb.js";import"./useMutation-C8UorNOd.js";import"./dayjs.min-DkU97gqT.js";import"./chunk-AYJ5UCUI-B-g-Yn9t.js";import"./cloneDeep-BRfBHvdn.js";import"./Skeleton-CVVeToV1.js";import"./SkeletonButton-e90RuC0h.js";import"./SkeletonInlineBlock-CawrbbjN.js";import"./SkeletonTable-jaST4XxU.js";import"./times-9ZDsYiwh.js";import"./toInteger-DvbjHxcP.js";import"./isSymbol-DGrRKWoE.js";import"./SkeletonParagraph-DjkynPos.js";import"./uniqueId-DrMR0Mc_.js";import"./toString-Cm1ptND3.js";import"./CSSTransition-BAYsX3-Q.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CtF2liRB.js";import"./Avatar-CuOADd0e.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
