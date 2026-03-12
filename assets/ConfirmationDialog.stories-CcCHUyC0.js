import{j as o,B as n}from"./iframe-Dj9QuIYm.js";import{C as r}from"./ConfirmationDialog-Dwbyyygg.js";import"./index-Chi_LkuB.js";import"./DialogBase-Dda3MpTM.js";import"./Close-BjHtaxrZ.js";import"./HelpPopover-BLYAVpYE.js";import"./MarkdownPopover-CcYcEdRz.js";import"./LightTooltip-e6_OdOFE.js";import"./MarkdownSynapse-Dau4XtwA.js";import"./SkeletonButton-iTrOeh7-.js";import"./SkeletonInlineBlock-D2uK1sRl.js";import"./SkeletonTable-rcTO73Uk.js";import"./SkeletonParagraph-8dZQFouk.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
