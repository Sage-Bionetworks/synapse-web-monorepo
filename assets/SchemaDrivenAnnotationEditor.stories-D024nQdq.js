import{jH as p}from"./iframe-DuFc9wy7.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BGWRTlDO.js";import"./index-Chi_LkuB.js";import"./useEntity-B7cW9knU.js";import"./pickBy-BR3FB8tc.js";import"./isString-Hxb7yJlJ.js";import"./_baseIteratee-qsGxLCcA.js";import"./useQueries-DQWP9YtM.js";import"./useSuspenseQuery-DxSHSM8_.js";import"./useInfiniteQuery-DzgY0_q9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4CFtjNR5.js";import"./useSchema-UWGNzslv.js";import"./index-DoUJT6ow.js";import"./enums-BURaCo-W.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BR_mWg9y.js";import"./uniq-DF_zmgwE.js";import"./forEach-CWOCpBhE.js";import"./Add-Bo19tPHQ.js";import"./Grid-Cye-JFjr.js";import"./ListItem-gDoknv0B.js";import"./listItemButtonClasses-FzgRrT9s.js";import"./ListItemIcon-B1B1mG94.js";import"./MenuItem-BaPxBIGw.js";import"./ListItemText-Cil9VStO.js";import"./ArrowUpward-BpGDGW_s.js";import"./ContentCopy-BRvYJSky.js";import"./FormControlLabel-Dadrkpu7.js";import"./Checkbox-Dx3FyEFW.js";import"./SwitchBase-XjUV0H1u.js";import"./FormGroup-D8X_uLLt.js";import"./RadioGroup-Cl0yXWAB.js";import"./Radio-DV1Kxqyu.js";import"./Slider-CXWq0uN-.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CCgQxBD8.js";import"./DialogBase-BR60Qdy4.js";import"./Close-DDp2NBBe.js";import"./HelpPopover-DYKBAVc-.js";import"./MarkdownPopover-DymcBMfp.js";import"./LightTooltip-BztaycEr.js";import"./MarkdownSynapse-BVL-tgRC.js";import"./SkeletonButton-p5NHVcC3.js";import"./SkeletonInlineBlock-DWi7tVQO.js";import"./SkeletonTable-9HY8re28.js";import"./SkeletonParagraph-DXhZKBI2.js";import"./JsonSchemaForm-DT5_Zlfx.js";import"./GridLegacy-BmTV8VyM.js";import"./HelpTwoTone-BXoZV3uI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DX2-17_O.js";import"./_createAggregator-DpXSnwT8.js";import"./_baseMap-CQziI25s.js";import"./DateTimePicker-DQNIsRTG.js";import"./useMobilePicker-Dx-y_DHs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DdytQCmy.js";import"./index-CH5M0AIg.js";import"./Chip-Bhz-2AzF.js";import"./Tabs-J7DrImLy.js";import"./KeyboardArrowRight-BniIMPW2.js";import"./Autocomplete-DMWkvYD4.js";import"./usePreviousProps-CFLm40fS.js";import"./use-deep-compare-effect.esm-Bdc5x1y7.js";import"./TextWidget-Bej9hugR.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
