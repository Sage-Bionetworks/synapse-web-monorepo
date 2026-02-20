import{j as d,p as e,S as s,F as u}from"./iframe-CKbLOTsP.js";import{M as p}from"./MarkdownSynapse-DMmwxLiP.js";import{M as g}from"./ManagedACTAccessRequirementItemView-BG6_XjKo.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-8Vj3L_5j.js";import"./SkeletonInlineBlock-D5PXFjGc.js";import"./SkeletonTable-DmfimDzq.js";import"./SkeletonParagraph-Kah2Bnvf.js";import"./RequirementItem-CASbHCdk.js";import"./LockTwoTone-BB3dGDCE.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,M={title:"Governance/Data Access Request Flow/Requirements/ManagedACTAccessRequirementItem",component:g,args:{accessRequirement:e,wikiPage:d.jsx(p,{markdown:`These are the AR instructions presented to the user.
1. Fill out this form
2. Wait a bit
3. We will give you access`}),isLoading:!1,onRejectTerms:m(),onRequestAccess:m(),onCancelDataAccessRequest:m(),cancelRequestIsPending:!1},tags:["autodocs"]},t={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1}}},n={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.APPROVED}}}},r={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.SUBMITTED}}}},a={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.CANCELLED}}}},c={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,expiredOn:"2023-05-10T16:54:53.333Z",currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.APPROVED}}}},i={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.REJECTED,rejectedReason:"This is a mock rejection reason for testing purposes."}}}},o={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1},restrictionInformation:{objectId:e.id,restrictionLevel:u.CONTROLLED_BY_ACT,hasUnmetAccessRequirement:!0,restrictionDetails:[{accessRequirementId:e.id,isApproved:!1,isMet:!0,isExempt:!0}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: true,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.SUBMITTED
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.CANCELLED
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      expiredOn: '2023-05-10T16:54:53.333Z',
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.REJECTED,
        rejectedReason: 'This is a mock rejection reason for testing purposes.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false
    },
    restrictionInformation: {
      objectId: mockManagedACTAccessRequirement.id,
      restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
      hasUnmetAccessRequirement: true,
      restrictionDetails: [{
        accessRequirementId: mockManagedACTAccessRequirement.id,
        isApproved: false,
        isMet: true,
        isExempt: true
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};const k=["Default","Approved","Pending","Cancelled","Expired","Rejected","ExemptFromAccessRequirement"];export{n as Approved,a as Cancelled,t as Default,o as ExemptFromAccessRequirement,c as Expired,r as Pending,i as Rejected,k as __namedExportsOrder,M as default};
