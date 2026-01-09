import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-dqn_o-j7.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-0Hn8ma0b.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CpP3YsNC.js";import"./useAccessRequirements-CEQBStN4.js";import"./index-TRDYm8vi.js";import"./_baseOrderBy-BNQJqp4U.js";import"./_baseIteratee-DkHLs-Ky.js";import"./_baseMap-WOv2-e8c.js";import"./_baseEach-DFZUyRJV.js";import"./useQueries-DJtgD_ZA.js";import"./useInfiniteQuery-CgM25XWi.js";import"./groupBy-5xz2gcTf.js";import"./_createAggregator-n6euWymG.js";import"./DialogBase-Du7TIgB4.js";import"./Close-Axrw4Kzl.js";import"./HelpPopover-C9R8R_7q.js";import"./MarkdownPopover-D3CVPC0g.js";import"./LightTooltip-Dhs-cvGE.js";import"./MarkdownSynapse-BD2Fjx54.js";import"./SkeletonButton-B8uw_n6q.js";import"./SkeletonInlineBlock-nI55AVgz.js";import"./SkeletonTable-8ejcRdZg.js";import"./SkeletonParagraph-DUPitNKo.js";import"./EntityLink-BjTXIMNz.js";import"./useEntity-DB6kE4I7.js";import"./pickBy-C9oCdo7V.js";import"./isString-BLmuSzAW.js";import"./useSuspenseQuery-BB8-jlr0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-H9wORxg2.js";import"./useGetEntityHeaders-B6LYUIlW.js";import"./EntityIcon-LPPg6lwV.js";import"./ErrorChip-C4dEfZak.js";import"./Chip-CFttJTcb.js";import"./UserOrTeamBadge-CUDc9mGs.js";import"./UserBadge-BAsSKXtF.js";import"./useUserBundle-Bwl8g-Om.js";import"./MenuItem-BOJ2Kk2Z.js";import"./Card-BpyeYfNX.js";import"./TeamBadge-BYleEiwn.js";import"./UnmanagedACTAccessRequirementItem-i7_0Uivw.js";import"./RequirementItem-D6RzpzRi.js";import"./LockTwoTone-OC7UtKms.js";import"./UserSearchBoxV2-CzD8ZjtN.js";import"./useDebouncedEffect-DoHKil_D.js";import"./use-deep-compare-effect.esm-CzfFsmDN.js";import"./uniq-BUywUvXJ.js";import"./without-DIFp6bye.js";import"./Select-aab027f3.esm-DgwVhxyM.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BcsLvBnA.js";import"./SelfSignAccessRequirementItem-tDFksVfY.js";import"./DataAccessRequestAccessorsFilesForm-BBf_w5Eo.js";import"./enums-o3UU2upe.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C1o1iV7_.js";import"./RadioGroup-D7DO8WQq.js";import"./Radio-DlMx9egD.js";import"./SwitchBase-BP-8papi.js";import"./FormGroup-BK8MzcwA.js";import"./FormControlLabel-BpzhFtV1.js";import"./UploadDocumentField-CycyHYEX.js";import"./FileUpload-xWn5ZMLI.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cu5udKBM.js";import"./GridLegacy-vsOGacgv.js";import"./ResearchProjectForm-EiX00dX6.js";import"./TextFieldWithWordLimit-CJnu1XJp.js";import"./AuthenticatedRequirement-CWOaktD4.js";import"./CertificationRequirement-BhIwQKPK.js";import"./TwoFactorAuthEnabledRequirement-rKw5-S03.js";import"./ValidationRequirement-BGlo7h-B.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DpWcBvLT.js";import"./RejectDataAccessRequestModal-Dc9DccaB.js";import"./CannedRejectionDialog-D48LwkYj.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BglZMyws.js";import"./Checkbox-yynwhYBf.js";import"./Grid-C-uX_xYH.js";import"./upperFirst-B4aD2WMZ.js";import"./_stringToArray-4WzHH4LN.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
