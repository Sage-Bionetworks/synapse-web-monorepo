import{ax as a,r as i,j as r}from"./iframe-DjCs0N9T.js";import{S as c}from"./SynapseNavDrawer-BhZUGjnJ.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DJPIaRze.js";import"./useInfiniteQuery-D7nav_iQ.js";import"./useDownloadList-Dse-vQUU.js";import"./waitForAsyncResult-DMCFQ6DJ.js";import"./useUserBundle-Bj8x-K_h.js";import"./CreateProjectModal-CQcWi7Ii.js";import"./ConfirmationDialog-DtaMK8Wg.js";import"./DialogBase-G442yd3L.js";import"./Close-BtUXOgnJ.js";import"./HelpPopover-Cv3rcWtw.js";import"./MarkdownPopover-ERQh7wwa.js";import"./LightTooltip-Mucs5Dmz.js";import"./MarkdownSynapse-BphwuRUM.js";import"./SkeletonButton-ra5Cjzqp.js";import"./SkeletonInlineBlock-BcoZAk2Q.js";import"./SkeletonTable-C6E9liFP.js";import"./SkeletonParagraph-COuF-1cd.js";import"./RadioGroup-BPC2IIjZ.js";import"./Radio-B0yVambt.js";import"./SwitchBase-VN_kzZ6i.js";import"./FormGroup-DoIxIReK.js";import"./FormControlLabel-DzJTgcEX.js";import"./Chip-DtYkZqnx.js";import"./SynapseHomepageNavBar-Db36-TaT.js";import"./SageResourcesPopover-BGyTamUi.js";import"./Grid-CSIVzVil.js";import"./index-Cwlx-Oul.js";import"./MenuItem-DkdGwV6_.js";import"./UserBadge-BDehV7Zq.js";import"./Card-CYz3fxIC.js";import"./searchDefaults-Dx24Mati.js";import"./Slide-glzh3wqt.js";import"./InputAdornment-CXfrf1bx.js";import"./listItemButtonClasses-BUKlHMDZ.js";import"./Badge-DXrfRlcl.js";import"./usePreviousProps-BWpwLj3U.js";const M={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,Q as __namedExportsOrder,M as default};
