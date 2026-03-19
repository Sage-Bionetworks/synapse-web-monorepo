import{j as o,B as n}from"./iframe-BfDC4V0n.js";import{C as r}from"./ConfirmationDialog-Btpz93A2.js";import"./index-Chi_LkuB.js";import"./DialogBase-yHroOJ8_.js";import"./Close-CgiQG4j8.js";import"./HelpPopover-Dg3wd6VC.js";import"./MarkdownPopover-Cd4Su9xF.js";import"./LightTooltip-B1uK46ji.js";import"./MarkdownSynapse-Doq5YFEA.js";import"./SkeletonButton-kWC2bpgD.js";import"./SkeletonInlineBlock-Dr1CyrsC.js";import"./SkeletonTable-PdwLXVTh.js";import"./SkeletonParagraph-DUo_BCXn.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
