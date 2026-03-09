import{j as o,B as n}from"./iframe-CIPlMaLT.js";import{C as r}from"./ConfirmationDialog-fVjFifBD.js";import"./index-Chi_LkuB.js";import"./DialogBase-LmDxIN7q.js";import"./Close-BmqKwCBp.js";import"./HelpPopover-BQ8z_T0o.js";import"./MarkdownPopover-DNuS7K0n.js";import"./LightTooltip-DW0Ye48E.js";import"./MarkdownSynapse-DBktvvdU.js";import"./SkeletonButton-BYZF9tG6.js";import"./SkeletonInlineBlock-1S1r7zTT.js";import"./SkeletonTable-CWf8URW0.js";import"./SkeletonParagraph--qeTTP7n.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
