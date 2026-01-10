import{ay as a,j as r,r as i}from"./iframe-BMVoK9rQ.js";import{S as c}from"./SynapseNavDrawer-C1JZ1FTi.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-N4D9f4a1.js";import"./useInfiniteQuery-3kgmiq4J.js";import"./useDownloadList-Cvc7SXgE.js";import"./waitForAsyncResult-eLoghTqd.js";import"./useUserBundle-sdTO429-.js";import"./useSuspenseQuery-DZOIBk5v.js";import"./CreateProjectModal-BBrozZzD.js";import"./ConfirmationDialog-CkeTu_WW.js";import"./DialogBase-CLwOhWu_.js";import"./Close-B41_ESac.js";import"./HelpPopover-BkrnBFdK.js";import"./MarkdownPopover-Biqfmo0M.js";import"./LightTooltip-CgiGvVpE.js";import"./MarkdownSynapse-BM2SQbDn.js";import"./SkeletonButton-UgghPQrF.js";import"./SkeletonInlineBlock-BqTkLdlE.js";import"./SkeletonTable-7r8fiUSQ.js";import"./SkeletonParagraph-DdPi-rNG.js";import"./SynapseHomepageNavBar-wiPcq3oo.js";import"./SageResourcesPopover-CJvRyrcW.js";import"./Grid-BYrXWW0x.js";import"./index-Asaz_d4d.js";import"./MenuItem-ClKAXsdA.js";import"./UserBadge-D3W1hFC1.js";import"./Card-dTGT8nbt.js";import"./Chip-Bv1Iw22F.js";import"./Slide-B8JhEer4.js";import"./InputAdornment-CrCJUmpP.js";import"./listItemButtonClasses-CNkVRPg1.js";import"./Badge-Bei6E6wf.js";import"./usePreviousProps-ChtxqB3c.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
