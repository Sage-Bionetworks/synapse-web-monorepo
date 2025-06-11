import{j as a}from"./jsx-runtime-CDD16J4I.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-BtffcBq4.js";import{d as s}from"./ToastMessage-C8ChTVd1.js";import{R as n,a as t}from"./RequirementItem-mY9dkioG.js";import{P as O}from"./Paper-D2Ya4jZy.js";import"./index-CTtGSwtz.js";import"./iframe-DHqncNvI.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-CWzgJ9sH.js";import"./SynapseConstants-CxcbPKuN.js";import"./OrientationBanner-CDewlRHC.js";import"./index-6q9LD8_w.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ck4mbq7a.js";import"./FullWidthAlert-Cgkxxv0P.js";import"./Alert-DlUFZ172.js";import"./createTheme-DtyqCcsW.js";import"./resolveComponentProps-yty8tDzr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-8EUHzdYl.js";import"./createSvgIcon-D2nihEOR.js";import"./DefaultPropsProvider-Q55trC2F.js";import"./Close-CLUvZd8_.js";import"./IconButton-CFbw2MTT.js";import"./ButtonBase-BX3py27C.js";import"./useTimeout-DCvpGNuJ.js";import"./TransitionGroupContext-D_AfR7Ts.js";import"./useIsFocusVisible-DSE28IXe.js";import"./useEventCallback-LaXwXmvX.js";import"./Stack-D5IlQnMa.js";import"./getThemeProps-DrtVxYpm.js";import"./useTheme-BqMk1IzG.js";import"./Box-BldPxOqU.js";import"./AlertTitle-iHGnMN1B.js";import"./Typography-DfBcTN0P.js";import"./useTheme-4fjKTJkR.js";import"./Grow-DwKxzONN.js";import"./index-CXYQz1UQ.js";import"./index-DnAMs-MC.js";import"./utils-BT38eB9s.js";import"./ClickAwayListener-DJDqohlz.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Bjl6zEeo.js";import"./index-DTKxd2xi.js";import"./useControlled-DrJNWWi-.js";import"./useId-Dl5Lr_f7.js";import"./Popper-BEuA7c-9.js";import"./Button-CSREDgQS.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-DtswAvya.js";import"./utils-CwLPV75P.js";import"./Link-C2X9bszK.js";import"./Collapse-zM_t4339.js";import"./isNil-BtYaoqDt.js";import"./_Uint8Array-CNETH7XA.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B2aI8r_K.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-UnDsdCOv.js";import"./_getTag-B1tLmQft.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGqyTv5e.js";import"./Skeleton-BZhHyFlz.js";import"./inputBaseClasses-C_hlAuoX.js";import"./calculateFriendlyFileSize-BMa6rFxO.js";import"./CheckCircleTwoTone-DaGpdtOL.js";import"./InfoTwoTone-D_LpKHwl.js";import"./useMutation-a2O88IgO.js";import"./isEqual-CycnANg8.js";import"./dayjs.min-DMkylBgh.js";import"./chunk-AYJ5UCUI-T8nVnVS8.js";import"./cloneDeep-DnuAzlve.js";import"./_initCloneObject-D8hJZdZ8.js";import"./merge-CsgEdur4.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-B4kx90K3.js";import"./SkeletonInlineBlock-DkNe9F_c.js";import"./SkeletonTable-DeB5o58L.js";import"./times-uUhR8ai2.js";import"./toInteger-cOPt_qUD.js";import"./isSymbol-UPKfwsd0.js";import"./SkeletonParagraph-O4k3IaE2.js";import"./uniqueId-CZZxuA8y.js";import"./toString-BOPBFrFs.js";import"./CSSTransition-CRIq4W69.js";import"./ConditionalWrapper-Csl20m40.js";import"./LockTwoTone-D_J-nCIX.js";import"./Avatar-BDU8sH8b.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
