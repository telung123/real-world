import React, { FC } from 'react'

const Form: FC = () => {
  return (
    <>
      <div className="container page-form">
        <div className="common-form">
          <h2 className="form-title">글 등록하기</h2>
          <form>
            <fieldset>
              <div className="form-row">
                <label>
                  <span className="form-head">제목</span>
                  <input
                    type="text"
                    name="title"
                    placeholder="제목"
                    className="txt large block"
                    value=""
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">설명</span>
                  <input
                    type="text"
                    name="description"
                    placeholder="설명"
                    className="txt large block"
                    value=""
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">내용</span>
                  <textarea
                    cols={60}
                    rows={10}
                    name="body"
                    placeholder="내용"
                    className="txt large block"
                  ></textarea>
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">태그</span>
                  <input
                    type="text"
                    name="tag"
                    placeholder="태그"
                    className="txt large block"
                    value=""
                  />
                </label>
              </div>
              <div className="form-action">
                <button type="submit" className="btn large primary">
                  등록
                </button>
                <button type="button" className="btn large">
                  취소
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
