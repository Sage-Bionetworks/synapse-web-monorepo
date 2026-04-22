import{ax as a,r as i,j as r}from"./iframe-bna6ux0d.js";import{S as c}from"./SynapseNavDrawer-D77-WDMV.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B2zyLxGh.js";import"./useInfiniteQuery-BY6Y6iWU.js";import"./useDownloadList-kuZWHtQh.js";import"./waitForAsyncResult-DYWZVcQ3.js";import"./useUserBundle-BCDvFxlz.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-CwnIqCL_.js";import"./ConfirmationDialog-Dnw58mjo.js";import"./DialogBase-DHwP3U6I.js";import"./Close-BHQzAyPk.js";import"./HelpPopover-BFjmdZ6s.js";import"./MarkdownPopover-kqSOJAjB.js";import"./LightTooltip-DeQMhnGN.js";import"./MarkdownSynapse-DhbP1fl7.js";import"./SkeletonButton-CvFlnbQG.js";import"./SkeletonInlineBlock-BZMaSP8M.js";import"./SkeletonTable-l3mzz3bl.js";import"./SkeletonParagraph-BWjRwEhH.js";import"./RadioGroup-0ODu0eoD.js";import"./Radio-3on40aJi.js";import"./SwitchBase-D6zfVctk.js";import"./FormGroup-T1VjgIuY.js";import"./FormControlLabel-CxLJMSC7.js";import"./Chip-ezXqmltp.js";import"./SynapseHomepageNavBar-Ct5mjff2.js";import"./SageResourcesPopover-CDzzWzTq.js";import"./Grid-CBuvr_YL.js";import"./index-BPlgQcL-.js";import"./MenuItem-BE6gGCeL.js";import"./UserBadge-CXfpHech.js";import"./Card-DCXe5QKg.js";import"./searchDefaults-ys4jTYNd.js";import"./Slide-BEIlAl4I.js";import"./InputAdornment-DpMOogZ9.js";import"./listItemButtonClasses-g5sUZ5P1.js";import"./Badge-tPgGOAyu.js";import"./usePreviousProps-K1h_Q3p0.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
