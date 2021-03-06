import App from '@/App'
import ErrorFallback from '@/components/ErrorFallback'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { Configuration } from 'swr/dist/types'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DNS,
  integrations: [new Integrations.BrowserTracing()],
})

const swrConfig: Partial<Configuration> = {
  revalidateOnFocus: false,
  onErrorRetry: (error, key) => {
    if (error?.response?.status) {
      const { status } = error.response
      if (status === 401) return false
    }
  },
  onError: (error, key) => {
    if (error?.response?.status) {
      const { status } = error.response

      if (status !== 403 && status !== 404) {
        Sentry.captureException(error)
      }

      switch (status) {
        case 504:
        case 503:
          return alert('서버에 문제가 생겼어요 -_-')
      }
    }
  },
}

ReactDOM.render(
  <Sentry.ErrorBoundary fallback={ErrorFallback}>
    <BrowserRouter>
      <SWRConfig value={swrConfig}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </Sentry.ErrorBoundary>,

  document.getElementById('root'),
)
