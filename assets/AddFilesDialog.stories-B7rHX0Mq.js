import{o as e}from"./preload-helper-CsHsquCd.js";import{a as t,i as n,n as r,r as i}from"./AddFilesDialog-D1hCJC9j.js";var a,o,s,c,l,u,d,f,p;e((()=>{i(),t(),{fn:a,userEvent:o,expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Synapse/Chat/AddFilesDialog`,component:r,args:{open:!0,currentAttachmentCount:0,onClose:a(),onAttachmentUploaded:a(),onUploadStateChange:a()},parameters:{requireLogin:!0,stack:`mock`}},u={},d={args:{currentAttachmentCount:20}},f={play:async({canvasElement:e})=>{await c(e.ownerDocument.body).findByText(`Click to upload`);let t=e.ownerDocument.body.querySelector(`input[type="file"][id=filesToUpload]`);s(t).toBeInTheDocument();let r=new File([new Uint8Array(n+1)],`huge-file.txt`,{type:`text/plain`});await o.upload(t,r)}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    currentAttachmentCount: 20
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // DialogBase renders a MUI Dialog, which portals its content to document.body rather than
    // canvasElement, so the file input must be queried from the document.
    const canvas = within(canvasElement.ownerDocument.body);
    await canvas.findByText('Click to upload');
    const fileInput = canvasElement.ownerDocument.body.querySelector<HTMLInputElement>('input[type="file"][id=filesToUpload]')!;
    expect(fileInput).toBeInTheDocument();
    const oversizedFile = new File([new Uint8Array(MAX_ATTACHMENT_FILE_SIZE_BYTES + 1)], 'huge-file.txt', {
      type: 'text/plain'
    });
    await userEvent.upload(fileInput, oversizedFile);
  }
}`,...f.parameters?.docs?.source}}},p=[`Empty`,`AtAttachmentLimit`,`ClientValidationError`]}))();export{d as AtAttachmentLimit,f as ClientValidationError,u as Empty,p as __namedExportsOrder,l as default};