import{ax as a,r as i,j as r}from"./iframe-BfPCYB0E.js";import{S as c}from"./SynapseNavDrawer-Ccn0MwEi.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-G9UeCJ55.js";import"./useInfiniteQuery-DBxaVkr7.js";import"./useDownloadList-CZNpFYqk.js";import"./waitForAsyncResult-srqq3Arv.js";import"./useUserBundle-CKxh-kvY.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-CxKAPMXc.js";import"./ConfirmationDialog-8SnXnQ-s.js";import"./DialogBase-BW5bnvAH.js";import"./Close-Buelrktg.js";import"./HelpPopover-BsJ_8UVh.js";import"./MarkdownPopover-TvgvUYyl.js";import"./LightTooltip-CdZMPFTC.js";import"./MarkdownSynapse-DczAMsEj.js";import"./SkeletonButton-Cp9NnTu7.js";import"./SkeletonInlineBlock-D4QJhjaO.js";import"./SkeletonTable-O-QCdGWt.js";import"./SkeletonParagraph-KYHFxt8I.js";import"./RadioGroup-MlJOR3Si.js";import"./Radio-Bsj327EO.js";import"./SwitchBase-VO4fuz7d.js";import"./FormGroup-B5XwpuBX.js";import"./FormControlLabel-CGx1NWxI.js";import"./Chip-CozfZRmm.js";import"./SynapseHomepageNavBar-JAcz9Mkm.js";import"./SageResourcesPopover-CU7--bMT.js";import"./Grid-Cez_EO-F.js";import"./index-LtIvAFo0.js";import"./MenuItem-Clc-tiPV.js";import"./UserBadge-BeeY2orO.js";import"./Card-BxqLwHVm.js";import"./searchDefaults-KIR1K9UY.js";import"./Slide-BrKqr9uF.js";import"./InputAdornment-B5pujrVX.js";import"./listItemButtonClasses-DnXgjUQR.js";import"./Badge-BJJEkFJH.js";import"./usePreviousProps-ClStBmCy.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
