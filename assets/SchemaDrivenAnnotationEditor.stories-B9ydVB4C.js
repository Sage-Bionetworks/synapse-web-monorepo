import{jw as p}from"./iframe-D7cxPiDf.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CarCUWvV.js";import"./index-Chi_LkuB.js";import"./useEntity-wh1b78ru.js";import"./pickBy-B_aDNz0n.js";import"./isString-BrOW184h.js";import"./_baseIteratee-TLvHA3OX.js";import"./useInfiniteQuery-8o2gAKoR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CyJ-j5um.js";import"./useSchema-DC1w_dt2.js";import"./index-BainyX4K.js";import"./enums-BtzJC151.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BqFsp9gH.js";import"./uniq-BoorwxYz.js";import"./forEach-UWyboym_.js";import"./Add-CRV6FLs_.js";import"./Grid-B9SC3qZ6.js";import"./ListItem-CBQ2ajbG.js";import"./listItemButtonClasses-Bb2XoFHG.js";import"./ListItemIcon-aeV29q87.js";import"./MenuItem-D-DyuXNw.js";import"./ListItemText-BEaa-elo.js";import"./ArrowUpward-CKTWl1dB.js";import"./ContentCopy-BvhNQa_z.js";import"./FormControlLabel-C2lYTuKb.js";import"./Checkbox-D7IQ0D5W.js";import"./SwitchBase-YNIgnTmA.js";import"./FormGroup-BU_oUDT0.js";import"./RadioGroup-D42PkQCG.js";import"./Radio-CKZJMBYO.js";import"./Slider-Dbp0cwxw.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DUvSWS7G.js";import"./DialogBase-5a5Z8JWG.js";import"./Close-Du54B76W.js";import"./HelpPopover-dkwX9Qyj.js";import"./MarkdownPopover-BoWdnzj9.js";import"./LightTooltip-BKRysDKC.js";import"./MarkdownSynapse-BKDmyY35.js";import"./SkeletonButton-C1ogbO9H.js";import"./SkeletonInlineBlock-CPizO8Fa.js";import"./SkeletonTable-CXYD3wmd.js";import"./SkeletonParagraph-BqM2-1Ca.js";import"./JsonSchemaForm-Dh4JRtG1.js";import"./GridLegacy-CMt21OBP.js";import"./HelpTwoTone-DZGJ99s5.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DaSVELaS.js";import"./_createAggregator-DnVQeki1.js";import"./_baseMap-lHyQJgq8.js";import"./DateTimePicker-CzLlPWRG.js";import"./useMobilePicker-8_IQJflK.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CYYSAV9B.js";import"./index-Dfurbkx6.js";import"./Chip-DysZYHv9.js";import"./Tabs-AxCOMyOn.js";import"./KeyboardArrowRight-K28Fg27U.js";import"./Autocomplete-qIDixVzh.js";import"./usePreviousProps-4c5lPU7n.js";import"./use-deep-compare-effect.esm-CJ9vSZrn.js";import"./TextWidget-a6URiI6u.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
