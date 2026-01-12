import{j as o}from"./iframe-CaOcC-hf.js";import{W as r}from"./WarningDialog-B1z_iYnj.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-D38gahaL.js";import"./DialogBase-Dn94ypHd.js";import"./Close-7gN2buzZ.js";import"./HelpPopover-DtGoLtv4.js";import"./MarkdownPopover-pxj3Gfsw.js";import"./LightTooltip-DLMcdQ8O.js";import"./MarkdownSynapse-Bu_iQFQg.js";import"./SkeletonButton-C1Ne2e4S.js";import"./SkeletonInlineBlock-CXC8p12o.js";import"./SkeletonTable-BGTjeLmw.js";import"./SkeletonParagraph-DlGa_aoP.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
