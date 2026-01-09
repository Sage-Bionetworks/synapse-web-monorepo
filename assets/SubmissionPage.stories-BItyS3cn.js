import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DvdBRTAM.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-VGq73Orf.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BJaUFGj2.js";import"./useAccessRequirements-Byh4VCNF.js";import"./index-Bj0_rJzU.js";import"./_baseOrderBy-jb9vneOI.js";import"./_baseIteratee-Dv0BX8Lk.js";import"./_baseMap-ClSQlnUC.js";import"./_baseEach-Bn6A16a5.js";import"./useQueries-Cz9ppJHT.js";import"./useInfiniteQuery-B2hHHZp9.js";import"./groupBy-pbo0LfGC.js";import"./_createAggregator-XND8fc20.js";import"./DialogBase-D0NAWliG.js";import"./Close-DIuhwt4I.js";import"./HelpPopover-BVLYNmZ9.js";import"./MarkdownPopover-DgZvY7up.js";import"./LightTooltip-4pv9jmqt.js";import"./MarkdownSynapse-BLTNNvla.js";import"./SkeletonButton-Bf60llvE.js";import"./SkeletonInlineBlock-DETlLR5h.js";import"./SkeletonTable-ChN7ZUgX.js";import"./SkeletonParagraph-CljYlKAw.js";import"./EntityLink-9YmNDSpu.js";import"./useEntity-CZLbcF9Z.js";import"./pickBy-C-PLJ321.js";import"./isString-sJ0BruNM.js";import"./useSuspenseQuery-0rL7Zkrv.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2JsL5FI.js";import"./useGetEntityHeaders-BHpp2K6l.js";import"./EntityIcon-Bqcg0Ban.js";import"./ErrorChip-BQ1DNOQy.js";import"./Chip-BH2X6cI_.js";import"./UserOrTeamBadge-DUs7yKiM.js";import"./UserBadge-b2NCXEqP.js";import"./useUserBundle-DBtVzZkD.js";import"./MenuItem-wnk0lrZ5.js";import"./Card-zdgtOjjY.js";import"./TeamBadge-8O74UNE-.js";import"./UnmanagedACTAccessRequirementItem-CISehbp2.js";import"./RequirementItem-C56kr5_Z.js";import"./LockTwoTone-9VH9Sdfl.js";import"./UserSearchBoxV2-BEM2rr3K.js";import"./useDebouncedEffect-yN3HRkJq.js";import"./use-deep-compare-effect.esm-B6PlCZFQ.js";import"./uniq-D71_5P4-.js";import"./without-CrGtW8k7.js";import"./Select-aab027f3.esm-Dt3eZKCk.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BTmkfVgy.js";import"./SelfSignAccessRequirementItem-i3NnDHSJ.js";import"./DataAccessRequestAccessorsFilesForm-Cngg64VF.js";import"./enums-CH7iwYNq.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CEuNw0Av.js";import"./RadioGroup-7KhzJW7Q.js";import"./Radio-pW-FSExp.js";import"./SwitchBase-DwY80y2S.js";import"./FormGroup-DE28l9AD.js";import"./FormControlLabel-CRRHoKVa.js";import"./UploadDocumentField-B8g5gbTe.js";import"./FileUpload-DbjZ2tE8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BjDVDle8.js";import"./GridLegacy-BAoMjj_O.js";import"./ResearchProjectForm-BOB3J9IZ.js";import"./TextFieldWithWordLimit-B938Ga7L.js";import"./AuthenticatedRequirement-bBPvLKuD.js";import"./CertificationRequirement-CtTMDBRi.js";import"./TwoFactorAuthEnabledRequirement-CFJOwmxs.js";import"./ValidationRequirement-CSm2jR6i.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C0hc1c4H.js";import"./RejectDataAccessRequestModal-oYZXTBzJ.js";import"./CannedRejectionDialog-UIG9Ltqa.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CaQzY7SE.js";import"./Checkbox-DEQvbQfH.js";import"./Grid-ForzocLI.js";import"./upperFirst-j2loGWOk.js";import"./_stringToArray-Bsvrc5WA.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
