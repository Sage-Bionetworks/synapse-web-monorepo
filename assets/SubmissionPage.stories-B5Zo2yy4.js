import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-pozrfGX9.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BYx5Sah6.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CxniHX8K.js";import"./useAccessRequirements-fBMjbIHK.js";import"./index-DK5SCnFS.js";import"./_baseOrderBy-BYJW5QEN.js";import"./_baseIteratee-CPEDkU6I.js";import"./_baseMap-CrtdhqL2.js";import"./_baseEach-BSpAmI0c.js";import"./useInfiniteQuery-BoWyfOQx.js";import"./groupBy-Dw50IPpj.js";import"./_createAggregator-Bkhby9SU.js";import"./DialogBase-B6KdTX5Z.js";import"./Close-DSWu6oeE.js";import"./HelpPopover-CXWVW84-.js";import"./MarkdownPopover-DP57655n.js";import"./LightTooltip-B0VARp2j.js";import"./MarkdownSynapse-B4RP0lap.js";import"./SkeletonButton-BVG9V-0l.js";import"./SkeletonInlineBlock-COIr5uPh.js";import"./SkeletonTable-B877ikOr.js";import"./SkeletonParagraph-QqDrbm_v.js";import"./EntityLink-2D9T37uL.js";import"./useEntity-DjNKlE7X.js";import"./pickBy-BgJu4nxq.js";import"./isString-dc7ZEHEL.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BjeXetgB.js";import"./useGetEntityHeaders-B5Sd4D98.js";import"./EntityIcon-Dy1Nnurb.js";import"./ErrorChip-laD1PmXM.js";import"./Chip-SQ2CRNke.js";import"./UserOrTeamBadge-CEvOFGxN.js";import"./UserBadge-DNs5g3Fi.js";import"./useUserBundle-dJrxo5eU.js";import"./MenuItem-CtrC7AXY.js";import"./Card-CdSoIgQr.js";import"./TeamBadge-DPj3X9R-.js";import"./UnmanagedACTAccessRequirementItem-CEiji7kR.js";import"./RequirementItem-CYGZn1yu.js";import"./LockTwoTone-BP7eeBui.js";import"./UserSearchBoxV2-BoI1HIqu.js";import"./useDebouncedEffect-CM6m6oV_.js";import"./use-deep-compare-effect.esm-B7gtu2hA.js";import"./uniq-BPYZNo6X.js";import"./without-B2jwXaCQ.js";import"./Select-aab027f3.esm-DGgIVoDS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-hERONoag.js";import"./SelfSignAccessRequirementItem-9q0dw3Hh.js";import"./DataAccessRequestAccessorsFilesForm-DSJ_Pv4F.js";import"./enums-BVmhEgw6.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-bmf7qe6-.js";import"./RadioGroup-nzKibwuk.js";import"./Radio-DVC-8W2Z.js";import"./SwitchBase-0kMqfIa2.js";import"./FormGroup-DsAra8aP.js";import"./FormControlLabel-Dx6ulEoT.js";import"./UploadDocumentField-qVDea-7x.js";import"./FileUpload-Dd0OkkTC.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Da9daLln.js";import"./GridLegacy-BX7TNYaE.js";import"./ResearchProjectForm-hyUGurjt.js";import"./TextFieldWithWordLimit-D43ycWLC.js";import"./AuthenticatedRequirement-DgFcYygd.js";import"./CertificationRequirement-WWAtZDP1.js";import"./TwoFactorAuthEnabledRequirement-BtxtNRCq.js";import"./ValidationRequirement-CSUCj2Ux.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D5i0nPVD.js";import"./RejectDataAccessRequestModal-dFtPYKcN.js";import"./CannedRejectionDialog-Vti7J7yK.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-pkD1Ofo-.js";import"./Checkbox-aXQ8w9JS.js";import"./Grid-CKjOzNfL.js";import"./upperFirst-Cn9uuzR9.js";import"./_stringToArray-DZNwqZqA.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
