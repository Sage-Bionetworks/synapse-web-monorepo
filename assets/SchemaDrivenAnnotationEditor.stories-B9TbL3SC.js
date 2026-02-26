import{ju as p}from"./iframe-CZFJJ8mF.js";import{S as a}from"./SchemaDrivenAnnotationEditor-uN7LD89-.js";import"./index-Chi_LkuB.js";import"./useEntity-adVF4VGo.js";import"./pickBy-CgyhEFoJ.js";import"./isString-C9vid2vV.js";import"./_baseIteratee-rX9r8SJC.js";import"./useInfiniteQuery-kARObAi9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CoaMPWn6.js";import"./useSchema-cvmttbBT.js";import"./index-Cn7ZHoHL.js";import"./enums-AxUjpTF7.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-m_YP-tTO.js";import"./uniq-DmKKWqRk.js";import"./forEach-CWOCpBhE.js";import"./Add-uXeoa-8G.js";import"./Grid-B-_g8vQZ.js";import"./ListItem-DQvd6W6q.js";import"./listItemButtonClasses-B4WhvPvv.js";import"./ListItemIcon-BS7NaoJN.js";import"./MenuItem-DISZCm2g.js";import"./ListItemText-CNWjPr7o.js";import"./ArrowUpward-BDWFdwT0.js";import"./ContentCopy-BR1olanO.js";import"./FormControlLabel-BNgfCzjp.js";import"./Checkbox-DFX9Y3-H.js";import"./SwitchBase-BoCiOYwh.js";import"./FormGroup-DbUj_wjG.js";import"./RadioGroup-CtlMFrCJ.js";import"./Radio-XYR_SPYE.js";import"./Slider-BqJ1tVQa.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CGBNjPCW.js";import"./DialogBase-DDBsPCb6.js";import"./Close-wucZufu-.js";import"./HelpPopover-C73Dk8f0.js";import"./MarkdownPopover-By4CdHrM.js";import"./LightTooltip-DVNwweRq.js";import"./MarkdownSynapse-E3IF_o1S.js";import"./SkeletonButton-1FI8gwoL.js";import"./SkeletonInlineBlock-CK8FFc-3.js";import"./SkeletonTable-Q3nUli7s.js";import"./SkeletonParagraph-DvXQwRCq.js";import"./JsonSchemaForm-AYRP4jt0.js";import"./GridLegacy-X15tgaJk.js";import"./HelpTwoTone-D5fjW9sK.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CPVR9Ku1.js";import"./_createAggregator-CVJq-d0C.js";import"./_baseMap-CqAkTHGS.js";import"./DateTimePicker-awZv2EGB.js";import"./useMobilePicker-nOYPlyO2.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BLXlr0JA.js";import"./index-DHCSsY1o.js";import"./Chip-BSOTX2SF.js";import"./Tabs-BuFKobXH.js";import"./KeyboardArrowRight-kcGw3obp.js";import"./Autocomplete-CwCaBCec.js";import"./usePreviousProps-Cn7ImRUu.js";import"./use-deep-compare-effect.esm-fzmHI-m-.js";import"./TextWidget-JW1PobPz.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
