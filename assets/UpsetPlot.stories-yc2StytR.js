import{U as L}from"./UpsetPlot-CF7zqfpw.js";import{f as u}from"./index-7O2XCyG_.js";import"./jsx-runtime-BY_mVWc9.js";import"./index-CDYR7tL8.js";import"./iframe-ec_Y5N2K.js";import"./LargeButton-BjPhcanh.js";import"./DefaultPropsProvider-DNPn7UnV.js";import"./createTheme-DZLOB4Mv.js";import"./Button-C4-2XFxt.js";import"./createSimplePaletteValueFilter-DBau_Gxe.js";import"./useTimeout-Cqf2BsOs.js";import"./ButtonBase-CzvtEIH5.js";import"./useForkRef-DivrPue1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-vGm6AseL.js";import"./useFiles-Xx-EZMKl.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-CD4Gjijh.js";import"./OrientationBanner-CZTPUBzZ.js";import"./index-Jflqg59c.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cr0876MF.js";import"./FullWidthAlert-BWiVBg4T.js";import"./Alert-A7PP1pH1.js";import"./useSlot-Caj1a2M-.js";import"./createSvgIcon-DALwTUgz.js";import"./Close-B12rcIns.js";import"./IconButton-DyKMG-WG.js";import"./Paper-1Ie-v56U.js";import"./useTheme-B43FcIWF.js";import"./useTheme-gk5821JI.js";import"./Stack-yvnfu-rk.js";import"./extendSxProp-CnXVVWK3.js";import"./getThemeProps-BGg4fvxA.js";import"./Box-BdYZ8dTM.js";import"./AlertTitle-573n6WcI.js";import"./Typography-C1Gc4eFY.js";import"./index-DZbAs7ZD.js";import"./ClickAwayListener-DlSL8Ldo.js";import"./getReactElementRef-BTQA_67l.js";import"./index-BNiyjOON.js";import"./index-CwYnvFaE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ccx_ij52.js";import"./Tooltip-CsjxOjn3.js";import"./index-D3vA8nvS.js";import"./useControlled-B3shF0Q4.js";import"./Popper-C0ikImD9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-D6lP2bTM.js";import"./utils-OZVB1z32.js";import"./Link-4BYKlKGk.js";import"./Collapse-CaGOsFtR.js";import"./isNil-Ccu4rjQ0.js";import"./_Uint8Array-CQTvgpZW.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BUVjwr8V.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DYciDMbs.js";import"./_getTag-B_sIfJjf.js";import"./tinycolor-Begke6kS.js";import"./Fade-YiaESS8f.js";import"./inputBaseClasses-Jd5N6oad.js";import"./calculateFriendlyFileSize-GvBAR9FE.js";import"./CheckCircleTwoTone-D1TLx2f1.js";import"./InfoTwoTone-C6qDyMg4.js";import"./useMutation-Cr9MfVSe.js";import"./dayjs.min-DlmYzA05.js";import"./chunk-AYJ5UCUI-COjyIqKz.js";import"./cloneDeep-DotM_zQ1.js";import"./_initCloneObject-C1mLXVej.js";import"./Skeleton-DhA3Wh2L.js";import"./merge-CeQTzTYT.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-1MhugTzw.js";import"./Backdrop-DlbfLn19.js";import"./LinearProgress-CEicoE_e.js";import"./index-Ody48Ube.js";import"./index-CBhX87Ij.js";import"./index-DSU8GyDT.js";import"./const-Doag8klc.js";import"./index--aK4EvaQ.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
