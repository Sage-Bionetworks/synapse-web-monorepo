import{n as e}from"./chunk-jRWAZmH_.js";import{Bg as t,I as n,L as r,N_ as i,Qg as a,Vg as o,_ as s,ag as c,at as l,b as u,d,f,i_ as p,it as m,ng as h,s_ as g,v as _,xg as v,y}from"./iframe-B5iSrlt2.js";import{n as b,t as x}from"./CardContainerLogic-COKF-4a1.js";var S,C,w,T,E,D=e((()=>{l(),S=[{name:`releaseEntityId`,columnType:`ENTITYID`,id:`207864`},{name:`releaseName`,columnType:`STRING`,id:`207865`,maximumSize:50},{name:`releaseDate`,columnType:`DATE`,id:`207866`},{name:`countPatients`,columnType:`INTEGER`,id:`207920`},{name:`countSamples`,columnType:`INTEGER`,id:`207921`},{name:`isCurrentRelease`,columnType:`BOOLEAN`,id:`207868`},{name:`releaseType`,columnType:`STRING`,facetType:`enumeration`,id:`208002`,maximumSize:50,enumValues:[`CRC`,`NSCLC`]},{name:`releaseExplorePath`,columnType:`STRING`,id:`208001`,defaultValue:`/explore/files/genie`,maximumSize:50,enumValues:[`/explore/files/genie`,`/explore/files/genie-bpc`]},{name:`exploreDataSql`,columnType:`STRING`,id:`208850`,defaultValue:`select * from syn54100284`,maximumSize:50,enumValues:[`select * from syn54100284`,`select * from syn54100290`]},{name:`version`,columnType:`STRING`,id:`208851`,maximumSize:50}],C=S.map(e=>({...e})),w=C,T={concreteType:`org.sagebionetworks.repo.model.table.QueryResultBundle`,queryResult:{concreteType:`org.sagebionetworks.repo.model.table.QueryResult`,queryResults:{concreteType:`org.sagebionetworks.repo.model.table.RowSet`,tableId:m,etag:`e2bac0de-5ab6-411d-bf76-7c5a2a2df707`,headers:C,rows:[{rowId:1,versionNumber:16,values:[`syn53701297`,`GENIE 15.0-public`,`1704235503000`,`198041`,`172005`,`true`,`main`,`/explore/files/genie`,`select * from syn54100284`,`15.0-public`]},{rowId:2,versionNumber:14,values:[`syn51417430`,`CRC 2.0-public`,`1667339328000`,`1486`,`1552`,`true`,`CRC`,`/explore/files/genie-bpc`,`select * from syn54100290`,`2.0-public`]},{rowId:3,versionNumber:14,values:[`syn51417430`,`NSCLC 2.0-public`,`1651441766000`,`1846`,`2004`,`true`,`NSCLC`,`/explore/files/genie-bpc`,`select * from syn54100290`,`2.0-public`]}]}},queryCount:3,selectColumns:w,maxRowsPerPage:2957,columnModels:S,facets:[{concreteType:`org.sagebionetworks.repo.model.table.FacetColumnResultValues`,columnName:`releaseType`,facetType:`enumeration`,facetValues:[{value:`main`,count:1,isSelected:!1},{value:`CRC`,count:1,isSelected:!1},{value:`NSCLC`,count:1,isSelected:!1}]}],sumFileSizes:{sumFileSizesBytes:0,greaterThan:!1},lastUpdatedOn:`2024-03-02T16:16:43.968Z`},E={concreteType:`org.sagebionetworks.repo.model.table.QueryResultBundle`,queryResult:{concreteType:`org.sagebionetworks.repo.model.table.QueryResult`,queryResults:{concreteType:`org.sagebionetworks.repo.model.table.RowSet`,tableId:m,etag:`e2bac0de-5ab6-411d-bf76-7c5a2a2df707`,headers:C,rows:[{rowId:4,versionNumber:16,values:[`syn51417430`,`14.1-public`,`1704235808000`,`170505`,`196541`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`14.1-public`]},{rowId:5,versionNumber:16,values:[`syn51417430`,`14.0-public`,`1699570245000`,`169005`,`195041`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`14.0-public`]},{rowId:6,versionNumber:16,values:[`syn53701297`,`13.1-public`,`1694814677000`,`166005`,`192041`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`13.1-public`]},{rowId:7,versionNumber:16,values:[`syn53701297`,`13.0-public`,`1692913961000`,`166005`,`192041`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`13.0-public`]},{rowId:8,versionNumber:16,values:[`syn53701297`,`12.1-public`,`1692914000000`,`163005`,`189041`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`12.1-public`]},{rowId:10,versionNumber:16,values:[`syn53701297`,`11.0-public`,`1689194860000`,`160005`,`180022`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`11.0-public`]},{rowId:11,versionNumber:16,values:[`syn53701297`,`10.1-public`,`1687898860000`,`150525`,`172324`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`10.1-public`]},{rowId:12,versionNumber:18,values:[`syn53701297`,`test release missing data`,`1686689260000`,null,`172324`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`Test.1-public`]},{rowId:13,versionNumber:16,values:[`syn53701297`,`very very long release name`,`1709165287000`,`123456789012345`,`123456789012345`,`false`,`main`,`/explore/files/genie`,`select * from syn54100284`,`Test.2-public`]}]}},queryCount:9,selectColumns:w,maxRowsPerPage:2957,columnModels:S,facets:[{concreteType:`org.sagebionetworks.repo.model.table.FacetColumnResultValues`,columnName:`releaseType`,facetType:`enumeration`,facetValues:[{value:`main`,count:9,isSelected:!1}]}],sumFileSizes:{sumFileSizesBytes:0,greaterThan:!1},lastUpdatedOn:`2024-03-02T16:16:43.968Z`}})),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{l(),r(),_(),y(),f(),D(),c(),i(),x(),O={title:`Explore/CardContainerLogic`,component:b},k={args:{sql:`SELECT * FROM syn22095937.4 order by authors asc`,initialLimit:2,limit:5,cardConfiguration:{type:o,genericCardSchema:{type:p,title:`title`,description:`abstract`,subTitle:`authors`,secondaryLabels:[`year`,`journal`,`study`,`grants`,`DOI`]}},sortConfig:{defaultColumn:`authors`,defaultDirection:`ASC`,sortableColumns:[`authors`,`title`,`createdOn`,`journal`]}}},A={args:{sql:`SELECT * FROM syn22095937.4 WHERE study='not a study value'`,cardConfiguration:{type:o,genericCardSchema:{type:p,title:`title`,description:`abstract`,subTitle:`authors`,secondaryLabels:[`year`,`journal`,`study`,`grants`,`DOI`]}}}},j={args:{sql:`SELECT * FROM syn51735464`,cardConfiguration:{type:a},limit:3}},M={args:{sql:`SELECT * FROM syn16858699`,cardConfiguration:{type:t},limit:3}},N={args:{sql:`SELECT * FROM syn16859580`,cardConfiguration:{type:v},limit:3}},P={type:p,title:`publicationTitle`,subTitle:`authors`,secondaryLabels:[`pubMedLink`,`journal`,`publicationYear`,`theme`,`tumorType`,`tissue`,`assay`,`keywords`,`doi`,`consortium`]},F={args:{sql:`SELECT * FROM syn21868591 WHERE ( ( "grantNumber" HAS ( 'CA209988' ) ) )`,cardConfiguration:{type:o,genericCardSchema:P}}},I=[{destinationTableColumnName:`cohort`,sourceTableColumnName:`Cohort`},{destinationTableColumnName:`version`,sourceTableColumnName:`version`}],L={args:{sql:`select * from syn54338474 where IsCurrentVersion = 'TRUE' order by ReleaseDate desc`,limit:3,cardConfiguration:{type:g,releaseCardConfig:{cardSize:`large`,prependRelease:!1,releaseMetadataConfig:{releaseDateColumnName:`ReleaseDate`,releaseEntityIdColumnName:`id`,releaseNameColumnName:`nameReleaseCard`},statsConfig:[{columnName:`Patients`,label:`Patients`},{columnName:`Samples`,label:`Samples`}],primaryBtnConfig:{label:`Explore Data Release`,sourceTablePathColumnName:`releaseExplorePath`,sourceTableSqlColumnName:`exploreDataSql`,selectedFacetConfigs:I},secondaryBtnConfig:{label:`View Data Guide`,sourceTablePathColumnName:`releaseExplorePath`,sourceTableSqlColumnName:`exploreDataSql`,selectedFacetConfigs:I,staticSelectedFacets:[{facet:`dataType`,facetValue:`data_guide`}]}}}}},R={releaseDateColumnName:`releaseDate`,releaseEntityIdColumnName:`releaseEntityId`,releaseNameColumnName:`releaseName`},z=[{columnName:`countPatients`,label:`Patients`},{columnName:`countSamples`,label:`Samples`}],B=[{destinationTableColumnName:`releaseType`,sourceTableColumnName:`releaseType`},{destinationTableColumnName:`version`,sourceTableColumnName:`version`}],V=`SELECT * FROM ${m} WHERE isCurrentRelease = true`,H={args:{sql:V,limit:3,cardConfiguration:{type:g,releaseCardConfig:{cardSize:`large`,prependRelease:!1,releaseMetadataConfig:R,statsConfig:z,primaryBtnConfig:{label:`Explore Current Data Release`,sourceTablePathColumnName:`releaseExplorePath`,sourceTableSqlColumnName:`exploreDataSql`,selectedFacetConfigs:B},secondaryBtnConfig:{label:`View Data Guide`,sourceTablePathColumnName:`releaseExplorePath`,sourceTableSqlColumnName:`exploreDataSql`,selectedFacetConfigs:B,staticSelectedFacets:[{facet:`dataType`,facetValue:`data_guide`}]}}}},loaders:[()=>u({sql:V},T)],parameters:{stack:`mock`,design:{type:`figma`,url:`https://www.figma.com/file/BI4y33EHA95onN8DourTNZ/Two-Projects?type=design&node-id=195-13615&mode=design&t=76oHvfvp9FWFtDSR-4`},msw:{handlers:[...d(h),...n(h),...s(h)]}}},U={args:{sql:`SELECT * FROM ${m} WHERE isCurrentRelease = false`,initialLimit:5,cardConfiguration:{type:g,releaseCardConfig:{cardSize:`medium`,requestAccessPath:`data access`,releaseMetadataConfig:R,statsConfig:z}}},loaders:[()=>{u({sql:`SELECT * FROM ${m} WHERE isCurrentRelease = false`},E)}],parameters:{stack:`mock`,design:{type:`figma`,url:`https://www.figma.com/file/BI4y33EHA95onN8DourTNZ/Two-Projects?type=design&node-id=259-14622&mode=design&t=76oHvfvp9FWFtDSR-4`},msw:{handlers:[...d(h),...n(h),...s(h)]}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn22095937.4 order by authors asc',
    initialLimit: 2,
    limit: 5,
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: {
        type: PUBLICATION,
        title: 'title',
        description: 'abstract',
        subTitle: 'authors',
        secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI']
      }
    },
    sortConfig: {
      defaultColumn: 'authors',
      defaultDirection: 'ASC',
      sortableColumns: ['authors', 'title', 'createdOn', 'journal']
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    sql: "SELECT * FROM syn22095937.4 WHERE study='not a study value'",
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: {
        type: PUBLICATION,
        title: 'title',
        description: 'abstract',
        subTitle: 'authors',
        secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI']
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT * FROM syn51735464\`,
    cardConfiguration: {
      type: OBSERVATION_CARD
    },
    limit: 3
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT * FROM syn16858699\`,
    cardConfiguration: {
      type: FUNDER
    },
    limit: 3
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT * FROM syn16859580\`,
    cardConfiguration: {
      type: DATASET
    },
    limit: 3
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT * FROM syn21868591 WHERE ( ( "grantNumber" HAS ( 'CA209988' ) ) )\`,
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: publicationSchema
    }
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    sql: "select * from syn54338474 where IsCurrentVersion = 'TRUE' order by ReleaseDate desc",
    limit: 3,
    cardConfiguration: {
      type: RELEASE_CARD,
      releaseCardConfig: {
        cardSize: 'large',
        prependRelease: false,
        releaseMetadataConfig: {
          releaseDateColumnName: 'ReleaseDate',
          releaseEntityIdColumnName: 'id',
          releaseNameColumnName: 'nameReleaseCard'
        },
        statsConfig: [{
          columnName: 'Patients',
          label: 'Patients'
        }, {
          columnName: 'Samples',
          label: 'Samples'
        }],
        primaryBtnConfig: {
          label: 'Explore Data Release',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: genieSelectedFacetConfigs
        },
        secondaryBtnConfig: {
          label: 'View Data Guide',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: genieSelectedFacetConfigs,
          staticSelectedFacets: [{
            facet: 'dataType',
            facetValue: 'data_guide'
          }]
        }
      }
    }
  }
}`,...L.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    sql: currentReleaseCardSql,
    limit: 3,
    cardConfiguration: {
      type: RELEASE_CARD,
      releaseCardConfig: {
        cardSize: 'large',
        prependRelease: false,
        releaseMetadataConfig: releaseMetadataConfig,
        statsConfig: statsConfig,
        primaryBtnConfig: {
          label: 'Explore Current Data Release',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: selectedFacetConfigs
        },
        secondaryBtnConfig: {
          label: 'View Data Guide',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: selectedFacetConfigs,
          staticSelectedFacets: [{
            facet: 'dataType',
            facetValue: 'data_guide'
          }]
        }
      }
    }
  },
  loaders: [() => registerTableQueryResult({
    sql: currentReleaseCardSql
  }, mockCurrentReleaseCardsQueryResultBundle)],
  parameters: {
    stack: 'mock',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BI4y33EHA95onN8DourTNZ/Two-Projects?type=design&node-id=195-13615&mode=design&t=76oHvfvp9FWFtDSR-4'
    },
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN)]
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT * FROM \${MOCK_RELEASE_CARDS_TABLE_ID} WHERE isCurrentRelease = false\`,
    initialLimit: 5,
    cardConfiguration: {
      type: RELEASE_CARD,
      releaseCardConfig: {
        cardSize: 'medium',
        requestAccessPath: 'data access',
        releaseMetadataConfig: releaseMetadataConfig,
        statsConfig: statsConfig
      }
    }
  },
  loaders: [() => {
    registerTableQueryResult({
      sql: \`SELECT * FROM \${MOCK_RELEASE_CARDS_TABLE_ID} WHERE isCurrentRelease = false\`
    }, mockPreviousReleaseCardsQueryResultBundle);
  }],
  parameters: {
    stack: 'mock',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BI4y33EHA95onN8DourTNZ/Two-Projects?type=design&node-id=259-14622&mode=design&t=76oHvfvp9FWFtDSR-4'
    },
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN)]
    }
  }
}`,...U.parameters?.docs?.source}}},W=[`GenericCard`,`EmptyResults`,`ObservationCard`,`FunderCard`,`DatasetCard`,`PublicationCard`,`ReleaseCardLarge`,`ReleaseCardLargeMock`,`ReleaseCardMediumMock`]}))();export{N as DatasetCard,A as EmptyResults,M as FunderCard,k as GenericCard,j as ObservationCard,F as PublicationCard,L as ReleaseCardLarge,H as ReleaseCardLargeMock,U as ReleaseCardMediumMock,W as __namedExportsOrder,O as default};