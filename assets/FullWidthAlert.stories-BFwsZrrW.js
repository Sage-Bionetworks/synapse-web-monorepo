import{ay as a,j as r,r as i}from"./iframe-DVNYwO2X.js";import{S as c}from"./SynapseNavDrawer-CO5TccTd.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B4DUe1BE.js";import"./useInfiniteQuery-B9oS7yw5.js";import"./useDownloadList-CEsQRRSV.js";import"./waitForAsyncResult-BYoUXfHm.js";import"./useGetFeatureFlag-DCNCQQ4_.js";import"./useUserBundle-DscWjVV3.js";import"./useSuspenseQuery-33kCA9BT.js";import"./CreateProjectModal-rLXn7eOA.js";import"./ConfirmationDialog-u7vUp13p.js";import"./DialogBase-D-pfxM0N.js";import"./Close-BRaPVnbs.js";import"./HelpPopover-CGudOJSg.js";import"./MarkdownPopover-BeI37cFn.js";import"./LightTooltip-bl3iHu17.js";import"./MarkdownSynapse-5ft7ZGQf.js";import"./SkeletonButton-CiDtB3IB.js";import"./SkeletonInlineBlock-Bgae_khf.js";import"./SkeletonTable-BpqkbE8o.js";import"./SkeletonParagraph-Bq0xaWku.js";import"./SynapseHomepageNavBar-BsyjVFUU.js";import"./SageResourcesPopover-xYQtB90R.js";import"./Grid-CwhdJPOL.js";import"./index-9hqwGMA7.js";import"./MenuItem-Ci0bIVjj.js";import"./UserBadge-Q4jkqetP.js";import"./Card-C6iAvcUJ.js";import"./Chip-sOf8CffO.js";import"./Slide-CFoehVmg.js";import"./InputAdornment-ixiV28qj.js";import"./listItemButtonClasses-Bb6i5z9V.js";import"./Badge-Liq5peIe.js";import"./usePreviousProps-BplBI0Ga.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
