import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BknA5AKQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CgNqMse3.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BMolP5pz.js";import"./useAccessRequirements-XVuBmyF9.js";import"./index-CB5up3MK.js";import"./_baseOrderBy-BwEvPxfi.js";import"./_baseIteratee-CSacSwwJ.js";import"./_baseMap-BlcHWZxP.js";import"./_baseEach-UREiZOpt.js";import"./useInfiniteQuery-IfHRRpU9.js";import"./groupBy-C1xSJWZE.js";import"./_createAggregator-CmRTscji.js";import"./DialogBase-2oKzQzDh.js";import"./Close-Dt0xqxPt.js";import"./HelpPopover-CoqMnHLA.js";import"./MarkdownPopover-UDNbtmIF.js";import"./LightTooltip-T0pPDs7d.js";import"./MarkdownSynapse-D0cltami.js";import"./SkeletonButton-DS3-vsq6.js";import"./SkeletonInlineBlock-CJPbZx5E.js";import"./SkeletonTable-DbyGjMNM.js";import"./SkeletonParagraph-COPAUoGX.js";import"./EntityLink-coVll0Fi.js";import"./useEntity-DPMi0o_T.js";import"./pickBy-DoG8KzPZ.js";import"./isString-R8upoJvM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-vvNjbWO5.js";import"./useGetEntityHeaders-Ro_WICgN.js";import"./EntityIcon-CRfpMX2G.js";import"./ErrorChip-X9VT_LUS.js";import"./Chip-CVnCUFdM.js";import"./UserOrTeamBadge-DbuIpa7W.js";import"./UserBadge-CFsuA3am.js";import"./useUserBundle-CpQAXbXo.js";import"./MenuItem-BQAxjpVg.js";import"./Card-C9qx6pdO.js";import"./TeamBadge-CQa2HjBv.js";import"./UnmanagedACTAccessRequirementItem-BnBXK7wB.js";import"./RequirementItem-ByqM8w8O.js";import"./LockTwoTone-D6h1NWuI.js";import"./ManagedACTAccessRequirementItemView-BlX8e1JQ.js";import"./SelfSignAccessRequirementItem-B3EcmofY.js";import"./DataAccessRequestAccessorsFilesForm-ry33U0na.js";import"./enums-D6WaIIll.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CSK8b-F9.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-E0EsPzbP.js";import"./UserSearchBox-Ci3hyZDL.js";import"./useDebouncedEffect-BSnJpFao.js";import"./Autocomplete-C7TmKGrZ.js";import"./usePreviousProps-Bfj6pKxe.js";import"./RadioGroup-Tg6JH8CJ.js";import"./Radio-B-qc4l9g.js";import"./SwitchBase-BdMKy0_S.js";import"./FormGroup-BAXt1Qow.js";import"./FormControlLabel-D6qH4hbx.js";import"./UploadDocumentField-Bv8HBMC1.js";import"./FileUpload-DyzFFWLX.js";import"./ManagedACTAccessRequirementFormWikiWrapper-F6JspXZl.js";import"./GridLegacy-DzHcGgRu.js";import"./ResearchProjectForm-B9kj_1wZ.js";import"./TextFieldWithWordLimit-CPor-7OC.js";import"./AuthenticatedRequirement-CCm8WKqf.js";import"./CertificationRequirement-BhyjjSo5.js";import"./TwoFactorAuthEnabledRequirement-yoLdEdn7.js";import"./ValidationRequirement-Cxgo8A-N.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DxVl0GiB.js";import"./RejectDataAccessRequestModal-C1wRG4Vf.js";import"./CannedRejectionDialog-CFcatytx.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DEKZKJ8u.js";import"./Checkbox-X4PIicdY.js";import"./Grid-BIn9HLJX.js";import"./upperFirst-bHGFv7YF.js";import"./_stringToArray-mB4kN7eO.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
