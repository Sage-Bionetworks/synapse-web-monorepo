import{ax as a,r as i,j as r}from"./iframe-DiPm50UB.js";import{S as c}from"./SynapseNavDrawer-rX9JcUg8.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D-ecNewR.js";import"./useInfiniteQuery-CatJNhxp.js";import"./useDownloadList-BC-VvzuN.js";import"./waitForAsyncResult-Nw08bFIa.js";import"./useUserBundle-Xy4g38YR.js";import"./CreateProjectModal-CLLOoQtI.js";import"./ConfirmationDialog-EphxDidc.js";import"./DialogBase-DSnQo3lU.js";import"./Close-Jre6tOCB.js";import"./HelpPopover-C-0MB3By.js";import"./MarkdownPopover-D6A11oRt.js";import"./LightTooltip-BwkWxZAw.js";import"./MarkdownSynapse-CVBPcDA6.js";import"./SkeletonButton-Bvb1MiX7.js";import"./SkeletonInlineBlock-LodHGZ4G.js";import"./SkeletonTable-DrjQboaV.js";import"./SkeletonParagraph-CeZAzIZD.js";import"./RadioGroup-BJT98eWm.js";import"./Radio-CzlaKIzr.js";import"./SwitchBase-CIORlFGi.js";import"./FormGroup-q2j9yogA.js";import"./FormControlLabel-DJXVjsUK.js";import"./Chip-FHtW8UvL.js";import"./SynapseHomepageNavBar-CD87RWEP.js";import"./SageResourcesPopover-BCP49ec9.js";import"./Grid-CFNAgCmm.js";import"./index-B9ANVuh5.js";import"./MenuItem-V4SUklHJ.js";import"./UserBadge-BjVrhUSw.js";import"./useUserGroupHeader-HRrxzYDs.js";import"./Card-DJkxs2b6.js";import"./searchDefaults-CECjCuRk.js";import"./Slide-D4rX36G_.js";import"./InputAdornment-BhDvPYLb.js";import"./listItemButtonClasses-CiJM6hGw.js";import"./Badge-BOyxS8mk.js";import"./usePreviousProps-Ca8WKoot.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
