import{j as o,B as n}from"./iframe-DY1t7RUX.js";import{C as r}from"./ConfirmationDialog-Bj6eqrOC.js";import"./index-Chi_LkuB.js";import"./DialogBase-DO28beWj.js";import"./Close-CDgVbOyZ.js";import"./HelpPopover-C9D9Mwao.js";import"./MarkdownPopover-St2sJIEx.js";import"./LightTooltip-DVzuHePn.js";import"./MarkdownSynapse-BvADFsyz.js";import"./SkeletonButton-DnY8-1vA.js";import"./SkeletonInlineBlock-DZRcElE1.js";import"./SkeletonTable-Q2u-z5xw.js";import"./SkeletonParagraph-DFydk1yR.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
