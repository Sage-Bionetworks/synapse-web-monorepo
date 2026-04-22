import{ax as a,r as i,j as r}from"./iframe-DvEsUTpQ.js";import{S as c}from"./SynapseNavDrawer-DBTNb108.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-sN81X-69.js";import"./useInfiniteQuery-BdEWda9R.js";import"./useDownloadList-DqwOkJC5.js";import"./waitForAsyncResult-Cyfn5n0_.js";import"./useUserBundle-wmllpVgG.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-bcwweVri.js";import"./ConfirmationDialog-DkIXQsLU.js";import"./DialogBase-DjSguv9P.js";import"./Close-g9h1bwgZ.js";import"./HelpPopover-KzPfIUfL.js";import"./MarkdownPopover-zfAn5NTB.js";import"./LightTooltip-CPlesbUn.js";import"./MarkdownSynapse-G6S7jkSU.js";import"./SkeletonButton-Dd7TiKIa.js";import"./SkeletonInlineBlock-D94lxhr7.js";import"./SkeletonTable-Dt5bLLrY.js";import"./SkeletonParagraph-lw_IwEhg.js";import"./RadioGroup-BzKki668.js";import"./Radio-DEn_Buu3.js";import"./SwitchBase-jh5RIPFl.js";import"./FormGroup-z77k8kTs.js";import"./FormControlLabel-BcuVfQyz.js";import"./Chip-DM8j9a4z.js";import"./SynapseHomepageNavBar-OP-mNTHd.js";import"./SageResourcesPopover-BLX0Un-d.js";import"./Grid-CjxcWtBh.js";import"./index-BttQD56F.js";import"./MenuItem-DvqM882a.js";import"./UserBadge-CXcwNTSZ.js";import"./Card-BwCmC7e8.js";import"./searchDefaults-Dk-TxzmQ.js";import"./Slide-l5OJqbtJ.js";import"./InputAdornment-aYqiAxnk.js";import"./listItemButtonClasses-BiArEVo7.js";import"./Badge-CgFjcl4N.js";import"./usePreviousProps-Blw-B0Rc.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
