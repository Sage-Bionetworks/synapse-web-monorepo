import{U as L}from"./UpsetPlot-pQgdQb7w.js";import{f as u}from"./index-CvzXEdyi.js";import"./jsx-runtime-CUNTCE37.js";import"./index-iwduSq60.js";import"./iframe-C20v7OTK.js";import"./LargeButton-Cp_BSGBR.js";import"./DefaultPropsProvider-B-PYyZlm.js";import"./createTheme-cbFkRPvu.js";import"./Button-Cew0p3xf.js";import"./ButtonBase-BrOL7gGJ.js";import"./useTimeout-C3h3mG7S.js";import"./TransitionGroupContext-o00riV6l.js";import"./useForkRef-B6qEDlfe.js";import"./useIsFocusVisible-u8aLHlah.js";import"./useEventCallback-CPv-PfNW.js";import"./useFiles-CXziUBBk.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-Cjwg7_uO.js";import"./OrientationBanner-DVC-9Eoc.js";import"./index-DrGL5Z6h.js";import"./spreadSx-CwcO6WA9.js";import"./react-BHuDLgyy.js";import"./FullWidthAlert-De1OStOb.js";import"./Alert-Dx1Z4kwv.js";import"./resolveComponentProps-sWNv9AD3.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DmVeL3l0.js";import"./Close-BUEGeIV1.js";import"./IconButton-frjP_Efe.js";import"./Paper-C468jb6w.js";import"./Stack-hux_BLUA.js";import"./getThemeProps-PcWr3yTI.js";import"./useTheme-B9l0cioF.js";import"./Box-iBYOIJJh.js";import"./AlertTitle-BcDXofxw.js";import"./Typography-iNw74tXo.js";import"./useTheme-B9obp0jV.js";import"./Grow-Di3YNtHT.js";import"./index-08h1k3rT.js";import"./utils-l3nTcCRT.js";import"./ClickAwayListener-BwaqJqmk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CJIzasCr.js";import"./index-CO9B5BSx.js";import"./useControlled-BK1ZS50s.js";import"./useId-B_jteS8E.js";import"./Popper-CGefBYUp.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-CvCohokr.js";import"./utils-D2MpK3mA.js";import"./Link-DidmzCYQ.js";import"./Collapse-krv0lCh4.js";import"./isNil-G1VRTy0g.js";import"./_Uint8Array-D9ObtfO1.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DT3TzfLw.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DnjdWqDr.js";import"./_getTag-C7xJJ-SW.js";import"./tinycolor-Begke6kS.js";import"./Fade-2dK6sQpn.js";import"./Skeleton-CSwpW9Og.js";import"./inputBaseClasses-lMdWkQYH.js";import"./calculateFriendlyFileSize-CLdbY7DA.js";import"./CheckCircleTwoTone-CeiR3Sbp.js";import"./InfoTwoTone-BhrV1Jbi.js";import"./mutation-BEG6eulq.js";import"./dayjs.min-C4wwLUbt.js";import"./chunk-AYJ5UCUI-brQ4jQk2.js";import"./cloneDeep-BgTSkX-U.js";import"./_initCloneObject-DG7zrIU5.js";import"./isEqual-BQr9gFrf.js";import"./merge-uXuCjRdd.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-Dqx7POa9.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D6ZWyOc5.js";import"./Backdrop-B5C6M46u.js";import"./LinearProgress-CXyECFhS.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
