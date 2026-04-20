import{ax as a,r as i,j as r}from"./iframe-Gl2uG7Gu.js";import{S as c}from"./SynapseNavDrawer-sl7t8IZI.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-jOu8cgyr.js";import"./useInfiniteQuery-B8esF6xB.js";import"./useDownloadList-802cA3HC.js";import"./waitForAsyncResult-DBIfaERF.js";import"./useUserBundle-BOqjtCMe.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-Daqc5mnS.js";import"./ConfirmationDialog-CkI_Ky3R.js";import"./DialogBase-CFDv1eZ2.js";import"./Close-D3nqMVPZ.js";import"./HelpPopover-FfzFHXn8.js";import"./MarkdownPopover-CvADHgL2.js";import"./LightTooltip-DCTLNLfM.js";import"./MarkdownSynapse-Dvsaf59R.js";import"./SkeletonButton-CAFmp0_I.js";import"./SkeletonInlineBlock-BdepDM7J.js";import"./SkeletonTable-DN89Pk10.js";import"./SkeletonParagraph-Ck270a2X.js";import"./RadioGroup-D-asg-mZ.js";import"./Radio-DMUEn6SK.js";import"./SwitchBase-fjg8G-tJ.js";import"./FormGroup-BcPdbL3e.js";import"./FormControlLabel-BhQ-7Pqi.js";import"./Chip-DiD-80ip.js";import"./SynapseHomepageNavBar-DpznvNWg.js";import"./SageResourcesPopover-C3tytf_7.js";import"./Grid-Bw2tg2Qw.js";import"./index-Dl1iid2-.js";import"./MenuItem-DDtGYU59.js";import"./UserBadge-RCt5BhEq.js";import"./Card-W8tHan4r.js";import"./searchDefaults-BuOVWy7S.js";import"./Slide-DRLSrds5.js";import"./InputAdornment-C8juoqyx.js";import"./listItemButtonClasses-PeSON1or.js";import"./Badge-BU5lBH9z.js";import"./usePreviousProps-Cy9XFhAc.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
