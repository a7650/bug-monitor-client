import React, { useCallback, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'

const Home: React.FunctionComponent<RouteComponentProps> = (props) => {
  let [count, setCount] = useState(1)
  const handleState = useCallback(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    handleState()
  }, [handleState])
  return <div>{count}</div>
}

export default Home
