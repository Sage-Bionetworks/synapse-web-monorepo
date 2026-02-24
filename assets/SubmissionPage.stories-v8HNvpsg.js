import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-but96Lfh.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-2Sn4BMLi.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DXfSaxfh.js";import"./useAccessRequirements-BK3dspsn.js";import"./index-DM_ZQyY8.js";import"./_baseOrderBy-BZunSDna.js";import"./_baseIteratee-VsZNO4js.js";import"./_baseMap-DDkvOKK5.js";import"./_baseEach-BygoLUG-.js";import"./useQueries-AfBCkaaZ.js";import"./useInfiniteQuery-Dpy_V3ju.js";import"./groupBy-D5RvqH7A.js";import"./_createAggregator-DieCQhre.js";import"./DialogBase-DSLNZs-A.js";import"./Close-CnPFHJzh.js";import"./HelpPopover-DJt2W7Ho.js";import"./MarkdownPopover-BsvfqRJd.js";import"./LightTooltip-C4VFVSMC.js";import"./MarkdownSynapse-WMpHNlyQ.js";import"./SkeletonButton-XqPM6IMR.js";import"./SkeletonInlineBlock-CsI4ERDm.js";import"./SkeletonTable-CiaLgFbO.js";import"./SkeletonParagraph-k5_8qyuU.js";import"./EntityLink-BJTZptZl.js";import"./useEntity-CDZqllH5.js";import"./pickBy-C6AaX3IH.js";import"./isString-BV20c6FH.js";import"./useSuspenseQuery-HIpnOhi4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BXwyf35G.js";import"./useGetEntityHeaders-CmWHqzB6.js";import"./EntityIcon-QmCHyeVE.js";import"./ErrorChip-DCa9HMlW.js";import"./Chip-DMb_4koX.js";import"./UserOrTeamBadge-DHSO04e4.js";import"./UserBadge-C7dtc7se.js";import"./useUserBundle-TiYb8Qhd.js";import"./MenuItem-BvQCkNiO.js";import"./Card-Dg122fQn.js";import"./TeamBadge-B17fGlRB.js";import"./useRealmPrincipals-aJ_zfM8u.js";import"./UnmanagedACTAccessRequirementItem-OyhHKg0T.js";import"./RequirementItem-CwMntshX.js";import"./LockTwoTone-CayA8JY8.js";import"./UserSearchBoxV2-DvrLHygv.js";import"./useDebouncedEffect-C-C6j2lD.js";import"./use-deep-compare-effect.esm-B7xZFsRA.js";import"./uniq-HKxiDTCm.js";import"./without-D_bR3dSf.js";import"./Select-aab027f3.esm-1eDOglUl.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C58Aa-jr.js";import"./SelfSignAccessRequirementItem-DlA8JB_7.js";import"./DataAccessRequestAccessorsFilesForm-i_KrOh1s.js";import"./enums-CBiR3YrE.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DO4pysfy.js";import"./RadioGroup-xyPKYYB3.js";import"./Radio-BfZh9NMG.js";import"./SwitchBase-CkGWbtOJ.js";import"./FormGroup-D1uqVMGX.js";import"./FormControlLabel-DkicdPWo.js";import"./UploadDocumentField-Xk7t7N98.js";import"./FileUpload-D1zJd6Et.js";import"./ManagedACTAccessRequirementFormWikiWrapper--MUgZ9nr.js";import"./GridLegacy-D-Nk8s4a.js";import"./ResearchProjectForm-CF8XoZ9Z.js";import"./TextFieldWithWordLimit-XyXu_z7l.js";import"./AuthenticatedRequirement-tcFolA2h.js";import"./CertificationRequirement-BW1dt6l4.js";import"./TwoFactorAuthEnabledRequirement-CDGSu8JN.js";import"./ValidationRequirement-Bx1_oi4K.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-UkPeR0ZT.js";import"./RejectDataAccessRequestModal-BBQ5kh3j.js";import"./CannedRejectionDialog-DAIq_LxT.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-FXSIJylJ.js";import"./Checkbox-C-oCYhji.js";import"./Grid-BgLOPLBo.js";import"./upperFirst-CKW-nVHY.js";import"./_stringToArray-BIgHEhDs.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
