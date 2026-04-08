import{ax as a,r as i,j as r}from"./iframe-D5wXuBlT.js";import{S as c}from"./SynapseNavDrawer-CHfp8J5U.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CRowiCBj.js";import"./useInfiniteQuery-CIna-n7q.js";import"./useDownloadList-C6m0eBQj.js";import"./waitForAsyncResult-e_qF7HGU.js";import"./useUserBundle-DXvZDWUx.js";import"./CreateProjectModal-DZVAbqSq.js";import"./ConfirmationDialog-DkVuItCQ.js";import"./DialogBase-B7NPj_K8.js";import"./Close-B44_taEp.js";import"./HelpPopover-B270wGmb.js";import"./MarkdownPopover-D357WAt_.js";import"./LightTooltip-Bqvn3Vpy.js";import"./MarkdownSynapse-DIWDvDqy.js";import"./SkeletonButton-1p1-0lGV.js";import"./SkeletonInlineBlock-Djh2iYmW.js";import"./SkeletonTable-DQgfKfH3.js";import"./SkeletonParagraph-CICWHgmn.js";import"./SynapseHomepageNavBar-C8dNAcQG.js";import"./SageResourcesPopover-ByP-cUAZ.js";import"./Grid-DWXQACcQ.js";import"./index-2JT8eoUE.js";import"./MenuItem-Cg9aYM9o.js";import"./UserBadge-DCI1SK4W.js";import"./useUserGroupHeader-YQoyU-aV.js";import"./Card-Ds8mqMQ7.js";import"./Chip-CY4F66V8.js";import"./searchDefaults-C7kBdVPG.js";import"./Slide-Co4KbO4_.js";import"./InputAdornment-4H-w-rZR.js";import"./listItemButtonClasses-eFpAcuWL.js";import"./Badge-D3-Qv8jF.js";import"./usePreviousProps-BROXTcjk.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
