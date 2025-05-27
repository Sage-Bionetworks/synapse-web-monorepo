import{j as a}from"./jsx-runtime-BK5U4Ogm.js";import{m as P}from"./mockWiki-DHj13qiO.js";import{M as x}from"./MarkdownSynapse-CP01qzTk.js";import{d as s}from"./ToastMessage-cGAvI4V4.js";import{R as n,a as t}from"./RequirementItem-v_ICWuQt.js";import{P as O}from"./Paper-CE1mL2qJ.js";import"./index-Di6pL9sS.js";import"./iframe-BcMO-NRu.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-DS_yjaGE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./useFiles-CEIeiagI.js";import"./SynapseConstants-zKFIzren.js";import"./OrientationBanner-Dd3gjuUa.js";import"./index-B46zhNA6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJTyKqpK.js";import"./FullWidthAlert-CErQ6Muc.js";import"./Alert-HUDZRYOW.js";import"./createTheme-Cp4i8P3j.js";import"./resolveComponentProps-BcPJL9MH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CDRx8QSv.js";import"./createSvgIcon-6f5z08nh.js";import"./DefaultPropsProvider-jCgqZX_L.js";import"./Close-D3QPaLjh.js";import"./IconButton-C0uO2agS.js";import"./ButtonBase-CBxmSsKP.js";import"./useTimeout-Bk2aBz7o.js";import"./TransitionGroupContext-D2Egnh2Q.js";import"./useIsFocusVisible-Dwuhnw_i.js";import"./useEventCallback-pwXQXOzV.js";import"./Stack-BWSA6lgs.js";import"./getThemeProps-Dfs0VSTM.js";import"./useTheme-6ADmrWxD.js";import"./Box-CgFRiWSE.js";import"./AlertTitle-COi1QU0e.js";import"./Typography-DdVpYyJT.js";import"./useTheme-BJOxI8Pz.js";import"./Grow-BJi-xmc6.js";import"./index-BlWCVmXL.js";import"./utils-Bm34yggg.js";import"./ClickAwayListener-Bzi36C9_.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BGdElWBC.js";import"./index-UlGlXuF6.js";import"./useControlled-ctFy0C0l.js";import"./useId-Kr4560Rl.js";import"./Popper-C7mrmf4N.js";import"./Button-CS3Qxzkw.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-Bp4ICN7A.js";import"./utils-T3gzeC7B.js";import"./Link-DCsN9Cs6.js";import"./Collapse-S9FTNTmT.js";import"./isNil-BZDfliEp.js";import"./_Uint8Array-DGhKdq-D.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-uDeW5XEe.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-4Tr9waQ7.js";import"./_getTag-BrZ1c84X.js";import"./tinycolor-Begke6kS.js";import"./Fade-CHZVGOkF.js";import"./Skeleton-GFVDgsi6.js";import"./inputBaseClasses-Dy6ALZto.js";import"./calculateFriendlyFileSize-rchZGA0L.js";import"./CheckCircleTwoTone-CoVF2IX7.js";import"./InfoTwoTone-Cv6-lHeT.js";import"./mutation-CGeFCzcu.js";import"./dayjs.min-C22uDXZr.js";import"./chunk-AYJ5UCUI-tVdleHmn.js";import"./cloneDeep-DvV4HJnE.js";import"./_initCloneObject-DVxuy2j7.js";import"./isEqual-D21U_Xmz.js";import"./merge-4Yp0APiD.js";import"./identity-DKeuBCMA.js";import"./useMutation--wrYgfEN.js";import"./SkeletonButton-ETrZReht.js";import"./SkeletonInlineBlock-DzHFfK7H.js";import"./SkeletonTable-D2QpQITf.js";import"./times-CNi-HedE.js";import"./toInteger-Cl49Tuw_.js";import"./isSymbol-yfk4cHuf.js";import"./SkeletonParagraph-DH0l2XC1.js";import"./uniqueId-DxyV27yy.js";import"./toString-DfeI3u70.js";import"./CSSTransition-Dg1p_5Pn.js";import"./ConditionalWrapper-Ey-DGWm8.js";import"./LockTwoTone-XBIpDL78.js";import"./Avatar-BxgOuh9I.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
