import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-2yyEWXk7.js";import{d as s}from"./ToastMessage-zBtUyLkG.js";import{R as n,a as t}from"./RequirementItem-DBHQ4R-T.js";import{P as O}from"./Paper-C-MxAE3X.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CabKz2BX.js";import"./SynapseConstants-s7AVu6sL.js";import"./OrientationBanner-BK2mf2Th.js";import"./index-XnoiuBUV.js";import"./index-Bclfwf2c.js";import"./iframe-BwmT6DnA.js";import"./spreadSx-CwcO6WA9.js";import"./react-D0WT0Cnf.js";import"./FullWidthAlert-Cg_Edw0M.js";import"./Alert-DsoayRUU.js";import"./createTheme-CzZhU4mT.js";import"./DefaultPropsProvider-Cw6x8ixs.js";import"./useSlot--qVLG9rV.js";import"./useForkRef-DrhSOHJn.js";import"./createSimplePaletteValueFilter-CHJUaE6s.js";import"./createSvgIcon-Bbg0YSe_.js";import"./Close-CTF-FaFj.js";import"./IconButton-C2yfwCnc.js";import"./useTimeout-DQRToeqs.js";import"./ButtonBase-BanSt4k6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eGIE85BV.js";import"./Stack-B8lUTm_5.js";import"./useThemeProps-BkMB52f-.js";import"./getThemeProps-BgWx5ja4.js";import"./useTheme-B2qwNNbc.js";import"./extendSxProp-Cy_w0M7c.js";import"./Box-Dif21-Ta.js";import"./AlertTitle-Xjxp6dYf.js";import"./Typography-CR9HyBtT.js";import"./index-_J9zFtLw.js";import"./useTheme-DBez2_uP.js";import"./ClickAwayListener-BQ-icjcb.js";import"./getReactElementRef-rMJwrBoh.js";import"./index-Wtgxe081.js";import"./index-DfrTKupj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-AhBpZALS.js";import"./Tooltip-BcHs3bh9.js";import"./index-CFBjFAlj.js";import"./useControlled-sVn0qm5_.js";import"./Popper-CqTlDTef.js";import"./Button-CMsK5jkJ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B9rRePvy.js";import"./QueryClientProvider-Dc7Y7gmt.js";import"./Link-DpQKU4aY.js";import"./Collapse-CvW24kl2.js";import"./_baseUniq-X4u6lSY4.js";import"./_Uint8Array-C8WR35dk.js";import"./isArray-Bjvy55fd.js";import"./_getTag-DMyVPIGy.js";import"./isEqual-CBygoy8c.js";import"./noop-DX6rZLP_.js";import"./merge-D_9vdqan.js";import"./_initCloneObject-DFlTj-VM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2NLaioE.js";import"./inputBaseClasses-CS9kB3iA.js";import"./calculateFriendlyFileSize-Cz7skY0R.js";import"./CheckCircleTwoTone-Dsau-jpM.js";import"./InfoTwoTone-B7Emrovp.js";import"./useMutation-DmB6IlS-.js";import"./dayjs.min-BYIiwRKv.js";import"./chunk-AYJ5UCUI-DdNkrdCt.js";import"./cloneDeep-Cr5aOjXu.js";import"./Skeleton-CsmpLdqI.js";import"./SkeletonButton-ChLWta4G.js";import"./SkeletonInlineBlock-Bj_nSxoS.js";import"./SkeletonTable-BFB2PN0p.js";import"./times-ByfnELeL.js";import"./toInteger-MMr5JLvD.js";import"./isSymbol-D-ezxYA9.js";import"./SkeletonParagraph-DWuTwbia.js";import"./uniqueId-Cej-QUp6.js";import"./toString-DqKwb9Lr.js";import"./CSSTransition-u2_j3GCw.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Id_KxzBh.js";import"./Avatar-BQG4d7AB.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
