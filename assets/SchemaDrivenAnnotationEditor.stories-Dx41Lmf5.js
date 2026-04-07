import{jw as p}from"./iframe-p1uXGzN2.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BjoF3308.js";import"./index-Chi_LkuB.js";import"./useEntity-_QjOZ_u8.js";import"./pickBy-DFCfhoBP.js";import"./isString-FmH_jacF.js";import"./_baseIteratee-CIctm2fK.js";import"./useInfiniteQuery-DTskVG3G.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-IpobdzlG.js";import"./useSchema-CPLbAPaL.js";import"./index-CKptfar7.js";import"./enums-BKcs_BPO.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BJaCKh2_.js";import"./uniq-DJjk0Efu.js";import"./forEach-UWyboym_.js";import"./Add-CkTBITbY.js";import"./Grid-BM8P1l0M.js";import"./ListItem-CRnLhEQR.js";import"./listItemButtonClasses-B3WjABaF.js";import"./ListItemIcon-CcJ-0M-Y.js";import"./MenuItem-CvsWYU-W.js";import"./ListItemText-rNvXeukn.js";import"./ArrowUpward-CN1tix04.js";import"./ContentCopy-BCmaD-hK.js";import"./FormControlLabel-BR7dDpyV.js";import"./Checkbox-Dr9iAAR2.js";import"./SwitchBase-CaT_nPZV.js";import"./FormGroup-sBnWoHaQ.js";import"./RadioGroup-CnRjRV1z.js";import"./Radio-DGZ43C8v.js";import"./Slider-BfZptYZy.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DZOX2IVv.js";import"./DialogBase-C28ovCoY.js";import"./Close-3JlU0mJd.js";import"./HelpPopover-CijXRCXX.js";import"./MarkdownPopover-JkjhCwra.js";import"./LightTooltip-QHB5I4_E.js";import"./MarkdownSynapse-CKFbJzqU.js";import"./SkeletonButton-DFboq54i.js";import"./SkeletonInlineBlock-Bg4QuJBO.js";import"./SkeletonTable-DxscU1yp.js";import"./SkeletonParagraph-D9GGG1Tt.js";import"./JsonSchemaForm-D4CgoTOD.js";import"./GridLegacy-P_rRpgsD.js";import"./HelpTwoTone-C8ySmcK7.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DgSAKG77.js";import"./_createAggregator-ClzMZ_G5.js";import"./_baseMap-CyND8cEz.js";import"./DateTimePicker-KtPqvAg_.js";import"./useMobilePicker-Dzu5TRjD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CUuCNrwC.js";import"./index-B5EXqrid.js";import"./Chip-D-yl_WD6.js";import"./Tabs-C191ocAy.js";import"./KeyboardArrowRight-WQJJSgvT.js";import"./Autocomplete-DDVyrGPS.js";import"./usePreviousProps-DkgZ2N9x.js";import"./use-deep-compare-effect.esm-BF5Zalnt.js";import"./TextWidget-DgO49qQf.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
