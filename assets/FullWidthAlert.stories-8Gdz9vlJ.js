import{ax as a,r as i,j as r}from"./iframe-ufwdWoqd.js";import{S as c}from"./SynapseNavDrawer-fdRbh0nl.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-fHtY1Mm6.js";import"./useInfiniteQuery-DfHsBcwS.js";import"./useDownloadList-CwwebZ47.js";import"./waitForAsyncResult-DggNm0mu.js";import"./useUserBundle-D634yYlN.js";import"./CreateProjectModal-DpNgZfZ9.js";import"./ConfirmationDialog-B8w3enam.js";import"./DialogBase-Dsbgm9mp.js";import"./Close-Dv4tXZl4.js";import"./HelpPopover-sYQ3nyHD.js";import"./MarkdownPopover-FbcchaUo.js";import"./LightTooltip-DY5-pD6A.js";import"./MarkdownSynapse-CMjYBWsu.js";import"./SkeletonButton-LGNxHtYx.js";import"./SkeletonInlineBlock-DJWeJEjH.js";import"./SkeletonTable-Dud8tXGA.js";import"./SkeletonParagraph-Br9-4-N8.js";import"./SynapseHomepageNavBar-CHB8c_kY.js";import"./SageResourcesPopover-DZ3dmUpO.js";import"./Grid-Dast737N.js";import"./index-BjTsD0iq.js";import"./MenuItem-W_wmPF7v.js";import"./UserBadge-sHUnGDAj.js";import"./useUserGroupHeader-BOzrLmfs.js";import"./Card-CFTn_BNL.js";import"./Chip-CSBIn4pT.js";import"./searchDefaults-DFV6kw8Y.js";import"./Slide-Df_IXJae.js";import"./InputAdornment-t_rDXNaL.js";import"./listItemButtonClasses-DMNU0X-z.js";import"./Badge-CXjL1tsM.js";import"./usePreviousProps-Cv8lAokz.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
