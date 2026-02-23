import{j as o,B as n}from"./iframe-OvMmZLQw.js";import{C as r}from"./ConfirmationDialog-CjxFskfc.js";import"./index-Chi_LkuB.js";import"./DialogBase-ibfiDrrj.js";import"./Close-C3EhJtlG.js";import"./HelpPopover-6zcoBJtq.js";import"./MarkdownPopover-DIqu7B8a.js";import"./LightTooltip-D4lO7JMJ.js";import"./MarkdownSynapse-C8qQ4WRw.js";import"./SkeletonButton-Cyy-yL2p.js";import"./SkeletonInlineBlock-DfEg9q_u.js";import"./SkeletonTable-BYbIFMu2.js";import"./SkeletonParagraph-DkLTjuRc.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
