import{j as o}from"./iframe-BVIZDvjc.js";import{W as r}from"./WarningDialog-B6HdsgFc.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-D-x0uIwM.js";import"./DialogBase-S6GlCR1h.js";import"./Close-B2iBzLNH.js";import"./HelpPopover-D_ahQJhV.js";import"./MarkdownPopover-BEAyCTTW.js";import"./LightTooltip-GG2U7cEt.js";import"./MarkdownSynapse-C1-7S77D.js";import"./SkeletonButton-D1SYxzVe.js";import"./SkeletonInlineBlock-CEdkX1JK.js";import"./SkeletonTable-CtaVYpmw.js";import"./SkeletonParagraph-BSFvRjJJ.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
