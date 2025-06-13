import{U as L}from"./UpsetPlot-BN7SA8kj.js";import{f as u}from"./index-BWOvaNZC.js";import"./jsx-runtime-Bv8YEaBH.js";import"./index-C8JkJuAu.js";import"./iframe-NLwWwRdc.js";import"./LargeButton-D3hqCJ7L.js";import"./DefaultPropsProvider-BiXlOQ7j.js";import"./createTheme-D9NJJ6z3.js";import"./Button-DEBpA164.js";import"./ButtonBase-dmtwr57K.js";import"./useTimeout-BuK_Exfq.js";import"./TransitionGroupContext-DJx4bXsB.js";import"./useForkRef-l-SmT4Uz.js";import"./useIsFocusVisible-BO1F7lvs.js";import"./useEventCallback-CFYRt3cH.js";import"./useFiles-Su2vP-Vi.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-EeVSIOhY.js";import"./OrientationBanner-BQ3EEnjD.js";import"./index-CGWSjN6U.js";import"./spreadSx-CwcO6WA9.js";import"./react-CiUdbne5.js";import"./FullWidthAlert-BrvXLUsb.js";import"./Alert-CjEJ3HP5.js";import"./resolveComponentProps-BGoVLP8f.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-L4WadSk7.js";import"./Close-BiBfC96O.js";import"./IconButton-CXhXXsh6.js";import"./Paper-CRVTgSKq.js";import"./Stack-rdeC-v74.js";import"./getThemeProps-4Dr_ZDpi.js";import"./useTheme-Co61GOlc.js";import"./Box-BMPqYR7p.js";import"./AlertTitle-CSIAt-Ha.js";import"./Typography-BsmL1IV9.js";import"./useTheme-BVEmyHZs.js";import"./Grow-D2l0_4Q_.js";import"./index-CMTDsqyy.js";import"./index-BJ_H4sHa.js";import"./utils-C3tDjUst.js";import"./ClickAwayListener-_6zWxFJV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CDHYnPb_.js";import"./index-D3UuUsLK.js";import"./useControlled-Cspd-g1r.js";import"./useId-DIAsmSPW.js";import"./Popper-DKOnFzcu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-BUFsJCGJ.js";import"./utils-Cj0m-Ji3.js";import"./Link-g1X2wDqx.js";import"./Collapse-BSLCQkny.js";import"./isNil-DKDhlnid.js";import"./_Uint8Array-DwE4ItUc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DoTP4dqX.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BoFbjx5O.js";import"./_getTag-BvRivN-a.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZPfr4vM.js";import"./Skeleton-CBrnuwpI.js";import"./inputBaseClasses-DHml8rkl.js";import"./calculateFriendlyFileSize-DiFQmRiA.js";import"./CheckCircleTwoTone-C51j_Tht.js";import"./InfoTwoTone-BAas1LbT.js";import"./useMutation-_5A6YDAS.js";import"./isEqual-BG-Ffdhv.js";import"./dayjs.min-DJseQ_FH.js";import"./chunk-AYJ5UCUI-UunCorCM.js";import"./cloneDeep-CZwPFwpf.js";import"./_initCloneObject-Hb09R64Y.js";import"./merge-Dbgsmfty.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CwFPGnbd.js";import"./Backdrop-JdYly_gr.js";import"./LinearProgress-CDCQJhyi.js";import"./index-drcUuN7d.js";import"./index-CM0ZpsGi.js";import"./index-DYIOWmfz.js";import"./const-Doag8klc.js";import"./index-CUz9rEET.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Zt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Zt as __namedExportsOrder,Xt as default};
