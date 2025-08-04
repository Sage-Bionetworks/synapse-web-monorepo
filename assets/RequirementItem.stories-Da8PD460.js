import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-Cg9Dhl6S.js";import{d as s}from"./ToastMessage-DH8Dt3Rx.js";import{R as n,a as t}from"./RequirementItem-Bs3N6VYF.js";import{P as O}from"./Paper-BIhpz0WW.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CxOJMHxy.js";import"./SynapseConstants-6hqCI_bn.js";import"./OrientationBanner-CDmer2ln.js";import"./index-BPv32WV_.js";import"./index-BQRoB34Y.js";import"./iframe-wFz6NR2i.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAoaUXp-.js";import"./FullWidthAlert-CueNuCtS.js";import"./Alert-6OLHU9q0.js";import"./createTheme-OgACEKFy.js";import"./DefaultPropsProvider-KvTTViBi.js";import"./useSlot-XNf6rMRg.js";import"./useForkRef-DZ26eI5p.js";import"./createSimplePaletteValueFilter-BLrDGAYr.js";import"./createSvgIcon-C4Jsw3SJ.js";import"./Close-DmsMf-HS.js";import"./IconButton-CrpuUTMi.js";import"./useTimeout-CRdyE016.js";import"./ButtonBase-C-cW54jM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_Dt9D69.js";import"./Stack-DiArWIsZ.js";import"./extendSxProp-DCzPJLnO.js";import"./getThemeProps-CzWi-LI4.js";import"./useTheme-D9np60aF.js";import"./Box-B51gNXNQ.js";import"./AlertTitle-BNI9ezyf.js";import"./Typography-CbD70NAW.js";import"./index-D_YDMtQp.js";import"./useTheme-Cpo7V1wB.js";import"./ClickAwayListener-DEiiydM4.js";import"./getReactElementRef-iWBRBLQn.js";import"./index-Q5lQ2Atr.js";import"./index-BZ9OT8gV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CxvW4zE-.js";import"./Tooltip-IUvgeh03.js";import"./index-CrZSqurj.js";import"./useControlled-CRAjcali.js";import"./Popper-B5_jAiJQ.js";import"./Button-BOPJE-r2.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-0UQQQAas.js";import"./QueryClientProvider-C1xpUglu.js";import"./Link-Dap56USK.js";import"./Collapse-CcVUukcz.js";import"./_baseUniq-Db67Ge-V.js";import"./_Uint8Array-CGzJzsDJ.js";import"./isArray-ucl6ZwDA.js";import"./_getTag-DhtB1oE9.js";import"./isEqual-Hq3MHdB0.js";import"./merge-D2JEfvCI.js";import"./_initCloneObject-BuaC84gC.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CfFEceuu.js";import"./inputBaseClasses-BbOv1ZUQ.js";import"./calculateFriendlyFileSize-Bi3iKiOQ.js";import"./CheckCircleTwoTone-aocLlp2y.js";import"./InfoTwoTone-DzU0Aqgl.js";import"./useMutation-Br0kviKt.js";import"./dayjs.min-DxfBWlmU.js";import"./chunk-AYJ5UCUI-CBByD3Sp.js";import"./cloneDeep-neqlse2g.js";import"./Skeleton-DyhXsoKf.js";import"./SkeletonButton-kMCVEljL.js";import"./SkeletonInlineBlock-kCdLMpS7.js";import"./SkeletonTable-BscMMc76.js";import"./times-Bgjatu5S.js";import"./toInteger-DRt6-cli.js";import"./toNumber-Cii4jcKA.js";import"./isSymbol-DLYTi79N.js";import"./SkeletonParagraph-Bg6nEu3c.js";import"./uniqueId-BsHKHNHD.js";import"./toString-GptfkcV4.js";import"./CSSTransition-I1tt0Jr9.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-xNz7DM7w.js";import"./Avatar-CP_1mVuj.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
