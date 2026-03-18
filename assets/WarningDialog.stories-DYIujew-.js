import{j as o}from"./iframe-C2kEGB7j.js";import{W as r}from"./WarningDialog-DAKfsM_Y.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-BbdKEfo2.js";import"./DialogBase-CW3j8lBK.js";import"./Close-zOC26mc8.js";import"./HelpPopover-CBvQB68Y.js";import"./MarkdownPopover-CcmAtHQ5.js";import"./LightTooltip-Bc96vcP5.js";import"./MarkdownSynapse-F7h7ulwU.js";import"./SkeletonButton-B3EXz-nP.js";import"./SkeletonInlineBlock-DfFg1BbM.js";import"./SkeletonTable-DkNCUEbr.js";import"./SkeletonParagraph-CzHkK7a_.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
