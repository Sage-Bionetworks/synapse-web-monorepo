import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-BfDC4V0n.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BRo9S16D.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DRbPdtS4.js";import"./useAccessRequirements-Cpf5-i3V.js";import"./index-D_SprHXq.js";import"./_baseOrderBy-CAV9pwT_.js";import"./_baseIteratee-CiW54l-R.js";import"./_baseMap-CVZ_hys5.js";import"./_baseEach-DqL3VxUs.js";import"./useInfiniteQuery-DM4nXvzm.js";import"./groupBy-BrfmtN5e.js";import"./_createAggregator-CTwYFbOW.js";import"./DialogBase-yHroOJ8_.js";import"./Close-CgiQG4j8.js";import"./HelpPopover-Dg3wd6VC.js";import"./MarkdownPopover-Cd4Su9xF.js";import"./LightTooltip-B1uK46ji.js";import"./MarkdownSynapse-Doq5YFEA.js";import"./SkeletonButton-kWC2bpgD.js";import"./SkeletonInlineBlock-Dr1CyrsC.js";import"./SkeletonTable-PdwLXVTh.js";import"./SkeletonParagraph-DUo_BCXn.js";import"./EntityLink-D6WaI9fD.js";import"./useEntity-_bJvplXg.js";import"./pickBy-Df5ApG1Q.js";import"./isString-BkXAEYmg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCWWt0dC.js";import"./useGetEntityHeaders-2JechIOY.js";import"./EntityIcon-HQYQOhNt.js";import"./ErrorChip-IproUbxH.js";import"./Chip-B3QjRI9f.js";import"./UserOrTeamBadge-BI-y8_m0.js";import"./UserBadge-BVCVeHNC.js";import"./useUserBundle-CgRRg9_x.js";import"./MenuItem-Dqvfd__a.js";import"./Card-BWuYZE85.js";import"./TeamBadge-IZ63uKCk.js";import"./UnmanagedACTAccessRequirementItem-ULlRgtbU.js";import"./RequirementItem-BHw210KT.js";import"./LockTwoTone-Dm2_xxwp.js";import"./UserSearchBoxV2-DYNA8OjD.js";import"./useDebouncedEffect-Bf5TrMkB.js";import"./use-deep-compare-effect.esm-BZPKmMbb.js";import"./uniq-D_5SEMlC.js";import"./without-CFBaUOGN.js";import"./Select-aab027f3.esm-BouzVQCo.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DWpd_Dtb.js";import"./SelfSignAccessRequirementItem-E2iGcK8z.js";import"./DataAccessRequestAccessorsFilesForm-Bl_q2WWg.js";import"./enums-CRnKuiid.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-IHFNObgW.js";import"./RadioGroup-Dpxb9AAq.js";import"./Radio-BawotIu5.js";import"./SwitchBase-D88Qn-kD.js";import"./FormGroup-8LTFzJiv.js";import"./FormControlLabel-BC6aY042.js";import"./UploadDocumentField-CFnF_MdC.js";import"./FileUpload-CxDdaxbn.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DP57CnxE.js";import"./GridLegacy-CIg7lBZd.js";import"./ResearchProjectForm--0StHaE9.js";import"./TextFieldWithWordLimit-Bgiig5c4.js";import"./AuthenticatedRequirement-C0kCINKI.js";import"./CertificationRequirement-hj7na7TO.js";import"./TwoFactorAuthEnabledRequirement-GZhffwYJ.js";import"./ValidationRequirement-Diiud3X8.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D_80m7ek.js";import"./RejectDataAccessRequestModal-D71NCID1.js";import"./CannedRejectionDialog-CptWUCBp.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Btpz93A2.js";import"./Checkbox-dwhzXcL9.js";import"./Grid-BDFn4F6-.js";import"./upperFirst-BGJIWxzy.js";import"./_stringToArray-uEizjtgX.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
