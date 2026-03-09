import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-BVhGOjHR.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Beqa6kNp.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Clt1XlbG.js";import"./useAccessRequirements-Q8h5xGM7.js";import"./index-B8gzQCaZ.js";import"./_baseOrderBy-CVvrlgtk.js";import"./_baseIteratee-Ck-dt1hT.js";import"./_baseMap-C3_dlTWv.js";import"./_baseEach-DdsX8oqy.js";import"./useInfiniteQuery-DBGOhcL0.js";import"./groupBy-B7GTJ_9c.js";import"./_createAggregator-Cla5cKyU.js";import"./DialogBase-DRrK0xBi.js";import"./Close-BMnT91sG.js";import"./HelpPopover-D6fqSHgm.js";import"./MarkdownPopover-DU6whr1F.js";import"./LightTooltip-vnEyTJDI.js";import"./MarkdownSynapse-BL-kClrd.js";import"./SkeletonButton-u72hHay5.js";import"./SkeletonInlineBlock-BxY577KC.js";import"./SkeletonTable-DsxcrpLy.js";import"./SkeletonParagraph-mwYfRmjy.js";import"./EntityLink-Clk7gaoK.js";import"./useEntity-B8pNOBp6.js";import"./pickBy-Ch7pvodo.js";import"./isString-Ddretr-d.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B5tPR1Ac.js";import"./useGetEntityHeaders-BuUNd2YD.js";import"./EntityIcon-D873_rmf.js";import"./ErrorChip-s_3DFfdC.js";import"./Chip-DZiNGCO2.js";import"./UserOrTeamBadge-DjHTXwwq.js";import"./UserBadge-CDmVMUNv.js";import"./useUserBundle-dXzxNskR.js";import"./MenuItem-CXPtROXT.js";import"./Card-DxFsJWCw.js";import"./TeamBadge-Ch7SIx9a.js";import"./UnmanagedACTAccessRequirementItem-D_LTHAwT.js";import"./RequirementItem-BEdydRv4.js";import"./LockTwoTone-PBrSOJ88.js";import"./UserSearchBoxV2-BI9Bxnj0.js";import"./useDebouncedEffect-DBspAfrD.js";import"./use-deep-compare-effect.esm-6jG1hbRQ.js";import"./uniq-CigljoQU.js";import"./without-BALSkZZA.js";import"./Select-aab027f3.esm-C-jX2mGm.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Djlv4E4L.js";import"./SelfSignAccessRequirementItem-CxhhwB2D.js";import"./DataAccessRequestAccessorsFilesForm-BU9Gyvtg.js";import"./enums-8Qrw7zXW.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-z_L_HMAb.js";import"./RadioGroup-COCCjC_I.js";import"./Radio-CcC48vc_.js";import"./SwitchBase-D5USTId4.js";import"./FormGroup-BXxNQwlv.js";import"./FormControlLabel-37G6IIQa.js";import"./UploadDocumentField-DpABUx7e.js";import"./FileUpload-CdvcHrPU.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CV3Bl4V0.js";import"./GridLegacy-BgD0AfKA.js";import"./ResearchProjectForm-DszTSrow.js";import"./TextFieldWithWordLimit-Da8fIRRk.js";import"./AuthenticatedRequirement-CA4gIVLv.js";import"./CertificationRequirement-FHmkKK-P.js";import"./TwoFactorAuthEnabledRequirement-BOefJkPG.js";import"./ValidationRequirement-Ck2Sg3Vk.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CulasN7u.js";import"./RejectDataAccessRequestModal-DumWHDUt.js";import"./CannedRejectionDialog-dij6280P.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cv8Px1du.js";import"./Checkbox-DfTEr6Wc.js";import"./Grid-BoTHHcTR.js";import"./upperFirst-DnOz9TpK.js";import"./_stringToArray-CwLU1k9g.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
