import{j as o}from"./iframe-IkK4rSOB.js";import{W as r}from"./WarningDialog-D0mMldvE.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-Qnuw1A6n.js";import"./DialogBase-DjKiii1p.js";import"./Close-DJYHgqb-.js";import"./HelpPopover-N2Q7oHWa.js";import"./MarkdownPopover-DcD4fm5a.js";import"./LightTooltip-3kR8WXpt.js";import"./MarkdownSynapse-DW-6eoVs.js";import"./SkeletonButton-CzqxZow7.js";import"./SkeletonInlineBlock-CUWgPSJQ.js";import"./SkeletonTable-CHtYHCYt.js";import"./SkeletonParagraph-Ckq6DzI_.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
