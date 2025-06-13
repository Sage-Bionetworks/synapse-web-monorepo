import{j as a}from"./jsx-runtime-Bv8YEaBH.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-Cz_ALCvV.js";import{d as s}from"./ToastMessage-rCIzSS9q.js";import{R as n,a as t}from"./RequirementItem-C74oSsEy.js";import{P as O}from"./Paper-CRVTgSKq.js";import"./index-C8JkJuAu.js";import"./iframe-NLwWwRdc.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-Su2vP-Vi.js";import"./SynapseConstants-EeVSIOhY.js";import"./OrientationBanner-BQ3EEnjD.js";import"./index-CGWSjN6U.js";import"./spreadSx-CwcO6WA9.js";import"./react-CiUdbne5.js";import"./FullWidthAlert-BrvXLUsb.js";import"./Alert-CjEJ3HP5.js";import"./createTheme-D9NJJ6z3.js";import"./resolveComponentProps-BGoVLP8f.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-l-SmT4Uz.js";import"./createSvgIcon-L4WadSk7.js";import"./DefaultPropsProvider-BiXlOQ7j.js";import"./Close-BiBfC96O.js";import"./IconButton-CXhXXsh6.js";import"./ButtonBase-dmtwr57K.js";import"./useTimeout-BuK_Exfq.js";import"./TransitionGroupContext-DJx4bXsB.js";import"./useIsFocusVisible-BO1F7lvs.js";import"./useEventCallback-CFYRt3cH.js";import"./Stack-rdeC-v74.js";import"./getThemeProps-4Dr_ZDpi.js";import"./useTheme-Co61GOlc.js";import"./Box-BMPqYR7p.js";import"./AlertTitle-CSIAt-Ha.js";import"./Typography-BsmL1IV9.js";import"./useTheme-BVEmyHZs.js";import"./Grow-D2l0_4Q_.js";import"./index-CMTDsqyy.js";import"./index-BJ_H4sHa.js";import"./utils-C3tDjUst.js";import"./ClickAwayListener-_6zWxFJV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CDHYnPb_.js";import"./index-D3UuUsLK.js";import"./useControlled-Cspd-g1r.js";import"./useId-DIAsmSPW.js";import"./Popper-DKOnFzcu.js";import"./Button-DEBpA164.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-BUFsJCGJ.js";import"./utils-Cj0m-Ji3.js";import"./Link-g1X2wDqx.js";import"./Collapse-BSLCQkny.js";import"./isNil-DKDhlnid.js";import"./_Uint8Array-DwE4ItUc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DoTP4dqX.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BoFbjx5O.js";import"./_getTag-BvRivN-a.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZPfr4vM.js";import"./Skeleton-CBrnuwpI.js";import"./inputBaseClasses-DHml8rkl.js";import"./calculateFriendlyFileSize-DiFQmRiA.js";import"./CheckCircleTwoTone-C51j_Tht.js";import"./InfoTwoTone-BAas1LbT.js";import"./useMutation-_5A6YDAS.js";import"./isEqual-BG-Ffdhv.js";import"./dayjs.min-DJseQ_FH.js";import"./chunk-AYJ5UCUI-UunCorCM.js";import"./cloneDeep-CZwPFwpf.js";import"./_initCloneObject-Hb09R64Y.js";import"./merge-Dbgsmfty.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CS9vDtOP.js";import"./SkeletonInlineBlock-COrJsO2B.js";import"./SkeletonTable-Dw272Rxr.js";import"./times-BHyqTELq.js";import"./toInteger-Dw_Zgjqy.js";import"./isSymbol-fc3aM2-k.js";import"./SkeletonParagraph-BaD5JPL2.js";import"./uniqueId-CQwBg5qp.js";import"./toString-DkLHvPj7.js";import"./CSSTransition-D1pBaY85.js";import"./ConditionalWrapper-DKnLsOHj.js";import"./LockTwoTone-CThBapmj.js";import"./Avatar-BQE3Ike_.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
