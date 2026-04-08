import{j as o,B as n}from"./iframe-DvDRa5Q6.js";import{C as r}from"./ConfirmationDialog-Cst2iXxg.js";import"./index-Chi_LkuB.js";import"./DialogBase-C4ETi5eI.js";import"./Close-LY7gHL5l.js";import"./HelpPopover-eW4-Xo3-.js";import"./MarkdownPopover-DkJdSjeV.js";import"./LightTooltip-CEbfXtfJ.js";import"./MarkdownSynapse-DpW9Rmmz.js";import"./SkeletonButton-DldMG8YD.js";import"./SkeletonInlineBlock-CqjLFWuf.js";import"./SkeletonTable-BUXMgZAX.js";import"./SkeletonParagraph-DNQOFkBl.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
