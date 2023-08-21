import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
import AuthContext from '../../store/Auth-context';
import { useNavigate } from 'react-router-dom';
const ProfileForm = () => {
  const newPasswordInputRef=useRef();
  const authCtx=useContext(AuthContext);
  const history=useNavigate();
  const alt = () =>{
    history('/');
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword=newPasswordInputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAKqFeOETMUmLT1WIt6gLvnW1aXBuI3J0g',{
    method:'POST',
    body:JSON.stringify({
      idToken:authCtx.token,
      password:enteredNewPassword,
      returnSecureToken:false,
    }),
    headers:{
      'Content-Type':'application/json'
    }
  }
    ).then(res=>{alert('successfully change password');alt();})
    .catch(err=>alert('failed to change password...'))
  }
  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
