import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-bA05VlDB.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BloG-6Kr.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cn1nQVJo.js";import"./useAccessRequirements-CBTd1PGL.js";import"./index-C4a7Rce_.js";import"./_baseOrderBy-CTWC63ny.js";import"./_baseIteratee-DKY1oxMw.js";import"./_baseMap-BItPc330.js";import"./_baseEach-Bswgqtar.js";import"./useQueries-CiWEfBA0.js";import"./useInfiniteQuery-DI02BS_t.js";import"./groupBy-B_fkWuBJ.js";import"./_createAggregator-BBB9TMhq.js";import"./DialogBase-vddOc5dA.js";import"./Close-BgXrYz09.js";import"./HelpPopover-BzTlr5XD.js";import"./MarkdownPopover-B1EOARnN.js";import"./LightTooltip-Blh-KN0r.js";import"./MarkdownSynapse-BUlv3hnh.js";import"./SkeletonButton-D2qH20IX.js";import"./SkeletonInlineBlock-D2v7KJSi.js";import"./SkeletonTable-C3k8u3nb.js";import"./SkeletonParagraph-DlcYTizK.js";import"./EntityLink-BJBTQuuM.js";import"./useEntity-Du7tQbIa.js";import"./pickBy-D1zq0sET.js";import"./isString-KkRYkgd4.js";import"./useSuspenseQuery-Zel5Xy26.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bc6HNNyS.js";import"./useGetEntityHeaders-BLNkLcHW.js";import"./EntityIcon-BTVhXoJO.js";import"./ErrorChip-CJzqrQy7.js";import"./Chip-vyXQw8tV.js";import"./UserOrTeamBadge-OMw-mqP4.js";import"./UserBadge-DmE9Q2UM.js";import"./useUserBundle-C5zElDJN.js";import"./MenuItem-DFGunzbN.js";import"./Card-D2Ee3gfr.js";import"./TeamBadge-6XB9D57O.js";import"./useRealmPrincipals-C6hD7tmP.js";import"./UnmanagedACTAccessRequirementItem-o0UKpuN6.js";import"./RequirementItem-C4m28e2s.js";import"./LockTwoTone-CLiHbW3x.js";import"./UserSearchBoxV2-B3-qsXAm.js";import"./useDebouncedEffect-ua879cHU.js";import"./use-deep-compare-effect.esm-COh4b0Y0.js";import"./uniq-O_fF4dYA.js";import"./without-C-Ku9zJn.js";import"./Select-aab027f3.esm-CJPqdN7Y.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DNlkB6-2.js";import"./SelfSignAccessRequirementItem-ByKluxvg.js";import"./DataAccessRequestAccessorsFilesForm-BQsLWJcv.js";import"./enums-zFAlrHX6.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BHvWMzjY.js";import"./RadioGroup-BGBsHj3Z.js";import"./Radio-Dno-KH9E.js";import"./SwitchBase-Vd-LEtt0.js";import"./FormGroup-r8gixf7g.js";import"./FormControlLabel-DX3N0jTL.js";import"./UploadDocumentField-CzTO1gbV.js";import"./FileUpload-DQb8ADTQ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-COR_lCTK.js";import"./GridLegacy-DdQGVQvV.js";import"./ResearchProjectForm-Dp3bVGKd.js";import"./TextFieldWithWordLimit-pGOJQ0nL.js";import"./AuthenticatedRequirement-D1rG77uW.js";import"./CertificationRequirement-DYYfTTN2.js";import"./TwoFactorAuthEnabledRequirement-7qJniIV2.js";import"./ValidationRequirement-zAeQnVrq.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Ct5VZ7bQ.js";import"./RejectDataAccessRequestModal-Dwbis7dC.js";import"./CannedRejectionDialog-D3nPDPSM.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-C0bbEsUc.js";import"./Checkbox-C0VleB4d.js";import"./Grid-B7LF-N5n.js";import"./upperFirst-CPOzP5xu.js";import"./_stringToArray-C2ly521v.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
