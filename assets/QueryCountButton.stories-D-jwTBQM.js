import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{t as r}from"./jsx-runtime-l3w3GfrB.js";import{ln as i,mn as a,t as o}from"./esm-CeuVXgHQ.js";import{$t as s}from"./SynapseConstants-neVNjr8v.js";import{On as c,t as l}from"./esm-BvFObm5h.js";import{Jt as u,Zt as d}from"./useLogin-T6cd5b-v.js";import{D as f,T as p}from"./SynapseContext-BLVbLhj9.js";import{g as m,n as h,t as g}from"./development-B3GJqQQw.js";import{_,b as v,v as y,y as b}from"./iframe-pHcuIbVI.js";function x(e){let{sql:t,href:n,prefixText:r=``,suffixText:o=``,...s}=e,l=f(t),u=m(),{data:p,isLoading:g}=d({concreteType:`org.sagebionetworks.repo.model.table.QueryBundleRequest`,query:{sql:t},entityId:l,partMask:2}),_=p?.queryCount,v=n?.startsWith(`http://`)||n?.startsWith(`https://`),y={};y=v?{href:n,target:`_blank`,rel:`noopener noreferrer`,component:`a`}:u?{to:n,component:h}:{href:n,component:`a`};let b=S.useMemo(()=>{let e=[];return r&&e.push(r),!g&&_!==void 0&&e.push(_.toLocaleString()),o&&e.push(o),e.join(` `)},[r,_,o,g]),x=(0,C.jsx)(a,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`background.paper`,borderRadius:`50%`,width:24,height:24},children:(0,C.jsx)(c,{sx:{color:`primary.main`,fontSize:20}})});return(0,C.jsx)(i,{...s,...y,endIcon:x,loading:g,children:b})}var S,C,w=e((()=>{u(),s(),p(),o(),l(),S=t(n(),1),g(),C=r();try{x.displayName=`QueryCountButton`,x.__docgenInfo={description:`A button component that displays text with an inline count.
The count is fetched by executing a SQL query against a Synapse table.
Example: "Explore 42 files"`,displayName:`QueryCountButton`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,methods:[],props:{sql:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`The SQL query to execute to get the count`,name:`sql`,required:!0,tags:{},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`},{fileName:`synapse-web-monorepo/node_modules/.pnpm/@mui+material@7.3.11_@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.7__@emotion_0968c83bfe3dd5c996fa74bec4ff0c2e/node_modules/@mui/material/Button/Button.d.ts`,name:`ButtonOwnProps`}],description:`The target URL when the button is clicked
The URL to link to when the button is clicked.
If defined, an \`a\` element will be used as the root node.`,name:`href`,required:!1,tags:{},type:{name:`string`}},prefixText:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`Text to display before the count (e.g., "Explore")`,name:`prefixText`,required:!1,tags:{},type:{name:`string`}},suffixText:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/QueryCountButton/QueryCountButton.tsx`,name:`TypeLiteral`}],description:`Text to display after the count (e.g., "files")`,name:`suffixText`,required:!1,tags:{},type:{name:`string`}},component:{defaultValue:null,declarations:[{fileName:`synapse-web-monorepo/node_modules/.pnpm/@mui+material@7.3.11_@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.7__@emotion_0968c83bfe3dd5c996fa74bec4ff0c2e/node_modules/@mui/material/Button/Button.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),T,E,D,O,k,A,j,M,N,P,F;e((()=>{w(),y(),b(),T={title:`UI/QueryCountButton`,component:x,parameters:{stack:`mock`}},E=`syn12345678`,D=`SELECT * FROM ${E}`,O=e=>({concreteType:`org.sagebionetworks.repo.model.table.QueryResultBundle`,queryCount:e,queryResult:{concreteType:`org.sagebionetworks.repo.model.table.QueryResult`,queryResults:{concreteType:`org.sagebionetworks.repo.model.table.RowSet`,tableId:E,etag:`etag`,headers:[],rows:[]}}}),k={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`files`},loaders:[()=>v({sql:D},O(42))],parameters:{msw:{handlers:_(void 0,E)}}},A={args:{sql:D,href:`/explore`,suffixText:`items available`},loaders:[()=>v({sql:D},O(42))],parameters:{msw:{handlers:_(void 0,E)}}},j={args:{sql:D,href:`/explore`,prefixText:`View`},loaders:[()=>v({sql:D},O(42))],parameters:{msw:{handlers:_(void 0,E)}}},M={args:{sql:D,href:`/explore`},loaders:[()=>v({sql:D},O(42))],parameters:{msw:{handlers:_(void 0,E)}}},N={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`datasets`,variant:`outlined`},loaders:[()=>v({sql:D},O(42))],parameters:{msw:{handlers:_(void 0,E)}}},P={args:{sql:D,href:`/explore`,prefixText:`Explore`,suffixText:`files`},loaders:[()=>v({sql:D},O(1234567))],parameters:{msw:{handlers:_(void 0,E)}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'files'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    suffixText: 'items available'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'View'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'datasets',
    variant: 'outlined'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(42))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'files'
  },
  loaders: [() => registerTableQueryResult({
    sql: MOCK_SQL
  }, createMockQueryResult(1234567))],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(undefined, TABLE_ID)
    }
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`WithoutPrefixText`,`WithoutSuffixText`,`CountOnly`,`WithVariant`,`LargeCount`]}))();export{M as CountOnly,k as Default,P as LargeCount,N as WithVariant,A as WithoutPrefixText,j as WithoutSuffixText,F as __namedExportsOrder,T as default};