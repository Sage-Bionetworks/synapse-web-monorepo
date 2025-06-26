import { PATH_BEFORE_2FA_REDIRECT_LOCALSTORAGE_KEY } from '@/utils/StorageKeys'
import { useLocalStorageValue } from '@react-hookz/web'

function usePathBefore2FARedirect() {
  return useLocalStorageValue<string>(PATH_BEFORE_2FA_REDIRECT_LOCALSTORAGE_KEY)
}

export default usePathBefore2FARedirect
