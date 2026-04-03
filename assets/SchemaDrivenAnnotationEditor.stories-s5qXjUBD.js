import{jw as p}from"./iframe-DvDPVyr3.js";import{S as a}from"./SchemaDrivenAnnotationEditor-iDdnhaAx.js";import"./index-Chi_LkuB.js";import"./useEntity-Bh24ZT11.js";import"./pickBy-kEll3AOM.js";import"./isString-C-LtdkHl.js";import"./_baseIteratee-DZhuazRW.js";import"./useInfiniteQuery-DWj8q4Ou.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-sb2T9JNK.js";import"./useSchema-B4cipC0N.js";import"./index-CZlpidE5.js";import"./enums-CLVPcZO1.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DlWazupd.js";import"./uniq-MrUNQ1ba.js";import"./forEach-UWyboym_.js";import"./Add-6AXVmJXi.js";import"./Grid-7B2QSBEP.js";import"./ListItem-h2kuWjMH.js";import"./listItemButtonClasses-Bw2THj84.js";import"./ListItemIcon-B4w26NSV.js";import"./MenuItem-Dbhxy3EU.js";import"./ListItemText-Cj1Xqtls.js";import"./ArrowUpward-Cnv8hIjT.js";import"./ContentCopy-CtURq5Wr.js";import"./FormControlLabel-D9Jvuq4Y.js";import"./Checkbox-F9Ku5hpR.js";import"./SwitchBase-DnKqddam.js";import"./FormGroup-pRaQDHMr.js";import"./RadioGroup-BT7m1XRU.js";import"./Radio-uitb1bFh.js";import"./Slider-BJ4t3l6Y.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-hJY-6MQc.js";import"./DialogBase-J8iZt42d.js";import"./Close-Dl87lOTy.js";import"./HelpPopover-B9l6QfUy.js";import"./MarkdownPopover-1Vxonhz2.js";import"./LightTooltip-A87-OJtX.js";import"./MarkdownSynapse-CFI-ggll.js";import"./SkeletonButton-ChNWGaeP.js";import"./SkeletonInlineBlock-DTOZhiyP.js";import"./SkeletonTable-0fE1v7Jp.js";import"./SkeletonParagraph-C4mex8S5.js";import"./JsonSchemaForm-CKT4OtDA.js";import"./GridLegacy-Bc37lRtQ.js";import"./HelpTwoTone-ZXaznWx4.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CYIs4_uR.js";import"./_createAggregator-CayUNsm1.js";import"./_baseMap-DyGl9fGh.js";import"./DateTimePicker-DsSk4S6e.js";import"./useMobilePicker-DkK_bQzz.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Pz2jkrRk.js";import"./index-Cd-T-abm.js";import"./Chip-YSiJYC5a.js";import"./Tabs-DuEn23wO.js";import"./KeyboardArrowRight-CqoGc7xp.js";import"./Autocomplete-pax_CLk5.js";import"./usePreviousProps-BDKffoJB.js";import"./use-deep-compare-effect.esm-C1NR3X0K.js";import"./TextWidget-khFdP8dE.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
