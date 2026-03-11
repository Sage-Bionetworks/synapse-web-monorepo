import{j as o}from"./iframe-Ds4ORbxM.js";import{W as r}from"./WarningDialog-D62kbPQl.js";import"./index-Chi_LkuB.js";import"./ConfirmationDialog-BrjEGNnR.js";import"./DialogBase-BuRnxzMT.js";import"./Close-CP5Sv8Gb.js";import"./HelpPopover-BpNHIXS5.js";import"./MarkdownPopover-D8vUi55e.js";import"./LightTooltip-CV5GUQCP.js";import"./MarkdownSynapse-lp_uroGI.js";import"./SkeletonButton-Bz2oBDCo.js";import"./SkeletonInlineBlock-DDXMTXRx.js";import"./SkeletonTable-yOIpbiOB.js";import"./SkeletonParagraph-DV2rBoVm.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,y={title:"UI/WarningDialog",component:r,render:s=>o.jsx(r,{...s}),args:{onConfirm:n(),onCancel:n()}},e={args:{open:!0,title:"Approve Request",content:"Are you sure you want to approve this request?",onConfirmCallbackArgs:[]}},t={args:{...e.args,title:"Confirm Deletion",confirmButtonText:"Delete Token",confirmButtonColor:"error",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),o.jsx("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
