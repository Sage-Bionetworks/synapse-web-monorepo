import{ax as a,r as i,j as r}from"./iframe-BdS9-wdc.js";import{S as c}from"./SynapseNavDrawer-CBDA00ug.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BhnT5Khi.js";import"./useInfiniteQuery-B54oxMok.js";import"./useDownloadList-WUXQpt7p.js";import"./waitForAsyncResult-D_w9yvxy.js";import"./useUserBundle-CW56QhDS.js";import"./CreateProjectModal-eioN23Em.js";import"./ConfirmationDialog-_KtxKo5o.js";import"./DialogBase-B_l53LD_.js";import"./Close-SS6nyoVB.js";import"./HelpPopover-B69_BQlI.js";import"./MarkdownPopover-BlinJcsM.js";import"./LightTooltip-B9hgSUpU.js";import"./MarkdownSynapse-DzEXO47M.js";import"./SkeletonButton-BtChI9G1.js";import"./SkeletonInlineBlock-B1VKeUrN.js";import"./SkeletonTable-E-xscDs6.js";import"./SkeletonParagraph-BQttfzOt.js";import"./SynapseHomepageNavBar-Cq65TOpZ.js";import"./SageResourcesPopover-Ccz4slOU.js";import"./Grid-BXS4f0R9.js";import"./index-BmEGML5A.js";import"./MenuItem-BSB47y6Q.js";import"./UserBadge-DiTjYkKT.js";import"./useUserGroupHeader-DhQzbsNW.js";import"./Card-CQz4BqJK.js";import"./Chip-B8w46sev.js";import"./searchDefaults-uP64HJSx.js";import"./Slide-T9AFnny1.js";import"./InputAdornment-aUp1k2Ka.js";import"./listItemButtonClasses-ChAWww3W.js";import"./Badge-Di1HQy5g.js";import"./usePreviousProps-CRbVQsCb.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
