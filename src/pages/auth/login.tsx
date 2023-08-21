import { createEffect, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Link } from "@solidjs/router";
import { ThemeContext } from "../../main";

interface StateType {
  email: string;
  password: string;
}

export default function Login() {
  const [state, setState] = createStore<StateType>({ email: "", password: "" });

  createEffect(() => {
    console.log(state);
  }, [state]);
  const [theme, changeTheme] = useContext(ThemeContext);

  return (
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-primary shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <h1 class='text-2xl text-primary-content font-semibold'>Login</h1>
            <div class='divide-y divide-gray-200'>
              <div class='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                <div class='relative'>
                  <input
                    autocomplete='off'
                    id='email'
                    name='email'
                    type='text'
                    class='peer placeholder-transparent bg-primary h-10 w-full  border-b-2 border-secondary text-primary-content focus:outline-none focus:borer-rose-600 mb-4'
                    placeholder='Email address'
                    value={state.email}
                    onChange={(event) => {
                      setState("email", event.target.value);
                    }}
                  />
                  <label
                    for='email'
                    class='absolute left-0 -top-3.5 text-primary-content text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary-content peer-focus:text-sm'
                  >
                    Email Address
                  </label>
                </div>
                <div class='relative'>
                  <input
                    autocomplete='off'
                    id='password'
                    name='password'
                    type='password'
                    class='peer placeholder-transparent bg-primary h-10 w-full  border-b-2 border-secondary text-primary-content focus:outline-none focus:borer-rose-600 mb-4'
                    placeholder='Password'
                    value={state.password}
                    onChange={(event) => {
                      setState("password", event.target.value);
                    }}
                  />
                  <label
                    for='password'
                    class='absolute left-0 -top-3.5 text-primary-content text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary-content peer-focus:text-sm'
                  >
                    Password
                  </label>
                </div>
                <div class='relative'>
                  <button
                    // onClick={(event) => postData(event)}
                    data-theme={theme()}
                    class='btn btn-secondary mb-4'
                  >
                    Submit
                  </button>
                  <p class='mt-4 text-grey-600 text-sm'>
                    Don't have an account
                    <Link
                      class='ml-1 text-accent-content font-bold hover:underline'
                      href='/auth/signup'
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

