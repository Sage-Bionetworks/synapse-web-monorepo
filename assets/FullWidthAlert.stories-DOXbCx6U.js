import{ay as a,j as r,r as i}from"./iframe-ClE2Hy4B.js";import{S as c}from"./SynapseNavDrawer-CvfavgBp.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-gY4Zpi-H.js";import"./useInfiniteQuery-JunBPFxO.js";import"./useDownloadList-CjIZYBd1.js";import"./waitForAsyncResult-DSJ6PnH_.js";import"./useUserBundle-0g-k7q7C.js";import"./CreateProjectModal-H1V0pVkd.js";import"./ConfirmationDialog-BMQMl3nb.js";import"./DialogBase-DsoF6kFj.js";import"./Close-B-5zc9Mn.js";import"./HelpPopover-CS-MG7ku.js";import"./MarkdownPopover-BV7I0bXQ.js";import"./LightTooltip-CUHr0mUG.js";import"./MarkdownSynapse-b_n8loNV.js";import"./SkeletonButton-DSmPjAvU.js";import"./SkeletonInlineBlock-DYja8lR7.js";import"./SkeletonTable-D7N707Oc.js";import"./SkeletonParagraph-Br74pmuK.js";import"./SynapseHomepageNavBar-C_V_Vbwa.js";import"./SageResourcesPopover-pnJyqQwn.js";import"./Grid-BqzM4-vy.js";import"./index-C7fdTBbx.js";import"./MenuItem-BLx0eK9Y.js";import"./UserBadge-CYUXPM6m.js";import"./Card-C6ZtLTcC.js";import"./Chip-BpTWRkwH.js";import"./searchDefaults-BTqcU-1b.js";import"./Slide-Co39nNMz.js";import"./InputAdornment-BlAhfAWe.js";import"./listItemButtonClasses-t-CZSWTm.js";import"./Badge-9hNErLnC.js";import"./usePreviousProps-CWdY3sUd.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
