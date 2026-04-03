import{jw as p}from"./iframe-BwdMKcfW.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CmdYubAe.js";import"./index-Chi_LkuB.js";import"./useEntity-C9ozPcxe.js";import"./pickBy-HOJozbd1.js";import"./isString-Am2EKcP0.js";import"./_baseIteratee-VD_UmMwY.js";import"./useInfiniteQuery-BjFBPSmE.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BAmhWJtF.js";import"./useSchema-bfjVYN1n.js";import"./index-Dg1GVZy_.js";import"./enums-CChH0gn9.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-e-P7ukc6.js";import"./uniq-Ce9I-kAz.js";import"./forEach-UWyboym_.js";import"./Add-BTIB3_eN.js";import"./Grid-BDNOy2GH.js";import"./ListItem-Ck_v3OcO.js";import"./listItemButtonClasses-BI3ECPfO.js";import"./ListItemIcon-Jlu1uNc1.js";import"./MenuItem-DnEBuXas.js";import"./ListItemText-DBYTbssG.js";import"./ArrowUpward-DkPGEEBv.js";import"./ContentCopy-DnLe17Q3.js";import"./FormControlLabel-BnBiSy9D.js";import"./Checkbox-CzvQeSJ4.js";import"./SwitchBase-B1boux3R.js";import"./FormGroup-PMg690LC.js";import"./RadioGroup-B9zXu6Gg.js";import"./Radio-Bko6O33i.js";import"./Slider--meWHp1B.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-EESVjpz0.js";import"./DialogBase-BFX7NXuk.js";import"./Close-CCUUydcy.js";import"./HelpPopover-CYbiM6iC.js";import"./MarkdownPopover-DR3WgxmO.js";import"./LightTooltip-C5q6jm3B.js";import"./MarkdownSynapse-N8osBNe-.js";import"./SkeletonButton-DUX7R0sB.js";import"./SkeletonInlineBlock-CGQ5Gfg-.js";import"./SkeletonTable-O-mI3Ojq.js";import"./SkeletonParagraph-CepsPnNp.js";import"./JsonSchemaForm-C9a2_VhN.js";import"./GridLegacy-D8qmmgN6.js";import"./HelpTwoTone-DCxkEG5R.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D0PcZ0TB.js";import"./_createAggregator-CSp8A1mF.js";import"./_baseMap-CCHmg080.js";import"./DateTimePicker-DgdQfZuw.js";import"./useMobilePicker-CZcAoAQP.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D2f6qeZk.js";import"./index-DPZa-GBy.js";import"./Chip-CdEMn9W3.js";import"./Tabs-dqlDK765.js";import"./KeyboardArrowRight-BuC6OtNy.js";import"./Autocomplete-Cj8_Qp3g.js";import"./usePreviousProps-Bo7rFF-f.js";import"./use-deep-compare-effect.esm-CcXv01UP.js";import"./TextWidget-BLLDMTUS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
