import{j as o,B as a}from"./iframe-WWZqBZnn.js";import{C as p}from"./ConfirmationDialog-C4iRBvHc.js";import"./index-r8ZA1smB.js";import"./DialogBase-8qbfQF_w.js";import"./Close-CZXopQFS.js";import"./HelpPopover-C-TZQPZy.js";import"./MarkdownPopover-DGnHKgxw.js";import"./LightTooltip-VG5tjvb2.js";import"./MarkdownSynapse-CXeQLUv7.js";import"./SkeletonButton-Ce9jKFb5.js";import"./SkeletonInlineBlock-DLew4KjD.js";import"./SkeletonTable-DehOuMuf.js";import"./SkeletonParagraph-CCoh0O-o.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"UI/ConfirmationDialog",component:p},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(a,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const P=["Demo"];export{t as Demo,P as __namedExportsOrder,C as default};
