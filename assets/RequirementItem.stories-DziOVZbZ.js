import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BI4YE6ms.js";import{d as s}from"./ToastMessage-CI5FbCZr.js";import{R as n,a as t}from"./RequirementItem-BrUoYnLg.js";import{P as O}from"./Paper-v_DbiU7W.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-Cb-DFW-O.js";import"./SynapseConstants-PYu29qy2.js";import"./OrientationBanner-DWQA6tte.js";import"./index-CvAUeT55.js";import"./index-GRv_M5xO.js";import"./iframe-CHSey4Qy.js";import"./spreadSx-CwcO6WA9.js";import"./react-fYbkOk0Z.js";import"./FullWidthAlert-C49EQ7xt.js";import"./Alert-keA6PNWz.js";import"./createTheme-XMOvO1uz.js";import"./DefaultPropsProvider-TL-5ySmN.js";import"./useSlot-DIJeBNuE.js";import"./useForkRef-9xmpncSc.js";import"./createSimplePaletteValueFilter-CTGhusyg.js";import"./createSvgIcon-D5Yfx_2a.js";import"./Close-DnUw2nhd.js";import"./IconButton-BCHYlsAQ.js";import"./useTimeout-BKm-mX-p.js";import"./ButtonBase-V1v9Oy7w.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dvwg5XG_.js";import"./Stack-CL-Uwzo-.js";import"./extendSxProp-BUjKKvW6.js";import"./getThemeProps-BBbNAS-u.js";import"./useTheme-D8ZpTE-W.js";import"./Box-piqsVEzW.js";import"./AlertTitle-iqKGQNFP.js";import"./Typography-CnygSuis.js";import"./index-BIrZvg_i.js";import"./useTheme-CTnoRr58.js";import"./ClickAwayListener-BxWmYz5N.js";import"./getReactElementRef-dtt4OgtQ.js";import"./index-DevK0Wnu.js";import"./index-Q1AwhQZ3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DMzs2hg_.js";import"./Tooltip-CL0Q9gg2.js";import"./index-DgcQxjL4.js";import"./useControlled-BFF-TWZN.js";import"./Popper-CREcBinl.js";import"./Button-BkJK4QNY.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-D1dT8CXY.js";import"./useQuery-Bk-MKwCv.js";import"./QueryClientProvider-BcQ5cWBG.js";import"./Link-DkrvP2Xp.js";import"./Collapse-DkiAfHoJ.js";import"./_baseUniq-C1QqHhlr.js";import"./_Uint8Array-Cn_xd6xR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBGBsSxk.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CMdUgycz.js";import"./isEqual-BsYk-GjW.js";import"./merge-DBc6Xia0.js";import"./_initCloneObject-CWQe1PTl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BdlIu10A.js";import"./inputBaseClasses-DWsLjY3m.js";import"./calculateFriendlyFileSize-67xCj-cf.js";import"./CheckCircleTwoTone-Bl8hrmiT.js";import"./InfoTwoTone-CiagWgO7.js";import"./useMutation-6hjCqGzx.js";import"./dayjs.min-hSrPVPI9.js";import"./chunk-AYJ5UCUI-BovHwV8F.js";import"./cloneDeep-DbnesDwj.js";import"./Skeleton-B-3V1zxa.js";import"./SkeletonButton-PzEikqIe.js";import"./SkeletonInlineBlock-BmjTYaeK.js";import"./SkeletonTable-Ccyx3M_K.js";import"./times-C-RC5VtA.js";import"./toInteger-D3vzmEKy.js";import"./isSymbol-DNihB1sr.js";import"./SkeletonParagraph-Dwxr0JUA.js";import"./uniqueId-Dc7S5i2q.js";import"./toString-DsnPMd_K.js";import"./CSSTransition-BzO-HJ3O.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Dxn1ZSlP.js";import"./Avatar-49mEKHer.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
