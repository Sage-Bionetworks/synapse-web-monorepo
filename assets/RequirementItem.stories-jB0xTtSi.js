import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse--cLXO_N-.js";import{d as s}from"./ToastMessage-CPjxiet1.js";import{R as n,a as t}from"./RequirementItem-C46u101i.js";import{P as O}from"./Paper-Cyv4dyLK.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Be6tFy5F.js";import"./SynapseConstants-BEZwovbV.js";import"./OrientationBanner-CtoXztzg.js";import"./index-0unR9H4H.js";import"./index-BljgPFTo.js";import"./iframe-CyBU6Q7V.js";import"./spreadSx-CwcO6WA9.js";import"./react-CVn33jqE.js";import"./FullWidthAlert-BZgBYNyl.js";import"./Alert-DJPQ4QIM.js";import"./createTheme-CIrJTDOf.js";import"./DefaultPropsProvider-DbEdqidE.js";import"./useSlot-DVd3PzDD.js";import"./useForkRef-BPo1GnhT.js";import"./createSimplePaletteValueFilter-BwVtGIPT.js";import"./createSvgIcon-0kRQ-kbK.js";import"./Close-DaZgjw_6.js";import"./IconButton-BXR2LYXb.js";import"./useTimeout-Bpy0NDCv.js";import"./ButtonBase-Cd_tqh-g.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C5zAkQVG.js";import"./Stack-Bsu_lXkI.js";import"./useThemeProps-CpST4J4d.js";import"./getThemeProps-gduYeenR.js";import"./useTheme-C-hh5JcE.js";import"./extendSxProp-BUchhns_.js";import"./Box-B7np8nCS.js";import"./AlertTitle-DS7VlmPb.js";import"./Typography-CTlCFPS1.js";import"./index-DmDe8b2A.js";import"./useTheme-vHPl7Z18.js";import"./ClickAwayListener-oKANEk0z.js";import"./getReactElementRef-BIbEb3Zr.js";import"./index-CLXOAuby.js";import"./index-CTWVO3q3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BnuhUscm.js";import"./Tooltip-Cr3zvRH6.js";import"./index-D921uLT9.js";import"./useControlled-B5_NtMt5.js";import"./Popper-CrTqWDfV.js";import"./Button-BZXN9KrI.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B-0wee67.js";import"./QueryClientProvider-DNTbqL71.js";import"./Link-BkUBKMhX.js";import"./Collapse-BYc6Wv8_.js";import"./_baseUniq-BCgHUW7P.js";import"./_Uint8Array-6RqZOC7P.js";import"./isArray-DqQflkTV.js";import"./_getTag-OZNTQHEg.js";import"./isEqual-BKU_n09T.js";import"./noop-DX6rZLP_.js";import"./merge-Dru2-Hnn.js";import"./_initCloneObject-Bom0r3NW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cj0EUrvW.js";import"./inputBaseClasses-DCwWV1lh.js";import"./calculateFriendlyFileSize-CzujXqM3.js";import"./CheckCircleTwoTone-FMrAv7pD.js";import"./InfoTwoTone-MGxkGzni.js";import"./useMutation-BdNABu1Z.js";import"./dayjs.min-CqZWhcNT.js";import"./chunk-AYJ5UCUI-D_3CYfsv.js";import"./cloneDeep-XPWNqf30.js";import"./Skeleton-Dw7_uGLe.js";import"./SkeletonButton-BWbqsDJD.js";import"./SkeletonInlineBlock-BB_bM5HG.js";import"./SkeletonTable-GWXX48W3.js";import"./times-CjQq_ry3.js";import"./toInteger-Cf82bYKg.js";import"./isSymbol-GyhxyoV-.js";import"./SkeletonParagraph-e4SRr6W8.js";import"./uniqueId-CJxPQ7JK.js";import"./toString-Df23r9ia.js";import"./CSSTransition-DT5J0Egb.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-M041iP_o.js";import"./Avatar-B9fKJKx8.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
