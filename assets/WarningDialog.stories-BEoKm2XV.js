import{j as o}from"./iframe-Bd48Phhx.js";import{W as r}from"./WarningDialog-DrdOBsRl.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-D4Di_An5.js";import"./DialogBase-DJeR-4bo.js";import"./Close-DEayXyHI.js";import"./HelpPopover-DCI79EJV.js";import"./MarkdownPopover-BdpxecKY.js";import"./LightTooltip-Baq7jYr-.js";import"./MarkdownSynapse-BQCReIPi.js";import"./SkeletonButton-yGLAaBDC.js";import"./SkeletonInlineBlock-BSKjVSEt.js";import"./SkeletonTable-DPwFQSrG.js";import"./SkeletonParagraph-keiL0wvn.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
