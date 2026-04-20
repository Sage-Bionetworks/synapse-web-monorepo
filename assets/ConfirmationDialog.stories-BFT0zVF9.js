import{j as o,B as n}from"./iframe-CyTUL3rw.js";import{C as r}from"./ConfirmationDialog-BSxA4EpL.js";import"./index-Chi_LkuB.js";import"./DialogBase-BmPd6gFD.js";import"./Close-Cs5OhkJ0.js";import"./HelpPopover-Di3M7oAV.js";import"./MarkdownPopover-C7H_W_vs.js";import"./LightTooltip-Br9ozYpY.js";import"./MarkdownSynapse-C3mcPF1h.js";import"./SkeletonButton-DChDzo9i.js";import"./SkeletonInlineBlock-B96TZts7.js";import"./SkeletonTable-BzEL_yMf.js";import"./SkeletonParagraph-D3EKUoCV.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
