import{j as o,B as a}from"./iframe-k0ljdA_F.js";import{C as p}from"./ConfirmationDialog-C7naKC_4.js";import"./index-r8ZA1smB.js";import"./DialogBase-c3ATuGjo.js";import"./Close-B2VeJ_9n.js";import"./HelpPopover-CNpAlynd.js";import"./MarkdownPopover-DByvkR9q.js";import"./LightTooltip-DSQf6_14.js";import"./MarkdownSynapse-Bd3GMcDJ.js";import"./SkeletonButton-DocMgp-F.js";import"./SkeletonInlineBlock-D4J3mBmr.js";import"./SkeletonTable-C0DTQRTT.js";import"./SkeletonParagraph-BXN5laEg.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"UI/ConfirmationDialog",component:p},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(a,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
