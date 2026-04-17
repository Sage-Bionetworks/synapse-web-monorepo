import{jx as p}from"./iframe-DIHutOM2.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DVIxAFjJ.js";import"./index-Chi_LkuB.js";import"./useEntity-BCd96Fuo.js";import"./pickBy-BK1o06LF.js";import"./isString-BaD9IBlG.js";import"./_baseIteratee-D2BaxFYK.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DBeYwuV2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DXUioZpw.js";import"./useSchema-CO4ZcpFQ.js";import"./index-B3MpaTMY.js";import"./enums-CztbxKjU.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-USEntf0G.js";import"./uniq-CVeN1MXW.js";import"./forEach-UWyboym_.js";import"./Add-Dh1crLy0.js";import"./Grid-BawCSdC7.js";import"./ListItem-DR_bYojC.js";import"./listItemButtonClasses-4A0QUsPX.js";import"./ListItemIcon-ODsS5YY0.js";import"./MenuItem-DK0615By.js";import"./ListItemText-C2kRwM7m.js";import"./ArrowUpward-IQJWQi-N.js";import"./ContentCopy-BUYLf4KM.js";import"./FormControlLabel-D-4Nscdf.js";import"./Checkbox-BUXxhWF5.js";import"./SwitchBase-GpXGIWUe.js";import"./FormGroup-CsaqhiB_.js";import"./RadioGroup-YxUeEFrK.js";import"./Radio-CDYPZbnQ.js";import"./Slider-DJAZRFO9.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-PWqiGP-s.js";import"./DialogBase-BFJUh7rx.js";import"./Close-66Wa0jNb.js";import"./HelpPopover-Em0_eBy5.js";import"./MarkdownPopover-WQLNFQ0C.js";import"./LightTooltip-BMq0VrbL.js";import"./MarkdownSynapse-8m84fN3d.js";import"./SkeletonButton-zFoMoYHg.js";import"./SkeletonInlineBlock-CxHTYkDw.js";import"./SkeletonTable-C4N-t1H3.js";import"./SkeletonParagraph-BIGOfadt.js";import"./JsonSchemaForm-6Y6PjRzo.js";import"./GridLegacy-gZW-03Q_.js";import"./HelpTwoTone-COpfR36N.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-2h8zIF--.js";import"./_createAggregator-C14bRRWs.js";import"./_baseMap-BVRhLcGM.js";import"./DateTimePicker-Cl1DrFjD.js";import"./useMobilePicker-9vvD9uRi.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BViqjaeh.js";import"./index-C9LEM1Gs.js";import"./Chip-BE1NWb4W.js";import"./Tabs-BCHhuIgC.js";import"./KeyboardArrowRight-C384hWSS.js";import"./Autocomplete-g8wVyTFT.js";import"./usePreviousProps-DeB1hVtp.js";import"./use-deep-compare-effect.esm-CT6MFhpq.js";import"./TextWidget-D5-Hy4z8.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
