import{j as o,B as n}from"./iframe-DtZANp-B.js";import{C as r}from"./ConfirmationDialog-CU9rE-_E.js";import"./index-Chi_LkuB.js";import"./DialogBase-BL9x4u9e.js";import"./Close-C8f0_ECb.js";import"./HelpPopover-C5b6a8OJ.js";import"./MarkdownPopover-DvHvm-1Y.js";import"./LightTooltip-BaTykJJr.js";import"./MarkdownSynapse-CdW0w9aw.js";import"./SkeletonButton-BbY-5M8h.js";import"./SkeletonInlineBlock-ByZd8Fsz.js";import"./SkeletonTable-kAcnUL28.js";import"./SkeletonParagraph-CHnJlCLJ.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
