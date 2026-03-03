import{j as o}from"./iframe-Caumy8OG.js";import{W as r}from"./WarningDialog-Csv1_XuH.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-IHEJhKNR.js";import"./DialogBase-BwhcKSSX.js";import"./Close-DQtVppmx.js";import"./HelpPopover-DLbRiMnr.js";import"./MarkdownPopover-Ed--YpdW.js";import"./LightTooltip-VmaxT5-P.js";import"./MarkdownSynapse-BvD7qHpg.js";import"./SkeletonButton-CJd-6_Rb.js";import"./SkeletonInlineBlock-Mrzyi1ZX.js";import"./SkeletonTable-Cy3CPYvw.js";import"./SkeletonParagraph-tEoCsyXm.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
