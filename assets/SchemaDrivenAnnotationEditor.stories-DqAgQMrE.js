import{jx as p}from"./iframe-DW4EtDFR.js";import{S as a}from"./SchemaDrivenAnnotationEditor-ojVoPgL5.js";import"./index-Chi_LkuB.js";import"./useEntity-Br6tMZiC.js";import"./pickBy-DLXoSZ5t.js";import"./isString-BpTDfkdd.js";import"./_baseIteratee-B5nmCdgY.js";import"./useInfiniteQuery-ZPKFav0H.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CgWKW-Dr.js";import"./useSchema-CGCd5Nah.js";import"./index-BeuYiPDi.js";import"./enums-Ba9oSUiY.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DJgCo8iQ.js";import"./uniq-BIBkykeI.js";import"./forEach-UWyboym_.js";import"./Add-BUdJsDEt.js";import"./Grid-Behu8C3L.js";import"./ListItem-BVKcch1j.js";import"./listItemButtonClasses-B4kVsD_z.js";import"./ListItemIcon-t93SLk6C.js";import"./MenuItem-Cc9sDD7i.js";import"./ListItemText-BuvR7J7b.js";import"./ArrowUpward-CevzEGvr.js";import"./ContentCopy-2zLqXnMp.js";import"./FormControlLabel-D6ErXhmT.js";import"./Checkbox-DrHdzPHL.js";import"./SwitchBase-DzaBh5YX.js";import"./FormGroup-DdOV-hoL.js";import"./RadioGroup-CkA35aY6.js";import"./Radio-Hm72npc_.js";import"./Slider-BZowbISy.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BP8fvy3x.js";import"./DialogBase-CQkYTY7H.js";import"./Close-_nKTpQqj.js";import"./HelpPopover-BJUnqSJY.js";import"./MarkdownPopover-Ddkoqa14.js";import"./LightTooltip-RHqCPVzc.js";import"./MarkdownSynapse-BRThLhl9.js";import"./SkeletonButton-DsCjZbv1.js";import"./SkeletonInlineBlock-ItfWjoQ8.js";import"./SkeletonTable-ItfNMNmd.js";import"./SkeletonParagraph-B74Z-tR5.js";import"./JsonSchemaForm-0No6CePZ.js";import"./GridLegacy-B5TSzA3p.js";import"./HelpTwoTone-BZwunopJ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Ce682toM.js";import"./_createAggregator-CqC-U3qF.js";import"./_baseMap-j4TtnkBh.js";import"./DateTimePicker-B0KdPZHc.js";import"./useMobilePicker-BmsKiSrJ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BsMfFUpI.js";import"./index-BLzBB5Yr.js";import"./Chip-CUP-lTls.js";import"./Tabs-DQKqRaXx.js";import"./KeyboardArrowRight-BJe4jy28.js";import"./Autocomplete-Cqyov7nf.js";import"./usePreviousProps-2W2UBLJ8.js";import"./use-deep-compare-effect.esm-D866EjLt.js";import"./TextWidget-AgAp5h8f.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
