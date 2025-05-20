import{j as a}from"./jsx-runtime-LNM4Hejx.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-DqKnf0-j.js";import{d as s}from"./ToastMessage-f7wjk0WE.js";import{R as n,a as t}from"./RequirementItem-D8-uJEcF.js";import{P as O}from"./Paper-CzKkmbxx.js";import"./index-DI_-ITWc.js";import"./iframe-ErXbxx3w.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-BPoIposu.js";import"./SynapseConstants-Co29NLrI.js";import"./OrientationBanner-DRQjh_MY.js";import"./index-CD5x-CbF.js";import"./spreadSx-CwcO6WA9.js";import"./react-BLqU1nHD.js";import"./FullWidthAlert-BlqPbpC2.js";import"./Alert-o68bsglQ.js";import"./createTheme-sB52mbFJ.js";import"./resolveComponentProps-DlsEIkau.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D0dHJyLT.js";import"./createSvgIcon-BabHNiX3.js";import"./DefaultPropsProvider-ChxiI4tD.js";import"./Close-D04djKOd.js";import"./IconButton-DkBpEf1n.js";import"./ButtonBase-D9zLenAD.js";import"./useTimeout-6YIBQPj9.js";import"./TransitionGroupContext-BGgxAqlU.js";import"./useIsFocusVisible-CWvvQ-6-.js";import"./useEventCallback-NTkNzc19.js";import"./Stack-D9O3g525.js";import"./getThemeProps-DY7O4lpQ.js";import"./useTheme-3YwHPNMg.js";import"./Box-Cg8lPZ83.js";import"./AlertTitle-e5BQ4RFh.js";import"./Typography-DUwsUFQN.js";import"./useTheme-BozbJXxT.js";import"./Grow-D0VNHdtZ.js";import"./index-DsE0iHI0.js";import"./utils-BVDP6cr7.js";import"./ClickAwayListener-CUt7s9Wn.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BZf81u0W.js";import"./index-JLvMmP38.js";import"./useControlled-McMF_b3B.js";import"./useId-DiOQhoCr.js";import"./Popper-D3ZELG7b.js";import"./Button-uqPkG0PN.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-DdP-4ZWu.js";import"./utils-7cibFwkE.js";import"./Link-CxuEV2Yw.js";import"./Collapse-N8WMS6vY.js";import"./isNil-BEf8rUeE.js";import"./_Uint8Array-HMlgB7ZY.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CP11Nt3b.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DJtys-Lc.js";import"./_getTag-ptAFXIl0.js";import"./tinycolor-Begke6kS.js";import"./Fade-DlIjUiqW.js";import"./Skeleton-BOEt5rPK.js";import"./inputBaseClasses-VMJC09Vq.js";import"./calculateFriendlyFileSize-OXtYuuA2.js";import"./CheckCircleTwoTone-CQvsTgIk.js";import"./InfoTwoTone-d5FlF0um.js";import"./mutation-C-nVhw6S.js";import"./dayjs.min-C7AVYoqE.js";import"./chunk-AYJ5UCUI-B0w41TpG.js";import"./cloneDeep-DrP4XaFY.js";import"./_initCloneObject-DNtUqdhE.js";import"./isEqual-VzErT_1H.js";import"./merge-BbKHlK4b.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BN5OP7nr.js";import"./SkeletonInlineBlock-CwjAAzLY.js";import"./SkeletonTable-D2rGOraL.js";import"./times-CGYgpp14.js";import"./toInteger-B090yKnE.js";import"./isSymbol-cxeMPdPI.js";import"./SkeletonParagraph-BJ2IbWRb.js";import"./uniqueId-FvNdEXAY.js";import"./toString-BhYAZCcC.js";import"./CSSTransition-Uw_Fq2BU.js";import"./ConditionalWrapper-DiPeTkzy.js";import"./LockTwoTone-DAsN6yOP.js";import"./Avatar-AU_ZwD5v.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
