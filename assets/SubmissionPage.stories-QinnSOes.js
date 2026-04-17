import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-Bg-s9pTZ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-ZXIAjOXk.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-TEuThck7.js";import"./useAccessRequirements-S-5D3Egc.js";import"./index-BjGPL7ol.js";import"./_baseOrderBy-D6jiSVQT.js";import"./_baseIteratee-BAr5j981.js";import"./_baseMap-B33d-4DG.js";import"./_baseEach-BxudFW9Z.js";import"./useInfiniteQuery-Camq04G4.js";import"./groupBy-CDTHAEzh.js";import"./_createAggregator-DKHQwFu4.js";import"./DialogBase-DgBP91vj.js";import"./Close-1Ub5h9Ti.js";import"./HelpPopover-cbNyKjRR.js";import"./MarkdownPopover-DsmK9fKf.js";import"./LightTooltip-CZzLKYGi.js";import"./MarkdownSynapse-xJpqab6Z.js";import"./SkeletonButton-Dp_QSsYr.js";import"./SkeletonInlineBlock-BF2HGXEd.js";import"./SkeletonTable-Bbn4NeNZ.js";import"./SkeletonParagraph-B9vNapgZ.js";import"./EntityLink-UVh45yu9.js";import"./useEntity-BQmjN6b5.js";import"./pickBy-B2wdFJ_u.js";import"./isString-DrOnGG_f.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CK8Dqze5.js";import"./useGetEntityHeaders-BWC2gBJa.js";import"./EntityIcon-Balj7xp9.js";import"./ErrorChip-CR0ywM8i.js";import"./Chip-DPIa4PAj.js";import"./UserOrTeamBadge-Y69jUfgD.js";import"./UserBadge-D2x7qBuJ.js";import"./useUserBundle-Dt_B1mhI.js";import"./MenuItem-D2-zdb04.js";import"./Card-B9WiC7Qz.js";import"./TeamBadge-C67jnyCQ.js";import"./UnmanagedACTAccessRequirementItem-1dj8snw6.js";import"./RequirementItem-Cp-koPzB.js";import"./CheckTwoTone-Da1rQtXk.js";import"./ManagedACTAccessRequirementItemView-KSSnFNX-.js";import"./SelfSignAccessRequirementItem-DVt1mP0X.js";import"./DataAccessRequestAccessorsFilesForm-B0h4mTE4.js";import"./enums-CxQY3rUi.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BV4GmJ4R.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CweB4UOT.js";import"./UserSearchBox-C5zjrBDD.js";import"./useDebouncedEffect-tpD84LoS.js";import"./Autocomplete-DItW-jcs.js";import"./usePreviousProps-CqDukbv0.js";import"./RadioGroup-Du_zJv84.js";import"./Radio-DHH1jft6.js";import"./SwitchBase-CW3A8DBo.js";import"./FormGroup-CDV06DZJ.js";import"./FormControlLabel-HKnEx2oy.js";import"./UploadDocumentField-_z6KtFft.js";import"./FileUpload-B_EkGKcc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BvxN1aol.js";import"./GridLegacy-DsmLgFy-.js";import"./ResearchProjectForm-BYoxotG5.js";import"./TextFieldWithWordLimit-DVBTSUoJ.js";import"./AuthenticatedRequirement-7wri4nXe.js";import"./CertificationRequirement-tAwqSOq8.js";import"./TwoFactorAuthEnabledRequirement-DCy5QHXM.js";import"./ValidationRequirement-Bb7YJjqB.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D3c7xNNz.js";import"./RejectDataAccessRequestModal-OP2hUoTN.js";import"./CannedRejectionDialog-engfGe6m.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-D8nwHqWo.js";import"./Checkbox-D-ymD47b.js";import"./Grid-CDUSb_WG.js";import"./upperFirst-R2kHaJg7.js";import"./_stringToArray-BZpq44Sg.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
