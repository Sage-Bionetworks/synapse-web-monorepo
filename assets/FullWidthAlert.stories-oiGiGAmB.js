import{ax as a,r as i,j as r}from"./iframe-CA42Mn9q.js";import{S as c}from"./SynapseNavDrawer-DQwINWv9.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cv4P-h27.js";import"./useInfiniteQuery-uipgRME6.js";import"./useDownloadList-BQOk5Xj3.js";import"./waitForAsyncResult-BsgjfDDc.js";import"./useUserBundle-BhbwoHT_.js";import"./CreateProjectModal-DfBfsYR_.js";import"./ConfirmationDialog-BSBfViGH.js";import"./DialogBase-DPa9xviX.js";import"./Close-BxAT1Y3p.js";import"./HelpPopover-_39XgxVX.js";import"./MarkdownPopover-Cw4pup3u.js";import"./LightTooltip-CkVaiv9P.js";import"./MarkdownSynapse-BtRsfIl6.js";import"./SkeletonButton-BBbLk1YB.js";import"./SkeletonInlineBlock-COfhdDsT.js";import"./SkeletonTable--UszwM1d.js";import"./SkeletonParagraph-CDHIPMz9.js";import"./SynapseHomepageNavBar-C1XXUjld.js";import"./SageResourcesPopover-DwMtXjG7.js";import"./Grid-B4lamEEo.js";import"./index-D60w0tLm.js";import"./MenuItem-BtHpeBI3.js";import"./UserBadge-BKVFzTvo.js";import"./Card-CaU8zpDF.js";import"./Chip-CtbWqGj5.js";import"./searchDefaults-BV6jB1fD.js";import"./Slide-B5osQEZc.js";import"./InputAdornment-r6hR1iV4.js";import"./listItemButtonClasses-CRjUe2Vi.js";import"./Badge-DsyUwzlq.js";import"./usePreviousProps-B1BOdqtH.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
