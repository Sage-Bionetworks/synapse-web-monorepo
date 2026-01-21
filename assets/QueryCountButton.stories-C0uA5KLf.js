import{$ as k,jD as M,fh as B,eT as O,e0 as I,j as T,B as K,V as v,fm as D,a2 as t,d_ as s}from"./iframe-iaFph9yc.js";import{N as V}from"./NavigateNext-BlVTqQ8S.js";import"./index-Chi_LkuB.js";function Q(o){const{sql:q,href:a,prefixText:x="",suffixText:y="",...b}=o,_=k(q),L=M(),R={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:q},entityId:_,partMask:O},{data:S,isLoading:g}=B(R),h=S?.queryCount,C=a?.startsWith("http://")||a?.startsWith("https://");let l={};C?l={href:a,target:"_blank",rel:"noopener noreferrer",component:"a"}:L?l={to:a,component:D}:l={href:a,component:"a"};const E=I.useMemo(()=>{const u=[];return x&&u.push(x),!g&&h!==void 0&&u.push(h.toLocaleString()),y&&u.push(y),u.join(" ")},[x,h,y,g]),w=T.jsx(v,{sx:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper",borderRadius:"50%",width:24,height:24},children:T.jsx(V,{sx:{color:"primary.main",fontSize:20}})});return T.jsx(K,{...b,...l,endIcon:w,loading:g,children:E})}try{Q.displayName="QueryCountButton",Q.__docgenInfo={description:`A button component that displays text with an inline count.
The count is fetched by executing a SQL query against a Synapse table.
Example: "Explore 42 files"`,displayName:"QueryCountButton",props:{sql:{defaultValue:null,description:"The SQL query to execute to get the count",name:"sql",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"The target URL when the button is clicked\nThe URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},prefixText:{defaultValue:null,description:'Text to display before the count (e.g., "Explore")',name:"prefixText",required:!1,type:{name:"string"}},suffixText:{defaultValue:null,description:'Text to display after the count (e.g., "files")',name:"suffixText",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const W={title:"UI/QueryCountButton",component:Q,parameters:{stack:"mock"}},r="syn12345678",e=`SELECT * FROM ${r}`,n=o=>({concreteType:"org.sagebionetworks.repo.model.table.QueryResultBundle",queryCount:o,queryResult:{concreteType:"org.sagebionetworks.repo.model.table.QueryResult",queryResults:{concreteType:"org.sagebionetworks.repo.model.table.RowSet",tableId:r,etag:"etag",headers:[],rows:[]}}}),i={args:{sql:e,href:"/explore",prefixText:"Explore",suffixText:"files"},loaders:[()=>s({sql:e},n(42))],parameters:{msw:{handlers:t(void 0,r)}}},d={args:{sql:e,href:"/explore",suffixText:"items available"},loaders:[()=>s({sql:e},n(42))],parameters:{msw:{handlers:t(void 0,r)}}},p={args:{sql:e,href:"/explore",prefixText:"View"},loaders:[()=>s({sql:e},n(42))],parameters:{msw:{handlers:t(void 0,r)}}},c={args:{sql:e,href:"/explore"},loaders:[()=>s({sql:e},n(42))],parameters:{msw:{handlers:t(void 0,r)}}},f={args:{sql:e,href:"/explore",prefixText:"Explore",suffixText:"datasets",variant:"outlined"},loaders:[()=>s({sql:e},n(42))],parameters:{msw:{handlers:t(void 0,r)}}},m={args:{sql:e,href:"/explore",prefixText:"Explore",suffixText:"files"},loaders:[()=>s({sql:e},n(1234567))],parameters:{msw:{handlers:t(void 0,r)}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const H=["Default","WithoutPrefixText","WithoutSuffixText","CountOnly","WithVariant","LargeCount"];export{c as CountOnly,i as Default,m as LargeCount,f as WithVariant,d as WithoutPrefixText,p as WithoutSuffixText,H as __namedExportsOrder,W as default};
