import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-CDThL800.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Pej8_NZo.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-u-KErh3P.js";import"./useAccessRequirements-DqPM-gQd.js";import"./index-BZVSFT2Q.js";import"./_baseOrderBy-Bk20ImG4.js";import"./_baseIteratee-v5oFDp_8.js";import"./_baseMap-BzsjZ0ef.js";import"./_baseEach-C_MJJvSQ.js";import"./useInfiniteQuery-Cp7Kwu84.js";import"./groupBy-BLf6MRDo.js";import"./_createAggregator-Z8GCD73r.js";import"./DialogBase-D7t67H5I.js";import"./Close-BK5tRb3m.js";import"./HelpPopover-Dcl1P8CO.js";import"./MarkdownPopover-BxrNYFSZ.js";import"./LightTooltip-CeD-Iueq.js";import"./MarkdownSynapse-D1fATXb_.js";import"./SkeletonButton-BWSz9WUF.js";import"./SkeletonInlineBlock-B-Z5JZ59.js";import"./SkeletonTable-CKMKjGQn.js";import"./SkeletonParagraph-DNn6pQr4.js";import"./EntityLink-DXfwKyac.js";import"./useEntity-a1JV8O5f.js";import"./pickBy-D4LV4kin.js";import"./isString-kiX4Blh2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-vftcMZZQ.js";import"./useGetEntityHeaders-DnHNdeot.js";import"./EntityIcon-Hd5HGN34.js";import"./ErrorChip-DcNe_U-7.js";import"./Chip-DKZciXua.js";import"./UserOrTeamBadge--wNMDHMc.js";import"./UserBadge-CfMPp4pO.js";import"./useUserBundle-Buy8yH5D.js";import"./MenuItem-DxhVkehk.js";import"./Card-BEiyf98S.js";import"./TeamBadge-BC5Uz79b.js";import"./UnmanagedACTAccessRequirementItem-fjnoMhas.js";import"./RequirementItem-D-FwXgAV.js";import"./LockTwoTone-BLEOT0_M.js";import"./UserSearchBoxV2-CfCtDR8_.js";import"./useDebouncedEffect-CLQkJYNg.js";import"./use-deep-compare-effect.esm-DQCvkLpg.js";import"./uniq-CTtFpapF.js";import"./without-BPgmjnnI.js";import"./Select-aab027f3.esm-DwG9RMOa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Xq1dy3Ka.js";import"./SelfSignAccessRequirementItem-BH6a9P1l.js";import"./DataAccessRequestAccessorsFilesForm-DqSJHqlX.js";import"./enums-DMU0sVg-.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Cl4VBRHx.js";import"./RadioGroup-DR9uS7Il.js";import"./Radio-Bibfm9CL.js";import"./SwitchBase-DnYbE52r.js";import"./FormGroup-CTgucdbG.js";import"./FormControlLabel-lFyHhGFK.js";import"./UploadDocumentField-DREPuu5d.js";import"./FileUpload-Ctf72Dt6.js";import"./ManagedACTAccessRequirementFormWikiWrapper-4qfk95j5.js";import"./GridLegacy-BYJRQ09P.js";import"./ResearchProjectForm-BvyLjmu-.js";import"./TextFieldWithWordLimit-sJgD9-eb.js";import"./AuthenticatedRequirement-BWPWhyi7.js";import"./CertificationRequirement-zZmbxgkY.js";import"./TwoFactorAuthEnabledRequirement-Bj6QD8A9.js";import"./ValidationRequirement-DJis795x.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-0hW7hYqk.js";import"./RejectDataAccessRequestModal-CxvvQAlQ.js";import"./CannedRejectionDialog-Dl7zFjRv.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Die5M7Ig.js";import"./Checkbox-DVnkUkf8.js";import"./Grid-DS25EHc8.js";import"./upperFirst-CSLaLdzV.js";import"./_stringToArray-OSzAOFh9.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
