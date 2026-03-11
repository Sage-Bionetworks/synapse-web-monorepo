import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-Ds4ORbxM.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CjpSU4YC.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Caobet5i.js";import"./useAccessRequirements-xBZhOV58.js";import"./index-CIbrDib_.js";import"./_baseOrderBy-Dg5vJzPs.js";import"./_baseIteratee-XRZy9AD3.js";import"./_baseMap-G3nNbJZO.js";import"./_baseEach-CRUm181W.js";import"./useInfiniteQuery-BUNrVJri.js";import"./groupBy-OCKihvWF.js";import"./_createAggregator-D-VgGGNR.js";import"./DialogBase-BuRnxzMT.js";import"./Close-CP5Sv8Gb.js";import"./HelpPopover-BpNHIXS5.js";import"./MarkdownPopover-D8vUi55e.js";import"./LightTooltip-CV5GUQCP.js";import"./MarkdownSynapse-lp_uroGI.js";import"./SkeletonButton-Bz2oBDCo.js";import"./SkeletonInlineBlock-DDXMTXRx.js";import"./SkeletonTable-yOIpbiOB.js";import"./SkeletonParagraph-DV2rBoVm.js";import"./EntityLink-CbiZW7cY.js";import"./useEntity-BR63XRu2.js";import"./pickBy-DgO1DT59.js";import"./isString-B9BpG1ls.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CbyNlXJ1.js";import"./useGetEntityHeaders-CaVVgOB_.js";import"./EntityIcon-DhXjS8-k.js";import"./ErrorChip-B3kyWuK_.js";import"./Chip-DlFfjUFv.js";import"./UserOrTeamBadge-CfYy7w24.js";import"./UserBadge-DIydxdUM.js";import"./useUserBundle-B0gA1M1H.js";import"./MenuItem-eFAVT6re.js";import"./Card-BsZHawsi.js";import"./TeamBadge-CaoIVutR.js";import"./UnmanagedACTAccessRequirementItem-Mn1oQoBW.js";import"./RequirementItem-C9RUHaDV.js";import"./LockTwoTone-B-zs7uFG.js";import"./UserSearchBoxV2-BlK2tLCu.js";import"./useDebouncedEffect-Y9LvXdYq.js";import"./use-deep-compare-effect.esm-CekS7ztG.js";import"./uniq-DyjfefYQ.js";import"./without-CBLvV4oP.js";import"./Select-aab027f3.esm-DcqudM0x.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-D1M1sNHf.js";import"./SelfSignAccessRequirementItem-CJ0RikjN.js";import"./DataAccessRequestAccessorsFilesForm-C9euufNI.js";import"./enums-B0zvswgR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B2ehXrUx.js";import"./RadioGroup-BzWqMiK9.js";import"./Radio-k-FER8DA.js";import"./SwitchBase-APPDUZSw.js";import"./FormGroup-CV8jqrOB.js";import"./FormControlLabel-DYj3bqOy.js";import"./UploadDocumentField-BpCUX1mU.js";import"./FileUpload-ujLNdkmx.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cz41C9ui.js";import"./GridLegacy-8qM7Emkc.js";import"./ResearchProjectForm-BwDqPw5n.js";import"./TextFieldWithWordLimit-BNkEwHk8.js";import"./AuthenticatedRequirement-Co5Wkext.js";import"./CertificationRequirement-BgcK4O8o.js";import"./TwoFactorAuthEnabledRequirement-BwmPHiXo.js";import"./ValidationRequirement-eHqrMYIr.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Df__4qvi.js";import"./RejectDataAccessRequestModal-B3XSrfD6.js";import"./CannedRejectionDialog-Cm1Bc_p2.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BrjEGNnR.js";import"./Checkbox-0qRrkAZY.js";import"./Grid-2F--zuuh.js";import"./upperFirst-C7S4SxZQ.js";import"./_stringToArray-DJ5U0-mt.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
