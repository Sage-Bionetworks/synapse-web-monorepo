import{aA as a,j as r,r as i}from"./iframe-Dj9QuIYm.js";import{S as c}from"./SynapseNavDrawer-DuMmoeMS.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-gB38uxWn.js";import"./useInfiniteQuery-BlRW4UqT.js";import"./useDownloadList-DEw-2Bec.js";import"./waitForAsyncResult-sQtuNCJj.js";import"./useUserBundle-Be3ZpYDW.js";import"./CreateProjectModal-BygVYDqv.js";import"./ConfirmationDialog-Dwbyyygg.js";import"./DialogBase-Dda3MpTM.js";import"./Close-BjHtaxrZ.js";import"./HelpPopover-BLYAVpYE.js";import"./MarkdownPopover-CcYcEdRz.js";import"./LightTooltip-e6_OdOFE.js";import"./MarkdownSynapse-Dau4XtwA.js";import"./SkeletonButton-iTrOeh7-.js";import"./SkeletonInlineBlock-D2uK1sRl.js";import"./SkeletonTable-rcTO73Uk.js";import"./SkeletonParagraph-8dZQFouk.js";import"./SynapseHomepageNavBar-DHUsCX27.js";import"./SageResourcesPopover-QCvO_aWa.js";import"./Grid-PsRNIPe8.js";import"./index-BLkPSDKJ.js";import"./MenuItem-Bpg2cwa6.js";import"./UserBadge-DfzXK9k4.js";import"./Card-Cb_raR4S.js";import"./Chip-Dc-U4nz3.js";import"./searchDefaults-PEcU347L.js";import"./Slide-D5JAlhNk.js";import"./InputAdornment-BRSw7Gvv.js";import"./listItemButtonClasses-DBPUANJZ.js";import"./Badge-Co2Vwypb.js";import"./usePreviousProps-oIKpEDMS.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
