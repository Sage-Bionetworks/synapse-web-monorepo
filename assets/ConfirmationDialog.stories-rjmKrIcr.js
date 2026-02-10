import{j as o,B as n}from"./iframe-C80DNIXY.js";import{C as r}from"./ConfirmationDialog-C9JPgHed.js";import"./index-Chi_LkuB.js";import"./DialogBase-Cay5tgui.js";import"./Close-BuMywD3y.js";import"./HelpPopover-BipFBkNI.js";import"./MarkdownPopover-B07suYMP.js";import"./LightTooltip-DMhSxq7g.js";import"./MarkdownSynapse-DKqR68s3.js";import"./SkeletonButton-uDijPjPz.js";import"./SkeletonInlineBlock-DqQYipf9.js";import"./SkeletonTable-WwsVDHsD.js";import"./SkeletonParagraph-nOvV6g22.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
