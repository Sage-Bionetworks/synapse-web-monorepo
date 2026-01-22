import{jG as p}from"./iframe-Du5t3CHa.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D_yD3bLq.js";import"./index-Chi_LkuB.js";import"./useEntity-CDeYLYkU.js";import"./pickBy-DTHw_VPu.js";import"./isString-Rffp6-yY.js";import"./_baseIteratee-46oxJqcI.js";import"./useQueries-CNFOi_mw.js";import"./useSuspenseQuery-DK6Y2lqg.js";import"./useInfiniteQuery-OCUbEd9y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DL2eN5zJ.js";import"./useSchema-Dhed1JST.js";import"./index-Do5oEy6O.js";import"./enums-Cn_koODh.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C0b7CaDS.js";import"./uniq-DVZOq7ho.js";import"./forEach-CWOCpBhE.js";import"./Add-C-3HoFcB.js";import"./Grid-CLZqbMyA.js";import"./ListItem-MxuW_3Fh.js";import"./listItemButtonClasses-DCXsY9V-.js";import"./ListItemIcon-DVp2GuzA.js";import"./MenuItem-B06U7Mh-.js";import"./ListItemText-BI_g0eEm.js";import"./ArrowUpward-CYw1fa-u.js";import"./ContentCopy-enO9p_Ip.js";import"./FormControlLabel-D53x5o1g.js";import"./Checkbox-DTNCLd3c.js";import"./SwitchBase-C1PWzrki.js";import"./FormGroup-CjkwJ_Mu.js";import"./RadioGroup-BxMz58Ap.js";import"./Radio-CuIvItJJ.js";import"./Slider-q8u7vbP-.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DbxOMK7D.js";import"./DialogBase-D3TgpDMO.js";import"./Close-CgG9ZltC.js";import"./HelpPopover-BWwj0Dbm.js";import"./MarkdownPopover-C4H2y9lI.js";import"./LightTooltip-BC8WsuZj.js";import"./MarkdownSynapse-DUHpTVRI.js";import"./SkeletonButton-JJ15ovuj.js";import"./SkeletonInlineBlock-E_CX27Fe.js";import"./SkeletonTable-KNaihl5A.js";import"./SkeletonParagraph-BlwsXkyr.js";import"./JsonSchemaForm-B3RX7sgf.js";import"./GridLegacy-DdWkmIVX.js";import"./HelpTwoTone-BQN-q6mF.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C-xswnXN.js";import"./_createAggregator-CGNHMkgd.js";import"./_baseMap-Dt6qK5dy.js";import"./DateTimePicker-Cx4r7bbq.js";import"./useMobilePicker-CgCN6xlR.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BH9hv3mE.js";import"./index-CNn6qoPA.js";import"./Chip-C9V27U36.js";import"./Tabs-D7olKNK9.js";import"./KeyboardArrowRight-bN2kJMi8.js";import"./Autocomplete-BrcUUDT8.js";import"./usePreviousProps-S4XlNOWE.js";import"./use-deep-compare-effect.esm-AaOUJiRt.js";import"./TextWidget-CU9Fv_09.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
