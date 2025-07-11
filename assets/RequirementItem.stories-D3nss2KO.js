import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BmyyG9zi.js";import{d as s}from"./ToastMessage-bz9xsNFs.js";import{R as n,a as t}from"./RequirementItem-DNXcSrUR.js";import{P as O}from"./Paper-Gj35BgLn.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-En5liOfn.js";import"./SynapseConstants-C6zJ4IJQ.js";import"./OrientationBanner-B4uqU9lW.js";import"./index-DxyBYFfC.js";import"./index-BGKfHSk8.js";import"./iframe-hwM07gcL.js";import"./spreadSx-CwcO6WA9.js";import"./react-CAsqVN01.js";import"./FullWidthAlert-0V12Rkuf.js";import"./Alert-CyRc4Clc.js";import"./createTheme-CAa1rIKv.js";import"./DefaultPropsProvider-DIzpH3Fg.js";import"./useSlot-DwXZ_j6C.js";import"./useForkRef-DzDqwRel.js";import"./createSimplePaletteValueFilter-DsH-b64n.js";import"./createSvgIcon-C9jSypZa.js";import"./Close-SD3DC24O.js";import"./IconButton-DAJgvnrd.js";import"./useTimeout-5Q0Z7_vO.js";import"./ButtonBase-BFODyUCV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DvUgbv3o.js";import"./Stack-Ch0lA1Ch.js";import"./extendSxProp-BO6t2ASw.js";import"./getThemeProps-C51oBefI.js";import"./useTheme-DgxJ3CLL.js";import"./Box-Dl9bdDgz.js";import"./AlertTitle-BjOUD14l.js";import"./Typography-4FBfznuU.js";import"./index-CtVaEtER.js";import"./useTheme-CPstsOGE.js";import"./ClickAwayListener-di5aomVr.js";import"./getReactElementRef-DsQrM9l7.js";import"./index-CcJMFhVR.js";import"./index-DJM3o9cS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D5ckU-GR.js";import"./Tooltip-HabFJOHL.js";import"./index-D2DV3O1J.js";import"./useControlled-D7Vfogjk.js";import"./Popper-CAg7-6pF.js";import"./Button-COK4dnOS.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-D1dT8CXY.js";import"./useQuery-DwS_k2nL.js";import"./QueryClientProvider-CvTrulJZ.js";import"./Link-nIKgOOJn.js";import"./Collapse-B1wdMAtp.js";import"./_baseUniq-B-rBxMDk.js";import"./_Uint8Array-BS5v6wM4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DFt_srKj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B3lOEEon.js";import"./isEqual-Bc2MJLgB.js";import"./merge-CnMidIvr.js";import"./_initCloneObject-CqCgam3p.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DxE_f_NY.js";import"./inputBaseClasses-B2dsuVyA.js";import"./calculateFriendlyFileSize-DxMWruXs.js";import"./CheckCircleTwoTone-Cf5s39nD.js";import"./InfoTwoTone-C5ChC8_t.js";import"./useMutation-uR_lUn9I.js";import"./dayjs.min-CV6CNdty.js";import"./chunk-AYJ5UCUI-UiPGEWhr.js";import"./cloneDeep-CXETPPTh.js";import"./Skeleton-t7s89DoH.js";import"./SkeletonButton-BRi1iWkK.js";import"./SkeletonInlineBlock-nR17EmHX.js";import"./SkeletonTable-l5mpvP7f.js";import"./times-CphR5kbL.js";import"./toInteger-D74yyUHy.js";import"./isSymbol-CGZ9FdHD.js";import"./SkeletonParagraph-Caqw0isw.js";import"./uniqueId-C6Y_izdd.js";import"./toString-eKxBM-WY.js";import"./CSSTransition-AyOCI4XK.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D32_mv9E.js";import"./Avatar-Bht8D31j.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
