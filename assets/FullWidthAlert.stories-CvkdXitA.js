import{ay as a,j as r,r as i}from"./iframe-DCJ7skCF.js";import{S as c}from"./SynapseNavDrawer-B-ipKNyf.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-b0LzC8E-.js";import"./useInfiniteQuery-Cnz7W2re.js";import"./useDownloadList-Cyrr5eWl.js";import"./waitForAsyncResult-MnBw5tPF.js";import"./useUserBundle-B1IzmcZW.js";import"./useSuspenseQuery-hpjNpxLU.js";import"./CreateProjectModal-DovS6lVu.js";import"./ConfirmationDialog-CNckvYkU.js";import"./DialogBase-DG8iPOdE.js";import"./Close-D40JfmeO.js";import"./HelpPopover-DR0W0zRn.js";import"./MarkdownPopover-C1w3Ce6S.js";import"./LightTooltip-C9fCe4UT.js";import"./MarkdownSynapse-BU0jW5rD.js";import"./SkeletonButton-Ckcy3ANt.js";import"./SkeletonInlineBlock-XM0IHiqH.js";import"./SkeletonTable-91lmyC3W.js";import"./SkeletonParagraph-CIIa240g.js";import"./SynapseHomepageNavBar-CDCFhn97.js";import"./SageResourcesPopover-XmA5RxXf.js";import"./Grid-BzWj-ZgH.js";import"./index-BmNsh1D_.js";import"./MenuItem-yNgfeWcI.js";import"./UserBadge-B1k4a2En.js";import"./Card-CrtXJCz7.js";import"./Chip-BB_My-sd.js";import"./Slide-BMXVOPm6.js";import"./InputAdornment-BsCMhBAI.js";import"./listItemButtonClasses-C8FrM3d1.js";import"./Badge-DF1-Ag6D.js";import"./usePreviousProps-B55_EH7B.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
