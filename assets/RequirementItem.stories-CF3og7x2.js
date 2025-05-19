import{j as a}from"./jsx-runtime-CUNTCE37.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-Bf3Hfj-d.js";import{d as s}from"./ToastMessage-8KUS1XiG.js";import{R as n,a as t}from"./RequirementItem-BAAsbC_a.js";import{P as O}from"./Paper-C468jb6w.js";import"./index-iwduSq60.js";import"./iframe-C20v7OTK.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-CXziUBBk.js";import"./SynapseConstants-Cjwg7_uO.js";import"./OrientationBanner-DVC-9Eoc.js";import"./index-DrGL5Z6h.js";import"./spreadSx-CwcO6WA9.js";import"./react-BHuDLgyy.js";import"./FullWidthAlert-De1OStOb.js";import"./Alert-Dx1Z4kwv.js";import"./createTheme-cbFkRPvu.js";import"./resolveComponentProps-sWNv9AD3.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B6qEDlfe.js";import"./createSvgIcon-DmVeL3l0.js";import"./DefaultPropsProvider-B-PYyZlm.js";import"./Close-BUEGeIV1.js";import"./IconButton-frjP_Efe.js";import"./ButtonBase-BrOL7gGJ.js";import"./useTimeout-C3h3mG7S.js";import"./TransitionGroupContext-o00riV6l.js";import"./useIsFocusVisible-u8aLHlah.js";import"./useEventCallback-CPv-PfNW.js";import"./Stack-hux_BLUA.js";import"./getThemeProps-PcWr3yTI.js";import"./useTheme-B9l0cioF.js";import"./Box-iBYOIJJh.js";import"./AlertTitle-BcDXofxw.js";import"./Typography-iNw74tXo.js";import"./useTheme-B9obp0jV.js";import"./Grow-Di3YNtHT.js";import"./index-08h1k3rT.js";import"./utils-l3nTcCRT.js";import"./ClickAwayListener-BwaqJqmk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CJIzasCr.js";import"./index-CO9B5BSx.js";import"./useControlled-BK1ZS50s.js";import"./useId-B_jteS8E.js";import"./Popper-CGefBYUp.js";import"./Button-Cew0p3xf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-CvCohokr.js";import"./utils-D2MpK3mA.js";import"./Link-DidmzCYQ.js";import"./Collapse-krv0lCh4.js";import"./isNil-G1VRTy0g.js";import"./_Uint8Array-D9ObtfO1.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DT3TzfLw.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DnjdWqDr.js";import"./_getTag-C7xJJ-SW.js";import"./tinycolor-Begke6kS.js";import"./Fade-2dK6sQpn.js";import"./Skeleton-CSwpW9Og.js";import"./inputBaseClasses-lMdWkQYH.js";import"./calculateFriendlyFileSize-CLdbY7DA.js";import"./CheckCircleTwoTone-CeiR3Sbp.js";import"./InfoTwoTone-BhrV1Jbi.js";import"./mutation-BEG6eulq.js";import"./dayjs.min-C4wwLUbt.js";import"./chunk-AYJ5UCUI-brQ4jQk2.js";import"./cloneDeep-BgTSkX-U.js";import"./_initCloneObject-DG7zrIU5.js";import"./isEqual-BQr9gFrf.js";import"./merge-uXuCjRdd.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BBdGtSp9.js";import"./SkeletonInlineBlock-DMhLGskz.js";import"./SkeletonTable-XVwOdhwB.js";import"./times-5LA6YEbn.js";import"./toInteger-DaNlToTZ.js";import"./isSymbol-Dh3PThA0.js";import"./SkeletonParagraph-D4WYiEP8.js";import"./uniqueId-Bs0Q2gT7.js";import"./toString-Dp4fmWBD.js";import"./CSSTransition-DN8cOtqc.js";import"./ConditionalWrapper-C7LfSMCc.js";import"./LockTwoTone-D_0P62UE.js";import"./Avatar-C7BWDoTq.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
