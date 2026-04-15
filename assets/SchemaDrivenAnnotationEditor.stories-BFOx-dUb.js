import{jw as p}from"./iframe-tHCTQw-h.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bn-ZnnEa.js";import"./index-Chi_LkuB.js";import"./useEntity-BMnF96Oz.js";import"./pickBy-C4losbkt.js";import"./isString-CWIHPDG7.js";import"./_baseIteratee-DN7s7tH5.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Cgi0zhhX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DGuyTZ_-.js";import"./useSchema-X08d2nm3.js";import"./index-0ZFxKGAe.js";import"./enums-Bcn04C6O.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DAAMDDtE.js";import"./uniq-Bzt5FkZt.js";import"./forEach-UWyboym_.js";import"./Add-B5FHYYq3.js";import"./Grid-CPdt3ktR.js";import"./ListItem-BLtAzaR2.js";import"./listItemButtonClasses-BiiA09ac.js";import"./ListItemIcon-BtgHaQj_.js";import"./MenuItem-EF7hTZ7c.js";import"./ListItemText-a8qbDexF.js";import"./ArrowUpward-CYNJVzDY.js";import"./ContentCopy-B5-771e_.js";import"./FormControlLabel-CsLV9TPO.js";import"./Checkbox-DrqmkyJE.js";import"./SwitchBase-D0KX-hor.js";import"./FormGroup-XysToauf.js";import"./RadioGroup-DW62PeyH.js";import"./Radio-CzmjFSUd.js";import"./Slider-DckXusny.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-C90g-TxX.js";import"./DialogBase-D_uLDI_-.js";import"./Close-Dj2GQFLf.js";import"./HelpPopover-BHHwi799.js";import"./MarkdownPopover-k7QQPJgm.js";import"./LightTooltip-Gqj5iP9g.js";import"./MarkdownSynapse-BjOJoB34.js";import"./SkeletonButton-COGIamRT.js";import"./SkeletonInlineBlock-BcgTDPGl.js";import"./SkeletonTable-DF9YBfOn.js";import"./SkeletonParagraph-ltGtfGmy.js";import"./JsonSchemaForm-BgfVMotx.js";import"./GridLegacy-SLr5D_5q.js";import"./HelpTwoTone-CON4x9hY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CoXoqGrR.js";import"./_createAggregator-BzI8BoOP.js";import"./_baseMap-DGvgkari.js";import"./DateTimePicker-Be71Jj8E.js";import"./useMobilePicker-CeFAwNb8.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CktD7me5.js";import"./index-BusyTjH4.js";import"./Chip-BPZys9eM.js";import"./Tabs-D1-AA6nT.js";import"./KeyboardArrowRight-CxKWkO-b.js";import"./Autocomplete-CvYO56jl.js";import"./usePreviousProps-DdRbQRXC.js";import"./use-deep-compare-effect.esm-BGzwUFo6.js";import"./TextWidget-C8zArg05.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
