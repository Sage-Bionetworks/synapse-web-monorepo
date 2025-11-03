import{j as o,B as a}from"./iframe-DgbfDeQR.js";import{C as p}from"./ConfirmationDialog-BKHZua3P.js";import"./index-r8ZA1smB.js";import"./DialogBase-Bdu7Jetf.js";import"./Close-Uo8JW1Td.js";import"./HelpPopover-BOrP1Anu.js";import"./MarkdownPopover-BDg3J_sQ.js";import"./LightTooltip-B-8YX4RQ.js";import"./MarkdownSynapse-D4qxv4i6.js";import"./SkeletonButton-C3Hqevp6.js";import"./SkeletonInlineBlock-D8vr7qjb.js";import"./SkeletonTable-CkIMw70Y.js";import"./SkeletonParagraph-BtYiDY2A.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"UI/ConfirmationDialog",component:p},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(a,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
