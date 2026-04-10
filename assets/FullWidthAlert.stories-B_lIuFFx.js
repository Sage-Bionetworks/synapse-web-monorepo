import{ax as a,r as i,j as r}from"./iframe-FsOg9uwU.js";import{S as c}from"./SynapseNavDrawer-UouUVEQg.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BWjdYo9Q.js";import"./useInfiniteQuery-rDeNbqp3.js";import"./useDownloadList-DpzuQjWf.js";import"./waitForAsyncResult-BVzjhIMo.js";import"./useUserBundle-DlEfeCz8.js";import"./CreateProjectModal-lgkjmvi8.js";import"./ConfirmationDialog-CGiwaw_9.js";import"./DialogBase-D5H1TxpQ.js";import"./Close-wJLSQlcF.js";import"./HelpPopover-CsCYRymI.js";import"./MarkdownPopover-B4rff8pl.js";import"./LightTooltip-BHJ8VyPd.js";import"./MarkdownSynapse-B-j5Jwdf.js";import"./SkeletonButton-o5wIbKa8.js";import"./SkeletonInlineBlock-C-VJXZCx.js";import"./SkeletonTable-D70G5IuO.js";import"./SkeletonParagraph-CbUekLjy.js";import"./SynapseHomepageNavBar-Li623jJl.js";import"./SageResourcesPopover-BeFDZaxd.js";import"./Grid-DTBMwOCR.js";import"./index-BE4_cl56.js";import"./MenuItem-Cj71RViP.js";import"./UserBadge-BgWUpTwS.js";import"./useUserGroupHeader-CLfJ9kmo.js";import"./Card-Bl03myfA.js";import"./Chip-CwjHvWgT.js";import"./searchDefaults-CKoiIrX6.js";import"./Slide-B44VXz62.js";import"./InputAdornment-COJ17Eit.js";import"./listItemButtonClasses-DlXbiyd-.js";import"./Badge-DgOdpG6J.js";import"./usePreviousProps-ryOaqf0v.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
