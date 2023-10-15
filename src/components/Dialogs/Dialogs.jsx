import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( dialog => <DialogItem name = {dialog.name} id={dialog.id} />)

  let messagesElements = state.messages.map( message => <Message message = {message.message} />)

  let newMessageBody = state.newMessageBody;
 
  let addNewMessage = (values) => {
    props.sendMessage(values, newMessageBody);
  }

  if (!props.isAuth == false) return <redirect  to = {'/login'}/>

  return (
    <div className={s.dialogs}>
      <div className ={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>

      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>

  )
}

export default Dialogs;