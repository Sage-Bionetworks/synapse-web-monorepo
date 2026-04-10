import{ax as a,r as i,j as r}from"./iframe-BCS2zFLE.js";import{S as c}from"./SynapseNavDrawer-B93CIg3j.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Bmhs3bt_.js";import"./useInfiniteQuery-C7RDpDyE.js";import"./useDownloadList-CvZKspBn.js";import"./waitForAsyncResult-DCvipv8q.js";import"./useUserBundle-CeR9IeV9.js";import"./CreateProjectModal-4PaNxPb2.js";import"./ConfirmationDialog-BsPPfOv5.js";import"./DialogBase-DQkj6zY_.js";import"./Close-D_V12edy.js";import"./HelpPopover-S99r4Lui.js";import"./MarkdownPopover-BSxLlxLY.js";import"./LightTooltip-CQxu9Yos.js";import"./MarkdownSynapse-CJf-YsFP.js";import"./SkeletonButton-BlPG-SPD.js";import"./SkeletonInlineBlock-9a6I1Gvz.js";import"./SkeletonTable-D-hZBWBR.js";import"./SkeletonParagraph-Ch_An-pk.js";import"./SynapseHomepageNavBar-CpqqUouB.js";import"./SageResourcesPopover-DUFB6jFH.js";import"./Grid-LqL3SHkR.js";import"./index-BEuukshQ.js";import"./MenuItem-p1NQf3Mg.js";import"./UserBadge-C35_-Ssp.js";import"./useUserGroupHeader-rqOoqMM6.js";import"./Card-DPmweuYt.js";import"./Chip-BWwS-E8w.js";import"./searchDefaults-H0yXQ5p-.js";import"./Slide-w5XxTQqg.js";import"./InputAdornment-CEGO8EV3.js";import"./listItemButtonClasses-CaYoUFjn.js";import"./Badge-KusSLny8.js";import"./usePreviousProps-Dzc1i5J4.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
