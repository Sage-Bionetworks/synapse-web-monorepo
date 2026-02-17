import{az as a,j as r,r as i}from"./iframe-QjK0KVVQ.js";import{S as c}from"./SynapseNavDrawer-Dhu_q7Jx.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CFAOiCGy.js";import"./useInfiniteQuery-DM0-hvaX.js";import"./useDownloadList-CchYwj8e.js";import"./waitForAsyncResult-iUeXEyPp.js";import"./useUserBundle-Dn3kF_9B.js";import"./useSuspenseQuery--yWao2XD.js";import"./CreateProjectModal-Dj9M4wpW.js";import"./ConfirmationDialog-CJ0Oe_Vw.js";import"./DialogBase-Bnbk1wpc.js";import"./Close-ltRbb3Rg.js";import"./HelpPopover-BpJ-d2_g.js";import"./MarkdownPopover-ifjW-JKf.js";import"./LightTooltip-DkeOmngM.js";import"./MarkdownSynapse-CdDnnKnp.js";import"./SkeletonButton-Cyy2rcJm.js";import"./SkeletonInlineBlock-B3R_0ID9.js";import"./SkeletonTable-tKivh0dA.js";import"./SkeletonParagraph-Ca34h4bh.js";import"./SynapseHomepageNavBar-BoH3QbK8.js";import"./SageResourcesPopover-CEXe-eB9.js";import"./Grid-Y6-3S9F7.js";import"./index-YuzRGUHA.js";import"./MenuItem-Bngl7c_k.js";import"./UserBadge-DiIJq8ah.js";import"./Card-DR2DyePr.js";import"./Chip-Czdb_SG1.js";import"./searchDefaults-SHs0i-WO.js";import"./Slide-CobTeZ7x.js";import"./InputAdornment-BLBSCLN7.js";import"./listItemButtonClasses-Dhr_m3L8.js";import"./Badge-D9BHdDNY.js";import"./usePreviousProps-BTW6Gk7O.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
