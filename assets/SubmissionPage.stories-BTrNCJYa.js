import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BnslxpU_.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-IMl6DJOF.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DcLAxS5h.js";import"./useAccessRequirements-rp0b6PN1.js";import"./index-BBnrFY0q.js";import"./_baseOrderBy-BbY_UuU_.js";import"./_baseIteratee-DKszTi1G.js";import"./_baseMap-CyJy1Bu9.js";import"./_baseEach-DWYlC-Oi.js";import"./useInfiniteQuery-CUtRjsVX.js";import"./groupBy-1qEPP6S6.js";import"./_createAggregator-BFDQdgF6.js";import"./DialogBase-BFSEb07D.js";import"./Close-zw5i39wh.js";import"./HelpPopover-DEMZmKs_.js";import"./MarkdownPopover--8H7HGCA.js";import"./LightTooltip-CSsPVoOw.js";import"./MarkdownSynapse-CiX0_RGH.js";import"./SkeletonButton-5fVnmkER.js";import"./SkeletonInlineBlock-DPXtIPY8.js";import"./SkeletonTable-CoVehSLQ.js";import"./SkeletonParagraph-B0oRHwOu.js";import"./EntityLink-CoscjakM.js";import"./useEntity-BsI2Tbzc.js";import"./pickBy-CE5D0X5Y.js";import"./isString-lNDBQ7zY.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CtGbLs_y.js";import"./useGetEntityHeaders-BmJkMqFR.js";import"./EntityIcon-4hntAgS0.js";import"./ErrorChip-Cc5wmi05.js";import"./Chip-Bn_oC1Yj.js";import"./UserOrTeamBadge-COJBl0J0.js";import"./UserBadge-BgBEo1dQ.js";import"./useUserBundle-C1FSIxUt.js";import"./MenuItem-DtwhjM27.js";import"./Card-CRK3-fg-.js";import"./TeamBadge-DnTWR1P1.js";import"./UnmanagedACTAccessRequirementItem-Dp0bPoeW.js";import"./RequirementItem-BJvMMOdh.js";import"./CheckTwoTone-05rWK5g5.js";import"./ManagedACTAccessRequirementItemView-CGQkSUPJ.js";import"./SelfSignAccessRequirementItem-CdA7fYMv.js";import"./DataAccessRequestAccessorsFilesForm-3mARuO0l.js";import"./enums-C6yYRldL.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CGP-l6vY.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BiThlydT.js";import"./UserSearchBox-CSH2Vyqw.js";import"./useDebouncedEffect-BhaQy9He.js";import"./Autocomplete-DnGR1Ih4.js";import"./usePreviousProps-DI4-AD8Z.js";import"./RadioGroup-CmwtAxB-.js";import"./Radio-Z_Yf4KIL.js";import"./SwitchBase-D8Y_Jyat.js";import"./FormGroup-CsWa7wjm.js";import"./FormControlLabel-DFnjR6do.js";import"./UploadDocumentField-UzGqBZPz.js";import"./FileUpload-CGkYAioh.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CmRGEN9-.js";import"./GridLegacy-caL_4EXv.js";import"./ResearchProjectForm-C6N4Wl3C.js";import"./TextFieldWithWordLimit-CRffTYn2.js";import"./AuthenticatedRequirement-CWPlRhOL.js";import"./CertificationRequirement-DaR3VGUf.js";import"./TwoFactorAuthEnabledRequirement-CQx_DSWW.js";import"./ValidationRequirement-CXCtCAmL.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BiG8ZD-o.js";import"./RejectDataAccessRequestModal-SVTxqdnu.js";import"./CannedRejectionDialog-wc7B0_2V.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-zoPPJpy4.js";import"./Checkbox-LdJOabl-.js";import"./Grid-BcaJqK2a.js";import"./upperFirst-ZBL9LYv1.js";import"./_stringToArray-Py0-KOUW.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
