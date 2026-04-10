import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-90f2SQV6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DC5tT-Ra.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BVntYLLW.js";import"./useAccessRequirements-C8DG-3mq.js";import"./index-DBtU2uN0.js";import"./_baseOrderBy-B_kTw8AV.js";import"./_baseIteratee-DS7Uv7Qg.js";import"./_baseMap-BCtJ1V6g.js";import"./_baseEach-iJRgvUTF.js";import"./useInfiniteQuery-B6I0bq03.js";import"./groupBy-BEtSS8-l.js";import"./_createAggregator-SyA7j7fr.js";import"./DialogBase-BMvwer8M.js";import"./Close-BwldKowt.js";import"./HelpPopover-3OLq6Qvv.js";import"./MarkdownPopover-C7xEr92D.js";import"./LightTooltip-DEc6XzHa.js";import"./MarkdownSynapse-CYc-SfSz.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonTable-CUhBOjKD.js";import"./SkeletonParagraph-Bta19Z9s.js";import"./EntityLink-ClNGq7GT.js";import"./useEntity-DdAkX9nj.js";import"./pickBy-BoCYbEVx.js";import"./isString-mpfQo2G8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CXT05GtQ.js";import"./useGetEntityHeaders-DriWS_uf.js";import"./EntityIcon-s60Z3jzT.js";import"./ErrorChip-DsJ4CH2t.js";import"./Chip-DkWyanB2.js";import"./UserOrTeamBadge-C-e6rx3D.js";import"./useUserGroupHeader-3u-W-R_V.js";import"./TeamBadge-DvAvwUrn.js";import"./UserBadge-BhjoWwGQ.js";import"./useUserBundle-C1tRTjHW.js";import"./MenuItem-BuPaY9i0.js";import"./Card-BjkUBjOd.js";import"./UnmanagedACTAccessRequirementItem-b3-9gXsm.js";import"./RequirementItem-BpNXPcKo.js";import"./LockTwoTone-_uktnvXE.js";import"./ManagedACTAccessRequirementItemView-DfxqZw1I.js";import"./SelfSignAccessRequirementItem-DcuoLgjy.js";import"./DataAccessRequestAccessorsFilesForm-7m5iY0hi.js";import"./enums-DBdphs4q.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Dr5SjQm9.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Ci4qTGDg.js";import"./UserSearchBox-CKMIGSI-.js";import"./useDebouncedEffect-CFr_xHr7.js";import"./Autocomplete-D1cVZgEB.js";import"./usePreviousProps-BMS-JDpN.js";import"./RadioGroup-DtutK2iG.js";import"./Radio-D_kSUUOa.js";import"./SwitchBase-BM0I7EUL.js";import"./FormGroup-BmEhWMxq.js";import"./FormControlLabel-DglLXMgl.js";import"./UploadDocumentField-DRyxlWqG.js";import"./FileUpload-Ch1r-XlI.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CXTRTLt7.js";import"./GridLegacy-D3qaUHGq.js";import"./ResearchProjectForm-fun_VtZm.js";import"./TextFieldWithWordLimit-BSF3gA3b.js";import"./AuthenticatedRequirement-gPIrwP-P.js";import"./CertificationRequirement-BEnipQKt.js";import"./TwoFactorAuthEnabledRequirement-Yyf2SV03.js";import"./ValidationRequirement--kA7ebI9.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-gW3iOG0p.js";import"./RejectDataAccessRequestModal-2HxPwK9q.js";import"./CannedRejectionDialog-B-l2FMUf.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DhI1owhm.js";import"./Checkbox-CF10eWfP.js";import"./Grid-BHxxwVIG.js";import"./upperFirst-DvyVuKm7.js";import"./_stringToArray-B_dQVT6z.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
