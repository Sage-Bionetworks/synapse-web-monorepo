import{j as o}from"./iframe-DCS9ymbE.js";import{W as r}from"./WarningDialog-KFREBw4E.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-By5IYndx.js";import"./DialogBase-DjdKIz7b.js";import"./Close-CkQlcHF3.js";import"./HelpPopover-B2Qog0x5.js";import"./MarkdownPopover-D_3YeZyN.js";import"./LightTooltip-CLHQn5en.js";import"./MarkdownSynapse-m-Kv7fzM.js";import"./SkeletonButton-D3cSL18R.js";import"./SkeletonInlineBlock-BqZQuSX9.js";import"./SkeletonTable-Mr15HLUy.js";import"./SkeletonParagraph-CpW8pclE.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
