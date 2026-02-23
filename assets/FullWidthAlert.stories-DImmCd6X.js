import{az as a,j as r,r as i}from"./iframe-bA05VlDB.js";import{S as c}from"./SynapseNavDrawer-DuDOfHPN.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BHvWMzjY.js";import"./useInfiniteQuery-DI02BS_t.js";import"./useDownloadList-BdXzRTAv.js";import"./waitForAsyncResult-Btgzc3Si.js";import"./useUserBundle-C5zElDJN.js";import"./useSuspenseQuery-Zel5Xy26.js";import"./CreateProjectModal-Da-R0oqf.js";import"./ConfirmationDialog-C0bbEsUc.js";import"./DialogBase-vddOc5dA.js";import"./Close-BgXrYz09.js";import"./HelpPopover-BzTlr5XD.js";import"./MarkdownPopover-B1EOARnN.js";import"./LightTooltip-Blh-KN0r.js";import"./MarkdownSynapse-BUlv3hnh.js";import"./SkeletonButton-D2qH20IX.js";import"./SkeletonInlineBlock-D2v7KJSi.js";import"./SkeletonTable-C3k8u3nb.js";import"./SkeletonParagraph-DlcYTizK.js";import"./SynapseHomepageNavBar-D3JW0wvm.js";import"./SageResourcesPopover-W2ksx7Xq.js";import"./Grid-B7LF-N5n.js";import"./index-C4a7Rce_.js";import"./MenuItem-DFGunzbN.js";import"./UserBadge-DmE9Q2UM.js";import"./Card-D2Ee3gfr.js";import"./Chip-vyXQw8tV.js";import"./searchDefaults-tq8nKZyu.js";import"./Slide-D6hvF-u-.js";import"./InputAdornment-DDPop6eJ.js";import"./listItemButtonClasses-DHhqHtAw.js";import"./Badge-BvS5P_iG.js";import"./usePreviousProps-DIAbQ4jC.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
