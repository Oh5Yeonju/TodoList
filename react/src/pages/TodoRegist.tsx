import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function TodoRegist() {
  const [titleInput, setTitleInput] = useState<string>('');
  const [contentInput, setContentInput] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:33088/api/todolist', {
        title: titleInput,
        content: contentInput
      })
      return response.data;
      navigate('/');
      // finally
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <PageStyle id='page'>
        <h1>TODO 등록</h1>

        <form
          className='regist-form'
          onSubmit={handleSubmit}
        >
            <div className='regist-title-container'>
              <label htmlFor='regist-title'>TITLE</label>
              <input 
                type='text' 
                id='regist-title' 
                placeholder='20자 이내' 
                maxLength={20}
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </div>

            <div className='regist-content-container'>
              <label htmlFor='regist-content'>CONTENT</label>
              <textarea    
                id='regist-content' 
                className='regist-content' 
                placeholder='내용을 작성해주세요.'
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
              />
            </div>

          <button
            className='create-btn'
            >ADD
          </button>
        </form>
      </PageStyle>
    </>
  )
}

const PageStyle = styled.div`
.regist-form {
  background-color: #fff;
  width: 500px;
  max-width: calc(100% - 110px);
  height: 740px;
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
}

label {
  display: block;
  margin-bottom: 8px;
}

.regist-title-container {
  margin-bottom: 10px;
}

.regist-title-container input {
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
  width: 100%;
  border: solid 0.5px;
  border-radius: 10px;
}

.regist-content-container {
  margin-bottom: 10px;
}
.regist-content-container textarea {
  padding: 20px 30px;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.6;
  resize: none;
  width: 100%;
  min-height: 40vh;
  border: solid 0.5px;
  border-radius: 10px;
}

.create-btn {
  width: 244px;
  margin-top: 30px;
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  box-sizing: border-box;
}
.create-btn:hover {
  border: 1px solid #2d77af;
  background-color: white;
  color: #2d77af;
}
`