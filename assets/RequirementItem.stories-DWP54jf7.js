import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BU6PA9m2.js";import{d as s}from"./ToastMessage-CPcvhinb.js";import{R as n,a as t}from"./RequirementItem-0j4oVMcP.js";import{P as O}from"./Paper-Bk3UaSkA.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DKWrsfR3.js";import"./SynapseConstants-C13SoDMh.js";import"./OrientationBanner-BLSW5725.js";import"./index-VRnyeoRr.js";import"./index-Co6kSeZ4.js";import"./iframe-E9QC53ED.js";import"./spreadSx-CwcO6WA9.js";import"./react-3zvAdkLg.js";import"./FullWidthAlert-BQQ4yDY3.js";import"./Alert-D9b2Jaou.js";import"./createTheme-C4gBf2a4.js";import"./DefaultPropsProvider-61bxVHLz.js";import"./useSlot-DzkULoZG.js";import"./useForkRef-Ie0jToSw.js";import"./createSimplePaletteValueFilter-Di6fTx_Y.js";import"./createSvgIcon-B2xCGPCA.js";import"./Close-Gmlsem60.js";import"./IconButton-CSbPtiTS.js";import"./useTimeout-DdwtR0nj.js";import"./ButtonBase-BVgSALXL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-st75d_5x.js";import"./Stack-vQcGt2V6.js";import"./extendSxProp-DjvHTGIN.js";import"./getThemeProps-C4dGaN9v.js";import"./useTheme-g4P-trrK.js";import"./Box-DuaunoIg.js";import"./AlertTitle-BlQPnX9A.js";import"./Typography-D0Pox0eh.js";import"./index-BW1ZnCRi.js";import"./useTheme-BNzonNUR.js";import"./ClickAwayListener-Bs5Cn-b4.js";import"./getReactElementRef-CzBAlckD.js";import"./index-L4uyOg9X.js";import"./index-xRVqPkfL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlhGKlVk.js";import"./Tooltip-DDH1jL_v.js";import"./index-DZ-xbKd_.js";import"./useControlled-urFJ8eZT.js";import"./Popper-rS_tjiGt.js";import"./Button-SCmwow4H.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C_nQkRPK.js";import"./QueryClientProvider-BeCxgO5m.js";import"./Link-h2BZotPB.js";import"./Collapse-Bak0_57i.js";import"./_baseUniq-C1-450lM.js";import"./_Uint8Array-DKto8TjN.js";import"./isArray-CzN_o68b.js";import"./_getTag-q5_1F86d.js";import"./isEqual-CiHPje5G.js";import"./merge-CYB3oyvs.js";import"./_initCloneObject-BkGoruF9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJkg1TX1.js";import"./inputBaseClasses-s48QUKJF.js";import"./calculateFriendlyFileSize-Bo9QkoJO.js";import"./CheckCircleTwoTone-BxTVhx7V.js";import"./InfoTwoTone-B62BC5hf.js";import"./useMutation-BFApg2RG.js";import"./dayjs.min-1FMm97F5.js";import"./chunk-AYJ5UCUI-dfXExToj.js";import"./cloneDeep-CU_BdLCR.js";import"./Skeleton-Bec8Blff.js";import"./SkeletonButton-D2-Axgvf.js";import"./SkeletonInlineBlock--0z21j1u.js";import"./SkeletonTable-BQ53FZrC.js";import"./times-C5OlnX4j.js";import"./toInteger-CTJWjYUb.js";import"./isSymbol-eUljeJX2.js";import"./SkeletonParagraph-CFmXwIfI.js";import"./uniqueId-CrI4Bkg7.js";import"./toString-DgFP3niH.js";import"./CSSTransition-Bt62p2qF.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cf3Mkodd.js";import"./Avatar-BjsoSvER.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
