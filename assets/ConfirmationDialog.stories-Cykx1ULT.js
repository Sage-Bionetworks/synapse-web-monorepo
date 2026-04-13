import{j as o,B as n}from"./iframe-CbfOQY0w.js";import{C as r}from"./ConfirmationDialog-XDNgseZX.js";import"./index-Chi_LkuB.js";import"./DialogBase-Caocv0xu.js";import"./Close-Cq5UpdYv.js";import"./HelpPopover-D7Lqd1_Q.js";import"./MarkdownPopover-BdMXAVvu.js";import"./LightTooltip-C9p3LJOV.js";import"./MarkdownSynapse-C1Hg73kZ.js";import"./SkeletonButton-DqLe50tO.js";import"./SkeletonInlineBlock-be42gePS.js";import"./SkeletonTable-CE4I0355.js";import"./SkeletonParagraph-CCe-_wHo.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
