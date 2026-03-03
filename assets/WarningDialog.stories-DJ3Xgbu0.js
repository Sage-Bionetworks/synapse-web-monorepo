import{j as o}from"./iframe-BPIYH1oT.js";import{W as r}from"./WarningDialog-hqInUHAp.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-BEwxNdsX.js";import"./DialogBase-YPU6xwB9.js";import"./Close-DUKe32AS.js";import"./HelpPopover-csZgSs5v.js";import"./MarkdownPopover-C_LkEX6f.js";import"./LightTooltip-C4JhsBFK.js";import"./MarkdownSynapse-B95PEuB_.js";import"./SkeletonButton-BzOCV9D1.js";import"./SkeletonInlineBlock-BqdJTX4s.js";import"./SkeletonTable-DGggFpSD.js";import"./SkeletonParagraph-CVXQh454.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
