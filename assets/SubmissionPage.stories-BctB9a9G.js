import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-05B79XZ4.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B9dI69On.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CV65PdSr.js";import"./useAccessRequirements-D8KrmOhE.js";import"./index-Daq82rHX.js";import"./_baseOrderBy-Go6U-7AU.js";import"./_baseIteratee-DXgMmV7G.js";import"./_baseMap-Y6mqOJtS.js";import"./_baseEach-DDJYCD3q.js";import"./useQueries-DXkCjI1X.js";import"./useInfiniteQuery-BL4rT7lo.js";import"./groupBy-zO3xe8JE.js";import"./_createAggregator-C5Prnb_K.js";import"./DialogBase-DuQ9TKuQ.js";import"./Close-DqDldpZI.js";import"./HelpPopover-CaC791WE.js";import"./MarkdownPopover-DBcqFb8R.js";import"./LightTooltip-DHbNXpmV.js";import"./MarkdownSynapse-9V8zeGJ5.js";import"./SkeletonButton-DSpQmtG3.js";import"./SkeletonInlineBlock-DysL0dN-.js";import"./SkeletonTable-CUmGP5q5.js";import"./SkeletonParagraph-CCYsd3b9.js";import"./EntityLink-BBX8SjB1.js";import"./useEntity-BBgR9ZOs.js";import"./pickBy-B2D8woLZ.js";import"./isString-CO1VSkJm.js";import"./useSuspenseQuery-DXOpFrh-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cw4P0fYX.js";import"./useGetEntityHeaders-De81WEe9.js";import"./EntityIcon-B3iK79ZU.js";import"./ErrorChip-DQODkJAm.js";import"./Chip-MTPGu8Dp.js";import"./UserOrTeamBadge-COfT8vtk.js";import"./UserBadge-CDJVlHlx.js";import"./useUserBundle-xFwWr3d6.js";import"./MenuItem-CVPsdyof.js";import"./Card-ejUAG1yu.js";import"./TeamBadge-CO8-8NXt.js";import"./useRealmPrincipals-CjyVyGCP.js";import"./UnmanagedACTAccessRequirementItem-LtZXDUz0.js";import"./RequirementItem-CM07ZYK9.js";import"./LockTwoTone-C1pkySjB.js";import"./UserSearchBoxV2-DdHl4Hn4.js";import"./useDebouncedEffect-dJx6gLeH.js";import"./use-deep-compare-effect.esm-1sKVwYDA.js";import"./uniq-DLebYPQT.js";import"./without-CTlc1-G3.js";import"./Select-aab027f3.esm-CFbRzQx1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Bc6f8raH.js";import"./SelfSignAccessRequirementItem-HRVbWfje.js";import"./DataAccessRequestAccessorsFilesForm-DXOhZHdH.js";import"./enums-CXAymB4G.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B-HrFx-Z.js";import"./RadioGroup-Ck6-wrTD.js";import"./Radio-DjM_illo.js";import"./SwitchBase-a3tunUWH.js";import"./FormGroup-Ce6ZtnjO.js";import"./FormControlLabel-Bw9mk1Z6.js";import"./UploadDocumentField-BANmOo3a.js";import"./FileUpload-BO0qLffc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DkLZHhtn.js";import"./GridLegacy-CCIhejqE.js";import"./ResearchProjectForm-0xaTtxD5.js";import"./TextFieldWithWordLimit-B9-hheL2.js";import"./AuthenticatedRequirement-Cfh95erH.js";import"./CertificationRequirement-BI_Ff60y.js";import"./TwoFactorAuthEnabledRequirement-D7BNpS3B.js";import"./ValidationRequirement-Dag3AMI1.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BA7aJhKz.js";import"./RejectDataAccessRequestModal-DJIiv6JV.js";import"./CannedRejectionDialog-DCffex8I.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Bn0uFIx_.js";import"./Checkbox-DMe8JDwK.js";import"./Grid-DxtXvbXE.js";import"./upperFirst-BzByEHxm.js";import"./_stringToArray-CuNxzADo.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
