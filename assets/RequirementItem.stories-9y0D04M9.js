import{j as a}from"./jsx-runtime-C3ogRbLI.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-BSepFtYF.js";import{d as s}from"./ToastMessage-CHAj88tr.js";import{R as n,a as t}from"./RequirementItem-Di2Pd09f.js";import{P as O}from"./Paper-D1p4MEKu.js";import"./index-7Bqgw_Nk.js";import"./iframe-76Ft5xlu.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-Dm5G10cS.js";import"./SynapseConstants-Cu1_hkM-.js";import"./OrientationBanner-CU3A5aiX.js";import"./index-CSuriLJp.js";import"./spreadSx-CwcO6WA9.js";import"./react-CqKh3AxL.js";import"./FullWidthAlert-DPZhA9eJ.js";import"./Alert-GmDE_fQh.js";import"./createTheme-DZnemi5A.js";import"./DefaultPropsProvider-DjwvSCQ6.js";import"./useSlot-_DOKpZQU.js";import"./useForkRef-0c5Xled9.js";import"./createSimplePaletteValueFilter-B5Afh-Cr.js";import"./createSvgIcon-D0sXf-9N.js";import"./Close-DHdhE8Ij.js";import"./IconButton-7GiAwj0K.js";import"./useTimeout-CrYJWRws.js";import"./ButtonBase-IClCv5pr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BKEAHSP2.js";import"./Stack-Bsk1SXWK.js";import"./extendSxProp-TmA7a6n0.js";import"./getThemeProps-ltRrQ4k_.js";import"./useTheme-DX10MvBa.js";import"./Box-TXIhPUVR.js";import"./AlertTitle-BFYluwcq.js";import"./Typography-Di-Dztpm.js";import"./index-7Er0euq9.js";import"./useTheme-CfhzM8OT.js";import"./ClickAwayListener-DDZ5zP33.js";import"./getReactElementRef-C5JhnwkH.js";import"./index-COejetYF.js";import"./index-DVpd846o.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-5HnAqb89.js";import"./Tooltip-CzwSX8Xn.js";import"./index-Cn3a4A7j.js";import"./useControlled-BIY0s71L.js";import"./Popper-B_IiIxz5.js";import"./Button-DPTABYes.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-BYlql_kZ.js";import"./utils-BrMZ7D3t.js";import"./Link-BdOeldiG.js";import"./Collapse-pdvdDRED.js";import"./_baseUniq-bm2RQmM0.js";import"./_Uint8Array-D5eLjQqb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-rpww-nrg.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CliP6LJJ.js";import"./isEqual-h6k8NwMA.js";import"./merge-CnjsetUv.js";import"./_initCloneObject-DGLMpSFd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DYV9CmU4.js";import"./inputBaseClasses-D-axTxXE.js";import"./calculateFriendlyFileSize-Yd1LXqV5.js";import"./CheckCircleTwoTone-D3Fvz0TX.js";import"./InfoTwoTone-CIGZbw3d.js";import"./useMutation-DHWjdRbY.js";import"./dayjs.min-B6l9Knyo.js";import"./chunk-AYJ5UCUI-BkHYh9MM.js";import"./cloneDeep-CUx7sbYF.js";import"./Skeleton-DftmuptQ.js";import"./SkeletonButton-Db4-skRu.js";import"./SkeletonInlineBlock-h3n1S1aI.js";import"./SkeletonTable-CDb6ogtE.js";import"./times-fGsiNM7a.js";import"./toInteger-CxZPUCgj.js";import"./isSymbol-CUP1dyKf.js";import"./SkeletonParagraph-BbDUgoR6.js";import"./uniqueId-JGcOsGEP.js";import"./toString-I6Lb7g4z.js";import"./CSSTransition-CiHdygbf.js";import"./ConditionalWrapper-CKysyr5l.js";import"./LockTwoTone-B8tmmff7.js";import"./Avatar-BYqXw6oM.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
