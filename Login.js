import './login.css';
const Login =()=>{
  return(
    <>
    <div class="wrapper">
      <div class="button">
        <input type="checkbox" class="button--checkbox" id="menu-toggle" />
        <div class="button__cta">
          <label for="menu-toggle" class="card__button">
            <span class="card__button--signup">Sign Up</span>
          </label>
        </div>
        <div class="button__cta">
          <label for="menu-toggle" class="card__button">
            <span class="card__button--login">Login</span>
          </label>
        </div>
        <div class="card">
          <form action="">
            <input type="text" placeholder="First Name" id="fname" />
            <input type="text" placeholder="Last Name" id="lname" />
            <input type="email" placeholder="Email" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <button class="btn">
              <span class="btn__signup">Sign Up</span>
              <span class="btn__login">Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login;