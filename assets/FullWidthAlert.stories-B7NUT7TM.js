import{ax as a,r as i,j as r}from"./iframe-CsxBzgcc.js";import{S as c}from"./SynapseNavDrawer-C0dAZKxW.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BNCPSNw1.js";import"./useInfiniteQuery-DUTjfMBl.js";import"./useDownloadList-DDZRSjCT.js";import"./waitForAsyncResult-BYJa6eGJ.js";import"./useUserBundle-CnN0kkEH.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BbnqlfFH.js";import"./ConfirmationDialog-Uzjk9IlN.js";import"./DialogBase-DhZkTiCA.js";import"./Close-BzicxIcj.js";import"./HelpPopover-y5CnxthQ.js";import"./MarkdownPopover-DmAn0kqk.js";import"./LightTooltip-BM4vanV4.js";import"./MarkdownSynapse-BlaqDi--.js";import"./SkeletonButton-C34BpE4a.js";import"./SkeletonInlineBlock-Wq3H9QMf.js";import"./SkeletonTable-DcTnDoDK.js";import"./SkeletonParagraph-aQXmvCYx.js";import"./RadioGroup-H15y-nwi.js";import"./Radio-CCkg1JFj.js";import"./SwitchBase-yO_lVJ_F.js";import"./FormGroup-Ci9whPah.js";import"./FormControlLabel-DZ7y0U6g.js";import"./Chip-CAnuLq2P.js";import"./SynapseHomepageNavBar-CNj5FLaa.js";import"./SageResourcesPopover-CkVea3kt.js";import"./Grid-CPbrM1CX.js";import"./index-CqdG97d5.js";import"./MenuItem-tZmUaMPT.js";import"./UserBadge-CsG6C7yN.js";import"./Card-ah1wXFi5.js";import"./searchDefaults-lPdn2NpY.js";import"./Slide-VNagov9E.js";import"./InputAdornment-BPiRJYyS.js";import"./listItemButtonClasses-9gXcQbF4.js";import"./Badge-PQ7lUgzp.js";import"./usePreviousProps-CbBR4Eer.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
