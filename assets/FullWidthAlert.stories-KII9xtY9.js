import{ax as a,r as i,j as r}from"./iframe-BDH9K3aQ.js";import{S as c}from"./SynapseNavDrawer-C3zQzSFH.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DYSh8nX5.js";import"./useInfiniteQuery-CsOZNg3u.js";import"./useDownloadList-CDeYMDK4.js";import"./waitForAsyncResult-Cx0cMxIa.js";import"./useUserBundle-BHTJB607.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BkQDWFdD.js";import"./ConfirmationDialog-Baaf23T_.js";import"./DialogBase-B3CH9IvN.js";import"./Close-BQ3Dsdqr.js";import"./HelpPopover-rgAqoORW.js";import"./MarkdownPopover-DSGPjAkb.js";import"./LightTooltip-CH8V7Sc-.js";import"./MarkdownSynapse-BfgcgRyQ.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonTable-DpnDnZ6A.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./RadioGroup-B486Tz3Q.js";import"./Radio-B6e-jRet.js";import"./SwitchBase-DtmVnPYE.js";import"./FormGroup-Ccm6WI4f.js";import"./FormControlLabel-hO8hM_0u.js";import"./Chip-DozeHiZL.js";import"./SynapseHomepageNavBar-BLG7-R3W.js";import"./SageResourcesPopover-CL2QSBfa.js";import"./Grid-DIRRIcGz.js";import"./index-BEXoIJDe.js";import"./MenuItem-x7e5wLEf.js";import"./UserBadge-B2zVNa36.js";import"./Card-BL3I6Ntg.js";import"./searchDefaults-CLEFwasu.js";import"./Slide-h1D8W7ro.js";import"./InputAdornment-3-1TVLl7.js";import"./listItemButtonClasses-DxN0fm3N.js";import"./Badge-DoiygAUE.js";import"./usePreviousProps-DxAgpis0.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
