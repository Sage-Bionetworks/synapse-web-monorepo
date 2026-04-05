import{j as o}from"./iframe-b13k1F7I.js";import{W as r}from"./WarningDialog-CYACOv88.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-DlQ1ryI4.js";import"./DialogBase-UKhXgfvV.js";import"./Close-BXhjNoKM.js";import"./HelpPopover-DLt1mKAE.js";import"./MarkdownPopover-HHq_PWe6.js";import"./LightTooltip-C-QkzhbA.js";import"./MarkdownSynapse-DgVHOn26.js";import"./SkeletonButton-DVR5pv_e.js";import"./SkeletonInlineBlock-DRQHTWc8.js";import"./SkeletonTable-DL4vBEzw.js";import"./SkeletonParagraph-fVALJo5f.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
