import{n as e}from"./chunk-jRWAZmH_.js";import{MS as t,Zu as n,ru as r}from"./iframe-CCN0AJIy.js";import{n as i,t as a}from"./MarkdownPopover-CwEN7r6x.js";var o,s,c,l,u,d,f,p;e((()=>{i(),r(),o=t(),{userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Markdown/MarkdownPopover`,component:a,args:{children:(0,o.jsx)(n,{}),contentProps:{markdown:``}},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=187-6607`}},play:async({canvasElement:e})=>{let t=c(e).getByRole(`button`);await s.click(t)}},u={args:{contentProps:{markdown:`Supports _rendering_ basic **Markdown**.`},placement:`bottom`}},d={args:{contentProps:{markdown:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Phasellus sed tellus lorem](https://synapse.org/). In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.`},placement:`right`,actionButton:{content:`Show/Hide Hidden Text`,onClick:()=>{console.log(`Clicked`)}}}},f={args:{contentProps:{ownerId:`syn12666371`,wikiId:`585317`},showCloseButton:!1,placement:`right`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    contentProps: {
      markdown: 'Supports _rendering_ basic **Markdown**.'
    },
    placement: 'bottom'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    contentProps: {
      ownerId: 'syn12666371',
      wikiId: '585317'
    },
    showCloseButton: false,
    placement: 'right'
  }
}`,...f.parameters?.docs?.source}}},p=[`NoAction`,`WithAction`,`WikiPage`]}))();export{u as NoAction,f as WikiPage,d as WithAction,p as __namedExportsOrder,l as default};