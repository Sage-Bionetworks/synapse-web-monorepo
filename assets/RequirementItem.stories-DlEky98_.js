import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BVlZp0cF.js";import{d as s}from"./ToastMessage-rIRywdh8.js";import{R as n,a as t}from"./RequirementItem-YCb86BeM.js";import{P as O}from"./Paper-CwNdsz7S.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Ckm6sNnc.js";import"./SynapseConstants-DcSmyvTx.js";import"./OrientationBanner-C5rGFwZK.js";import"./index-aiBum8h8.js";import"./index-kfz2ZdB-.js";import"./iframe-S-VLdJeA.js";import"./spreadSx-CwcO6WA9.js";import"./react--ASatkGJ.js";import"./FullWidthAlert-NU_s7J3j.js";import"./Alert-D-7LpQTg.js";import"./createTheme-Dn7uIOtN.js";import"./DefaultPropsProvider-DBzytOXy.js";import"./useSlot-CZqR668N.js";import"./useForkRef-DKQuVDpI.js";import"./createSimplePaletteValueFilter-Dz0wBtTa.js";import"./createSvgIcon-Cad1TFr7.js";import"./Close-B0xVWneC.js";import"./IconButton-DpCqJSaO.js";import"./useTimeout-DWIQCcxM.js";import"./ButtonBase-B5ksOXiP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C5QfbvCa.js";import"./Stack-D9tmhJmC.js";import"./extendSxProp-YO1I1ALA.js";import"./getThemeProps-DkYfMlon.js";import"./useTheme-B1mLmG-C.js";import"./Box-DI3EuLbF.js";import"./AlertTitle-CZW1Gbb2.js";import"./Typography-4j7jpxFq.js";import"./index-CEaHt5Lb.js";import"./useTheme-BLq1sqBY.js";import"./ClickAwayListener-BM0nmyRh.js";import"./getReactElementRef-CBGuY3hl.js";import"./index-DupY7Nwi.js";import"./index-CQ-HXsIi.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B162psUf.js";import"./Tooltip-nDeXFXq_.js";import"./index-DPt9EKPJ.js";import"./useControlled-RLynzQVM.js";import"./Popper-BNNuxoRs.js";import"./Button-DRDa_84V.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-G1j4ElAQ.js";import"./QueryClientProvider-BwQZVYI7.js";import"./Link-Cxhz8g-e.js";import"./Collapse--jh0di_0.js";import"./_baseUniq-DuGBs6Ey.js";import"./_Uint8Array-BK9HdWap.js";import"./isArray-C1U8f8cy.js";import"./_getTag-B2mdoK9R.js";import"./isEqual-F-Abf1XJ.js";import"./merge-C84YKXYk.js";import"./_initCloneObject-FVaMXRa6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-gfnE55pz.js";import"./inputBaseClasses-CHKy8BeX.js";import"./calculateFriendlyFileSize-DPj0qpOI.js";import"./CheckCircleTwoTone-D-fO6mzc.js";import"./InfoTwoTone-F5_b2YUU.js";import"./useMutation-BJ7GlPUz.js";import"./dayjs.min-CeT-pF_j.js";import"./chunk-AYJ5UCUI-CENv81Bk.js";import"./cloneDeep-D0PQrEBb.js";import"./Skeleton-CLA7uXGO.js";import"./SkeletonButton-BqjMcTaF.js";import"./SkeletonInlineBlock-C4gxD-iU.js";import"./SkeletonTable-QFBQhs_N.js";import"./times-CTwshqSU.js";import"./toInteger-DmSDPf36.js";import"./toNumber-DdiqWtGs.js";import"./isSymbol-B3lpFxsL.js";import"./SkeletonParagraph-CUf33Xzt.js";import"./uniqueId-CwzZ0Pa2.js";import"./toString-CJ4n245T.js";import"./CSSTransition-B-uSz1s4.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DSRwz3dZ.js";import"./Avatar-4ePVi86q.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
