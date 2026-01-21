import{jG as p}from"./iframe-BSxjDfu3.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CagiLrid.js";import"./index-Chi_LkuB.js";import"./useEntity-KS5kNauW.js";import"./pickBy-KPoNrIIw.js";import"./isString-D9cl2q_q.js";import"./_baseIteratee-B8HVuStq.js";import"./useQueries-D2o2etJf.js";import"./useSuspenseQuery-B5B_wZvU.js";import"./useInfiniteQuery-C94oUW7N.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CkG6Qytw.js";import"./useSchema-DYkZysam.js";import"./index-zSLuykdW.js";import"./enums-TtQwdwfy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CdWoyuXb.js";import"./uniq-DnnhAaXm.js";import"./forEach-CWOCpBhE.js";import"./Add-CV97FNK_.js";import"./Grid-BDEjP6rw.js";import"./ListItem-Ej5t0R1W.js";import"./listItemButtonClasses-DYX-NU0L.js";import"./ListItemIcon-R01ziwkt.js";import"./MenuItem-DlHsRU9I.js";import"./ListItemText-aA4DD5af.js";import"./ArrowUpward-BKVn6axa.js";import"./ContentCopy-BpiqRgjI.js";import"./FormControlLabel-B8jQ_ctF.js";import"./Checkbox-C2LcxS2l.js";import"./SwitchBase-CWG7NOcH.js";import"./FormGroup-d2txErYR.js";import"./RadioGroup-BUKLgezK.js";import"./Radio-Dh69UoRp.js";import"./Slider-0sQ2b0ri.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BqzMQSuY.js";import"./DialogBase-C7KiMXAc.js";import"./Close-C8jghUIv.js";import"./HelpPopover-Ck3jSwjq.js";import"./MarkdownPopover-CtYZclYs.js";import"./LightTooltip-C6ZdzN3s.js";import"./MarkdownSynapse-BPy50KJ3.js";import"./SkeletonButton-Bu5XGQ_G.js";import"./SkeletonInlineBlock-B21sfNKh.js";import"./SkeletonTable-Bd6B-VEF.js";import"./SkeletonParagraph-ssYRCcJC.js";import"./JsonSchemaForm-clhU0GCj.js";import"./GridLegacy-CvmZMt7i.js";import"./HelpTwoTone-D6gc0g40.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DfQoNV1o.js";import"./_createAggregator-Dnay0rCC.js";import"./_baseMap-cqYdZT4m.js";import"./DateTimePicker-nHl5fy38.js";import"./useMobilePicker-D6DlF8dD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-uXRKWkBT.js";import"./index-yQ4gO9kt.js";import"./Chip-DILx9paE.js";import"./Tabs-C2virc0l.js";import"./KeyboardArrowRight-BrWuR285.js";import"./Autocomplete-B-ZjQYyi.js";import"./usePreviousProps-CiurgwCw.js";import"./use-deep-compare-effect.esm-DnLaWVar.js";import"./TextWidget-ue0zlbdH.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
