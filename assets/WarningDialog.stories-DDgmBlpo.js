import{j as o}from"./iframe-C_QQiyp-.js";import{W as r}from"./WarningDialog-B673dVee.js";import"./index-r8ZA1smB.js";import"./ConfirmationDialog-DAIzDlJh.js";import"./DialogBase-GGKQvoi0.js";import"./Close-D2Pf2VjW.js";import"./HelpPopover--l72eRT0.js";import"./MarkdownPopover-BmdxKf0p.js";import"./LightTooltip-BdMbjEZX.js";import"./MarkdownSynapse-5kgLSApZ.js";import"./SkeletonButton-DVayUHLb.js";import"./SkeletonInlineBlock-CYb2G1Vd.js";import"./SkeletonTable-BMz6cgMa.js";import"./SkeletonParagraph-BKhiP51Z.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,b={title:"UI/WarningDialog",component:r,render:l=>o.jsx(r,{...l}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Approve Request',
    content: 'Are you sure you want to approve this request?',
    onConfirmCallbackArgs: []
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Demo","AccessTokenCardWarningDialog"];export{t as AccessTokenCardWarningDialog,e as Demo,j as __namedExportsOrder,b as default};
