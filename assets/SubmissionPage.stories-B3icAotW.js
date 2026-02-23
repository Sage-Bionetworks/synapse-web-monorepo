import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-81JeKJJY.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CG-jxugC.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CEXV2jdj.js";import"./useAccessRequirements-Bz_10GRb.js";import"./index-hxZfLxrn.js";import"./_baseOrderBy-BwCykfFi.js";import"./_baseIteratee-lj1Fn_3g.js";import"./_baseMap-D7XNcdNx.js";import"./_baseEach-BIYGB8bs.js";import"./useQueries-DsAAcLRN.js";import"./useInfiniteQuery-Du-dGdgl.js";import"./groupBy-C5Sp597I.js";import"./_createAggregator-De0mxy3G.js";import"./DialogBase-D68R31mJ.js";import"./Close-6ce7Xvww.js";import"./HelpPopover-DYuSk176.js";import"./MarkdownPopover-Bj6RQTTJ.js";import"./LightTooltip-DwzQ7zV9.js";import"./MarkdownSynapse-lWMCRscm.js";import"./SkeletonButton-DXhUVC8E.js";import"./SkeletonInlineBlock-D-xx-S6B.js";import"./SkeletonTable-CUpkK98S.js";import"./SkeletonParagraph-c7JB1JZa.js";import"./EntityLink-Dv7-Txap.js";import"./useEntity-Cz5Bw4rt.js";import"./pickBy-Bl67QIhz.js";import"./isString-C4Ei_WmE.js";import"./useSuspenseQuery-CSCSqsGh.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BiUzTEC2.js";import"./useGetEntityHeaders-BV3dGKRO.js";import"./EntityIcon-Slwo7vvz.js";import"./ErrorChip-9stTafPp.js";import"./Chip-BUhAw0AO.js";import"./UserOrTeamBadge-BwenCvE9.js";import"./UserBadge-C_ROUIr4.js";import"./useUserBundle-C7u0mSik.js";import"./MenuItem-K-et9hkH.js";import"./Card-C2XPVAe2.js";import"./TeamBadge-DAAmYP86.js";import"./useRealmPrincipals-Bn3BDh6L.js";import"./UnmanagedACTAccessRequirementItem-BtV1Vv6n.js";import"./RequirementItem-Cj3Xh3Xz.js";import"./LockTwoTone-BZluTo61.js";import"./UserSearchBoxV2-DUWdbHAg.js";import"./useDebouncedEffect-COz35I2-.js";import"./use-deep-compare-effect.esm-BdyvMGg8.js";import"./uniq-Brkggy5I.js";import"./without-BPZr3Efm.js";import"./Select-aab027f3.esm-FIEEAPzE.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CGho0c5X.js";import"./SelfSignAccessRequirementItem-BjdZR_QY.js";import"./DataAccessRequestAccessorsFilesForm-3tjaOyRy.js";import"./enums-CePEsuMd.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-MaenIFDH.js";import"./RadioGroup-DmrKLDrT.js";import"./Radio-CezlPheF.js";import"./SwitchBase-D4AAeaOV.js";import"./FormGroup-Dd3VPbQo.js";import"./FormControlLabel-BaV3Om6I.js";import"./UploadDocumentField-4UY2pJVu.js";import"./FileUpload-w2_5dj-W.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B1WwnkZp.js";import"./GridLegacy-DS0aqMbC.js";import"./ResearchProjectForm-D3OeLgnT.js";import"./TextFieldWithWordLimit-Dvvb3gRp.js";import"./AuthenticatedRequirement-BlD7RDDh.js";import"./CertificationRequirement-DJOrHG54.js";import"./TwoFactorAuthEnabledRequirement-Cza4J0KX.js";import"./ValidationRequirement-CUyQe7Kg.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B2KzXCJQ.js";import"./RejectDataAccessRequestModal-CYoJF4OK.js";import"./CannedRejectionDialog-ClcUEInb.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BVlCcFDa.js";import"./Checkbox-CHiOWLEM.js";import"./Grid-4r4V-CeP.js";import"./upperFirst-Cj_MQfDV.js";import"./_stringToArray-BNWvrDVO.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
