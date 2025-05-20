import{U as L}from"./UpsetPlot-CgKJP0RC.js";import{f as u}from"./index-T1vj-X2c.js";import"./jsx-runtime-BPwvgLas.js";import"./index-CBDLWlOB.js";import"./iframe-BOhnkrTR.js";import"./LargeButton-CII9MaBR.js";import"./DefaultPropsProvider-CK3fJzAT.js";import"./createTheme-CqhKahyM.js";import"./Button-Cn6JHKgz.js";import"./ButtonBase-DkvFo0rp.js";import"./useTimeout-D29s38n5.js";import"./TransitionGroupContext-vIwZ2ZdW.js";import"./useForkRef-CYG44Oi1.js";import"./useIsFocusVisible-CRwyDx7g.js";import"./useEventCallback-BEeQPLsK.js";import"./useFiles-CbMpvGhW.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-C-MequxA.js";import"./OrientationBanner-BCOcpvAV.js";import"./index-AJ8qoPp1.js";import"./spreadSx-CwcO6WA9.js";import"./react-iQ_QJFeH.js";import"./FullWidthAlert-C4NXiFAr.js";import"./Alert-xrq_SMEg.js";import"./resolveComponentProps-CbacDgM7.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CngalfwQ.js";import"./Close-DIxv3BmU.js";import"./IconButton-D355AQnf.js";import"./Paper-keIiwirC.js";import"./Stack-BgNqp8gK.js";import"./getThemeProps-BbDbNfTq.js";import"./useTheme-CHrnUnqX.js";import"./Box-DZ1qA8WV.js";import"./AlertTitle-CEogbmjt.js";import"./Typography-CEe9erp9.js";import"./useTheme-P165y_LK.js";import"./Grow-CJVUX4yR.js";import"./index-BwhZA35d.js";import"./utils-BPpJDtRg.js";import"./ClickAwayListener-P6OmxxdK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-_plCLI4q.js";import"./index-B9wPZdQL.js";import"./useControlled-BK1AIYs5.js";import"./useId-CLSRERuv.js";import"./Popper-BvhU2AWB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-DZi11ge7.js";import"./utils-BqDa975t.js";import"./Link-Ccuxh7N2.js";import"./Collapse-xlH7IseN.js";import"./isNil-Bv7-3_hG.js";import"./_Uint8Array-BDCBH0-0.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-qFFT-3MK.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D3_Tdhx8.js";import"./_getTag-KyP6iQiD.js";import"./tinycolor-Begke6kS.js";import"./Fade-CY98KLjb.js";import"./Skeleton-iR_TlL_5.js";import"./inputBaseClasses-DlYO5ZlR.js";import"./calculateFriendlyFileSize-Chfxh2O6.js";import"./CheckCircleTwoTone-Bw2Wk5oI.js";import"./InfoTwoTone-Afibcha7.js";import"./mutation-BBLhG9HE.js";import"./dayjs.min-DYOI9g68.js";import"./chunk-AYJ5UCUI-D4D6uZ8Q.js";import"./cloneDeep-BLP2jVxP.js";import"./_initCloneObject-eaMKh-yS.js";import"./isEqual-BvUIKxyq.js";import"./merge-BbxdCm3T.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-BEuPfOVy.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Blf8LSXT.js";import"./Backdrop-Bt50zR9z.js";import"./LinearProgress-DlDdSH6p.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
