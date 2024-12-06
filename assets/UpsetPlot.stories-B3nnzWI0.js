import{U as d}from"./UpsetPlot-B9-N2oUb.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./lz-string-D345GCHL.js";import"./useFiles-VFnS8GPd.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-6BqxDXOp.js";import"./FullWidthAlert-7vG6655N.js";import"./Alert-B6PGsAkP.js";import"./createTheme-BIBP8v0l.js";import"./index-GEGPABih.js";import"./extends-CF3RwP-h.js";import"./styled-DKRXvDfM.js";import"./mergeSlotProps-D9SyexBH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-Dn0UJ7ef.js";import"./Paper-BxvgHMc4.js";import"./IconButton-DhHKwBf8.js";import"./ButtonBase-DSnjMKVu.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-BbdlCzXz.js";import"./Box-Bt_N9PQN.js";import"./AlertTitle-CCxKidd9.js";import"./Typography-D6GCV-CB.js";import"./utils-B6ltzQPV.js";import"./index-zcEXKDIA.js";import"./Grow-Bb1htYw2.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CTVx2uGI.js";import"./index-Bn-p0IzE.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-j3jTttn9.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./SynapseConstants-BOdbxuBd.js";import"./RegularExpressions-SKYrON-T.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-DHgeDUIO.js";import"./CheckCircleTwoTone-B0uYEdLD.js";import"./calculateFriendlyFileSize-DBeyIXBK.js";import"./Skeleton-DxEJ6_Wp.js";import"./inputBaseClasses-Db8tCxfW.js";import"./Fade-DPmnnOI3.js";import"./Link-DPsc3TBb.js";import"./cloneDeep-C-OZ4saa.js";import"./_initCloneObject-CKp18hZk.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-tKdMMErg.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-DLQdEICg.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-Drr0XsQh.js";import"./react-sizeme-Vw-aaS2E.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-Bc9rto4U.js";import"./Backdrop-CoMkdzxE.js";import"./LinearProgress-DB_pgUJr.js";import"./LargeButton-Bi_H3TB2.js";const fe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          facetValues: ([...sets.values()].map((v: any) => v.name) as string[])
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
