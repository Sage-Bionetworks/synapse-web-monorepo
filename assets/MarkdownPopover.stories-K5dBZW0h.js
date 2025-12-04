import{j as g,d5 as w}from"./iframe-APCqMGQN.js";import{M as h}from"./MarkdownPopover-B00IKW0p.js";import"./index-r8ZA1smB.js";import"./LightTooltip-PuK_Y7Ky.js";import"./MarkdownSynapse-3Z4rZ9Dt.js";import"./SkeletonButton-BmM8-g6B.js";import"./SkeletonInlineBlock-CeF_-ICV.js";import"./SkeletonTable-DvijJWyz.js";import"./SkeletonParagraph-D-_OgKUm.js";const{userEvent:k,within:v}=__STORYBOOK_MODULE_TEST__,I={title:"Markdown/MarkdownPopover",component:h,args:{children:g.jsx(w,{}),contentProps:{markdown:""}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=187-6607"}},play:async({canvasElement:d})=>{const p=v(d).getByRole("button");await k.click(p)}},t={args:{contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"}},e={args:{contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Phasellus sed tellus lorem](https://synapse.org/). In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text",onClick:()=>{console.log("Clicked")}}}},o={args:{contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    contentProps: {
      markdown: 'Supports _rendering_ basic **Markdown**.'
    },
    placement: 'bottom'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var r,a,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,m,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    contentProps: {
      ownerId: 'syn12666371',
      wikiId: '585317'
    },
    showCloseButton: false,
    placement: 'right'
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const T=["NoAction","WithAction","WikiPage"];export{t as NoAction,o as WikiPage,e as WithAction,T as __namedExportsOrder,I as default};
