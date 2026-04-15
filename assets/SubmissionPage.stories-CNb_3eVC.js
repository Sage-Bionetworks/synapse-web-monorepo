import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-ufwdWoqd.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BVAv8aeQ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-SPXmkgpZ.js";import"./useAccessRequirements-BIB6y9Bx.js";import"./index-BjTsD0iq.js";import"./_baseOrderBy-BwxbpWc5.js";import"./_baseIteratee-DWHKXE_x.js";import"./_baseMap-Ak-9sm64.js";import"./_baseEach-DQLBE3q4.js";import"./useInfiniteQuery-DfHsBcwS.js";import"./groupBy-CCN0igTl.js";import"./_createAggregator-Dw28gzvF.js";import"./DialogBase-Dsbgm9mp.js";import"./Close-Dv4tXZl4.js";import"./HelpPopover-sYQ3nyHD.js";import"./MarkdownPopover-FbcchaUo.js";import"./LightTooltip-DY5-pD6A.js";import"./MarkdownSynapse-CMjYBWsu.js";import"./SkeletonButton-LGNxHtYx.js";import"./SkeletonInlineBlock-DJWeJEjH.js";import"./SkeletonTable-Dud8tXGA.js";import"./SkeletonParagraph-Br9-4-N8.js";import"./EntityLink-CLA1yjs_.js";import"./useEntity-B0wBChaU.js";import"./pickBy-nmQfu-mE.js";import"./isString-Dj7favZ-.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DcG7NNzi.js";import"./useGetEntityHeaders-DfvisO9V.js";import"./EntityIcon-B7WvUXg2.js";import"./ErrorChip-B3H-47Um.js";import"./Chip-CSBIn4pT.js";import"./UserOrTeamBadge-DEwhJcoT.js";import"./useUserGroupHeader-BOzrLmfs.js";import"./TeamBadge-B3cY-xDX.js";import"./UserBadge-sHUnGDAj.js";import"./useUserBundle-D634yYlN.js";import"./MenuItem-W_wmPF7v.js";import"./Card-CFTn_BNL.js";import"./UnmanagedACTAccessRequirementItem-BYzIdhvi.js";import"./RequirementItem-CsFxAMvm.js";import"./LockTwoTone-C5IGVRrN.js";import"./ManagedACTAccessRequirementItemView-CSauo3rH.js";import"./SelfSignAccessRequirementItem-D2bxSfL0.js";import"./DataAccessRequestAccessorsFilesForm-DmFQDRdR.js";import"./enums--iuKduOa.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DuGe9Q-m.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-fHtY1Mm6.js";import"./UserSearchBox-BSLMHNc4.js";import"./useDebouncedEffect-DuiH_3zr.js";import"./Autocomplete-B2Qa4Boo.js";import"./usePreviousProps-Cv8lAokz.js";import"./RadioGroup-omsUIQxs.js";import"./Radio-Cgd4u86L.js";import"./SwitchBase-7Y4vQbXh.js";import"./FormGroup-DRqgu4vV.js";import"./FormControlLabel-evRqPcVo.js";import"./UploadDocumentField-_spHKy3f.js";import"./FileUpload-sUwiU2s_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DnG9kM6g.js";import"./GridLegacy-LN-XZihk.js";import"./ResearchProjectForm-DyuLLvMv.js";import"./TextFieldWithWordLimit-DLMvzyU6.js";import"./AuthenticatedRequirement-BYJ6gf2m.js";import"./CertificationRequirement-DEsAhM_t.js";import"./TwoFactorAuthEnabledRequirement-B0FPYwpl.js";import"./ValidationRequirement-q0ePm2Sa.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D2IzXLCd.js";import"./RejectDataAccessRequestModal-D4SnQNx2.js";import"./CannedRejectionDialog-CWpwTWb7.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-B8w3enam.js";import"./Checkbox-BW97U62k.js";import"./Grid-Dast737N.js";import"./upperFirst-37ndr7ON.js";import"./_stringToArray-Bn6i7VoJ.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
