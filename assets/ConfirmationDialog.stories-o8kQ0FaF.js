import{j as o,B as n}from"./iframe-DrwjMxxV.js";import{C as r}from"./ConfirmationDialog-B4VjD6Ag.js";import"./index-Chi_LkuB.js";import"./DialogBase-nWKWc-JJ.js";import"./Close-CigZT9Cr.js";import"./HelpPopover-B9CXRuRH.js";import"./MarkdownPopover-DnCXWrW5.js";import"./LightTooltip-CaqdPU_H.js";import"./MarkdownSynapse-CBAvDJdh.js";import"./SkeletonButton-B0AmZCB5.js";import"./SkeletonInlineBlock-CN425wR7.js";import"./SkeletonTable-hPiR5C1z.js";import"./SkeletonParagraph-zDUPBNGu.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
