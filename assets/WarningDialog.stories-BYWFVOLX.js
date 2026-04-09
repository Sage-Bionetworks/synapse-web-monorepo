import{j as o}from"./iframe-CtlQt718.js";import{W as r}from"./WarningDialog-YHk4rNc7.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-Dh4tlHv0.js";import"./DialogBase-DOt-OwDb.js";import"./Close-DmDKZefQ.js";import"./HelpPopover-Gion91DD.js";import"./MarkdownPopover-CoOreYFS.js";import"./LightTooltip-D8qugsOL.js";import"./MarkdownSynapse-BuD1xjPB.js";import"./SkeletonButton-i4oTWqaB.js";import"./SkeletonInlineBlock-BaHv_pCV.js";import"./SkeletonTable-DCMQwvPd.js";import"./SkeletonParagraph-CUgZcOgo.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
