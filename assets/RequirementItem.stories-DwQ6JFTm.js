import{j as a}from"./jsx-runtime-v-CcEzRb.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-CiFwsT0u.js";import{d as s}from"./ToastMessage-1LCPGvbY.js";import{R as n,a as t}from"./RequirementItem-FsxHFnQ3.js";import{P as O}from"./Paper-CxulbT0O.js";import"./index-DF-TOXwj.js";import"./iframe-Ck7IJ420.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-Dg22cr_p.js";import"./SynapseConstants-BL46kxFd.js";import"./OrientationBanner-DaBQ1wQC.js";import"./index-BhZra2zu.js";import"./spreadSx-CwcO6WA9.js";import"./react-DY4l1kQF.js";import"./FullWidthAlert-B7z3Zpcy.js";import"./Alert-CGNd2cjt.js";import"./createTheme-CKxaABez.js";import"./resolveComponentProps-Dbo3c2Rm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-HrLZAw1Q.js";import"./createSvgIcon-DLcyUkBI.js";import"./DefaultPropsProvider-CLNAjcgO.js";import"./Close-DESapESh.js";import"./IconButton-Czp9fOJS.js";import"./ButtonBase-D1FCadF9.js";import"./useTimeout-DSwRVM_E.js";import"./TransitionGroupContext-CqGhktck.js";import"./useIsFocusVisible-ClFSTf5X.js";import"./useEventCallback-Dqg8r-2E.js";import"./Stack-C-5_NicX.js";import"./getThemeProps-Cz1tfoEg.js";import"./useTheme-Cw717heW.js";import"./Box-C151VSyT.js";import"./AlertTitle-CDDM5S7t.js";import"./Typography-Dv8d3d0K.js";import"./useTheme-CXQbBQv0.js";import"./Grow-DA-uXJ7J.js";import"./index-DLrHSQNQ.js";import"./index-BrGjyCPj.js";import"./utils-C_Khsrsh.js";import"./ClickAwayListener-BkV76s-w.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BGEWhPhD.js";import"./index-CdC_zZ47.js";import"./useControlled-Du8O03uu.js";import"./useId-C-ekwKxL.js";import"./Popper-DrxS9Kfi.js";import"./Button-GBwXY7dn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-cmgOgxs2.js";import"./utils-D3V1hKlA.js";import"./Link-Ck5KtLZ5.js";import"./Collapse-DWBJ_Cvl.js";import"./isNil-DFyqHzIg.js";import"./_Uint8Array-Du7czIyf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-KhxvdvDF.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dx1pfhTR.js";import"./_getTag-D6cd-bWi.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLBjHFS9.js";import"./Skeleton-Cfx67XJi.js";import"./inputBaseClasses-B_9PRdoJ.js";import"./calculateFriendlyFileSize-D9eWZJY0.js";import"./CheckCircleTwoTone-CiPdEZmI.js";import"./InfoTwoTone-GTYfYWDz.js";import"./useMutation-B9X43rdd.js";import"./isEqual-9ljHnP7Y.js";import"./dayjs.min-BolHz43I.js";import"./chunk-AYJ5UCUI-CKomAHZY.js";import"./cloneDeep-CLjt8ka6.js";import"./_initCloneObject-CnDAhYwq.js";import"./merge-BZOFHhHs.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DNRStzzi.js";import"./SkeletonInlineBlock-0BmHiPMk.js";import"./SkeletonTable-Mk17IBZW.js";import"./times-D0k_iGj5.js";import"./toInteger-i-ia65tb.js";import"./isSymbol-DEMDv_Lt.js";import"./SkeletonParagraph-Bps8ezy2.js";import"./uniqueId-DUj41qkI.js";import"./toString-B_PL-Td1.js";import"./CSSTransition-CqOH9JVL.js";import"./ConditionalWrapper-Bbu9NDkG.js";import"./LockTwoTone-DFLamJd8.js";import"./Avatar-Byx_43aJ.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
