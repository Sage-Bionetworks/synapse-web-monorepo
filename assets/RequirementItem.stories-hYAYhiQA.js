import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CsWmzYxF.js";import{d as s}from"./ToastMessage-BKPqZIlZ.js";import{R as n,a as t}from"./RequirementItem-CPHsa6Ik.js";import{P as O}from"./Paper-SGfBtoXB.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BAtCl2zW.js";import"./SynapseConstants-XI6dYRWk.js";import"./OrientationBanner-B7q8lOlz.js";import"./index-CRCyvnZ0.js";import"./index-BNUkr42D.js";import"./iframe-Ba3BTMJQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Be8tiLW3.js";import"./FullWidthAlert-BzIUXwFm.js";import"./Alert-D3sOM9Xh.js";import"./createTheme-NhmqE9dQ.js";import"./DefaultPropsProvider-BIfpEvA2.js";import"./useSlot-BwQ6-TBw.js";import"./useForkRef-pDyZK79X.js";import"./createSimplePaletteValueFilter-nQ38Im-Z.js";import"./createSvgIcon-CFqKoRuC.js";import"./Close-DYrdwFiE.js";import"./IconButton-O8RH6c-u.js";import"./useTimeout-BrN7Q3E4.js";import"./ButtonBase-LA74b3wr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DPMtitov.js";import"./Stack-CCWpXknc.js";import"./useThemeProps-CJIv2GwV.js";import"./getThemeProps-BReT4yLP.js";import"./useTheme-BiiIEuaW.js";import"./extendSxProp-BpCHN6MP.js";import"./Box-DkpXgkjV.js";import"./AlertTitle-DRUFccnV.js";import"./Typography-BKcjb63t.js";import"./index-Bdrj1x6q.js";import"./useTheme-C9UhfCaZ.js";import"./ClickAwayListener-BLlYXqUz.js";import"./getReactElementRef-CkK36AdJ.js";import"./index-ClZPHG2a.js";import"./index-CI1meWOo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C_KrjD6B.js";import"./Tooltip-BmMZYRk4.js";import"./index-DxH38UvO.js";import"./useControlled-1x59BUu5.js";import"./Popper-Dm6K9cls.js";import"./Button-SB8XScyN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-U8UshR-7.js";import"./QueryClientProvider-B5zoqy2B.js";import"./Link-BqlhdZwN.js";import"./Collapse-DYtNuVOV.js";import"./_baseUniq-9RbHjxe5.js";import"./_Uint8Array-BISLfDEB.js";import"./isArray-0Sc2E1VG.js";import"./_getTag-CAM6QWbM.js";import"./isEqual-D_xj1UAB.js";import"./noop-DX6rZLP_.js";import"./merge-CWvb3TbJ.js";import"./_initCloneObject-D6-ehKcT.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CkpH8R1u.js";import"./inputBaseClasses-B9NzViCC.js";import"./calculateFriendlyFileSize-BpYlpajp.js";import"./CheckCircleTwoTone-B-9ZAYCH.js";import"./InfoTwoTone-Cc5V3tEz.js";import"./useMutation-B97dIDX4.js";import"./dayjs.min-C4odYbRz.js";import"./chunk-AYJ5UCUI-CV2ognkv.js";import"./cloneDeep-C1b6fvoG.js";import"./Skeleton-Btsuz_Uy.js";import"./SkeletonButton-CSP6Z-v9.js";import"./SkeletonInlineBlock-DdGufwJt.js";import"./SkeletonTable-iO2N5zjo.js";import"./times-Cz7G22nA.js";import"./toInteger-SXBPu43b.js";import"./isSymbol-D-0WRXwa.js";import"./SkeletonParagraph-get2FHze.js";import"./uniqueId-Dx2PAJQ8.js";import"./toString-CZOSv4OH.js";import"./CSSTransition-C9KAlCKy.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BZOS2AvG.js";import"./Avatar-CFEYppia.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
