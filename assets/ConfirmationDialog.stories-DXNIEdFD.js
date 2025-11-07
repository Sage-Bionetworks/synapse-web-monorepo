import{j as o,B as a}from"./iframe-BdkWYmI6.js";import{C as p}from"./ConfirmationDialog-D261UfJ4.js";import"./index-r8ZA1smB.js";import"./DialogBase-AFyAqR5r.js";import"./Close-uDi--C--.js";import"./HelpPopover-B9Z4iGdd.js";import"./MarkdownPopover-BHBiy4N1.js";import"./LightTooltip-CG5Avdd3.js";import"./MarkdownSynapse-Bv4Hlehq.js";import"./SkeletonButton-DYpS-IT5.js";import"./SkeletonInlineBlock-B4ZEP19M.js";import"./SkeletonTable-BveBy0vn.js";import"./SkeletonParagraph-CVsqmSli.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"UI/ConfirmationDialog",component:p},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(a,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
