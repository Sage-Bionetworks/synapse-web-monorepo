import{U as L}from"./UpsetPlot-aBohwE28.js";import{f as u}from"./index-CG57S1QB.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C475rsF3.js";import"./DefaultPropsProvider-Dyop95cE.js";import"./createTheme-yhJZirTq.js";import"./index-CvyYqbbB.js";import"./iframe-B3xGRWau.js";import"./Button-BqoZyXTP.js";import"./createSimplePaletteValueFilter-BkO8Qsnx.js";import"./useTimeout-BifyLnyQ.js";import"./ButtonBase-Bd0MhjFr.js";import"./useForkRef-2hkVe3-e.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BjSx0fst.js";import"./useFiles-Dd0vPh_H.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DRPzlq-o.js";import"./OrientationBanner-CSetEjqk.js";import"./index-B0gefgMG.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJmaa9HB.js";import"./FullWidthAlert-LRva0ICM.js";import"./Alert-UhYp6qY9.js";import"./useSlot-CWCXsuM6.js";import"./createSvgIcon-B7YpWqx3.js";import"./Close-Cz4GiEbp.js";import"./IconButton-BfvyGdE-.js";import"./Paper-S1fvqJVW.js";import"./useTheme-EtZCDR2R.js";import"./useTheme-Ctrn4LCN.js";import"./Stack-KXRQ2qoN.js";import"./useThemeProps-CXcPGtyI.js";import"./getThemeProps-DFwGNQQM.js";import"./extendSxProp-CKP_yBEI.js";import"./Box-CDJoVLM4.js";import"./AlertTitle-CY1i-AXt.js";import"./Typography-D_4H52WI.js";import"./index-B-Pvp7yD.js";import"./ClickAwayListener-9LiC0SA2.js";import"./getReactElementRef-CNb7xhSU.js";import"./index-Br3fcRxK.js";import"./index-DDLERCEI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CS2Zqaue.js";import"./Tooltip-bjvNYtJ9.js";import"./index-iomPLjn7.js";import"./useControlled-bz51c3bn.js";import"./Popper-C8sKl6Af.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BPHiJ7LM.js";import"./QueryClientProvider-BcAhPAdQ.js";import"./Link-CzE4P4qz.js";import"./Collapse-DTdOrPcE.js";import"./_baseUniq-DbA25ysr.js";import"./_Uint8Array-BTKm1ZQB.js";import"./isArray-DbXmnvJN.js";import"./_getTag-DrnZ3UrD.js";import"./isEqual-DUeH-zW5.js";import"./noop-DX6rZLP_.js";import"./merge-DXAGUrVQ.js";import"./_initCloneObject-Dj57jkPY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-P4NxGNb5.js";import"./inputBaseClasses-CVaOacQt.js";import"./calculateFriendlyFileSize-BnFD44D5.js";import"./CheckCircleTwoTone-Cro7lWgF.js";import"./InfoTwoTone-DYvYDf7n.js";import"./useMutation-P9l519zQ.js";import"./dayjs.min-BXio50PZ.js";import"./chunk-AYJ5UCUI-DgTRugk4.js";import"./cloneDeep-LWRqqlyp.js";import"./Skeleton-209IQpVd.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-AhSGB9PC.js";import"./Backdrop-BO7fw9rQ.js";import"./LinearProgress-DeLlPqAa.js";import"./index-IDc42OAE.js";import"./index-BiZS2WQk.js";import"./index-DI-43Cn5.js";import"./const-BP60AzNb.js";import"./index-DZv-x0Bk.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
