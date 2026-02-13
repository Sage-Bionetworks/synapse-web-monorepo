import{jJ as p}from"./iframe-vUTu6M8D.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DWlLjKXn.js";import"./index-Chi_LkuB.js";import"./useEntity-CJyHliIQ.js";import"./pickBy-ttRy5A60.js";import"./isString-Vkflck2t.js";import"./_baseIteratee-BvpquvUu.js";import"./useQueries-Bv2f7GHO.js";import"./useSuspenseQuery-p_6e0XOX.js";import"./useInfiniteQuery-i4mklQoJ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HV3Xzo9J.js";import"./useSchema-BKJz5mJz.js";import"./index-Dg897VZq.js";import"./enums-CRcEvnq1.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DYOJ9REo.js";import"./uniq-DWYdI45G.js";import"./forEach-CWOCpBhE.js";import"./Add-D1A_M4Rt.js";import"./Grid-B1qkZWS2.js";import"./ListItem-DQAnUC73.js";import"./listItemButtonClasses-DtmrCkrg.js";import"./ListItemIcon-CQTKb89_.js";import"./MenuItem-BXKyPNc4.js";import"./ListItemText-CpO6u0E_.js";import"./ArrowUpward-BVn2gAcj.js";import"./ContentCopy-BJCSqu3K.js";import"./FormControlLabel-h8bmr6Y_.js";import"./Checkbox-Db2xzulm.js";import"./SwitchBase-CB13ZOLZ.js";import"./FormGroup-BL1vJtir.js";import"./RadioGroup-DdSaXuWK.js";import"./Radio-CVDckbqi.js";import"./Slider-DFP0oT3-.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BPtNL54i.js";import"./DialogBase-B4OLAYCG.js";import"./Close-BcTGfgsy.js";import"./HelpPopover-BizYwA07.js";import"./MarkdownPopover-CLoC-k0L.js";import"./LightTooltip-pWgB8TwE.js";import"./MarkdownSynapse-CF0aiU3p.js";import"./SkeletonButton-BfImOAlj.js";import"./SkeletonInlineBlock-Dw1qUrgT.js";import"./SkeletonTable-CYuF7-ZU.js";import"./SkeletonParagraph-DI0oUi2H.js";import"./JsonSchemaForm-Cg8WpIxG.js";import"./GridLegacy-8b3AP-Ig.js";import"./HelpTwoTone-m1vcx_dM.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DSmp0AG2.js";import"./_createAggregator-C0fgzwxc.js";import"./_baseMap-DTuWLxma.js";import"./DateTimePicker-MSpkaa5A.js";import"./useMobilePicker-BA2S9AMu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BD5UIL3y.js";import"./index-DwgiIHef.js";import"./Chip-Cogs__Re.js";import"./Tabs-BQxv7HuZ.js";import"./KeyboardArrowRight-DOJaGB79.js";import"./Autocomplete-DqsVdWWS.js";import"./usePreviousProps-BWxil1ov.js";import"./use-deep-compare-effect.esm-C6KiqeQ4.js";import"./TextWidget-ChX2Yww7.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
