import{ay as a,j as r,r as i}from"./iframe-CaOcC-hf.js";import{S as c}from"./SynapseNavDrawer-DBOJ6JBS.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CdV3AjAj.js";import"./useInfiniteQuery-DsHtYM7m.js";import"./useDownloadList-D9m0aKVb.js";import"./waitForAsyncResult-DPibSOoJ.js";import"./useUserBundle-Dyiy-2qt.js";import"./useSuspenseQuery-D6gXheFj.js";import"./CreateProjectModal-CkZLgD2T.js";import"./ConfirmationDialog-D38gahaL.js";import"./DialogBase-Dn94ypHd.js";import"./Close-7gN2buzZ.js";import"./HelpPopover-DtGoLtv4.js";import"./MarkdownPopover-pxj3Gfsw.js";import"./LightTooltip-DLMcdQ8O.js";import"./MarkdownSynapse-Bu_iQFQg.js";import"./SkeletonButton-C1Ne2e4S.js";import"./SkeletonInlineBlock-CXC8p12o.js";import"./SkeletonTable-BGTjeLmw.js";import"./SkeletonParagraph-DlGa_aoP.js";import"./SynapseHomepageNavBar-BuILNDBy.js";import"./SageResourcesPopover-CSzlx4qb.js";import"./Grid-BGFct7I5.js";import"./index-DGAj4kvP.js";import"./MenuItem-BUoZ5k6v.js";import"./UserBadge-BkOupbtC.js";import"./Card-CpYJILgz.js";import"./Chip-B_m5Zg1D.js";import"./Slide-B_gOmDTJ.js";import"./InputAdornment-FBJzNouj.js";import"./listItemButtonClasses-CIaxaW0u.js";import"./Badge-CSpS5AlH.js";import"./usePreviousProps-BhnKP3Pz.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
