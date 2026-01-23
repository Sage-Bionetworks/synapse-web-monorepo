import{j as o}from"./iframe-CJi55ERg.js";import{W as r}from"./WarningDialog-DS9Plk21.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-CU4MVSU0.js";import"./DialogBase-CCRQ-36d.js";import"./Close-DflrR1-c.js";import"./HelpPopover-DfyusZY4.js";import"./MarkdownPopover-CLq6_7WL.js";import"./LightTooltip-CSyKoV_S.js";import"./MarkdownSynapse-CFDbt1Xl.js";import"./SkeletonButton-Dh0pWoWT.js";import"./SkeletonInlineBlock-d0W0oi9e.js";import"./SkeletonTable-DqghlvE9.js";import"./SkeletonParagraph-Bn6jXz5y.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
