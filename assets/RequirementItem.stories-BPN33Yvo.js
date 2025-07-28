import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DuHf-Sa4.js";import{d as s}from"./ToastMessage-CXqLjf-O.js";import{R as n,a as t}from"./RequirementItem-DoU3ApMi.js";import{P as O}from"./Paper-dEu7GI1r.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CtgEiROS.js";import"./SynapseConstants-bBupfCM8.js";import"./OrientationBanner-C02Ezp0s.js";import"./index-dHbq5h8e.js";import"./index-KaSV3nxb.js";import"./iframe-D455rrf1.js";import"./spreadSx-CwcO6WA9.js";import"./react-KO81pmn7.js";import"./FullWidthAlert-C14WkgZk.js";import"./Alert-BDuCqUUc.js";import"./createTheme-evDlL3tt.js";import"./DefaultPropsProvider-DrNBcXXQ.js";import"./useSlot-yBXRP7_D.js";import"./useForkRef-B8skBpaV.js";import"./createSimplePaletteValueFilter-B1culQvw.js";import"./createSvgIcon-6DVaclPw.js";import"./Close-By82YC8m.js";import"./IconButton-CWqZDo4J.js";import"./useTimeout-lz-uLYOA.js";import"./ButtonBase-DRv0hiiu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-48ZpGVKP.js";import"./Stack-PMu1NGUe.js";import"./extendSxProp-DwLfw96r.js";import"./getThemeProps-C-O7WJp_.js";import"./useTheme-BCMwdMbd.js";import"./Box-CRbhVnlV.js";import"./AlertTitle-CZoD2w5Z.js";import"./Typography-Bk-AszFU.js";import"./index-BvVG-plJ.js";import"./useTheme-B4rv5YxA.js";import"./ClickAwayListener-CTEu3fxQ.js";import"./getReactElementRef-wDPDJbBg.js";import"./index-9Qpkx4-D.js";import"./index-BtQspmhu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DOHJ0UfU.js";import"./Tooltip-lzdGbRE6.js";import"./index-OfrLzeXC.js";import"./useControlled-DmzsjcsV.js";import"./Popper-C3MzpXRp.js";import"./Button-B6yRBS2t.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-BMLJoLVv.js";import"./QueryClientProvider-Cm7OSrr4.js";import"./Link-BVHVpgxs.js";import"./Collapse-DvtbyHkB.js";import"./_baseUniq-DUdi9Ryb.js";import"./_Uint8Array-CH9yNi5j.js";import"./isArray-BFWzysCy.js";import"./_getTag-Lw4aRybk.js";import"./isEqual-BXcpFp8L.js";import"./merge-DRr0c7e9.js";import"./_initCloneObject-CBz3WljI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-SH6uo9Lr.js";import"./inputBaseClasses-8PUzMCEX.js";import"./calculateFriendlyFileSize-CoKK4VEv.js";import"./CheckCircleTwoTone-DYr3bfPY.js";import"./InfoTwoTone-CwOnlRqp.js";import"./useMutation-C2Mhl8Cc.js";import"./dayjs.min-j-8skdhP.js";import"./chunk-AYJ5UCUI-CkzzKRIT.js";import"./cloneDeep-CkMf9K4t.js";import"./Skeleton-DO7qEF74.js";import"./SkeletonButton-DrluRAkX.js";import"./SkeletonInlineBlock-ioekR0F6.js";import"./SkeletonTable-DkOCTDxl.js";import"./times-CdS5HfmW.js";import"./toInteger-CVymFRxK.js";import"./toNumber-DvkmXyIl.js";import"./isSymbol-DCMv-Itg.js";import"./SkeletonParagraph-Dn7vZCpu.js";import"./uniqueId-B3UuqTSb.js";import"./toString--sQ6kiAB.js";import"./CSSTransition-BshIGq9l.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CfYhYZvj.js";import"./Avatar-nQccZaSV.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
