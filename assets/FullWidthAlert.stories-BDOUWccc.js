import{ay as a,j as r,r as i}from"./iframe-DmQVC8QI.js";import{S as c}from"./SynapseNavDrawer-xRR3fl0x.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C29PT5Ed.js";import"./useInfiniteQuery-B2-G7M8y.js";import"./useDownloadList-DteUBUOd.js";import"./waitForAsyncResult-Dl15MFWN.js";import"./useUserBundle-BJGdVvY0.js";import"./useSuspenseQuery-BohpWjm9.js";import"./CreateProjectModal-Dij8Augc.js";import"./ConfirmationDialog-OJeXIr_I.js";import"./DialogBase-Bs_nIYab.js";import"./Close-BMrHQB2l.js";import"./HelpPopover-DRZXBx0T.js";import"./MarkdownPopover-BdSro2xf.js";import"./LightTooltip-he-g-8N4.js";import"./MarkdownSynapse-DmgMCbzG.js";import"./SkeletonButton-DiNloKU2.js";import"./SkeletonInlineBlock-DroApun6.js";import"./SkeletonTable-C27BPd4C.js";import"./SkeletonParagraph-uPmYqKww.js";import"./SynapseHomepageNavBar-BquZaWKO.js";import"./SageResourcesPopover-DBubaWJW.js";import"./Grid-CduLv2x6.js";import"./index-Br7gKF9R.js";import"./MenuItem-CiiNgcaW.js";import"./UserBadge-BHL22CUj.js";import"./Card-sv0DQAow.js";import"./Chip-OD2C4O6J.js";import"./Slide-C58M1DV-.js";import"./InputAdornment-B0xl7FZN.js";import"./listItemButtonClasses-Dc93xVPk.js";import"./Badge-BldeE0Ht.js";import"./usePreviousProps-BkWKw8d8.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
