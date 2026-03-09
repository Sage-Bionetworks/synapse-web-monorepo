import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-B-ViuSv9.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Dl2eZ45T.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DfdqfOXJ.js";import"./useAccessRequirements-DtI3-BAf.js";import"./index-N4ikXHAo.js";import"./_baseOrderBy-DrVzQcaL.js";import"./_baseIteratee-BksGswVt.js";import"./_baseMap-CAKhQWbA.js";import"./_baseEach-BEUDsluR.js";import"./useInfiniteQuery-vlKUWQr_.js";import"./groupBy-Cvdq3IXt.js";import"./_createAggregator-B-PJmUQN.js";import"./DialogBase-DVpW1cR3.js";import"./Close-CO4GXUb5.js";import"./HelpPopover-DWyQ-DmO.js";import"./MarkdownPopover-DHhlk6vi.js";import"./LightTooltip-Ddo6Mib6.js";import"./MarkdownSynapse-B_4xbq9B.js";import"./SkeletonButton-CG2PHgPV.js";import"./SkeletonInlineBlock-ZpxNiyl4.js";import"./SkeletonTable-DOWE-xYa.js";import"./SkeletonParagraph-XlJifnft.js";import"./EntityLink-Dpgbsgnu.js";import"./useEntity-DsGEj5CP.js";import"./pickBy-DbnEGlxu.js";import"./isString-C3U7md_q.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DBJb4iNa.js";import"./useGetEntityHeaders-v36z9svG.js";import"./EntityIcon-MPHgMq3A.js";import"./ErrorChip-CoZJvQZw.js";import"./Chip-CMkns0F1.js";import"./UserOrTeamBadge-DgJJkxkm.js";import"./UserBadge-QrYtiTRr.js";import"./useUserBundle-DKfqKYyl.js";import"./MenuItem-C3GpEkFh.js";import"./Card-BXvSH8NN.js";import"./TeamBadge-D3BmsXUG.js";import"./UnmanagedACTAccessRequirementItem-NjfUTBjj.js";import"./RequirementItem-BCx53v-Z.js";import"./LockTwoTone-CezS7W5T.js";import"./UserSearchBoxV2-DVaHGqs2.js";import"./useDebouncedEffect-B2Nq-Wv9.js";import"./use-deep-compare-effect.esm-DhtK1bWP.js";import"./uniq-CJHssgmn.js";import"./without-vvKTJOZC.js";import"./Select-aab027f3.esm-kmBFdiy8.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C0dmCmJp.js";import"./SelfSignAccessRequirementItem-JnwlTPvF.js";import"./DataAccessRequestAccessorsFilesForm-C0_NUFzf.js";import"./enums-Z3fIkeML.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C4_vQLqX.js";import"./RadioGroup-CAQ0CvDT.js";import"./Radio-DL41VMP-.js";import"./SwitchBase-___3iFys.js";import"./FormGroup-ql1c9NXN.js";import"./FormControlLabel-nmG9uE1s.js";import"./UploadDocumentField-CIatdXOJ.js";import"./FileUpload-BTxlL4O-.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CEki1ItO.js";import"./GridLegacy-Xv21uuQn.js";import"./ResearchProjectForm-BtHsggro.js";import"./TextFieldWithWordLimit-CID-8896.js";import"./AuthenticatedRequirement-DcyoU--8.js";import"./CertificationRequirement-DwMiympB.js";import"./TwoFactorAuthEnabledRequirement-CR6oiYDq.js";import"./ValidationRequirement-DHGbVG9T.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B63hxiME.js";import"./RejectDataAccessRequestModal-BSUIlWm4.js";import"./CannedRejectionDialog-D18wK3zZ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BroakZuT.js";import"./Checkbox-B_MkTQaX.js";import"./Grid-BRugVb2B.js";import"./upperFirst-BW_AtSk3.js";import"./_stringToArray-vVWYVuWp.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
