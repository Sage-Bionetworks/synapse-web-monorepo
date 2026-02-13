import{az as a,j as r,r as i}from"./iframe-D-KER6Qh.js";import{S as c}from"./SynapseNavDrawer-aSSb6hEi.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-jEumcrR8.js";import"./useInfiniteQuery-DdL0acdR.js";import"./useDownloadList-DRRfNtjL.js";import"./waitForAsyncResult-CR0KgjOZ.js";import"./useUserBundle-BJw245DA.js";import"./useSuspenseQuery-BSi61cfF.js";import"./CreateProjectModal-DdqFWbyQ.js";import"./ConfirmationDialog-CSFf9HzN.js";import"./DialogBase-SiFub7hc.js";import"./Close-eai8_-Nr.js";import"./HelpPopover-D8a4-Hdu.js";import"./MarkdownPopover-ZXOIcEPl.js";import"./LightTooltip-CmTwAHaz.js";import"./MarkdownSynapse-CV2HCz36.js";import"./SkeletonButton-BHBiM-A7.js";import"./SkeletonInlineBlock-BwJZpIPy.js";import"./SkeletonTable-C--yRYi2.js";import"./SkeletonParagraph-DuJaGlPU.js";import"./SynapseHomepageNavBar-CBVqkep0.js";import"./SageResourcesPopover-DMl2IGfV.js";import"./Grid-8grLPPZa.js";import"./index-C6MZRWmF.js";import"./MenuItem-Dh0Z5Zi9.js";import"./UserBadge-DPBQCDfd.js";import"./Card-222ytxqR.js";import"./Chip-BMsDoxJ4.js";import"./searchDefaults-DlRdsgPc.js";import"./Slide-DRBSB-cd.js";import"./InputAdornment-DCzwHZPv.js";import"./listItemButtonClasses-BQMHwEyd.js";import"./Badge-DZvbrd90.js";import"./usePreviousProps-DpBYS96o.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
