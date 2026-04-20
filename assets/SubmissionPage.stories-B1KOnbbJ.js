import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BuKUHwYF.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-V7Ydq2lx.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D4uogkUx.js";import"./useAccessRequirements-TuE0mxTx.js";import"./index-BkSKqIFv.js";import"./_baseOrderBy-CDVPIvfu.js";import"./_baseIteratee-CXSP4y8a.js";import"./_baseMap-C0fo_1yR.js";import"./_baseEach-B9FQUCG9.js";import"./useInfiniteQuery-BrWu3fho.js";import"./groupBy-CE7Pxy6_.js";import"./_createAggregator-BrkWVJ6j.js";import"./DialogBase-C4vg5HBd.js";import"./Close-D3qIPQRQ.js";import"./HelpPopover-D_lIBi9b.js";import"./MarkdownPopover-NRLWKKDC.js";import"./LightTooltip-C8cY03H6.js";import"./MarkdownSynapse-CiDjaR4B.js";import"./SkeletonButton-DoOKAwEq.js";import"./SkeletonInlineBlock-Cs7usZ_r.js";import"./SkeletonTable-Ca_8DlU1.js";import"./SkeletonParagraph-CA2_vLea.js";import"./EntityLink-l2Zfm79d.js";import"./useEntity-CSgo2ceg.js";import"./pickBy-B8SdrGtN.js";import"./isString-BCGF8_pc.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bu-4xrzr.js";import"./useGetEntityHeaders-BqSAZcz6.js";import"./EntityIcon-DXm93XDZ.js";import"./ErrorChip-Bf-iuL-2.js";import"./Chip-D3Gu_L5i.js";import"./UserOrTeamBadge-DrCP2AS5.js";import"./UserBadge-DwsW3g_K.js";import"./useUserBundle-DkD9QSSJ.js";import"./MenuItem-DmEYYO79.js";import"./Card-B6TgluZN.js";import"./TeamBadge-CKTLM0zl.js";import"./UnmanagedACTAccessRequirementItem-BHpkI1hz.js";import"./RequirementItem-CUkFrsZi.js";import"./CheckTwoTone-5TtaP6UX.js";import"./ManagedACTAccessRequirementItemView-Dv5tEHVQ.js";import"./SelfSignAccessRequirementItem-CVNdl2nr.js";import"./DataAccessRequestAccessorsFilesForm-CfBlJ4W1.js";import"./enums-Cde8Rohj.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BQOOE8HE.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-ZNOntj8V.js";import"./UserSearchBox-DsRonRWG.js";import"./useDebouncedEffect-BrSgUp4A.js";import"./Autocomplete-DlWKEogE.js";import"./usePreviousProps-DfueR3FT.js";import"./RadioGroup-ChAui0H3.js";import"./Radio-wRbUmLyc.js";import"./SwitchBase-Cq5wm8XC.js";import"./FormGroup-ScuvxNkT.js";import"./FormControlLabel-BQKBoEMA.js";import"./UploadDocumentField-DXe2tKKf.js";import"./FileUpload-a29BfZUB.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BQk5tYZF.js";import"./GridLegacy-Cp05DaqE.js";import"./ResearchProjectForm-Bi0umCQ2.js";import"./TextFieldWithWordLimit-BozL_hBQ.js";import"./AuthenticatedRequirement-BaqRcZZl.js";import"./CertificationRequirement-BxnhUIce.js";import"./TwoFactorAuthEnabledRequirement-CxOxgQY_.js";import"./ValidationRequirement-CtDt6RRf.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DQmURYiN.js";import"./RejectDataAccessRequestModal-DnFpsW-2.js";import"./CannedRejectionDialog-RBPzVbKc.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BDmP_pr5.js";import"./Checkbox-rNgXiDJm.js";import"./Grid-D5sZRbIA.js";import"./upperFirst-DHLEpJC3.js";import"./_stringToArray-Cgw3FR8k.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
