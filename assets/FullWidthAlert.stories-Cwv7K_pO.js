import{ay as a,j as r,r as i}from"./iframe-BnzpyZ4R.js";import{S as c}from"./SynapseNavDrawer-CwBtI0Tj.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CwnHS5xS.js";import"./useInfiniteQuery-DFHV1svZ.js";import"./useDownloadList-C8xPtAEc.js";import"./waitForAsyncResult-BOr1EZ6I.js";import"./useGetFeatureFlag-yllVgGt6.js";import"./useUserBundle-DkcVB5OF.js";import"./useSuspenseQuery-DmgOfBUR.js";import"./CreateProjectModal-CxCpAh85.js";import"./ConfirmationDialog-BnDH1gry.js";import"./DialogBase-MszPryaT.js";import"./Close-R1S7vilm.js";import"./HelpPopover-Dd3HqNDX.js";import"./MarkdownPopover-CNvQsgo4.js";import"./LightTooltip-R3PWvr3X.js";import"./MarkdownSynapse-CvPnj5RJ.js";import"./SkeletonButton-BV5Vd7zv.js";import"./SkeletonInlineBlock-DHtOAZL_.js";import"./SkeletonTable-BvL0lrSq.js";import"./SkeletonParagraph-8Qf6t-Ql.js";import"./SynapseHomepageNavBar-BL6iInuZ.js";import"./SageResourcesPopover-DBb08OlA.js";import"./Grid-DBIc_0Hh.js";import"./index-YZmY-bAV.js";import"./MenuItem-Dybb420V.js";import"./UserBadge-BrDgbY53.js";import"./Card-mUm3rODo.js";import"./Chip-BL4PoAJY.js";import"./Slide-Cc-a1Mu5.js";import"./InputAdornment-CNGuie_I.js";import"./listItemButtonClasses-DGvQ_ViX.js";import"./Badge-DOK4r2X9.js";import"./usePreviousProps-CO1-NR5Z.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
