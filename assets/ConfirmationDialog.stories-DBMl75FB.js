import{j as o,B as n}from"./iframe-xmmb_I0l.js";import{C as r}from"./ConfirmationDialog-Ct05-ZlH.js";import"./index-Chi_LkuB.js";import"./DialogBase-BYsOjz7L.js";import"./Close-Cnr5zUVu.js";import"./HelpPopover-BMEIvn42.js";import"./MarkdownPopover-DGXe5vs0.js";import"./LightTooltip-D9ucYA3A.js";import"./MarkdownSynapse-DiGGFE3_.js";import"./SkeletonButton-9FRcX2_1.js";import"./SkeletonInlineBlock-CLZ8B174.js";import"./SkeletonTable-jOb-G6tL.js";import"./SkeletonParagraph-BjPCkGoh.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
