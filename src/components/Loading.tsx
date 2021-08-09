import React, { FC } from 'react'
import classNames from 'classnames'

interface LoadingProps {
  fullCover?: boolean
}
const Loading: FC<LoadingProps> = ({ fullCover = false }) => {
  return (
    <div
      className={classNames({
        loading: true,
        'full-cover': fullCover,
      })}
    >
      <i>Loading...</i>
    </div>
  )
}

export default Loading
