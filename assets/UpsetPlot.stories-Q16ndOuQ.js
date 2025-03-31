import{U as d}from"./UpsetPlot-BfH_AJ2h.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-CII8hZMy.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./OrientationBanner-C7CmOmBW.js";import"./index-C1_KPTmG.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-B22pQuiY.js";import"./Alert-Dcz6JZ5x.js";import"./createTheme-BAeQEIuu.js";import"./index-GEGPABih.js";import"./styled-CVek1lbE.js";import"./mergeSlotProps-D1doMhlu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-DGYn73cf.js";import"./Paper-BMFCclTH.js";import"./IconButton-B2vXFIju.js";import"./ButtonBase-CJOJSfnP.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-Cg5HdmvL.js";import"./Box-DN73Q90z.js";import"./AlertTitle-D21D8EIu.js";import"./Typography-Cqa7rFgc.js";import"./useTheme-DGffmoS1.js";import"./Grow-DPWvTaVu.js";import"./index-BIzb42Jq.js";import"./utils-Cn9x6_1Z.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B_hdhCmy.js";import"./index-OQIcOgx6.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-jaxqGIs_.js";import"./VerificationSubmission-BmZsZ0JS.js";import"./SynapseConstants-xFcxrDXQ.js";import"./StringUtils-DFpF2_59.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-WscWG_aD.js";import"./CheckCircleTwoTone-ChmDaZaB.js";import"./calculateFriendlyFileSize-6vvdb7nH.js";import"./Skeleton-DmAZtRms.js";import"./inputBaseClasses-BQMLzgta.js";import"./Fade-BK4f5_SW.js";import"./Link-CFsiiapl.js";import"./cloneDeep-CU8tiSOH.js";import"./_initCloneObject-BtS9Lr92.js";import"./isArrayLike-DBJ5VOVB.js";import"./isObjectLike-Cu7zvyZq.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-Dxzbedgu.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-CvkBQyYg.js";import"./identity-DKeuBCMA.js";import"./_isIterateeCall-DxE_HXvA.js";import"./SqlFunctions-C2xMGs4N.js";import"./react-sizeme-C2W2PgBQ.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-Cpeaoznz.js";import"./Backdrop-CB6sMj4E.js";import"./LinearProgress-Db_UF_B3.js";import"./LargeButton-C-XtqatF.js";const ke={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:20,setName:"Set size",combinationName:"Intersection size",onClick:(o,i)=>{console.log("onClick() has been called with this selection and event",o,i)}}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: (selection, event) => {
      console.log('onClick() has been called with this selection and event', selection, event);
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const qe=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,qe as __namedExportsOrder,ke as default};
