import{j as o,B as n}from"./iframe-ClOjSJTq.js";import{C as r}from"./ConfirmationDialog-BJVxGzfJ.js";import"./index-Chi_LkuB.js";import"./DialogBase-B-Ztm902.js";import"./Close-Bm9lWJyo.js";import"./HelpPopover-C7jMTeEB.js";import"./MarkdownPopover-Bc65lpb5.js";import"./LightTooltip-BNOwvCMp.js";import"./MarkdownSynapse-BDWo9JUV.js";import"./SkeletonButton-_jksuL_Y.js";import"./SkeletonInlineBlock-BlfzAWSG.js";import"./SkeletonTable-j4z7TzDn.js";import"./SkeletonParagraph-C8wM_A5n.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
