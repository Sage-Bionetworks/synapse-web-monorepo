import{jJ as T}from"./iframe-B9toAp7a.js";import{S as C}from"./SchemaDrivenAnnotationEditor-C3OXz8dh.js";import"./index-r8ZA1smB.js";import"./useEntity-BIZR8hFL.js";import"./pickBy-Vjm6-h7B.js";import"./isString-BndzlJTD.js";import"./_baseIteratee-BGiUzQ8d.js";import"./useQueries-Yqgl-oYp.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DGLpPH-X.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMC4ZNQp.js";import"./useSchema-C9tDPHyS.js";import"./index-C1WjC0z7.js";import"./enums-BV4Qgx_I.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BzUqFgra.js";import"./uniq-fknARjdf.js";import"./forEach-B8iwwgef.js";import"./Grid-DRzP1o43.js";import"./ListItem-DiEkK3Bj.js";import"./listItemButtonClasses-2uVI1Omq.js";import"./ListItemIcon-3JWfCgbT.js";import"./MenuItem-BZ_VEH8F.js";import"./ListItemText-6Rvp6G_q.js";import"./ArrowUpward-DHT2LWTt.js";import"./ContentCopy-CgfI0bJW.js";import"./FormControlLabel-g_NAfEdo.js";import"./Checkbox-C2_MHdw4.js";import"./SwitchBase-Bmf2bXZK.js";import"./FormGroup-CjT-1FZJ.js";import"./RadioGroup-tTnyfdgM.js";import"./Radio-BaCOZ9CR.js";import"./Slider-DcUIj3TK.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B5Wo4CTL.js";import"./DialogBase-DGl7drlj.js";import"./Close-eKJYJFPR.js";import"./HelpPopover-ChAtcQyP.js";import"./MarkdownPopover-nm59-MMf.js";import"./LightTooltip-CxCt9or1.js";import"./MarkdownSynapse-Dm9xpmpj.js";import"./SkeletonButton-D4dnbEqI.js";import"./SkeletonInlineBlock-DARsQc6u.js";import"./SkeletonTable-Ci-z4Kjh.js";import"./SkeletonParagraph-DDetyv-w.js";import"./JsonSchemaForm-BkGID9I_.js";import"./GridLegacy-DACCnVKf.js";import"./HelpTwoTone-D3Y0JXjR.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CAa5hQHs.js";import"./_createAggregator-D0Gr6slg.js";import"./_baseMap-miNkUa17.js";import"./DateTimePicker-dOMS_ERh.js";import"./useMobilePicker-CdoOr-vj.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DRZjj84G.js";import"./index-D8ZnctAR.js";import"./Chip-CudXwLxi.js";import"./Tabs-DrYQ3s8E.js";import"./KeyboardArrowRight-DPhdltBj.js";import"./Autocomplete-Dc81HvVI.js";import"./usePreviousProps-CrPZP43x.js";import"./use-deep-compare-effect.esm-Cl2Ri4if.js";import"./TextWidget-DRdKYKPW.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
