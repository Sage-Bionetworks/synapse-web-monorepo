import{j as a}from"./jsx-runtime-BotgeFwT.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-B3vtHfsh.js";import{d as s}from"./ToastMessage-D9TnfBR-.js";import{R as n,a as t}from"./RequirementItem-BcPQHPED.js";import{P as O}from"./Paper-B7_Z-2Tf.js";import"./index-BmHOuB5_.js";import"./iframe-DmkXVs35.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-YWmmbZpp.js";import"./SynapseConstants-CnrTnmux.js";import"./OrientationBanner-npM_DAfi.js";import"./index-BJgwkqhp.js";import"./spreadSx-CwcO6WA9.js";import"./react-aMpCzbk9.js";import"./FullWidthAlert-DjX9Mevx.js";import"./Alert-BLpP3v3-.js";import"./createTheme-Dc38ti7g.js";import"./resolveComponentProps-DrsR2GgO.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-88GE3SiY.js";import"./createSvgIcon-C_8Qv0R-.js";import"./DefaultPropsProvider-DEc5OxJn.js";import"./Close-6gD9trmr.js";import"./IconButton-kd3QgWK8.js";import"./ButtonBase-B52ubW7h.js";import"./useTimeout-BOP_xpZf.js";import"./TransitionGroupContext-BqBTwtnY.js";import"./useIsFocusVisible-TkDIjfto.js";import"./useEventCallback-CjAGHQTa.js";import"./Stack-BFmS--Ta.js";import"./getThemeProps-n6ESmhoJ.js";import"./useTheme-DExkflWm.js";import"./Box-XMBgXLk7.js";import"./AlertTitle-BPtjEeV0.js";import"./Typography-D37JOTkb.js";import"./useTheme-CbDAVqIb.js";import"./Grow-DtJN852e.js";import"./index-DhnVKWT6.js";import"./utils-CYEEhIBi.js";import"./ClickAwayListener-ERiY_cle.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DBTVbtNi.js";import"./index-BAuhL-tv.js";import"./useControlled-BNPn1a16.js";import"./useId-v77cI_FZ.js";import"./Popper-CdSbBsOI.js";import"./Button-VHXrIHUx.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-Csyq51Xr.js";import"./utils-PqR9SzMK.js";import"./Link-DvEm6E_0.js";import"./Collapse-CMoxLgNk.js";import"./isNil-D9M1sZm8.js";import"./_Uint8Array-CGacEQoi.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWYzZSfP.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DFrETrYV.js";import"./_getTag-CopO-oHq.js";import"./tinycolor-Begke6kS.js";import"./Fade-QisYz2mh.js";import"./Skeleton-_Who98MO.js";import"./inputBaseClasses-DCAmaP-g.js";import"./calculateFriendlyFileSize-BJC9cAcp.js";import"./CheckCircleTwoTone-98ZzfJ5I.js";import"./InfoTwoTone-CB73o47l.js";import"./mutation-BijGxgKZ.js";import"./dayjs.min-Bb5G5LaH.js";import"./chunk-AYJ5UCUI-CmA7Kmoy.js";import"./cloneDeep-BTdt0L8H.js";import"./_initCloneObject-BV2YsZzp.js";import"./isEqual-CY8rJ0kx.js";import"./merge-selKAKi3.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DHvCiuXj.js";import"./SkeletonInlineBlock-D2OeqMB6.js";import"./SkeletonTable-DSRBUUd4.js";import"./times-Bc7_9mOU.js";import"./toInteger-DjXm62Ax.js";import"./isSymbol-B9gLo0gN.js";import"./SkeletonParagraph-dO_VX218.js";import"./uniqueId-C8M0zGKe.js";import"./toString-CADLfgD7.js";import"./CSSTransition-BkpWn6mf.js";import"./ConditionalWrapper-B4b_n_JS.js";import"./LockTwoTone-Cn5tkJ-P.js";import"./Avatar-D5XqTyh_.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
