import{ay as a,j as r,r as i}from"./iframe-D92BdoG9.js";import{S as c}from"./SynapseNavDrawer-fre3BhAs.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-AapazaSy.js";import"./useInfiniteQuery-wn2juHd0.js";import"./useDownloadList-Cl6v8p32.js";import"./waitForAsyncResult-BVOeial9.js";import"./useUserBundle-BBzdm9g8.js";import"./useSuspenseQuery-B_1ZDlRS.js";import"./CreateProjectModal-D6XFNMVI.js";import"./ConfirmationDialog--5BBCv73.js";import"./DialogBase-7QNHfM8i.js";import"./Close-CMNaFelZ.js";import"./HelpPopover-DwSVnQpf.js";import"./MarkdownPopover-DYuidQle.js";import"./LightTooltip-DHXuYbNh.js";import"./MarkdownSynapse-BXkVd7Pm.js";import"./SkeletonButton-DkZdiJnq.js";import"./SkeletonInlineBlock-BoREPhEN.js";import"./SkeletonTable-DmBSaFM1.js";import"./SkeletonParagraph-BlcJcRxn.js";import"./SynapseHomepageNavBar-AreCgRm3.js";import"./SageResourcesPopover-DimqpigF.js";import"./Grid-BmWkcZL3.js";import"./index-CYdrGrZN.js";import"./MenuItem-BJFdqxGb.js";import"./UserBadge-BNFHqCyR.js";import"./Card-CM0Ob5QK.js";import"./Chip-CniQq1ch.js";import"./searchDefaults-B_X3yO4l.js";import"./Slide-B2mItRNi.js";import"./InputAdornment-cVFlk2CZ.js";import"./listItemButtonClasses-BBgB7kdh.js";import"./Badge-BBQhZEBl.js";import"./usePreviousProps-CBLlnvI5.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
