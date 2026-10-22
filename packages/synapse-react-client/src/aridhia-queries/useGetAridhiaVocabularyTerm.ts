import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PersonalisationApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/** Vocabulary term holding the confirmation shown after a data access request is submitted. */
export const DAR_MESSAGE_VOCABULARY_CODE = 'data-access-request-message'

/**
 * A FAIR vocabulary term, as returned by `GET /vocabularies/{code}`. The OpenAPI spec types the
 * response as a bare `object`, so the generated client returns `object`; this type documents
 * the properties the portal relies on.
 */
export type AridhiaVocabularyTerm = {
  code: string
  name: string
  /** How `value` should be interpreted, e.g. `markdown`. */
  grouping?: string
  value: string
}

/** A single FAIR vocabulary term (UI copy that C-Path maintains in the FAIR portal) by code. */
export function useGetAridhiaVocabularyTerm(
  code: string,
  options?: Partial<
    UseQueryOptions<AridhiaVocabularyTerm, AridhiaError, AridhiaVocabularyTerm>
  >,
): UseQueryResult<AridhiaVocabularyTerm, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<AridhiaVocabularyTerm>(
    keyFactory.vocabularyTerm(code),
    async configuration => {
      const personalisationApi = new PersonalisationApi(configuration)
      return (await personalisationApi.fairVocabulariesCodeGet({
        code,
      })) as AridhiaVocabularyTerm
    },
    options,
  )
}
