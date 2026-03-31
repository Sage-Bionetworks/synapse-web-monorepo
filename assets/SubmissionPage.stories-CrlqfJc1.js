import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-Du6HmmeA.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B9YJ8TFy.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CIePz1g6.js";import"./useAccessRequirements-DZYtBqti.js";import"./index-IUqGcT1d.js";import"./_baseOrderBy-DmLN6kHS.js";import"./_baseIteratee-BjGF9gaT.js";import"./_baseMap-D7z7svm5.js";import"./_baseEach-BFnmKIH3.js";import"./useInfiniteQuery-C6JA7Ilj.js";import"./groupBy-D2uLOuNP.js";import"./_createAggregator-C59YaSZc.js";import"./DialogBase-Bo2YvE_C.js";import"./Close-Cg0hP_SZ.js";import"./HelpPopover-DpT2pzHF.js";import"./MarkdownPopover-QWNYSrbD.js";import"./LightTooltip-zyXlWYi4.js";import"./MarkdownSynapse-BKsKuzoi.js";import"./SkeletonButton-B7NYOcGY.js";import"./SkeletonInlineBlock-hXkytNVp.js";import"./SkeletonTable-DFkOLILK.js";import"./SkeletonParagraph-xJMe6-dP.js";import"./EntityLink-DQB6wGb9.js";import"./useEntity-wRD2FBZ2.js";import"./pickBy-cEEp_iLx.js";import"./isString-Co2d92W-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BLpky4Yt.js";import"./useGetEntityHeaders-EVX6ep5I.js";import"./EntityIcon-BatUdWht.js";import"./ErrorChip-DPwQvXgy.js";import"./Chip-CcMLA9LH.js";import"./UserOrTeamBadge-Xqx_-Ab7.js";import"./UserBadge-BCnNbvVE.js";import"./useUserBundle-Bri-n8ny.js";import"./MenuItem-CKx8ssIT.js";import"./Card--Uz_bnlD.js";import"./TeamBadge-CxHm0VzH.js";import"./UnmanagedACTAccessRequirementItem-CCkiBqUY.js";import"./RequirementItem-joBylqcS.js";import"./LockTwoTone-DJeIHq0n.js";import"./UserSearchBoxV2-moPo-tOV.js";import"./useDebouncedEffect-DGplUOkX.js";import"./use-deep-compare-effect.esm-Kl208o3Z.js";import"./uniq-D6BLVwq-.js";import"./without-B8kG1aZ7.js";import"./Select-aab027f3.esm-CZdVROQc.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CT5ZBwAJ.js";import"./SelfSignAccessRequirementItem-Dlo2mjG6.js";import"./DataAccessRequestAccessorsFilesForm-CRQ8aoDM.js";import"./enums-B9RbixW4.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DAhna1w9.js";import"./RadioGroup-CMtwxzI1.js";import"./Radio-wWz2YYwh.js";import"./SwitchBase-oOV7dY8w.js";import"./FormGroup-z1W3hApr.js";import"./FormControlLabel-M309XaQU.js";import"./UploadDocumentField-DUhbtlAN.js";import"./FileUpload-Cp37cHgc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CyDeDt_g.js";import"./GridLegacy-B6az0f8w.js";import"./ResearchProjectForm-VJ-_tSpH.js";import"./TextFieldWithWordLimit-Cr5Xfdw9.js";import"./AuthenticatedRequirement-C6tBR-1I.js";import"./CertificationRequirement-cgC9e1F6.js";import"./TwoFactorAuthEnabledRequirement-Dv52oTcl.js";import"./ValidationRequirement-B3UmlZL4.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-9H6Crv_w.js";import"./RejectDataAccessRequestModal-CspsKJqn.js";import"./CannedRejectionDialog-CrjagqKX.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-C8KHwV0t.js";import"./Checkbox-DZjIxL5f.js";import"./Grid-DJP8P6kx.js";import"./upperFirst-CJ2rb_vR.js";import"./_stringToArray-BSteRl_h.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
