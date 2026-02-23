import{jF as p}from"./iframe-BOp5xHgQ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-By0QSdia.js";import"./index-Chi_LkuB.js";import"./useEntity-pkJYcg6M.js";import"./pickBy-MJFKQQHU.js";import"./isString-2x762vse.js";import"./_baseIteratee-1e4QYe1a.js";import"./useQueries-B9sDnyGk.js";import"./useSuspenseQuery-BChhK6t7.js";import"./useInfiniteQuery-eidVdOLk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BdmrDFp3.js";import"./useSchema-BAa2ire8.js";import"./index-CUGmNsnE.js";import"./enums-CjGEupRl.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CWoDBsEd.js";import"./uniq-KEHuC6nU.js";import"./forEach-CWOCpBhE.js";import"./Add-Bx_ZdewP.js";import"./Grid-yNF5fcVb.js";import"./ListItem-Bjilwgb7.js";import"./listItemButtonClasses-BNrsRXjk.js";import"./ListItemIcon-BeT3BAKL.js";import"./MenuItem-BeX68FFD.js";import"./ListItemText-jz05i9RE.js";import"./ArrowUpward-C5rREMlk.js";import"./ContentCopy-piF88c0Z.js";import"./FormControlLabel-CZQJQgPa.js";import"./Checkbox-B7QnzdP8.js";import"./SwitchBase-CxS3jqOK.js";import"./FormGroup-DNl-7vBy.js";import"./RadioGroup-FidT2bQg.js";import"./Radio-DQpvx-JK.js";import"./Slider-CnDy2NEF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B3t_qKq9.js";import"./DialogBase-7fHULBfY.js";import"./Close-D9s2c75o.js";import"./HelpPopover-LeyUV4iz.js";import"./MarkdownPopover-uWg2CiyD.js";import"./LightTooltip-Dp_nVCeZ.js";import"./MarkdownSynapse-BVAukZy4.js";import"./SkeletonButton-DNYlKQbh.js";import"./SkeletonInlineBlock-BjcHkhbP.js";import"./SkeletonTable-DueDues1.js";import"./SkeletonParagraph-Dpr2MQLi.js";import"./JsonSchemaForm-CWs26Ur9.js";import"./GridLegacy-CrMvtSBh.js";import"./HelpTwoTone-BJbBuIKB.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-cZ-WUxXh.js";import"./_createAggregator-V-SnPzq0.js";import"./_baseMap-DqggDP61.js";import"./DateTimePicker-DSTeF5vh.js";import"./useMobilePicker-BqpS5aXl.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C5qQh4vd.js";import"./index-C0aVICkT.js";import"./Chip-QOkeOJ9H.js";import"./Tabs-Dai-kQYC.js";import"./KeyboardArrowRight-CWSa2-pi.js";import"./Autocomplete-BtFl3_ZS.js";import"./usePreviousProps-Bvtolvm-.js";import"./use-deep-compare-effect.esm-ClAg0lVH.js";import"./TextWidget-D0Ivs05Q.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
