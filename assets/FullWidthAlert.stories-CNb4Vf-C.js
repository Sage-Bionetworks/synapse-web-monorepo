import{aA as a,j as r,r as i}from"./iframe-osdcj8gT.js";import{S as c}from"./SynapseNavDrawer-BhtAeVwB.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BWB_ILQ9.js";import"./useInfiniteQuery-DDd67-Kv.js";import"./useDownloadList-B1S5XP14.js";import"./waitForAsyncResult-DIFL28UV.js";import"./useUserBundle-BBw-Xd7Y.js";import"./CreateProjectModal-BKP-LAoU.js";import"./ConfirmationDialog-CvWs2KTG.js";import"./DialogBase-N9EllxpT.js";import"./Close-CI21Ui92.js";import"./HelpPopover-CmhCvPiW.js";import"./MarkdownPopover-BfzWYQCj.js";import"./LightTooltip-CcryAZ-X.js";import"./MarkdownSynapse-3y9hwyMU.js";import"./SkeletonButton-EtCgm8ml.js";import"./SkeletonInlineBlock-FlaxgqQX.js";import"./SkeletonTable-EGvSypPy.js";import"./SkeletonParagraph-DQAjuogP.js";import"./SynapseHomepageNavBar-CmKXXzaR.js";import"./SageResourcesPopover-JE_YOfDU.js";import"./Grid-CrljGsoP.js";import"./index-D_1mjmCL.js";import"./MenuItem-DiVh5dQ0.js";import"./UserBadge-0tdCENRL.js";import"./Card-DetatTvP.js";import"./Chip-B7nPIvxj.js";import"./searchDefaults-DIsCg3tB.js";import"./Slide-C7q2plLM.js";import"./InputAdornment-DLQaxa4Q.js";import"./listItemButtonClasses-Dh2UN_tW.js";import"./Badge-CneYBRoz.js";import"./usePreviousProps-CxEEYaWE.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
