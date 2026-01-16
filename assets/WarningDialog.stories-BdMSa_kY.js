import{j as o}from"./iframe-DtZANp-B.js";import{W as r}from"./WarningDialog-C6iPl63y.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-CU9rE-_E.js";import"./DialogBase-BL9x4u9e.js";import"./Close-C8f0_ECb.js";import"./HelpPopover-C5b6a8OJ.js";import"./MarkdownPopover-DvHvm-1Y.js";import"./LightTooltip-BaTykJJr.js";import"./MarkdownSynapse-CdW0w9aw.js";import"./SkeletonButton-BbY-5M8h.js";import"./SkeletonInlineBlock-ByZd8Fsz.js";import"./SkeletonTable-kAcnUL28.js";import"./SkeletonParagraph-CHnJlCLJ.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
