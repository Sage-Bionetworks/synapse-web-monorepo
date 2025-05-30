import{j as a}from"./jsx-runtime-BGAr_H6J.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-B1me5itT.js";import{d as s}from"./ToastMessage-85bQtfrH.js";import{R as n,a as t}from"./RequirementItem-BLi7eW9R.js";import{P as O}from"./Paper-WIHJYIv3.js";import"./index-CBNOfi9b.js";import"./iframe-Bz49s2ek.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-CUgp-bJ5.js";import"./SynapseConstants-BEbm2BNF.js";import"./OrientationBanner-CwmgbjT1.js";import"./index-DACJwC5s.js";import"./spreadSx-CwcO6WA9.js";import"./react-BlXBSA_S.js";import"./FullWidthAlert-CZGhZILF.js";import"./Alert-BCPuGqa7.js";import"./createTheme-BS2Hxz2C.js";import"./resolveComponentProps-CIYnEhb-.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-iaYYc9cH.js";import"./createSvgIcon-BH1qGqe_.js";import"./DefaultPropsProvider-C6M_N1al.js";import"./Close-8S-yuGkV.js";import"./IconButton-BHS8NsAP.js";import"./ButtonBase-MOgQUm9a.js";import"./useTimeout-DSVaU9sB.js";import"./TransitionGroupContext-8dlZc-k1.js";import"./useIsFocusVisible-5-ZlgN9V.js";import"./useEventCallback-viMIHUvK.js";import"./Stack-C_q3MTiC.js";import"./getThemeProps-pJg6N0Fu.js";import"./useTheme-DV8_YPZg.js";import"./Box-Ci6k8vkL.js";import"./AlertTitle-C5rWDhGv.js";import"./Typography-DukInDzv.js";import"./useTheme-CRJ8F4UU.js";import"./Grow-BQyhnjKi.js";import"./index-842qkzaE.js";import"./utils-DswcbYna.js";import"./ClickAwayListener-DtNMOS5b.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-8CUwFe3k.js";import"./index-CfXlikfe.js";import"./useControlled-Dm9u6Igu.js";import"./useId-CtRXL8u3.js";import"./Popper-BqzUuKEl.js";import"./Button-CD9r6Dww.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-T8y6ai37.js";import"./utils-DNqFuDFi.js";import"./Link-DtnlThUQ.js";import"./Collapse-BgbjfOQO.js";import"./isNil-DtAF69a6.js";import"./_Uint8Array-BMQd7pdf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CM6iWqWY.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-UKYRkdWd.js";import"./_getTag-CICsfDiG.js";import"./tinycolor-Begke6kS.js";import"./Fade-C7Q7hfy9.js";import"./Skeleton-6KImEvG6.js";import"./inputBaseClasses-C-bNqgbr.js";import"./calculateFriendlyFileSize-Cdyr_EDz.js";import"./CheckCircleTwoTone-1HEsco6v.js";import"./InfoTwoTone-Dm-TNOU9.js";import"./mutation-CVy7um_a.js";import"./dayjs.min-CfPuZ0Gd.js";import"./chunk-AYJ5UCUI-BqUDfuKM.js";import"./cloneDeep-CpnMvqCH.js";import"./_initCloneObject-D_6r56Q0.js";import"./isEqual-Dsql6eRH.js";import"./merge-BMUIzKJf.js";import"./identity-DKeuBCMA.js";import"./useMutation-B13Z37nL.js";import"./SkeletonButton-DxJ8_eb7.js";import"./SkeletonInlineBlock-CKtNsQDI.js";import"./SkeletonTable-ES3cTZms.js";import"./times-BFf5JBXq.js";import"./toInteger-CbgnmVti.js";import"./isSymbol-D-UeOBse.js";import"./SkeletonParagraph-D9XjKQKC.js";import"./uniqueId-B5Xx2N1K.js";import"./toString-B18YgA5k.js";import"./CSSTransition-B8M_i52a.js";import"./ConditionalWrapper-mcCaJisE.js";import"./LockTwoTone-CSqvZuNE.js";import"./Avatar-CwyVDyTH.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
