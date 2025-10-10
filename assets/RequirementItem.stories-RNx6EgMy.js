import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-2fzaZ2E8.js";import{d as s}from"./ToastMessage-CdGqDK2b.js";import{R as n,a as t}from"./RequirementItem-CcTz4C8o.js";import{P as O}from"./Paper-CRrJPGQt.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BxcP6yly.js";import"./SynapseConstants-CxL0y1Ph.js";import"./OrientationBanner-B2D9V7kc.js";import"./index-CN27a-T8.js";import"./index-C5xsNgZG.js";import"./iframe-DjJstJjx.js";import"./spreadSx-CwcO6WA9.js";import"./react-C02iEKn1.js";import"./FullWidthAlert-B1NkCeua.js";import"./Alert-CNdyFczj.js";import"./createTheme-x4ryc2Ug.js";import"./DefaultPropsProvider-CwkbiRMZ.js";import"./useSlot-B8IHFzfX.js";import"./useForkRef-DWIqmgSu.js";import"./createSimplePaletteValueFilter-CL52-X8Y.js";import"./createSvgIcon-BrnNN5qG.js";import"./Close-DqDyvys5.js";import"./IconButton-B4vCrkNM.js";import"./useTimeout-D-uIEIeC.js";import"./ButtonBase-DSSoqZCh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BvSla5A0.js";import"./Stack-C2WogMgh.js";import"./useThemeProps-DBr2DVzl.js";import"./getThemeProps-BzelbPlK.js";import"./useTheme-D3c8EOn8.js";import"./extendSxProp-Cxj75GXg.js";import"./Box-DfWINr92.js";import"./AlertTitle-BdC4ZB4j.js";import"./Typography-Bj14LD1K.js";import"./index-Dcy6S4kN.js";import"./useTheme-lhY-n5X2.js";import"./ClickAwayListener-DAgIiq7F.js";import"./getReactElementRef-C7DXzbxC.js";import"./index-7vxEK90g.js";import"./index-CwtGRN4N.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BJc1AeJd.js";import"./Tooltip-y1vasDyH.js";import"./index-k1TfjJ7z.js";import"./useControlled-DAzrAxdX.js";import"./Popper-DMgncvK7.js";import"./Button-D0nWNt-2.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Do_i6ApH.js";import"./QueryClientProvider-DUPNZ32L.js";import"./Link-w9o19gyK.js";import"./Collapse-De5mdlYK.js";import"./_baseUniq-Bd92tBU-.js";import"./_Uint8Array-C_rOqdQT.js";import"./isArray-DZzh4s_m.js";import"./_getTag-BB_bRlg1.js";import"./isEqual-AuJseeVw.js";import"./noop-DX6rZLP_.js";import"./merge-BqztFXmQ.js";import"./_initCloneObject-CklytaJV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-8jyKvWbc.js";import"./inputBaseClasses-BIs4bNY7.js";import"./calculateFriendlyFileSize-BYGBdEDj.js";import"./CheckCircleTwoTone-DGTSwBS2.js";import"./InfoTwoTone-DT8fPbHv.js";import"./useMutation-YpbZurJl.js";import"./dayjs.min-637-zvhS.js";import"./chunk-AYJ5UCUI-ZRV38xHs.js";import"./cloneDeep-nnktIvKW.js";import"./Skeleton-viu--MBo.js";import"./SkeletonButton-D0A1Sui2.js";import"./SkeletonInlineBlock-KDsfqRAz.js";import"./SkeletonTable-C1Iv3g9O.js";import"./times-CmKNeOwy.js";import"./toInteger-DHDQRcmg.js";import"./isSymbol-uuR4lmiZ.js";import"./SkeletonParagraph-B5XR2TR6.js";import"./uniqueId-BY0eJLSL.js";import"./toString-4l1vmfQU.js";import"./CSSTransition-7JRgRShi.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BpP2Z1en.js";import"./Avatar-zDmQ5Z_5.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
