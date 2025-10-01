import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DKhiYUtR.js";import{d as s}from"./ToastMessage-CXXmboA2.js";import{R as n,a as t}from"./RequirementItem-DSgzgThf.js";import{P as O}from"./Paper-CMiT_g2s.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-vT9bfLDO.js";import"./SynapseConstants-CrB-MIRZ.js";import"./OrientationBanner-BEKZjCeJ.js";import"./index-DAVNkdVu.js";import"./index-B1zwXUFJ.js";import"./iframe-CEUpxgkq.js";import"./spreadSx-CwcO6WA9.js";import"./react-BzGc_DwC.js";import"./FullWidthAlert-B_vJzv8_.js";import"./Alert-TYEgmMtw.js";import"./createTheme-_pxiMefb.js";import"./DefaultPropsProvider-GsNV9x9z.js";import"./useSlot-D6M9SnNa.js";import"./useForkRef-5vAL7abv.js";import"./createSimplePaletteValueFilter-BWy-N_2A.js";import"./createSvgIcon-CM2amrIa.js";import"./Close-Cz9zQibY.js";import"./IconButton-BuZDhROp.js";import"./useTimeout-B5WP2A00.js";import"./ButtonBase-CrQcMVod.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eY2NprPN.js";import"./Stack-Dlv6zyOD.js";import"./extendSxProp-DOiWkfYu.js";import"./getThemeProps-Dr1zNmMJ.js";import"./useTheme-BUiWg39J.js";import"./Box-3Z_tla_z.js";import"./AlertTitle-ByY04oK7.js";import"./Typography-Bb10PgLN.js";import"./index-DCPzSk5o.js";import"./useTheme-CpqbQ1th.js";import"./ClickAwayListener-BMakqtGy.js";import"./getReactElementRef-nx52Mdp2.js";import"./index-CehnuqZ2.js";import"./index-B9UKDQHV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DJhgm6K5.js";import"./Tooltip-SOMH60mq.js";import"./index-CXr-s7_R.js";import"./useControlled-CvHOTKrv.js";import"./Popper-DkenFVym.js";import"./Button-DQBYwH6j.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-Bq88K6KM.js";import"./QueryClientProvider-ucPfQinJ.js";import"./Link-CZHL3iKG.js";import"./Collapse-B2XhG2Kr.js";import"./_baseUniq-C8WjQg40.js";import"./_Uint8Array-B0g9CQUn.js";import"./isArray-DymSBOrs.js";import"./_getTag-LXy-jlCp.js";import"./isEqual-C-YJy9nm.js";import"./merge-DyftSLCV.js";import"./_initCloneObject-uieqxzyK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDBEomBI.js";import"./inputBaseClasses-C3wEMl-z.js";import"./calculateFriendlyFileSize-DXUcCMMN.js";import"./CheckCircleTwoTone-BY2yex5b.js";import"./InfoTwoTone-DXgMPfdA.js";import"./useMutation-Dhe--Otn.js";import"./dayjs.min-DJDiWDDU.js";import"./chunk-AYJ5UCUI-CsiReavt.js";import"./cloneDeep-DOwnwYVf.js";import"./Skeleton-TxGxqHUi.js";import"./SkeletonButton-DzVE-4bS.js";import"./SkeletonInlineBlock-BJviWV6f.js";import"./SkeletonTable-BpzY9tL6.js";import"./times-Bk6OUzNa.js";import"./toInteger-m790T6g-.js";import"./isSymbol-DLCWpi_u.js";import"./SkeletonParagraph-CGGUOqCJ.js";import"./uniqueId-CYYpcJhP.js";import"./toString-gNEq0xSK.js";import"./CSSTransition-Bdb2Meo0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Mxdl5RsF.js";import"./Avatar-DutTv5lb.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
