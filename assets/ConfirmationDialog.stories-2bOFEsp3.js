import{j as o,B as n}from"./iframe-FEhVLLlO.js";import{C as r}from"./ConfirmationDialog-CG4E-k04.js";import"./index-Chi_LkuB.js";import"./DialogBase-CoYwCscs.js";import"./Close-DZo8bFox.js";import"./HelpPopover-D3iP0jDl.js";import"./MarkdownPopover-DPlLoOvl.js";import"./LightTooltip-CY2wMOzf.js";import"./MarkdownSynapse-FlaLI_XD.js";import"./SkeletonButton-Co5le0HJ.js";import"./SkeletonInlineBlock-DfOva5mF.js";import"./SkeletonTable-B83fe7X5.js";import"./SkeletonParagraph-u_Ry22JM.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
