import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-10ReFeN4.js";import{d as s}from"./ToastMessage-DVZU4JBa.js";import{R as n,a as t}from"./RequirementItem-GyPXuKyz.js";import{P as O}from"./Paper-DcnJEfW5.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Ef0oneNy.js";import"./SynapseConstants-BB0gB5B7.js";import"./OrientationBanner-DqcE34N4.js";import"./index-DZPFWSyF.js";import"./index-C0YALZQz.js";import"./iframe-C4ix3hWR.js";import"./spreadSx-CwcO6WA9.js";import"./react-C3CXrV37.js";import"./FullWidthAlert-rW1wVqb8.js";import"./Alert-Bb7a67Ce.js";import"./createTheme-C9Yd5-wm.js";import"./DefaultPropsProvider-BaeKOKQ6.js";import"./useSlot-dvUBOlYM.js";import"./useForkRef-BIB30eql.js";import"./createSimplePaletteValueFilter-Dhw4lf7H.js";import"./createSvgIcon-Dvlo-p3N.js";import"./Close-CM6q2e7n.js";import"./IconButton-BV4SsEJa.js";import"./useTimeout-CAkteiZD.js";import"./ButtonBase-DH9Ov36O.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-2GLfT7Hs.js";import"./Stack-CKeJ5axq.js";import"./extendSxProp-Bm1yDns3.js";import"./getThemeProps-DNL-t9j-.js";import"./useTheme-BMHAz49G.js";import"./Box-ChNzIem_.js";import"./AlertTitle-CvlcKp51.js";import"./Typography-Dkw7b_5d.js";import"./index-D96GLD0m.js";import"./useTheme-7IS2TKwD.js";import"./ClickAwayListener-CSXPHlBT.js";import"./getReactElementRef-CDLdFmX1.js";import"./index-HfouNIaw.js";import"./index-BAarkWvg.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CvjOcJ_V.js";import"./Tooltip-BMzFZUM0.js";import"./index-Ck0HNX7_.js";import"./useControlled-CsPICl5Q.js";import"./Popper-ySgvMYOx.js";import"./Button-CKtQREg-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-CiMHuQSW.js";import"./QueryClientProvider-P2ZJzewi.js";import"./Link-CUpi234w.js";import"./Collapse-BUARP0av.js";import"./_baseUniq-DoCrQ_-f.js";import"./_Uint8Array-sWmVj1m7.js";import"./isArray-ytjrkkJI.js";import"./_getTag-CFeNUIWp.js";import"./isEqual-CYc3xBpk.js";import"./merge-Czk3qD9O.js";import"./_initCloneObject-bRjdrz6V.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWId73Dt.js";import"./inputBaseClasses-rBiWWOSB.js";import"./calculateFriendlyFileSize-Daa-sKbB.js";import"./CheckCircleTwoTone-CZzNVvfI.js";import"./InfoTwoTone-BJRcyr42.js";import"./useMutation-2tBDrWOY.js";import"./dayjs.min-D6d06RXv.js";import"./chunk-AYJ5UCUI-C8yCxPut.js";import"./cloneDeep-D50FkvFh.js";import"./Skeleton-C3PZrg9q.js";import"./SkeletonButton-c_RblRuN.js";import"./SkeletonInlineBlock-BVTAIM4j.js";import"./SkeletonTable-DyurC3hR.js";import"./times-Ba0qCTK-.js";import"./toInteger-CvwSi6Pj.js";import"./toNumber-eJTPDU5k.js";import"./isSymbol-vms_p5JZ.js";import"./SkeletonParagraph-Cj-DM6F1.js";import"./uniqueId-CFMK5psZ.js";import"./toString-BvT8LWHb.js";import"./CSSTransition-CVmut3bU.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CquT__8x.js";import"./Avatar-DMFN4rGS.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
