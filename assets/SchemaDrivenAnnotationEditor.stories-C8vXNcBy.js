import{jx as p}from"./iframe-Bd48Phhx.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CUn5zmCZ.js";import"./index-Chi_LkuB.js";import"./useEntity-xQcJ_DrW.js";import"./pickBy-CObcCQ8L.js";import"./isString-DP_DVEPW.js";import"./_baseIteratee-FIlUPYy6.js";import"./useInfiniteQuery-lMwdmXJ9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Csn_jgox.js";import"./useSchema-DiJmko1j.js";import"./index-NOxQyLqt.js";import"./enums-lrhuhatL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Ca-EIFRq.js";import"./uniq-rWVkPxbm.js";import"./forEach-CWOCpBhE.js";import"./Add-BpTBxYzi.js";import"./Grid-CZFhBtEB.js";import"./ListItem-BeCgj5OR.js";import"./listItemButtonClasses-BC6zKoHv.js";import"./ListItemIcon-CsC5JjnT.js";import"./MenuItem-CNJlFnXk.js";import"./ListItemText-DtTsfX_c.js";import"./ArrowUpward-CE4sZfh_.js";import"./ContentCopy-BjG1ZMDj.js";import"./FormControlLabel-DNMuLHGQ.js";import"./Checkbox-CN0utVK2.js";import"./SwitchBase-CYkmB97X.js";import"./FormGroup-D-Iny7SE.js";import"./RadioGroup-Bk3_y20C.js";import"./Radio-BeQ_e96D.js";import"./Slider-D9kFq4PF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D4Di_An5.js";import"./DialogBase-DJeR-4bo.js";import"./Close-DEayXyHI.js";import"./HelpPopover-DCI79EJV.js";import"./MarkdownPopover-BdpxecKY.js";import"./LightTooltip-Baq7jYr-.js";import"./MarkdownSynapse-BQCReIPi.js";import"./SkeletonButton-yGLAaBDC.js";import"./SkeletonInlineBlock-BSKjVSEt.js";import"./SkeletonTable-DPwFQSrG.js";import"./SkeletonParagraph-keiL0wvn.js";import"./JsonSchemaForm-C0yKBrZA.js";import"./GridLegacy-CuORgUOL.js";import"./HelpTwoTone-C-vtiPbz.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DfInkdDG.js";import"./_createAggregator-CBSUHK6L.js";import"./_baseMap-BKdhkoLq.js";import"./DateTimePicker-CPi9klKJ.js";import"./useMobilePicker-B1BfFB8f.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DfkNQN2o.js";import"./index-4gXpW4bf.js";import"./Chip-Cnnt6mV5.js";import"./Tabs-DHaLbeaK.js";import"./KeyboardArrowRight-D_zxrOmf.js";import"./Autocomplete-B5YDxn9l.js";import"./usePreviousProps-De12wuEN.js";import"./use-deep-compare-effect.esm-Bh2RpSBo.js";import"./TextWidget-APu-UbQQ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
