import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-BPIYH1oT.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Bywy3xdq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CPGbqHSX.js";import"./useAccessRequirements-BtM5n_Nn.js";import"./index-CSa6jvLb.js";import"./_baseOrderBy-D0f27N3W.js";import"./_baseIteratee-Bb0kra6V.js";import"./_baseMap-Bus0-AtT.js";import"./_baseEach-H9iq9W3A.js";import"./useInfiniteQuery-DoSJlmbq.js";import"./groupBy-DmvZahyg.js";import"./_createAggregator-CVhJJFYH.js";import"./DialogBase-YPU6xwB9.js";import"./Close-DUKe32AS.js";import"./HelpPopover-csZgSs5v.js";import"./MarkdownPopover-C_LkEX6f.js";import"./LightTooltip-C4JhsBFK.js";import"./MarkdownSynapse-B95PEuB_.js";import"./SkeletonButton-BzOCV9D1.js";import"./SkeletonInlineBlock-BqdJTX4s.js";import"./SkeletonTable-DGggFpSD.js";import"./SkeletonParagraph-CVXQh454.js";import"./EntityLink-C-G-Y72S.js";import"./useEntity-2zjLBXPR.js";import"./pickBy-DCBiBms_.js";import"./isString-CFu8K1iZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLQmS3vZ.js";import"./useGetEntityHeaders-B6wn6rH9.js";import"./EntityIcon-BRCHNatz.js";import"./ErrorChip-SfAp01sT.js";import"./Chip-DDX768Id.js";import"./UserOrTeamBadge-BmhKKfsN.js";import"./UserBadge-BgwBE5L1.js";import"./useUserBundle-D1sKaGLt.js";import"./MenuItem-B9zWTbwn.js";import"./Card-BMJjxRbj.js";import"./TeamBadge-CbUzvPLn.js";import"./UnmanagedACTAccessRequirementItem-D3rie0W0.js";import"./RequirementItem-p11hXvdr.js";import"./LockTwoTone-D5d7zmts.js";import"./UserSearchBoxV2-D9ejOXon.js";import"./useDebouncedEffect-CvKPrdPa.js";import"./use-deep-compare-effect.esm-_H7Xcj2b.js";import"./uniq-DSqAZGaz.js";import"./without-B1yiPYIb.js";import"./Select-aab027f3.esm-BOKWmLgl.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BWIXFs9Z.js";import"./SelfSignAccessRequirementItem-DkqsWKm9.js";import"./DataAccessRequestAccessorsFilesForm-Bp1CC8Zb.js";import"./enums-B6mZGIQK.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Dd83-_fR.js";import"./RadioGroup-BKOKRhxf.js";import"./Radio-CPib6hdD.js";import"./SwitchBase-DK0vqQ_k.js";import"./FormGroup-nKYofiF1.js";import"./FormControlLabel-DUzfwAdY.js";import"./UploadDocumentField-CCxFeLEW.js";import"./FileUpload-BGIJ516H.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BGj6kVBr.js";import"./GridLegacy-ytCgwPC9.js";import"./ResearchProjectForm-DMLPTQ0M.js";import"./TextFieldWithWordLimit-DwBIXM_E.js";import"./AuthenticatedRequirement-CEvTCD61.js";import"./CertificationRequirement-BrObQ5VH.js";import"./TwoFactorAuthEnabledRequirement-ZThSsnyA.js";import"./ValidationRequirement-O5XgRDvi.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Bl52BjQY.js";import"./RejectDataAccessRequestModal-DILN1Ro4.js";import"./CannedRejectionDialog-hvySdIkK.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BEwxNdsX.js";import"./Checkbox-CdTW5ve-.js";import"./Grid-5ejuqc-K.js";import"./upperFirst-BpeaoFmw.js";import"./_stringToArray-CLa5JrwJ.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
