import{ax as a,r as i,j as r}from"./iframe-CDo31VQT.js";import{S as c}from"./SynapseNavDrawer-CoDFLqmK.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DVDUPkuz.js";import"./useInfiniteQuery-zNzDu-Ai.js";import"./useDownloadList-B2B2gqWF.js";import"./waitForAsyncResult-ChZvZUb3.js";import"./useUserBundle-BO5FAfwo.js";import"./CreateProjectModal-Ci1qTs06.js";import"./ConfirmationDialog-C5P_AirD.js";import"./DialogBase-E8WFtgAh.js";import"./Close-CuElEuLY.js";import"./HelpPopover-C32osPto.js";import"./MarkdownPopover-CvGVbAgl.js";import"./LightTooltip-xFNFrir-.js";import"./MarkdownSynapse-BY4P5oyv.js";import"./SkeletonButton-5CdV1WvK.js";import"./SkeletonInlineBlock-DWU8rLPE.js";import"./SkeletonTable-DUiAsn0J.js";import"./SkeletonParagraph-KDbQ1Dqi.js";import"./RadioGroup-DrxPVbpC.js";import"./Radio-BZWIAEbQ.js";import"./SwitchBase-UfViqCLi.js";import"./FormGroup-Cf4VLm4P.js";import"./FormControlLabel-D6JSzQu3.js";import"./Chip-B6hxaUER.js";import"./SynapseHomepageNavBar-C5myszLo.js";import"./SageResourcesPopover-DbGKXmwt.js";import"./Grid-B6QExvce.js";import"./index-n3RJ91jU.js";import"./MenuItem-CM8kbxyL.js";import"./UserBadge-CglgAQ0Y.js";import"./useUserGroupHeader-Cf-nNW5u.js";import"./Card-BmXOSgoq.js";import"./searchDefaults-DTQarGKT.js";import"./Slide-d3N6fGmo.js";import"./InputAdornment-CNJrB_wJ.js";import"./listItemButtonClasses-B5zecWfz.js";import"./Badge-D3l9QNZa.js";import"./usePreviousProps-CMRxk_ZT.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
