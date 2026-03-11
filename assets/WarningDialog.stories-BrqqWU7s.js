import{j as o}from"./iframe-9Dp3veeu.js";import{W as r}from"./WarningDialog-MvaJPqkX.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-0O1Dp5pK.js";import"./DialogBase-wgKSPL2s.js";import"./Close-RKCQt29o.js";import"./HelpPopover-CV1i3nJO.js";import"./MarkdownPopover-DoQCnLPw.js";import"./LightTooltip-TjP4VxGs.js";import"./MarkdownSynapse-D2Pk-B6S.js";import"./SkeletonButton-COK1UYfn.js";import"./SkeletonInlineBlock-BcYTxiw0.js";import"./SkeletonTable-Cjl9F2Dt.js";import"./SkeletonParagraph-Cn0395FS.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
