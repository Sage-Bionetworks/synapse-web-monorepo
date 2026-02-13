import{j as o,B as n}from"./iframe-D-KER6Qh.js";import{C as r}from"./ConfirmationDialog-CSFf9HzN.js";import"./index-Chi_LkuB.js";import"./DialogBase-SiFub7hc.js";import"./Close-eai8_-Nr.js";import"./HelpPopover-D8a4-Hdu.js";import"./MarkdownPopover-ZXOIcEPl.js";import"./LightTooltip-CmTwAHaz.js";import"./MarkdownSynapse-CV2HCz36.js";import"./SkeletonButton-BHBiM-A7.js";import"./SkeletonInlineBlock-BwJZpIPy.js";import"./SkeletonTable-C--yRYi2.js";import"./SkeletonParagraph-DuJaGlPU.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
