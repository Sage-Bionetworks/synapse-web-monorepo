import{j as o,B as n}from"./iframe-C64n1GD8.js";import{C as r}from"./ConfirmationDialog-0v5aIB6P.js";import"./index-Chi_LkuB.js";import"./DialogBase-CvFrMWW4.js";import"./Close-jGAkMweY.js";import"./HelpPopover-DMcj4HzC.js";import"./MarkdownPopover-aVtIL7z6.js";import"./LightTooltip-DDkKmTHq.js";import"./MarkdownSynapse-CenQtkph.js";import"./SkeletonButton-BHX6f9gP.js";import"./SkeletonInlineBlock-CDYMy8y_.js";import"./SkeletonTable-QL6vSy9n.js";import"./SkeletonParagraph-Duc3bDvV.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
