import{ax as a,r as i,j as r}from"./iframe-DvDPVyr3.js";import{S as c}from"./SynapseNavDrawer-BO6z__4B.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-u5Q_vJfa.js";import"./useInfiniteQuery-DWj8q4Ou.js";import"./useDownloadList-7mo9HhPX.js";import"./waitForAsyncResult-BHJYkwll.js";import"./useUserBundle--EY3PjCb.js";import"./CreateProjectModal-DwxURSwe.js";import"./ConfirmationDialog-hJY-6MQc.js";import"./DialogBase-J8iZt42d.js";import"./Close-Dl87lOTy.js";import"./HelpPopover-B9l6QfUy.js";import"./MarkdownPopover-1Vxonhz2.js";import"./LightTooltip-A87-OJtX.js";import"./MarkdownSynapse-CFI-ggll.js";import"./SkeletonButton-ChNWGaeP.js";import"./SkeletonInlineBlock-DTOZhiyP.js";import"./SkeletonTable-0fE1v7Jp.js";import"./SkeletonParagraph-C4mex8S5.js";import"./SynapseHomepageNavBar-DbObAWJO.js";import"./SageResourcesPopover-DJP8jkmS.js";import"./Grid-7B2QSBEP.js";import"./index-Cd-T-abm.js";import"./MenuItem-Dbhxy3EU.js";import"./UserBadge-BlKDuGTK.js";import"./Card-B9Wv_sea.js";import"./Chip-YSiJYC5a.js";import"./searchDefaults-C6ZKwRuu.js";import"./Slide-BpCAiNyQ.js";import"./InputAdornment-Pz2jkrRk.js";import"./listItemButtonClasses-Bw2THj84.js";import"./Badge-BhorQ99n.js";import"./usePreviousProps-BDKffoJB.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
