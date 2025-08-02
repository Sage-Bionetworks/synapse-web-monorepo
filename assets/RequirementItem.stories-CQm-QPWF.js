import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BCEzRDXN.js";import{d as s}from"./ToastMessage-CSOJoYWO.js";import{R as n,a as t}from"./RequirementItem-D5Mv192u.js";import{P as O}from"./Paper-CGhngFYT.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BaJcOe7m.js";import"./SynapseConstants-DgoR54IZ.js";import"./OrientationBanner-DxFnP9LU.js";import"./index-Dfa_TYwg.js";import"./index-CGbt02rg.js";import"./iframe-DZLnBXRp.js";import"./spreadSx-CwcO6WA9.js";import"./react-NAXsidak.js";import"./FullWidthAlert-BHJOime1.js";import"./Alert-CaI3yYY0.js";import"./createTheme-DlPP5FLd.js";import"./DefaultPropsProvider-Bh69SfpX.js";import"./useSlot-CjInwJ78.js";import"./useForkRef-BuWvzGyB.js";import"./createSimplePaletteValueFilter-DuAffrVq.js";import"./createSvgIcon-CTE3VzQH.js";import"./Close-DkY2mnIv.js";import"./IconButton-AJS7gHdS.js";import"./useTimeout-DVTsv0WP.js";import"./ButtonBase-BRlvOhoB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DEKY0fuh.js";import"./Stack--lp-rTAC.js";import"./extendSxProp-CoKOIChi.js";import"./getThemeProps-WjTpBOt0.js";import"./useTheme-B1XcoYyi.js";import"./Box-HsxDjwyr.js";import"./AlertTitle-BKJ5JrJn.js";import"./Typography-nZ7v7MHZ.js";import"./index-BFIimsw4.js";import"./useTheme-AdI2zGZv.js";import"./ClickAwayListener-DQGm0c4K.js";import"./getReactElementRef-BgTk7-9b.js";import"./index-D3f-rpui.js";import"./index-BP559Jzy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DypgN_s2.js";import"./Tooltip-Bo2j0bzr.js";import"./index-BoByUbsy.js";import"./useControlled-CttVXnNd.js";import"./Popper-BCdjvqXc.js";import"./Button-BQgLiUAy.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C_YSpdBV.js";import"./QueryClientProvider-BI7z2Iow.js";import"./Link-BX4KTNgr.js";import"./Collapse-C_poTtT9.js";import"./_baseUniq-BwXrbMtE.js";import"./_Uint8Array-CZUfKPgL.js";import"./isArray-DAL_BuZW.js";import"./_getTag-DvjQ5Pp7.js";import"./isEqual-BBFoljdq.js";import"./merge-DTrI62fL.js";import"./_initCloneObject-DBTM0Y2I.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Brmw86Ac.js";import"./inputBaseClasses-BX9mLEzy.js";import"./calculateFriendlyFileSize-CjUm0Jtv.js";import"./CheckCircleTwoTone-aYDqywWC.js";import"./InfoTwoTone-B34bh4i5.js";import"./useMutation-BnceP_i1.js";import"./dayjs.min-CuSMugzy.js";import"./chunk-AYJ5UCUI-Dxnwu8mn.js";import"./cloneDeep-DgaTrbQq.js";import"./Skeleton-But2MJbt.js";import"./SkeletonButton-BScTFyRD.js";import"./SkeletonInlineBlock-CSLmDKQj.js";import"./SkeletonTable-C4lIAcwK.js";import"./times-B7lBnnXW.js";import"./toInteger-Cdy0zze4.js";import"./toNumber-BnIFcVg8.js";import"./isSymbol-D8-vqZnm.js";import"./SkeletonParagraph-D4OuPuBx.js";import"./uniqueId-kIJS8beT.js";import"./toString-1xOqX3xT.js";import"./CSSTransition-D1joqU-f.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CJJP_nsz.js";import"./Avatar-CvB9oRRc.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
