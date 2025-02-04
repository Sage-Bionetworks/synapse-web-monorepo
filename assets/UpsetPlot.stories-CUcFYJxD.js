import{U as d}from"./UpsetPlot-CnyY4kWq.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-slSSO9fC.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./OrientationBanner-BJ9gW8Zk.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-BK7MPzqu.js";import"./Alert-CeaOJcfo.js";import"./createTheme-CiCSa2mH.js";import"./index-GEGPABih.js";import"./styled-CGsSw8UJ.js";import"./mergeSlotProps-B0sAykN9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-CARPmhEq.js";import"./Paper-DfbYtKZb.js";import"./IconButton-BX1jAiHM.js";import"./ButtonBase-BtHCltnO.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-DiY0npK2.js";import"./Box-D0Jm1lZU.js";import"./AlertTitle-D5vyrqh6.js";import"./Typography-NAJ1jGoo.js";import"./utils-D1_9yZbw.js";import"./index-BIzb42Jq.js";import"./Grow-8_BQPAWr.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DOWgCEwD.js";import"./index-CBeLH2jy.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-0w0n5xUv.js";import"./VerificationSubmission-CjmU3lv6.js";import"./SynapseConstants-CmafGRmS.js";import"./StringUtils-CkZesiyJ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-D_Raqnaw.js";import"./CheckCircleTwoTone-BBYOrcPX.js";import"./calculateFriendlyFileSize-B5Pk7maD.js";import"./Skeleton-DyxL95vN.js";import"./inputBaseClasses-yPUgEGHH.js";import"./Fade-BvpYcI5h.js";import"./Link-BXmnhkxu.js";import"./cloneDeep-CrT5BP8N.js";import"./_initCloneObject-CKp18hZk.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-DLQdEICg.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-CeY5yzhw.js";import"./react-sizeme-C2W2PgBQ.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-DbZ-TZgv.js";import"./Backdrop-CYlIBwDH.js";import"./LinearProgress-DFYryRfR.js";import"./LargeButton-D5xhJUlw.js";const Ce={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:20,setName:"Set size",combinationName:"Intersection size",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,n,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: (selection, event) => {
      console.log('onClick() has been called with this selection and event', selection, event);
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Le=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,Le as __namedExportsOrder,Ce as default};
