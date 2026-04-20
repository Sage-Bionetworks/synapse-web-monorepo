import{ax as a,r as i,j as r}from"./iframe-CFYObmv2.js";import{S as c}from"./SynapseNavDrawer-DAdHjtd2.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BHGn9DW6.js";import"./useInfiniteQuery-DrJ287ay.js";import"./useDownloadList-DYfB0en3.js";import"./waitForAsyncResult-B9g--UDd.js";import"./useUserBundle-CFoU7ptg.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-CQ1IksLa.js";import"./ConfirmationDialog-CL-fo0eW.js";import"./DialogBase-RIdyfWbA.js";import"./Close-Bc2bfKRm.js";import"./HelpPopover-X5bLlJph.js";import"./MarkdownPopover-BK0N2ea-.js";import"./LightTooltip-CtPj8f6G.js";import"./MarkdownSynapse-EyWbEoPB.js";import"./SkeletonButton-BAoT4yfs.js";import"./SkeletonInlineBlock-B8gtORn3.js";import"./SkeletonTable-D1Oc41tF.js";import"./SkeletonParagraph-2BG-wyQ2.js";import"./RadioGroup-DWFObhjv.js";import"./Radio-ZTuIi7So.js";import"./SwitchBase-CeR8qk8o.js";import"./FormGroup-BzpXD0bL.js";import"./FormControlLabel-X6sNt4uF.js";import"./Chip-DVyYNIMf.js";import"./SynapseHomepageNavBar-D_0fRnZ-.js";import"./SageResourcesPopover-Ch7gTsed.js";import"./Grid-pC3FVRxR.js";import"./index-DTq8PnfG.js";import"./MenuItem-1x19aVl7.js";import"./UserBadge-CqWrPdDF.js";import"./Card-CVTuX8UO.js";import"./searchDefaults-CL418pky.js";import"./Slide-Chb9IBL6.js";import"./InputAdornment-BbcHVSig.js";import"./listItemButtonClasses-tdOIFwDw.js";import"./Badge-z2WfcmGW.js";import"./usePreviousProps-BAn1aaJG.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
