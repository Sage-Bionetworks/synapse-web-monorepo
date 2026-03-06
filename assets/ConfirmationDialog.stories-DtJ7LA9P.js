import{j as o,B as n}from"./iframe-CDA0-aTC.js";import{C as r}from"./ConfirmationDialog-BLrGR5e1.js";import"./index-Chi_LkuB.js";import"./DialogBase-BSeeM2-T.js";import"./Close-dI8UPeeO.js";import"./HelpPopover-CUD98UAA.js";import"./MarkdownPopover-eReN4x4q.js";import"./LightTooltip-T2fsq3mX.js";import"./MarkdownSynapse-D1PgnQma.js";import"./SkeletonButton-CyZvMjY_.js";import"./SkeletonInlineBlock-CP8CpyNB.js";import"./SkeletonTable-CTSMcV9b.js";import"./SkeletonParagraph-BVmBcN9J.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
