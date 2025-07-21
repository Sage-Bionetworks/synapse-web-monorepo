import{U as L}from"./UpsetPlot-IGa9WQf6.js";import{f as u}from"./index-Bz7l-3Ok.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BQimjuGN.js";import"./DefaultPropsProvider-BbdPqQAK.js";import"./createTheme-BFhnpMSS.js";import"./index-CHCQtvL6.js";import"./iframe-ZPpoLeey.js";import"./Button-BeG1LK6v.js";import"./createSimplePaletteValueFilter-CjVdpQPV.js";import"./useTimeout-Cu2vCmSz.js";import"./ButtonBase-B8vo2K9-.js";import"./useForkRef-csIk32iV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bihi_tcT.js";import"./useFiles-D3UAGipA.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-E103U1bW.js";import"./OrientationBanner-D3eSVmWN.js";import"./index-CfnuRBG1.js";import"./spreadSx-CwcO6WA9.js";import"./react-f9KYRIt5.js";import"./FullWidthAlert-CbxZG49d.js";import"./Alert-DegRDyyN.js";import"./useSlot-CuZE2NTH.js";import"./createSvgIcon-BZ_BUujo.js";import"./Close-BIdbZDc7.js";import"./IconButton-Daw0KZEB.js";import"./Paper-BrGOwJGK.js";import"./useTheme-D6VPeybh.js";import"./useTheme-CD7CGQfw.js";import"./Stack-B7ZgJnX9.js";import"./extendSxProp-BrI7Ri1u.js";import"./getThemeProps-C1Ym3Nly.js";import"./Box-15nTKuqV.js";import"./AlertTitle-eELc3dYp.js";import"./Typography-CuzFDH9B.js";import"./index-BNiw25kd.js";import"./ClickAwayListener-BAKBvik9.js";import"./getReactElementRef-BPiKtgLA.js";import"./index-B9D5oL8y.js";import"./index-C6wgRN_X.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbCSPoHd.js";import"./Tooltip-CPI6Fpng.js";import"./index-CG7Pl6dA.js";import"./useControlled-RxNtz9_-.js";import"./Popper-jGylP4dS.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-B1ePn8hK.js";import"./QueryClientProvider-BhG5JtiV.js";import"./Link-BFg9Y_1H.js";import"./Collapse-Bbq4RPGY.js";import"./_baseUniq-BJ6ERfwq.js";import"./_Uint8Array-DJsTOuqa.js";import"./isArray-Cw5-Yd5s.js";import"./_getTag-D2DjDLdh.js";import"./isEqual-BTkCORq3.js";import"./merge-BQaS75VP.js";import"./_initCloneObject-DaZFvmxr.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-eUIMTtqF.js";import"./inputBaseClasses-DPHY9qrw.js";import"./calculateFriendlyFileSize-Br4j9ddy.js";import"./CheckCircleTwoTone-03BUkFg_.js";import"./InfoTwoTone-BKkKN8uD.js";import"./useMutation-Bvt53Km9.js";import"./dayjs.min-CoO_HNBx.js";import"./chunk-AYJ5UCUI-COE2TzHN.js";import"./cloneDeep-D6f7fmf8.js";import"./Skeleton-DeTWEba3.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DhxtYfx2.js";import"./Backdrop-Cn14-0Ht.js";import"./LinearProgress-Dqt0LQOd.js";import"./index-DczMpeb2.js";import"./index-uib973Y-.js";import"./index-og4frzMO.js";import"./const-BP60AzNb.js";import"./index-CSurNF6E.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
