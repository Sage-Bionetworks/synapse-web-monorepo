import{j as o,B as n}from"./iframe-C0jSrR5c.js";import{C as r}from"./ConfirmationDialog-BQA9hOtu.js";import"./index-Chi_LkuB.js";import"./DialogBase-DJJeOMKc.js";import"./Close-DWJA7LvA.js";import"./HelpPopover-k-mGSl5L.js";import"./MarkdownPopover-HA7m-95B.js";import"./LightTooltip-C3dz3Fkz.js";import"./MarkdownSynapse-EAeKywnO.js";import"./SkeletonButton-Da-HHa43.js";import"./SkeletonInlineBlock-kvwMQbuJ.js";import"./SkeletonTable-83ELoSn8.js";import"./SkeletonParagraph-C_qcfR_9.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
