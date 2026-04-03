import{ax as a,r as i,j as r}from"./iframe-BwdMKcfW.js";import{S as c}from"./SynapseNavDrawer-BMKNzhBF.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BCeu0-rY.js";import"./useInfiniteQuery-BjFBPSmE.js";import"./useDownloadList-CS9Y1say.js";import"./waitForAsyncResult-DrmfXHAO.js";import"./useUserBundle-BXxupc5B.js";import"./CreateProjectModal-DAV1XmpU.js";import"./ConfirmationDialog-EESVjpz0.js";import"./DialogBase-BFX7NXuk.js";import"./Close-CCUUydcy.js";import"./HelpPopover-CYbiM6iC.js";import"./MarkdownPopover-DR3WgxmO.js";import"./LightTooltip-C5q6jm3B.js";import"./MarkdownSynapse-N8osBNe-.js";import"./SkeletonButton-DUX7R0sB.js";import"./SkeletonInlineBlock-CGQ5Gfg-.js";import"./SkeletonTable-O-mI3Ojq.js";import"./SkeletonParagraph-CepsPnNp.js";import"./SynapseHomepageNavBar-l1Tgurh-.js";import"./SageResourcesPopover-Ccfdazlm.js";import"./Grid-BDNOy2GH.js";import"./index-DPZa-GBy.js";import"./MenuItem-DnEBuXas.js";import"./UserBadge-CA7iopPx.js";import"./Card-Bl3eAq5k.js";import"./Chip-CdEMn9W3.js";import"./searchDefaults-CMSWBA17.js";import"./Slide-BeKp88xX.js";import"./InputAdornment-D2f6qeZk.js";import"./listItemButtonClasses-BI3ECPfO.js";import"./Badge-Dfxpd0Kr.js";import"./usePreviousProps-Bo7rFF-f.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
