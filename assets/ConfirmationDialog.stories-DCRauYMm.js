import{j as o,B as n}from"./iframe-DmJPOOU_.js";import{C as r}from"./ConfirmationDialog-hpX1a8na.js";import"./index-Chi_LkuB.js";import"./DialogBase-D-N6jGJj.js";import"./Close-DOrDhmY8.js";import"./HelpPopover-CH-RPBO_.js";import"./MarkdownPopover-BCp9ClLr.js";import"./LightTooltip-Cww8R-MD.js";import"./MarkdownSynapse-C6q6tMz7.js";import"./SkeletonButton-Cd2blMTY.js";import"./SkeletonInlineBlock-rRVfoSJd.js";import"./SkeletonTable-B15aTznV.js";import"./SkeletonParagraph-B8-jdRST.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
