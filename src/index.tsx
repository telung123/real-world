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
  onErrorRetry: (err, key, config, revalidate, { retryCount }) => {
    if (retryCount >= 3) {
      return
    }

    switch (err.status) {
      case 404:
      case 504:
        return false
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
