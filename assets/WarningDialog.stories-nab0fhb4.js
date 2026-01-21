import{j as o}from"./iframe-BVXHJH4u.js";import{W as r}from"./WarningDialog-DhfhRmm-.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-Dd8pw4WU.js";import"./DialogBase-CcwXDs7D.js";import"./Close-CqljNwDC.js";import"./HelpPopover-BbvqYo6O.js";import"./MarkdownPopover-BAO6UTFT.js";import"./LightTooltip-Ds1uGQMo.js";import"./MarkdownSynapse-C6WRwt-e.js";import"./SkeletonButton-B31ULBiJ.js";import"./SkeletonInlineBlock-DtRriEan.js";import"./SkeletonTable-DQbZ0dw9.js";import"./SkeletonParagraph-CPzN7Agp.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
