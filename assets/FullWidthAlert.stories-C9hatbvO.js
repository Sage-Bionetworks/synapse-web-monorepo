import{ay as a,j as r,r as i}from"./iframe-BHpb1ner.js";import{S as c}from"./SynapseNavDrawer-CE_VJpAt.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BY_KF3pJ.js";import"./useInfiniteQuery-zxcnvMhO.js";import"./useDownloadList-DWAhf7NS.js";import"./waitForAsyncResult-D9SSrT4p.js";import"./useUserBundle-DSde-19S.js";import"./CreateProjectModal-ERPhUnPa.js";import"./ConfirmationDialog-BBn8sgdh.js";import"./DialogBase-BbLmDA72.js";import"./Close-a0iRQpbL.js";import"./HelpPopover-CnWfGqNH.js";import"./MarkdownPopover-C_qk4xql.js";import"./LightTooltip-BOjaJFFL.js";import"./MarkdownSynapse-DDUpKj2I.js";import"./SkeletonButton-L8FvKIZ9.js";import"./SkeletonInlineBlock-CZB6gyiy.js";import"./SkeletonTable-C5MYC27c.js";import"./SkeletonParagraph-DtQNsEbz.js";import"./SynapseHomepageNavBar-1r_MgENZ.js";import"./SageResourcesPopover-CPQ97D-Z.js";import"./Grid-DXXI8_-f.js";import"./index-6DuJwvLX.js";import"./MenuItem-tefU5X3f.js";import"./UserBadge-Q7hpWjW2.js";import"./Card-BMPVT45X.js";import"./Chip-BwbGtSpr.js";import"./searchDefaults-CgNdKQPk.js";import"./Slide-B7K6xwKw.js";import"./InputAdornment-Cs6EwrEI.js";import"./listItemButtonClasses-VYj_cBrn.js";import"./Badge-D8Jf17n1.js";import"./usePreviousProps-Cj9LjJ91.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
