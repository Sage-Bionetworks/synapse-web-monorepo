import{jH as p}from"./iframe-CjPdK8o3.js";import{S as a}from"./SchemaDrivenAnnotationEditor-TvAHsgB3.js";import"./index-Chi_LkuB.js";import"./useEntity-CWLVTGdY.js";import"./pickBy-Bfv3J4LC.js";import"./isString-BzCX1oQo.js";import"./_baseIteratee-BgCPnYOG.js";import"./useQueries-Dr4qOk9C.js";import"./useSuspenseQuery-B-tj7iZo.js";import"./useInfiniteQuery-CmFbqkY3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-tZBriJuW.js";import"./useSchema-XTgvX2cB.js";import"./index-D90X2Tmg.js";import"./enums-fTPFrbNe.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dk-toVaC.js";import"./uniq-YistsObO.js";import"./forEach-CWOCpBhE.js";import"./Add-ZxsoMvQE.js";import"./Grid-rhRRqfEb.js";import"./ListItem-BdnPXKUa.js";import"./listItemButtonClasses-4mF2oHoZ.js";import"./ListItemIcon-CUjJhSlK.js";import"./MenuItem-CjSnBCYE.js";import"./ListItemText-CCmKLE1y.js";import"./ArrowUpward-CStEb5Ux.js";import"./ContentCopy-CM8_oYM7.js";import"./FormControlLabel-BzzdnTQT.js";import"./Checkbox-CzkYRqat.js";import"./SwitchBase-K4adb_Dr.js";import"./FormGroup-CZoa7M63.js";import"./RadioGroup-BJX9zPLf.js";import"./Radio-6-Dm--G_.js";import"./Slider-DBgNUfaO.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-7KWUNYWE.js";import"./DialogBase-A1jvQwLe.js";import"./Close-CHM8bqMs.js";import"./HelpPopover-CCy_vrhC.js";import"./MarkdownPopover-C1vGDBes.js";import"./LightTooltip-DIhtsuRB.js";import"./MarkdownSynapse-CzOnyM4H.js";import"./SkeletonButton-DVgZ4_7g.js";import"./SkeletonInlineBlock-CpcOQN65.js";import"./SkeletonTable-Dem7Lpfl.js";import"./SkeletonParagraph-BeVZ-sFG.js";import"./JsonSchemaForm-CF34XNgF.js";import"./GridLegacy-DV1SKjMi.js";import"./HelpTwoTone-D3VaJNf_.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Du23OJgM.js";import"./_createAggregator-BnSvu5Ts.js";import"./_baseMap-CI1anwhT.js";import"./DateTimePicker-CW51HmGq.js";import"./useMobilePicker-D4uM5t1h.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-uCtOpPqY.js";import"./index-DUxszvjk.js";import"./Chip-CTyQGhqc.js";import"./Tabs-Dvl6VjdJ.js";import"./KeyboardArrowRight-CLvh1XWS.js";import"./Autocomplete-Oib5K4an.js";import"./usePreviousProps-DKHCZsDw.js";import"./use-deep-compare-effect.esm-BkU_Fele.js";import"./TextWidget-BK_ihQjV.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
