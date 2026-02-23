import{jG as p}from"./iframe-bA05VlDB.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BjdT4gGo.js";import"./index-Chi_LkuB.js";import"./useEntity-Du7tQbIa.js";import"./pickBy-D1zq0sET.js";import"./isString-KkRYkgd4.js";import"./_baseIteratee-DKY1oxMw.js";import"./useQueries-CiWEfBA0.js";import"./useSuspenseQuery-Zel5Xy26.js";import"./useInfiniteQuery-DI02BS_t.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bc6HNNyS.js";import"./useSchema-C4-_zzDT.js";import"./index-BkZLahx3.js";import"./enums-zFAlrHX6.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bswgqtar.js";import"./uniq-O_fF4dYA.js";import"./forEach-CWOCpBhE.js";import"./Add-CFafiVtY.js";import"./Grid-B7LF-N5n.js";import"./ListItem-CINv7iyl.js";import"./listItemButtonClasses-DHhqHtAw.js";import"./ListItemIcon-lTFTRyd8.js";import"./MenuItem-DFGunzbN.js";import"./ListItemText-gzESO6ht.js";import"./ArrowUpward-JlCor-jF.js";import"./ContentCopy-Bc6JVXFX.js";import"./FormControlLabel-DX3N0jTL.js";import"./Checkbox-C0VleB4d.js";import"./SwitchBase-Vd-LEtt0.js";import"./FormGroup-r8gixf7g.js";import"./RadioGroup-BGBsHj3Z.js";import"./Radio-Dno-KH9E.js";import"./Slider-BT-72wAH.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-C0bbEsUc.js";import"./DialogBase-vddOc5dA.js";import"./Close-BgXrYz09.js";import"./HelpPopover-BzTlr5XD.js";import"./MarkdownPopover-B1EOARnN.js";import"./LightTooltip-Blh-KN0r.js";import"./MarkdownSynapse-BUlv3hnh.js";import"./SkeletonButton-D2qH20IX.js";import"./SkeletonInlineBlock-D2v7KJSi.js";import"./SkeletonTable-C3k8u3nb.js";import"./SkeletonParagraph-DlcYTizK.js";import"./JsonSchemaForm-COCjBFMg.js";import"./GridLegacy-DdQGVQvV.js";import"./HelpTwoTone-Cdt15XIp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B_fkWuBJ.js";import"./_createAggregator-BBB9TMhq.js";import"./_baseMap-BItPc330.js";import"./DateTimePicker-BVaP_t0_.js";import"./useMobilePicker-BvXyvak8.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DDPop6eJ.js";import"./index-C4a7Rce_.js";import"./Chip-vyXQw8tV.js";import"./Tabs-DWxN9EV-.js";import"./KeyboardArrowRight-DF5BrjGd.js";import"./Autocomplete-15APkzEL.js";import"./usePreviousProps-DIAbQ4jC.js";import"./use-deep-compare-effect.esm-COh4b0Y0.js";import"./TextWidget-Do18IR_L.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
