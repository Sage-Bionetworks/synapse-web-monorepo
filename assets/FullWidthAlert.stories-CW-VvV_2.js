import{ax as a,r as i,j as r}from"./iframe-BFoBHJbY.js";import{S as c}from"./SynapseNavDrawer-DhvouSb9.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Fl7tx4an.js";import"./useInfiniteQuery-COrQrVed.js";import"./useDownloadList-C5n7FzXM.js";import"./waitForAsyncResult-DNKGQs1Z.js";import"./useUserBundle-DpjLlelW.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-xxCx5PwB.js";import"./ConfirmationDialog-DQ7ZhkXi.js";import"./DialogBase-BYig5ial.js";import"./Close-C6cmQXhi.js";import"./HelpPopover-C6OrfbQU.js";import"./MarkdownPopover-Dm2f1BST.js";import"./LightTooltip-Dnju38Ge.js";import"./MarkdownSynapse-CTY9rgWg.js";import"./SkeletonButton-RWaImhZL.js";import"./SkeletonInlineBlock-BH9IFr_J.js";import"./SkeletonTable-DpdP1ZU-.js";import"./SkeletonParagraph-CxOMNOR8.js";import"./RadioGroup-CumAG3os.js";import"./Radio-DMjntJGy.js";import"./SwitchBase-B0zHafXA.js";import"./FormGroup-4JO5xl3B.js";import"./FormControlLabel-D6wGKDYf.js";import"./Chip-nCILZLDf.js";import"./SynapseHomepageNavBar-CwXVl2oT.js";import"./SageResourcesPopover-DcLO4J1h.js";import"./Grid-CRNahgZ3.js";import"./index-CIW1_OvL.js";import"./MenuItem-BjmuKOgF.js";import"./UserBadge-B3b4GgS8.js";import"./Card-CxnVE_mX.js";import"./searchDefaults-BOZKugCe.js";import"./Slide-B1zAX2Db.js";import"./InputAdornment-Ca92rHY3.js";import"./listItemButtonClasses-B34YF75c.js";import"./Badge-B99PjjTS.js";import"./usePreviousProps-wXzT0qgu.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
