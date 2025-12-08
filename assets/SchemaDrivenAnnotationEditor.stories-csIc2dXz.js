import{jF as T}from"./iframe-DslgKmO_.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DQ0riKjg.js";import"./index-r8ZA1smB.js";import"./useEntity-D-cn9RYq.js";import"./pickBy-_TdkkdmD.js";import"./isString-_ruHcEcs.js";import"./_baseIteratee-cMERbMqv.js";import"./useQueries-Dxf5Gk_j.js";import"./useSuspenseQuery-x1rZi4HF.js";import"./useInfiniteQuery-DxxIkqas.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BhDRvNUr.js";import"./useSchema-B1JBUunb.js";import"./index-BJnpoXzc.js";import"./enums-Cd5hzcND.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BlNd2DLO.js";import"./uniq-CbOJCRU-.js";import"./forEach-B8iwwgef.js";import"./Add-Cn5HQLBa.js";import"./Grid-DPWZ7bDy.js";import"./ListItem-86j4_waz.js";import"./listItemButtonClasses-XKo5iVko.js";import"./ListItemIcon-dfnuwvew.js";import"./MenuItem-CTidO0-V.js";import"./ListItemText-C7Kwd-Xl.js";import"./ArrowUpward-IGoXuorC.js";import"./ContentCopy-7udDS5wC.js";import"./FormControlLabel-BxxRdktG.js";import"./Checkbox-C0eLrhG9.js";import"./SwitchBase-DhgbMpez.js";import"./FormGroup-BRc6nzOn.js";import"./RadioGroup-hacywsh9.js";import"./Radio-4ssKnMg3.js";import"./Slider-DVXAfxH4.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CWzD-n3R.js";import"./DialogBase-Ityd6EiB.js";import"./Close-3QTznoYW.js";import"./HelpPopover-D-66GZ4O.js";import"./MarkdownPopover-Efr0b0ny.js";import"./LightTooltip-DtnUKaEX.js";import"./MarkdownSynapse-BtLlVZBF.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonTable-B6rYfEE0.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./JsonSchemaForm-BbJLcxjJ.js";import"./GridLegacy-Bdi6XbfG.js";import"./HelpTwoTone-ChRJMxqh.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-I06BuUfO.js";import"./_createAggregator-DFbLgwOP.js";import"./_baseMap-C0xLoNYD.js";import"./DateTimePicker-B4pLXqrh.js";import"./useMobilePicker-B3h1Y76J.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-B8fX64h3.js";import"./index-CeAJJ3j5.js";import"./Chip-BUIb0Z0i.js";import"./Tabs-Dii4DhJL.js";import"./KeyboardArrowRight-DOVLa2zs.js";import"./Autocomplete-CwtCP0qR.js";import"./usePreviousProps-D79KkPg-.js";import"./use-deep-compare-effect.esm-BXsVt7_r.js";import"./TextWidget-DhDE2lDL.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
