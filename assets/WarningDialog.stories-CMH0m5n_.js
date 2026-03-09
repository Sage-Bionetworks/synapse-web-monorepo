import{j as o}from"./iframe-CCrcZxgU.js";import{W as r}from"./WarningDialog-BYL5rTCj.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-D414-GDQ.js";import"./DialogBase-CeubuD3-.js";import"./Close-CM4W6Pks.js";import"./HelpPopover-BR72KBQJ.js";import"./MarkdownPopover-BZ4yirLT.js";import"./LightTooltip-BQGvE2MH.js";import"./MarkdownSynapse-FC1rcF9v.js";import"./SkeletonButton-BtsVrZX-.js";import"./SkeletonInlineBlock-D21wux6D.js";import"./SkeletonTable-Ba707JDB.js";import"./SkeletonParagraph--DCUjqtN.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
