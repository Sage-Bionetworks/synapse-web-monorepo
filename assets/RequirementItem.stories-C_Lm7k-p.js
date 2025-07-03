import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-gcNnsiOL.js";import{d as s}from"./ToastMessage-D_r367m5.js";import{R as n,a as t}from"./RequirementItem-BcxgdwcF.js";import{P as O}from"./Paper-C7EZ6ltN.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-uUrEVYQx.js";import"./SynapseConstants-ahGnFf3k.js";import"./OrientationBanner-GXrRF8mk.js";import"./index-DnagD0Nz.js";import"./index-DiBc7ili.js";import"./iframe-BCfGTZPw.js";import"./spreadSx-CwcO6WA9.js";import"./react-aF39rpsl.js";import"./FullWidthAlert-CK4wibJn.js";import"./Alert-D7JG5kLu.js";import"./createTheme-BYEQ9_hi.js";import"./DefaultPropsProvider-B_w7IYYh.js";import"./useSlot-DRGMPBiG.js";import"./useForkRef-BYY2iHNG.js";import"./createSimplePaletteValueFilter-DrZgBPk1.js";import"./createSvgIcon-CJ_vZh-q.js";import"./Close-DsePz3ap.js";import"./IconButton-IDvQ8M-m.js";import"./useTimeout-DwBfdaeZ.js";import"./ButtonBase-Dnyx7xRG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DebbhL9u.js";import"./Stack-3IMyKWDS.js";import"./extendSxProp-B4j-uB6H.js";import"./getThemeProps-CJhYyVGc.js";import"./useTheme-J2BHHVgs.js";import"./Box-sfqkaym-.js";import"./AlertTitle-Bsx8g5ER.js";import"./Typography-CWRwBx33.js";import"./index-CzekjSiY.js";import"./useTheme-C7C1XPb0.js";import"./ClickAwayListener-DlH8isjH.js";import"./getReactElementRef-Du_i-g5u.js";import"./index-CeyxHs1b.js";import"./index-DYqm8Nap.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D2msnuRh.js";import"./Tooltip-Cx1ug7Gi.js";import"./index-kC_fNR5g.js";import"./useControlled-wm2Rxg1j.js";import"./Popper-Dj13oF1t.js";import"./Button-DssAH1j_.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CF36TnAQ.js";import"./QueryClientProvider-C64Hptub.js";import"./Link-bm7NuS4R.js";import"./Collapse-DpinT9bj.js";import"./_baseUniq-DvjXdn_t.js";import"./_Uint8Array-f-FpD8DO.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-QB8Hyke0.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B5Sj4aG3.js";import"./isEqual-CjtVx9YG.js";import"./merge-BEK32ont.js";import"./_initCloneObject-CanONHSu.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DpcXanbB.js";import"./inputBaseClasses-BXkyxIhf.js";import"./calculateFriendlyFileSize-CWyPJuaS.js";import"./CheckCircleTwoTone-BEZHxOdF.js";import"./InfoTwoTone-C7V38IQu.js";import"./useMutation-CDRYvyQU.js";import"./dayjs.min-DMjxlcFe.js";import"./chunk-AYJ5UCUI-CV8nXzFE.js";import"./cloneDeep-DUB92CXH.js";import"./Skeleton-B-upnsO9.js";import"./SkeletonButton-D39x8kzs.js";import"./SkeletonInlineBlock-BCXCQ0ph.js";import"./SkeletonTable-fOI-PBLx.js";import"./times-DpSVYaJj.js";import"./toInteger-B3jJmE69.js";import"./isSymbol-C-fh8oeR.js";import"./SkeletonParagraph-Bwp6IueU.js";import"./uniqueId-BtQSTthj.js";import"./toString-BFS4DqvL.js";import"./CSSTransition-BgHl-Xs8.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CP5wb11t.js";import"./Avatar-D-Qo5maD.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
