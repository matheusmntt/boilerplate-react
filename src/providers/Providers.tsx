import { QueryClientContext } from './queryClient'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientContext>{children}</QueryClientContext>
}
