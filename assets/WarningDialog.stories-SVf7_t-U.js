import{j as o}from"./iframe-BPNyJNxm.js";import{W as r}from"./WarningDialog-BvuWHwa6.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-BpyGFD_j.js";import"./DialogBase-DSrJGPMK.js";import"./Close-wqX4il5f.js";import"./HelpPopover-cbCWQpx5.js";import"./MarkdownPopover-DYWWH0E2.js";import"./LightTooltip-D69z1M63.js";import"./MarkdownSynapse-D3aSYsDm.js";import"./SkeletonButton-DKmXtnFb.js";import"./SkeletonInlineBlock-YVxGd7KG.js";import"./SkeletonTable-DBeYWS70.js";import"./SkeletonParagraph-BxBZJF2o.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
