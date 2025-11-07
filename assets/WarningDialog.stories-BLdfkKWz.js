import{j as o}from"./iframe-D6eR7C50.js";import{W as r}from"./WarningDialog-Bj4JuAiC.js";import"./index-r8ZA1smB.js";import"./ConfirmationDialog-FZZd4L0v.js";import"./DialogBase-CGoUFCyI.js";import"./Close-B4yr33wu.js";import"./HelpPopover-BNtCkWxN.js";import"./MarkdownPopover-Bd8pVsTv.js";import"./LightTooltip-DyvHiMMn.js";import"./MarkdownSynapse-CDGiSRnF.js";import"./SkeletonButton-Btmr7__Y.js";import"./SkeletonInlineBlock-DkWMHFrC.js";import"./SkeletonTable-CT4J_TKG.js";import"./SkeletonParagraph-BWm0oiG8.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,b={title:"UI/WarningDialog",component:r,render:l=>o.jsx(r,{...l}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
