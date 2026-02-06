import{j as o,B as n}from"./iframe-Ya-g_qay.js";import{C as r}from"./ConfirmationDialog-BBcvYt37.js";import"./index-Chi_LkuB.js";import"./DialogBase-Cq0exykH.js";import"./Close-CwYN6EVd.js";import"./HelpPopover-Cg_-TFXL.js";import"./MarkdownPopover-GltQLah1.js";import"./LightTooltip-CmE9Hp-T.js";import"./MarkdownSynapse-CFShCHbb.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonTable-gSh9dXdS.js";import"./SkeletonParagraph-B7nhBI0o.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
