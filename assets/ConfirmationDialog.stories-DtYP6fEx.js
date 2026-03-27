import{j as o,B as n}from"./iframe-k6B4MjXD.js";import{C as r}from"./ConfirmationDialog-QQIwXsjr.js";import"./index-Chi_LkuB.js";import"./DialogBase-Ccfo_49T.js";import"./Close-DOldyZv5.js";import"./HelpPopover-t1MsDT6m.js";import"./MarkdownPopover-D-j3as32.js";import"./LightTooltip-D4E2KaZT.js";import"./MarkdownSynapse-EyuM-I29.js";import"./SkeletonButton-DUY-d9ph.js";import"./SkeletonInlineBlock-DCdHLNp-.js";import"./SkeletonTable-DolM1Kfd.js";import"./SkeletonParagraph-B7V0f3GA.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
