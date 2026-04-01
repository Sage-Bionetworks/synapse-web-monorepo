import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-ClE2Hy4B.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CStY_kVU.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BcRTDXdY.js";import"./useAccessRequirements-BNiAadvi.js";import"./index-C7fdTBbx.js";import"./_baseOrderBy-BoH1BSDD.js";import"./_baseIteratee-CgCh-4yA.js";import"./_baseMap-B8ZbbJGp.js";import"./_baseEach-DuBrkErz.js";import"./useInfiniteQuery-JunBPFxO.js";import"./groupBy-DeviL7FV.js";import"./_createAggregator-B7QG7kvJ.js";import"./DialogBase-DsoF6kFj.js";import"./Close-B-5zc9Mn.js";import"./HelpPopover-CS-MG7ku.js";import"./MarkdownPopover-BV7I0bXQ.js";import"./LightTooltip-CUHr0mUG.js";import"./MarkdownSynapse-b_n8loNV.js";import"./SkeletonButton-DSmPjAvU.js";import"./SkeletonInlineBlock-DYja8lR7.js";import"./SkeletonTable-D7N707Oc.js";import"./SkeletonParagraph-Br74pmuK.js";import"./EntityLink-PLL1ySmO.js";import"./useEntity-f1eXyneH.js";import"./pickBy-B0wWvjyi.js";import"./isString-CF09GXlR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DpKOZjgZ.js";import"./useGetEntityHeaders-Cx259IAn.js";import"./EntityIcon-CLYHSrpE.js";import"./ErrorChip-CMHbfUGx.js";import"./Chip-BpTWRkwH.js";import"./UserOrTeamBadge-CNv7NjJC.js";import"./UserBadge-CYUXPM6m.js";import"./useUserBundle-0g-k7q7C.js";import"./MenuItem-BLx0eK9Y.js";import"./Card-C6ZtLTcC.js";import"./TeamBadge-Dx4q3YAA.js";import"./UnmanagedACTAccessRequirementItem-B8wfC2Lb.js";import"./RequirementItem-Bem-9EUB.js";import"./LockTwoTone-9rvpA3--.js";import"./UserSearchBoxV2-CqyZcIiX.js";import"./useDebouncedEffect-D_mBy6yB.js";import"./use-deep-compare-effect.esm-DW0gLXFO.js";import"./uniq-BNyN2DCs.js";import"./without-BodogP-M.js";import"./Select-aab027f3.esm-DXEOxMK1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-iGLiYZ--.js";import"./SelfSignAccessRequirementItem-fZ1Rwy4z.js";import"./DataAccessRequestAccessorsFilesForm-ad5nvzPd.js";import"./enums-KViwHNsm.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-gY4Zpi-H.js";import"./RadioGroup-DGPR4OqO.js";import"./Radio-B_DIXeGK.js";import"./SwitchBase-8Qf5k-j0.js";import"./FormGroup-_O_UrnjV.js";import"./FormControlLabel-SUMnMu_R.js";import"./UploadDocumentField-Pw3JqjUG.js";import"./FileUpload-CV_PgaFd.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DgqN6Moq.js";import"./GridLegacy-mf-miyP7.js";import"./ResearchProjectForm-BpzmlY1o.js";import"./TextFieldWithWordLimit-9sVG-3vN.js";import"./AuthenticatedRequirement-Bxb2fwBr.js";import"./CertificationRequirement-CiK1m_J-.js";import"./TwoFactorAuthEnabledRequirement-BgG4xaRu.js";import"./ValidationRequirement-L0NQxk3O.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-0Ttb5_aM.js";import"./RejectDataAccessRequestModal-DOhOgsq0.js";import"./CannedRejectionDialog-CXXtBfYv.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BMQMl3nb.js";import"./Checkbox-MnArzcXf.js";import"./Grid-BqzM4-vy.js";import"./upperFirst-CDk9rwHH.js";import"./_stringToArray-uDEDg0Pr.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
