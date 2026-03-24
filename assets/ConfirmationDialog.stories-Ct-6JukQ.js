import{j as o,B as n}from"./iframe-BmEDGyjb.js";import{C as r}from"./ConfirmationDialog-CSeFQT8P.js";import"./index-Chi_LkuB.js";import"./DialogBase--Z6amcCK.js";import"./Close-Ba6rPhRO.js";import"./HelpPopover-BBG0qokF.js";import"./MarkdownPopover-w2dEOi0v.js";import"./LightTooltip-D4z_e32b.js";import"./MarkdownSynapse-DScTNbQ4.js";import"./SkeletonButton-Dqpl9ltR.js";import"./SkeletonInlineBlock-gJQ0GVFi.js";import"./SkeletonTable-DO7dretU.js";import"./SkeletonParagraph-BB_2QaC-.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
