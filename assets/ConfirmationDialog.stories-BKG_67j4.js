import{j as o,B as n}from"./iframe-4beS0gqZ.js";import{C as r}from"./ConfirmationDialog-DiR-POnZ.js";import"./index-Chi_LkuB.js";import"./DialogBase-EyEbalB9.js";import"./Close-Di6LJuIZ.js";import"./HelpPopover-CrWRb3n8.js";import"./MarkdownPopover-DsiU9Oei.js";import"./LightTooltip-Bs_25L1-.js";import"./MarkdownSynapse-D_Ohq5Ke.js";import"./SkeletonButton-C4MVharh.js";import"./SkeletonInlineBlock-DJy2BwKW.js";import"./SkeletonTable-BUzuull8.js";import"./SkeletonParagraph-D8WDF9hI.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
