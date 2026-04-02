import{j as o}from"./iframe-CxvUBa5Y.js";import{W as r}from"./WarningDialog-Cckmi5Q9.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-DHjGwc95.js";import"./DialogBase-CwWInD0g.js";import"./Close-CiAhw48q.js";import"./HelpPopover-T0cT0kQU.js";import"./MarkdownPopover-Ciurpa6y.js";import"./LightTooltip-BgyTyQ_i.js";import"./MarkdownSynapse-CvjlntGs.js";import"./SkeletonButton-DyDLkSqK.js";import"./SkeletonInlineBlock-Bhdwhqi9.js";import"./SkeletonTable-BIWVFjZB.js";import"./SkeletonParagraph-D_UqSVhv.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
