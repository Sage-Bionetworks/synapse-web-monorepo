import{az as a,j as r,r as i}from"./iframe-CAtQIdHN.js";import{S as c}from"./SynapseNavDrawer-j2Jrm67r.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-ZKViccsk.js";import"./useInfiniteQuery-BLpRTFv2.js";import"./useDownloadList-CUPGY20O.js";import"./waitForAsyncResult-jnXoN6HT.js";import"./useUserBundle-CwtPx6I8.js";import"./CreateProjectModal-59uhx8sK.js";import"./ConfirmationDialog-DyMwO9XA.js";import"./DialogBase-nASrT1FI.js";import"./Close-D6EAZUK8.js";import"./HelpPopover-gTGEtHsE.js";import"./MarkdownPopover-BwU3z6dR.js";import"./LightTooltip-B_-PEZcf.js";import"./MarkdownSynapse-Bl9eZLoo.js";import"./SkeletonButton-ikrND2s9.js";import"./SkeletonInlineBlock-BsYWVoeU.js";import"./SkeletonTable-CGYf92GP.js";import"./SkeletonParagraph-BrBu-G7u.js";import"./SynapseHomepageNavBar-S2a_JtEZ.js";import"./SageResourcesPopover-BJOMhZvJ.js";import"./Grid-B9xtwq2L.js";import"./index-DVkiAmff.js";import"./MenuItem-CMeMzyXl.js";import"./UserBadge-CJEZfb06.js";import"./Card-CS8vcmlr.js";import"./Chip-CfWpGXU5.js";import"./searchDefaults-BPpYIDoH.js";import"./Slide-B9wiwey7.js";import"./InputAdornment-2BEVXnBh.js";import"./listItemButtonClasses-DmHw4WH8.js";import"./Badge-Ce1vxaAI.js";import"./usePreviousProps-NkWMg1Gg.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
