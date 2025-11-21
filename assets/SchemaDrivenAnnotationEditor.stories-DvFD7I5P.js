import{jJ as T}from"./iframe-C0_MGelw.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BpAiZVfB.js";import"./index-r8ZA1smB.js";import"./useEntity-CYnvRdHh.js";import"./pickBy-B-SyVJH7.js";import"./isString-BSZ9d8-t.js";import"./_baseIteratee-DJkPjYy-.js";import"./useQueries-D7fqOE-j.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-G1IM-AGg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-hXwl9wND.js";import"./useSchema-DdQTGjzv.js";import"./index-C9Wo40y0.js";import"./enums-CwhHpyW2.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C-Rt3ZUt.js";import"./uniq-Bja6NdAf.js";import"./forEach-B8iwwgef.js";import"./Grid-Psj3QFGi.js";import"./ListItem-WIMDd-Tf.js";import"./listItemButtonClasses-Crgbwq92.js";import"./ListItemIcon-BlZYmarf.js";import"./MenuItem-VpU5uB21.js";import"./ListItemText-B4tdPKIF.js";import"./ArrowUpward-DA119_9Z.js";import"./ContentCopy-d08e82FJ.js";import"./FormControlLabel-CGDmQ30x.js";import"./Checkbox-AKt-q5ZS.js";import"./SwitchBase-BZXMhFqc.js";import"./FormGroup-BO5AsbJb.js";import"./RadioGroup-CVH0rMxP.js";import"./Radio-tyCeAlub.js";import"./Slider-Chy7Rbgi.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BcmQv4r_.js";import"./DialogBase-DRZu8qiJ.js";import"./Close-Br2x6lcO.js";import"./HelpPopover-CgR11bAO.js";import"./MarkdownPopover-Bfocou5T.js";import"./LightTooltip-I4_xvDt3.js";import"./MarkdownSynapse-BNFairzk.js";import"./SkeletonButton-DjhR7sxh.js";import"./SkeletonInlineBlock-yTERZu3L.js";import"./SkeletonTable-DS1wvkaV.js";import"./SkeletonParagraph-BpdEaVGd.js";import"./JsonSchemaForm-DWeq-LT4.js";import"./GridLegacy-LLN4p7vN.js";import"./HelpTwoTone-CjyOHhZs.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy--bTifnbv.js";import"./_createAggregator-D_0udUXj.js";import"./_baseMap-BujdLhHW.js";import"./DateTimePicker-CrZ7YeD_.js";import"./useMobilePicker-DiCpmb6q.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-ymwbD-ER.js";import"./index-B6X4B_B8.js";import"./Chip-DoXtLwjl.js";import"./Tabs-5qZ0wNOZ.js";import"./KeyboardArrowRight-4XCdniRx.js";import"./Autocomplete-BUvaMy8N.js";import"./usePreviousProps-BQBA_9xG.js";import"./use-deep-compare-effect.esm-D2R_anRu.js";import"./TextWidget-C66sMSEO.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
