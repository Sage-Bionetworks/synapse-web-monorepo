import{ax as a,r as i,j as r}from"./iframe-CbfOQY0w.js";import{S as c}from"./SynapseNavDrawer-2JE138hP.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-dZu5qwPJ.js";import"./useInfiniteQuery-DwAokM_o.js";import"./useDownloadList-D8YRI-IF.js";import"./waitForAsyncResult-B5kqacQY.js";import"./useUserBundle-CVhFQva8.js";import"./CreateProjectModal-Dcs_Xy-4.js";import"./ConfirmationDialog-XDNgseZX.js";import"./DialogBase-Caocv0xu.js";import"./Close-Cq5UpdYv.js";import"./HelpPopover-D7Lqd1_Q.js";import"./MarkdownPopover-BdMXAVvu.js";import"./LightTooltip-C9p3LJOV.js";import"./MarkdownSynapse-C1Hg73kZ.js";import"./SkeletonButton-DqLe50tO.js";import"./SkeletonInlineBlock-be42gePS.js";import"./SkeletonTable-CE4I0355.js";import"./SkeletonParagraph-CCe-_wHo.js";import"./SynapseHomepageNavBar-BjpzAUJV.js";import"./SageResourcesPopover-VfL2vzik.js";import"./Grid-CWQWU9Dj.js";import"./index-BehqIFbh.js";import"./MenuItem-DYj3mh1g.js";import"./UserBadge-w-7xW1gI.js";import"./useUserGroupHeader-CuG0-k8L.js";import"./Card-_ZXijILc.js";import"./Chip-CeFdaJc8.js";import"./searchDefaults-C-ztzm8O.js";import"./Slide-DABy8n0F.js";import"./InputAdornment-BulzOzfl.js";import"./listItemButtonClasses-BoGI9PQb.js";import"./Badge-BrLcqEy-.js";import"./usePreviousProps-DKlj7xCm.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
