import{az as a,j as r,r as i}from"./iframe-MmUnwf_I.js";import{S as c}from"./SynapseNavDrawer-CeSWnhc0.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C7bUh4ID.js";import"./useInfiniteQuery-B-kwFNwz.js";import"./useDownloadList-Ch8YVR7Z.js";import"./waitForAsyncResult-7dp-BdCi.js";import"./useGetFeatureFlag-BNElDTzo.js";import"./useUserBundle-Dndd3Zuv.js";import"./useSuspenseQuery-BiDsxdrf.js";import"./CreateProjectModal-BpCB9p52.js";import"./ConfirmationDialog-GHfYW2YY.js";import"./DialogBase-jau6DM0L.js";import"./Close-B3vYte_0.js";import"./HelpPopover-DtES8MA2.js";import"./MarkdownPopover-DoWodOdq.js";import"./LightTooltip-4Nk8Q6mg.js";import"./MarkdownSynapse-CVJ0Q6XW.js";import"./SkeletonButton-I9hMZOT-.js";import"./SkeletonInlineBlock-Di0FCUFm.js";import"./SkeletonTable-BLb5k01Q.js";import"./SkeletonParagraph-_n4WmOaG.js";import"./SynapseHomepageNavBar-DDDVLUpY.js";import"./SageResourcesPopover-BOmtmYPN.js";import"./Grid-CwnxfaSd.js";import"./index-DFpfHoB1.js";import"./MenuItem-D3dfLHqd.js";import"./UserBadge-DP5amhmd.js";import"./Card-DpsJeDne.js";import"./Chip-p99lz26K.js";import"./Slide-np73JEDW.js";import"./InputAdornment-PaM0gnVl.js";import"./listItemButtonClasses-D-FBEpbo.js";import"./Badge-C4NWb7qY.js";import"./usePreviousProps-BnWTg5Uo.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
