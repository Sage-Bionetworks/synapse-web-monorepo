import{j as i,d5 as r}from"./iframe-CV5uF1_e.js";import{M as a}from"./MarkdownPopover-DuJ5uVW5.js";import"./index-Chi_LkuB.js";import"./LightTooltip-CPpYn2Kh.js";import"./MarkdownSynapse-DKo3fnwU.js";import"./SkeletonButton-CpwnNhlN.js";import"./SkeletonInlineBlock-CfS9comD.js";import"./SkeletonTable-Dkaqgxy9.js";import"./SkeletonParagraph-CfoCBxY5.js";const{userEvent:c,within:u}=__STORYBOOK_MODULE_TEST__,P={title:"Markdown/MarkdownPopover",component:a,args:{children:i.jsx(r,{}),contentProps:{markdown:""}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=187-6607"}},play:async({canvasElement:n})=>{const s=u(n).getByRole("button");await c.click(s)}},t={args:{contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"}},e={args:{contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Phasellus sed tellus lorem](https://synapse.org/). In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text",onClick:()=>{console.log("Clicked")}}}},o={args:{contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    contentProps: {
      markdown: 'Supports _rendering_ basic **Markdown**.'
    },
    placement: 'bottom'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    contentProps: {
      markdown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Phasellus sed tellus lorem](https://synapse.org/). In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.'
    },
    placement: 'right',
    actionButton: {
      content: 'Show/Hide Hidden Text',
      onClick: () => {
        console.log('Clicked');
      }
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    contentProps: {
      ownerId: 'syn12666371',
      wikiId: '585317'
    },
    showCloseButton: false,
    placement: 'right'
  }
}`,...o.parameters?.docs?.source}}};const f=["NoAction","WithAction","WikiPage"];export{t as NoAction,o as WikiPage,e as WithAction,f as __namedExportsOrder,P as default};
