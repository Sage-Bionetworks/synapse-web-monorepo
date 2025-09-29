import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BnYDI6G-.js";import{d as s}from"./ToastMessage-hXFH9Tom.js";import{R as n,a as t}from"./RequirementItem-C9RoC_zX.js";import{P as O}from"./Paper-BguwlWAj.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles--CcWu9gA.js";import"./SynapseConstants-ghF4YRrd.js";import"./OrientationBanner-DU98_TTV.js";import"./index-Dxjk3aKI.js";import"./index-DfH0xLBM.js";import"./iframe-BBbPPlq-.js";import"./spreadSx-CwcO6WA9.js";import"./react-DpIdD-62.js";import"./FullWidthAlert-BQJVxlFp.js";import"./Alert-RljSBmGs.js";import"./createTheme-C4Li-FeX.js";import"./DefaultPropsProvider-C5HBAaLd.js";import"./useSlot-ij2OcnyH.js";import"./useForkRef-C38TISwS.js";import"./createSimplePaletteValueFilter-CewVvtaD.js";import"./createSvgIcon-DgQOn1iH.js";import"./Close-BvUVUi_-.js";import"./IconButton-Bl0V3heo.js";import"./useTimeout-ByqevPT1.js";import"./ButtonBase-BXFH7Ps4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C03GnYa5.js";import"./Stack-B39t_pfr.js";import"./extendSxProp-5e-7qZGm.js";import"./getThemeProps-Cs-uvllJ.js";import"./useTheme-59sMrz1c.js";import"./Box-DatqpWAL.js";import"./AlertTitle-RGiJ7hWV.js";import"./Typography-BsfUTGyU.js";import"./index-CIGP8gNZ.js";import"./useTheme-uHI12HV_.js";import"./ClickAwayListener-DAStxRA2.js";import"./getReactElementRef-C8IOmuiS.js";import"./index-C8f7utTL.js";import"./index-CRBvO-yL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BgfT-li0.js";import"./Tooltip-BSuMYYSh.js";import"./index-CYsbSnLz.js";import"./useControlled-BITnwwUY.js";import"./Popper-BGskr9VS.js";import"./Button-CzBwcvk-.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-Cf8hH_U4.js";import"./QueryClientProvider-BZgP8lHY.js";import"./Link-Cm8C0lxO.js";import"./Collapse-CDaWcrSI.js";import"./_baseUniq-DBAE-w05.js";import"./_Uint8Array-CwRGWxQt.js";import"./isArray-CGdtKNqT.js";import"./_getTag-BhZRMS_V.js";import"./isEqual-N_Vc746J.js";import"./merge-BKp98YdC.js";import"./_initCloneObject-DRIcQyEX.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-0QiC2KlA.js";import"./inputBaseClasses-mE9zzfPQ.js";import"./calculateFriendlyFileSize-CoY_9rm3.js";import"./CheckCircleTwoTone-Cw0D955-.js";import"./InfoTwoTone-DDsNRkE8.js";import"./useMutation-DsxIvPaF.js";import"./dayjs.min-C2tPzWeM.js";import"./chunk-AYJ5UCUI-RArPt-D8.js";import"./cloneDeep-Slp46nnr.js";import"./Skeleton-C7wJ6onP.js";import"./SkeletonButton-irVg13Ua.js";import"./SkeletonInlineBlock-BQHtrUDc.js";import"./SkeletonTable-Dqfl39px.js";import"./times-D4UrFNax.js";import"./toInteger-a_G3PH11.js";import"./isSymbol-CUEZzaKO.js";import"./SkeletonParagraph-CD_gloE7.js";import"./uniqueId-Dm-yNi0K.js";import"./toString-BqKXGEo_.js";import"./CSSTransition-BGhdMiPW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BUbF_x-d.js";import"./Avatar-BDav8g-x.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
