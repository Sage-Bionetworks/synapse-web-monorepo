import{j as o,B as a}from"./iframe-CeAgldvM.js";import{C as p}from"./ConfirmationDialog-DPE1BIMW.js";import"./index-r8ZA1smB.js";import"./DialogBase-D0T8g2Im.js";import"./Close-o2F78_KZ.js";import"./HelpPopover-8snckHwd.js";import"./MarkdownPopover-ivtTXFwj.js";import"./LightTooltip-CNmsWsyw.js";import"./MarkdownSynapse-Dy8cp58X.js";import"./SkeletonButton-BvXrs4_f.js";import"./SkeletonInlineBlock-n6Wdtn3U.js";import"./SkeletonTable-D9BGXwSf.js";import"./SkeletonParagraph-DsPtfc6R.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"UI/ConfirmationDialog",component:p},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(a,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
