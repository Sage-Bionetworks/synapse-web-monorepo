import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-yrc_qHyu.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C7D3HqrF.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-KZbJuZhN.js";import"./useAccessRequirements-BahwTKJ-.js";import"./index-Cza2pBOV.js";import"./_baseOrderBy-ClsXy_tN.js";import"./_baseIteratee-B0J-KDKo.js";import"./_baseMap-CcYtFPTe.js";import"./_baseEach-DwOMPOPt.js";import"./useInfiniteQuery-DvtqKNa0.js";import"./groupBy-WE_KG3YE.js";import"./_createAggregator-C98e7p3g.js";import"./DialogBase-BjJleq3r.js";import"./Close-Di02zrOW.js";import"./HelpPopover-BqXpmNFE.js";import"./MarkdownPopover-CKXXZDMn.js";import"./LightTooltip-N83Bwt9b.js";import"./MarkdownSynapse-Bx8fIbL4.js";import"./SkeletonButton-qQeUX2b-.js";import"./SkeletonInlineBlock-A6wMEVyL.js";import"./SkeletonTable-Cb2oJXC7.js";import"./SkeletonParagraph-BFGPUajO.js";import"./EntityLink-A5hgiEyn.js";import"./useEntity-Erg9uHlv.js";import"./pickBy-geHVkVLl.js";import"./isString-DT4CNQuk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFZLKvF8.js";import"./useGetEntityHeaders-BX5CQVYB.js";import"./EntityIcon-recR1Rd-.js";import"./ErrorChip-8JPuLvkV.js";import"./Chip-Bjj18pYr.js";import"./UserOrTeamBadge-DhTlMeaZ.js";import"./UserBadge-C3OtX4ed.js";import"./useUserBundle-Di1cjl0z.js";import"./MenuItem-DdsI2qtG.js";import"./Card-DPtRFUCi.js";import"./TeamBadge-amCiZPRK.js";import"./UnmanagedACTAccessRequirementItem-BU08_COo.js";import"./RequirementItem-C4FuFupG.js";import"./LockTwoTone-CONqZjs0.js";import"./UserSearchBoxV2-CB2yyEfG.js";import"./useDebouncedEffect-B3jH62DL.js";import"./use-deep-compare-effect.esm-DUwYhQ3T.js";import"./uniq-CJYl14sy.js";import"./without-IPLqGso_.js";import"./Select-aab027f3.esm-CJrNSNeJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DRfW3PYZ.js";import"./SelfSignAccessRequirementItem-7-igbJAy.js";import"./DataAccessRequestAccessorsFilesForm-B3y5r4mg.js";import"./enums-CD86UxHx.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B92XCmk6.js";import"./RadioGroup-Dm4FtZPg.js";import"./Radio-Dn2_dbvc.js";import"./SwitchBase-Dr9vpGDU.js";import"./FormGroup-Bn8nmVR4.js";import"./FormControlLabel-PA7GUpsR.js";import"./UploadDocumentField-2knihrrG.js";import"./FileUpload-BT8hrqsl.js";import"./ManagedACTAccessRequirementFormWikiWrapper-bUjPgy7f.js";import"./GridLegacy-BrA8-h-Z.js";import"./ResearchProjectForm-D1QrdiDr.js";import"./TextFieldWithWordLimit-YlG3rb9j.js";import"./AuthenticatedRequirement-DxOQ8wNU.js";import"./CertificationRequirement-B3a4s0l6.js";import"./TwoFactorAuthEnabledRequirement-Bo1vCAwc.js";import"./ValidationRequirement-B9QMkKsf.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-2g2Gzq3W.js";import"./RejectDataAccessRequestModal-Y3keDSgW.js";import"./CannedRejectionDialog-CNF7wdx6.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BGe5VYMN.js";import"./Checkbox-B2FAWXxm.js";import"./Grid-1Zu8eZdi.js";import"./upperFirst-BCQ5PZUf.js";import"./_stringToArray-Bg5PpZFt.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
