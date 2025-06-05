import{j as a}from"./jsx-runtime-BoocIWMh.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-DFxQNJy_.js";import{d as s}from"./ToastMessage-D-3b0JBj.js";import{R as n,a as t}from"./RequirementItem-B3QbKFxl.js";import{P as O}from"./Paper-aoD8x6kl.js";import"./index-BYsW-UGM.js";import"./iframe-CvStSd8l.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-DH0hZnW0.js";import"./SynapseConstants-B43XihpB.js";import"./OrientationBanner-Bn70Goou.js";import"./index-CcVtSZI1.js";import"./spreadSx-CwcO6WA9.js";import"./react-ClgVEHpJ.js";import"./FullWidthAlert-DCsaqEW2.js";import"./Alert-UkVPZ6lx.js";import"./createTheme-CD9FYzWa.js";import"./resolveComponentProps-BFawuUKo.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CrKJLQLu.js";import"./createSvgIcon-CJNY7FN1.js";import"./DefaultPropsProvider-D7kCmuDE.js";import"./Close-B6CzrqbK.js";import"./IconButton-DWqxDXo3.js";import"./ButtonBase-CSQbkZfT.js";import"./useTimeout-3f2ojJp1.js";import"./TransitionGroupContext-BhvU_wXg.js";import"./useIsFocusVisible-DEWRbVzD.js";import"./useEventCallback-Ck__gsyr.js";import"./Stack-vXmPvWOy.js";import"./getThemeProps-V6bVpuH7.js";import"./useTheme-DObaY_2L.js";import"./Box-Crx_KkJs.js";import"./AlertTitle-DlWqoNQG.js";import"./Typography-B2rL68hj.js";import"./useTheme-B8HxMTzh.js";import"./Grow-BZWyJZLH.js";import"./index-1dw1k-mu.js";import"./utils-IzrHSjbr.js";import"./ClickAwayListener-J_XnNFqp.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B9mLlwV6.js";import"./index-CUnMnMI3.js";import"./useControlled-DRov2nO8.js";import"./useId-e6r5XecO.js";import"./Popper-DRhu15Is.js";import"./Button-DIhDyw4D.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-8tRvAzYp.js";import"./utils-Bt3D-rUS.js";import"./Link-ju7JKeKA.js";import"./Collapse-CEHOIevo.js";import"./isNil-DCGkC4xE.js";import"./_Uint8Array-Baslgj2I.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DLnZxQK6.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BADauply.js";import"./_getTag-Bvap34EV.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPG5TcKR.js";import"./Skeleton-B-GAbu1S.js";import"./inputBaseClasses-CNrzxZep.js";import"./calculateFriendlyFileSize-Dx0b0pRy.js";import"./CheckCircleTwoTone-Def5yWF9.js";import"./InfoTwoTone-8mf67b7v.js";import"./useMutation-D-m5yZ5O.js";import"./isEqual-65PRO3at.js";import"./dayjs.min-BJZESKrl.js";import"./chunk-AYJ5UCUI-ByvWxCXR.js";import"./cloneDeep-DJYJ4ACu.js";import"./_initCloneObject-BMoAasIP.js";import"./merge-BiFf4Tsw.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-pGOEsAam.js";import"./SkeletonInlineBlock-CnpwSlNc.js";import"./SkeletonTable-BzAamuHw.js";import"./times-B3tP24wu.js";import"./toInteger-G7RJxeEd.js";import"./isSymbol-B9qkrgeE.js";import"./SkeletonParagraph-Bl58aql1.js";import"./uniqueId-CAIHFYEr.js";import"./toString-Dw3XAiZg.js";import"./CSSTransition-Cjy3wfcv.js";import"./ConditionalWrapper-BFH--Btj.js";import"./LockTwoTone-CxlqVYwq.js";import"./Avatar-Czmpwj_v.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
