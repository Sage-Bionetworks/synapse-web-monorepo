import{ay as a,j as r,r as i}from"./iframe-BVXHJH4u.js";import{S as c}from"./SynapseNavDrawer-40eTFsdz.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-gUWdHpe_.js";import"./useInfiniteQuery-D0pzNhrd.js";import"./useDownloadList-CMxiTwx-.js";import"./waitForAsyncResult-q8hB3PB9.js";import"./useGetFeatureFlag-B7qjh0rj.js";import"./useUserBundle-BoxU-Q5V.js";import"./useSuspenseQuery-D29r270q.js";import"./CreateProjectModal-Ud87Naw8.js";import"./ConfirmationDialog-Dd8pw4WU.js";import"./DialogBase-CcwXDs7D.js";import"./Close-CqljNwDC.js";import"./HelpPopover-BbvqYo6O.js";import"./MarkdownPopover-BAO6UTFT.js";import"./LightTooltip-Ds1uGQMo.js";import"./MarkdownSynapse-C6WRwt-e.js";import"./SkeletonButton-B31ULBiJ.js";import"./SkeletonInlineBlock-DtRriEan.js";import"./SkeletonTable-DQbZ0dw9.js";import"./SkeletonParagraph-CPzN7Agp.js";import"./SynapseHomepageNavBar-Ci4L79Ul.js";import"./SageResourcesPopover-Bnubrsl-.js";import"./Grid-By05aazM.js";import"./index-B_trrxS1.js";import"./MenuItem-CfEVbDMR.js";import"./UserBadge-D8YQIqU3.js";import"./Card-DR2RIN77.js";import"./Chip-C4lncqkU.js";import"./Slide-BYQkZcii.js";import"./InputAdornment-BswxQDXQ.js";import"./listItemButtonClasses-BtnOhcIh.js";import"./Badge-DW1koBNJ.js";import"./usePreviousProps-txwnUAs1.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
