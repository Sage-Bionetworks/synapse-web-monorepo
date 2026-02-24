import{ay as a,j as r,r as i}from"./iframe-but96Lfh.js";import{S as c}from"./SynapseNavDrawer-CX6N_5SH.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DO4pysfy.js";import"./useInfiniteQuery-Dpy_V3ju.js";import"./useDownloadList-vvAG3L66.js";import"./waitForAsyncResult-D7QZyefM.js";import"./useUserBundle-TiYb8Qhd.js";import"./useSuspenseQuery-HIpnOhi4.js";import"./CreateProjectModal-sgx4ZW3n.js";import"./ConfirmationDialog-FXSIJylJ.js";import"./DialogBase-DSLNZs-A.js";import"./Close-CnPFHJzh.js";import"./HelpPopover-DJt2W7Ho.js";import"./MarkdownPopover-BsvfqRJd.js";import"./LightTooltip-C4VFVSMC.js";import"./MarkdownSynapse-WMpHNlyQ.js";import"./SkeletonButton-XqPM6IMR.js";import"./SkeletonInlineBlock-CsI4ERDm.js";import"./SkeletonTable-CiaLgFbO.js";import"./SkeletonParagraph-k5_8qyuU.js";import"./SynapseHomepageNavBar-Yez2hpJE.js";import"./SageResourcesPopover-CQqmZjwK.js";import"./Grid-BgLOPLBo.js";import"./index-DM_ZQyY8.js";import"./MenuItem-BvQCkNiO.js";import"./UserBadge-C7dtc7se.js";import"./Card-Dg122fQn.js";import"./Chip-DMb_4koX.js";import"./searchDefaults-Duahcv3M.js";import"./Slide-BgshQt30.js";import"./InputAdornment-DCI0twhl.js";import"./listItemButtonClasses-VEW-oVva.js";import"./Badge-DtsSdKli.js";import"./usePreviousProps-UuqkQB2d.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
