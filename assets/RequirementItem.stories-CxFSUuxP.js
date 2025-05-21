import{j as a}from"./jsx-runtime-CmUBiTSS.js";import{m as P}from"./mockWiki-CZdZHQnO.js";import{M as x}from"./MarkdownSynapse-CxoQsrlL.js";import{d as s}from"./ToastMessage-DHKSsE4c.js";import{R as n,a as t}from"./RequirementItem-StXukRWk.js";import{P as O}from"./Paper-C5IK7UQQ.js";import"./index-B2mmVxOD.js";import"./iframe-DsjoRgeV.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-Ct1MSfYs.js";import"./VerificationSubmission-B0kBNeMy.js";import"./useFiles-CvqXu3qP.js";import"./SynapseConstants-BlsqOTHC.js";import"./OrientationBanner-2QI37Wfz.js";import"./index-D5VFXiz7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C4gcExyr.js";import"./FullWidthAlert-BvgWiVQR.js";import"./Alert-B-cn8V0o.js";import"./createTheme-BYqAVevx.js";import"./resolveComponentProps-DIVgucYq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B7GgJKmZ.js";import"./createSvgIcon-CXv11Dc8.js";import"./DefaultPropsProvider-HrPDOaQj.js";import"./Close-8Hs4OiKc.js";import"./IconButton-C2H3UkEd.js";import"./ButtonBase-Ba5_fvQa.js";import"./useTimeout-DfID44yi.js";import"./TransitionGroupContext-CNQWmoPq.js";import"./useIsFocusVisible-DNP6iLGB.js";import"./useEventCallback-DTUVY-xC.js";import"./Stack-nY20Dr3r.js";import"./getThemeProps-eRGJN_py.js";import"./useTheme-GMYttHBr.js";import"./Box-B5_L4GWb.js";import"./AlertTitle-CjTD5uFs.js";import"./Typography-BM-M-p3D.js";import"./useTheme-DODxR0TP.js";import"./Grow-CLzqoJXl.js";import"./index-DILzB3oy.js";import"./utils-Co3IOaXm.js";import"./ClickAwayListener-C2W41t9R.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D8GA7O7E.js";import"./index-B1J7WTRX.js";import"./useControlled-B2db4EWk.js";import"./useId-B2N2XShu.js";import"./Popper-CBcXCHhQ.js";import"./Button-MnbgKpIJ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-Bx5eY2jj.js";import"./utils-DKTCckgQ.js";import"./Link-C7sf-qNT.js";import"./Collapse-beDlu7I0.js";import"./isNil-CZYLZObm.js";import"./_Uint8Array-BgOhq7U8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DP5A2EKp.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DA4b58eN.js";import"./_getTag-DQ9vJk3b.js";import"./tinycolor-Begke6kS.js";import"./Fade-DFW6SVXN.js";import"./Skeleton--p_DRxXi.js";import"./inputBaseClasses-DiOO8wJ9.js";import"./calculateFriendlyFileSize-DSmqR10B.js";import"./CheckCircleTwoTone-DoCCywjP.js";import"./InfoTwoTone-ZuwsmNOx.js";import"./mutation-BIqmHUfI.js";import"./dayjs.min-Due_NQNo.js";import"./chunk-AYJ5UCUI-BafslQL4.js";import"./cloneDeep-w5MjdiAW.js";import"./_initCloneObject-DiF2uFhN.js";import"./isEqual-BohAHrtr.js";import"./merge-BKjEj6FU.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-qf1roUqK.js";import"./SkeletonInlineBlock-FTQSFqiF.js";import"./SkeletonTable-Dr01XARY.js";import"./times-CPC6xvmp.js";import"./toInteger-D1qWWQGl.js";import"./isSymbol-jhg71ZvJ.js";import"./SkeletonParagraph-CZDAN-o-.js";import"./uniqueId-BxhAah8S.js";import"./toString-BkYqruvC.js";import"./CSSTransition-CrVi9W31.js";import"./ConditionalWrapper-jDrVRkrO.js";import"./LockTwoTone-D4T--2Cw.js";import"./Avatar-DJWtdHbQ.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
