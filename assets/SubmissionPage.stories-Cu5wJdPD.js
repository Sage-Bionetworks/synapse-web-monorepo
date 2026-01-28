import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-C9XoSndX.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-D41i1twC.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DbLkloxl.js";import"./useAccessRequirements-B2chJyzz.js";import"./index-CkRaXIId.js";import"./_baseOrderBy-CoYfpbnm.js";import"./_baseIteratee-3cGLS7pB.js";import"./_baseMap-EIGS4Zuu.js";import"./_baseEach-DBoYfXEk.js";import"./useQueries-BPbcnnWt.js";import"./useInfiniteQuery-Jo0FHawD.js";import"./groupBy-9u-nfPqd.js";import"./_createAggregator-W9IoBlim.js";import"./DialogBase-Cj-WAIZM.js";import"./Close-DQGHtad4.js";import"./HelpPopover-IrQkWv7k.js";import"./MarkdownPopover-B2ZwGiYT.js";import"./LightTooltip-BoJkh92j.js";import"./MarkdownSynapse-BVsgkF4B.js";import"./SkeletonButton-CuEV4gB3.js";import"./SkeletonInlineBlock-By8cLyCE.js";import"./SkeletonTable-Dor9v2L-.js";import"./SkeletonParagraph-CP_Py8Yj.js";import"./EntityLink-wu0YUanC.js";import"./useEntity-CJTXN1lX.js";import"./pickBy-DVlhEcQI.js";import"./isString-CcEUl8_F.js";import"./useSuspenseQuery-OCydU3mN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DG7pZlew.js";import"./useGetEntityHeaders-CY4VV5mA.js";import"./EntityIcon-DfNaAEVk.js";import"./ErrorChip-C4UkuIqq.js";import"./Chip-DUl13jbe.js";import"./UserOrTeamBadge-b5QaqKT3.js";import"./UserBadge-BjmUf9sF.js";import"./useUserBundle-DccLYS0o.js";import"./MenuItem-BtlH2e7k.js";import"./Card-D0mEAM9A.js";import"./TeamBadge-DdNYydHg.js";import"./UnmanagedACTAccessRequirementItem-pwwOeRp3.js";import"./RequirementItem-kaKGaBsJ.js";import"./LockTwoTone-YPxgsxce.js";import"./UserSearchBoxV2-B9jRG4S9.js";import"./useDebouncedEffect-BXrTQlHg.js";import"./use-deep-compare-effect.esm-DidBFxLr.js";import"./uniq-D45FdU2B.js";import"./without-BDqwYttp.js";import"./Select-aab027f3.esm-BwjYVd2L.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-D2z9EkZw.js";import"./SelfSignAccessRequirementItem-DUsCx-LI.js";import"./DataAccessRequestAccessorsFilesForm-ptWU9YzE.js";import"./enums-2yF0aGM-.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BVLvN2HU.js";import"./RadioGroup-u6523OPu.js";import"./Radio-Csx1D2kB.js";import"./SwitchBase-C3mSrvvZ.js";import"./FormGroup-CqxTMmdq.js";import"./FormControlLabel-w7ae_cxd.js";import"./UploadDocumentField-N0VriYgh.js";import"./FileUpload-D_NC2_eB.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BkdC77kb.js";import"./GridLegacy-C49hToGl.js";import"./ResearchProjectForm-Dm6UpQ4q.js";import"./TextFieldWithWordLimit-BIOji7Rj.js";import"./AuthenticatedRequirement-KPYFXwO9.js";import"./CertificationRequirement-dbROScjd.js";import"./TwoFactorAuthEnabledRequirement-Dfm5-Vuq.js";import"./ValidationRequirement-DqZHheUk.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DuoxL6mM.js";import"./RejectDataAccessRequestModal-DlFXzWn9.js";import"./CannedRejectionDialog-CVPmNWkx.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Br1NI2DF.js";import"./Checkbox-CnF1x21G.js";import"./Grid-BwPq8zDR.js";import"./upperFirst-STbLqbfM.js";import"./_stringToArray-pQtIBZMS.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
