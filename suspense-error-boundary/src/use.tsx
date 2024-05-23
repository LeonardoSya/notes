import { use, Suspense } from "react"
import { ErrorBoundary } from 'react-error-boundary'


const Message = ({ messagePromise }) => {
  const content = use(messagePromise)
  return <p>Here is the message: {content}</p>
}

export function MessageContainer({ messagePromise }) {
  return (
    <ErrorBoundary fallback={<p>Somethiing went wrong</p>}>
      <Suspense fallback={<p>Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  )
}

