import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BP9Wm1nl.js";import{d as s}from"./ToastMessage-Dquv4GG3.js";import{R as n,a as t}from"./RequirementItem-CvN0ie_m.js";import{P as O}from"./Paper-BpMud_ox.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CpIQf7bR.js";import"./SynapseConstants-DCuj7v5A.js";import"./OrientationBanner-BhIo1itP.js";import"./index-D6sMuhjc.js";import"./index-BTX2eULV.js";import"./iframe-CVMtvJ31.js";import"./spreadSx-CwcO6WA9.js";import"./react-jWqjiESD.js";import"./FullWidthAlert-DBESnlHJ.js";import"./Alert-B_Lb3ke9.js";import"./createTheme-Bg0JnvG-.js";import"./DefaultPropsProvider-DkJRQOmc.js";import"./useSlot-DJ96S8JZ.js";import"./useForkRef-Bz6GVi3q.js";import"./createSimplePaletteValueFilter-B_zFUBoe.js";import"./createSvgIcon-kaLa9Vb4.js";import"./Close-CNSmPYq1.js";import"./IconButton-mOjBei70.js";import"./useTimeout-DyBAzNlF.js";import"./ButtonBase-DKKQqZi5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BZ-3rWL4.js";import"./Stack-B07vM9bz.js";import"./useThemeProps-seSFSWsk.js";import"./getThemeProps-DkOrQpuL.js";import"./useTheme-C7YDFSZ_.js";import"./extendSxProp-DU89cOAM.js";import"./Box-ZnuoGFaU.js";import"./AlertTitle-CgDFnc1E.js";import"./Typography-DuRdq6Lg.js";import"./index-BIflH0jO.js";import"./useTheme-D4cJ8PRi.js";import"./ClickAwayListener-DegMn6iM.js";import"./getReactElementRef-CVLdZIi_.js";import"./index-DUzyVIzd.js";import"./index-B3i8jk0i.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqVF91XP.js";import"./Tooltip-B4Kq9yHi.js";import"./index-iQpWDSyN.js";import"./useControlled-Sbp9FKKD.js";import"./Popper-CX1lmSaJ.js";import"./Button-B7-P1hWd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BS_xL6BT.js";import"./QueryClientProvider-CNvDTIKR.js";import"./Link-BKm2vjdi.js";import"./Collapse-ByANM13v.js";import"./_baseUniq-CqcjZw0e.js";import"./_Uint8Array-Bs5hmJ22.js";import"./isArray-CKHxsLMS.js";import"./_getTag-kUTcptDD.js";import"./isEqual-BQVT-dYG.js";import"./noop-DX6rZLP_.js";import"./merge-BnOw64jq.js";import"./_initCloneObject-CdUFhJ45.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-rzidtFwW.js";import"./inputBaseClasses-DNGH4K0e.js";import"./calculateFriendlyFileSize-AZUrqDHi.js";import"./CheckCircleTwoTone-BOy-Ivpu.js";import"./InfoTwoTone-DZGvo72n.js";import"./useMutation-CqYbiywW.js";import"./dayjs.min-CzGsWT9o.js";import"./chunk-AYJ5UCUI-BJiwWrYx.js";import"./cloneDeep-ztC9flu2.js";import"./Skeleton-Clpsi09M.js";import"./SkeletonButton-BNDIMfsc.js";import"./SkeletonInlineBlock-BpdH0ExQ.js";import"./SkeletonTable-BlI6RnJM.js";import"./times-CiqniwQk.js";import"./toInteger-CtW9ySE_.js";import"./isSymbol-D6LPlgVh.js";import"./SkeletonParagraph-BcW2Gtm3.js";import"./uniqueId-BgWg1yl2.js";import"./toString-1oDI86Nf.js";import"./CSSTransition-Bh43Pu-8.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BIGBPAvr.js";import"./Avatar-B5y3rxbT.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
