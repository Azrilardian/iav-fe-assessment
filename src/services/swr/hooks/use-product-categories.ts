import { useCustomSWR } from '../helpers/custom-swr'
import { oneMonth } from '../helpers/millisecond-intervals'

export const useProductCategoryList = () => {
  const { isLoading, data } = useCustomSWR<string[]>(
    {
      path: `products/category-list`
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      dedupingInterval: oneMonth,
      keepPreviousData: true
    }
  )

  return {
    isLoading,
    categories: data
  }
}
