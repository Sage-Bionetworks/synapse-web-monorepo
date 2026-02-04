import{j as o,B as n}from"./iframe-BhrR5Sll.js";import{C as r}from"./ConfirmationDialog-B44tNgOv.js";import"./index-Chi_LkuB.js";import"./DialogBase-BYIqUMiE.js";import"./Close-8bb5EJ6t.js";import"./HelpPopover-lG-0-_4j.js";import"./MarkdownPopover-Dra-bAXM.js";import"./LightTooltip-CtyC1diu.js";import"./MarkdownSynapse-gk6o-aVH.js";import"./SkeletonButton-CXfcR02x.js";import"./SkeletonInlineBlock-BVfsrZM3.js";import"./SkeletonTable-bVZR_JBz.js";import"./SkeletonParagraph-BvDfq1qX.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
