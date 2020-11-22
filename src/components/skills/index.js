import DevIcon from './DevIcon';
import Tick from '../common/Tick';

const Skills = () => {
  return (
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div class="my-auto">
        <h2 class="mb-5">Skills</h2>

        <h4 class="mb-3">Development Environment</h4>
        <ul class="fa-ul mb-4">
          <li>
            <Tick /> Manjaro i3wm Community Edition
          </li>
          <li>
            <Tick /> Highly customized VS Code with self crafted theme
          </li>
          <li>
            <Tick /> Bash, Oh My Zsh
          </li>
        </ul>

        <h4 class="mb-3">Frameworks & Tools</h4>
        <div class="dev-icons mb-3">
          <DevIcon className="fab fa-js-square" />
          <DevIcon className="fab fa-react" />
          <DevIcon className="fab fa-node-js" />
          <DevIcon className="fab fa-github" />
          <DevIcon>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 172 172"
            >
              <g transform="translate(-25.8,-25.8) scale(1.2,1.2)">
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#868e96">
                    <path
                      class="icon"
                      d="M21.5,35.83333v100.33333c0,7.91917 6.41417,14.33333 14.33333,14.33333h100.33333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-100.33333c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333h-100.33333c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333zM97.93967,89.23217h-15.179v46.9345h-12.2335v-46.9345h-14.86367v-10.39883h42.27617zM100.319,133.48633v-12.54883c0,0 6.85133,5.16717 15.07867,5.16717c8.22733,0 7.90483,-5.375 7.90483,-6.11317c0,-7.8045 -23.29883,-7.8045 -23.29883,-25.0905c0,-23.51383 33.9485,-14.233 33.9485,-14.233l-0.42283,11.17283c0,0 -5.69033,-3.79833 -12.126,-3.79833c-6.4285,0 -8.7505,3.06017 -8.7505,6.32817c0,8.43517 23.51383,7.5895 23.51383,24.56733c0,26.144 -35.84767,14.54833 -35.84767,14.54833z"
                    ></path>
                  </g>
                  <path d="" fill="none"></path>
                </g>
              </g>
            </svg>
          </DevIcon>
          <DevIcon className="fab fa-docker" />
          <DevIcon>
            <svg version="1.1" viewBox="0 0 226 226">
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ 'mix-blend-mode': 'normal' }}
              >
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g>
                  <path
                    class="icon"
                    d="M122.41667,18.83333l-94.16667,94.16667l28.25,28.25l122.41667,-122.41667z"
                    fill="#868e96"
                  ></path>
                  <path
                    class="icon"
                    d="M178.91667,103.58333l-51.79167,51.79167l-28.25,-28.25l23.54167,-23.54167z"
                    fill="#868e96"
                  ></path>
                  <rect
                    class="icon"
                    x="-12.72895"
                    y="33.94062"
                    transform="rotate(-45.001) scale(4.70833,4.70833)"
                    width="8.485"
                    height="8.485"
                    fill="#484848"
                  ></rect>
                  <path
                    class="icon"
                    d="M178.91667,207.16667h-56.5l-23.54167,-23.54167l28.25,-28.25z"
                    fill="#666666"
                  ></path>
                  <path
                    class="icon"
                    d="M98.875,183.625l42.375,-14.125l-14.125,-14.125z"
                    fill="#333333"
                  ></path>
                </g>
              </g>
            </svg>
          </DevIcon>

          <DevIcon>
            <svg viewBox="0 0 128 128">
              <path
                class="icon"
                fill="#868e96"
                d="M108.2 64.8c-.1-.1-.2-.2-.4-.2l-.1-.1c-.1-.1-.2-.1-.2-.2l-.1-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.1 0-.2-.1l-.3-.1c-.1 0-.1 0-.2-.1l-.3-.1h-.1l-.4-.1h-.2c-.1 0-.2 0-.3-.1h-2.3c-.6-13.3.6-26.8-2.8-39.6 12.9-4.6 2.8-22.3-8.4-14.4-7.4-6.4-17.6-7.8-28.3-7.8-10.5.7-20.4 2.9-27.4 8.4-2.8-1.4-5.5-1.8-7.9-1.1v.1c-.1 0-.3.1-.4.2-.1 0-.3.1-.4.2h-.1c-.1 0-.2.1-.4.2h-.1l-.3.2h-.1l-.3.2h-.1l-.3.2s-.1 0-.1.1l-.3.2s-.1 0-.1.1l-.3.2s-.1 0-.1.1l-.3.2-.1.1c-.1.1-.2.1-.2.2l-.1.1-.2.2-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1-.1.3s0 .1-.1.1l-.1.3s0 .1-.1.1l-.1.3s0 .1-.1.1l-.1.3s0 .1-.1.1c.4.3.4.4.4.4v.1l-.1.3v.1c0 .1 0 .2-.1.3v3.1c0 .1 0 .2.1.3v.1l.1.3v.1l.1.3s0 .1.1.1l.1.3s0 .1.1.1l.1.3s0 .1.1.1l.2.3s0 .1.1.1l.2.3s0 .1.1.1l.2.3.1.1.3.3.3.3h.1c1 .9 2 1.6 4 2.2v-.2c-4.2 12.6-.7 25.3-.5 38.3-.6 0-.7.4-1.7.5h-.5c-.1 0-.3 0-.5.1-.1 0-.3 0-.4.1l-.4.1h-.1l-.4.1h-.1l-.3.1h-.1l-.3.1s-.1 0-.1.1l-.3.1-.2.1c-.1 0-.2.1-.2.1l-.2.1-.2.1c-.1 0-.2.1-.2.1l-.2.1-.4.3c-.1.1-.2.2-.3.2l-.4.4-.1.1c-.1.2-.3.4-.4.5l-.2.3-.3.6-.1.3v.3c0 .5.2.9.9 1.2.2 3.7 3.9 2 5.6.8l.1-.1c.2-.2.5-.3.6-.3h.1l.2-.1c.1 0 .1 0 .2-.1.2-.1.4-.1.5-.2.1 0 .1-.1.1-.2l.1-.1c.1-.2.2-.6.2-1.2l.1-1.3v1.8c-.5 13.1-4 30.7 3.3 42.5 1.3 2.1 2.9 3.9 4.7 5.4h-.5c-.2.2-.5.4-.8.6l-.9.6-.3.2-.6.4-.9.7-1.1 1c-.2.2-.3.4-.4.5l-.4.6-.2.3c-.1.2-.2.4-.2.6l-.1.3c-.2.8 0 1.7.6 2.7l.4.4h.2c.1 0 .2 0 .4.1.2.4 1.2 2.5 3.9.9 2.8-1.5 4.7-4.6 8.1-5.1l-.5-.6c5.9 2.8 12.8 4 19 4.2 8.7.3 18.6-.9 26.5-5.2 2.2.7 3.9 3.9 5.8 5.4l.1.1.1.1.1.1.1.1s.1 0 .1.1c0 0 .1 0 .1.1 0 0 .1 0 .1.1h2.1000000000000005s.1 0 .1-.1h.1s.1 0 .1-.1h.1s.1 0 .1-.1c0 0 .1 0 .1-.1l.1-.1s.1 0 .1-.1l.1-.1h.1l.2-.2.2-.1h.1l.1-.1h.1l.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1v-.1s0-.1.1-.1v-.1s0-.1.1-.1v-.1s0-.1.1-.1v-1.4000000000000001s-.3 0-.3-.1l-.3-.1v-.1l.3-.1s.2 0 .2-.1l.1-.1v-2.1000000000000005s0-.1-.1-.1v-.1s0-.1-.1-.1v-.1s0-.1-.1-.1c0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1l-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1v-.1l-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1c2-1.9 3.8-4.2 5.1-6.9 5.9-11.8 4.9-26.2 4.1-39.2h.1c.1 0 .2.1.2.1h.30000000000000004s.1 0 .1.1h.1s.1 0 .1.1l.2.1c1.7 1.2 5.4 2.9 5.6-.8 1.6.6-.3-1.8-1.3-2.5zm-72.2-41.8c-3.2-16 22.4-19 23.3-3.4.8 13-20 16.3-23.3 3.4zm36.1 15c-1.3 1.4-2.7 1.2-4.1.7 0 1.9.4 3.9.1 5.9-.5.9-1.5 1-2.3 1.4-1.2-.2-2.1-.9-2.6-2l-.2-.1c-3.9 5.2-6.3-1.1-5.2-5-1.2.1-2.2-.2-3-1.5-1.4-2.6.7-5.8 3.4-6.3.7 3 8.7 2.6 10.1-.2 3.1 1.5 6.5 4.3 3.8 7.1zm-7-17.5c-.9-13.8 20.3-17.5 23.4-4 3.5 15-20.8 18.9-23.4 4zM41.7 17c-1.9 0-3.5 1.7-3.5 3.8 0 2.1 1.6 3.8 3.5 3.8s3.5-1.7 3.5-3.8c0-2.1-1.5-3.8-3.5-3.8zm1.6 5.7c-.5 0-.8-.4-.8-1 0-.5.4-1 .8-1 .5 0 .8.4.8 1 0 .5-.3 1-.8 1zM71.1 16.1c-1.9 0-3.4 1.7-3.4 3.8 0 2.1 1.5 3.8 3.4 3.8s3.4-1.7 3.4-3.8c0-2.1-1.5-3.8-3.4-3.8zm1.6 5.6c-.4 0-.8-.4-.8-1 0-.5.4-1 .8-1s.8.4.8 1-.4 1-.8 1z"
              />
            </svg>
          </DevIcon>

          <DevIcon className="fab fa-sass" />
          <DevIcon className="fab fa-less" />
          <DevIcon className="fab fa-gulp" />
          <DevIcon className="fab fa-grunt" />
          <DevIcon className="fab fa-npm" />
          <DevIcon className="fab fa-html5" />
          <DevIcon className="fab fa-css3-alt" />
        </div>
        <h4 class="mb-3">And More...</h4>

        <div class="fa-ul mb-0">
          <li>
            <Tick /> Redux
          </li>
          <li>
            <Tick /> Dartlang
          </li>
          <li>
            <Tick /> MongoDB
          </li>
          <li>
            <Tick /> Java
          </li>
          <li>
            <Tick /> PHP
          </li>
          <li>
            <Tick /> C++
          </li>
          <li>
            <Tick /> SQL
          </li>
          <li>
            <Tick /> MySQL
          </li>
          <li>
            <Tick /> PostgreSQL
          </li>
          <li>
            <Tick /> Git
          </li>
          <li>
            <Tick /> Linux
          </li>
          <li>
            <Tick /> Java Server Pages
          </li>
        </div>
      </div>
    </section>
  );
};

export default Skills;
