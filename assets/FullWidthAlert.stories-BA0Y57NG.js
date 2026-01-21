import{ay as a,j as r,r as i}from"./iframe-DrCEazsW.js";import{S as c}from"./SynapseNavDrawer-DmigkZWF.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CfVTUeNO.js";import"./useInfiniteQuery-Bi9tYdtQ.js";import"./useDownloadList-CEgIeqnX.js";import"./waitForAsyncResult-CxldH0I6.js";import"./useGetFeatureFlag-Cc0LA2r-.js";import"./useUserBundle-CYm_bsjI.js";import"./useSuspenseQuery-DQ6p8VKt.js";import"./CreateProjectModal-BOErRkB4.js";import"./ConfirmationDialog-Dhl79wf0.js";import"./DialogBase-BH_HDzHK.js";import"./Close-CxIjT6Fh.js";import"./HelpPopover-DbOYMGtK.js";import"./MarkdownPopover-C7OUxN4B.js";import"./LightTooltip-CVm0W9H0.js";import"./MarkdownSynapse-cqZxM6bP.js";import"./SkeletonButton-C4mWmh8D.js";import"./SkeletonInlineBlock-DNr-Di6Y.js";import"./SkeletonTable-BtmY8UyV.js";import"./SkeletonParagraph-DxARbxEV.js";import"./SynapseHomepageNavBar-01KsYXdf.js";import"./SageResourcesPopover-7TMkCX5x.js";import"./Grid-DyO_a-po.js";import"./index-Bxv-iQH3.js";import"./MenuItem-C2nlmzrP.js";import"./UserBadge-y9zJuYcg.js";import"./Card-CTrSj87E.js";import"./Chip-DN_sqkiV.js";import"./Slide-DKRbx4Ou.js";import"./InputAdornment-kJ61WKYx.js";import"./listItemButtonClasses-DDwCKa2g.js";import"./Badge-BSssf1ng.js";import"./usePreviousProps-b7RDM_F6.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
