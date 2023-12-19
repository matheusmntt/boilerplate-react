import { QueryClient, QueryClientProvider } from 'react-query'

export const QueryClientContext = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
