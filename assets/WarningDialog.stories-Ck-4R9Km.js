import{j as o}from"./iframe-C1Apx41K.js";import{W as r}from"./WarningDialog-B-7islS2.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-BvosZqG2.js";import"./DialogBase-D25MustV.js";import"./Close-BYfoF0T4.js";import"./HelpPopover-B8LQHL_b.js";import"./MarkdownPopover-DHmJN8ko.js";import"./LightTooltip-Dd6uBPZU.js";import"./MarkdownSynapse-CjERrYjm.js";import"./SkeletonButton-D8PmJqDh.js";import"./SkeletonInlineBlock-CfPdCjit.js";import"./SkeletonTable-4nPmJRNn.js";import"./SkeletonParagraph-D2VtG1zT.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
