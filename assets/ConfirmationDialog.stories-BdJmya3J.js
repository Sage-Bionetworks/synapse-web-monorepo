import{j as o,B as n}from"./iframe-BbbR7k03.js";import{C as r}from"./ConfirmationDialog-Cco6Zt2n.js";import"./index-Chi_LkuB.js";import"./DialogBase-DG8acb1Q.js";import"./Close-BJFIRJbz.js";import"./HelpPopover-Fxn4OJ3p.js";import"./MarkdownPopover-DjDkPlLu.js";import"./LightTooltip-CglVqYUv.js";import"./MarkdownSynapse-ZvWb7i2I.js";import"./SkeletonButton-DffrNQo6.js";import"./SkeletonInlineBlock-BbM-xsbl.js";import"./SkeletonTable-Dx60MFYV.js";import"./SkeletonParagraph-NMWzktwn.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
