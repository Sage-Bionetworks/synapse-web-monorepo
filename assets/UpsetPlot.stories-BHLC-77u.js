import{U as L}from"./UpsetPlot-BmckEhY0.js";import{f as u}from"./index-BE4Ex5QD.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CYLKyeYK.js";import"./DefaultPropsProvider-DPTWajoX.js";import"./createTheme-BZKeiz7F.js";import"./index-BbU4aETC.js";import"./iframe-BX7CAi87.js";import"./Button-BQsAdChS.js";import"./createSimplePaletteValueFilter-CIoWQpVR.js";import"./useTimeout-BQmg3tV4.js";import"./ButtonBase-oFCZPY0b.js";import"./useForkRef-DR_w4f00.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-mTIStDYE.js";import"./useFiles-Doa42xrB.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BFOqWDQA.js";import"./OrientationBanner-TCfC_H3L.js";import"./index-BVee_ffb.js";import"./spreadSx-CwcO6WA9.js";import"./react-QiGgL7yD.js";import"./FullWidthAlert-u71Fe4AT.js";import"./Alert-CWDPuPjT.js";import"./useSlot-Coso6cuj.js";import"./createSvgIcon-DOjZs8H3.js";import"./Close-DfaBktiu.js";import"./IconButton-2ClfUHAI.js";import"./Paper-BtMJMCrb.js";import"./useTheme-Cey4q2bx.js";import"./useTheme-CcXBUw_1.js";import"./Stack-Dkk8Xa7g.js";import"./useThemeProps-D9O9WAY6.js";import"./getThemeProps-CHgFTbzR.js";import"./extendSxProp-DTdvSIHJ.js";import"./Box-Bycse9BW.js";import"./AlertTitle-uJCriyqk.js";import"./Typography-Ck3rri_r.js";import"./index-DIpubuKK.js";import"./ClickAwayListener-DJnMgcYy.js";import"./getReactElementRef-r96q0QeR.js";import"./index-P5ijQna_.js";import"./index-A1z-KzpE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BVNeYH1n.js";import"./Tooltip-i3RfmkJe.js";import"./index-CFklzSJo.js";import"./useControlled-BeW8yXpV.js";import"./Popper-WEnZTTxD.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-C3jQoxqK.js";import"./QueryClientProvider-Bx1UJlnP.js";import"./Link-CnaFqnEf.js";import"./Collapse-39g-gMCj.js";import"./_baseUniq-CZ8adtBQ.js";import"./_Uint8Array-CEg26PaB.js";import"./isArray-D3G7sFso.js";import"./_getTag-DwYiCtlW.js";import"./isEqual-DJ5furX1.js";import"./noop-DX6rZLP_.js";import"./merge-DEChS73I.js";import"./_initCloneObject-DYz2LT-o.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-SGKJTB9b.js";import"./inputBaseClasses-Df0a-hTu.js";import"./calculateFriendlyFileSize-2wXvVYCR.js";import"./CheckCircleTwoTone-DtjYqZqD.js";import"./InfoTwoTone-jdxUB-jN.js";import"./useMutation-RDVDSqRG.js";import"./dayjs.min-BJ7tfLc7.js";import"./chunk-AYJ5UCUI-DyVUVBHY.js";import"./cloneDeep-HprkIbek.js";import"./Skeleton-DfMrunuk.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Jwy0iW9e.js";import"./Backdrop-BbK_lsZR.js";import"./LinearProgress-CdVosHpm.js";import"./index-DLV2Hw-0.js";import"./index-CdhKn5sn.js";import"./index-wqg5yJr3.js";import"./const-BP60AzNb.js";import"./index-C48j7KkF.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
