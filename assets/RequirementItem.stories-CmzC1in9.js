import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BrmNMCQd.js";import{d as s}from"./ToastMessage-Cwba43s9.js";import{R as n,a as t}from"./RequirementItem-COSSQYjo.js";import{P as O}from"./Paper-CylKyD4j.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-oO7GrsV5.js";import"./SynapseConstants-Bmu9G6LM.js";import"./OrientationBanner-BK_U_QS6.js";import"./index-D6IgxdMK.js";import"./index-CcTQ3WdX.js";import"./iframe-CYkumvO5.js";import"./spreadSx-CwcO6WA9.js";import"./react-DA31n1ZF.js";import"./FullWidthAlert-FejwYpUb.js";import"./Alert-CM8tkFFZ.js";import"./createTheme-BAQ3rZhl.js";import"./DefaultPropsProvider-DGXu47pl.js";import"./useSlot-DrlupqXw.js";import"./useForkRef-BljHSZVO.js";import"./createSimplePaletteValueFilter-Cplj6hkT.js";import"./createSvgIcon-CZ-GW4zL.js";import"./Close-jLj2T727.js";import"./IconButton-DkwgSArA.js";import"./useTimeout-DaidvoSY.js";import"./ButtonBase-D05d1-H-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-O9xTCaBT.js";import"./Stack-DkhwwS4g.js";import"./useThemeProps-DT73glV_.js";import"./getThemeProps-ByCJoaGS.js";import"./useTheme-CejdeoLN.js";import"./extendSxProp-BHvI69bl.js";import"./Box-CE5cjKbm.js";import"./AlertTitle-B89-U-6u.js";import"./Typography-DNHXQdFk.js";import"./index-pWe_y6eu.js";import"./useTheme-CY9JWpxK.js";import"./ClickAwayListener-CJlLM5BK.js";import"./getReactElementRef-D4qxxYNU.js";import"./index-Du4HHj8v.js";import"./index-DQ-U_C86.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DlsUjMbS.js";import"./Tooltip-EVgy7Cv2.js";import"./index-Dq_74rXD.js";import"./useControlled-DngFEdhJ.js";import"./Popper-DCZu-ZtC.js";import"./Button-BXf8fhfi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CndoBeOz.js";import"./QueryClientProvider-DvAzj1_f.js";import"./Link-BEZ_n53O.js";import"./Collapse-BUVbvzbA.js";import"./_baseUniq-DX2jmGNc.js";import"./_Uint8Array-DugeRibj.js";import"./isArray-BMB1XgSf.js";import"./_getTag-DrtrN6SG.js";import"./isEqual-DU5zUzGe.js";import"./noop-DX6rZLP_.js";import"./merge-CtKOImIh.js";import"./_initCloneObject-CS3p4FjZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BEn4SSZZ.js";import"./inputBaseClasses-BSqbkdlX.js";import"./calculateFriendlyFileSize-B8Lwwjn7.js";import"./CheckCircleTwoTone-DJt1hcfd.js";import"./InfoTwoTone-XSsxJQnA.js";import"./useMutation-BPfoSKCy.js";import"./dayjs.min-CjQ7llLN.js";import"./chunk-AYJ5UCUI-DNCVSZLe.js";import"./cloneDeep-BooNHHIp.js";import"./Skeleton-DETWlJEm.js";import"./SkeletonButton-Bm07shXH.js";import"./SkeletonInlineBlock-DZ82tnzi.js";import"./SkeletonTable-DnG003pO.js";import"./times-RkxcBH99.js";import"./toInteger-BJ3IQUkh.js";import"./isSymbol-C_Wt9aN3.js";import"./SkeletonParagraph-1nbHL2i6.js";import"./uniqueId-Hs_zmrMR.js";import"./toString-B5cyXdeJ.js";import"./CSSTransition-Dlv8KmS0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CC3cw2cn.js";import"./Avatar-lihrAslY.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
