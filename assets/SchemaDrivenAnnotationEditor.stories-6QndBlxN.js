import{jw as p}from"./iframe-xuGDYskk.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CI236dDF.js";import"./index-Chi_LkuB.js";import"./useEntity-ByEgwqck.js";import"./pickBy-BQpz9394.js";import"./isString-BHpzOOw-.js";import"./_baseIteratee-DoirJgef.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DjTbIVFH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0Ki_Pmb.js";import"./useSchema-gpgMFrmt.js";import"./index-DxJerw_5.js";import"./enums-BzsWVbZJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DVo5fh0p.js";import"./uniq-CDqS7iN1.js";import"./forEach-UWyboym_.js";import"./Add-DkVz2Ki8.js";import"./Grid-OGEpIkgy.js";import"./ListItem-wbeJVpNQ.js";import"./listItemButtonClasses-DhUDG0R8.js";import"./ListItemIcon-DvP01NcM.js";import"./MenuItem-D1rBKZNi.js";import"./ListItemText-B8J0wMdj.js";import"./ArrowUpward-DkSYP460.js";import"./ContentCopy-D4w1A4Ik.js";import"./FormControlLabel-7w8AtTFx.js";import"./Checkbox-C5w0MlgT.js";import"./SwitchBase-BP58HNZ_.js";import"./FormGroup-CRthPRcs.js";import"./RadioGroup-hTe9OBOh.js";import"./Radio-Cli6fZqq.js";import"./Slider-ReTw3zO-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CeVmcrd5.js";import"./DialogBase-D_8BDBtZ.js";import"./Close-DW9kzD-X.js";import"./HelpPopover-w8ni5A6U.js";import"./MarkdownPopover-DTgCpJv6.js";import"./LightTooltip-lMMHMay2.js";import"./MarkdownSynapse-Dqj1e4cl.js";import"./SkeletonButton-Ba2syrHs.js";import"./SkeletonInlineBlock-CuJjaS51.js";import"./SkeletonTable-Bn51DOnQ.js";import"./SkeletonParagraph-BP-szXpV.js";import"./JsonSchemaForm-BMaxfxlu.js";import"./GridLegacy-DwzVG0QL.js";import"./HelpTwoTone-2BYTaZ7y.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bw-a7wd-.js";import"./_createAggregator-BZF2rNOh.js";import"./_baseMap-DnYKem1g.js";import"./DateTimePicker--NBZ33dL.js";import"./useMobilePicker-Bya3Gpvs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D4HCwoEr.js";import"./index-D8fOn0Se.js";import"./Chip-Ckkk-5JS.js";import"./Tabs-xp6AEFcu.js";import"./KeyboardArrowRight-DqzKYgWG.js";import"./Autocomplete-DuOgffOl.js";import"./usePreviousProps-CRWTbO4u.js";import"./use-deep-compare-effect.esm-Dn_ioGDP.js";import"./TextWidget-iGWJ-r0W.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
