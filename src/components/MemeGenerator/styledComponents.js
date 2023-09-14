import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 50px;
  margin-right: 60px;
  width: 70%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-family: 'roboto';
  font-size: 25px;
  color: #35469c;
`
export const Label = styled.label`
  font-family: 'roboto';
  font-size: 15px;
  color: #7e858e;
  margin-bottom: 6px;
`
export const Input = styled.input`
  font-family: 'roboto';
  font-size: 13px;
  color: #7e858e;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid #d7dfe9;
  width: 320px;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
`

export const Select = styled.select`
  border-radius: 7px;
  border: 1px solid #d7dfe9;
  width: 320px;
  padding: 10px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  border: none;
  padding: 10px;
  color: white;
  font-family: 'roboto';
  border-radius: 7px;
  margin-top: 20px;
  width: 150px;
  cursor: pointer;
  outline: none;
`

export const ImgContainer = styled.div`
  background-image: url(${props => props.url});
  height: 350px;
  width: 550px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
`

export const Top = styled.p`
  font-family: 'roboto';
  font-size: ${props => props.textSize}px;
  color: white;
  font-weight: 600;
`
