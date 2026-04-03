import{ax as a,r as i,j as r}from"./iframe-DYswlUGP.js";import{S as c}from"./SynapseNavDrawer-LiaJe9VS.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DrzXvBYr.js";import"./useInfiniteQuery-C6sjWaRu.js";import"./useDownloadList-Cw4HvMGL.js";import"./waitForAsyncResult-CFmutfoX.js";import"./useUserBundle-DOc2ZPa9.js";import"./CreateProjectModal-Bn_Jk1Ra.js";import"./ConfirmationDialog-BeOhck-W.js";import"./DialogBase-DElhgeR1.js";import"./Close-CREisBj0.js";import"./HelpPopover-CfOwihTA.js";import"./MarkdownPopover-WusZcULb.js";import"./LightTooltip-BnjP_fyR.js";import"./MarkdownSynapse-Dkd6SgfN.js";import"./SkeletonButton-DEMQuh9j.js";import"./SkeletonInlineBlock-CUdvST4e.js";import"./SkeletonTable-D2i5wmbG.js";import"./SkeletonParagraph-DYuPzAGZ.js";import"./SynapseHomepageNavBar-CzwDPdT6.js";import"./SageResourcesPopover-D8SAiLY-.js";import"./Grid-DB5FlxZz.js";import"./index-BMR4-6mU.js";import"./MenuItem-_kEtlbZc.js";import"./UserBadge-DUmGtykH.js";import"./Card-CwPDBa8H.js";import"./Chip-DAxgxn8_.js";import"./searchDefaults-DFIWkDYb.js";import"./Slide-By9dFayO.js";import"./InputAdornment-dfZADeWc.js";import"./listItemButtonClasses-BIRVswYQ.js";import"./Badge-MRrMNG7B.js";import"./usePreviousProps-8XNsrnMc.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
