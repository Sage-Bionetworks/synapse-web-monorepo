import{jv as p}from"./iframe-CDA0-aTC.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Cz5QiwFv.js";import"./index-Chi_LkuB.js";import"./useEntity-DzUnFneL.js";import"./pickBy-D2RejS2u.js";import"./isString-DryJE-g5.js";import"./_baseIteratee-CvzF7y63.js";import"./useInfiniteQuery-DxqH_ygE.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D7efdPpe.js";import"./useSchema-tna5cw7K.js";import"./index-DHgqIfG3.js";import"./enums-ClNJMPHe.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-M6TsrMn8.js";import"./uniq-BwP3as-X.js";import"./forEach-CWOCpBhE.js";import"./Add-DhzTgJ3x.js";import"./Grid-DPWyAXOo.js";import"./ListItem-CiCEFvG5.js";import"./listItemButtonClasses-Cl_Cj6sz.js";import"./ListItemIcon-CrNbI5-L.js";import"./MenuItem-D14RUsdm.js";import"./ListItemText-BQUNg_s_.js";import"./ArrowUpward-C7kNwGAX.js";import"./ContentCopy-Bn4qIWoy.js";import"./FormControlLabel-Bnc2UF74.js";import"./Checkbox-BuF5DqZv.js";import"./SwitchBase-CzJWdvEs.js";import"./FormGroup-DPp-Rj3s.js";import"./RadioGroup-_EXHk5Qc.js";import"./Radio-sJHS0GG6.js";import"./Slider-BsdGFyub.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BLrGR5e1.js";import"./DialogBase-BSeeM2-T.js";import"./Close-dI8UPeeO.js";import"./HelpPopover-CUD98UAA.js";import"./MarkdownPopover-eReN4x4q.js";import"./LightTooltip-T2fsq3mX.js";import"./MarkdownSynapse-D1PgnQma.js";import"./SkeletonButton-CyZvMjY_.js";import"./SkeletonInlineBlock-CP8CpyNB.js";import"./SkeletonTable-CTSMcV9b.js";import"./SkeletonParagraph-BVmBcN9J.js";import"./JsonSchemaForm-DhSPK3AR.js";import"./GridLegacy-BZc0gl5D.js";import"./HelpTwoTone-CW15XlOP.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CtZ_l9AA.js";import"./_createAggregator-C4i4sa4Q.js";import"./_baseMap-DXdLzEMj.js";import"./DateTimePicker-BwK1Pnjk.js";import"./useMobilePicker-B0PWubzD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CEDL7AxI.js";import"./index-Dm5gKV9A.js";import"./Chip-iqmVqxV9.js";import"./Tabs-Dy9u9Ejf.js";import"./KeyboardArrowRight-Codmme5H.js";import"./Autocomplete-Cvo04XUt.js";import"./usePreviousProps-D7ud0x9i.js";import"./use-deep-compare-effect.esm-CdqlNPw4.js";import"./TextWidget-C--BqVHi.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
