import{jx as p}from"./iframe-la5pZNJP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DreTXUEV.js";import"./index-Chi_LkuB.js";import"./useEntity-BJpfmtiF.js";import"./pickBy-CcboS4Gj.js";import"./isString-CtRZEzAY.js";import"./_baseIteratee-loK_i9sZ.js";import"./useInfiniteQuery-Dw0hPYtP.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CTgXnld5.js";import"./useSchema-BInfioQa.js";import"./index-DCe2yL92.js";import"./enums-Ddqc41N5.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BRlYnKbM.js";import"./uniq-QS0U86Je.js";import"./forEach-CWOCpBhE.js";import"./Add-CshgjXAB.js";import"./Grid-DjVp0Bgc.js";import"./ListItem-DhHBcsGE.js";import"./listItemButtonClasses-DE4u_cVy.js";import"./ListItemIcon-B6UioQwr.js";import"./MenuItem-fdQnDEWw.js";import"./ListItemText-BjApTZix.js";import"./ArrowUpward-MIN8H5cq.js";import"./ContentCopy-C5KfMru5.js";import"./FormControlLabel-CVRDyRA_.js";import"./Checkbox-DN48LJpB.js";import"./SwitchBase-DY2uxlHH.js";import"./FormGroup-fEInt5zo.js";import"./RadioGroup-UlYg9k6D.js";import"./Radio-DVnIpC9I.js";import"./Slider-DDYes1i7.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BYOqzzUy.js";import"./DialogBase-CC3Fom-D.js";import"./Close-CPzKBjYo.js";import"./HelpPopover-BinEOj-x.js";import"./MarkdownPopover-DWH2OeX9.js";import"./LightTooltip-CcK1WQdJ.js";import"./MarkdownSynapse-DdvlGI58.js";import"./SkeletonButton-Cnars53-.js";import"./SkeletonInlineBlock-IWHLRfGq.js";import"./SkeletonTable-jKVXe2RG.js";import"./SkeletonParagraph-D00HqPxF.js";import"./JsonSchemaForm-Ci1XPju2.js";import"./GridLegacy-HaJ9PfwT.js";import"./HelpTwoTone-iDa5J-6_.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BttIBd-A.js";import"./_createAggregator-jO949tCC.js";import"./_baseMap-BQN9YKHj.js";import"./DateTimePicker-D3prLfbj.js";import"./useMobilePicker-IQJtMXmA.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-I9ib5FfS.js";import"./index-nbMMV5sL.js";import"./Chip-og5LeUeY.js";import"./Tabs-By0YdnD5.js";import"./KeyboardArrowRight-BXQFHTzo.js";import"./Autocomplete-kP8jbrCO.js";import"./usePreviousProps-CFwkF1El.js";import"./use-deep-compare-effect.esm-BeXf3d15.js";import"./TextWidget-9L16UqKp.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
