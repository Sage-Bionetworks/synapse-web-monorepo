import{ax as a,r as i,j as r}from"./iframe-Bg-s9pTZ.js";import{S as c}from"./SynapseNavDrawer-zTisgQkn.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CweB4UOT.js";import"./useInfiniteQuery-Camq04G4.js";import"./useDownloadList-CBxSrGG3.js";import"./waitForAsyncResult-CHOW76L3.js";import"./useUserBundle-Dt_B1mhI.js";import"./CreateProjectModal-DHI7HMLb.js";import"./ConfirmationDialog-D8nwHqWo.js";import"./DialogBase-DgBP91vj.js";import"./Close-1Ub5h9Ti.js";import"./HelpPopover-cbNyKjRR.js";import"./MarkdownPopover-DsmK9fKf.js";import"./LightTooltip-CZzLKYGi.js";import"./MarkdownSynapse-xJpqab6Z.js";import"./SkeletonButton-Dp_QSsYr.js";import"./SkeletonInlineBlock-BF2HGXEd.js";import"./SkeletonTable-Bbn4NeNZ.js";import"./SkeletonParagraph-B9vNapgZ.js";import"./RadioGroup-Du_zJv84.js";import"./Radio-DHH1jft6.js";import"./SwitchBase-CW3A8DBo.js";import"./FormGroup-CDV06DZJ.js";import"./FormControlLabel-HKnEx2oy.js";import"./Chip-DPIa4PAj.js";import"./SynapseHomepageNavBar-CQuh1l6Q.js";import"./SageResourcesPopover-BfWNLqBl.js";import"./Grid-CDUSb_WG.js";import"./index-BjGPL7ol.js";import"./MenuItem-D2-zdb04.js";import"./UserBadge-D2x7qBuJ.js";import"./Card-B9WiC7Qz.js";import"./searchDefaults-rtcdSNib.js";import"./Slide-DnVW3dqm.js";import"./InputAdornment-1EM0CRRz.js";import"./listItemButtonClasses-rzI78vlT.js";import"./Badge-qzmfaHKM.js";import"./usePreviousProps-CqDukbv0.js";const M={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,Q as __namedExportsOrder,M as default};
