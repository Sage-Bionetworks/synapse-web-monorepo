import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DUQkn8iF.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DP1SvWu0.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DjlkCSsf.js";import"./useAccessRequirements-CSsGXom7.js";import"./index-B-0M8h1t.js";import"./_baseOrderBy-9whb860v.js";import"./_baseIteratee-Cqjf8tEo.js";import"./_baseMap-xCllNzhN.js";import"./_baseEach-yRpYmG1y.js";import"./useInfiniteQuery-CSxua8m4.js";import"./groupBy-Dfx7mIYC.js";import"./_createAggregator-CYIf0Ydm.js";import"./DialogBase-Bjwp1F6F.js";import"./Close-CoWf9EwA.js";import"./HelpPopover-O-SP5MD7.js";import"./MarkdownPopover-BqXoJ5YF.js";import"./LightTooltip-D6czb-Qe.js";import"./MarkdownSynapse-Dmjjzt7C.js";import"./SkeletonButton-COaCvHBG.js";import"./SkeletonInlineBlock-S0DMpc3c.js";import"./SkeletonTable-Dx_jF5OF.js";import"./SkeletonParagraph-BzReNLH2.js";import"./EntityLink-CC8_lXhr.js";import"./useEntity-D9gWIZh7.js";import"./pickBy-B9rR59or.js";import"./isString-BOS38vV6.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-YPkIJS9i.js";import"./useGetEntityHeaders-D1JHSn4T.js";import"./EntityIcon-C8t0gzzK.js";import"./ErrorChip-C0hn4o6u.js";import"./Chip-DTXJglpB.js";import"./UserOrTeamBadge-Dufn934O.js";import"./useUserGroupHeader-DjnwW-1A.js";import"./TeamBadge-CEv_m0Gc.js";import"./UserBadge-BLdSt8lg.js";import"./useUserBundle-2e6WFDdI.js";import"./MenuItem-BPgUr9lg.js";import"./Card-CxsQey3A.js";import"./UnmanagedACTAccessRequirementItem-CSzqnHp_.js";import"./RequirementItem-CQ3n2gtE.js";import"./CheckTwoTone-D8gN-PRP.js";import"./ManagedACTAccessRequirementItemView-Cq38wVzl.js";import"./SelfSignAccessRequirementItem-Csri-oO1.js";import"./DataAccessRequestAccessorsFilesForm-BcV8oikV.js";import"./enums-DbouxGEo.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Cr4YV9i4.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-0kBPNahm.js";import"./UserSearchBox-CNBvSKhj.js";import"./useDebouncedEffect-B4Mi4eVy.js";import"./Autocomplete-DLb05X2b.js";import"./usePreviousProps-Dv-jr2T7.js";import"./RadioGroup-Dxu2ThVx.js";import"./Radio-B5nBcyaG.js";import"./SwitchBase-DmNt2wvQ.js";import"./FormGroup-HdN5_xk5.js";import"./FormControlLabel-ULAaK-Wz.js";import"./UploadDocumentField-DPmPSdPV.js";import"./FileUpload-DWnB0-wn.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Covm47eN.js";import"./GridLegacy-Cg0009Ru.js";import"./ResearchProjectForm-BB7Uhlif.js";import"./TextFieldWithWordLimit-BzyQfcdY.js";import"./AuthenticatedRequirement-BVs6fIcG.js";import"./CertificationRequirement-CPszQIAx.js";import"./TwoFactorAuthEnabledRequirement-CYbPF53k.js";import"./ValidationRequirement-B6b7L0gL.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CTgYB1UF.js";import"./RejectDataAccessRequestModal-70hPUnzJ.js";import"./CannedRejectionDialog-lh6cTSEC.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-56MHZonu.js";import"./Checkbox-C83dxoX4.js";import"./Grid-BtW5NgRp.js";import"./upperFirst-BZZVjSGv.js";import"./_stringToArray-CVFqhsS7.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
