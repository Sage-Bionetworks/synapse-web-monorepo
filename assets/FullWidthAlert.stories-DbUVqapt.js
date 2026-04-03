import{ax as a,r as i,j as r}from"./iframe-DnxOmzjq.js";import{S as c}from"./SynapseNavDrawer-DpYBY_86.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cn75LVuW.js";import"./useInfiniteQuery-BiSYghaZ.js";import"./useDownloadList-BfHGGXza.js";import"./waitForAsyncResult-BAePJVUi.js";import"./useUserBundle-ecNJunIY.js";import"./CreateProjectModal-CGo2l0f2.js";import"./ConfirmationDialog-DmtyRXb1.js";import"./DialogBase-D3z_RB8X.js";import"./Close-BG6pWxxQ.js";import"./HelpPopover-7iTAnRZF.js";import"./MarkdownPopover-BBvcdCrE.js";import"./LightTooltip-DBTB_o03.js";import"./MarkdownSynapse-Dhwl4QzF.js";import"./SkeletonButton-BsjS3fr7.js";import"./SkeletonInlineBlock-Df91B-1t.js";import"./SkeletonTable-CwpgexC9.js";import"./SkeletonParagraph-gynKm0um.js";import"./SynapseHomepageNavBar-C62N2Qky.js";import"./SageResourcesPopover-CcaR7Q56.js";import"./Grid-B--VudpN.js";import"./index-CXjrgaVo.js";import"./MenuItem-CSaQiiYA.js";import"./UserBadge-C7ZoT0us.js";import"./Card-CWfitOUI.js";import"./Chip-IfgFn8uB.js";import"./searchDefaults-rgwT8zgL.js";import"./Slide-Dx_ugNrq.js";import"./InputAdornment-Cs24ViBN.js";import"./listItemButtonClasses-Dx3JM9G1.js";import"./Badge-B39irBHU.js";import"./usePreviousProps-DDp_4LnU.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
