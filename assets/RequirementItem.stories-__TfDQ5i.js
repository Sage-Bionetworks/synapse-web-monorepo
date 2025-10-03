import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-C-stTAs1.js";import{d as s}from"./ToastMessage-BE-2DKTt.js";import{R as n,a as t}from"./RequirementItem-BaeELtMj.js";import{P as O}from"./Paper-BfdEPQLJ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Ah-QMMVe.js";import"./SynapseConstants-XsXCMBgO.js";import"./OrientationBanner-DfVgOy4M.js";import"./index-BWJnohk0.js";import"./index-Rd2swjmm.js";import"./iframe-CXAxgruz.js";import"./spreadSx-CwcO6WA9.js";import"./react-BApqYDyB.js";import"./FullWidthAlert-BmqfxTfb.js";import"./Alert-CCZCxDnF.js";import"./createTheme-TuqmvCHd.js";import"./DefaultPropsProvider-BXgXJOYE.js";import"./useSlot-Dkzr42VA.js";import"./useForkRef-C6Hxgw1c.js";import"./createSimplePaletteValueFilter-I39MDwlM.js";import"./createSvgIcon-C9iQk-bv.js";import"./Close-DCDeVnbe.js";import"./IconButton-CyqRcr44.js";import"./useTimeout-B1Gaupyv.js";import"./ButtonBase-SlYjLBEH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DePpf9Xr.js";import"./Stack-BgMCCB8s.js";import"./useThemeProps-CsD4iJ62.js";import"./getThemeProps-C7aU0N0h.js";import"./useTheme-D5J_Lubc.js";import"./extendSxProp-BEqNfaz4.js";import"./Box-C1rpSzmp.js";import"./AlertTitle-DigLp6pg.js";import"./Typography-BMdAKFRJ.js";import"./index-CNp3TF0s.js";import"./useTheme-COUAZuoX.js";import"./ClickAwayListener-BukZ-mWk.js";import"./getReactElementRef-C70_vEbO.js";import"./index-BnG4WIQw.js";import"./index-BdU_PVcS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-frQ6Hdr3.js";import"./Tooltip-Bodc1hDc.js";import"./index-eFiUvJZl.js";import"./useControlled-DV9JfbO_.js";import"./Popper-B_NbVk8A.js";import"./Button-BbbnNSgV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-xEUhumnM.js";import"./QueryClientProvider-CKp6Cdu0.js";import"./Link-DJSxCMVl.js";import"./Collapse-Djxal_Co.js";import"./_baseUniq-DPC7unBD.js";import"./_Uint8Array-DiPMYHJc.js";import"./isArray-BKjPFGFw.js";import"./_getTag-B97qJZKn.js";import"./isEqual-CTDb6a_A.js";import"./noop-DX6rZLP_.js";import"./merge-Bi0YVhuS.js";import"./_initCloneObject-Du3oUuAw.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dr4GrnsL.js";import"./inputBaseClasses-BUA8z3Qv.js";import"./calculateFriendlyFileSize-DFvfx4N-.js";import"./CheckCircleTwoTone-C7oNrQEJ.js";import"./InfoTwoTone-BlOTsixa.js";import"./useMutation-CCZv9b7z.js";import"./dayjs.min-HpAO55uO.js";import"./chunk-AYJ5UCUI-CQrmzzWS.js";import"./cloneDeep--SZltrec.js";import"./Skeleton-BgzeM125.js";import"./SkeletonButton-BHdzXUDX.js";import"./SkeletonInlineBlock-DmDy72wJ.js";import"./SkeletonTable-BcSafx_S.js";import"./times-Dv-CFPqs.js";import"./toInteger-S3CGaVI5.js";import"./isSymbol-Bqq76GQu.js";import"./SkeletonParagraph-QM-ftTqD.js";import"./uniqueId-CQkmX5En.js";import"./toString-BBUCQoOW.js";import"./CSSTransition-BeafbKVl.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DanSdv82.js";import"./Avatar-D-cuva4E.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
