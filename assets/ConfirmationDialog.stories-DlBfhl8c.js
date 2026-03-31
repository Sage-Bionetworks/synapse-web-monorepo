import{j as o,B as n}from"./iframe-DI5oOWnE.js";import{C as r}from"./ConfirmationDialog-Bhb-7VQY.js";import"./index-Chi_LkuB.js";import"./DialogBase-Jgs4FWnV.js";import"./Close-B-CGi6eH.js";import"./HelpPopover-2ce9FsNc.js";import"./MarkdownPopover-D05MpzJD.js";import"./LightTooltip-BEWvn8Re.js";import"./MarkdownSynapse-Dgvqt2C_.js";import"./SkeletonButton-CwiRfCnX.js";import"./SkeletonInlineBlock-5UtZsnHV.js";import"./SkeletonTable-h5dOlVIm.js";import"./SkeletonParagraph-JG7mPZxB.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'My Dialog Title',
    confirmButtonProps: {
      children: 'Confirm',
      color: 'error'
    },
    maxWidth: 'lg',
    content: <>
        <p>
          Some content within the dialog, which can contain other components:
        </p>
        <Button variant="contained">Button</Button>
      </>,
    titleHelpPopoverProps: {
      helpUrl: 'https://help.synapse.org',
      markdownText: 'Option to show a _HelpPopover_ in the title bar with a link to the docs site'
    },
    onCancel: fn(),
    onConfirm: fn()
  }
}`,...t.parameters?.docs?.source}}};const w=["Demo"];export{t as Demo,w as __namedExportsOrder,x as default};
