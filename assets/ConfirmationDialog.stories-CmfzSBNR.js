import{j as o,B as n}from"./iframe-DnxOmzjq.js";import{C as r}from"./ConfirmationDialog-DmtyRXb1.js";import"./index-Chi_LkuB.js";import"./DialogBase-D3z_RB8X.js";import"./Close-BG6pWxxQ.js";import"./HelpPopover-7iTAnRZF.js";import"./MarkdownPopover-BBvcdCrE.js";import"./LightTooltip-DBTB_o03.js";import"./MarkdownSynapse-Dhwl4QzF.js";import"./SkeletonButton-BsjS3fr7.js";import"./SkeletonInlineBlock-Df91B-1t.js";import"./SkeletonTable-CwpgexC9.js";import"./SkeletonParagraph-gynKm0um.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
