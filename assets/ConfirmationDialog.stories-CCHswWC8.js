import{j as o,B as n}from"./iframe-B-xyH02x.js";import{C as r}from"./ConfirmationDialog-D9aFQcvZ.js";import"./index-Chi_LkuB.js";import"./DialogBase-Bm7WFoz5.js";import"./Close-BSQRjDbl.js";import"./HelpPopover-Bx7iTtjG.js";import"./MarkdownPopover-BdoLK-ES.js";import"./LightTooltip-C149eTsy.js";import"./MarkdownSynapse-CecSU3tu.js";import"./SkeletonButton-DjfAVN5h.js";import"./SkeletonInlineBlock-C-y9BK0k.js";import"./SkeletonTable-Bag6oVsL.js";import"./SkeletonParagraph-DEhsnig5.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
