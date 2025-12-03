import{j as o,B as a}from"./iframe-CrIG5yS4.js";import{C as p}from"./ConfirmationDialog-yahK5x44.js";import"./index-r8ZA1smB.js";import"./DialogBase-CybwzTY6.js";import"./Close-5QnQ5lpW.js";import"./HelpPopover-C0SNysP_.js";import"./MarkdownPopover-oRHyMW2V.js";import"./LightTooltip-BhZaRT-T.js";import"./MarkdownSynapse-Cuq8Dn9Z.js";import"./SkeletonButton-C2iZcuLE.js";import"./SkeletonInlineBlock-DCJOzeCR.js";import"./SkeletonTable-CZxqZr7Y.js";import"./SkeletonParagraph-BI2gfc3a.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"UI/ConfirmationDialog",component:p},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(a,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
