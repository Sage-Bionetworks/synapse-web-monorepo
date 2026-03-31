import{j as o}from"./iframe-DI5oOWnE.js";import{W as r}from"./WarningDialog-DrzN3iu6.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-Bhb-7VQY.js";import"./DialogBase-Jgs4FWnV.js";import"./Close-B-CGi6eH.js";import"./HelpPopover-2ce9FsNc.js";import"./MarkdownPopover-D05MpzJD.js";import"./LightTooltip-BEWvn8Re.js";import"./MarkdownSynapse-Dgvqt2C_.js";import"./SkeletonButton-CwiRfCnX.js";import"./SkeletonInlineBlock-5UtZsnHV.js";import"./SkeletonTable-h5dOlVIm.js";import"./SkeletonParagraph-JG7mPZxB.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
