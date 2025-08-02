import{U as L}from"./UpsetPlot-DDGlxAb4.js";import{f as u}from"./index-CZbboWq2.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bji7woRZ.js";import"./DefaultPropsProvider-Bh69SfpX.js";import"./createTheme-DlPP5FLd.js";import"./index-CGbt02rg.js";import"./iframe-DZLnBXRp.js";import"./Button-BQgLiUAy.js";import"./createSimplePaletteValueFilter-DuAffrVq.js";import"./useTimeout-DVTsv0WP.js";import"./ButtonBase-BRlvOhoB.js";import"./useForkRef-BuWvzGyB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DEKY0fuh.js";import"./useFiles-BaJcOe7m.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DgoR54IZ.js";import"./OrientationBanner-DxFnP9LU.js";import"./index-Dfa_TYwg.js";import"./spreadSx-CwcO6WA9.js";import"./react-NAXsidak.js";import"./FullWidthAlert-BHJOime1.js";import"./Alert-CaI3yYY0.js";import"./useSlot-CjInwJ78.js";import"./createSvgIcon-CTE3VzQH.js";import"./Close-DkY2mnIv.js";import"./IconButton-AJS7gHdS.js";import"./Paper-CGhngFYT.js";import"./useTheme-AdI2zGZv.js";import"./useTheme-B1XcoYyi.js";import"./Stack--lp-rTAC.js";import"./extendSxProp-CoKOIChi.js";import"./getThemeProps-WjTpBOt0.js";import"./Box-HsxDjwyr.js";import"./AlertTitle-BKJ5JrJn.js";import"./Typography-nZ7v7MHZ.js";import"./index-BFIimsw4.js";import"./ClickAwayListener-DQGm0c4K.js";import"./getReactElementRef-BgTk7-9b.js";import"./index-D3f-rpui.js";import"./index-BP559Jzy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DypgN_s2.js";import"./Tooltip-Bo2j0bzr.js";import"./index-BoByUbsy.js";import"./useControlled-CttVXnNd.js";import"./Popper-BCdjvqXc.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C_YSpdBV.js";import"./QueryClientProvider-BI7z2Iow.js";import"./Link-BX4KTNgr.js";import"./Collapse-C_poTtT9.js";import"./_baseUniq-BwXrbMtE.js";import"./_Uint8Array-CZUfKPgL.js";import"./isArray-DAL_BuZW.js";import"./_getTag-DvjQ5Pp7.js";import"./isEqual-BBFoljdq.js";import"./merge-DTrI62fL.js";import"./_initCloneObject-DBTM0Y2I.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Brmw86Ac.js";import"./inputBaseClasses-BX9mLEzy.js";import"./calculateFriendlyFileSize-CjUm0Jtv.js";import"./CheckCircleTwoTone-aYDqywWC.js";import"./InfoTwoTone-B34bh4i5.js";import"./useMutation-BnceP_i1.js";import"./dayjs.min-CuSMugzy.js";import"./chunk-AYJ5UCUI-Dxnwu8mn.js";import"./cloneDeep-DgaTrbQq.js";import"./Skeleton-But2MJbt.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CdxOqKQ2.js";import"./Backdrop-kEx6DM8m.js";import"./LinearProgress-D4zcmEqw.js";import"./index-BJR4wLyA.js";import"./index-DfjREqyb.js";import"./index-Bsnr4DA6.js";import"./const-BP60AzNb.js";import"./index-DR4RhkKR.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
