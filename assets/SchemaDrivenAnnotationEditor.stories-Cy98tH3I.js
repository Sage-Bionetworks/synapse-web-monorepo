import{jw as p}from"./iframe-CtEx53-_.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bo9dpMXD.js";import"./index-Chi_LkuB.js";import"./useEntity-CF7ht95y.js";import"./pickBy-dY2VI2H0.js";import"./isString-BOcPC5Uo.js";import"./_baseIteratee-DFplgjax.js";import"./useInfiniteQuery-Btk7RS4S.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BMtGOipm.js";import"./useSchema-C5ePxXWZ.js";import"./index-ven36m_h.js";import"./enums-DmCcQw-A.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-HWQ9n9Hl.js";import"./uniq-kuerPv1f.js";import"./forEach-UWyboym_.js";import"./Add-Cc40COzj.js";import"./Grid-Dx2Bd5oi.js";import"./ListItem-BLzejjV0.js";import"./listItemButtonClasses-CYdXg08h.js";import"./ListItemIcon-Cqf360St.js";import"./MenuItem-FhFL09-C.js";import"./ListItemText-CmwF9ReV.js";import"./ArrowUpward-E1Wo11SL.js";import"./ContentCopy-Do3AecBl.js";import"./FormControlLabel-CkOhorz7.js";import"./Checkbox-OtBfanQo.js";import"./SwitchBase-BK1TFQJS.js";import"./FormGroup-CW8hnT3G.js";import"./RadioGroup-Dlh87QOv.js";import"./Radio-DBSQJCbQ.js";import"./Slider-BFoLg2D1.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D10OfoxA.js";import"./DialogBase-ChLejIKB.js";import"./Close-DYbs631P.js";import"./HelpPopover-DPQexwMD.js";import"./MarkdownPopover-D5Nx0R4H.js";import"./LightTooltip-Ceq6WBqp.js";import"./MarkdownSynapse-DIm3O9Y2.js";import"./SkeletonButton-BxJCEkFM.js";import"./SkeletonInlineBlock-CUTClj5h.js";import"./SkeletonTable-DXr3KoSK.js";import"./SkeletonParagraph-B7Iue5Hi.js";import"./JsonSchemaForm-C0CeolW9.js";import"./GridLegacy-IrN3TlmF.js";import"./HelpTwoTone-CER7pblL.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D9Sk8qsj.js";import"./_createAggregator-C-c6nyOe.js";import"./_baseMap-CjZW9z3J.js";import"./DateTimePicker-DCQRoaPc.js";import"./useMobilePicker-CgBz4_uz.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BUDwCpRQ.js";import"./index-rzZ2fsR5.js";import"./Chip-DZZXMgyG.js";import"./Tabs-Bqhhs8W4.js";import"./KeyboardArrowRight-DYjrqIxA.js";import"./Autocomplete-CgP-x_Uf.js";import"./usePreviousProps-BB8cbwq6.js";import"./use-deep-compare-effect.esm-BNXNntfe.js";import"./TextWidget-CJVKjzCB.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
