import{j as a}from"./jsx-runtime-BlM1FRL-.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-Bdlm02I_.js";import{d as s}from"./ToastMessage-DITc5j1J.js";import{R as n,a as t}from"./RequirementItem-TpFjdfPo.js";import{P as O}from"./Paper-BlhQV-oR.js";import"./index-BhP06szg.js";import"./iframe-BS9W2Wvb.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-CBr5IUon.js";import"./SynapseConstants-BX7tnvz1.js";import"./OrientationBanner-aQ8TNTQw.js";import"./index-BefUjdsq.js";import"./spreadSx-CwcO6WA9.js";import"./react-ZdlEz97l.js";import"./FullWidthAlert-ChnU0mY7.js";import"./Alert-BHIxQlih.js";import"./createTheme-D8pQAHfD.js";import"./DefaultPropsProvider-gaRRcztr.js";import"./useSlot-ClnjNJA7.js";import"./useForkRef-gIxop5VW.js";import"./createSimplePaletteValueFilter-gb3Prl0-.js";import"./createSvgIcon-DpXe8oC3.js";import"./Close-CpYvi_-W.js";import"./IconButton-CA4bGOWo.js";import"./useTimeout-_zJD3Z48.js";import"./ButtonBase-D7tG9DeA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJzEjqd8.js";import"./Stack-DNhQ6903.js";import"./extendSxProp-BkAfocSO.js";import"./getThemeProps-5XoFBxB1.js";import"./useTheme-AK3AFNkh.js";import"./Box-DNU2ZVbF.js";import"./AlertTitle-DK-br470.js";import"./Typography-d5nb-62C.js";import"./index-CLleM3ip.js";import"./useTheme-DDaTSMTi.js";import"./ClickAwayListener-BmyARUuY.js";import"./getReactElementRef-C4sAiCDA.js";import"./index-BypZKsN-.js";import"./index-CwHgGaqN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B_o6YR8Y.js";import"./Tooltip-DTvwQu62.js";import"./index-xGj7KpDx.js";import"./useControlled-RqfzBbBX.js";import"./Popper-BaY7U30F.js";import"./Button-IngFgvGz.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-r-Re3Rsi.js";import"./utils-BBLC3F9-.js";import"./Link-u9n50BXl.js";import"./Collapse-DIuNVBul.js";import"./isNil-DY9kn39-.js";import"./_Uint8Array-BJM1l806.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWvSJDLb.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BvywnoNX.js";import"./_getTag-BrTe4_9V.js";import"./tinycolor-Begke6kS.js";import"./Fade-DZwn-bFq.js";import"./inputBaseClasses-Bzako8_G.js";import"./calculateFriendlyFileSize-B8udOIoo.js";import"./CheckCircleTwoTone-DyeJWu1k.js";import"./InfoTwoTone-XL0at7dW.js";import"./useMutation-DeHyVrkY.js";import"./dayjs.min-acHY-hx9.js";import"./chunk-AYJ5UCUI-DwxRC3Bw.js";import"./cloneDeep-yBjRdL4k.js";import"./_initCloneObject-B9ahOE9F.js";import"./Skeleton-CkqDtb85.js";import"./merge-Bb3N9CEi.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DlMpBnmb.js";import"./SkeletonInlineBlock-2YznaXpT.js";import"./SkeletonTable-DudlnX5N.js";import"./times-BePdRHOL.js";import"./toInteger-8QYE2UB3.js";import"./isSymbol-SI4cpORi.js";import"./SkeletonParagraph-oX316Imn.js";import"./uniqueId-CmhUnFz2.js";import"./toString-XimJsdP5.js";import"./CSSTransition-BIYGsJ1I.js";import"./ConditionalWrapper-ZP9ISH7T.js";import"./LockTwoTone-DWtwzcj3.js";import"./Avatar-Bs0kmiY7.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
