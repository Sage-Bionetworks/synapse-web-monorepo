import{az as a,j as r,r as i}from"./iframe-DRnLZq4W.js";import{S as c}from"./SynapseNavDrawer-CTEM1kqo.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-ct3sWJ78.js";import"./useInfiniteQuery-CEfwzGx4.js";import"./useDownloadList-DvqqDch5.js";import"./waitForAsyncResult-DDcZkwWi.js";import"./useUserBundle-CVIljxhV.js";import"./CreateProjectModal-GzBSOmZ2.js";import"./ConfirmationDialog-CeVKY213.js";import"./DialogBase-DBv4DzqI.js";import"./Close-Lw7VtlJf.js";import"./HelpPopover-QWyK0RpX.js";import"./MarkdownPopover-DkKnwS9d.js";import"./LightTooltip-BATo5oyN.js";import"./MarkdownSynapse-BmDBsUdI.js";import"./SkeletonButton-DKOFMwSN.js";import"./SkeletonInlineBlock-qphYniCB.js";import"./SkeletonTable-BRvwRKgI.js";import"./SkeletonParagraph-gWuTxaCe.js";import"./SynapseHomepageNavBar-J4DOrp_D.js";import"./SageResourcesPopover-DyukPrLG.js";import"./Grid-ocV7cG9J.js";import"./index-C6Fl73J9.js";import"./MenuItem-FdihTtHL.js";import"./UserBadge-CuN2K17l.js";import"./Card-Boln_G58.js";import"./Chip-X2PFaiz1.js";import"./searchDefaults-BKKXc7nH.js";import"./Slide-BjuylRb2.js";import"./InputAdornment--Hh6Lf7Q.js";import"./listItemButtonClasses-B9Hm_ZqE.js";import"./Badge-BWeMTOOZ.js";import"./usePreviousProps-Cw5ajIaX.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
