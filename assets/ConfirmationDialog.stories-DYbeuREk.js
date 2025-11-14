import{j as o,B as a}from"./iframe-BnETViYe.js";import{C as p}from"./ConfirmationDialog-BIpXV5M8.js";import"./index-r8ZA1smB.js";import"./DialogBase-QlbSbh1_.js";import"./Close-rvN_S8Vv.js";import"./HelpPopover-DK9Tpj6o.js";import"./MarkdownPopover-BvzvlMrF.js";import"./LightTooltip-j7NzfZhS.js";import"./MarkdownSynapse-Bip7xTA3.js";import"./SkeletonButton-DC6QAxqn.js";import"./SkeletonInlineBlock-CvdUTVnt.js";import"./SkeletonTable-C-IptaAB.js";import"./SkeletonParagraph-Cc0HWYg7.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"UI/ConfirmationDialog",component:p},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(a,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
