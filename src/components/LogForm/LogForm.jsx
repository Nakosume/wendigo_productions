export function LogForm (props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit
  } = props

  return (
    <form
      id='log-form'
      className='forms-container'
      onSubmit={handleSubmit}
    >
      <h1 className='logTitle'>Log In</h1>
      <div className='user-cont'>
        <p>User name / Email</p>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='password-cont'>
        <p>Password</p>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <h2 className='fgt-password'>Forget password?</h2>
      <button type='submit'>Log In</button>
    </form>
  )
}
