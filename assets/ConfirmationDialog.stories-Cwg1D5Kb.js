import{j as o,B as n}from"./iframe-C4gfjmJw.js";import{C as r}from"./ConfirmationDialog-Cn43g34R.js";import"./index-Chi_LkuB.js";import"./DialogBase-B_shssNk.js";import"./Close-DN6bOWfw.js";import"./HelpPopover-COiLoIGR.js";import"./MarkdownPopover-5mB1Kxab.js";import"./LightTooltip-DDJdQBDx.js";import"./MarkdownSynapse-BLr68Dpv.js";import"./SkeletonButton-BIeEptZL.js";import"./SkeletonInlineBlock-BRt0lIXt.js";import"./SkeletonTable-BpAtksSS.js";import"./SkeletonParagraph-C0oOWbiy.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
