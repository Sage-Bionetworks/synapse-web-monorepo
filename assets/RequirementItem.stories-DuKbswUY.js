import{j as a}from"./jsx-runtime-MbANjM5d.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-Bgyei_f7.js";import{d as s}from"./ToastMessage-CGuievUY.js";import{R as n,a as t}from"./RequirementItem-CXmtk1GW.js";import{P as O}from"./Paper-ClGej5m7.js";import"./index-Stft8yAF.js";import"./iframe-Eyx7BfFH.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-r0U6RSjO.js";import"./SynapseConstants-Ddv_sASQ.js";import"./OrientationBanner-Csl-2pZk.js";import"./index-D4uvL01q.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ty8OjFhT.js";import"./FullWidthAlert-BXy9FGq7.js";import"./Alert-BEs0h04_.js";import"./createTheme-jQ9KZqcc.js";import"./resolveComponentProps-Uv4DXZPh.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CM-vHVZZ.js";import"./createSvgIcon-ahNp5mb4.js";import"./DefaultPropsProvider-FhwSztk3.js";import"./Close-DeUlv-hX.js";import"./IconButton-C3n9Amn2.js";import"./ButtonBase-CfpZjHJu.js";import"./useTimeout-DgOeYeoR.js";import"./TransitionGroupContext-Guw97GTb.js";import"./useIsFocusVisible-B-x5fER0.js";import"./useEventCallback-stF_Adn8.js";import"./Stack-ZfUk0QTF.js";import"./getThemeProps-CwbHPl98.js";import"./useTheme-Cg8edm68.js";import"./Box-BazTlXiX.js";import"./AlertTitle-D4wSndy1.js";import"./Typography-Bp1kuzQ9.js";import"./useTheme-DxzWrAqM.js";import"./Grow-B6bNt6NJ.js";import"./index-BwLOZI6R.js";import"./utils-Q2rLk6hY.js";import"./ClickAwayListener-CzS2Hc3O.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CGzCAXGw.js";import"./index-D7Er7lOD.js";import"./useControlled-Da1pt4FN.js";import"./useId-CTllctf1.js";import"./Popper-D24yfDla.js";import"./Button-QMhARrEB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BLYr3XUa.js";import"./utils-BqgeSEgy.js";import"./Link-hNn2B0Ku.js";import"./Collapse-DchOfKL9.js";import"./isNil-cy96NJPL.js";import"./_Uint8Array-5zdnKaSc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CGmwipMX.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-C_N9kwgW.js";import"./_getTag-BOvE1drH.js";import"./tinycolor-Begke6kS.js";import"./Fade-DTssxnyf.js";import"./Skeleton-9Zi_XDpB.js";import"./inputBaseClasses-DZEjAUWo.js";import"./calculateFriendlyFileSize-_EOO9nxF.js";import"./CheckCircleTwoTone-WWJOEVUL.js";import"./InfoTwoTone-yt1o89I7.js";import"./mutation-oi93bAPr.js";import"./dayjs.min-3V6J6eqe.js";import"./chunk-AYJ5UCUI-DlvXe13e.js";import"./cloneDeep-UBC5IJiv.js";import"./_initCloneObject-CWmp2ROs.js";import"./isEqual-CpPaJiLx.js";import"./merge-D95p5VCO.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-D6c8ap4r.js";import"./SkeletonInlineBlock-fchMbG23.js";import"./SkeletonTable-N2IyK5Sa.js";import"./times-DgQCrNkG.js";import"./toInteger-CAWntfGl.js";import"./isSymbol-B43JR4dv.js";import"./SkeletonParagraph-Dy-ZD-BK.js";import"./uniqueId-nutccZnb.js";import"./toString-xp1OkfS8.js";import"./CSSTransition-BPR2XET_.js";import"./ConditionalWrapper-Dk7OtNtZ.js";import"./LockTwoTone-Ul6ebUuc.js";import"./Avatar-B4MWCvcP.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
