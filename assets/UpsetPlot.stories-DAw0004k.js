import{U as d}from"./UpsetPlot-EpBw4p9r.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-BWxdxFDK.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./OrientationBanner-BWRDUh7l.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-DzPicJi1.js";import"./Alert-CduaGk2B.js";import"./createTheme-C4MKIpuQ.js";import"./index-GEGPABih.js";import"./styled-BwKg_4wT.js";import"./mergeSlotProps-BB45Ai_O.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-CLD93Ce9.js";import"./Paper-BrACm7G9.js";import"./IconButton-BIc9jQ57.js";import"./ButtonBase-6jsyScMO.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-DTWuWz9s.js";import"./Box-CaFleW7-.js";import"./AlertTitle-G3es5_Tb.js";import"./Typography-DrqHmlDD.js";import"./utils-DDqOmLXv.js";import"./index-BIzb42Jq.js";import"./Grow-30Ov46SB.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B08tzUFP.js";import"./index-CarQ_cRE.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-DtfaTZY_.js";import"./VerificationSubmission-CjmU3lv6.js";import"./SynapseConstants-DcTljING.js";import"./RegularExpressions-jA8tWTUq.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-D-FIW5gs.js";import"./CheckCircleTwoTone-DTl0gYtq.js";import"./calculateFriendlyFileSize-B85TBsSb.js";import"./Skeleton-CW6YXi1_.js";import"./inputBaseClasses-u7jm9M-e.js";import"./Fade-BRP5-t6h.js";import"./Link-DxNs_73S.js";import"./cloneDeep-BzxzZd4X.js";import"./_initCloneObject-CKp18hZk.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-CWePA3yc.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-DLQdEICg.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-wrOf9Cnm.js";import"./react-sizeme-C2W2PgBQ.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-BDJMIc_E.js";import"./Backdrop-794lhd40.js";import"./LinearProgress-IGALd_S1.js";import"./LargeButton-Kr7LLS6M.js";const fe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT files, assay FROM syn51581771',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: '# Files per data type',
    combinationName: '# Files',
    onClick: (selection, event) => {
      console.log('onClick() has been called with this selection and event', selection, event);
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ke=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,ke as __namedExportsOrder,fe as default};
