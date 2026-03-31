import{ay as a,j as r,r as i}from"./iframe-Cr4rsgj7.js";import{S as c}from"./SynapseNavDrawer-M0drsyje.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BxgHZZsb.js";import"./useInfiniteQuery-B_Omzybh.js";import"./useDownloadList-BfOpbsbF.js";import"./waitForAsyncResult-pToJZ9pt.js";import"./useUserBundle-DQ1m5zbR.js";import"./CreateProjectModal-_zRjDq-w.js";import"./ConfirmationDialog-D9Jug8b8.js";import"./DialogBase-1oSnX0hp.js";import"./Close-Ci5OvHK6.js";import"./HelpPopover-DdF66tTF.js";import"./MarkdownPopover-D3AmFDvC.js";import"./LightTooltip-DsylXgAu.js";import"./MarkdownSynapse-CDDbIt-9.js";import"./SkeletonButton-C33Abn2f.js";import"./SkeletonInlineBlock-w--GqSHA.js";import"./SkeletonTable-wr8tjygS.js";import"./SkeletonParagraph-DJhgoEyf.js";import"./SynapseHomepageNavBar-BePTLF4L.js";import"./SageResourcesPopover-Cp2QcWrM.js";import"./Grid-WJmRpyZS.js";import"./index-MNSnOiaj.js";import"./MenuItem-Ct9EBmwz.js";import"./UserBadge-DqLO5d9Y.js";import"./Card-9HzHl1Tz.js";import"./Chip-DjKXoZBc.js";import"./searchDefaults-d0DfyEOS.js";import"./Slide-DAhH_aMa.js";import"./InputAdornment-CvShDDup.js";import"./listItemButtonClasses-CyyPIGmf.js";import"./Badge-BOHOQ3o1.js";import"./usePreviousProps-Bm9mWnHd.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
