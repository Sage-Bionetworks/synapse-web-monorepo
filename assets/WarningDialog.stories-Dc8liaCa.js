import{j as o}from"./iframe-CmEjpYjv.js";import{W as r}from"./WarningDialog-dr9nJcqx.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-CU57bm7H.js";import"./DialogBase-axU2QUsf.js";import"./Close-DrVlknUt.js";import"./HelpPopover-g9_OAG8r.js";import"./MarkdownPopover-C9iZcAOm.js";import"./LightTooltip-HedBxZph.js";import"./MarkdownSynapse--zkp7VAK.js";import"./SkeletonButton-DlNsrAb3.js";import"./SkeletonInlineBlock-CbyXGVtN.js";import"./SkeletonTable-Bui1t3TM.js";import"./SkeletonParagraph-CQ6ji8az.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
