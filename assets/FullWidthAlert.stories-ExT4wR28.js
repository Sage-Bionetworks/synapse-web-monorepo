import{az as a,j as r,r as i}from"./iframe-D1nGOIH-.js";import{S as c}from"./SynapseNavDrawer-ClU9PHba.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cy0_V_7w.js";import"./useInfiniteQuery-BoAhb982.js";import"./useDownloadList-C_q8iiQb.js";import"./waitForAsyncResult-D4zx6sh1.js";import"./useUserBundle-ET8KNRSc.js";import"./useSuspenseQuery-a9uGkD3u.js";import"./CreateProjectModal-BwKEV66F.js";import"./ConfirmationDialog-KaL_8gr2.js";import"./DialogBase-BnZdlh2N.js";import"./Close-CDjnP_xh.js";import"./HelpPopover-CtFsUa-K.js";import"./MarkdownPopover-B2h4XJDI.js";import"./LightTooltip-CyHZNf0u.js";import"./MarkdownSynapse-DdwRiDDQ.js";import"./SkeletonButton-B1c1lzEn.js";import"./SkeletonInlineBlock-BiIlwrm4.js";import"./SkeletonTable-DawIinBB.js";import"./SkeletonParagraph-DPQazNTU.js";import"./SynapseHomepageNavBar-B8lxX6Tf.js";import"./SageResourcesPopover-Dzd_DIds.js";import"./Grid-Da6jOyt7.js";import"./index-03zVvH3U.js";import"./MenuItem-3MOxvSFm.js";import"./UserBadge-CgnKUoBG.js";import"./Card-tjdQEG3Z.js";import"./Chip-BUJWntqC.js";import"./searchDefaults-e9he5e8S.js";import"./Slide-DKfZaeKx.js";import"./InputAdornment-BihnnFTG.js";import"./listItemButtonClasses-BWGNlQvP.js";import"./Badge-cIxNG3N4.js";import"./usePreviousProps-mKIxkupj.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
