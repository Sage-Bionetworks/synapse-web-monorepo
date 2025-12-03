import{jF as T}from"./iframe-oNn-8uxy.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DRTz54mU.js";import"./index-r8ZA1smB.js";import"./useEntity-NQfLZli_.js";import"./pickBy-DgR1SMI4.js";import"./isString-DyjIcYAW.js";import"./_baseIteratee-BbGDd72L.js";import"./useQueries-CKE-hIT5.js";import"./useSuspenseQuery-yMS-8lGQ.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BMvK8V8y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-EJdEQ_Jp.js";import"./useSchema-Bzsm-MtZ.js";import"./index-CNyKGH3a.js";import"./enums-Dhd0VrrJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-zo0gRTCE.js";import"./uniq-D0RDBqXc.js";import"./forEach-B8iwwgef.js";import"./Grid-B6PH2Zpw.js";import"./ListItem-4ynGeyht.js";import"./listItemButtonClasses-CFDgqxPI.js";import"./ListItemIcon-BxqGRGnD.js";import"./MenuItem-2EGLr3CI.js";import"./ListItemText-DcWfFv2J.js";import"./ArrowUpward-D8Y9Ltn0.js";import"./ContentCopy-2yjHcGRA.js";import"./FormControlLabel-B2mrO8Kq.js";import"./Checkbox-Dcd_zqus.js";import"./SwitchBase-DbKIBTZe.js";import"./FormGroup-53XXyAVd.js";import"./RadioGroup-BBNd0j-j.js";import"./Radio-ChlketSK.js";import"./Slider-CdMrsqjs.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-SzA8si7K.js";import"./DialogBase-B-cSqcPd.js";import"./Close-BSLNouGJ.js";import"./HelpPopover-CEM-d7vz.js";import"./MarkdownPopover-Cg7ChiRL.js";import"./LightTooltip-DLMoSUZw.js";import"./MarkdownSynapse-ChplHHtD.js";import"./SkeletonButton-D_D34Tmd.js";import"./SkeletonInlineBlock-B6YJwBFk.js";import"./SkeletonTable-iW-77ZUO.js";import"./SkeletonParagraph-DAXRxcWE.js";import"./JsonSchemaForm-C0n07kPg.js";import"./GridLegacy-CYv6Ya4-.js";import"./HelpTwoTone-BN6errUs.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DzYwwfye.js";import"./_createAggregator-DvK8YRgS.js";import"./_baseMap-Cj7zEA7K.js";import"./DateTimePicker-C-SohmIa.js";import"./useMobilePicker-CQ3E14Lu.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-C89tsuJ7.js";import"./index-BI05yMk-.js";import"./Chip-D6UDoJiu.js";import"./Tabs-CvgD4dKz.js";import"./KeyboardArrowRight-Bm729pwP.js";import"./Autocomplete-BNkAzsaM.js";import"./usePreviousProps-Bcna0YUH.js";import"./use-deep-compare-effect.esm-DLQm-Mgx.js";import"./TextWidget-CGVGmhS6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
