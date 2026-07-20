import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{t as r}from"./jsx-runtime-l3w3GfrB.js";import{Tn as i,kn as a}from"./synapse-client-SWrWebbD.js";import{Mt as o,jt as s,n as c,t as l}from"./iframe-BmcmASi5.js";import{h as u,m as d,n as f,t as p,y as m}from"./QueryWrapper-CRQ2nY8a.js";import{n as h,t as g}from"./ExportToAnalysisPlatformDialog-1pk7WGrr.js";function _(){let{isShowingExportToAnalysisPlatformModal:e,setIsShowingExportToAnalysisPlatformModal:t}=m();return(0,v.useEffect)(()=>{e||t(!0)},[e,t]),(0,y.jsx)(y.Fragment,{})}var v,y,b,x,S;e((()=>{d(),p(),s(),c(),a(),v=t(n(),1),h(),y=r(),b={title:`Explore/Send to Analysis Platform Dialog`,component:g,argTypes:{hasRowSelection:{description:`Simulates whether or not the table has row selection enabled.`,control:{type:`boolean`}},unitDescription:{description:`A word describing what each row represents`,control:{type:`text`}}},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/GWQwLZl82ZT75gYonOx8Qf/AMP-ALS-Knowledge-Portal-v1?node-id=234-115477&m=dev`},msw:{handlers:[...l(i)]}}},x={name:`Send to Analysis Platform Dialog`,args:{platformInstructionProps:{cavaticaConnectAccountURL:`https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess`},hasRowSelection:!1,unitDescription:`file`},decorators:[(e,t)=>(0,y.jsx)(f,{initQueryRequest:o,children:(0,y.jsxs)(u,{unitDescription:t.unitDescription,isRowSelectionVisible:t.hasRowSelection,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`,`adworkbench`,`pluto`],children:[(0,y.jsx)(_,{}),(0,y.jsx)(e,{})]})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Send to Analysis Platform Dialog',
  args: {
    platformInstructionProps: {
      cavaticaConnectAccountURL: 'https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess'
    },
    hasRowSelection: false,
    unitDescription: 'file'
  },
  decorators: [(Story, args) => {
    return <QueryWrapper initQueryRequest={mockQueryBundleRequest}>
          <QueryVisualizationWrapper unitDescription={args.unitDescription} isRowSelectionVisible={args.hasRowSelection} enabledExternalAnalysisPlatforms={['cavatica', 'terra', 'adworkbench', 'pluto']}>
            <ShowModalTrigger />
            <Story />
          </QueryVisualizationWrapper>
        </QueryWrapper>;
  }]
}`,...x.parameters?.docs?.source}}},S=[`Demo`]}))();export{x as Demo,S as __namedExportsOrder,b as default};