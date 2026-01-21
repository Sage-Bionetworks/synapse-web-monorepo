import{j as o,B as n}from"./iframe-iaFph9yc.js";import{C as r}from"./ConfirmationDialog-Cv2UpenB.js";import"./index-Chi_LkuB.js";import"./DialogBase-7SF-wmQP.js";import"./Close-Bjrfd6AQ.js";import"./HelpPopover-BaZV2lZ_.js";import"./MarkdownPopover-BNEfL_Q8.js";import"./LightTooltip-bP90seli.js";import"./MarkdownSynapse-B4ghWRuT.js";import"./SkeletonButton-B6vkGKKc.js";import"./SkeletonInlineBlock-t24_wtaY.js";import"./SkeletonTable-B2Y-Wv49.js";import"./SkeletonParagraph-BYLtoQSS.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
