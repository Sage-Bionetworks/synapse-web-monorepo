import{az as a,j as r,r as i}from"./iframe-CL1UF9wq.js";import{S as c}from"./SynapseNavDrawer-BPus7zmz.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BLRR7TJ8.js";import"./useInfiniteQuery-DWi368jF.js";import"./useDownloadList-BpHusZM-.js";import"./waitForAsyncResult-CPjw8Ifw.js";import"./useGetFeatureFlag-CKmUrMQS.js";import"./useUserBundle-BcHOhtU-.js";import"./useSuspenseQuery-LePCNQBH.js";import"./CreateProjectModal-DeHYn0re.js";import"./ConfirmationDialog-BgArY7GH.js";import"./DialogBase-D_WMzDU9.js";import"./Close-BWRQhN2m.js";import"./HelpPopover-jj4j5zDP.js";import"./MarkdownPopover-BLBfaCop.js";import"./LightTooltip-DY-wPTTk.js";import"./MarkdownSynapse-CdtBHZEE.js";import"./SkeletonButton-CYgioBCP.js";import"./SkeletonInlineBlock-CJQan7gL.js";import"./SkeletonTable-DMqnct0i.js";import"./SkeletonParagraph-D55VBz6b.js";import"./SynapseHomepageNavBar-BzlvS_0x.js";import"./SageResourcesPopover-BKiRLYlK.js";import"./Grid-BA52H04o.js";import"./index-D_p7qk7E.js";import"./MenuItem-LKo31BtE.js";import"./UserBadge-CnO0Rkgm.js";import"./Card-B9BQCfND.js";import"./Chip-DXWiT4yo.js";import"./Slide-BEWkR5T5.js";import"./InputAdornment-DFPs_6TF.js";import"./listItemButtonClasses-C02VQ1J6.js";import"./Badge-o4tGLbls.js";import"./usePreviousProps-D-L7dkh6.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
