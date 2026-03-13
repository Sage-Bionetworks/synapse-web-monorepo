import{aA as a,j as r,r as i}from"./iframe-DYqeQvAZ.js";import{S as c}from"./SynapseNavDrawer-M_JC-1ZK.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D4MORNFS.js";import"./useInfiniteQuery-SfBiKEGU.js";import"./useDownloadList-CjU2f6hA.js";import"./waitForAsyncResult-B2cUk_eW.js";import"./useUserBundle-DULvj39Z.js";import"./CreateProjectModal-CPpBQKJ_.js";import"./ConfirmationDialog-F90KYiVg.js";import"./DialogBase-D6ru6QGV.js";import"./Close-Dsj7f386.js";import"./HelpPopover-CyEsnN__.js";import"./MarkdownPopover-Z2HTRS7p.js";import"./LightTooltip-GZti0qG7.js";import"./MarkdownSynapse-C2R_2nbo.js";import"./SkeletonButton-bpCoMqPJ.js";import"./SkeletonInlineBlock-CAM6iPYb.js";import"./SkeletonTable-tbDH2wnj.js";import"./SkeletonParagraph-CY2Bzkjl.js";import"./SynapseHomepageNavBar-CX1wpn4L.js";import"./SageResourcesPopover-DYWlnSt5.js";import"./Grid-Dl_qCstV.js";import"./index-DB86q32y.js";import"./MenuItem-Cqn5rY2B.js";import"./UserBadge-DTP3ILNA.js";import"./Card-6CbmSVLL.js";import"./Chip-40aQ4DbO.js";import"./searchDefaults-BzW2dvIc.js";import"./Slide-Bh9NAXik.js";import"./InputAdornment-CWUVZQq4.js";import"./listItemButtonClasses-shpiQeB_.js";import"./Badge-CptEtLjO.js";import"./usePreviousProps-qB3fNTxz.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
