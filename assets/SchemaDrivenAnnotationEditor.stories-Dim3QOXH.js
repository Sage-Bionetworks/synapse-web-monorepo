import{jx as p}from"./iframe-CztmM481.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CWSQx3lh.js";import"./index-Chi_LkuB.js";import"./useEntity-A-3QMXxp.js";import"./pickBy-isJqX3u9.js";import"./isString-_o4-xKLg.js";import"./_baseIteratee-C79TkaLa.js";import"./useInfiniteQuery-CMUwdvwB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DcUEGPWD.js";import"./useSchema-Cz26iiVk.js";import"./index-BiHKbWYu.js";import"./enums-CuQvb3eX.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CNX5zfrb.js";import"./uniq-DMlkKil5.js";import"./forEach-CWOCpBhE.js";import"./Add-CYfOgyPv.js";import"./Grid-BIQeSlL_.js";import"./ListItem-DhrCvYJE.js";import"./listItemButtonClasses-BRLZOxuP.js";import"./ListItemIcon-DtBsEEJu.js";import"./MenuItem-DhY-eVIi.js";import"./ListItemText-CeCfYB74.js";import"./ArrowUpward-q_LOiELu.js";import"./ContentCopy-CNO_y6ra.js";import"./FormControlLabel-qKrq3Bnz.js";import"./Checkbox-BBO2iwio.js";import"./SwitchBase-BegMbA4f.js";import"./FormGroup-C31UciNh.js";import"./RadioGroup-BI0TC0Ax.js";import"./Radio-cnrSFFCi.js";import"./Slider-DNXPcfqg.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CRTgjSct.js";import"./DialogBase-DuknWYoH.js";import"./Close-DsRX1MCV.js";import"./HelpPopover-DvC80QRo.js";import"./MarkdownPopover-eu3zF-im.js";import"./LightTooltip-BA9BIuJJ.js";import"./MarkdownSynapse-B_NDi4bv.js";import"./SkeletonButton-BWr_w7rt.js";import"./SkeletonInlineBlock-BafzGMgM.js";import"./SkeletonTable-D62IODcw.js";import"./SkeletonParagraph-RQGRwxXl.js";import"./JsonSchemaForm-Bta9TTp9.js";import"./GridLegacy-DM8eMh2_.js";import"./HelpTwoTone-CkxPeGag.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CLxSeE4h.js";import"./_createAggregator-CIqbz8qj.js";import"./_baseMap-BmOpwIc1.js";import"./DateTimePicker-D-vh1ng4.js";import"./useMobilePicker-BQGoBpf9.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-i9iwPlM9.js";import"./index-D4zvspUx.js";import"./Chip-CpQHwqZu.js";import"./Tabs-BN7jXhsq.js";import"./KeyboardArrowRight-BtA-LDXD.js";import"./Autocomplete-CCL-y90Q.js";import"./usePreviousProps-piPUdNFL.js";import"./use-deep-compare-effect.esm-BSBdlWy4.js";import"./TextWidget-BHwis9XB.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
