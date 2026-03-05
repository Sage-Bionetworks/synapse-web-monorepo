import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-Bppf-2Xb.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-bq6Lvvrm.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-9PV4_-oh.js";import"./useAccessRequirements-Dzw2qzMw.js";import"./index-Cee3WZrY.js";import"./_baseOrderBy-drfuHX7W.js";import"./_baseIteratee-1VZeL6zj.js";import"./_baseMap-Cd31eUCi.js";import"./_baseEach-1yxKPV3_.js";import"./useInfiniteQuery-B_o5exK7.js";import"./groupBy-BfKgKALF.js";import"./_createAggregator-BHfkgqJr.js";import"./DialogBase-DiQjK8QP.js";import"./Close-C0gBeEqv.js";import"./HelpPopover-CFG8wYnx.js";import"./MarkdownPopover-DEUp7YgC.js";import"./LightTooltip-CGlFhZF-.js";import"./MarkdownSynapse-CXgwuaB5.js";import"./SkeletonButton-BFle63Mn.js";import"./SkeletonInlineBlock-DZgUMGJu.js";import"./SkeletonTable-BMvof9lJ.js";import"./SkeletonParagraph-Cgi3RpEx.js";import"./EntityLink-C8Oz1V9M.js";import"./useEntity-CPxUyPJP.js";import"./pickBy-B-6VfkUC.js";import"./isString-VAhxbzMi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cgh82wex.js";import"./useGetEntityHeaders-u5h7Tawg.js";import"./EntityIcon-C9xs6KQ1.js";import"./ErrorChip-CRJdg5zQ.js";import"./Chip-B-8xLvKL.js";import"./UserOrTeamBadge-hhw3uThl.js";import"./UserBadge-2pt_JFzf.js";import"./useUserBundle-Bz68MuAV.js";import"./MenuItem-BorCkjPg.js";import"./Card-SKsRnOG3.js";import"./TeamBadge-0kr4JVtT.js";import"./UnmanagedACTAccessRequirementItem-CRzXvbkX.js";import"./RequirementItem-wvn3RYNo.js";import"./LockTwoTone-LQcKO1fA.js";import"./UserSearchBoxV2-BFfzMLmA.js";import"./useDebouncedEffect-d5GNCBwX.js";import"./use-deep-compare-effect.esm-BA26f4Nj.js";import"./uniq-B_jSDjY0.js";import"./without-QRfP1Leo.js";import"./Select-aab027f3.esm-N5KG0lJq.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DFhYfgte.js";import"./SelfSignAccessRequirementItem-Bh0e8pNT.js";import"./DataAccessRequestAccessorsFilesForm-DOvqtoa0.js";import"./enums-BzXSnWoc.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-cgfc5lxA.js";import"./RadioGroup-BD75nQgO.js";import"./Radio-1ii9XX1D.js";import"./SwitchBase-Cos52nG1.js";import"./FormGroup-CvBdfYO5.js";import"./FormControlLabel-C6SYwhBq.js";import"./UploadDocumentField-Dg1u-Xh6.js";import"./FileUpload-BUlrYHON.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D-UMouGI.js";import"./GridLegacy-Be0uHKUP.js";import"./ResearchProjectForm-BnCD5_Sw.js";import"./TextFieldWithWordLimit-Dpu0rynQ.js";import"./AuthenticatedRequirement-DEW78F8s.js";import"./CertificationRequirement-DqJ2Oqhc.js";import"./TwoFactorAuthEnabledRequirement-aBPLCIXT.js";import"./ValidationRequirement-BZp1bwkj.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D9H7bNgD.js";import"./RejectDataAccessRequestModal-C4V4T02-.js";import"./CannedRejectionDialog-DGwWyOFq.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Gd10OZKA.js";import"./Checkbox-KFSiL-LF.js";import"./Grid-C5JIyy_C.js";import"./upperFirst-OPrkp8bh.js";import"./_stringToArray-O2CFhPhP.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
