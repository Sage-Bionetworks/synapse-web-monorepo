import{j as a}from"./jsx-runtime-JMjDAiku.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-DPVlc_dN.js";import{d as s}from"./ToastMessage-Dpba-2FA.js";import{R as n,a as t}from"./RequirementItem-BAG7RzL3.js";import{P as O}from"./Paper-CfNAfVct.js";import"./index-CZYh0tRp.js";import"./iframe-CCE2QgdW.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-BKoaRBy7.js";import"./SynapseConstants-BAkIMR8-.js";import"./OrientationBanner-C4LioKg8.js";import"./index-CbpQBUYj.js";import"./spreadSx-CwcO6WA9.js";import"./react-mnnoerZo.js";import"./FullWidthAlert-_xWROjSF.js";import"./Alert-DhU8zZuo.js";import"./createTheme-BsMgtWZT.js";import"./resolveComponentProps-CNbOM-P8.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DQdHfMmH.js";import"./createSvgIcon-BIs1E3cK.js";import"./DefaultPropsProvider-omTkMwKz.js";import"./Close-CXRj7muF.js";import"./IconButton-CB2yg_JS.js";import"./ButtonBase-B2wgZIDS.js";import"./useTimeout-BJT5itvQ.js";import"./TransitionGroupContext-l1GBX2CH.js";import"./useIsFocusVisible-CJXqI5Ok.js";import"./useEventCallback-CMwoN8rY.js";import"./Stack-B6FqdQE3.js";import"./getThemeProps-DNrBl4wZ.js";import"./useTheme-knQsgu-L.js";import"./Box-CZfJ9FNL.js";import"./AlertTitle-CaGh6uKR.js";import"./Typography-CsnhBgcI.js";import"./useTheme-N2s54T76.js";import"./Grow-C4EvBoga.js";import"./index-C283ZE_A.js";import"./utils-D_mGwy7L.js";import"./ClickAwayListener-DChUe8a7.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DLYYTJAc.js";import"./index-CXLskV8c.js";import"./useControlled-BOEsG-Ke.js";import"./useId-sjHSV8uf.js";import"./Popper-CgUdf8Yp.js";import"./Button-Cbd-R7S0.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B2W7WvCN.js";import"./utils-BTDD21Gu.js";import"./Link-BK0CPbSA.js";import"./Collapse-D7BpYLKk.js";import"./isNil-jJiu7qUq.js";import"./_Uint8Array-CRK6RbyJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DXDyFbLA.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CCn7fuDD.js";import"./_getTag-CzbInwKL.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dsc-ng1t.js";import"./Skeleton-BD-shLg_.js";import"./inputBaseClasses-CzPMbH9V.js";import"./calculateFriendlyFileSize-Cls87z73.js";import"./CheckCircleTwoTone-BDkgaxM-.js";import"./InfoTwoTone-Dd48EZp1.js";import"./useMutation-Dl-XAcpb.js";import"./isEqual-BeXmNxMu.js";import"./dayjs.min-CPUkpIN-.js";import"./chunk-AYJ5UCUI-DhzNmnWU.js";import"./cloneDeep-D1htCpIz.js";import"./_initCloneObject-Bn1ipTO5.js";import"./merge-cNoXgvrO.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-KiqloEa3.js";import"./SkeletonInlineBlock-7xCamVgv.js";import"./SkeletonTable-Cf4FmdAM.js";import"./times-Creqe7cA.js";import"./toInteger-Bm4GM7e8.js";import"./isSymbol-D8Zw-095.js";import"./SkeletonParagraph-le08uM64.js";import"./uniqueId-D4MtxxHB.js";import"./toString-UPy0TL2W.js";import"./CSSTransition-3Ewdsrdn.js";import"./ConditionalWrapper-C-izd5db.js";import"./LockTwoTone-CYS0GXPo.js";import"./Avatar-B5FkX2D_.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
