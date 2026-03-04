import{ju as p}from"./iframe-BoxuKy9E.js";import{S as a}from"./SchemaDrivenAnnotationEditor-MMubkdiM.js";import"./index-Chi_LkuB.js";import"./useEntity-DZwAKLC3.js";import"./pickBy-CU-qiH3K.js";import"./isString-cGe6Knce.js";import"./_baseIteratee-DjnxVzYp.js";import"./useInfiniteQuery-BcQtjXyf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BedGSkPc.js";import"./useSchema-Bw2edSjj.js";import"./index-By5A4SJz.js";import"./enums-BPAcbw6K.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D_05QTIw.js";import"./uniq-8qCqnpBT.js";import"./forEach-CWOCpBhE.js";import"./Add-BSrlSztu.js";import"./Grid-gldVkERl.js";import"./ListItem-Cy5KTyCf.js";import"./listItemButtonClasses-CvbEJXfZ.js";import"./ListItemIcon-DCkuU0x5.js";import"./MenuItem-BGU-QKhy.js";import"./ListItemText-DE9Q_r4r.js";import"./ArrowUpward-BtUDiVDL.js";import"./ContentCopy-BlO4IZWe.js";import"./FormControlLabel-Ba5VS2KY.js";import"./Checkbox-Crz05bF2.js";import"./SwitchBase-DQ2FRVZS.js";import"./FormGroup-BxKkDOAB.js";import"./RadioGroup-DGG00gjv.js";import"./Radio-DjmiLLEp.js";import"./Slider-Dw8SzXrS.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CIPv0_VW.js";import"./DialogBase-D71Bzuhw.js";import"./Close-D2FDtn_Z.js";import"./HelpPopover-D7Iu88Kq.js";import"./MarkdownPopover-4O8M2I8a.js";import"./LightTooltip-DwenlRx7.js";import"./MarkdownSynapse-CBVUbKcu.js";import"./SkeletonButton-BIE6flyK.js";import"./SkeletonInlineBlock-BI06okMA.js";import"./SkeletonTable-BDD50YXU.js";import"./SkeletonParagraph-Cla7VaV-.js";import"./JsonSchemaForm-dRKCpLyo.js";import"./GridLegacy-CSFRqASR.js";import"./HelpTwoTone-vw0Os_a7.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DTc3ytOl.js";import"./_createAggregator-BxawsJms.js";import"./_baseMap-n6KAJL3v.js";import"./DateTimePicker-CHq9R1d3.js";import"./useMobilePicker-BoFe608H.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CH6yibTW.js";import"./index-Log0dJvg.js";import"./Chip-BVijHoac.js";import"./Tabs-CvRzR1jM.js";import"./KeyboardArrowRight-B6Y-_urw.js";import"./Autocomplete-DlgJuJ_r.js";import"./usePreviousProps-B0CusuoT.js";import"./use-deep-compare-effect.esm-BUxnnlx1.js";import"./TextWidget-BLjUzggO.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
