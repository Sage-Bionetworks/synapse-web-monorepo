import{j as o,B as n}from"./iframe-RNQ9FFfL.js";import{C as r}from"./ConfirmationDialog-B3HKAPXk.js";import"./index-Chi_LkuB.js";import"./DialogBase-obsFT4U8.js";import"./Close-D12ceDGd.js";import"./HelpPopover-Bu2Wm8fE.js";import"./MarkdownPopover-Dg5ZNl7W.js";import"./LightTooltip-DXhNzA7Y.js";import"./MarkdownSynapse-DBaSEh29.js";import"./SkeletonButton-D0L_5F4L.js";import"./SkeletonInlineBlock-Bh2U8Vk5.js";import"./SkeletonTable-CWFE2ocy.js";import"./SkeletonParagraph-TNDyKrCR.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
