import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-D1auKuid.js";import{d as s}from"./ToastMessage-DDMmMHCN.js";import{R as n,a as t}from"./RequirementItem-CeMUKrIv.js";import{P as O}from"./Paper-CkXasqHE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DXugVBdN.js";import"./SynapseConstants-C06Ch0Di.js";import"./OrientationBanner-DBXHK8nr.js";import"./index-Cr129Lwm.js";import"./index-BTixfpmo.js";import"./iframe-BR9Ja6hI.js";import"./spreadSx-CwcO6WA9.js";import"./react-zGOPWrfW.js";import"./FullWidthAlert-DUgF28iy.js";import"./Alert-Bzs890sv.js";import"./createTheme-Ct4hOUY0.js";import"./DefaultPropsProvider-C9lcJsco.js";import"./useSlot-DVAL2WEY.js";import"./useForkRef-ByyUlt6l.js";import"./createSimplePaletteValueFilter-BaklvuFn.js";import"./createSvgIcon-DkE23E6T.js";import"./Close-r5Eir0nI.js";import"./IconButton-DMbp8lhT.js";import"./useTimeout-BT71a5BG.js";import"./ButtonBase-CLhQYawW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CGHL4dKq.js";import"./Stack-3xN7A2um.js";import"./extendSxProp-DVTPON9k.js";import"./getThemeProps-M7RFjJi5.js";import"./useTheme-C0qI9DFm.js";import"./Box-CApkhvtQ.js";import"./AlertTitle-CiWcZZaU.js";import"./Typography-CEi--Dpe.js";import"./index-C9fK3pkP.js";import"./useTheme--DNYjqwV.js";import"./ClickAwayListener-B29foLKR.js";import"./getReactElementRef-DrnFIYrE.js";import"./index-BXtdr2fX.js";import"./index-BUHx5KqL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqeXQhC3.js";import"./Tooltip-D-Bq3_L7.js";import"./index-BD7cvM_0.js";import"./useControlled-Cpbrkwwj.js";import"./Popper-CRYbaicA.js";import"./Button-CcoB3lWu.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CcZA1bE6.js";import"./QueryClientProvider-BCBx_4eV.js";import"./Link-a0CVLUjg.js";import"./Collapse-CtU4v-Lk.js";import"./_baseUniq-SSlWZVFw.js";import"./_Uint8Array-D-glPVel.js";import"./isArray-BHu1IHx8.js";import"./_getTag-B95UPAyz.js";import"./isEqual-BrkuIRuc.js";import"./merge-C4pBA74N.js";import"./_initCloneObject-B2AZAceM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DOxyPF1-.js";import"./inputBaseClasses-CxLG9xAk.js";import"./calculateFriendlyFileSize-DuOTJlq3.js";import"./CheckCircleTwoTone-Cs68L0RV.js";import"./InfoTwoTone-DaXqbztf.js";import"./useMutation-DsMluRIG.js";import"./dayjs.min-DWGHZlck.js";import"./chunk-AYJ5UCUI-DVpYxvti.js";import"./cloneDeep-Igvd9DYO.js";import"./Skeleton-hVDOD6Fh.js";import"./SkeletonButton-BneedwXN.js";import"./SkeletonInlineBlock-DcbHi6lF.js";import"./SkeletonTable-DSSXciDO.js";import"./times-sn4K5rrt.js";import"./toInteger-CgR3WlyJ.js";import"./isSymbol-iR7ee5nN.js";import"./SkeletonParagraph-FfSn5w_n.js";import"./uniqueId-C2IFdp_W.js";import"./toString-Xu7qx-rC.js";import"./CSSTransition-uJKH3bUk.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-IDmcvmJS.js";import"./Avatar-DRaoBjKG.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
