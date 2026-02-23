import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-D6-EgIYn.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-y9dJDg4_.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D_CYMlzN.js";import"./useAccessRequirements-CDwXUrc8.js";import"./index-BAqH8QUV.js";import"./_baseOrderBy-kKcqyWpM.js";import"./_baseIteratee-DM4WPHJT.js";import"./_baseMap-DlGLzu_z.js";import"./_baseEach-DEorYF5u.js";import"./useQueries-Dp7eDvCj.js";import"./useInfiniteQuery-Bac3XvRa.js";import"./groupBy-CvbJCaVB.js";import"./_createAggregator-BEUroU0K.js";import"./DialogBase-jhwmtm1u.js";import"./Close-CB4RDINp.js";import"./HelpPopover-6jNO7rXC.js";import"./MarkdownPopover-63--326B.js";import"./LightTooltip-ByM4QqbN.js";import"./MarkdownSynapse-BOOvENLm.js";import"./SkeletonButton-BgAZzTmz.js";import"./SkeletonInlineBlock-CkGbAtvq.js";import"./SkeletonTable-Cw1xCxvL.js";import"./SkeletonParagraph-DzfgVu65.js";import"./EntityLink-CclHeFNF.js";import"./useEntity-CcmBzuUK.js";import"./pickBy-DPt-VEwT.js";import"./isString-BleN90PO.js";import"./useSuspenseQuery-CDWRAkW_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B-ukV0jW.js";import"./useGetEntityHeaders-Cm1kjIYm.js";import"./EntityIcon-BRLhkMOP.js";import"./ErrorChip-CZcgCZOx.js";import"./Chip-C2QYErxj.js";import"./UserOrTeamBadge-D005yRYk.js";import"./UserBadge-CjWzxbLB.js";import"./useUserBundle-CyWCEqcm.js";import"./MenuItem-CdqoCxWB.js";import"./Card-dKshTQst.js";import"./TeamBadge-0XuX1o3A.js";import"./useRealmPrincipals-BYFcXE6T.js";import"./UnmanagedACTAccessRequirementItem-C0RumIkM.js";import"./RequirementItem-ddxUOf51.js";import"./LockTwoTone-BHFyetsm.js";import"./UserSearchBoxV2-CFe_tRJX.js";import"./useDebouncedEffect-B25vgBYV.js";import"./use-deep-compare-effect.esm-C9A8HvcU.js";import"./uniq-BP7VOetn.js";import"./without-D3Y5b0qW.js";import"./Select-aab027f3.esm-BcIyEF9O.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DbeG0J2I.js";import"./SelfSignAccessRequirementItem-CnG0eL4k.js";import"./DataAccessRequestAccessorsFilesForm-DbmB1pn-.js";import"./enums-Bp4SAlPN.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DQLy7B87.js";import"./RadioGroup-BmoBIvLx.js";import"./Radio-DOF2g2El.js";import"./SwitchBase-BDm3YM90.js";import"./FormGroup-DM3ug8nc.js";import"./FormControlLabel-I4j_CSGI.js";import"./UploadDocumentField-XTXH4TCI.js";import"./FileUpload-1BNo8uXR.js";import"./ManagedACTAccessRequirementFormWikiWrapper-rIOi5olw.js";import"./GridLegacy-DZ4OMtJD.js";import"./ResearchProjectForm-ECzgRNWr.js";import"./TextFieldWithWordLimit-DYIAzw-_.js";import"./AuthenticatedRequirement-zjqUMai5.js";import"./CertificationRequirement-J_OYv1ur.js";import"./TwoFactorAuthEnabledRequirement-lzBe8_F0.js";import"./ValidationRequirement-DK_FQMAa.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B-eK1UEA.js";import"./RejectDataAccessRequestModal-Bm9RXyRa.js";import"./CannedRejectionDialog-DJn69Vg7.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BievdrGA.js";import"./Checkbox-Bv8D7Yjv.js";import"./Grid-Doyl9us1.js";import"./upperFirst-BA-YPv-_.js";import"./_stringToArray-BSTKBepg.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
