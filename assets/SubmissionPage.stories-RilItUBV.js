import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-TELIK5St.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DvbvuL8O.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C7w87WL5.js";import"./useAccessRequirements-DV-HAFjA.js";import"./index-DhCG1PUT.js";import"./_baseOrderBy-CMcDCKmR.js";import"./_baseIteratee-Bm_ygrTG.js";import"./_baseMap-BW9Pah7Q.js";import"./_baseEach-1R1uGBUK.js";import"./useInfiniteQuery-CsPobzOo.js";import"./groupBy-CysP0WnF.js";import"./_createAggregator-e-GYgwFr.js";import"./DialogBase-B_W-3fb4.js";import"./Close-1aRbQcSU.js";import"./HelpPopover-CHQIvLmq.js";import"./MarkdownPopover-ByQ3xb7d.js";import"./LightTooltip-B6lk_bQM.js";import"./MarkdownSynapse-DMWe3Ld4.js";import"./SkeletonButton-Ch0HQYiA.js";import"./SkeletonInlineBlock-DmvsIilu.js";import"./SkeletonTable-BK56JWcz.js";import"./SkeletonParagraph-CsdCh0c6.js";import"./EntityLink-CIPd0Wc0.js";import"./useEntity-uH0IPj5d.js";import"./pickBy-D8zlkIai.js";import"./isString-DOfKFuJ8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BX92XFzE.js";import"./useGetEntityHeaders-BbN-lQQC.js";import"./EntityIcon-DU1SG0uz.js";import"./ErrorChip-6BIO-Wyb.js";import"./Chip-ChN1vAl3.js";import"./UserOrTeamBadge-oG2mKjgS.js";import"./useUserGroupHeader-1WZ7S21v.js";import"./TeamBadge-DBsGqDpq.js";import"./UserBadge-BL2bxi6y.js";import"./useUserBundle-DCscJCIX.js";import"./MenuItem-CZMXI3mZ.js";import"./Card-CdQC2hYH.js";import"./UnmanagedACTAccessRequirementItem-B2jNRQtX.js";import"./RequirementItem-B2CDLbE-.js";import"./CheckTwoTone-rIBJQO5H.js";import"./ManagedACTAccessRequirementItemView-Bp70zuGt.js";import"./SelfSignAccessRequirementItem-0JXfj3Yj.js";import"./DataAccessRequestAccessorsFilesForm-BkipGnf0.js";import"./enums-vN__SG3s.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-5uD1tEnu.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DnA8012R.js";import"./UserSearchBox-BVcKtRCE.js";import"./useDebouncedEffect-CPWZ7rlr.js";import"./Autocomplete-DNrg8QTw.js";import"./usePreviousProps-Dq07bXWo.js";import"./RadioGroup-DcKVrU9M.js";import"./Radio-Ch940cOi.js";import"./SwitchBase-C4A-3PON.js";import"./FormGroup-tH04-FQb.js";import"./FormControlLabel-DkZ0xtIe.js";import"./UploadDocumentField-CayzlDmw.js";import"./FileUpload-Bo_vLaAl.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B6XaWwG9.js";import"./GridLegacy-DWN38_vn.js";import"./ResearchProjectForm-CpdEK2DF.js";import"./TextFieldWithWordLimit-Dsk5fg9G.js";import"./AuthenticatedRequirement-Cx18AhVx.js";import"./CertificationRequirement-BbaySqry.js";import"./TwoFactorAuthEnabledRequirement-D5m9xF4b.js";import"./ValidationRequirement-Br0yqA5c.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D2smnzRw.js";import"./RejectDataAccessRequestModal-sZqP392m.js";import"./CannedRejectionDialog-BfSarjyl.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BxrjJOlJ.js";import"./Checkbox-DmDIVSeI.js";import"./Grid--nzUhU6x.js";import"./upperFirst-C1_Jw2Cs.js";import"./_stringToArray-ClvVbfRI.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
