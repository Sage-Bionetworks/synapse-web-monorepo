import{jw as p}from"./iframe-CbfOQY0w.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CAdsvUE8.js";import"./index-Chi_LkuB.js";import"./useEntity-DRZ7RxxJ.js";import"./pickBy-C05ip2Ym.js";import"./isString-BOwKb9L8.js";import"./_baseIteratee-BUemcoB_.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DwAokM_o.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-akzg6b0h.js";import"./useSchema-KvHm489_.js";import"./index-uk3a2bst.js";import"./enums-CthHH61y.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CXb1C926.js";import"./uniq-MmRNm_iH.js";import"./forEach-UWyboym_.js";import"./Add-BiLD3I8J.js";import"./Grid-CWQWU9Dj.js";import"./ListItem-BVCMqh15.js";import"./listItemButtonClasses-BoGI9PQb.js";import"./ListItemIcon-BQDDWX3b.js";import"./MenuItem-DYj3mh1g.js";import"./ListItemText-DDGfZDGh.js";import"./ArrowUpward-UtPxj2fi.js";import"./ContentCopy-CfIoyWmg.js";import"./FormControlLabel-DIqi8v8L.js";import"./Checkbox-DBu6z0UA.js";import"./SwitchBase-Bx_c6nyi.js";import"./FormGroup-BSBg9lFh.js";import"./RadioGroup-BAKCW8wr.js";import"./Radio-Brm1V9jp.js";import"./Slider-CyrB0mve.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-XDNgseZX.js";import"./DialogBase-Caocv0xu.js";import"./Close-Cq5UpdYv.js";import"./HelpPopover-D7Lqd1_Q.js";import"./MarkdownPopover-BdMXAVvu.js";import"./LightTooltip-C9p3LJOV.js";import"./MarkdownSynapse-C1Hg73kZ.js";import"./SkeletonButton-DqLe50tO.js";import"./SkeletonInlineBlock-be42gePS.js";import"./SkeletonTable-CE4I0355.js";import"./SkeletonParagraph-CCe-_wHo.js";import"./JsonSchemaForm-DzPr9MVH.js";import"./GridLegacy-BlIfOHGk.js";import"./HelpTwoTone-B6KXcGMf.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B7BKwcKL.js";import"./_createAggregator-kAJdVZDU.js";import"./_baseMap-t8X6kGPE.js";import"./DateTimePicker-Dp7kipd7.js";import"./useMobilePicker-auxiiFaN.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BulzOzfl.js";import"./index-BehqIFbh.js";import"./Chip-CeFdaJc8.js";import"./Tabs-AQj3Tg8u.js";import"./KeyboardArrowRight-BCK7B63k.js";import"./Autocomplete-CpnoKtna.js";import"./usePreviousProps-DKlj7xCm.js";import"./use-deep-compare-effect.esm-ZMcr2Kwp.js";import"./TextWidget-Bc5MDwaI.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
