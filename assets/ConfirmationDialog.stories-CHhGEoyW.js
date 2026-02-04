import{j as o,B as n}from"./iframe-BE9PbKHz.js";import{C as r}from"./ConfirmationDialog-BBc5_vLI.js";import"./index-Chi_LkuB.js";import"./DialogBase-DZLlSH8O.js";import"./Close-Cz-06mD9.js";import"./HelpPopover-C9q_fGyh.js";import"./MarkdownPopover-BkMntjjk.js";import"./LightTooltip-Dge4KYYp.js";import"./MarkdownSynapse-277_eni0.js";import"./SkeletonButton-DJTXNqO5.js";import"./SkeletonInlineBlock-CIXdsi0t.js";import"./SkeletonTable-BL3DzlJY.js";import"./SkeletonParagraph-Sl7bNyS_.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
