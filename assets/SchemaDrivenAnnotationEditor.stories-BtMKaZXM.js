import{jK as T}from"./iframe-C_QQiyp-.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DmRtOOg6.js";import"./index-r8ZA1smB.js";import"./useEntity-6A5ZntqV.js";import"./pickBy-BpeWfdL1.js";import"./isString-BdYGoJ81.js";import"./_baseIteratee-BG9mxM4I.js";import"./useQueries-DoPjc6Lo.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CpxJuNol.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bs13mTDt.js";import"./useSchema-DOiDmJVn.js";import"./index-IckKlSs_.js";import"./enums-Djj8isWa.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D_3l14Br.js";import"./uniq-SnY45GYK.js";import"./forEach-B8iwwgef.js";import"./Grid-rZAudfqA.js";import"./ListItem-zdk6i7tV.js";import"./listItemButtonClasses-DQREWixM.js";import"./ListItemIcon-DVlOX9Er.js";import"./MenuItem-BHFoVdQr.js";import"./ListItemText-DhCIPuSJ.js";import"./ArrowUpward-B4PQh8wD.js";import"./ContentCopy-DyvfN5-Z.js";import"./FormControlLabel-V09hgZrI.js";import"./Checkbox-DR4r2869.js";import"./SwitchBase-CIU1OHyQ.js";import"./FormGroup-B0CiHBOH.js";import"./RadioGroup-BUM6Eabk.js";import"./Radio-6Ycapv7W.js";import"./Slider-G2Rqu1XI.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DAIzDlJh.js";import"./DialogBase-GGKQvoi0.js";import"./Close-D2Pf2VjW.js";import"./HelpPopover--l72eRT0.js";import"./MarkdownPopover-BmdxKf0p.js";import"./LightTooltip-BdMbjEZX.js";import"./MarkdownSynapse-5kgLSApZ.js";import"./SkeletonButton-DVayUHLb.js";import"./SkeletonInlineBlock-CYb2G1Vd.js";import"./SkeletonTable-BMz6cgMa.js";import"./SkeletonParagraph-BKhiP51Z.js";import"./JsonSchemaForm-BExdiP7I.js";import"./GridLegacy-C6SuGHQJ.js";import"./HelpTwoTone-Cv0-HSCS.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-De0f3Ssf.js";import"./_createAggregator-zVSc9Z1B.js";import"./_baseMap-QVjVnVNG.js";import"./DateTimePicker-REfFJAgX.js";import"./useMobilePicker-B0SCrojO.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BdXYx_Hc.js";import"./index-vrcVr6xS.js";import"./Chip-B0GoZMHJ.js";import"./Tabs-BvYSaQbz.js";import"./KeyboardArrowRight-BdZv8R81.js";import"./Autocomplete-tnV7YhYM.js";import"./usePreviousProps-B5wmXc5A.js";import"./use-deep-compare-effect.esm-jYk1534Z.js";import"./TextWidget-Cr-F87zf.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
