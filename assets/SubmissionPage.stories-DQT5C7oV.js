import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-BHpb1ner.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CKu8aI9x.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BrZs5rMA.js";import"./useAccessRequirements-CLnA27mO.js";import"./index-6DuJwvLX.js";import"./_baseOrderBy-B5o4_3PH.js";import"./_baseIteratee-DkA3wBze.js";import"./_baseMap-BrueBaHk.js";import"./_baseEach-B-GHBlQE.js";import"./useInfiniteQuery-zxcnvMhO.js";import"./groupBy-Ctq7EJYQ.js";import"./_createAggregator-C6PP0tjI.js";import"./DialogBase-BbLmDA72.js";import"./Close-a0iRQpbL.js";import"./HelpPopover-CnWfGqNH.js";import"./MarkdownPopover-C_qk4xql.js";import"./LightTooltip-BOjaJFFL.js";import"./MarkdownSynapse-DDUpKj2I.js";import"./SkeletonButton-L8FvKIZ9.js";import"./SkeletonInlineBlock-CZB6gyiy.js";import"./SkeletonTable-C5MYC27c.js";import"./SkeletonParagraph-DtQNsEbz.js";import"./EntityLink-BOJISux5.js";import"./useEntity-DZd2XXl3.js";import"./pickBy-DampMGkr.js";import"./isString-DIvAB8YF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-td2Biw1M.js";import"./useGetEntityHeaders-CSwkGK5_.js";import"./EntityIcon-CuRWPl-M.js";import"./ErrorChip-BMsQIiXs.js";import"./Chip-BwbGtSpr.js";import"./UserOrTeamBadge-Bk_BT7zS.js";import"./UserBadge-Q7hpWjW2.js";import"./useUserBundle-DSde-19S.js";import"./MenuItem-tefU5X3f.js";import"./Card-BMPVT45X.js";import"./TeamBadge-Bb15Ox2s.js";import"./UnmanagedACTAccessRequirementItem-CmZfHNJ2.js";import"./RequirementItem-B_3gYmyv.js";import"./LockTwoTone-b8MZuMgG.js";import"./UserSearchBoxV2-CokJAXZx.js";import"./useDebouncedEffect-rzJVbBME.js";import"./use-deep-compare-effect.esm-C_pN1kev.js";import"./uniq-CxS0q-i_.js";import"./without-Bx59phJ8.js";import"./Select-aab027f3.esm-DzUaS9HQ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CYyEdzU5.js";import"./SelfSignAccessRequirementItem-DhmWTqLb.js";import"./DataAccessRequestAccessorsFilesForm-CFO0FDPd.js";import"./enums-CiLvd8OJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BY_KF3pJ.js";import"./RadioGroup-X_4-sGdy.js";import"./Radio-DzpJv-Uw.js";import"./SwitchBase-D-w4aRLo.js";import"./FormGroup-Cj8qCBQK.js";import"./FormControlLabel-tODm-4uQ.js";import"./UploadDocumentField-DW01tpXW.js";import"./FileUpload-DDWTp0AS.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BpHHYDE0.js";import"./GridLegacy-BG0WA2ha.js";import"./ResearchProjectForm-ByimTGM-.js";import"./TextFieldWithWordLimit-DhbjYT7i.js";import"./AuthenticatedRequirement-DTMZyBo7.js";import"./CertificationRequirement-CBQLkcVk.js";import"./TwoFactorAuthEnabledRequirement-DL6oEJMj.js";import"./ValidationRequirement-Bp9u5MfE.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BktlCwzc.js";import"./RejectDataAccessRequestModal-BjI-cnWo.js";import"./CannedRejectionDialog-NMbT13Ib.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BBn8sgdh.js";import"./Checkbox-CKMpfQYH.js";import"./Grid-DXXI8_-f.js";import"./upperFirst-CQoGSvug.js";import"./_stringToArray-CnKCBAyx.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
