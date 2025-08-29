import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-CCEUdOgx.js";import{d as s}from"./ToastMessage-Dl09pHTr.js";import{R as n,a as t}from"./RequirementItem-CjBTi8lA.js";import{P as O}from"./Paper-Dt5MOLDV.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-GM08LsrG.js";import"./SynapseConstants-CQGbYJZY.js";import"./OrientationBanner-D9LH13fs.js";import"./index-CJBSyepz.js";import"./index-Dv-Auh_6.js";import"./iframe-C98LgnIh.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYEz1WY0.js";import"./FullWidthAlert-BQo4TeQt.js";import"./Alert-f48QNb2h.js";import"./createTheme-CmQ7L9FI.js";import"./DefaultPropsProvider-D7UrraQT.js";import"./useSlot-D-57qVPr.js";import"./useForkRef-aUOfydcE.js";import"./createSimplePaletteValueFilter-MBB8wY7q.js";import"./createSvgIcon-BLEghBNK.js";import"./Close-BYXn6ehd.js";import"./IconButton-CFgYDnd0.js";import"./useTimeout-CrbDv4W6.js";import"./ButtonBase-A9zHO6bs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rsYMJ3_V.js";import"./Stack-BrVSW58k.js";import"./extendSxProp-DgwqkoGF.js";import"./getThemeProps-CzMOA3dK.js";import"./useTheme-B0hF4srd.js";import"./Box-CuUhZXQS.js";import"./AlertTitle-DjtviQhk.js";import"./Typography-CVtis2FJ.js";import"./index-CCjom-eT.js";import"./useTheme-BRwJ2BiM.js";import"./ClickAwayListener-BscEfLN0.js";import"./getReactElementRef-DaUzJele.js";import"./index-0Ntr3xje.js";import"./index-DH8ZwtL1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BI3-bs-0.js";import"./Tooltip-BRjr85jo.js";import"./index-DQyNv6H4.js";import"./useControlled-BPUCCY57.js";import"./Popper-CXdg4K-k.js";import"./Button-HugWKABJ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-BnV8m8MS.js";import"./QueryClientProvider-C8vVXgYp.js";import"./Link-CrDU1RWE.js";import"./Collapse-B_GDzTTw.js";import"./_baseUniq-CqX7G2j0.js";import"./_Uint8Array-B1GgWYrH.js";import"./isArray-CjLdZUWa.js";import"./_getTag-o-5Eopw1.js";import"./isEqual-nclDIja9.js";import"./merge-BX7tbRVV.js";import"./_initCloneObject-iMbuWMMe.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C0IATwVZ.js";import"./inputBaseClasses-CROUrq90.js";import"./calculateFriendlyFileSize-0imf3u_G.js";import"./CheckCircleTwoTone--JEdlD7D.js";import"./InfoTwoTone-BVVUUJao.js";import"./useMutation-DuSiyCX7.js";import"./dayjs.min-Bo9-7NDX.js";import"./chunk-AYJ5UCUI-FxR7alk-.js";import"./cloneDeep-B_QLLDkA.js";import"./Skeleton-C2rRnGCD.js";import"./SkeletonButton-DK56isUm.js";import"./SkeletonInlineBlock-BinR0KFv.js";import"./SkeletonTable-VIE-Blx7.js";import"./times-CQM6hN1x.js";import"./toInteger-C6c1t912.js";import"./isSymbol-73O3xJHn.js";import"./SkeletonParagraph-DsjECyO_.js";import"./uniqueId-DJGqX-7m.js";import"./toString-DIVcxT2f.js";import"./CSSTransition-BW6pWE6Q.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-qwurnIUx.js";import"./Avatar-xzXmr36T.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
