import { AliasCheckResponse } from '@sage-bionetworks/synapse-types'

// Requirements for a valid username (set by backend)
// https://github.com/Sage-Bionetworks/Synapse-Repository-Services/blob/f54c903e6e724b9567ebfa365200ef7f69b807a0/lib/models/src/main/java/org/sagebionetworks/repo/model/principal/AliasEnum.java#L15

export const VALID_USERNAME_DESCRIPTION =
  'User names can contain letters, numbers, dot (.), dash (-) and underscore (_) and must be at least 3 characters long.'

export function validateAlias(aliasCheckResponse: AliasCheckResponse) {
  if (!aliasCheckResponse.valid) {
    throw new Error(
      `Sorry, that username is not valid. ${VALID_USERNAME_DESCRIPTION}`,
    )
  }
  if (!aliasCheckResponse.available) {
    throw new Error('Sorry, that username has already been taken.')
  }
}
