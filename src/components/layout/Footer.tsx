import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="common-footer">
      <h2 className="hide">푸터</h2>
      <div className="lang-change">
        <button type="button" className="is-active">
          <i className="fas fa-check"></i> 한국어
        </button>
        <button type="button" className="">
          <i className="fas fa-check"></i> English
        </button>
      </div>
    </footer>
  )
}

export default Footer
