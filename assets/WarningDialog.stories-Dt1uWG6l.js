import{j as o}from"./iframe-D5fi-UCI.js";import{W as r}from"./WarningDialog-BFxMA771.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-8rzP4g0a.js";import"./DialogBase-xIV-zqs7.js";import"./Close-BMHbbE_Q.js";import"./HelpPopover-BWSi51uC.js";import"./MarkdownPopover-D-5Kyx4k.js";import"./LightTooltip-DaJf-vKS.js";import"./MarkdownSynapse-BtPA8Eyc.js";import"./SkeletonButton-NAUvRsI1.js";import"./SkeletonInlineBlock-C_oItAmZ.js";import"./SkeletonTable-BVeoay1H.js";import"./SkeletonParagraph-DOydOX8X.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Approve Request',
    content: 'Are you sure you want to approve this request?',
    onConfirmCallbackArgs: []
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Demo.args,
    title: 'Confirm Deletion',
    confirmButtonText: 'Delete Token',
    confirmButtonColor: 'error',
    content: <>
        <p>
          If you delete this token, any applications using it will stop working.
          This action cannot be undone.
        </p>
        <p className="SRC-boldText">
          Are you sure you want to delete this token?
        </p>
      </>
  }
}`,...t.parameters?.docs?.source}}};const D=["Demo","AccessTokenCardWarningDialog"];export{t as AccessTokenCardWarningDialog,e as Demo,D as __namedExportsOrder,y as default};
