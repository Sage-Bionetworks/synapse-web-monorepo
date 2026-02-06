import{j as o,B as n}from"./iframe-C4lSw8dA.js";import{C as r}from"./ConfirmationDialog-DNAmwDFA.js";import"./index-Chi_LkuB.js";import"./DialogBase-BGApbNeN.js";import"./Close-DOQSFODY.js";import"./HelpPopover-udz6cmYg.js";import"./MarkdownPopover-DRlkQ0Uc.js";import"./LightTooltip-PrPowMcP.js";import"./MarkdownSynapse-5q-2r_5x.js";import"./SkeletonButton-DQJTIZ4j.js";import"./SkeletonInlineBlock-Ca77zW6S.js";import"./SkeletonTable-DX2YYbbP.js";import"./SkeletonParagraph-DJj1jg11.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
