import{jx as p}from"./iframe-DUQkn8iF.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BhCdJa7Q.js";import"./index-Chi_LkuB.js";import"./useEntity-D9gWIZh7.js";import"./pickBy-B9rR59or.js";import"./isString-BOS38vV6.js";import"./_baseIteratee-Cqjf8tEo.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CSxua8m4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-YPkIJS9i.js";import"./useSchema-C4DR0R_p.js";import"./index-B7BozlE1.js";import"./enums-DbouxGEo.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-yRpYmG1y.js";import"./uniq-Cr4YV9i4.js";import"./forEach-UWyboym_.js";import"./Add-DRbEwcZx.js";import"./Grid-BtW5NgRp.js";import"./ListItem-CJtum1E6.js";import"./listItemButtonClasses-D9mub51c.js";import"./ListItemIcon-C0Wi7Kya.js";import"./MenuItem-BPgUr9lg.js";import"./ListItemText-_g5I71bf.js";import"./ArrowUpward-DzN88Nta.js";import"./ContentCopy-X3aMDI0L.js";import"./FormControlLabel-ULAaK-Wz.js";import"./Checkbox-C83dxoX4.js";import"./SwitchBase-DmNt2wvQ.js";import"./FormGroup-HdN5_xk5.js";import"./RadioGroup-Dxu2ThVx.js";import"./Radio-B5nBcyaG.js";import"./Slider-CeVQz466.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-56MHZonu.js";import"./DialogBase-Bjwp1F6F.js";import"./Close-CoWf9EwA.js";import"./HelpPopover-O-SP5MD7.js";import"./MarkdownPopover-BqXoJ5YF.js";import"./LightTooltip-D6czb-Qe.js";import"./MarkdownSynapse-Dmjjzt7C.js";import"./SkeletonButton-COaCvHBG.js";import"./SkeletonInlineBlock-S0DMpc3c.js";import"./SkeletonTable-Dx_jF5OF.js";import"./SkeletonParagraph-BzReNLH2.js";import"./JsonSchemaForm-0lm5vXwp.js";import"./GridLegacy-Cg0009Ru.js";import"./HelpTwoTone-DaSD_qls.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dfx7mIYC.js";import"./_createAggregator-CYIf0Ydm.js";import"./_baseMap-xCllNzhN.js";import"./DateTimePicker-7l4CbUxB.js";import"./useMobilePicker-DM4tIIZL.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DLNyfFZu.js";import"./index-B-0M8h1t.js";import"./Chip-DTXJglpB.js";import"./Tabs-C-Kdc5i7.js";import"./KeyboardArrowRight-CSJwPPR7.js";import"./Autocomplete-DLb05X2b.js";import"./usePreviousProps-Dv-jr2T7.js";import"./use-deep-compare-effect.esm-947pfh6g.js";import"./TextWidget-8OSmjD7G.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
