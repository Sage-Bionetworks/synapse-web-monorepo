import{az as a,j as r,r as i}from"./iframe-D-3jDgkP.js";import{S as c}from"./SynapseNavDrawer-Drrk4ppi.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Dm25y_6r.js";import"./useInfiniteQuery-C8k1H9sd.js";import"./useDownloadList-Cd10xXED.js";import"./waitForAsyncResult-WMh-8KoC.js";import"./useGetFeatureFlag-uTG28Hcz.js";import"./useUserBundle-B_3OQShc.js";import"./useSuspenseQuery-CtXxGYgq.js";import"./CreateProjectModal-Chn7eDUi.js";import"./ConfirmationDialog-BV5SAAe9.js";import"./DialogBase-BUof1-nB.js";import"./Close-ByM6mNY6.js";import"./HelpPopover-DV6SUIjj.js";import"./MarkdownPopover-BlAtFiSx.js";import"./LightTooltip-DeeNgOG_.js";import"./MarkdownSynapse-CYhP7mn0.js";import"./SkeletonButton-C7XBrhUR.js";import"./SkeletonInlineBlock-DPp6vqqG.js";import"./SkeletonTable-gbeUh3ur.js";import"./SkeletonParagraph-BGwjKkDC.js";import"./SynapseHomepageNavBar-B3Ye_VmD.js";import"./SageResourcesPopover-B3xTRGx2.js";import"./Grid-D-Fepwy6.js";import"./index-DB-dn3wn.js";import"./MenuItem-aznIDkac.js";import"./UserBadge-D2SDTi18.js";import"./Card-C30_Jw7R.js";import"./Chip-CH85Kc0i.js";import"./Slide-ChWKR5LL.js";import"./InputAdornment-DBOur7Wl.js";import"./listItemButtonClasses-dd7ynsmY.js";import"./Badge-BMjLze7-.js";import"./usePreviousProps-zH3RsD8o.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
