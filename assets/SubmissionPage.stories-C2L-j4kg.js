import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-CsxBzgcc.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-EzOqmZ3f.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-mHAC3h0e.js";import"./useAccessRequirements-CRbu92xG.js";import"./index-CqdG97d5.js";import"./_baseOrderBy-BHVJ7-cG.js";import"./_baseIteratee-CocFix3A.js";import"./_baseMap-LcAFCb8i.js";import"./_baseEach-N09lyxf9.js";import"./useInfiniteQuery-DUTjfMBl.js";import"./groupBy-adEbYdj5.js";import"./_createAggregator-B3_4DZUU.js";import"./DialogBase-DhZkTiCA.js";import"./Close-BzicxIcj.js";import"./HelpPopover-y5CnxthQ.js";import"./MarkdownPopover-DmAn0kqk.js";import"./LightTooltip-BM4vanV4.js";import"./MarkdownSynapse-BlaqDi--.js";import"./SkeletonButton-C34BpE4a.js";import"./SkeletonInlineBlock-Wq3H9QMf.js";import"./SkeletonTable-DcTnDoDK.js";import"./SkeletonParagraph-aQXmvCYx.js";import"./EntityLink-BgbwAFbr.js";import"./useEntity-sOpoOsiJ.js";import"./pickBy-CX4DYABF.js";import"./isString-X79f3-Tj.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DDfICuEY.js";import"./useGetEntityHeaders-DUUcOv-S.js";import"./EntityIcon-BYgezvzX.js";import"./ErrorChip-DpEEA493.js";import"./Chip-CAnuLq2P.js";import"./UserOrTeamBadge-1NEVN6wA.js";import"./UserBadge-CsG6C7yN.js";import"./useUserBundle-CnN0kkEH.js";import"./MenuItem-tZmUaMPT.js";import"./Card-ah1wXFi5.js";import"./TeamBadge-BoFjbyDD.js";import"./UnmanagedACTAccessRequirementItem-ClWXlC-h.js";import"./RequirementItem-DUWDyHL7.js";import"./CheckTwoTone-BBJ3BVZk.js";import"./ManagedACTAccessRequirementItemView-V9bzEDXh.js";import"./SelfSignAccessRequirementItem-By_HA6V0.js";import"./DataAccessRequestAccessorsFilesForm-B4rcBEgc.js";import"./enums-gnmBX9ee.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DzPL2vMM.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BNCPSNw1.js";import"./UserSearchBox-w93_8vYa.js";import"./useDebouncedEffect-CdtGFfET.js";import"./Autocomplete-BvVhFG-L.js";import"./usePreviousProps-CbBR4Eer.js";import"./RadioGroup-H15y-nwi.js";import"./Radio-CCkg1JFj.js";import"./SwitchBase-yO_lVJ_F.js";import"./FormGroup-Ci9whPah.js";import"./FormControlLabel-DZ7y0U6g.js";import"./UploadDocumentField-BiEeR4OH.js";import"./FileUpload-HwfXguh4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-g3wjGWUP.js";import"./GridLegacy-DhJwBIcG.js";import"./ResearchProjectForm-BU4a0S_z.js";import"./TextFieldWithWordLimit-BI2RlFf0.js";import"./AuthenticatedRequirement-CLG5lqjW.js";import"./CertificationRequirement-Bl-J5eIr.js";import"./TwoFactorAuthEnabledRequirement-Ddy74AGd.js";import"./ValidationRequirement-D5VBG1CS.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DVSpVRPk.js";import"./RejectDataAccessRequestModal-KnoAjySW.js";import"./CannedRejectionDialog-EBv65HYw.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Uzjk9IlN.js";import"./Checkbox-DTYk3i6O.js";import"./Grid-CPbrM1CX.js";import"./upperFirst-B-qNbWOa.js";import"./_stringToArray-IckGgGeU.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
