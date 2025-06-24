import{j as a}from"./jsx-runtime-ClaIEnyC.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-D1APcGEX.js";import{d as s}from"./ToastMessage-pDd4rYz6.js";import{R as n,a as t}from"./RequirementItem-r3rKStTp.js";import{P as O}from"./Paper-Bh1XizBi.js";import"./index-DDcWLDIs.js";import"./iframe-kBzc5I9X.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BeI6iI9g.js";import"./SynapseConstants-BY4t6a2L.js";import"./OrientationBanner-Bdx8CY0T.js";import"./index-cElvOhz6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BTz_mwGW.js";import"./FullWidthAlert-CSZuQmS5.js";import"./Alert-Cyec8PI2.js";import"./createTheme-Dz19H-VC.js";import"./DefaultPropsProvider-CBm7IyyT.js";import"./useSlot-33DlPPR_.js";import"./useForkRef-Z40z0sir.js";import"./createSimplePaletteValueFilter-DmE4WHhK.js";import"./createSvgIcon-VEETglUU.js";import"./Close-DoDF2tG3.js";import"./IconButton-CqSdoNRj.js";import"./useTimeout-DHCBaXHR.js";import"./ButtonBase-BYK1_kWt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BYEHzl82.js";import"./Stack-KyJRB_fW.js";import"./extendSxProp-DLs20JVr.js";import"./getThemeProps-Bvx1WS8M.js";import"./useTheme-Do79h7sS.js";import"./Box-BfhIar-2.js";import"./AlertTitle-unmm4ajU.js";import"./Typography-s2pUz9cp.js";import"./index-CjWf20OR.js";import"./useTheme-jlfvOgKu.js";import"./ClickAwayListener-BzomMqvC.js";import"./getReactElementRef-DYS2DWE7.js";import"./index-DYdpSk8F.js";import"./index-Bx27OGJb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C1D-JV1-.js";import"./Tooltip-DbizeQFz.js";import"./index-DPM8awAq.js";import"./useControlled-BX60-H1c.js";import"./Popper-CgB6h7RW.js";import"./Button-Nshi5qab.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BJB0MTmQ.js";import"./utils-CxwOnRZ-.js";import"./Link-ByfBNOGt.js";import"./Collapse-TBeMVRQ6.js";import"./_baseUniq-CRkQa94I.js";import"./_Uint8Array-DGArT5vS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BZ4BM3gL.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BwIYpIa5.js";import"./isEqual-URzIznFL.js";import"./merge-C0xFbuZc.js";import"./_initCloneObject-CfxBNJQU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZtCs22T.js";import"./inputBaseClasses-COhNe2x1.js";import"./calculateFriendlyFileSize-CV5dom1H.js";import"./CheckCircleTwoTone-DJLaUVjb.js";import"./InfoTwoTone-BmPAjTNP.js";import"./useMutation-CnYEb0-_.js";import"./dayjs.min-CvLX7WpR.js";import"./chunk-AYJ5UCUI-BSvTyutC.js";import"./cloneDeep-ChDPNWWl.js";import"./Skeleton-BRSgJ3lO.js";import"./SkeletonButton-x_lTdcVw.js";import"./SkeletonInlineBlock-CcbfNoW5.js";import"./SkeletonTable-DSVLa3yw.js";import"./times-cGlVXD_O.js";import"./toInteger-B6SmYa_y.js";import"./isSymbol-CbwJORtg.js";import"./SkeletonParagraph-CIvd2YgC.js";import"./uniqueId-C75BQFhr.js";import"./toString-CLTR3GH-.js";import"./CSSTransition-B_6ba4W1.js";import"./ConditionalWrapper-luKfqdrG.js";import"./LockTwoTone-uPrcucNc.js";import"./Avatar-BOhxgXa5.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
