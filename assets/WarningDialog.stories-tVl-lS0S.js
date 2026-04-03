import{j as o}from"./iframe-BwdMKcfW.js";import{W as r}from"./WarningDialog-Ccog4du3.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-EESVjpz0.js";import"./DialogBase-BFX7NXuk.js";import"./Close-CCUUydcy.js";import"./HelpPopover-CYbiM6iC.js";import"./MarkdownPopover-DR3WgxmO.js";import"./LightTooltip-C5q6jm3B.js";import"./MarkdownSynapse-N8osBNe-.js";import"./SkeletonButton-DUX7R0sB.js";import"./SkeletonInlineBlock-CGQ5Gfg-.js";import"./SkeletonTable-O-mI3Ojq.js";import"./SkeletonParagraph-CepsPnNp.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
