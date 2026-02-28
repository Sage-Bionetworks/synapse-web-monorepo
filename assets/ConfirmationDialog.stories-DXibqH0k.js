import{j as o,B as n}from"./iframe-PaLoqTAY.js";import{C as r}from"./ConfirmationDialog-CYp0eVVg.js";import"./index-Chi_LkuB.js";import"./DialogBase-CdOZpOpZ.js";import"./Close-cm6rg5AJ.js";import"./HelpPopover-CsjQ6N0g.js";import"./MarkdownPopover-nKSUx3jQ.js";import"./LightTooltip-_tTaVink.js";import"./MarkdownSynapse-Ba6V8zsg.js";import"./SkeletonButton-BnWhyhDQ.js";import"./SkeletonInlineBlock-Cw72BSZP.js";import"./SkeletonTable-zz4k46jG.js";import"./SkeletonParagraph-BUTvJRRd.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
