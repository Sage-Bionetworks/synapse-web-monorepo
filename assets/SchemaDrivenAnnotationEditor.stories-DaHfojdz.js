import{jI as p}from"./iframe-C1Apx41K.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dsd0vsIK.js";import"./index-Chi_LkuB.js";import"./useEntity-794crS3g.js";import"./pickBy-jnwZacz8.js";import"./isString-CUqikMn2.js";import"./_baseIteratee-8Sc6B18w.js";import"./useQueries-BXoScF_u.js";import"./useSuspenseQuery-CWXsXeM-.js";import"./useInfiniteQuery-Bd6Dhm29.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DAt6tMDa.js";import"./useSchema-D58YXIsg.js";import"./index-b-feUvU7.js";import"./enums-CDAvNZ4U.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Ckpa6zJd.js";import"./uniq-BwQMH0eL.js";import"./forEach-CWOCpBhE.js";import"./Add-DTXq4SRx.js";import"./Grid-DoD1tu7S.js";import"./ListItem-p1vUKAzn.js";import"./listItemButtonClasses-8X19HTZJ.js";import"./ListItemIcon-h5Bd3FUB.js";import"./MenuItem-CghTk7HR.js";import"./ListItemText-Bm5vv7dG.js";import"./ArrowUpward-DdfjhEvK.js";import"./ContentCopy-CEv2xRBT.js";import"./FormControlLabel-CDOc7gaP.js";import"./Checkbox-BbsUDmmn.js";import"./SwitchBase-D0GTh9ez.js";import"./FormGroup-DcSw9Iij.js";import"./RadioGroup-D-jlGWhT.js";import"./Radio-BK7iVB_Y.js";import"./Slider-CKD4Mx9G.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BvosZqG2.js";import"./DialogBase-D25MustV.js";import"./Close-BYfoF0T4.js";import"./HelpPopover-B8LQHL_b.js";import"./MarkdownPopover-DHmJN8ko.js";import"./LightTooltip-Dd6uBPZU.js";import"./MarkdownSynapse-CjERrYjm.js";import"./SkeletonButton-D8PmJqDh.js";import"./SkeletonInlineBlock-CfPdCjit.js";import"./SkeletonTable-4nPmJRNn.js";import"./SkeletonParagraph-D2VtG1zT.js";import"./JsonSchemaForm-0WdcM0du.js";import"./GridLegacy-Dgq7dt3K.js";import"./HelpTwoTone-DNg46slc.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CTq7KDDa.js";import"./_createAggregator-DdWw9orO.js";import"./_baseMap-B8Y4JFJ6.js";import"./DateTimePicker--_gCpXZq.js";import"./useMobilePicker-BqI6h1RE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-yDiyBt_p.js";import"./index-BNzSHHEP.js";import"./Chip-S_uffPL4.js";import"./Tabs-C2QNzdql.js";import"./KeyboardArrowRight-CkN-H_98.js";import"./Autocomplete-DRNpdDW4.js";import"./usePreviousProps-CGWAWoAk.js";import"./use-deep-compare-effect.esm-50Q-ut1H.js";import"./TextWidget-jwAvaGm0.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
