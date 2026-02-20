import{j as o}from"./iframe-D2314vV7.js";import{W as r}from"./WarningDialog-ljvWzkd0.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-Rlnq_K10.js";import"./DialogBase-CeLIS526.js";import"./Close-DF-SSni9.js";import"./HelpPopover-DPlyz4f8.js";import"./MarkdownPopover-DLwjwgAy.js";import"./LightTooltip-C3RLT3BD.js";import"./MarkdownSynapse-DOP2sYUv.js";import"./SkeletonButton-B53Z_sb3.js";import"./SkeletonInlineBlock-CV4xFhI_.js";import"./SkeletonTable-BKP48mc0.js";import"./SkeletonParagraph-LgnNm5lB.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
