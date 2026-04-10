import{ax as a,r as i,j as r}from"./iframe-90f2SQV6.js";import{S as c}from"./SynapseNavDrawer-Csas-0p8.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Ci4qTGDg.js";import"./useInfiniteQuery-B6I0bq03.js";import"./useDownloadList-Bbtk-t4D.js";import"./waitForAsyncResult-CVdtmRIr.js";import"./useUserBundle-C1tRTjHW.js";import"./CreateProjectModal-ThdkIG24.js";import"./ConfirmationDialog-DhI1owhm.js";import"./DialogBase-BMvwer8M.js";import"./Close-BwldKowt.js";import"./HelpPopover-3OLq6Qvv.js";import"./MarkdownPopover-C7xEr92D.js";import"./LightTooltip-DEc6XzHa.js";import"./MarkdownSynapse-CYc-SfSz.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonTable-CUhBOjKD.js";import"./SkeletonParagraph-Bta19Z9s.js";import"./SynapseHomepageNavBar-COC7jp2P.js";import"./SageResourcesPopover-Dd6qOU-Q.js";import"./Grid-BHxxwVIG.js";import"./index-DBtU2uN0.js";import"./MenuItem-BuPaY9i0.js";import"./UserBadge-BhjoWwGQ.js";import"./useUserGroupHeader-3u-W-R_V.js";import"./Card-BjkUBjOd.js";import"./Chip-DkWyanB2.js";import"./searchDefaults-Cwi88pXW.js";import"./Slide-zTH1eTkQ.js";import"./InputAdornment-By0Yayj0.js";import"./listItemButtonClasses-oeVRGQYM.js";import"./Badge-DhZpa5nU.js";import"./usePreviousProps-BMS-JDpN.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
