import{j as a}from"./jsx-runtime-DS5StVVG.js";import{m as P}from"./mockWiki-5OtZEItt.js";import{M as x}from"./MarkdownSynapse-REMYywWy.js";import{d as s}from"./ToastMessage-CSJOtOdS.js";import{R as n,a as t}from"./RequirementItem-dQXJuI24.js";import{P as O}from"./Paper-BnU681ZV.js";import"./index-cX-36PVo.js";import"./iframe-9EJDT6Vt.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-DwnN5i7-.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-D2J0lDEf.js";import"./SynapseConstants-CaV0FCaG.js";import"./OrientationBanner-LE5NNPEZ.js";import"./index-BJZZKCw6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BsOov9i0.js";import"./FullWidthAlert-C4RioFof.js";import"./Alert-DxLNdAsW.js";import"./createTheme-Bf7RaJZp.js";import"./resolveComponentProps-BckopApa.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C8gc3lry.js";import"./createSvgIcon-C97cKv-E.js";import"./DefaultPropsProvider-Dj-ET5XP.js";import"./Close-ClleilIz.js";import"./IconButton-Dnrmx_JM.js";import"./ButtonBase-De4KvzrO.js";import"./useTimeout-CtHEIWtS.js";import"./TransitionGroupContext-D0NEqPRG.js";import"./useIsFocusVisible-8oN7zW9b.js";import"./useEventCallback-Bf6o-zFC.js";import"./Stack-mOfhED7S.js";import"./getThemeProps-B2jfOwXN.js";import"./useTheme-BagD9k6_.js";import"./Box-CilYK6-7.js";import"./AlertTitle-BG01MePs.js";import"./Typography-5l8xUtlm.js";import"./useTheme-Byb0Hnvw.js";import"./Grow-2xpSizAP.js";import"./index-q3SnWJ3I.js";import"./utils-COVIZagF.js";import"./ClickAwayListener-C4HP-2Tv.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-ZIrjiZox.js";import"./index-JhzEDNxb.js";import"./useControlled-CeFwsNUA.js";import"./useId-2Kxm9uM_.js";import"./Popper-CfQZLj9d.js";import"./Button-Cp5tKDML.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-7tsM9kOw.js";import"./utils-DxymWvTy.js";import"./Link-CXcIbBMo.js";import"./Collapse-D2dc9D9e.js";import"./isNil-t2bB1iUd.js";import"./_Uint8Array-YYzzYD9-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D3taRsKZ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DcWszeYx.js";import"./_getTag-DbOHal0V.js";import"./tinycolor-Begke6kS.js";import"./Fade-CQyasUig.js";import"./Skeleton-B3HMeOtD.js";import"./inputBaseClasses-LXtxNwLa.js";import"./calculateFriendlyFileSize-C78IjuJR.js";import"./CheckCircleTwoTone-CqTc5vaA.js";import"./InfoTwoTone-DNtkufyt.js";import"./useMutation-DUd97SQY.js";import"./isEqual-Dt-4NKhD.js";import"./dayjs.min-CHLyGnUf.js";import"./chunk-AYJ5UCUI-Blpg1t-L.js";import"./cloneDeep-CZOyHOHD.js";import"./_initCloneObject-CiNG-Awp.js";import"./merge-klNNUCYg.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DR3Wscs0.js";import"./SkeletonInlineBlock-FTKT13Xy.js";import"./SkeletonTable-CHqtt29F.js";import"./times-CDCLamh_.js";import"./toInteger-Dd4xfpSi.js";import"./isSymbol-BdJ4UU4t.js";import"./SkeletonParagraph-y1PWjO4C.js";import"./uniqueId-DCX6bmKm.js";import"./toString-CMJ3T8l9.js";import"./CSSTransition-DPWmIb3V.js";import"./ConditionalWrapper-DZ5m3nSZ.js";import"./LockTwoTone-BHE84zHG.js";import"./Avatar-DOxl2-i0.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
