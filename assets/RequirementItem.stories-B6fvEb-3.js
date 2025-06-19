import{j as a}from"./jsx-runtime-jRxYWCwX.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-yEclTnM9.js";import{d as s}from"./ToastMessage-BMA4IPc2.js";import{R as n,a as t}from"./RequirementItem-KdpK_K_v.js";import{P as O}from"./Paper-D4CfMZ_X.js";import"./index-2wQoqSko.js";import"./iframe-xHFrq_F7.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-BvsKTpC9.js";import"./SynapseConstants-CYbpNqdT.js";import"./OrientationBanner-Br5nTvCd.js";import"./index-B61ox3Gx.js";import"./spreadSx-CwcO6WA9.js";import"./react-DomoPTqD.js";import"./FullWidthAlert-DV2WW6p2.js";import"./Alert-Bw5q--Vv.js";import"./createTheme-CNfVkL0H.js";import"./DefaultPropsProvider-B8PV_5sS.js";import"./useSlot-BfLx_dOI.js";import"./useForkRef-DMvEYMis.js";import"./createSimplePaletteValueFilter-CuaYVmHN.js";import"./createSvgIcon-B9-0rLwX.js";import"./Close-C1W94XMr.js";import"./IconButton-DHSMjmzi.js";import"./useTimeout-DFO7OOTS.js";import"./ButtonBase-BGHCXqvG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C0_0v47y.js";import"./Stack-fr08Gq8W.js";import"./extendSxProp-CVj7jJdy.js";import"./getThemeProps-CnB1RaPH.js";import"./useTheme-ScBftXUZ.js";import"./Box-CFkFfEu6.js";import"./AlertTitle-HqYM7drA.js";import"./Typography-DV3DT36E.js";import"./index-BFzG-4ZV.js";import"./useTheme-P2ktGu7N.js";import"./ClickAwayListener-Y9Lb_tSy.js";import"./getReactElementRef-BlC79LIf.js";import"./index-CGFHOidS.js";import"./index-BZkBlZdR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CX5cENy7.js";import"./Tooltip-Mh1fqoQC.js";import"./index-DEUTnh1D.js";import"./useControlled-CcplrN4J.js";import"./Popper-BDiYjOKN.js";import"./Button-Buu_9ObU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CRzB6f_r.js";import"./utils-D_wBfMna.js";import"./Link-6hsepPpX.js";import"./Collapse-B4sq3tJt.js";import"./_baseUniq-BVzMqi3s.js";import"./_Uint8Array-DJsLV1MS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DndHkETJ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CxyUzIgx.js";import"./isEqual-DmMMLn4B.js";import"./merge-BLyFTkJy.js";import"./_initCloneObject-CzREK7U6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bmxjpoc6.js";import"./inputBaseClasses-YkhN0Aa7.js";import"./calculateFriendlyFileSize-CZlcI_M7.js";import"./CheckCircleTwoTone-lp2UGx41.js";import"./InfoTwoTone-Dvj7YSLa.js";import"./useMutation-DX80x01_.js";import"./dayjs.min-DjYfhnJH.js";import"./chunk-AYJ5UCUI-D9w80p0W.js";import"./cloneDeep-CCsqOGsc.js";import"./Skeleton-b6FhVeVz.js";import"./SkeletonButton-C6fi_g4p.js";import"./SkeletonInlineBlock-BtnrItqf.js";import"./SkeletonTable-BYRTgQB0.js";import"./times-DxqWq_uV.js";import"./toInteger-jYLy0adB.js";import"./isSymbol-D74kea88.js";import"./SkeletonParagraph-CtsonJGK.js";import"./uniqueId-D6_1Fcvb.js";import"./toString-D9x8fjij.js";import"./CSSTransition-xUfWK4DY.js";import"./ConditionalWrapper-CD1DmMbo.js";import"./LockTwoTone-_E3Ok-7_.js";import"./Avatar-B9N6NVnR.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
