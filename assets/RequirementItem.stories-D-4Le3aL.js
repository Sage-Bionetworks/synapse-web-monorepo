import{j as a}from"./jsx-runtime-BY_mVWc9.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-XAJmHAkO.js";import{d as s}from"./ToastMessage-JXXaoyuo.js";import{R as n,a as t}from"./RequirementItem-zESQCtJO.js";import{P as O}from"./Paper-1Ie-v56U.js";import"./index-CDYR7tL8.js";import"./iframe-ec_Y5N2K.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-Xx-EZMKl.js";import"./SynapseConstants-CD4Gjijh.js";import"./OrientationBanner-CZTPUBzZ.js";import"./index-Jflqg59c.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cr0876MF.js";import"./FullWidthAlert-BWiVBg4T.js";import"./Alert-A7PP1pH1.js";import"./createTheme-DZLOB4Mv.js";import"./DefaultPropsProvider-DNPn7UnV.js";import"./useSlot-Caj1a2M-.js";import"./useForkRef-DivrPue1.js";import"./createSimplePaletteValueFilter-DBau_Gxe.js";import"./createSvgIcon-DALwTUgz.js";import"./Close-B12rcIns.js";import"./IconButton-DyKMG-WG.js";import"./useTimeout-Cqf2BsOs.js";import"./ButtonBase-CzvtEIH5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-vGm6AseL.js";import"./Stack-yvnfu-rk.js";import"./extendSxProp-CnXVVWK3.js";import"./getThemeProps-BGg4fvxA.js";import"./useTheme-gk5821JI.js";import"./Box-BdYZ8dTM.js";import"./AlertTitle-573n6WcI.js";import"./Typography-C1Gc4eFY.js";import"./index-DZbAs7ZD.js";import"./useTheme-B43FcIWF.js";import"./ClickAwayListener-DlSL8Ldo.js";import"./getReactElementRef-BTQA_67l.js";import"./index-BNiyjOON.js";import"./index-CwYnvFaE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ccx_ij52.js";import"./Tooltip-CsjxOjn3.js";import"./index-D3vA8nvS.js";import"./useControlled-B3shF0Q4.js";import"./Popper-C0ikImD9.js";import"./Button-C4-2XFxt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-D6lP2bTM.js";import"./utils-OZVB1z32.js";import"./Link-4BYKlKGk.js";import"./Collapse-CaGOsFtR.js";import"./isNil-Ccu4rjQ0.js";import"./_Uint8Array-CQTvgpZW.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BUVjwr8V.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DYciDMbs.js";import"./_getTag-B_sIfJjf.js";import"./tinycolor-Begke6kS.js";import"./Fade-YiaESS8f.js";import"./inputBaseClasses-Jd5N6oad.js";import"./calculateFriendlyFileSize-GvBAR9FE.js";import"./CheckCircleTwoTone-D1TLx2f1.js";import"./InfoTwoTone-C6qDyMg4.js";import"./useMutation-Cr9MfVSe.js";import"./dayjs.min-DlmYzA05.js";import"./chunk-AYJ5UCUI-COjyIqKz.js";import"./cloneDeep-DotM_zQ1.js";import"./_initCloneObject-C1mLXVej.js";import"./Skeleton-DhA3Wh2L.js";import"./merge-CeQTzTYT.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DEmOIrbO.js";import"./SkeletonInlineBlock-BE-Qewvl.js";import"./SkeletonTable-CeMoGuAj.js";import"./times-BSfoGq46.js";import"./toInteger-CARLSpBV.js";import"./isSymbol-Cv1-XA42.js";import"./SkeletonParagraph-CkCUj38-.js";import"./uniqueId-c2ZMw8NP.js";import"./toString-DFfi5aTF.js";import"./CSSTransition-i3dZovb6.js";import"./ConditionalWrapper-UHZNoYen.js";import"./LockTwoTone-BbiKk9Ze.js";import"./Avatar-BvcRo2lj.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
