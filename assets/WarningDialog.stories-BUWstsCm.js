import{j as o}from"./iframe-DuUClhsc.js";import{W as r}from"./WarningDialog-BWEnrQLk.js";import"./index-r8ZA1smB.js";import"./ConfirmationDialog-B9wYVq7g.js";import"./DialogBase-B58YmIqt.js";import"./Close-aSlNjt7A.js";import"./HelpPopover-B3FfhNks.js";import"./MarkdownPopover-B9Dcg-Cp.js";import"./LightTooltip-CtjaIoZW.js";import"./MarkdownSynapse-DaOcOh9V.js";import"./SkeletonButton-BSbzluwJ.js";import"./SkeletonInlineBlock-CoFc0Z1u.js";import"./SkeletonTable-BqjyM-uC.js";import"./SkeletonParagraph-DI40A60T.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,b={title:"UI/WarningDialog",component:r,render:l=>o.jsx(r,{...l}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
