import{j as o,B as n}from"./iframe-C2kEGB7j.js";import{C as r}from"./ConfirmationDialog-BbdKEfo2.js";import"./index-Chi_LkuB.js";import"./DialogBase-CW3j8lBK.js";import"./Close-zOC26mc8.js";import"./HelpPopover-CBvQB68Y.js";import"./MarkdownPopover-CcmAtHQ5.js";import"./LightTooltip-Bc96vcP5.js";import"./MarkdownSynapse-F7h7ulwU.js";import"./SkeletonButton-B3EXz-nP.js";import"./SkeletonInlineBlock-DfFg1BbM.js";import"./SkeletonTable-DkNCUEbr.js";import"./SkeletonParagraph-CzHkK7a_.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
