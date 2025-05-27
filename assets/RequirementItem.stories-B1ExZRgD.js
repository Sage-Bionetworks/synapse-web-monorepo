import{j as a}from"./jsx-runtime-d_jSGfuW.js";import{m as P}from"./mockWiki-DHj13qiO.js";import{M as x}from"./MarkdownSynapse-Bplz6Xi1.js";import{d as s}from"./ToastMessage-Yb-tjj0l.js";import{R as n,a as t}from"./RequirementItem-CDRq4eNE.js";import{P as O}from"./Paper-BOIlBj0a.js";import"./index-CsMIurHC.js";import"./iframe-BJUV8yd-.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-DS_yjaGE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./useFiles-Dsa3u--j.js";import"./SynapseConstants-BmRSEcUC.js";import"./OrientationBanner-B-arf4vv.js";import"./index-C6EkIRZO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLp1HUW8.js";import"./FullWidthAlert-g5VY_JP0.js";import"./Alert-BRIWNOtu.js";import"./createTheme-CXF9bY3g.js";import"./resolveComponentProps-BVjKbyvI.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Qy2WE2L8.js";import"./createSvgIcon-nJ4brtSX.js";import"./DefaultPropsProvider-BjdTxmMk.js";import"./Close-CcYrHUCv.js";import"./IconButton-Oayiszqv.js";import"./ButtonBase-BemfzaRk.js";import"./useTimeout-M7ILagoH.js";import"./TransitionGroupContext-BzjYJz1e.js";import"./useIsFocusVisible-CONob7Sg.js";import"./useEventCallback-BI5RiCjo.js";import"./Stack-B6pwuley.js";import"./getThemeProps-BkFfL3GX.js";import"./useTheme-Co028x8f.js";import"./Box-0w0QXb9q.js";import"./AlertTitle-BCj215so.js";import"./Typography-DI7kYxjv.js";import"./useTheme-DxaRAP13.js";import"./Grow-Cse7N1kt.js";import"./index-ZO1NugB6.js";import"./utils-CXikhHHF.js";import"./ClickAwayListener-BhXis3j3.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuINGH26.js";import"./index-DioXFVDj.js";import"./useControlled-2RzUJcJv.js";import"./useId-BbVskIHx.js";import"./Popper-Dpp_HX4T.js";import"./Button-S6YMXMba.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-D3ZPFprG.js";import"./utils-C7K2lhfB.js";import"./Link-6Al-Fqj4.js";import"./Collapse-BHgec6F8.js";import"./isNil-SZ1XCHa2.js";import"./_Uint8Array-Qz23elJ2.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-htAwhsM6.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DpmEyEs-.js";import"./_getTag-CR_tant5.js";import"./tinycolor-Begke6kS.js";import"./Fade-BMnops2P.js";import"./Skeleton-wblQ7WdV.js";import"./inputBaseClasses-CsqekATJ.js";import"./calculateFriendlyFileSize-C5bVMG5e.js";import"./CheckCircleTwoTone-C73kqWtj.js";import"./InfoTwoTone-Ds0ttC-r.js";import"./mutation-CpK9fLVW.js";import"./dayjs.min-h1P3Bc9m.js";import"./chunk-AYJ5UCUI-CJN4kzPf.js";import"./cloneDeep-DjuOrVDN.js";import"./_initCloneObject-DutgCJVD.js";import"./isEqual-DjXGrVN1.js";import"./merge-DlMI-LlY.js";import"./identity-DKeuBCMA.js";import"./useMutation-DDvEyqjo.js";import"./SkeletonButton-BbgqHJzb.js";import"./SkeletonInlineBlock-Br8kD0JA.js";import"./SkeletonTable-8F8y6Hkc.js";import"./times-BmLsJreT.js";import"./toInteger-CatpUP2F.js";import"./isSymbol-CTVE5bUB.js";import"./SkeletonParagraph-Cvq575Hf.js";import"./uniqueId-DoD0QRy_.js";import"./toString-TA4EATTq.js";import"./CSSTransition-CkmY4DJE.js";import"./ConditionalWrapper-DH2HkVu9.js";import"./LockTwoTone-gazWv3gH.js";import"./Avatar-CvXwSE0T.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
