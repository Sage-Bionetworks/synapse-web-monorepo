import{j as o}from"./iframe-CDA0-aTC.js";import{W as r}from"./WarningDialog-W_LT0Rsr.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-BLrGR5e1.js";import"./DialogBase-BSeeM2-T.js";import"./Close-dI8UPeeO.js";import"./HelpPopover-CUD98UAA.js";import"./MarkdownPopover-eReN4x4q.js";import"./LightTooltip-T2fsq3mX.js";import"./MarkdownSynapse-D1PgnQma.js";import"./SkeletonButton-CyZvMjY_.js";import"./SkeletonInlineBlock-CP8CpyNB.js";import"./SkeletonTable-CTSMcV9b.js";import"./SkeletonParagraph-BVmBcN9J.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
