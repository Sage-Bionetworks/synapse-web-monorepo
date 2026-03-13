import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-DYqeQvAZ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DaF7KS2R.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BJimF1Rs.js";import"./useAccessRequirements-CIXmzSk2.js";import"./index-DB86q32y.js";import"./_baseOrderBy-CWcFLVxH.js";import"./_baseIteratee-CwqQCSfn.js";import"./_baseMap-BWiulIsu.js";import"./_baseEach-_LxsRH98.js";import"./useInfiniteQuery-SfBiKEGU.js";import"./groupBy-Bba17Ldt.js";import"./_createAggregator-ysbAhqr9.js";import"./DialogBase-D6ru6QGV.js";import"./Close-Dsj7f386.js";import"./HelpPopover-CyEsnN__.js";import"./MarkdownPopover-Z2HTRS7p.js";import"./LightTooltip-GZti0qG7.js";import"./MarkdownSynapse-C2R_2nbo.js";import"./SkeletonButton-bpCoMqPJ.js";import"./SkeletonInlineBlock-CAM6iPYb.js";import"./SkeletonTable-tbDH2wnj.js";import"./SkeletonParagraph-CY2Bzkjl.js";import"./EntityLink-DpYdgWA_.js";import"./useEntity-mBsxuZXx.js";import"./pickBy-CTOx6nSH.js";import"./isString-DVM9QblG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5yDxhUe.js";import"./useGetEntityHeaders-CYLK0AHl.js";import"./EntityIcon-D2tETkMG.js";import"./ErrorChip-CPXC4jK9.js";import"./Chip-40aQ4DbO.js";import"./UserOrTeamBadge-D-OfYvzt.js";import"./UserBadge-DTP3ILNA.js";import"./useUserBundle-DULvj39Z.js";import"./MenuItem-Cqn5rY2B.js";import"./Card-6CbmSVLL.js";import"./TeamBadge-DpOqiH_U.js";import"./UnmanagedACTAccessRequirementItem-CBnaUav5.js";import"./RequirementItem-BiwkYnnJ.js";import"./LockTwoTone-DE09D0kM.js";import"./UserSearchBoxV2-C7Q6rX-d.js";import"./useDebouncedEffect-Bqmyfrfk.js";import"./use-deep-compare-effect.esm-nCiz3OyP.js";import"./uniq-CRer6ENb.js";import"./without-Cjtl0Rqb.js";import"./Select-aab027f3.esm-d6133iNI.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DPjZAjSF.js";import"./SelfSignAccessRequirementItem-Ni6UvC6O.js";import"./DataAccessRequestAccessorsFilesForm-BlCMEAPp.js";import"./enums-B7du1rR4.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D4MORNFS.js";import"./RadioGroup-Djf84trF.js";import"./Radio-KXIIYj7j.js";import"./SwitchBase-BNafcXUF.js";import"./FormGroup-BatBknKL.js";import"./FormControlLabel-DILoqHH7.js";import"./UploadDocumentField-DJL6AVJC.js";import"./FileUpload-nHlmhb1K.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B3C7gAwX.js";import"./GridLegacy-CO9xa43z.js";import"./ResearchProjectForm-BwSjK071.js";import"./TextFieldWithWordLimit-d-bc604m.js";import"./AuthenticatedRequirement-DF0rkhJw.js";import"./CertificationRequirement-BG0UAIrt.js";import"./TwoFactorAuthEnabledRequirement-C8Oybxgp.js";import"./ValidationRequirement-DUAWgyxi.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DwomeY7N.js";import"./RejectDataAccessRequestModal-DR8EyRAx.js";import"./CannedRejectionDialog-cutdVrF2.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-F90KYiVg.js";import"./Checkbox-C0Xf7xe7.js";import"./Grid-Dl_qCstV.js";import"./upperFirst-B_NDQg0_.js";import"./_stringToArray-DgeNhTN2.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
