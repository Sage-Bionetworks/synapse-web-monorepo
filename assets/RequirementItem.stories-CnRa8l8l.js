import{j as a}from"./jsx-runtime-DoIYlp4t.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DnPTMC-s.js";import{d as s}from"./ToastMessage-DLm5uL5U.js";import{R as n,a as t}from"./RequirementItem-CrHlioyR.js";import{P as O}from"./Paper-CLBTn5la.js";import"./index-5ZJiay6o.js";import"./iframe-BmcwO2xT.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BiGUzg85.js";import"./SynapseConstants-GcJ66i0j.js";import"./OrientationBanner-C_gdWdHP.js";import"./index-D1S4wqqZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dy5TFi-q.js";import"./FullWidthAlert-C69oCfS3.js";import"./Alert-Cz4w4emC.js";import"./createTheme-CXO1wyJ6.js";import"./DefaultPropsProvider-BgP0qvz8.js";import"./useSlot-CYzf2CuA.js";import"./useForkRef-BSB4mf0c.js";import"./createSimplePaletteValueFilter-D4brKiKL.js";import"./createSvgIcon-COhFTVZi.js";import"./Close-D2blhgcs.js";import"./IconButton-yQUPXu6C.js";import"./useTimeout-BNxjEIwz.js";import"./ButtonBase-C2aeqbdi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eGlGpmrE.js";import"./Stack-DL8_QrtB.js";import"./extendSxProp-Bfl0YsT4.js";import"./getThemeProps-DMdgX6iK.js";import"./useTheme-BmtGgQtt.js";import"./Box-0X6gE4t-.js";import"./AlertTitle-BOQ8dzrs.js";import"./Typography-D2WYwEhq.js";import"./index-HdZcy2qb.js";import"./useTheme-CtoS3KXw.js";import"./ClickAwayListener-B8ycSJtg.js";import"./getReactElementRef-B9932jZZ.js";import"./index-CLS4XggC.js";import"./index-DnRi3qUU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-TTHiypPa.js";import"./Tooltip-Y03c-BoW.js";import"./index-DtZrX8e3.js";import"./useControlled-wIspjYb0.js";import"./Popper-CojmlFQ_.js";import"./Button-ChCZSLiw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DGMztI4V.js";import"./utils-lsybrYpL.js";import"./Link-DNDzrODj.js";import"./Collapse-BD-w2sGf.js";import"./_baseUniq-DuwVG0dc.js";import"./_Uint8Array-BDhJlGKs.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BODuWH6h.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CFz-K7gF.js";import"./isEqual-C5yqi_f3.js";import"./merge-DUvrkK_n.js";import"./_initCloneObject-DoBhujeN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DqcY1-v6.js";import"./inputBaseClasses-ByAjYQsq.js";import"./calculateFriendlyFileSize-BYq68kjA.js";import"./CheckCircleTwoTone-PknmSCpl.js";import"./InfoTwoTone-BJsBUeqm.js";import"./useMutation-BUGvri69.js";import"./dayjs.min-LOE8mlRL.js";import"./chunk-AYJ5UCUI-CfjWEGD_.js";import"./cloneDeep-BEJtsdrq.js";import"./Skeleton-CiPtHFKq.js";import"./SkeletonButton-DOKD4Nuc.js";import"./SkeletonInlineBlock-CmKDWmTF.js";import"./SkeletonTable-CaCAvdBu.js";import"./times-Btc8Fvrq.js";import"./toInteger-hdxovlXC.js";import"./isSymbol-DkIv90pU.js";import"./SkeletonParagraph-DKt-pT_3.js";import"./uniqueId-DSOEGlGs.js";import"./toString-DxfIApUM.js";import"./CSSTransition-CwrD2bvz.js";import"./ConditionalWrapper-Bh8clazw.js";import"./LockTwoTone-Dk0a39P-.js";import"./Avatar-_zjW87py.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
