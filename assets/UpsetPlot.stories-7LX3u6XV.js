import{U as d}from"./UpsetPlot-CNnqDm-j.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./lz-string-D345GCHL.js";import"./useFiles-CZmZBm21.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-Dto5BQb9.js";import"./FullWidthAlert-DEIFRXi9.js";import"./Alert-CFMVYrhF.js";import"./createTheme-KpOM0lcD.js";import"./index-GEGPABih.js";import"./styled-BBrRP0Md.js";import"./mergeSlotProps-HzkJhcwJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-DTfImBwS.js";import"./Paper-1rWVnzjH.js";import"./IconButton-Dr0cGlMc.js";import"./ButtonBase-D5yFTmEe.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-D7-BSZET.js";import"./Box-BaZAwz5V.js";import"./AlertTitle-D3sbju9B.js";import"./Typography-Cf0oTcRj.js";import"./utils-tKVbghIn.js";import"./index-zcEXKDIA.js";import"./Grow-B7DzSRwx.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-UqEOsFTY.js";import"./index-hbniaWjI.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-D1yxts2k.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./SynapseConstants-DRP7luG1.js";import"./RegularExpressions-CmcMRs19.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-DQQIp0BO.js";import"./CheckCircleTwoTone-DEnKZsx0.js";import"./calculateFriendlyFileSize-DWT38p8X.js";import"./Skeleton-BfmxkurM.js";import"./inputBaseClasses-DMmjJS2A.js";import"./Fade-AJK8kXQa.js";import"./Link-bWbmw0vG.js";import"./cloneDeep-BhVrLcRV.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-DvLBLCla.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BnNaO_kX.js";import"./react-sizeme-Vw-aaS2E.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-DeTTX3br.js";import"./Backdrop-BqLX_ZJd.js";import"./LinearProgress-Do0aABTU.js";import"./LargeButton-BINLOOII.js";const Ie={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const fe=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,fe as __namedExportsOrder,Ie as default};
