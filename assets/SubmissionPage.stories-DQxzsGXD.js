import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BbbR7k03.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CNEWUThR.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bex4Bhc8.js";import"./useAccessRequirements-BZEn40zP.js";import"./index-BW5_rLqK.js";import"./_baseOrderBy-_nMHtKnN.js";import"./_baseIteratee-Cbj7J9fj.js";import"./_baseMap-DJBIFUcC.js";import"./_baseEach-GUUJEZ5y.js";import"./useInfiniteQuery-l0M08Fky.js";import"./groupBy-zFhpBnJ4.js";import"./_createAggregator-BYjxnqXo.js";import"./DialogBase-DG8acb1Q.js";import"./Close-BJFIRJbz.js";import"./HelpPopover-Fxn4OJ3p.js";import"./MarkdownPopover-DjDkPlLu.js";import"./LightTooltip-CglVqYUv.js";import"./MarkdownSynapse-ZvWb7i2I.js";import"./SkeletonButton-DffrNQo6.js";import"./SkeletonInlineBlock-BbM-xsbl.js";import"./SkeletonTable-Dx60MFYV.js";import"./SkeletonParagraph-NMWzktwn.js";import"./EntityLink-C7ebsEVT.js";import"./useEntity-DvvGGmwB.js";import"./pickBy-C1d267ha.js";import"./isString-BpQ-XtW6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B4FdtzyH.js";import"./useGetEntityHeaders-B1fFE1So.js";import"./EntityIcon-DIrJf19h.js";import"./ErrorChip-CFySDe5D.js";import"./Chip-Diq7UYnO.js";import"./UserOrTeamBadge-DzIisObA.js";import"./UserBadge-DWO5wDPo.js";import"./useUserBundle-DbQDA0bX.js";import"./MenuItem-DDa15_zq.js";import"./Card-DrotIdtr.js";import"./TeamBadge-1_wWVv75.js";import"./UnmanagedACTAccessRequirementItem-CpGEP2VP.js";import"./RequirementItem-2ftkKp02.js";import"./LockTwoTone-ByWcJsGj.js";import"./ManagedACTAccessRequirementItemView-5d8EucOD.js";import"./SelfSignAccessRequirementItem-BrnHNvhC.js";import"./DataAccessRequestAccessorsFilesForm-3AQzZ2i7.js";import"./enums-CZNct3aD.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CjHNO-5Y.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DMuEosMf.js";import"./UserSearchBox-8VWE9mUZ.js";import"./useDebouncedEffect-DpR-P4I8.js";import"./Autocomplete-BuSqBldn.js";import"./usePreviousProps-QHb4mi79.js";import"./RadioGroup-DntoE19j.js";import"./Radio-BafCVdpy.js";import"./SwitchBase-qa0TESIz.js";import"./FormGroup-DYIPiUgX.js";import"./FormControlLabel-UF_IHyRO.js";import"./UploadDocumentField-w21T7Y0M.js";import"./FileUpload-BWbxLk74.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Db2xY1cg.js";import"./GridLegacy-aolP__Er.js";import"./ResearchProjectForm-BlvmIK7k.js";import"./TextFieldWithWordLimit-dsOgRheB.js";import"./AuthenticatedRequirement-L4WD7zbL.js";import"./CertificationRequirement-B4Ylg0jc.js";import"./TwoFactorAuthEnabledRequirement-Dm6rJPsA.js";import"./ValidationRequirement-Dh9RFELq.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CMRCC79-.js";import"./RejectDataAccessRequestModal-aK_d1rQ0.js";import"./CannedRejectionDialog-DA4pmO6t.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Cco6Zt2n.js";import"./Checkbox-UPXW_iIu.js";import"./Grid-Cywb-Hob.js";import"./upperFirst-DZFpnCBD.js";import"./_stringToArray-DzytNqHA.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
