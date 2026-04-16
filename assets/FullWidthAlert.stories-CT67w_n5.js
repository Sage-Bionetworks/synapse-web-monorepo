import{ax as a,r as i,j as r}from"./iframe-Dwm9QZ_I.js";import{S as c}from"./SynapseNavDrawer-BUERCesR.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cnlq75rc.js";import"./useInfiniteQuery-uvWeC_ze.js";import"./useDownloadList-C7MNHyxa.js";import"./waitForAsyncResult-D1OBZWiQ.js";import"./useUserBundle-rJLvBIVN.js";import"./CreateProjectModal-BXTHKMtj.js";import"./ConfirmationDialog-CHhvt_BX.js";import"./DialogBase-pWEI67Dp.js";import"./Close-DNV_aDsb.js";import"./HelpPopover-DSvAr6aj.js";import"./MarkdownPopover-ChhIn-uU.js";import"./LightTooltip-3cLsOXKA.js";import"./MarkdownSynapse-DFdN_MTr.js";import"./SkeletonButton-DgRSBFJp.js";import"./SkeletonInlineBlock-Oe83SNYG.js";import"./SkeletonTable-CYNdtRWy.js";import"./SkeletonParagraph-BN0GLaey.js";import"./SynapseHomepageNavBar-DscvR3r8.js";import"./SageResourcesPopover-Ba1AUoK6.js";import"./Grid-BiL9V20c.js";import"./index-unwEzT-4.js";import"./MenuItem-BeAkG7fl.js";import"./UserBadge-DxpQhJxS.js";import"./useUserGroupHeader-Dv2pYMDV.js";import"./Card-Dt1qjp5D.js";import"./Chip-DSK9YH7S.js";import"./searchDefaults-Du986dGC.js";import"./Slide-CLPHDgXL.js";import"./InputAdornment-ChF7stkg.js";import"./listItemButtonClasses-jAAVPZlU.js";import"./Badge-BDrDXI2f.js";import"./usePreviousProps-DCGKHicZ.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
