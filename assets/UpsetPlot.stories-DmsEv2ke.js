import{U as L}from"./UpsetPlot-CrzY2-1d.js";import{f as u}from"./index-Br1auLXc.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-F2VM-m17.js";import"./DefaultPropsProvider-TL-5ySmN.js";import"./createTheme-XMOvO1uz.js";import"./index-GRv_M5xO.js";import"./iframe-CHSey4Qy.js";import"./Button-BkJK4QNY.js";import"./createSimplePaletteValueFilter-CTGhusyg.js";import"./useTimeout-BKm-mX-p.js";import"./ButtonBase-V1v9Oy7w.js";import"./useForkRef-9xmpncSc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dvwg5XG_.js";import"./useFiles-Cb-DFW-O.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-PYu29qy2.js";import"./OrientationBanner-DWQA6tte.js";import"./index-CvAUeT55.js";import"./spreadSx-CwcO6WA9.js";import"./react-fYbkOk0Z.js";import"./FullWidthAlert-C49EQ7xt.js";import"./Alert-keA6PNWz.js";import"./useSlot-DIJeBNuE.js";import"./createSvgIcon-D5Yfx_2a.js";import"./Close-DnUw2nhd.js";import"./IconButton-BCHYlsAQ.js";import"./Paper-v_DbiU7W.js";import"./useTheme-CTnoRr58.js";import"./useTheme-D8ZpTE-W.js";import"./Stack-CL-Uwzo-.js";import"./extendSxProp-BUjKKvW6.js";import"./getThemeProps-BBbNAS-u.js";import"./Box-piqsVEzW.js";import"./AlertTitle-iqKGQNFP.js";import"./Typography-CnygSuis.js";import"./index-BIrZvg_i.js";import"./ClickAwayListener-BxWmYz5N.js";import"./getReactElementRef-dtt4OgtQ.js";import"./index-DevK0Wnu.js";import"./index-Q1AwhQZ3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DMzs2hg_.js";import"./Tooltip-CL0Q9gg2.js";import"./index-DgcQxjL4.js";import"./useControlled-BFF-TWZN.js";import"./Popper-CREcBinl.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-D1dT8CXY.js";import"./useQuery-Bk-MKwCv.js";import"./QueryClientProvider-BcQ5cWBG.js";import"./Link-DkrvP2Xp.js";import"./Collapse-DkiAfHoJ.js";import"./_baseUniq-C1QqHhlr.js";import"./_Uint8Array-Cn_xd6xR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBGBsSxk.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CMdUgycz.js";import"./isEqual-BsYk-GjW.js";import"./merge-DBc6Xia0.js";import"./_initCloneObject-CWQe1PTl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BdlIu10A.js";import"./inputBaseClasses-DWsLjY3m.js";import"./calculateFriendlyFileSize-67xCj-cf.js";import"./CheckCircleTwoTone-Bl8hrmiT.js";import"./InfoTwoTone-CiagWgO7.js";import"./useMutation-6hjCqGzx.js";import"./dayjs.min-hSrPVPI9.js";import"./chunk-AYJ5UCUI-BovHwV8F.js";import"./cloneDeep-DbnesDwj.js";import"./Skeleton-B-3V1zxa.js";import"./SqlFunctions-OlXdLdyI.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BKNaJo5U.js";import"./Backdrop-CR7QxV0I.js";import"./LinearProgress-DLnynPGO.js";import"./index-3lDLV3LV.js";import"./index-DCT8qD2D.js";import"./index-BvKhV9Sb.js";import"./const-BP60AzNb.js";import"./index-U284iSVf.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
