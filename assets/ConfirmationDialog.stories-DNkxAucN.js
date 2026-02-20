import{j as o,B as n}from"./iframe-r7gAu2bc.js";import{C as r}from"./ConfirmationDialog-vZtrKvGV.js";import"./index-Chi_LkuB.js";import"./DialogBase-BOUiF06G.js";import"./Close-xlIC43VD.js";import"./HelpPopover-DIDZEU3E.js";import"./MarkdownPopover-DLh5Bk_h.js";import"./LightTooltip-CMMeaAaF.js";import"./MarkdownSynapse-2Kx7OuZk.js";import"./SkeletonButton-BM35HBbr.js";import"./SkeletonInlineBlock-CnfDTonB.js";import"./SkeletonTable-ChI727yy.js";import"./SkeletonParagraph-ENW1FsOv.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
